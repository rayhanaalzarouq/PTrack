# Functional Requirement (FR)
---
## 1. Requirement Identification
| Field | Value |
|-------|--------|
| FR ID | FR-STS-001 |
| Domain | |
| Module | Status Tracking |
| Requirement Code | [FR-STS-001-001] Display Status |
| Title | Display Project Status |
| Status | Approved |
| Priority | Must |
| Target Release | v0.1.0 |
| Source | Derived from AN-001 (PTrack PRD v0.1.0); status values per ADR-009 |
---
## 2. Description
**System shall:**
> The system shall display the current status of each project (Not Started, In Progress, or Completed).
---
## 3. Rationale (Optional but Recommended)
- Business driver: Directly tied to the PRD Success Criteria for status visibility, including showing a project as "Completed".
- Regulatory or compliance reference: None identified.
- Risk addressed: Supports the core MVP success criteria of tracking project status.
---
## 4. Acceptance Criteria
| # | Given | When | Then |
|---|-------|------|------|
| AC1 | A project's stage is Done | The user views the project | The status "Completed" is displayed |
| AC2 | A project has no stage assigned | The user views the project | The system shall display the explicit empty state "No status set" |
| AC3 | The status value fails to load due to a data access issue | The user views the project | The system shall display an error state rather than a blank or incorrect status |
---
## 5. Constraints / Notes
- Performance considerations: Display should complete within the NFR-002 response target.
- Security implications: None identified.
- Dependencies: Status values fixed per ADR-009 (resolves Ambiguity #3 in AN-001). The status is derived from the stage (see FR-STS-002) and displayed in the project details modal (FR-PM-003).
---
## 6. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Parent Requirement | |
| Related FRs | FR-STS-002, FR-PM-003 |
| Use Cases | UC-STS-001 |
| Design Component | |
| Test Cases | TC-XXX |
---
