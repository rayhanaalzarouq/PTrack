# Use Cases (UC)
---
## Use Case Template
### 1. Use Case Identification
| Field | Value |
|-------|--------|
| UC ID | UC-PM-004 |
| Title | Search Projects |
| Related FRs | FR-PM-004 |
| Domain | |
| Primary Actor | User (Software Engineer) |
| Supporting Actors | None |
| Level | User Goal |
| Status | Approved |
| Priority | Must |
---
### 2. Brief Description
The user types a project name in the search bar and selects the search button to filter the project list and quickly find a project.
---
### 3. Preconditions
- The application is open and the project list view is displayed.
- At least one project exists.
---
### 4. Trigger
The user types in the search bar and selects the search button.
---
### 5. Main Success Scenario (Basic Flow)
| Step | Actor Action | System Response |
|------|--------------|----------------|
| 1 | User types text in the search bar and selects the search button | System filters the list by project name |
| 2 | User reviews the matching projects | System shows only the projects whose names match |
| 3 | User clears the search field and selects the search button | System displays the full project list again |
---
### 6. Alternate Flows / Exceptions
#### A1 - No Matching Projects
- Condition: The typed text matches no project name.
- Flow:
  1. System displays a "no results" state with a Clear search button (see FR-PM-004 AC2).
  2. User selects Clear search; System clears the search field and displays the full project list (see FR-PM-004 AC4).
---
### 7. Postconditions
#### Success Postconditions
- The list shows only matching projects, or the full list after the search is cleared.
#### Failure Postconditions
- Not applicable; searching does not change any stored data.
---
### 8. Business Rules
- BR-001: Search applies to the project name only (ADR-008).
- BR-002: The list is filtered when the user selects the search button, not while typing (SWE decision).
---
### 9. Non-Functional Requirements Impacted
- NFR IDs (from NFRs.md): NFR-001, NFR-002, NFR-006
- Impact notes per referenced NFR:
  - NFR-001: Search should take one typing step and one button selection.
  - NFR-002: Filtering should update within the 2 second response target.
  - NFR-006: Search terms are not collected or stored.
---
### 10. UI / API Notes (Optional)
- UI screen references: UI-PM-002 (search bar), UI-PM-005 (Search No Results).
- API endpoint: TBD (Design phase).
- Payload structure: TBD (Design phase).
---
