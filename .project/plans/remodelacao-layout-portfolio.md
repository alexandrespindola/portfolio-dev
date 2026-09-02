# Remodelação de layout — portfolio-dev

## Context

O site é uma landing page única (`apps/web/src/pages/index.astro`) com 7 seções empilhadas verticalmente, e a pergunta que originou este plano foi: *"a parte do portfólio está muito vertical, ou está bom manter assim?"*

**Resposta: está muito vertical, e o portfólio é o pior caso.** `Projects.astro` renderiza 9 projetos num `flex flex-col gap-y-16` — pilha vertical, não grid. Só 3 dos 9 têm `image`, e o componente alterna entre duas larguras dependendo disso (`image ? "md:w-1/2" : "w-full"`), produzindo ritmo visual quebrado: 3 linhas em 50/50 intercaladas com 6 linhas full-bleed. São ~6 telas de scroll para a seção que um recrutador escaneia em 20 segundos.

Duas causas estruturais amplificam o problema em toda a página:

- **`SectionContainer.astro` trava tudo em 896px** (`md:max-w-2xl lg:max-w-4xl`). Nenhum grid de 3 colunas cabe. Em viewport de 1440px+ sobra metade da tela vazia.
- **Metade dos utilitários de cor é código morto.** `Layout.astro:22` fixa `class="dark"` e `Layout.astro:61` fixa `text-white`, mas quase todo componente carrega o par light+`dark:` completo. `ThemeToggle.astro` (121 linhas) nunca foi importado. Remodelar carregando essa duplicação dobra o trabalho.

**Resultado esperado:** portfólio em destaque + grid de 3 colunas, largura por seção, ~50% menos altura de página, e um conjunto de primitivos compartilhados (`Card`, `Chip`) que elimina a triplicação de chrome de card e as duas variantes divergentes de badge.

**Restrição de escopo:** é *re-layout*, não redesign. A linguagem visual definida em `ARCHITECTURE.md` ("dark-first design with green accent colors", Onest, `rounded-2xl`, chips) se mantém. Sem biblioteca de animação, sem UI de filtro, sem modais — nada disso existe hoje e nada disso foi pedido.

### Decisões já fechadas com o usuário

| Decisão | Escolha |
|---|---|
| Portfólio | Destaque (2 projetos) + grid de 3 colunas (7 projetos) |
| Largura | Escala por seção: `prose` para texto, `wide` para grids |
| Tema | Dark-only — remover pares light, deletar `ThemeToggle` |
| Escopo | Re-layout + bugs que afetam o visual (refactors sem efeito visual ficam fora) |
| Capas | O usuário produzirá as 6 screenshots faltantes |

---

## Bloqueador antes de qualquer commit

`apps/web/src/components/Hero.astro` (modificado, não commitado) já aponta os dois links de CV para `/cv/CV-{EN,ES}-ALEXANDRE-SPINDOLA-AI-Native-Full-Stack-Engineer-02-09-2026.pdf`, mas **`apps/web/public/cv/` está untracked** — nunca recebeu `git add`. Não há regra de `*.pdf` nem `cv/` no `.gitignore`; é omissão, não intenção.

→ `git add apps/web/public/cv/` antes de commitar `Hero.astro`. Caso contrário: dois 404 em produção nos links de CV do Hero.

---

## Etapa 0 — Assets que o usuário precisa produzir

6 capas faltantes, para os projetos que hoje têm `image: undefined` em `apps/web/src/data/projects.ts`:

| Projeto | Nome de arquivo sugerido |
|---|---|
| Gnosis International Websites — Germany, Netherlands & Romania | `gnosis-international.webp` |
| RPA Migration — UiPath to n8n + Puppeteer | `rpa-migration.webp` |
| Gnosis Platform — Multilingual Digital Library | `gnosis-platform.webp` |
| Gentlecan — Dog Grooming Management System | `gentlecan.webp` |
| Holded Core — Enterprise Resource Integration | `holded-core.webp` |
| IFV — WordPress Migration & Institutional Platform | `ifv.webp` |

