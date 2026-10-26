# Use Cases (UC)
---
## Use Case Template
### 1. Use Case Identification
| Field | Value |
|-------|--------|
| UC ID | UC-PM-005 |
| Title | Edit Project |
| Related FRs | FR-PM-005 |
| Domain | |
| Primary Actor | User (Software Engineer) |
| Supporting Actors | None |
| Level | User Goal |
| Status | Approved |
| Priority | Must |
---
### 2. Brief Description
The user edits the name and the description of an existing project from its three-dot menu, so the project's details stay correct.
---
### 3. Preconditions
- The application is open.
- The details card of an existing project is open (see UC-PM-003).
---
### 4. Trigger
The user opens the three-dot menu in a project's details card and chooses to edit it.
---
### 5. Main Success Scenario (Basic Flow)
| Step | Actor Action | System Response |
|------|--------------|----------------|
| 1 | User opens the three-dot menu in the details card and selects Edit | System shows the project's current name and description for editing |
| 2 | User changes the name and/or the description | System accepts the input; a counter shows the description characters used out of 250 |
| 3 | User saves | System updates the project and shows the updated details |
---
### 6. Alternate Flows / Exceptions
#### E1 - Empty Name
- Condition: The user saves with an empty name.
- System Response: System prevents the change and indicates that a name is required (see FR-PM-005 AC2).
#### E2 - Name Already Used
- Condition: The name matches the name of another project (same letters, ignoring letter case and spaces).
- System Response: System prevents the change and displays a message that the name is already used (see FR-PM-005 AC3).
#### E3 - Description Limit Reached
- Condition: The description reaches 250 characters, or the user pastes longer text.
- System Response: System stops accepting characters and cuts pasted text to 250 characters (see FR-PM-005 AC4).
#### E4 - Save Fails
- Condition: Saving the edit fails.
- System Response: System keeps the previous values and displays the save failure warning (see FR-PM-005 AC5, FR-DATA-001 AC3).
---
### 7. Postconditions
#### Success Postconditions
- The project reflects the edited name and description.
#### Failure Postconditions
- The project keeps its previous values.
---
### 8. Business Rules
- BR-001: The same rules as creation apply: the name is required and unique (ignoring letter case and spaces); the description is at most 250 characters (see UC-PM-001 BR-001 to BR-003).
---
### 9. Non-Functional Requirements Impacted
- NFR IDs (from NFRs.md): NFR-001, NFR-002, NFR-003, NFR-006
- Impact notes per referenced NFR:
  - NFR-001: Editing should require minimal effort.
  - NFR-002: Editing should complete within the 2 second response target.
  - NFR-003: Edited data must persist between sessions.
  - NFR-006: No personal user information is collected.
---
### 10. UI / API Notes (Optional)
- UI screen references: UI-PM-008 (Edit and Delete Menu), UI-DATA-001 (Save Failure).
- API endpoint: TBD (Design phase).
- Payload structure: name, description; final structure TBD (Design phase).
---
