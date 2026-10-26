# Functional Requirement (FR)
---
## 1. Requirement Identification
| Field | Value |
|-------|--------|
| FR ID | FR-PM-004 |
| Domain | |
| Module | Project Management |
| Requirement Code | [FR-PM-004-001] Search Projects |
| Title | Search Projects |
| Status | Approved |
| Priority | Must |
| Target Release | v0.1.0 |
| Source | SWE decision, see ADR-008 (not in the original PRD) |
---
## 2. Description
**System shall:**
> The system shall provide a search bar with a search button that filters the project list (the Projects dropdown) by project name when the user selects the search button.
---
## 3. Rationale (Optional but Recommended)
- Business driver: Lets the user locate a project quickly as the list grows.
- Regulatory or compliance reference: None identified.
- Risk addressed: Scope growth beyond the PRD; recorded as a deliberate extension in ADR-008.
---
## 4. Acceptance Criteria
| # | Given | When | Then |
|---|-------|------|------|
| AC1 | Several projects exist | The user types text that matches part of a project name and selects the search button | The project list in the Projects dropdown shows only the projects whose names match |
| AC2 | Projects exist | The user types text that matches no project name and selects the search button | The system shall display a "no results" state, distinct from the empty state of FR-PM-002 AC2 |
| AC3 | A search is active | The user clears the search field and selects the search button | The full project list is displayed again |
| AC4 | The "no results" state is displayed | The user selects the Clear search button | The search field is cleared and the full project list is displayed again |
---
## 5. Constraints / Notes
- Performance considerations: Filtering should complete within the NFR-002 response target.
- Security implications: None identified for v0.1.0 per NFR-006.
- Dependencies: Depends on FR-PM-002. Search applies to the project name only (not description, stage, status, or creation date).
---
## 6. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Parent Requirement | |
| Related FRs | FR-PM-002 |
| Use Cases | UC-PM-004 |
| Design Component | |
| Test Cases | TC-XXX |
---
