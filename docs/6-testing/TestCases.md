# Test Case Registry (Phase 6)

Registry of test cases that verify requirements. One row per test case. IDs
follow `TC-<Area>-NNN`. Each test case cites the FR/UC (and Screen, when it is a
UI test) it verifies. The Given/When/Then acceptance criteria inside each FR are
the test basis. See `LIFECYCLE.md` Phase 6 and `QUALITY-GUIDE.md`.

## Test Case Summary Table

| TC ID | Area | Title | Verifies (FR/UC/UI) | Type (Happy/Boundary/Failure) | Status |
|-------|------|-------|---------------------|-------------------------------|--------|
| TC-PM-001 | Project Management | Create valid project with name and optional description | FR-PM-001, UC-PM-001, UI-PM-004 | Happy | Approved |
| TC-PM-002 | Project Management | Reject project creation when name is empty | FR-PM-001, UC-PM-001, UI-PM-006 | Failure | Approved |
| TC-PM-003 | Project Management | Reject duplicate project name (case and space insensitive) | FR-PM-001, UC-PM-001, UI-PM-007 | Failure | Approved |
| TC-PM-004 | Project Management | Description boundary at 250 characters and paste clamp | FR-PM-001, UC-PM-001, UI-PM-004 | Boundary | Approved |
| TC-PM-005 | Project Management | Display full project list in sidebar dropdown | FR-PM-002, UC-PM-002, UI-PM-002 | Happy | Approved |
| TC-PM-006 | Project Management | Display empty state when no projects exist | FR-PM-002, UC-PM-002, UI-PM-001 | Boundary | Approved |
| TC-PM-007 | Project Management | Display project details card upon selection or creation | FR-PM-003, UC-PM-003, UI-PM-003 | Happy | Approved |
| TC-PM-008 | Project Management | Display explicit empty state when description is missing | FR-PM-003, UC-PM-003, UI-PM-003 | Boundary | Approved |
| TC-PM-009 | Project Management | Filter project list by partial name on search button click | FR-PM-004, UC-PM-004, UI-PM-002 | Happy | Approved |
| TC-PM-010 | Project Management | Display "no results" state and clear search | FR-PM-004, UC-PM-004, UI-PM-005 | Boundary | Approved |
| TC-PM-011 | Project Management | Edit project name and description successfully | FR-PM-005, UC-PM-005, UI-PM-008 | Happy | Approved |
| TC-PM-012 | Project Management | Edit validation: reject duplicate name or empty name | FR-PM-005, UC-PM-005, UI-PM-008 | Failure | Approved |
| TC-PM-013 | Project Management | Delete project immediately without confirmation | FR-PM-006, UC-PM-006, UI-PM-008 | Happy | Approved |
| TC-PM-014 | Project Management | Delete last project transitions to "no projects" empty state | FR-PM-006, UC-PM-006, UI-PM-001 | Boundary | Approved |
| TC-PM-015 | Project Management | Display "Choose a Project" prompt when none selected | FR-PM-007, UC-PM-003, UI-PM-009 | Happy | Approved |
| TC-STG-001 | Stage Tracking | Assign development stage from dropdown | FR-STG-001, UC-STG-001, UI-STG-001 | Happy | Approved |
| TC-STG-002 | Stage Tracking | Dropdown displays exactly the 6 fixed stages | FR-STG-001, UC-STG-001, UI-STG-001 | Boundary | Approved |
| TC-STG-003 | Stage Tracking | Modify existing project stage to earlier or later stage | FR-STG-002, UC-STG-001, UI-STG-001 | Happy | Approved |
| TC-STG-004 | Stage Tracking | Selecting same stage keeps stage unchanged | FR-STG-002, UC-STG-001, UI-STG-001 | Boundary | Approved |
| TC-STG-005 | Stage Tracking | Display current stage and show explicit empty state if unassigned | FR-STG-003, UC-STG-001, UI-STG-001 | Boundary | Approved |
| TC-STS-001 | Status Tracking | Display derived status and show "No status set" when unassigned | FR-STS-001, UC-STS-001, UI-STG-001 | Boundary | Approved |
| TC-STS-002 | Status Tracking | Stage=Done automatically sets status to "Completed" | FR-STS-001, FR-STS-002, UC-STS-001, UI-STG-001 | Happy | Approved |
| TC-STS-003 | Status Tracking | Stage=Planning automatically sets status to "Not Started" | FR-STS-002, UC-STS-001, UI-STG-001 | Happy | Approved |
| TC-STS-004 | Status Tracking | Stage in (Analysis, Design, Implementation, Testing) sets "In Progress" | FR-STS-002, UC-STS-001, UI-STG-001 | Happy | Approved |
| TC-DATA-001 | Data Persistence | Projects, stages, and statuses persist across browser reload | FR-DATA-001, UC-DATA-001, UI-DATA-001 | Happy | Approved |
| TC-DATA-002 | Data Persistence | Display save failure warning banner when storage write fails | FR-DATA-001, UC-DATA-001, UI-DATA-001 | Failure | Approved |
| TC-DATA-003 | Data Persistence | Corrupted localStorage triggers generic error screen with Try Again | FR-DATA-001, FR-PM-002, UI-GEN-001 | Failure | Approved |

