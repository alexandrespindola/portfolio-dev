# Evolução do portfólio para recrutadores B2B

## Objetivo

Transformar a landing page em um portfólio verificável para recrutadores e clientes B2B da UE: quatro estudos de caso curtos e compartilháveis, melhor descoberta em buscadores e uma base Astro estática, acessível e otimizada.

## Implementação

1. Criar Content Collection de projetos com schema para `slug`, `title`, `summary`, `role`, `challenge`, `solution`, `outcomes`, `metrics`, `tagKeys`, `cover`, `gallery`, `visibility`, `liveUrl`, `repositoryUrl` e ordem de destaque.
2. Criar `/projects/[slug]` estático para Gnosis Platform, Gnosis Congress, RPA Migration e Holded Core. Cada página terá resumo, papel, desafio, solução, resultados, tecnologias e links; projetos privados mostram aviso explícito.
3. Redesenhar a seção Projects como grid 2×2 para os destaques, com resultado e CTA para case study; manter os demais em grid compacto e o modal como quick view.
4. Usar placeholders renderizados no servidor para imagens ausentes. Migrar imagens existentes para `src/assets`, usar `astro:assets`, remover o serviço noop e `onerror` inline.
5. Remover `ClientRouter`, adicionar `site`, canonical, Open Graph absoluto, `robots.txt`, sitemap e JSON-LD `Person`.
6. Remover `set:html` de Experience; estruturar itens como dados. Adicionar skip link, semântica de navegação, foco e modal acessíveis.
7. Instalar e executar `astro check`; validar build, rotas, links de CV, modal e fallback de imagem.

## Restrições

- Sem inventar métricas, depoimentos ou informações confidenciais.
- Inglês é o idioma principal; foco em contratos B2B.
- PDFs seguem em `public/cv`.
- A imagem do Hero e capas ainda não fornecidas permanecem em mock até serem adicionadas.
