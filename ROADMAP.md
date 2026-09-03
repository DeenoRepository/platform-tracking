# EMS Platform - Master Architecture Migration Roadmap

## Phase 0: Foundations & Governance (COMPLETED)
- [x] Multi-repo topology provisioned on GitHub (8 repositories)
- [x] Engineering standards and strict English-only rule in `platform-governance`
- [x] GitHub Packages configured for `@deenorepository/contracts`
- [x] Strict CI workflows configured across all repositories
- [x] Local development environment configured in `platform-distribution`

## Phase 1: Core Contracts & Infrastructure (IN PROGRESS)
- [x] Domain event envelopes and Zod schemas in `@deenorepository/contracts`
- [x] In-memory EventBus & Redis Streams EventBus contracts
- [x] Transactional Outbox pattern implemented in `module-eps`, `module-wms`, `module-mro`, `module-prm`
- [x] OutboxDispatcher background worker in `platform-shell`
- [ ] Cross-module event bridge and outbox poller integration

## Phase 2: Domain Logic Migration (NEXT)
- [x] **MIG-01-EPS**: Complete Electronic Passport System migration
- [x] **MIG-02-WMS**: Complete Warehouse & FIFO Stock management migration
- [ ] **MIG-03-MRO**: Complete Maintenance & Work Order lifecycle migration
- [ ] **MIG-04-PRM**: Complete Procurement & Approval Matrix migration

## Phase 3: Core Runtime & UI Shell
- [ ] **MIG-05-SHELL**: Fastify/Node runtime, RBAC authorization middleware, Vite Module Federation host

## Phase 4: Production Deployment & Verification
- [ ] Full Docker Compose topology deployment for 50 users
- [ ] Monolith-to-schemas PostgreSQL data migration
- [ ] End-to-end integration and smoke verification
