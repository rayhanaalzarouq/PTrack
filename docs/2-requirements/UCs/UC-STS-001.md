# Use Cases (UC)
---
## Use Case Template
### 1. Use Case Identification
| Field | Value |
|-------|--------|
| UC ID | UC-STS-001 |
| Title | Track Project Status |
| Related FRs | FR-STS-001, FR-STS-002 |
| Domain | |
| Primary Actor | User (Software Engineer) |
| Supporting Actors | None |
| Level | User Goal |
| Status | Approved |
| Priority | Must |
---
### 2. Brief Description
The user views the status of a project, which updates automatically when the project's stage changes, including reaching "Completed".
---
### 3. Preconditions
- The project already exists (see UC-PM-001).
- The application is open.
---
### 4. Trigger
The user views a project, or changes its stage (see UC-STG-001).
---
### 5. Main Success Scenario (Basic Flow)
| Step | Actor Action | System Response |
|------|--------------|----------------|
| 1 | User selects a project | System shows the project's current status ("No status set" if no stage is assigned) |
| 2 | User changes the stage (see UC-STG-001) | System updates the status automatically per the ADR-009 mapping |
| 3 | (none) | System displays the project's new status |
---
### 6. Alternate Flows / Exceptions
#### A1 - Mark Project as Completed
- Condition: The user wants to mark the project as finished.
- Flow:
  1. User sets the stage to Done (see FR-STG-002).
  2. System updates the status to "Completed" and reflects it in the project view (see FR-STS-002 AC3).
#### E1 - Stage Save Fails
- Condition: Saving the stage change fails.
- System Response: Neither the stage nor the status changes, and the failure is reported (see FR-STS-002 AC5).
---
### 7. Postconditions
#### Success Postconditions
- The project's status matches its stage per the ADR-009 mapping, and is visible when the project is viewed (see FR-STS-001).
#### Failure Postconditions
- The project's status remains unchanged from before the attempted stage change.
---
### 8. Business Rules
- BR-001: A project has exactly one status at a time, derived from its stage; the user does not set it manually.
- BR-002: Mapping (ADR-009): no stage = "No status set"; Planning = Not Started; Analysis, Design, Implementation, Testing = In Progress; Done = Completed.
---
### 9. Non-Functional Requirements Impacted
- NFR IDs (from NFRs.md): NFR-001, NFR-002
- Impact notes per referenced NFR:
  - NFR-001: Viewing status should remain simple, with no manual step to keep it current.
  - NFR-002: Status updates should complete within the 2 second response target.
---
### 10. UI / API Notes (Optional)
- UI screen references: UI-STG-001 (Project Status and Stage), placed inside the project details card. UI-DATA-001 (Save Failure) when saving the stage fails.
- API endpoint: TBD (Design phase).
- Payload structure: TBD (Design phase); status is derived from stage per ADR-009.
---
