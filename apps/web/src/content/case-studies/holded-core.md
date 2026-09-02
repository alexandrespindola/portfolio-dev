---
title: Holded Core
category: Enterprise resource integration
summary: An integration foundation for synchronising commerce operations with ERP through resilient, testable workflows.
role: Backend and integration engineering
status: Implementation foundation delivered
period: Core integration phase
challenge: Create a dependable integration layer across Magento 2, Shopify and Holded ERP, where stock, orders, customers and product data must remain consistent across multiple systems. The technical base had to make asynchronous failures visible and leave room for client-specific business rules.
solution: Built the core NestJS integration architecture with platform modules and adapters, PostgreSQL persistence through Drizzle, BullMQ/Redis queues, webhook handlers and adaptive CRON fallbacks. The delivered work includes cross-store stock synchronization, reservation-aware availability calculations, audit-oriented processing and automated tests around the critical stock-sync services.
outcomes:
  - Established reusable adapters and modules for ERP and commerce platform communication.
  - Implemented stock propagation and reservation-aware availability as a tested core flow.
  - Created an asynchronous, observable base for the remaining business-rule and rollout work.
metrics:
  - Magento 2, Shopify and ERP integration modules
  - Automated tests for stock synchronization and reservation services
tagKeys: [NEST, POSTGRE, NUXT, REDIS, DOCKER]
visibility: private
gallery:
  - label: Integration architecture
    alt: Placeholder for the integration architecture diagram
  - label: Stock synchronization workflow
    alt: Placeholder for the stock synchronization view
  - label: Operational queue visibility
    alt: Placeholder for the queue or operational dashboard
---
