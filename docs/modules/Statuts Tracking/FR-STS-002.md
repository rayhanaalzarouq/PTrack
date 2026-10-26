# Functional Requirement (FR)
---
## 1. Requirement Identification
| Field | Value |
|-------|--------|
| FR ID | FR-STS-002 |
| Domain | |
| Module | Status Tracking |
| Requirement Code | [FR-STS-002-001] Update Status |
| Title | Update Project Status Automatically |
| Status | Approved |
| Priority | Must |
| Target Release | v0.1.0 |
| Source | Derived from AN-001 (PTrack PRD v0.1.0); changed to automatic update per ADR-009 |
---
## 2. Description
**System shall:**
> The system shall automatically update the status of a project when its development stage changes, per the stage-to-status mapping in ADR-009.
---
## 3. Rationale (Optional but Recommended)
- Business driver: Core status-tracking objective of the PTrack MVP, including reaching "Completed"; deriving the status from the stage avoids inconsistent stage/status combinations.
- Regulatory or compliance reference: None identified.
- Risk addressed: Supports the core MVP success criteria of tracking project status.
---
## 4. Acceptance Criteria
| # | Given | When | Then |
|---|-------|------|------|
| AC1 | A project's stage is set to Planning | The stage is saved | The status becomes "Not Started" |
| AC2 | A project's stage is set to Analysis, Design, Implementation, or Testing | The stage is saved | The status becomes "In Progress" |
| AC3 | A project's stage is set to Done | The stage is saved | The status becomes "Completed" |
| AC4 | A project has the stage Done | The user changes the stage to an earlier stage | The status changes according to the mapping (e.g., "In Progress") |
| AC5 | The user changes the stage | Saving fails | Neither the stage nor the status changes and the system reports the failure |
---
## 5. Constraints / Notes
- Performance considerations: None specified beyond NFR-002.
- Security implications: None identified.
- Dependencies: Mapping fixed per ADR-009 (resolves Ambiguity #3 in AN-001). The user does not set the status manually. A project with no stage has no status ("No status set", see FR-STS-001 AC2).
---
## 6. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Parent Requirement | |
| Related FRs | FR-STS-001, FR-STG-001, FR-STG-002 |
| Use Cases | UC-STS-001 |
| Design Component | |
| Test Cases | TC-XXX |
---
