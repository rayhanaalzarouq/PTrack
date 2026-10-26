# Functional Requirement (FR)
---
## 1. Requirement Identification
| Field | Value |
|-------|--------|
| FR ID | FR-PM-001 |
| Domain | |
| Module | Project Management |
| Requirement Code | [FR-PM-001-001] Create Project |
| Title | Create New Project |
| Status | Approved |
| Priority | Must |
| Target Release | v0.1.0 |
| Source | Derived from AN-001 (PTrack PRD v0.1.0), User Story 1; extended per ADR-007, ADR-010, and ADR-013 |
---
## 2. Description
**System shall:**
> The system shall allow the user to create a new project by entering a project name and, optionally, a description of up to 250 characters, with a character counter below the description field. The system shall record the creation date automatically and display the new project's details after creation.
---
## 3. Rationale (Optional but Recommended)
- Business driver: Core entry point; no other PTrack feature is usable without the ability to create a project.
- Regulatory or compliance reference: None identified.
- Risk addressed: Supports the core MVP success criteria of tracking projects from creation onward.
---
## 4. Acceptance Criteria
| # | Given | When | Then |
|---|-------|------|------|
| AC1 | The user is on the project list view | The user enters a valid project name and confirms creation | A new project is created, appears in the project list, and its details are displayed (see FR-PM-003 AC5) |
| AC2 | The user attempts to create a project | The name field is left empty | The system shall prevent creation and indicate that a name is required |
| AC3 | The user attempts to create a project | An unexpected error occurs during creation | The system shall not create a partial project and shall report the failure to the user with a warning message (see FR-DATA-001 AC3) |
| AC4 | The user is creating a project | The user enters a name and leaves the description empty | The project is created without a description |
| AC5 | The user is creating a project | The user enters a name and a description of up to 250 characters | The project is created and the description is saved with it |
| AC6 | The user is entering a description | The description reaches 250 characters by typing, or the user pastes text longer than the limit | The system shall stop accepting further characters when typing, and shall cut pasted text to 250 characters, so the limit cannot be exceeded |
| AC7 | A project is created successfully | The creation completes | The system records the creation date automatically, without user input |
| AC8 | A project with the same name already exists (same letters, ignoring letter case and spaces) | The user attempts to create a project with that name | The system shall prevent creation and display a message that the name is already used |
| AC9 | The user is typing a description | Characters are entered | A counter below the description field shows the number of characters used out of 250 |
| AC10 | The create form is open | The user selects Cancel or the close icon | The form closes and no project is created |
---
## 5. Constraints / Notes
- Performance considerations: None specified beyond NFR-002 (2 second response target).
- Security implications: None identified for v0.1.0 per NFR-006 (no personal data collected).
- Dependencies: Project fields resolved per ADR-007 (name required; description optional, max 250 characters; creation date auto-generated). Resolves Ambiguity #1 in AN-001. Project names are unique per ADR-010; two names are the same when they contain the same letters, ignoring letter case and spaces. The description and creation date are shown in project details only (see FR-PM-003).
---
## 6. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Parent Requirement | |
| Related FRs | FR-PM-002, FR-PM-003, FR-PM-005 |
| Use Cases | UC-PM-001 |
| Design Component | |
| Test Cases | TC-XXX |
---
