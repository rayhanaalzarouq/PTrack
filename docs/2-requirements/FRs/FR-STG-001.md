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
| Status | Draft |
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
| AC1 | A project exists without an assigned stage | The user assigns a stage value | The project reflects the assigned stage. Exact stage value set is TBD pending Ambiguity #2 (AN-001) |
| AC2 | TBD pending Ambiguity #2 (AN-001) | TBD | TBD |
| AC3 | TBD pending Ambiguity #2 (AN-001) | TBD | TBD |
---
## 5. Constraints / Notes
- Performance considerations: None specified beyond NFR-002.
- Security implications: None identified.
- Dependencies: Blocked by Ambiguity #2 in AN-001 -- the fixed list of stage values (or free text) is not yet defined. AC2 and AC3 (boundary and failure cases) cannot be finalized until this is resolved.
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
