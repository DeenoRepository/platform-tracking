# EMS Platform - Central Project Management & Orchestration Tracking Hub

This repository is the single source of truth for all project progress, task planning, executive status reports, and audit ledgers across the EMS Platform ecosystem.

## How the Orchestrator Uses This Repository
1. **Reads Current State:** The Orchestrator inspects `plans/active/` and `plans/backlog/` to present current progress and prioritized options to the Project Lead.
2. **Receives Decisions:** The Project Lead selects which task to execute.
3. **Spawns Sub-agents:** The Orchestrator moves the task to `active/`, assigns it to a sub-agent targeting the specific domain repository (e.g. `module-eps`), and provides strict acceptance criteria.
4. **Logs Completion:** Once the sub-agent completes the task and passes CI, the Orchestrator moves the task to `plans/done/`, updates `reports/LATEST_EXECUTIVE_REPORT.md`, and records the commit SHA.

## Directory Structure
- `ROADMAP.md` — Global multi-phase milestone plan
- `plans/active/` — Currently in-flight tasks being executed by sub-agents
- `plans/backlog/` — Queued tasks awaiting approval from the Lead
- `plans/done/` — Historical ledger of verified tasks
- `reports/` — Automated status reports and CI health logs
- `scripts/` — Orchestrator status report generator CLI