**Especificação:** 1200×750 (16:10), WebP, ≤120 KB. O grid usa `object-cover` num box de proporção fixa, então desvios de proporção não quebram o layout — mas cortam nas bordas; o conteúdo importante deve ficar centralizado.

**Destino:** `apps/web/public/projects/`. Mover também as 3 capas existentes de `https://flash-cdn.pages.dev/assets/portfolio/*.webp` para essa pasta, referenciando `/projects/<nome>.webp`. Motivo: fonte única em vez de metade local e metade em CDN externa, e o site é estático em Cloudflare Pages — o custo é zero. (`astro.config.mjs` tem o image service em `noop`, então não há otimização automática em nenhum dos dois casos; o peso do arquivo é responsabilidade da exportação.)

O layout deve funcionar antes das imagens chegarem: `ProjectCard` renderiza um box de capa com fundo sólido e o título centralizado quando `image` é ausente, em vez de colapsar a altura. Isso mantém o grid regular durante a implementação.

---

## Etapa 1 — Escala de largura (`SectionContainer`)

**Arquivo:** `apps/web/src/components/SectionContainer.astro` (11 linhas)

Hoje: `class={`section scroll-m-20 w-full mx-auto container px-4 sm:px-6 lg:max-w-4xl md:max-w-2xl ${className}`}`

Três problemas num só: `container` empilhado com dois overrides de `max-w` (redundante e conflitante), teto de 896px, e `${className}` sem default → as 5 seções que `index.astro` chama sem `class` renderizam `class="... undefined"` literal.

Reescrever com prop `size`:

- `size="prose"` → `max-w-3xl` (768px) — **default**. Hero, Experience, About. Mantém a linha de texto em ~75 caracteres.
- `size="wide"` → `max-w-6xl` (1152px). Projects, Services, TechStack.

Remover `container`, manter `w-full mx-auto px-4 sm:px-6 scroll-m-20`, e dar default `''` a `className`.

Aplicar o mesmo default `''` em `TitleSection.astro` (4 linhas), que lê `Astro.props.className` enquanto `index.astro` nunca passa `className` — mesmo bug de `undefined`.

`Footer.astro` repete o stack de largura à mão (`container lg:max-w-4xl md:max-w-2xl`); trocar por `SectionContainer` ou alinhar ao novo `max-w-6xl` para não desalinhar com as seções largas.

---

## Etapa 2 — Primitivos compartilhados

Hoje o mesmo chrome de card é escrito à mão em 3 lugares e o mesmo chip em 2 variantes divergentes. Como o re-layout toca todos esses pontos de qualquer forma, extrair primeiro evita reescrever a mesma string 10 vezes.

### `Card.astro` — reescrever (hoje é órfão e quebrado)

`apps/web/src/components/Card.astro` (63 linhas) é resíduo do template `astro new`: CSS-scoped, referencia `var(--accent-gradient)` e `var(--accent-light)` que não existem em nenhum lugar do projeto, e nunca é importado. Reescrever do zero como o wrapper de chrome único:

```
rounded-2xl border border-gray-800 bg-gray-900 shadow-sm
```

Props: `class` (para padding e overrides), `hover` (liga `transition-all duration-300 hover:shadow-xl hover:-translate-y-1`).

Consumidores: `Services.astro:10`, os 6 blocos de `TechStack.astro`, o CTA em `index.astro:75`, e o novo `ProjectCard`.

### `Chip.astro` + `TagList.astro` — criar

Duas variantes divergentes hoje:
- `Services.astro:50` / `TechStack.astro` → `inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium`, ícone `h-3 w-3` (Services) ou `h-4 w-4` (TechStack)
- `Projects.astro:32` → `flex gap-x-2 rounded-full text-xs py-1 px-2`, ícone `size-4`, **sem `items-center`** → ícone e texto desalinham

