# Use Cases (UC)
---
## Use Case Template
### 1. Use Case Identification
| Field | Value |
|-------|--------|
| UC ID | UC-PM-003 |
| Title | View Project Details |
| Related FRs | FR-PM-003 |
| Domain | |
| Primary Actor | User (Software Engineer) |
| Supporting Actors | None |
| Level | User Goal |
| Status | Approved |
| Priority | Must |
---
### 2. Brief Description
The user selects a project from the list to see its details: name, description, status, current stage, and creation date.
---
### 3. Preconditions
- The application is open.
- At least one project exists (see UC-PM-001).
---
### 4. Trigger
The user selects a project in the project list.
---
### 5. Main Success Scenario (Basic Flow)
| Step | Actor Action | System Response |
|------|--------------|----------------|
| 1 | User selects a project in the project list | System opens a modal window at the center of the interface |
| 2 | (none) | System shows the project name, description, status, current stage, and creation date |
| 3 | User closes the modal | System returns to the project list |
---
### 6. Alternate Flows / Exceptions
#### A1 - No Description
- Condition: The selected project has no description.
- Flow:
  1. System shows an explicit empty state for the description (see FR-PM-003 AC2).
#### A2 - Change Stage From Details
- Condition: The user wants to change the project's stage.
- Flow:
  1. User opens the stage dropdown in the modal and selects a stage (see UC-STG-001).
  2. System shows the new stage and the automatically updated status (see FR-PM-003 AC4, UC-STS-001).
#### E1 - Details Fail to Load
- Condition: The project details fail to load due to a data access issue.
- System Response: System displays an error state rather than blank or incorrect details (see FR-PM-003 AC3).
---
### 7. Postconditions
#### Success Postconditions
- The project details were displayed; no data changed unless the user changed the stage (A2).
#### Failure Postconditions
- The details are not shown; an error state is displayed instead.
---
### 8. Business Rules
- BR-001: The description and creation date are shown in project details only, not in the project list (ADR-007).
- BR-002: The status is derived from the stage and cannot be set directly (ADR-009).
---
### 9. Non-Functional Requirements Impacted
- NFR IDs (from NFRs.md): NFR-001, NFR-002, NFR-006
- Impact notes per referenced NFR:
  - NFR-001: Viewing details should require a single action (selecting the project).
  - NFR-002: The modal should open within the 2 second response target.
  - NFR-006: No personal user information is shown or stored.
---
### 10. UI / API Notes (Optional)
- UI screen references: project details modal opened from the project list (screen spec TBD in Design phase).
- API endpoint: TBD (Design phase).
- Payload structure: name, description, status, stage, creation date; final structure TBD (Design phase).
---
