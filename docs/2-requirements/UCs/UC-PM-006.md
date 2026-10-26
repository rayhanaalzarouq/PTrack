# Use Cases (UC)
---
## Use Case Template
### 1. Use Case Identification
| Field | Value |
|-------|--------|
| UC ID | UC-PM-006 |
| Title | Delete Project |
| Related FRs | FR-PM-006 |
| Domain | |
| Primary Actor | User (Software Engineer) |
| Supporting Actors | None |
| Level | User Goal |
| Status | Approved |
| Priority | Must |
---
### 2. Brief Description
The user deletes an existing project from its three-dot menu, so unwanted projects are removed.
---
### 3. Preconditions
- The application is open.
- The details card of an existing project is open (see UC-PM-003).
---
### 4. Trigger
The user opens the three-dot menu in a project's details card and chooses Delete.
---
### 5. Main Success Scenario (Basic Flow)
| Step | Actor Action | System Response |
|------|--------------|----------------|
| 1 | User opens the three-dot menu in the details card and selects Delete | System deletes the project immediately, without a confirmation step |
| 2 | (none) | System removes the project from the list and from storage and closes the details card |
---
### 6. Alternate Flows / Exceptions
#### A1 - Last Project Deleted
- Condition: The deleted project was the only one.
- Flow:
  1. System displays the "no projects" state (see FR-PM-006 AC2).
#### E1 - Save Fails
- Condition: Saving the change fails.
- System Response: The project remains and the system displays the save failure warning (see FR-PM-006 AC3, FR-DATA-001 AC3).
---
### 7. Postconditions
#### Success Postconditions
- The project no longer appears in the list and is not stored.
#### Failure Postconditions
- The project remains unchanged.
---
### 8. Business Rules
- BR-001: Deleting needs no confirmation; selecting Delete deletes the project (ADR-014).
---
### 9. Non-Functional Requirements Impacted
- NFR IDs (from NFRs.md): NFR-001, NFR-002, NFR-003, NFR-006
- Impact notes per referenced NFR:
  - NFR-001: Deleting should require minimal effort.
  - NFR-002: Deleting should complete within the 2 second response target.
  - NFR-003: The deletion must persist between sessions.
  - NFR-006: No personal user information is collected.
---
### 10. UI / API Notes (Optional)
- UI screen references: UI-PM-008 (Edit and Delete Menu), UI-DATA-001 (Save Failure).
- API endpoint: TBD (Design phase).
- Payload structure: TBD (Design phase).
---