`Chip.astro` unifica na variante do Services com ícone `h-3.5 w-3.5`. `TagList.astro` recebe `tags` + `max` e renderiza os chips + `+N` quando estoura — é o ponto único que resolve a "sopa de badges" nas três seções de uma vez.

Nota: `Services.astro:44` já faz `slice(0, 4)`, mas todos os 4 serviços em `services.ts` definem 5–6 `tagKeys` — o 5º e o 6º **nunca renderizam hoje**. Ao migrar para `TagList`, decidir explicitamente: ou aparar os dados para 4, ou subir o `max`. Recomendo aparar `services.ts`, porque o card é vertical e cada linha extra de chips o alonga.

---

## Etapa 3 — Portfólio: destaque + grid (o núcleo do plano)

**Arquivos:** `apps/web/src/components/Projects.astro` (62 linhas, reescrever), novo `apps/web/src/components/ProjectCard.astro`, `apps/web/src/data/projects.ts`

### Modelo de dados

Estender a interface (linhas 3–14 de `projects.ts`), preservando a convenção de `ARCHITECTURE.md` — *"TypeScript files in `src/data/` export structured data → components import and render"*:

```ts
interface Project {
  title: string;
  description: string;
  image: string;          // deixa de ser opcional: todos os 9 terão capa
  featured?: boolean;     // marca os 2 do destaque
  link?: string;
  github?: string;
  tags: Tag[];            // trocar o tipo inline por o de tags.ts, elimina `icon: any`
}
```

Marcar `featured: true` em **Gnosis Congress 2026** e **Multilingual Content Automation — Gnosis** (os dois únicos com capa + link + descrição completa; o Congress é o mais forte do conjunto).

`tags.ts` não exporta interface hoje (tipo inferido). Extrair e exportar `interface Tag { name: string; class: string; icon: AstroIconComponent }` — o tipo `AstroIconComponent` já existe em `services.ts:1` e pode ser movido para `tags.ts` e reusado. Isso remove o `icon: any` de `projects.ts`.

### `ProjectCard.astro` com duas variantes

**`variant="featured"`** — grid interno de 2 colunas dentro de um `Card`:
- Capa `aspect-[16/9]`, `object-cover`, coluna esquerda
- Coluna direita: título (`text-2xl font-bold text-primary`), descrição completa, `TagList max={5}`, footer de links
- `md:grid-cols-2`; empilha no mobile
- Primeira capa com `loading="eager"` (está acima da dobra se Projects subir na ordem); a segunda `lazy`

**`variant="compact"`** — card vertical:
- Capa `aspect-[16/10]` no topo, `object-cover`, `loading="lazy"`
- Título `text-lg font-bold text-primary`
- Descrição em `line-clamp-3` (Tailwind 3.4 tem `line-clamp` nativo desde 3.3 — sem plugin)
- `TagList max={3}`
- Footer de links **só quando `link || github`**

### `Projects.astro`

```
featured (2)  →  space-y-8
compact  (7)  →  grid gap-6 sm:grid-cols-2 lg:grid-cols-3
```

Separar por `featured` em vez de por índice, para que reordenar `projects.ts` não quebre o layout.

**Altura:** hoje ~3.900px (9 linhas). Depois: 2 destaques (~340px cada) + 3 linhas de grid (~420px) + gaps ≈ **~2.100px**, com o grid ganhando 256px de largura extra da Etapa 1. Redução de ~45%, e o ritmo passa a ser regular.

### Bugs visuais desta seção

