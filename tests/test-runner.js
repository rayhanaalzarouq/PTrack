/**
 * PTrack Automated Test Suite
 * Maps directly to Phase 6: docs/6-testing/TestCases.md
 * Run via: node tests/test-runner.js
 */

const assert = require('assert');

// --- 1. Mock Browser Environment (localStorage) ---
const mockStorage = new Map();
global.localStorage = {
  getItem: (key) => (mockStorage.has(key) ? mockStorage.get(key) : null),
  setItem: (key, val) => mockStorage.set(key, String(val)),
  removeItem: (key) => mockStorage.delete(key),
  clear: () => mockStorage.clear(),
};

// --- 2. Core Business Logic under Test (mirroring app.js) ---
const STAGES = ['Planning', 'Analysis', 'Design', 'Implementation', 'Testing', 'Done'];

const STATUS_MAP = {
  Planning: 'Not Started',
  Analysis: 'In Progress',
  Design: 'In Progress',
  Implementation: 'In Progress',
  Testing: 'In Progress',
  Done: 'Completed',
};

function deriveStatus(stage) {
  if (!stage) return 'No status set';
  return STATUS_MAP[stage] ?? 'No status set';
}

function normalizeName(name) {
  return String(name).toLowerCase().replace(/\s+/g, '');
}

function validateProjectInput(name, description, existingProjects, editingId = null) {
  const trimmedName = String(name || '').trim();
  const trimmedDesc = String(description || '').trim();

  // FR-PM-001 AC2 / TC-PM-002: Name required
  if (!trimmedName) {
    return { valid: false, error: 'Project name is required.' };
  }

  // FR-PM-001 AC8 / TC-PM-003: Name unique
  const normalizedNew = normalizeName(trimmedName);
  const conflict = existingProjects.find(
    (p) => normalizeName(p.name) === normalizedNew && p.id !== editingId
  );
  if (conflict) {
    return { valid: false, error: 'This name is already used by another project.' };
  }

  // FR-PM-001 AC6 / TC-PM-004: 250 max length
  let clampedDesc = trimmedDesc;
  if (clampedDesc.length > 250) {
    clampedDesc = clampedDesc.slice(0, 250);
  }

  return {
    valid: true,
    data: { name: trimmedName, description: clampedDesc },
  };
}

const STORAGE_KEY = 'ptrack_v010_projects';

function loadProjects() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) throw new Error('Data is not an array.');
  return parsed;
}

function saveProjects(projects) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    return true;
  } catch (_) {
    return false;
  }
}

// --- 3. Test Runner Framework ---
let passed = 0;
let failed = 0;

function test(id, title, fn) {
  try {
    fn();
    console.log(`\x1b[32m✔ [${id}] ${title}\x1b[0m`);
    passed++;
  } catch (err) {
    console.error(`\x1b[31m✖ [${id}] ${title}\x1b[0m`);
    console.error(`   Error: ${err.message}`);
    failed++;
  }
}

console.log('==================================================');
console.log('🚀 Running PTrack Test Cases (docs/6-testing/TestCases.md)');
console.log('==================================================\n');

// --- 4. Test Specifications Execution ---

// TC-PM-001: Create valid project with name and optional description
test('TC-PM-001', 'Create valid project with name and description', () => {
  const existing = [];
  const res = validateProjectInput('Alfa Project', 'First test project', existing);
  assert.strictEqual(res.valid, true);
  assert.strictEqual(res.data.name, 'Alfa Project');
  assert.strictEqual(res.data.description, 'First test project');
});

// TC-PM-002: Reject project creation when name is empty
test('TC-PM-002', 'Reject empty project name', () => {
  const res1 = validateProjectInput('', 'Some desc', []);
  const res2 = validateProjectInput('    ', 'Some desc', []);
  assert.strictEqual(res1.valid, false);
  assert.strictEqual(res1.error, 'Project name is required.');
  assert.strictEqual(res2.valid, false);
});

// TC-PM-003: Reject duplicate project name (case and space insensitive)
test('TC-PM-003', 'Reject duplicate project name (ADR-010 rule)', () => {
  const existing = [{ id: '1', name: 'Mobile App' }];
  const res1 = validateProjectInput('mobile app', 'desc', existing);
  const res2 = validateProjectInput('  Mobile   App  ', 'desc', existing);
  const res3 = validateProjectInput('MOBILE APP', 'desc', existing);

  assert.strictEqual(res1.valid, false);
  assert.strictEqual(res1.error, 'This name is already used by another project.');
  assert.strictEqual(res2.valid, false);
  assert.strictEqual(res3.valid, false);
});

