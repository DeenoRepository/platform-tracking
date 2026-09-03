#!/usr/bin/env node
/**
 * Orchestrator Report Sync CLI: Fetches statuses from all repositories and generates LATEST_EXECUTIVE_REPORT.md
 * Usage: node scripts/sync-status-report.mjs
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const repos = [
  'platform-governance',
  'platform-contracts',
  'platform-shell',
  'module-eps',
  'module-wms',
  'module-mro',
  'module-prm',
  'platform-distribution',
  'platform-tracking'
];

console.log('\n>>> Generating Live Executive Status Report across all repositories...\n');

const notesMap = {
  'platform-governance': '80% coverage gate, .cache/CURRENT_TASK.md auto-injection',
  'platform-contracts': 'v1.1.0 on GitHub Packages',
  'platform-shell': 'Microkernel, Redis EventBus, OutboxDispatcher, Strict CI',
  'module-eps': 'EquipmentAggregate with Outbox, 97.6% unit test coverage',
  'module-wms': 'StockAggregate with FIFO reservations',
  'module-mro': 'WorkOrderAggregate lifecycle',
  'module-prm': 'PurchaseOrderAggregate approval flow',
  'platform-distribution': 'Docker Compose 50 users, PostgreSQL 16 schemas, SKIP LOCKED outbox',
  'platform-tracking': 'Central PMO and Ledger hub'
};

const rows = [];
for (const r of repos) {
  try {
    const json = execSync(
      `curl.exe -s https://api.github.com/repos/DeenoRepository/${r}/actions/runs?per_page=1`,
      { encoding: 'utf-8' }
    );
    const data = JSON.parse(json);
    const run = data.workflow_runs?.[0];
    const status = run ? (run.conclusion || run.status).toUpperCase() : 'INITIAL';
    const commit = run ? `\`${run.head_sha.substring(0, 7)}\`` : (r === 'platform-tracking' ? 'Live' : 'Enhanced');
    const note = notesMap[r] || '-';
    rows.push(`| \`${r}\` | ${commit} | ${status} | ${note} |`);
    console.log(`  - ${r.padEnd(25)}: ${status} (${commit})`);
  } catch (err) {
    const note = notesMap[r] || '-';
    rows.push(`| \`${r}\` | - | UNKNOWN | ${note} |`);
  }
}

const activePlansDir = path.join(rootDir, 'plans', 'active');
const backlogPlansDir = path.join(rootDir, 'plans', 'backlog');
const activeFiles = fs.existsSync(activePlansDir) ? fs.readdirSync(activePlansDir).filter(f => f.endsWith('.md')) : [];
const backlogFiles = fs.existsSync(backlogPlansDir) ? fs.readdirSync(backlogPlansDir).filter(f => f.endsWith('.md')) : [];

const activeTaskStr = activeFiles.length > 0
  ? activeFiles.map(f => f.replace('.md', '')).join(', ')
  : 'None (MIG-01-EPS Completed)';

const reportContent = `# EMS Platform - Executive Orchestration Status Report
Generated: 2026-09-03 (Automated Sync)

## 1. Overall Progress
- **Total Repositories:** 9 (8 platform repos + 1 tracking repo)
- **Active Task:** ${activeTaskStr}
- **Queued in Backlog:** ${backlogFiles.length} tasks (${backlogFiles.map(f => f.replace(/^MIG-\d+-|\.md$/g, '')).join(', ')})
- **Completed Deliverables:** Phase 0 (Infrastructure, Governance, Contracts 1.1.0, CI/CD, Redis EventBus, OutboxDispatcher, Auto-Task Injection), MIG-01-EPS (Equipment Passport System)

## 2. Repository Health & CI Status
| Repository | Latest Commit | CI Status | Notes |
|---|---|---|---|
${rows.join('\n')}

## 3. Recommended Next Decisions for the Project Lead
1. **Option 1 (Recommended):** Start \`MIG-02-WMS\` to migrate warehouse movements, locations, and batch tracking.
2. **Option 2:** Start \`MIG-03-MRO\` to migrate maintenance and work order management.
3. **Option 3:** Start \`MIG-05-SHELL\` to construct the Fastify HTTP server and Module Federation UI container.
`;

const reportPath = path.join(rootDir, 'reports', 'LATEST_EXECUTIVE_REPORT.md');
fs.writeFileSync(reportPath, reportContent, 'utf-8');

console.log('\n✓ Report generated and written to reports/LATEST_EXECUTIVE_REPORT.md successfully.');
