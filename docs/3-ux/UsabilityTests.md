# Usability Tests
---

Plans and findings for usability testing. One section per study. Findings that
reveal missing or changed behavior re-enter Analysis (Phase 1) as candidates.

## UT-PM-001: Core MVP Flows — Create, Find, Stage

| Field | Value |
|-------|-------|
| Study ID | UT-PM-001 |
| Date | TBD (to be conducted before or during v0.1.0 release) |
| Personas tested | PER-PM-001 |
| Screens / flows (IDs) | UF-001 (Create a Project), UF-002 (Find a Project), UF-003 (View Details and Change Stage) |
| Screens covered | UI-PM-001, UI-PM-002, UI-PM-003, UI-PM-004, UI-PM-005, UI-PM-006, UI-PM-007, UI-PM-009, UI-STG-001, UI-DATA-001, UI-GEN-001 |
| Method | Unmoderated self-test (single developer, solo project per ADR-004) |
| Tasks | 1. Create a new project with a name and an optional description. 2. Search for a project by name. 3. Open a project's details and assign it a development stage. 4. Attempt to create a project with a name that is already used. 5. Attempt to create a project with an empty name. |

Findings:

| # | Severity (Low/Med/High) | Observation | Affected UI/FR | Action |
|---|-------------------------|-------------|----------------|--------|
| — | — | No findings recorded yet — study not yet conducted | — | — |

---

## UT-PM-002: Edit, Delete, and Persistence

| Field | Value |
|-------|-------|
| Study ID | UT-PM-002 |
| Date | TBD |
| Personas tested | PER-PM-001 |
| Screens / flows (IDs) | UF-004 (Edit or Delete a Project), UF-001 (Create a Project) |
| Screens covered | UI-PM-003, UI-PM-008, UI-DATA-001 |
| Method | Unmoderated self-test |
| Tasks | 1. Edit a project's name and description. 2. Delete a project. 3. Close and reopen the application; verify all projects and stages are intact. |

Findings:

| # | Severity (Low/Med/High) | Observation | Affected UI/FR | Action |
|---|-------------------------|-------------|----------------|--------|
| — | — | No findings recorded yet — study not yet conducted | — | — |

---

## How to Record Findings

1. Run the task list with a real or simulated user against the Figma prototype or the built application.
2. For each observation, record severity (Low / Med / High), the affected UI/FR IDs, and the planned action.
3. Any finding that changes or adds a requirement re-enters Phase 1: add a row to `docs/1-Analysis/AN-001_PTrack_v0.1.0_Requirements_Analysis.md` under Section 3 (Candidate Requirement Table) with status Draft.
4. Update this file with the actual study date and all findings after each session.