// TC-PM-004: Description boundary at 250 characters and paste clamp
test('TC-PM-004', 'Description boundary at 250 characters and clamping', () => {
  const exact250 = 'a'.repeat(250);
  const over300 = 'b'.repeat(300);

  const resExact = validateProjectInput('Project 1', exact250, []);
  assert.strictEqual(resExact.valid, true);
  assert.strictEqual(resExact.data.description.length, 250);

  const resOver = validateProjectInput('Project 2', over300, []);
  assert.strictEqual(resOver.valid, true);
  assert.strictEqual(resOver.data.description.length, 250);
});

// TC-PM-011 & TC-PM-012: Edit project validation
test('TC-PM-011', 'Allow editing project without self-duplicate conflict', () => {
  const existing = [
    { id: '1', name: 'Web App' },
    { id: '2', name: 'API Server' },
  ];
  // Editing project '1' keeping its own name
  const resOwn = validateProjectInput('Web App', 'new desc', existing, '1');
  assert.strictEqual(resOwn.valid, true);

  // Editing project '1' to conflict with project '2'
  const resConflict = validateProjectInput('api server', 'desc', existing, '1');
  assert.strictEqual(resConflict.valid, false);
});

// TC-STG-001 & TC-STG-002: Fixed stages list
test('TC-STG-002', 'Fixed stages list contains exactly 6 phases in order', () => {
  assert.strictEqual(STAGES.length, 6);
  assert.deepStrictEqual(STAGES, [
    'Planning',
    'Analysis',
    'Design',
    'Implementation',
    'Testing',
    'Done',
  ]);
});

// TC-STS-001: No stage assigned -> "No status set"
test('TC-STS-001', 'Stage=null maps to "No status set"', () => {
  assert.strictEqual(deriveStatus(null), 'No status set');
  assert.strictEqual(deriveStatus(undefined), 'No status set');
  assert.strictEqual(deriveStatus(''), 'No status set');
});

// TC-STS-002: Stage=Done -> "Completed"
test('TC-STS-002', 'Stage=Done maps to "Completed"', () => {
  assert.strictEqual(deriveStatus('Done'), 'Completed');
});

// TC-STS-003: Stage=Planning -> "Not Started"
test('TC-STS-003', 'Stage=Planning maps to "Not Started"', () => {
  assert.strictEqual(deriveStatus('Planning'), 'Not Started');
});

// TC-STS-004: Analysis, Design, Implementation, Testing -> "In Progress"
test('TC-STS-004', 'Mid development stages map to "In Progress"', () => {
  assert.strictEqual(deriveStatus('Analysis'), 'In Progress');
  assert.strictEqual(deriveStatus('Design'), 'In Progress');
  assert.strictEqual(deriveStatus('Implementation'), 'In Progress');
  assert.strictEqual(deriveStatus('Testing'), 'In Progress');
});

// TC-DATA-001: Save & Load persistence
test('TC-DATA-001', 'Save and load projects from localStorage', () => {
  localStorage.clear();
  const testProjects = [
    { id: '101', name: 'App 1', stage: 'Planning', status: 'Not Started' },
    { id: '102', name: 'App 2', stage: 'Done', status: 'Completed' },
  ];
  const ok = saveProjects(testProjects);
  assert.strictEqual(ok, true);

  const loaded = loadProjects();
  assert.strictEqual(loaded.length, 2);
  assert.strictEqual(loaded[0].name, 'App 1');
  assert.strictEqual(loaded[1].status, 'Completed');
});

// TC-DATA-003: Corrupt JSON triggers error
test('TC-DATA-003', 'Corrupted localStorage throws to trigger Generic Error UI', () => {
  localStorage.setItem(STORAGE_KEY, '{ invalid_json ');
  assert.throws(() => {
    loadProjects();
  }, /SyntaxError|JSON/);
  localStorage.clear();
});

// --- 5. Summary Report ---
console.log('\n--------------------------------------------------');
console.log(`Summary: ${passed} passed, ${failed} failed.`);
console.log('--------------------------------------------------');

if (failed > 0) {
  process.exit(1);
}
