# Functional Requirement (FR)
---
## 1. Requirement Identification
| Field | Value |
|-------|--------|
| FR ID | FR-STG-002 |
| Domain | |
| Module | Stage Tracking |
| Requirement Code | [FR-STG-002-001] Modify Stage |
| Title | Modify Development Stage |
| Status | Approved |
| Priority | Must |
| Target Release | v0.1.0 |
| Source | Derived from AN-001 (PTrack PRD v0.1.0) |
---
## 2. Description
**System shall:**
> The system shall allow the user to modify the current development stage of an existing project.
---
## 3. Rationale (Optional but Recommended)
- Business driver: Keeps stage information accurate as a project progresses.
- Regulatory or compliance reference: None identified.
- Risk addressed: Supports the core MVP success criteria of tracking development stage.
---
## 4. Acceptance Criteria
| # | Given | When | Then |
|---|-------|------|------|
| AC1 | An existing project has an assigned stage | The user changes the stage to a different valid value from the defined set (Planning, Design, Development, Testing, Done) | The project reflects the newly assigned stage |
| AC2 | The user attempts to change a stage | The selected value is not one of the five defined stage values | The system shall reject the change and prompt the user to select a valid stage |
| AC3 | The user attempts to change a stage | An unexpected error occurs while saving | The system shall not partially update the project and shall report the failure to the user |
---
## 5. Constraints / Notes
- Performance considerations: None specified beyond NFR-002.
- Security implications: None identified.
- Dependencies: Depends on FR-STG-001 (a stage must first be assignable). Stage values are fixed for v0.1.0: Planning, Design, Development, Testing, Done (resolved during Requirements phase; see AN-001 Ambiguity #2).
---
## 6. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Parent Requirement | |
| Related FRs | FR-STG-001, FR-STG-003 |
| Use Cases | UC-STG-001 |
| Design Component | |
| Test Cases | TC-XXX |
---
