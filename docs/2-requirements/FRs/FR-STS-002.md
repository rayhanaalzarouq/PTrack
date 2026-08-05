# Functional Requirement (FR)
---
## 1. Requirement Identification
| Field | Value |
|-------|--------|
| FR ID | FR-STS-002 |
| Domain | |
| Module | Status Tracking |
| Requirement Code | [FR-STS-002-001] Update Status |
| Title | Update Project Status |
| Status | Draft |
| Priority | Must |
| Target Release | v0.1.0 |
| Source | Derived from AN-001 (PTrack PRD v0.1.0) |
---
## 2. Description
**System shall:**
> The system shall allow the user to update the status of a project, including marking it as "Completed".
---
## 3. Rationale (Optional but Recommended)
- Business driver: Core status-tracking objective of the PTrack MVP, explicitly including the ability to mark a project "Completed".
- Regulatory or compliance reference: None identified.
- Risk addressed: Supports the core MVP success criteria of tracking project status.
---
## 4. Acceptance Criteria
| # | Given | When | Then |
|---|-------|------|------|
| AC1 | An existing project has a status other than "Completed" | The user updates the status to "Completed" | The project reflects the "Completed" status |
| AC2 | TBD pending Ambiguity #3 (AN-001) -- full status value set undefined | TBD | TBD |
| AC3 | TBD pending Ambiguity #3 (AN-001) | TBD | TBD |
---
## 5. Constraints / Notes
- Performance considerations: None specified beyond NFR-002.
- Security implications: None identified.
- Dependencies: Blocked by Ambiguity #3 in AN-001 -- the full status value set (beyond "Completed") is not yet defined. AC2 and AC3 cannot be finalized until this is resolved.
---
## 6. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Parent Requirement | |
| Related FRs | FR-STS-001 |
| Use Cases | UC-STS-001 |
| Design Component | |
| Test Cases | TC-XXX |
---
