---
title: Gnosis Platform
category: Multilingual digital library
summary: A multilingual digital library that brings reading, discovery, narration and editorial operations into one product.
role: Full-stack platform engineering
status: In active development
period: Planned launch · October 2026
challenge: Build one reliable platform for a growing multilingual book collection without splitting the reader, search, administration and background work into disconnected systems, while keeping content and access control manageable.
solution: Built a Rust API and worker layer with Axum and SQLx around PostgreSQL, Valkey and Meilisearch, paired with a SvelteKit frontend. The platform includes public and administrative REST APIs, search indexing, asynchronous jobs, role-based administration, an offline-ready reader, RAG retrieval with pgvector and Azure OpenAI, and chapter narration through Azure AI Speech.
outcomes:
  - Created a single reader, catalogue and administration experience for multilingual content.
  - Implemented typed API boundaries, background processing and controlled editorial access.
  - Added optional AI-assisted retrieval and generated narration alongside conventional search.
metrics:
  - "Launch target: October 2026"
tagKeys: [RUST, SVELTE, POSTGRE, REDIS, CLOUDFLARE]
visibility: private
gallery:
  - label: Library reader and language controls
    alt: Placeholder for the multilingual reader interface
  - label: Search and discovery experience
    alt: Placeholder for the search interface
  - label: Editorial administration workspace
    alt: Placeholder for the administrative workspace
---
