# Use Cases (UC)
---
## Use Case Template
### 1. Use Case Identification
| Field | Value |
|-------|--------|
| UC ID | UC-DATA-001 |
| Title | Persist Project Data Across Sessions |
| Related FRs | FR-DATA-001 |
| Domain | |
| Primary Actor | User (Software Engineer) |
| Supporting Actors | System (Persistence Mechanism) |
| Level | System |
| Status | Draft |
| Priority | Must |
---
### 2. Brief Description
The system preserves all project information and progress so that it remains available whenever the user reopens the application, without any manual save action by the user.
---
### 3. Preconditions
- One or more projects have been created and/or updated (see UC-PM-001, UC-STG-001, UC-STS-001).
- The application is open or being reopened.
---
### 4. Trigger
The user closes the application (or ends the session), or reopens the application after a prior session.
---
### 5. Main Success Scenario (Basic Flow)
| Step | Actor Action | System Response |
|------|--------------|----------------|
| 1 | User closes the application (or session ends) | System saves the current state of all projects. Storage mechanism is TBD pending Ambiguity #4 (AN-001) |
| 2 | User reopens the application | System loads the previously saved project data |
| 3 | User views the project list | System displays all projects exactly as last set (name, stage, status) |
---
### 6. Alternate Flows / Exceptions
#### A1 - No Prior Data Exists
- Condition: This is the first use of the application; no projects have been created before.
- Flow:
  1. System finds no saved data.
  2. System displays an empty project list with no error (see FR-DATA-001 AC2).
#### E1 - Storage Unavailable or Corrupted
- Condition: Saved project data cannot be read, or a save operation fails.
- System Response: TBD pending Ambiguity #4 (AN-001) -- the exact failure handling depends on the storage mechanism, which is not yet confirmed. At minimum, the system shall not silently lose data without informing the user (see FR-DATA-001 AC3).
---
### 7. Postconditions
#### Success Postconditions
- All previously created or updated projects, including their stage and status, are present exactly as last set.
#### Failure Postconditions
- TBD pending Ambiguity #4 (AN-001); at minimum, data loss must not occur silently.
---
### 8. Business Rules
- BR-001: Project data must survive an application close/reopen cycle under normal conditions (see NFR-003).
- BR-002: The storage mechanism (local browser storage vs. file vs. future centralized DB per Release 0.2) is TBD pending Ambiguity #4 (AN-001).
---
### 9. Non-Functional Requirements Impacted
- NFR IDs (from NFRs.md): NFR-003, NFR-006
- Impact notes per referenced NFR:
  - NFR-003: This use case is the direct mechanism by which "no data loss under normal conditions" is achieved.
  - NFR-006: Persisted data must not include personal user information.
---
### 10. UI / API Notes (Optional)
- UI screen references: None (background/system behavior, not a distinct screen).
- API endpoint: TBD (Design phase).
- Payload structure: TBD (Design phase); depends on resolution of Ambiguity #4 (AN-001).
---
