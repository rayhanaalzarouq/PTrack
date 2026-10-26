# Functional Requirement (FR)
---
## 1. Requirement Identification
| Field | Value |
|-------|--------|
| FR ID | FR-PM-002 |
| Domain | |
| Module | Project Management |
| Requirement Code | [FR-PM-002-001] List Projects |
| Title | Display Project List |
| Status | Approved |
| Priority | Must |
| Target Release | v0.1.0 |
| Source | Derived from AN-001 (PTrack PRD v0.1.0), User Story 2 |
---
## 2. Description
**System shall:**
> The system shall display a list of all projects created by the user, in the Projects dropdown, showing the name of each project.
---
## 3. Rationale (Optional but Recommended)
- Business driver: Gives the user visibility into all tracked projects at a glance.
- Regulatory or compliance reference: None identified.
- Risk addressed: Supports the core MVP success criteria of visibility into tracked projects.
---
## 4. Acceptance Criteria
| # | Given | When | Then |
|---|-------|------|------|
| AC1 | At least one project exists | The user opens the project list view | All created projects are displayed by name |
| AC2 | No projects have been created yet | The user opens the project list view | The system shall display an empty state indicating no projects exist |
| AC3 | Projects exist | The list fails to load due to a data access issue | The system shall display an error state with a Try again option rather than an empty or partial list |
---
## 5. Constraints / Notes
- Performance considerations: Load and display should complete within the NFR-002 response target.
- Security implications: None identified for v0.1.0 per NFR-006 (no personal data collected).
- Dependencies: Project fields resolved per ADR-007. The list shows the project name; the description and creation date are shown in project details only (see FR-PM-003). Selecting a project opens its details (FR-PM-003); the list can be filtered with the search bar (FR-PM-004).
---
## 6. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Parent Requirement | |
| Related FRs | FR-PM-001, FR-PM-003, FR-PM-004, FR-PM-006, FR-PM-007 |
| Use Cases | UC-PM-002 |
| Design Component | |
| Test Cases | TC-XXX |
---
