# Use Cases (UC)
---
## Use Case Template
### 1. Use Case Identification
| Field | Value |
|-------|--------|
| UC ID | UC-PM-002 |
| Title | View Project List |
| Related FRs | FR-PM-002 |
| Domain | |
| Primary Actor | User (Software Engineer) |
| Supporting Actors | None |
| Level | User Goal |
| Status | Approved |
| Priority | Must |
---
### 2. Brief Description
The user views the list of all projects they have created in PTrack, to get an overview of what is being tracked.
---
### 3. Preconditions
- The application is open.
- No login or account is required (single local user).
---
### 4. Trigger
The user opens or navigates to the project list view.
---
### 5. Main Success Scenario (Basic Flow)
| Step | Actor Action | System Response |
|------|--------------|----------------|
| 1 | User opens the project list view | System retrieves all stored projects |
| 2 | (none) | System displays each project with its basic information (field set TBD pending Ambiguity #1, AN-001) |
| 3 | User reviews the list | System keeps the list available for further actions (e.g., updating stage/status) |
---
### 6. Alternate Flows / Exceptions
#### A1 - No Projects Exist Yet
- Condition: The user has not created any projects yet.
- Flow:
  1. System displays an empty state indicating no projects exist (see FR-PM-002 AC2).
#### E1 - List Fails to Load
- Condition: The project list fails to load due to a data access issue.
- System Response: System displays an error state rather than an empty or partial list (see FR-PM-002 AC3).
---
### 7. Postconditions
#### Success Postconditions
- The user can see all existing projects (or a clear empty state if none exist).
#### Failure Postconditions
- The project list is not shown; an error state is displayed instead.
---
### 8. Business Rules
- BR-001: Every project the user has created must appear in the list unless a failure occurs.
- BR-002: The exact fields shown per project (beyond name) are TBD pending Ambiguity #1 (AN-001).
---
### 9. Non-Functional Requirements Impacted
- NFR IDs (from NFRs.md): NFR-001, NFR-002
- Impact notes per referenced NFR:
  - NFR-001: The list view should remain simple and easy to scan.
  - NFR-002: The list should load within the 2 second response target.
---
### 10. UI / API Notes (Optional)
- UI screen references: TBD (Design phase).
- API endpoint: TBD (Design phase).
- Payload structure: TBD (Design phase); depends on resolution of Ambiguity #1 (AN-001).
---
