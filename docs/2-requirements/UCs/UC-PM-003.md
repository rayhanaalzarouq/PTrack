# Use Cases (UC)
---
## Use Case Template
### 1. Use Case Identification
| Field | Value |
|-------|--------|
| UC ID | UC-PM-003 |
| Title | Edit or Delete Project |
| Related FRs | FR-PM-003, FR-PM-004 |
| Domain | |
| Primary Actor | User (Software Engineer) |
| Supporting Actors | None |
| Level | User Goal |
| Status | Draft |
| Priority | Should |
---
### 2. Brief Description
The user edits an existing project's name, or permanently deletes a project, so the project list stays accurate and free of unwanted entries.
---
### 3. Preconditions
- The project already exists (see UC-PM-001).
- The application is open.
---
### 4. Trigger
The user chooses to edit or delete a project from the project list.
---
### 5. Main Success Scenario (Basic Flow)
| Step | Actor Action | System Response |
|------|--------------|----------------|
| 1 | User selects a project and chooses "Edit" | System presents the current name for editing |
| 2 | User updates the name and confirms | System validates and updates the project's name |
| 3 | User views the project list | System displays the project with its updated name |
---
### 6. Alternate Flows / Exceptions
#### A1 - Delete Project
- Condition: The user chooses "Delete" instead of "Edit".
- Flow:
  1. System prompts the user to confirm the deletion.
  2. User confirms.
  3. System permanently removes the project from the project list (see FR-PM-004).
#### A2 - Cancel Deletion
- Condition: The user cancels the deletion confirmation prompt.
- Flow:
  1. System takes no action; the project remains in the list unchanged.
#### E1 - Empty Name on Edit
- Condition: The user attempts to confirm an edit with an empty name field.
- System Response: System rejects the edit and indicates that a name is required (see FR-PM-003 AC2).
#### E2 - Edit or Delete Failure
- Condition: An unexpected error occurs while saving an edit or processing a deletion.
- System Response: System does not partially update or delete the project and reports the failure to the user (see FR-PM-003 AC3, FR-PM-004 AC3).
---
### 7. Postconditions
#### Success Postconditions
- The project reflects its updated name, or no longer appears in the project list if deleted.
#### Failure Postconditions
- The project is unchanged: its name is as before, and it remains in the project list.
---
### 8. Business Rules
- BR-001: A project name is required; an edit cannot result in an empty name (see FR-PM-003).
- BR-002: Deletion is permanent in v0.1.0; there is no undo and no backup/export to recover a deleted project (see ADR-006, FR-PM-004).
- BR-003: Deletion requires explicit user confirmation before it takes effect.
---
### 9. Non-Functional Requirements Impacted
- NFR IDs (from NFRs.md): NFR-001, NFR-002, NFR-003
- Impact notes per referenced NFR:
  - NFR-001: Editing and deleting a project should remain simple and require minimal effort, while the deletion confirmation step remains a deliberate exception to prevent accidental data loss.
  - NFR-002: Edit and delete actions should complete within the 2 second response target.
  - NFR-003: Deletion is a data-changing operation; the updated project list (with the project removed) must persist correctly per FR-DATA-001.
---
### 10. UI / API Notes (Optional)
- UI screen references: UI-PM-001 (Project Dashboard).
- API endpoint: TBD (Design phase).
- Payload structure: TBD (Design phase).
---
