# Task: MIG-04-PRM - Migrate Procurement Requisitions & Approval Matrix

## Status
- State: ACTIVE
- Target Repository: https://github.com/DeenoRepository/module-prm
- Assignee: Sub-agent (code mode)
- Date Started: 2026-09-03
- Date Completed: 

## Goal & Domain Scope
Migrate Procurement Management (PRM) domain logic: Purchase Requests (PR) from WMS/MRO, Purchase Orders (PO) to vendors, multi-tier budget approval matrix, delivery receipts integration, and transactional outbox event publishing into `module-prm`.

## Source Reference Files
- `packages/database/prisma/schema.prisma` (PurchaseRequest, PurchaseRequestItem, PurchaseDelivery)
- `apps/web/src/components/prm/` (Purchase requests, supplier orders, approval workflows)

## Acceptance Criteria
- [ ] Baseline PurchaseOrderAggregate expanded with lifecycle (DRAFT -> PENDING_APPROVAL -> APPROVED -> ORDERED -> DELIVERED / REJECTED)
- [ ] Multi-tier approval matrix engine with threshold rules (e.g. Lead Engineer < $1000, Chief Engineer < $10000, Plant Director >= $10000)
- [ ] Purchase request items specification with unit prices, budget caps, and requested delivery dates
- [ ] Purchase delivery receipt verification and supplier evaluation
- [ ] Transactional Outbox event publishing for approvals, rejections, order dispatches, and delivery confirmations
- [ ] Comprehensive unit test coverage with Vitest (>= 80% quality gate)
- [ ] Strict English commit messages
- [ ] Clean repository without AI artifacts

## Verification Evidence
- Initial Commit SHA: `fcd9ee3`
- Completion Commit SHA: `[PENDING]`
- CI Status: `[PENDING]`
