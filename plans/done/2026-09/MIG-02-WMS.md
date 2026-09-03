# Task: MIG-02-WMS - Migrate Warehouse & FIFO Stock Logic

## Status
- State: DONE
- Target Repository: https://github.com/DeenoRepository/module-wms
- Assignee: Sub-agent (code mode)
- Date Started: 2026-09-03
- Date Completed: 2026-09-03

## Goal & Domain Scope
Migrate Warehouse Management System (WMS) domain logic, batch allocation, FIFO reservation engine, bin storage topology, stock movements journal, and consumption for MRO work orders into `module-wms`.

## Source Reference Files
- `packages/database/prisma/schema.prisma` (Warehouse, StorageZone, StorageCell, StockItem, StockOperation)
- `apps/web/src/components/wms/` (operation-item, transfer-request-submit, WarehouseTopologyModal)

## Acceptance Criteria
- [x] Baseline StockAggregate verified and expanded with batch tracking and FIFO reservation
- [x] Bin location topology (Warehouse -> Zone -> Cell) domain model and address path formatting
- [x] Stock movement transactions (RECEIPT, TRANSFER, ISSUE, ISSUE_WRITE_OFF, ADJUSTMENT) with balance integrity
- [x] Transactional Outbox event publishing for inventory threshold alerts, receipts, transfers, and reservations
- [x] Comprehensive unit test coverage with Vitest (98.3% line coverage, 24 tests passing)
- [x] Strict English commit messages
- [x] Clean repository without AI artifacts

## Verification Evidence
- Initial Commit SHA: `2ecfbda`
- Completion Commit SHA: `22a4ef4`
- CI Status: SUCCESS (Run #33774040906)
