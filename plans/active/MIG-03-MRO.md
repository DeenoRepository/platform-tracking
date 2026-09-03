# Task: MIG-03-MRO - Migrate Maintenance & Work Order Logic

## Status
- State: ACTIVE
- Target Repository: https://github.com/DeenoRepository/module-mro
- Assignee: Sub-agent (code mode)
- Date Started: 2026-09-03
- Date Completed: 

## Goal & Domain Scope
Migrate Maintenance, Repair & Operations (MRO) domain logic: Work Order lifecycle state machine, routine maintenance schedules/checklists, downtime recording, spare parts consumption requests, and integration with EPS/WMS outbox events into `module-mro`.

## Source Reference Files
- `packages/database/prisma/schema.prisma` (WorkOrder, MaintenanceSchedule, MaintenanceChecklist, DowntimeLog)
- `apps/web/src/components/mro/` (Work order workflows, maintenance calendar, checklist execution)

## Acceptance Criteria
- [ ] Baseline WorkOrderAggregate verified and expanded with status transition rules (DRAFT -> ASSIGNED -> IN_PROGRESS -> COMPLETED / CANCELLED)
- [ ] Maintenance schedule engine with frequency calculation (TIME_BASED, USAGE_HOURS, CYCLE_COUNT)
- [ ] Maintenance checklist domain model with item pass/fail verification and remarks
- [ ] Equipment downtime logging with start/end duration and failure root cause classification
- [ ] Spare parts consumption requisition model with reservation against WMS stock
- [ ] Transactional Outbox event publishing for status transitions, completion, and downtime alerts
- [ ] Comprehensive unit test coverage with Vitest (>= 80% quality gate)
- [ ] Strict English commit messages
- [ ] Clean repository without AI artifacts

## Verification Evidence
- Initial Commit SHA: `b8ce077`
- Completion Commit SHA: `[PENDING]`
- CI Status: `[PENDING]`
