# Functional Requirement (FR)
---
## 1. Requirement Identification
| Field | Value |
|-------|--------|
| FR ID | FR-PM-007 |
| Domain | |
| Module | Project Management |
| Requirement Code | [FR-PM-007-001] Prompt Project Selection |
| Title | Prompt Project Selection |
| Status | Approved |
| Priority | Must |
| Target Release | v0.1.0 |
| Source | SWE decision, see ADR-015 (not in the original PRD) |
---
## 2. Description
**System shall:**
> The system shall display a message asking the user to choose a project when no project is selected for display.
---
## 3. Rationale (Optional but Recommended)
- Business driver: Avoids a blank area when projects exist but none is selected.
- Regulatory or compliance reference: None identified.
- Risk addressed: A blank view could look like a failure to load.
---
## 4. Acceptance Criteria
| # | Given | When | Then |
|---|-------|------|------|
| AC1 | Projects exist and none is selected for display (including after the details are closed) | The user views the project area | The system displays a message asking the user to choose a project, or create a new one |
| AC2 | The prompt is displayed | The user selects a project | The project details are displayed (see FR-PM-003) |
---
## 5. Constraints / Notes
- Performance considerations: None specified beyond NFR-002.
- Security implications: None identified per NFR-006.
- Dependencies: The message is shown whenever no project is selected for display. No separate list of recent projects is specified.
---
## 6. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Parent Requirement | |
| Related FRs | FR-PM-002, FR-PM-003 |
| Use Cases | UC-PM-003 |
| Design Component | |
| Test Cases | TC-XXX |
---
