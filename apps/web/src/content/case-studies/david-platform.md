---
title: David Platform
category: Multilingual digital library
summary: A multilingual digital library that brings reading, discovery, AI video subtitles, RAG chat, narration and editorial operations into one product.
role: Full-stack platform engineering
status: In active development
period: "2026"
challenge: Build one reliable platform for a growing multilingual book and video collection without splitting the reader, search, AI features, administration and background work into disconnected systems, while keeping content, translations and access control manageable.
solution: Built a Rust API and worker layer with Axum, Tokio and SQLx around PostgreSQL/pgvector, Valkey and Meilisearch, with an OpenAPI contract kept in sync by drift tests, paired with a SvelteKit PWA in 30 languages on Cloudflare Pages. AI features include automatic subtitle extraction with Azure AI Video Indexer and custom glossary models, contextual LLM subtitle translation with Azure Translator fallback, streaming RAG chat over the books (Claude API / Azure OpenAI) and Azure Speech narration stored in Azure Blob.
outcomes:
  - Created a single reader, catalogue and administration experience for multilingual content in 30 languages.
  - Delivered an AI video pipeline from automatic subtitle extraction to LLM translation and a web cue editor before publishing.
  - Built an internal CMS with per-language editor roles, paragraph-level translation history, glossary management and an ops console.
  - Added streaming RAG chat, TTS narration, PDF/ePub downloads and GDPR self-service export and deletion.
metrics:
  - "30 languages"
  - "OpenAPI contract tests"
tagKeys: [RUST, SVELTE, POSTGRE, REDIS, CLOUDFLARE, CLAUDE]
visibility: private
---
