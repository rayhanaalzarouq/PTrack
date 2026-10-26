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
| Source | Derived from AN-001 (PTrack PRD v0.1.0); stage values per ADR-009 |
---
## 2. Description
**System shall:**
> The system shall allow the user to assign a development stage to a project by selecting it from a fixed list of stages (Planning, Analysis, Design, Implementation, Testing, Done).
---
## 3. Rationale (Optional but Recommended)
- Business driver: Core stage-tracking objective of the PTrack MVP.
- Regulatory or compliance reference: None identified.
- Risk addressed: Supports the core MVP success criteria of tracking development stage.
---
## 4. Acceptance Criteria
| # | Given | When | Then |
|---|-------|------|------|
| AC1 | A project exists without an assigned stage | The user selects a stage from the stage dropdown | The project reflects the selected stage |
| AC2 | The user opens the stage dropdown | The list is displayed | It contains exactly: Planning, Analysis, Design, Implementation, Testing, Done (fixed list, no free text) |
| AC3 | The user selects a stage | Saving the stage fails | The project keeps its previous stage and the system reports the failure |
---
## 5. Constraints / Notes
- Performance considerations: None specified beyond NFR-002.
- Security implications: None identified.
- Dependencies: Stage values fixed per ADR-009. Resolves Ambiguity #2 in AN-001. Changing the stage also updates the project status automatically (see FR-STS-002).
---
## 6. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Parent Requirement | |
| Related FRs | FR-STG-002, FR-STG-003, FR-STS-002 |
| Use Cases | UC-STG-001 |
| Design Component | |
| Test Cases | TC-XXX |
---
