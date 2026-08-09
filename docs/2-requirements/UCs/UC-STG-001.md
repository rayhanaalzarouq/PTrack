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
| Status | Draft |
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
| 1 | User selects a project | System shows the project's current stage, or "No stage assigned" if none set yet |
| 2 | User selects a new stage value from the defined set (Planning, Design, Development, Testing, Done) | System accepts the selected value |
| 3 | User confirms the change | System updates and displays the project's current stage |
---
### 6. Alternate Flows / Exceptions
#### A1 - First-Time Stage Assignment
- Condition: The project has no stage assigned yet.
- Flow:
  1. User assigns an initial stage value (see FR-STG-001).
  2. System records it as the project's current stage.
#### E1 - Invalid or Undefined Stage Value
- Condition: The stage value entered/selected does not match one of the five defined stage values.
- System Response: System rejects the change, prompts the user to choose one of the valid stage values (Planning, Design, Development, Testing, Done), and the project's stage remains unchanged.
---
### 7. Postconditions
#### Success Postconditions
- The project's current development stage reflects the value the user set, and is visible when the project is viewed (see FR-STG-003).
#### Failure Postconditions
- The project's stage remains unchanged from before the attempted update.
---
### 8. Business Rules
- BR-001: A project can have exactly one current development stage at a time.
- BR-002: The valid stage values are: Planning, Design, Development, Testing, Done. No other values or free text are permitted.
---
### 9. Non-Functional Requirements Impacted
- NFR IDs (from NFRs.md): NFR-001, NFR-002
- Impact notes per referenced NFR:
  - NFR-001: Assigning/updating a stage should remain simple and require minimal effort.
  - NFR-002: Stage updates should complete within the 2 second response target.
---
### 10. UI / API Notes (Optional)
- UI screen references: TBD (Design phase).
- API endpoint: TBD (Design phase).
- Payload structure: TBD (Design phase); depends on resolution of Ambiguity #2 (AN-001).
---
