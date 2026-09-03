# Task: MIG-01-EPS - Migrate Equipment Passport System Domain Logic

## Status
- State: DONE
- Target Repository: https://github.com/DeenoRepository/module-eps
- Assignee: Sub-agent (code mode)
- Date Started: 2026-09-03
- Date Completed: 2026-09-03

## Goal & Domain Scope
Migrate the Equipment Passport System domain logic, technical sections schema, wear calculation, and inventory number generation into `module-eps`.

## Source Reference Files
- `apps/web/src/components/eps/equipment-registry-model.ts`
- `apps/web/src/components/eps/EquipmentPassportTechnicalSections.tsx`
- `packages/database/prisma/schema.prisma` (Equipment, Category)

## Acceptance Criteria
- [x] Baseline EquipmentAggregate implemented with state machine (DRAFT -> ACTIVE -> MAINTENANCE -> DECOMMISSIONED)
- [x] Transactional Outbox events recorded on status changes
- [x] Port full equipment passport technical validation
- [x] Port QR code and custom attribute parsers
- [x] Unit test coverage with Vitest (97.62% line coverage, 36 tests passing)
- [x] Strict English commit messages
- [x] Clean repository without AI artifacts

## Verification Evidence
- Initial Commit SHA: `1764099`
- Completion Commit SHA: `c31a2e9`
- CI Status: SUCCESS (Run #33770220027)
