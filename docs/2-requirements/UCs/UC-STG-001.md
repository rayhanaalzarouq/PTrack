# Use Cases (UC)
---
## Use Case Template
### 1. Use Case Identification
| Field | Value |
|-------|--------|
| UC ID | UC-STG-001 |
| Title | Track Development Stage |
| Related FRs | FR-STG-001, FR-STG-002, FR-STG-003 |
| Domain | |
| Primary Actor | User (Software Engineer) |
| Supporting Actors | None |
| Level | User Goal |
| Status | Approved |
| Priority | Must |
---
### 2. Brief Description
The user assigns, updates, and views the current development stage of a project, so progress through development is visible over time.
---
### 3. Preconditions
- The project already exists (see UC-PM-001).
- The application is open.
---
### 4. Trigger
The user chooses to assign or change the development stage of a project.
---
### 5. Main Success Scenario (Basic Flow)
| Step | Actor Action | System Response |
|------|--------------|----------------|
| 1 | User selects a project (opens its details, see UC-PM-003) | System shows the project's current stage (or "No stage assigned") |
| 2 | User opens the stage dropdown and selects a stage from the list (Planning, Analysis, Design, Implementation, Testing, Done) | System accepts the selected value |
| 3 | User confirms the change (selecting the stage applies it) | System updates and displays the project's current stage, and updates the status automatically (see UC-STS-001) |
---
### 6. Alternate Flows / Exceptions
#### A1 - First-Time Stage Assignment
- Condition: The project has no stage assigned yet.
- Flow:
  1. User selects an initial stage from the dropdown (see FR-STG-001).
  2. System records it as the project's current stage.
#### E1 - Stage Save Fails
- Condition: An error occurs while saving the selected stage.
- System Response: System keeps the previous stage and reports the failure (see FR-STG-001 AC3, FR-STG-002 AC3). An invalid value cannot be entered because the list is fixed.
---
### 7. Postconditions
#### Success Postconditions
- The project's current development stage reflects the value the user set, and is visible when the project is viewed (see FR-STG-003).
#### Failure Postconditions
- The project's stage remains unchanged from before the attempted update.
---
### 8. Business Rules
- BR-001: A project can have exactly one current development stage at a time.
- BR-002: Valid stage values are fixed: Planning, Analysis, Design, Implementation, Testing, Done; free text is not allowed (ADR-009).
---
### 9. Non-Functional Requirements Impacted
- NFR IDs (from NFRs.md): NFR-001, NFR-002
- Impact notes per referenced NFR:
  - NFR-001: Assigning/updating a stage should remain simple and require minimal effort.
  - NFR-002: Stage updates should complete within the 2 second response target.
---
### 10. UI / API Notes (Optional)
- UI screen references: stage dropdown in the project details modal (see UC-PM-003); screen spec TBD in Design phase.
- API endpoint: TBD (Design phase).
- Payload structure: TBD (Design phase); stage is one of the six fixed values (ADR-009).
---