- **`<footer>` vazio em 6 de 9 projetos** — `Projects.astro:44` sempre renderiza `<footer class="flex items-end justify-start mt-4 gap-x-4">`, e só 3 projetos têm algum link. Condicionar a renderização.
- **`md:scale-110` permanente** (`Projects.astro:16`) — a imagem fica sobredimensionada em repouso e o hover *reduz* para `105`. Inverter: repouso `scale-100`, hover `scale-105`.
- **`<img>` sem `width`/`height` nem `loading`** — causa layout shift. Adicionar ambos (o box de proporção fixa já reserva o espaço, mas os atributos ajudam o navegador).
- **`LinkButton.astro` tem `target="_blank"` hardcoded** — o Portfolio 2024 tem `link: "/"`, então "Preview" abre a própria home em nova aba. Tornar `target` uma prop, default `"_blank"`, e passar `"_self"` para links internos.
- **Chrome de hover só em `lg:`** (`Projects.astro:13`: `lg:border lg:border-gray-800 lg:hover:border-gray-700`) — a borda do card aparece só a partir de 1024px. Mover para o `Card` compartilhado, em todos os breakpoints.

### Tags erradas herdadas (conteúdo, visível na tela)

Os 6 projetos novos foram inseridos nos slots dos antigos e **herdaram as tags do projeto que ocupava a posição**:

- **IFV — WordPress Migration**: 11 tags (`Nuxt, Tailwind, Sass, Strapi, Yarn, TypeScript, Supabase, n8n, Cal.com, Evolution, Netlify`) do antigo *TitansDev Agency Website*. A descrição fala de Astro em Cloudflare Pages. Nenhuma tag corresponde — e 11 chips é o dobro do segundo colocado, o que sozinho desregula a altura da linha.
- **RPA Migration — UiPath to n8n**: `Deno, Redis, Tailwind, JSON, Google Cloud` do antigo *Content Alchemist*. A descrição fala de n8n, Puppeteer, RabbitMQ, PostgreSQL, Docker.
- **Gnosis Platform**: descrição cita Meilisearch, Valkey e Azure OpenAI — **nenhum dos três existe em `tags.ts`** (59 chaves). Precisam ser criados (nome, classe de cor, ícone) ou o card usa as tags adjacentes que já existem.

Corrigir as tags dos 9 projetos para bater com as descrições, com `max={3}` no grid mantendo a altura uniforme independentemente de quantas cada projeto declare.

---

## Etapa 4 — Dark-only

Decisão do usuário, e alinhada ao que `ARCHITECTURE.md` já declara ("dark-first design with green accent colors").

**O padrão:** em cada componente, colapsar o par para o valor dark e apagar o prefixo. `text-gray-700 dark:text-gray-400` → `text-gray-400`. `bg-white dark:bg-gray-900` → `bg-gray-900`. `border-gray-200 dark:border-gray-800` → `border-gray-800`.

Alvos (todos os componentes com pares light/dark): `About.astro`, `Services.astro`, `Projects.astro`, `Hero.astro`, `Header.astro`, `TitleSection.astro`, `ExperienceItem.astro`, `LinkButton.astro`, `LinkInline.astro`, e o CTA inline em `index.astro:71-112`.

`TechStack.astro` já é hardcoded dark (`border-gray-800 bg-gray-900 text-white`, sem prefixo) — serve de referência do estado final.

**Deletar:** `ThemeToggle.astro` (121 linhas, órfão) e os 3 ícones usados só por ele — `SunIcon.astro`, `MoonIcon.astro`, `SystemIcon.astro`.

**Manter:** `class="dark"` em `Layout.astro:22` e `darkMode: 'class'` no config. Custo zero, e evita que um `dark:` remanescente perdido pare de funcionar silenciosamente.

---

## Etapa 5 — Bugs visuais restantes

### `apps/web/tailwind.config.mjs`

- **`secondary: '#1E831AFF'`** — hex de 8 dígitos. Tailwind 3 não deriva canais RGB dele, então o modificador de opacidade em `LinkInline.astro:5` (`hover:text-secondary/80`) não emite CSS. Trocar por `#1E831A`.
- **`background: '#050505'`** — declarado e nunca usado (zero ocorrências de `bg-background`). Ou aplicar no `Layout` em vez do `bg-gray-950` atual, ou remover do config. Recomendo aplicar: é o token de fundo declarado no `ARCHITECTURE.md`.

