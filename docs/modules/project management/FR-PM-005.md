# Functional Requirement (FR)
---
## 1. Requirement Identification
| Field | Value |
|-------|--------|
| FR ID | FR-PM-005 |
| Domain | |
| Module | Project Management |
| Requirement Code | [FR-PM-005-001] Edit Project |
| Title | Edit Project |
| Status | Approved |
| Priority | Must |
| Target Release | v0.1.0 |
| Source | SWE decision, see ADR-014 (not in the original PRD) |
---
## 2. Description
**System shall:**
> The system shall allow the user to edit the name and description of an existing project from the three-dot menu in the project details card, applying the same rules as when creating a project.
---
## 3. Rationale (Optional but Recommended)
- Business driver: Lets the user correct or update a project after creating it.
- Regulatory or compliance reference: None identified.
- Risk addressed: Without editing, a typo in a project name or description could not be fixed. Resolves Ambiguity #5 in AN-001 (editing).
---
## 4. Acceptance Criteria
| # | Given | When | Then |
|---|-------|------|------|
| AC1 | The details card of an existing project is open | The user opens the three-dot menu, selects Edit, changes the name and/or description, and saves | The project reflects the changes |
| AC2 | The user is editing a project | The name is left empty | The system shall prevent saving and indicate that a name is required (same rule as FR-PM-001 AC2) |
| AC3 | The user is editing a project | The name matches another project's name (same letters, ignoring letter case and spaces) | The system shall prevent saving and display a message that the name is already used (same rule as FR-PM-001 AC8) |
| AC4 | The user is editing the description | The description reaches 250 characters by typing, or the user pastes longer text | The system shall stop accepting characters when typing and cut pasted text to 250 characters, with the character counter shown (same rule as FR-PM-001 AC6, AC9) |
| AC5 | The user saves an edit | Saving fails | The project keeps its previous values and the system displays the save failure warning (see FR-DATA-001 AC3) |
---
## 5. Constraints / Notes
- Performance considerations: Should complete within the NFR-002 response target.
- Security implications: None identified per NFR-006.
- Dependencies: Depends on FR-PM-001 (field rules) and FR-PM-003 (the details card that holds the three-dot menu). A project's own current name is not treated as a duplicate of itself.
---
## 6. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Parent Requirement | |
| Related FRs | FR-PM-001, FR-PM-003, FR-PM-006 |
| Use Cases | UC-PM-005 |
| Design Component | |
| Test Cases | TC-XXX |
---
