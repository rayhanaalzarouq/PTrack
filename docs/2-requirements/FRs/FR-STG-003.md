# Functional Requirement (FR)
---
## 1. Requirement Identification
| Field | Value |
|-------|--------|
| FR ID | FR-STG-003 |
| Domain | |
| Module | Stage Tracking |
| Requirement Code | [FR-STG-003-001] Display Stage |
| Title | Display Development Stage |
| Status | Draft |
| Priority | Must |
| Target Release | v0.1.0 |
| Source | Derived from AN-001 (PTrack PRD v0.1.0) |
---
## 2. Description
**System shall:**
> The system shall display the current development stage for each project.
---
## 3. Rationale (Optional but Recommended)
- Business driver: Directly tied to the PRD Success Criteria for stage visibility.
- Regulatory or compliance reference: None identified.
- Risk addressed: Supports the core MVP success criteria of tracking development stage.
---
## 4. Acceptance Criteria
| # | Given | When | Then |
|---|-------|------|------|
| AC1 | A project has an assigned stage | The user views the project (list or detail) | The current stage is displayed |
| AC2 | A project has not yet had a stage assigned | The user views the project | The system shall display "No stage assigned" as an explicit empty state, rather than an incorrect value or a default stage |
| AC3 | The stage value fails to load due to a data access issue | The user views the project | The system shall display an error state rather than a blank or incorrect stage |
---
## 5. Constraints / Notes
- Performance considerations: Display should complete within the NFR-002 response target.
- Security implications: None identified.
- Dependencies: Depends on FR-STG-001/FR-STG-002. Displayable stage values are fixed for v0.1.0: Planning, Design, Development, Testing, Done (resolved during Requirements phase; see AN-001 Ambiguity #2).
---
## 6. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Parent Requirement | |
| Related FRs | FR-STG-001, FR-STG-002 |
| Use Cases | UC-STG-001 |
| Design Component | |
| Test Cases | TC-XXX |
---
