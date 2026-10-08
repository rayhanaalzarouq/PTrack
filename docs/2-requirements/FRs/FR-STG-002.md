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
| Source | Derived from AN-001 (PTrack PRD v0.1.0); stage values per ADR-009 |
---
## 2. Description
**System shall:**
> The system shall allow the user to modify the current development stage of an existing project by selecting a different stage from the fixed list of stages.
---
## 3. Rationale (Optional but Recommended)
- Business driver: Keeps stage information accurate as a project progresses.
- Regulatory or compliance reference: None identified.
- Risk addressed: Supports the core MVP success criteria of tracking development stage.
---
## 4. Acceptance Criteria
| # | Given | When | Then |
|---|-------|------|------|
| AC1 | An existing project has an assigned stage | The user selects a different stage from the dropdown | The project reflects the new stage |
| AC2 | An existing project has an assigned stage | The user selects the same stage again | The stage is unchanged |
| AC3 | The user selects a different stage | Saving fails | The project keeps its previous stage and the system reports the failure |
---
## 5. Constraints / Notes
- Performance considerations: None specified beyond NFR-002.
- Security implications: None identified.
- Dependencies: Depends on FR-STG-001 (a stage must first be assignable). Stage values fixed per ADR-009 (resolves Ambiguity #2 in AN-001). Changing the stage also updates the project status automatically (see FR-STS-002).
---
## 6. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Parent Requirement | |
| Related FRs | FR-STG-001, FR-STG-003, FR-STS-002 |
| Use Cases | UC-STG-001 |
| Design Component | |
| Test Cases | TC-XXX |
---
