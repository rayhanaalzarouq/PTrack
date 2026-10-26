# Functional Requirement (FR)
---
## 1. Requirement Identification
| Field | Value |
|-------|--------|
| FR ID | FR-PM-006 |
| Domain | |
| Module | Project Management |
| Requirement Code | [FR-PM-006-001] Delete Project |
| Title | Delete Project |
| Status | Approved |
| Priority | Must |
| Target Release | v0.1.0 |
| Source | SWE decision, see ADR-014 (not in the original PRD) |
---
## 2. Description
**System shall:**
> The system shall allow the user to delete an existing project from the three-dot menu in the project details card, without a confirmation step.
---
## 3. Rationale (Optional but Recommended)
- Business driver: Lets the user remove projects that are no longer wanted.
- Regulatory or compliance reference: None identified.
- Risk addressed: Without deletion, abandoned or mistaken projects would stay in the list permanently. Resolves Ambiguity #5 in AN-001 (deletion).
---
## 4. Acceptance Criteria
| # | Given | When | Then |
|---|-------|------|------|
| AC1 | The details card of an existing project is open | The user opens the three-dot menu and selects Delete | The project is deleted immediately, without a confirmation step; it is removed from the project list and from storage, and the details card closes |
| AC2 | Only one project remains | The user deletes it | The system displays the "no projects" state (see FR-PM-002 AC2) |
| AC3 | The user deletes a project | Saving the change fails | The project remains and the system displays the save failure warning (see FR-DATA-001 AC3) |
---
## 5. Constraints / Notes
- Performance considerations: Should complete within the NFR-002 response target.
- Security implications: None identified per NFR-006.
- Dependencies: Depends on FR-PM-003 (the details card that holds the three-dot menu). Deletion is immediate, as decided by the SWE (ADR-014).
---
## 6. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Parent Requirement | |
| Related FRs | FR-PM-002, FR-PM-003, FR-PM-005 |
| Use Cases | UC-PM-006 |
| Design Component | |
| Test Cases | TC-XXX |
---
