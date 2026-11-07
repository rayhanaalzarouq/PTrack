# Implementation Traceability (Phase 5)

Phase 5 records how Approved requirements map to the build. Code references link to the implementation files in `src/`. See `LIFECYCLE.md` Phase 5 and `SCHEMA.md` (traceability rules).

## Where the Links Live

- Primary: the Traceability section of each `modules/<Module>/FR-*.md`
  (Design Component, Related FRs, and links to code / PR / commit).
- A screen's build links live in its `modules/<Module>/UI-*.md` spec.

## Status Note

There is NO "Implemented" status. Canonical: Draft | In Review | Approved | Deprecated.
Build progress is tracked by these traceability links, not by a status value.

---

## Roll-up Matrix

| FR ID | Priority | UC ID(s) | Screen(s) | Entity | Design Component | Code / PR ref | Test Cases | Status |
|-------|----------|----------|-----------|--------|------------------|---------------|------------|--------|
| FR-PM-001 | Must | UC-PM-001 | UI-PM-004, UI-PM-006, UI-PM-007, UI-PM-003, UI-DATA-001 | ENT-PM-001 | `submitCreate()`, `openCreateModal()`, modal form (Robustness, Usability) | `src/js/app.js`, `src/index.html` | TC-PM-001, TC-PM-002, TC-PM-003, TC-PM-004 | Approved |
| FR-PM-002 | Must | UC-PM-002 | UI-PM-001, UI-PM-002, UI-GEN-001 | ENT-PM-001 | `renderSidebar()`, `buildEmptyState()` (Usability) | `src/js/app.js`, `src/index.html` | TC-PM-005, TC-PM-006 | Approved |
| FR-PM-003 | Must | UC-PM-003 | UI-PM-003, UI-GEN-001 | ENT-PM-001 | `buildDetailsCard()`, `attachDetailsListeners()` (Usability, Correctness) | `src/js/app.js`, `src/css/style.css` | TC-PM-007, TC-PM-008 | Approved |
| FR-PM-004 | Must | UC-PM-004 | UI-PM-002, UI-PM-005 | ENT-PM-001 | `doSearch()`, `clearSearch()`, `buildNoResults()` (Efficiency, Usability) | `src/js/app.js`, `src/index.html` | TC-PM-009, TC-PM-010 | Approved |
| FR-PM-005 | Must | UC-PM-005 | UI-PM-008, UI-DATA-001 | ENT-PM-001 | `openEditModal()`, `submitEdit()` (Correctness, Robustness) | `src/js/app.js` | TC-PM-011, TC-PM-012 | Approved |
| FR-PM-006 | Must | UC-PM-006 | UI-PM-008, UI-DATA-001 | ENT-PM-001 | `deleteProject()` (Correctness) | `src/js/app.js` | TC-PM-013, TC-PM-014 | Approved |
| FR-PM-007 | Must | UC-PM-003 | UI-PM-009 | ENT-PM-001 | `buildChoosePrompt()` (Usability) | `src/js/app.js` | TC-PM-015 | Approved |
| FR-STG-001 | Must | UC-STG-001 | UI-STG-001, UI-DATA-001 | ENT-PM-001 | `setProjectStage()`, stage dropdown listbox (Correctness, Usability) | `src/js/app.js`, `src/css/style.css` | TC-STG-001, TC-STG-002 | Approved |
| FR-STG-002 | Must | UC-STG-001 | UI-STG-001, UI-DATA-001 | ENT-PM-001 | `setProjectStage()`, state machine validation (Correctness, Robustness) | `src/js/app.js` | TC-STG-003, TC-STG-004 | Approved |
| FR-STG-003 | Must | UC-STG-001 | UI-STG-001, UI-GEN-001 | ENT-PM-001 | `buildDetailsCard()` stage indicators (Usability) | `src/js/app.js`, `src/css/style.css` | TC-STG-005 | Approved |
| FR-STS-001 | Must | UC-STS-001 | UI-STG-001, UI-GEN-001 | ENT-PM-001 | `buildDetailsCard()` status row (Usability) | `src/js/app.js`, `src/css/style.css` | TC-STS-001, TC-STS-002 | Approved |
| FR-STS-002 | Must | UC-STS-001 | UI-STG-001 | ENT-PM-001 | `deriveStatus()`, `STATUS_MAP` derivation (Correctness, Reliability) | `src/js/app.js` | TC-STS-003, TC-STS-004 | Approved |
| FR-DATA-001 | Must | UC-DATA-001 | UI-DATA-001, UI-GEN-001 | ENT-PM-001 | `loadFromStorage()`, `saveToStorage()` (Reliability, Robustness) | `src/js/app.js` | TC-DATA-001, TC-DATA-002, TC-DATA-003 | Approved |

---

## Definition of Done (Phase 5)

Each Approved FR/UC links to its design components and, where known, the implementing code/PR and test IDs.

1. Design components reflect the 7-goal design-quality checklist (Correctness, Robustness, Flexibility, Reusability, Efficiency, Reliability, Usability).
2. Code references identify implementing modules in `src/`.
3. Every test case in the `Test Cases` column is registered in `docs/6-testing/TestCases.md`.
