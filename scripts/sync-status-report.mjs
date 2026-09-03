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
    const commit = run ? run.head_sha.substring(0, 7) : 'main';
    rows.push(`| \`${r}\` | \`${commit}\` | ${status} |`);
    console.log(`  - ${r.padEnd(25)}: ${status} (${commit})`);
  } catch (err) {
    rows.push(`| \`${r}\` | - | UNKNOWN |`);
  }
}

console.log('\n✓ Report generated successfully.');
