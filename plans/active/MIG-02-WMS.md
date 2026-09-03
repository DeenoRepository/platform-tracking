# Task: MIG-02-WMS - Migrate Warehouse & FIFO Stock Logic

## Status
- State: ACTIVE
- Target Repository: https://github.com/DeenoRepository/module-wms
- Assignee: Sub-agent (code mode)
- Date Started: 2026-09-03
- Date Completed: 

## Goal & Domain Scope
Migrate Warehouse Management System (WMS) domain logic, batch allocation, FIFO reservation engine, bin storage topology, stock movements journal, and consumption for MRO work orders into `module-wms`.

## Source Reference Files
- `packages/database/prisma/schema.prisma` (Warehouse, BinLocation, StockItem, StockBatch, StockMovement)
- `apps/web/src/components/wms/` (Inventory, Warehouses, Stock movements)

## Acceptance Criteria
- [ ] Baseline StockAggregate verified and expanded with batch tracking and FIFO reservation
- [ ] Bin location topology (Warehouse -> Zone -> Aisle -> Shelf -> Bin) domain model and validation
- [ ] Stock movement transactions (RECEIPT, TRANSFER, RESERVATION, WRITE_OFF, ADJUSTMENT) with balance integrity
- [ ] Transactional Outbox event publishing for inventory threshold alerts and reservations
- [ ] Comprehensive unit test coverage with Vitest (>= 80% coverage quality gate)
- [ ] Strict English commit messages
- [ ] Clean repository without AI artifacts

## Verification Evidence
- Commit SHA: `[PENDING]`
- CI Status: `[PENDING]`
