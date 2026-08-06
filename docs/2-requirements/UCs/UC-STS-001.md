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
| Status | Draft |
| Priority | Must |
---
### 2. Brief Description
The user views and updates the status of a project, including marking it as "Completed", so overall project state is visible and current.
---
### 3. Preconditions
- The project already exists (see UC-PM-001).
- The application is open.
---
### 4. Trigger
The user chooses to view or change the status of a project.
---
### 5. Main Success Scenario (Basic Flow)
| Step | Actor Action | System Response |
|------|--------------|----------------|
| 1 | User selects a project | System shows the project's current status |
| 2 | User selects a new status value (e.g., "Completed"). Full value set is TBD pending Ambiguity #3 (AN-001) | System accepts the selected value |
| 3 | User confirms the change | System updates and displays the project's current status |
---
### 6. Alternate Flows / Exceptions
#### A1 - Mark Project as Completed
- Condition: The user wants to mark the project as finished.
- Flow:
  1. User selects "Completed" as the status (see FR-STS-002).
  2. System updates the status to "Completed" and reflects it in the project view.
#### E1 - Invalid or Undefined Status Value
- Condition: The status value entered/selected does not match the allowed set.
- System Response: TBD pending Ambiguity #3 (AN-001) -- the full allowed status value set beyond "Completed" is not yet defined, so this exception cannot be fully specified.
---
### 7. Postconditions
#### Success Postconditions
- The project's current status reflects the value the user set, and is visible when the project is viewed (see FR-STS-001).
#### Failure Postconditions
- The project's status remains unchanged from before the attempted update.
---
### 8. Business Rules
- BR-001: A project can have exactly one current status at a time.
- BR-002: The full set of valid status values beyond "Completed" is TBD pending Ambiguity #3 (AN-001).
---
### 9. Non-Functional Requirements Impacted
- NFR IDs (from NFRs.md): NFR-001, NFR-002
- Impact notes per referenced NFR:
  - NFR-001: Viewing/updating status should remain simple and require minimal effort.
  - NFR-002: Status updates should complete within the 2 second response target.
---
### 10. UI / API Notes (Optional)
- UI screen references: TBD (Design phase).
- API endpoint: TBD (Design phase).
- Payload structure: TBD (Design phase); depends on resolution of Ambiguity #3 (AN-001).
---
