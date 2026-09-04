# Task: MIG-06-DATA - Monolith PostgreSQL Schemas Data Migration

## Status
- State: DONE
- Target Repository: https://github.com/DeenoRepository/platform-distribution
- Assignee: Sub-agent (code mode)
- Date Started: 2026-09-04
- Date Completed: 2026-09-04

## Goal & Domain Scope
Migrate legacy monolithic database data from PostgreSQL `public` schema into bounded-context schemas (`eps`, `wms`, `mro`, `prm`), establishing isolated tables, foreign key boundaries, Transactional Outbox queues, and automated validation scripts verifying 100% data fidelity without record loss.

## Source Reference Files
- `packages/database/prisma/schema.prisma` (Monolith schema: Equipment, Warehouse, StockItem, MaintenanceSchedule, PurchaseRequest)
- `docker/postgres/01-init-schemas.sql` (Schema DDL and Outbox queues)
- `scripts/migrate-monolith.cjs` (ETL migration engine)

## Acceptance Criteria
- [x] DDL scripts creating isolated per-module schemas (`eps`, `wms`, `mro`, `prm`, `core`) with SKIP LOCKED outbox tables
- [x] ETL transformation and data migration runner porting historical entities:
  - `Equipment` & `Category` &rarr; `eps.equipment`, `eps.categories`
  - `Warehouse`, `StorageZone`, `StorageCell`, `StockItem` &rarr; `wms.warehouses`, `wms.zones`, `wms.cells`, `wms.stock_items`
  - `MaintenancePlan`, `MaintenanceSchedule`, `ChecklistTemplate` &rarr; `mro.maintenance_plans`, `mro.work_orders`, `mro.checklists`
  - `PurchaseRequest`, `PurchaseRequestItem`, `PurchaseDelivery` &rarr; `prm.purchase_orders`, `prm.order_items`, `prm.deliveries`
- [x] Automated migration verification CLI and Vitest integrity test checking row counts, checksums, and foreign key sanity (100% code coverage)
- [x] Strict English commit messages
- [x] Clean repository without AI artifacts

## Verification Evidence
- Initial Commit SHA: `c63926c`
- Completion Commit SHA: `9210493`
- CI Status: SUCCESS (Run #33821240796)