---

## Detailed Test Case Specifications

### TC-PM-001: Create valid project with name and optional description
- **Area:** Project Management
- **Verifies:** FR-PM-001 (AC1, AC4, AC5, AC7), UC-PM-001, UI-PM-004, UI-PM-003
- **Type:** Happy Path
- **Given:** The user has opened the create project modal.
- **When:** The user enters a unique name "Alfa Project", an optional description "First test project", and clicks "Create".
- **Then:** The modal closes, the project is stored in localStorage with an auto-generated UUID and creation date, appears in the sidebar list, and the project details card opens displaying the project information.

### TC-PM-002: Reject project creation when name is empty
- **Area:** Project Management
- **Verifies:** FR-PM-001 (AC2), UC-PM-001, UI-PM-006
- **Type:** Failure Path
- **Given:** The user has opened the create project modal.
- **When:** The user leaves the project name field blank and clicks "Create".
- **Then:** The system prevents submission, highlights the name field with a red border, and displays "Project name is required." below the input.

### TC-PM-003: Reject duplicate project name (case and space insensitive)
- **Area:** Project Management
- **Verifies:** FR-PM-001 (AC8), UC-PM-001, UI-PM-007
- **Type:** Failure Path
- **Given:** An existing project named "Mobile App" is stored.
- **When:** The user attempts to create a project named "mobile app" or "  Mobile   App  ".
- **Then:** The system rejects creation, displays "This name is already used by another project.", and does not create a duplicate record.

### TC-PM-004: Description boundary at 250 characters and paste clamp
- **Area:** Project Management
- **Verifies:** FR-PM-001 (AC6, AC9), UC-PM-001, UI-PM-004
- **Type:** Boundary Path
- **Given:** The user is typing or pasting into the description field.
- **When:** The user enters 250 characters, or pastes a 300-character string.
- **Then:** The character counter displays "250/250", further typed characters are blocked, and pasted text is clamped to exactly 250 characters.

### TC-PM-005: Display full project list in sidebar dropdown
- **Area:** Project Management
- **Verifies:** FR-PM-002 (AC1), UC-PM-002, UI-PM-002
- **Type:** Happy Path
- **Given:** Three projects ("Project A", "Project B", "Project C") exist in localStorage.
- **When:** The user views the sidebar with Projects expanded.
- **Then:** All three project names appear as selectable list items in the sidebar.

### TC-PM-006: Display empty state when no projects exist
- **Area:** Project Management
- **Verifies:** FR-PM-002 (AC2), UC-PM-002, UI-PM-001
- **Type:** Boundary Path
- **Given:** localStorage contains zero projects.
- **When:** The user launches the application.
- **Then:** The main area displays "No Projects Yet", with a description and an "Add New Project" button; the top search bar is hidden.

### TC-PM-007: Display project details card upon selection or creation
- **Area:** Project Management
- **Verifies:** FR-PM-003 (AC1, AC5), UC-PM-003, UI-PM-003
- **Type:** Happy Path
- **Given:** A project "Beta" exists with description, creation date, stage, and status.
- **When:** The user selects "Beta" from the sidebar list.
- **Then:** A gradient details card renders showing the project name, description, formatted creation date, status, stage control, and three-dot action menu.

