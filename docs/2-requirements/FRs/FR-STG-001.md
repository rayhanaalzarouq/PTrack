# Functional Requirement (FR)
---
## 1. Requirement Identification
| Field | Value |
|-------|--------|
| FR ID | FR-STG-001 |
| Domain | |
| Module | Stage Tracking |
| Requirement Code | [FR-STG-001-001] Assign Stage |
| Title | Assign Development Stage |
| Status | Approved |
| Priority | Must |
| Target Release | v0.1.0 |
| Source | Derived from AN-001 (PTrack PRD v0.1.0) |
---
## 2. Description
**System shall:**
> The system shall allow the user to assign a development stage to a project.
---
## 3. Rationale (Optional but Recommended)
- Business driver: Core stage-tracking objective of the PTrack MVP.
- Regulatory or compliance reference: None identified.
- Risk addressed: Supports the core MVP success criteria of tracking development stage.
---
## 4. Acceptance Criteria
| # | Given | When | Then |
|---|-------|------|------|
| AC1 | A project exists without an assigned stage | The user assigns a stage value from the defined set (Planning, Design, Development, Testing, Done) | The project reflects the assigned stage |
| AC2 | The user attempts to assign a stage | The selected value is not one of the five defined stage values | The system shall reject the assignment and prompt the user to select a valid stage |
| AC3 | The user attempts to assign a stage | An unexpected error occurs while saving | The system shall not partially update the project and shall report the failure to the user |
---
## 5. Constraints / Notes
- Performance considerations: None specified beyond NFR-002.
- Security implications: None identified.
- Dependencies: Stage values are fixed for v0.1.0: Planning, Design, Development, Testing, Done (resolved during Requirements phase; see AN-001 Ambiguity #2). No free text or other values are permitted.
---
## 6. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Parent Requirement | |
| Related FRs | FR-STG-002, FR-STG-003 |
| Use Cases | UC-STG-001 |
| Design Component | |
| Test Cases | TC-XXX |
---