### `apps/web/src/data/tags.ts`

Três classes Tailwind que não existem — **não há escala `steel` nem `grey`**, então esses badges renderizam `text-white` sobre transparente:

| Linha | Tag | Classe inválida |
|---|---|---|
| 79 | AWS | `bg-steel-100` |
| 114 | Deno | `bg-steel-700` |
| 264 | Railway | `bg-grey-400` |

Substituir por classes da escala real (`bg-gray-*`/`bg-zinc-*`), seguindo o padrão das ~25 combinações já usadas no arquivo.

### `apps/web/src/components/ExperienceItem.astro`

- **Linha 18 termina em `md:space-x-4]`** — bracket sobrando, classe inválida, não gera nada. Remover (ou corrigir para `md:space-x-4`, decidindo qual era a intenção — o grid já tem `md:gap-10`, então provavelmente é para remover).

### `apps/web/src/components/Header.astro`

- **Sem tratamento mobile algum.** 5 links (`Services, Experience, Projects, About, Contact`) sempre em linha, `text-sm px-2 py-2`, sem `hidden md:flex`, sem hamburger. Em 375px o nav pill fica apertado contra as bordas. Adicionar um menu mobile — o mais barato que preserva o visual é um `<details>`/checkbox CSS-only com o pill virando botão abaixo de `md`, sem JS novo.
- **`aria-label="contact"` nunca casa.** O `IntersectionObserver` (threshold 0.3) compara `section.id` com `a[aria-label]`, mas a seção é `id="contact-cta"`. O link Contact nunca fica ativo. Alinhar os dois.
- **`animation-timeline: scroll()`** (`@keyframes nav-shadown`) é Chromium-only — fora do Chromium o nav fica no estado inicial. Aceitável como degradação progressiva; verificar apenas que o estado inicial é legível, não um nav invisível.

### `apps/web/src/components/About.astro`

- Foto `/me.webp` com `width/height=200` mas renderizada em `w-64` (256px) — imagem esticada. Corrigir os atributos para o tamanho real ou reexportar a imagem em 512px para telas 2×.
- `[&>p>strong] [&>p>strong]` repetido e vazio no seletor — remover.

### `apps/web/src/components/Footer.astro`

- O copyright "Alexandre Spindola" linka para **`https://titansdev.es`** — um cliente cujo projeto acabou de ser removido de `projects.ts`. Apontar para o próprio site ou remover o link.

---

## Etapa 6 — Ordem e espaçamento das seções

**Arquivo:** `apps/web/src/pages/index.astro`

### `<main>` envolve só o Hero

`index.astro:25-29` fecha `</main>` depois do Hero, e as outras 6 seções ficam num `<div class="space-y-24">` irmão. Envolver tudo em `<main>`.

### Dois regimes de espaçamento

Hero usa `py-16 md:py-36`; o resto usa `space-y-24`. Unificar: `space-y-24 md:space-y-32` no `<main>`, com o Hero mantendo só seu padding superior.

### Ordem — proposta

Atual: Hero → Services → **TechStack** → Experience → **Projects** → About → CTA

Proposta: Hero → **Projects** → Services → Experience → **TechStack** → About → CTA

Razão: Projects é o ativo mais forte e está enterrado em 4º lugar, depois de duas seções de auto-descrição; TechStack é a seção de menor densidade informativa (~60 chips) e ocupa o 2º lugar. Trocar as duas põe a prova de trabalho imediatamente após o Hero.

É uma reordenação de blocos em `index.astro` — reverter é mover dois blocos de volta. Se o usuário preferir a ordem atual, todo o resto do plano permanece válido.

