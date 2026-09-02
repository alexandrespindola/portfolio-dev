---
title: Gnosis Platform
category: Multilingual digital library
summary: A multilingual digital library that brings reading, discovery, narration and editorial operations into one product.
role: Full-stack platform engineering
status: In active development
period: Planned launch · October 2026
challenge: Build one reliable platform for a growing multilingual book collection without splitting the reader, search, administration and background work into disconnected systems. It needed to support a curated 60-language catalogue while keeping content and access control manageable.
solution: Built a Go API and worker layer around PostgreSQL, Valkey and Meilisearch, paired with a SvelteKit frontend. The platform includes typed public and administrative APIs, search indexing, asynchronous jobs, role-based administration, an offline-ready reader, RAG retrieval with pgvector and Azure OpenAI, and chapter narration through Azure AI Speech.
outcomes:
  - Created a single reader, catalogue and administration experience for multilingual content.
  - Implemented typed API boundaries, background processing and controlled editorial access.
  - Added optional AI-assisted retrieval and generated narration alongside conventional search.
metrics:
  - "Curated catalogue target: 60 languages"
  - "Launch target: October 2026"
tagKeys: [GO, SVELTE, POSTGRE, REDIS, CLOUDFLARE]
visibility: private
gallery:
  - label: Library reader and language controls
    alt: Placeholder for the multilingual reader interface
  - label: Search and discovery experience
    alt: Placeholder for the search interface
  - label: Editorial administration workspace
    alt: Placeholder for the administrative workspace
---
