# Use Cases (UC)
---
## Use Case Template
### 1. Use Case Identification
| Field | Value |
|-------|--------|
| UC ID | UC-PM-001 |
| Title | Create New Project |
| Related FRs | FR-PM-001 |
| Domain | |
| Primary Actor | User (Software Engineer) |
| Supporting Actors | None |
| Level | User Goal |
| Status | Approved |
| Priority | Must |
---
### 2. Brief Description
The user creates a new project in PTrack by providing its name, so it can be tracked going forward.
---
### 3. Preconditions
- The application is open and the user has access to the project list view.
- No login or account is required (single local user per NFR-006 and PRD assumptions).
- No specific configuration is required.
---
### 4. Trigger
The user selects the action to create a new project.
---
### 5. Main Success Scenario (Basic Flow)
| Step | Actor Action | System Response |
|------|--------------|----------------|
| 1 | User selects "Create Project" (or equivalent action) | System presents a field to enter the project name |
| 2 | User enters a valid project name | System accepts the input |
| 3 | User confirms creation | System creates the project and adds it to the project list |
---
### 6. Alternate Flows / Exceptions
#### A1 - Additional Fields Entered
- Condition: Additional project fields beyond name are entered (field set TBD pending Ambiguity #1, AN-001).
- Flow:
  1. User enters additional information if the field exists in the UI.
  2. System stores it alongside the project name.
#### E1 - Empty Name Submitted
- Condition: User attempts to confirm creation with an empty name field.
- System Response: System rejects the creation and indicates that a name is required (see FR-PM-001 AC2).
#### E2 - Creation Failure
- Condition: An unexpected error occurs while creating the project.
- System Response: System does not create a partial project and reports the failure to the user (see FR-PM-001 AC3).
---
### 7. Postconditions
#### Success Postconditions
- A new project exists and appears in the project list with the entered name.
#### Failure Postconditions
- No new project is created; the project list is unchanged.
---
### 8. Business Rules
- BR-001: A project name is required to create a project (per FR-PM-001).
- BR-002: Additional required/optional fields beyond name are TBD pending Ambiguity #1 (AN-001).
---
### 9. Non-Functional Requirements Impacted
- NFR IDs (from NFRs.md): NFR-001, NFR-002, NFR-006
- Impact notes per referenced NFR:
  - NFR-001: The creation flow should remain simple and require minimal user effort.
  - NFR-002: Project creation should complete within the 2 second response target.
  - NFR-006: No personal user information is collected as part of project creation.
---
### 10. UI / API Notes (Optional)
- UI screen references: TBD (Design phase).
- API endpoint: TBD (Design phase).
- Payload structure: TBD (Design phase); depends on resolution of Ambiguity #1 (AN-001).
---