Atualizar também a ordem dos links em `Header.astro` para casar.

---

## Fora de escopo

Conforme a decisão de escopo (re-layout + bugs visíveis), fica de fora:

- **`TechStack.astro` data-driven.** São 6 blocos `<section>` duplicados à mão com a mesma string de chrome — candidato óbvio a `data/techstack.ts` seguindo o padrão de `services.ts`. Mas não tem efeito visual. *Nota:* a Etapa 2 vai editar todos os 6 blocos de qualquer forma para injetar `<Chip>`; se for para fazer, este é o momento barato. Fica registrado como decisão do usuário.
- **Código morto sem efeito visual:** `Services.ts` (shim de re-export de 1 linha), `src/assets/astro.svg` e `background.svg` (zero referências), `ResumeIcon.astro` e os 4 ícones de serviço não usados (`AIIcon`, `APIIcon`, `ConsultingIcon`, `DistributedIcon`), as 23 chaves órfãs de `tags.ts` com ~600 linhas de ícones atrás, `@keyframes blur` + `#header-nav` em `Layout.astro:94-122`.
- **Extrair o CTA para componente.** Fica inline em `index.astro`, apenas usando o novo `Card`.
- **i18n.** Não existe mecanismo nenhum (uma página, `lang="en"` hardcoded, zero arquivos de tradução). Seria greenfield.
- **`ARCHITECTURE.md` desatualizado** (lista 4 componentes, omite 10+). Vale atualizar ao final, mas não bloqueia.

---

## Verificação

1. **Assets primeiro:** `git add apps/web/public/cv/` (o bloqueador), e confirmar que as 9 capas estão em `apps/web/public/projects/`.
2. `bun install && bun run dev --filter=web` (ou `cd apps/web && bun run dev`).
3. **Breakpoints** — checar cada um, porque o projeto só usa `sm:`/`md:`/`lg:` e o grid novo introduz comportamento em `sm`:
   - **375px** — grid em 1 coluna; menu mobile do Header abre e fecha; nada estoura horizontalmente.
   - **768px (`md`)** — grid em 2 colunas; destaque empilhado→lado a lado; texto em `max-w-3xl`.
   - **1024px (`lg`)** — grid em 3 colunas; seções largas em `max-w-6xl`.
   - **1440px+** — confirmar que a sensação de "coluna estreita num viewport largo" desapareceu nas seções de grid e que o texto **não** esticou.
4. **Medir a redução:** no DevTools, comparar `document.querySelector('#projects').scrollHeight` antes e depois. Meta: ~45%.
5. **Regularidade do grid:** todos os cards `compact` com a mesma altura, independentemente do tamanho da descrição (`line-clamp-3`) e do número de tags (`max={3}`). Testar especificamente o IFV, que declara 11 tags.
6. **Bugs corrigidos, um a um:**
   - Badges de **AWS, Deno e Railway** com fundo visível (estavam transparentes).
   - Nenhum `<footer>` vazio nos projetos sem link (inspecionar os 6).
   - "Preview" do Portfolio 2024 (`link: "/"`) navega na mesma aba.
   - Timeline de Experience com a linha vertical intacta após remover `md:space-x-4]`.
   - Link Contact do Header fica ativo ao rolar até o CTA.
   - Imagens de projeto em `scale-100` em repouso, `105` no hover.
7. **Sem `undefined` no HTML gerado:** `bun run build && grep -c 'undefined' apps/web/dist/index.html` → deve ser `0`.
8. **Sem `dark:` remanescente:** `grep -rn 'dark:' apps/web/src/` → deve retornar vazio.
9. **Build limpo:** `bun run build` sem warnings novos, e conferir o tamanho de `apps/web/dist/index.html` (hoje 264 KB) — a remoção dos pares light deve reduzi-lo.
10. **Console limpo** e nenhum 404 na aba Network (especialmente os 2 PDFs de CV e as 9 capas).