### TC-PM-008: Display explicit empty state when description is missing
- **Area:** Project Management
- **Verifies:** FR-PM-003 (AC2), UC-PM-003, UI-PM-003
- **Type:** Boundary Path
- **Given:** A project was created without a description.
- **When:** The user views the project details card.
- **Then:** The description section displays the italicized text "No description" rather than an empty blank space.

### TC-PM-009: Filter project list by partial name on search button click
- **Area:** Project Management
- **Verifies:** FR-PM-004 (AC1, AC3), UC-PM-004, UI-PM-002
- **Type:** Happy Path
- **Given:** Projects "Web Portal", "Mobile API", and "Website Redesign" exist.
- **When:** The user types "web" into the search bar and clicks "Search" (or presses Enter).
- **Then:** The sidebar list filters to show only "Web Portal" and "Website Redesign". When search is cleared, the full list returns.

### TC-PM-010: Display "no results" state and clear search
- **Area:** Project Management
- **Verifies:** FR-PM-004 (AC2, AC4), UC-PM-004, UI-PM-005
- **Type:** Boundary Path
- **Given:** Projects exist in the application.
- **When:** The user searches for "NonExistentProject123".
- **Then:** The main area displays the "No results found" card with a "Clear search" button; clicking it restores the list and clears the input.

### TC-PM-011: Edit project name and description successfully
- **Area:** Project Management
- **Verifies:** FR-PM-005 (AC1), UC-PM-005, UI-PM-008
- **Type:** Happy Path
- **Given:** Project "Old Name" details card is open.
- **When:** The user clicks the three-dot menu, chooses "Edit", modifies name to "New Name", updates description, and clicks "Save".
- **Then:** The card and sidebar update immediately with the new values, and changes persist in localStorage.

### TC-PM-012: Edit validation: reject duplicate name or empty name
- **Area:** Project Management
- **Verifies:** FR-PM-005 (AC2, AC3), UC-PM-005, UI-PM-008
- **Type:** Failure Path
- **Given:** Two projects "Project 1" and "Project 2" exist, and the user is editing "Project 1".
- **When:** The user changes name to "" or to "Project 2".
- **Then:** The system rejects saving and surfaces the appropriate validation error message. (Keeping its own original name "Project 1" is allowed).

### TC-PM-013: Delete project immediately without confirmation
- **Area:** Project Management
- **Verifies:** FR-PM-006 (AC1), UC-PM-006, UI-PM-008
- **Type:** Happy Path
- **Given:** A project details card is open.
- **When:** The user clicks the three-dot menu and selects "Delete".
- **Then:** The project is deleted immediately from memory and localStorage without a confirmation dialog; it is removed from the sidebar, and the card closes.

### TC-PM-014: Delete last project transitions to "no projects" empty state
- **Area:** Project Management
- **Verifies:** FR-PM-006 (AC2), UC-PM-006, UI-PM-001
- **Type:** Boundary Path
- **Given:** Exactly one project exists in the system.
- **When:** The user deletes that project.
- **Then:** The UI transitions immediately to the "No Projects Yet" empty state (UI-PM-001) and hides the top search bar.

### TC-PM-015: Display "Choose a Project" prompt when none selected
- **Area:** Project Management
- **Verifies:** FR-PM-007 (AC1, AC2), UC-PM-003, UI-PM-009
- **Type:** Happy Path
- **Given:** Projects exist, but the user closes the details card or deselects.
- **When:** The main area has no active selected project.
- **Then:** The "Choose a Project" prompt is displayed, asking the user to choose or create a project.

### TC-STG-001: Assign development stage from dropdown
- **Area:** Stage Tracking
- **Verifies:** FR-STG-001 (AC1), UC-STG-001, UI-STG-001
- **Type:** Happy Path
- **Given:** A project has stage=null ("No stage assigned").
- **When:** The user clicks the stage control and selects "Planning".
- **Then:** The project stage becomes "Planning", the status updates automatically to "Not Started", and changes are persisted.

### TC-STG-002: Dropdown displays exactly the 6 fixed stages
- **Area:** Stage Tracking
- **Verifies:** FR-STG-001 (AC2), UC-STG-001, UI-STG-001
- **Type:** Boundary Path
- **Given:** The user clicks the stage control on any project.
- **When:** The dropdown opens.
- **Then:** It contains exactly: Planning, Analysis, Design, Implementation, Testing, Done in that order, with appropriate stage indicators (check / orange dot / grey dot).

