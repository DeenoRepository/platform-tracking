# Task: MIG-05-SHELL - Fastify HTTP Gateway, RBAC Authorization & Outbox Event Bridge

## Status
- State: DONE
- Target Repository: https://github.com/DeenoRepository/platform-shell
- Assignee: Sub-agent (code mode)
- Date Started: 2026-09-03
- Date Completed: 2026-09-03

## Goal & Domain Scope
Implement the core host runtime in `platform-shell`: Fastify HTTP Gateway, Role-Based Access Control (RBAC) middleware, Cross-Module Outbox Poller & Redis Streams Event Bridge integrating `module-eps`, `module-wms`, `module-mro`, and `module-prm`, and microkernel lifecycle management.

## Source Reference Files
- `packages/contracts/` (DomainEvent, EventBus, OutboxRecord)
- `apps/web/` (Module federation configuration, navigation)
- `apps/api/` (Fastify routing, authentication, RBAC guards)

## Acceptance Criteria
- [x] Fastify HTTP runtime with health probes (`/health`, `/ready`), graceful shutdown, and CORS/helmet security
- [x] RBAC authorization guard and permission-checking middleware (`eps:*`, `wms:*`, `mro:*`, `prm:*`)
- [x] Cross-module Outbox Dispatcher & Redis Streams Event Bridge polling outbox tables across schemas
- [x] Modular plugin registration mechanism dynamically binding business module contracts
- [x] Comprehensive unit & integration tests with Vitest (96.41% line coverage, 24 tests passing)
- [x] Strict English commit messages
- [x] Clean repository without AI artifacts

## Verification Evidence
- Initial Commit SHA: `943f579`
- Completion Commit SHA: `7525e66`
- CI Status: SUCCESS (Run #33808048256)