### TC-STG-003: Modify existing project stage to earlier or later stage
- **Area:** Stage Tracking
- **Verifies:** FR-STG-002 (AC1, AC4), UC-STG-001, UI-STG-001
- **Type:** Happy Path
- **Given:** A project currently has stage="Implementation".
- **When:** The user selects "Design" (earlier) or "Done" (later).
- **Then:** The project stage updates to the newly selected stage, and the status updates according to ADR-009.

### TC-STG-004: Selecting same stage keeps stage unchanged
- **Area:** Stage Tracking
- **Verifies:** FR-STG-002 (AC2), UC-STG-001, UI-STG-001
- **Type:** Boundary Path
- **Given:** A project currently has stage="Testing".
- **When:** The user opens the dropdown and clicks "Testing" again.
- **Then:** The stage remains "Testing", status remains "In Progress", and no redundant state corruption occurs.

### TC-STG-005: Display current stage and show explicit empty state if unassigned
- **Area:** Stage Tracking
- **Verifies:** FR-STG-003 (AC1, AC2), UC-STG-001, UI-STG-001
- **Type:** Boundary Path
- **Given:** A project is loaded.
- **When:** Stage is null, it displays "No stage assigned"; when assigned, it displays the stage name.
- **Then:** The UI renders the correct text without blank gaps or null strings.

### TC-STS-001: Display derived status and show "No status set" when unassigned
- **Area:** Status Tracking
- **Verifies:** FR-STS-001 (AC1, AC2), UC-STS-001, UI-STG-001
- **Type:** Boundary Path
- **Given:** A project has stage=null.
- **When:** The user views the status control.
- **Then:** Status displays "No status set".

### TC-STS-002: Stage=Done automatically sets status to "Completed"
- **Area:** Status Tracking
- **Verifies:** FR-STS-001 (AC1), FR-STS-002 (AC3), UC-STS-001, UI-STG-001
- **Type:** Happy Path
- **Given:** A project's stage is changed to "Done".
- **When:** The stage change is confirmed and saved.
- **Then:** Status displays "Completed".

### TC-STS-003: Stage=Planning automatically sets status to "Not Started"
- **Area:** Status Tracking
- **Verifies:** FR-STS-002 (AC1), UC-STS-001, UI-STG-001
- **Type:** Happy Path
- **Given:** A project's stage is set to "Planning".
- **When:** The stage change is saved.
- **Then:** Status displays "Not Started".

### TC-STS-004: Stage in (Analysis, Design, Implementation, Testing) sets "In Progress"
- **Area:** Status Tracking
- **Verifies:** FR-STS-002 (AC2), UC-STS-001, UI-STG-001
- **Type:** Happy Path
- **Given:** A project stage is changed to any of Analysis, Design, Implementation, or Testing.
- **When:** The stage change is saved.
- **Then:** Status displays "In Progress".

### TC-DATA-001: Projects, stages, and statuses persist across browser reload
- **Area:** Data Persistence
- **Verifies:** FR-DATA-001 (AC1), UC-DATA-001, UI-DATA-001
- **Type:** Happy Path
- **Given:** Multiple projects with distinct stages and descriptions have been created and edited.
- **When:** The browser tab is closed and reopened or refreshed.
- **Then:** All projects, their names, descriptions, creation dates, stages, and statuses are restored exactly as last saved.

### TC-DATA-002: Display save failure warning banner when storage write fails
- **Area:** Data Persistence
- **Verifies:** FR-DATA-001 (AC3), UC-DATA-001, UI-DATA-001
- **Type:** Failure Path
- **Given:** localStorage write fails (e.g., storage quota exceeded or disabled).
- **When:** The user attempts to save a new project or stage change.
- **Then:** The system displays the red-outlined save failure warning banner ("Saving failed. Please try again.") without losing existing in-memory state or silently dropping data.

### TC-DATA-003: Corrupted localStorage triggers generic error screen with Try Again
- **Area:** Data Persistence
- **Verifies:** FR-DATA-001 (AC3), FR-PM-002 (AC3), UI-GEN-001
- **Type:** Failure Path
- **Given:** localStorage contains non-JSON corrupted data or invalid schema.
- **When:** The application initializes.
- **Then:** The application hides the app shell and displays the full-page Generic Error screen (UI-GEN-001) with a "Try Again" button.
