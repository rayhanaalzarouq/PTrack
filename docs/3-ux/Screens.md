Screen Registry (UI)
====================

Registry of screens (UIs). One row per screen. IDs follow `UI-<DomainCode>-NNN`.
Each screen cites the FR/UC IDs it realizes; the detail lives in
`modules/<Module>/UI-<ID>.md`. See `UX-STANDARD.md`.

| UI ID | Module | Screen | Purpose | States | Realizes (FR/UC) | Mockup | Status |
|-------|--------|--------|---------|--------|------------------|--------|--------|
| UI-PM-001 | Project Management | No Projects | Show that no projects exist and invite the user to create one | empty | FR-PM-002, UC-PM-002 | Wireframes/UI-PM-001.png | Approved |
| UI-PM-002 | Project Management | Project List | List projects by name; search bar; open details | ok/filtered/error | FR-PM-002, FR-PM-004, UC-PM-002, UC-PM-004 | Wireframes/UI-PM-002.png | Approved |
| UI-PM-003 | Project Management | Project Details | Card with name, description, creation date, status, stage; shown after creation or selection | ok/no-description/error | FR-PM-003, FR-PM-001, UC-PM-003, UC-PM-001 | Wireframes/UI-PM-003.png | Approved |
| UI-PM-004 | Project Management | Create Project | Enter name and description with a character counter; typing stops at 250 characters | default/limit-reached | FR-PM-001, UC-PM-001 | Wireframes/UI-PM-004.png | Approved |
| UI-PM-005 | Project Management | Search No Results | No project name matches the search | no-results | FR-PM-004, UC-PM-004 | Wireframes/UI-PM-005.png | Approved |
| UI-PM-006 | Project Management | Name Required Warning | Warn that a project name is required | warning | FR-PM-001, UC-PM-001 | Wireframes/UI-PM-006.png | Approved |
| UI-PM-007 | Project Management | Name Already Used | Tell the user the entered name is already used | error | FR-PM-001, UC-PM-001 | Wireframes/UI-PM-007.png | Approved |
| UI-PM-008 | Project Management | Edit and Delete Menu | Edit (name, description), delete, or close a project from the three-dot menu in the details card | menu-open/edit-form | FR-PM-005, FR-PM-006, FR-PM-003, UC-PM-005, UC-PM-006 | Wireframes/UI-PM-008.png | Approved |
| UI-PM-009 | Project Management | Choose a Project | Ask the user to choose a project or create one when none is selected | prompt | FR-PM-007, UC-PM-003 | Wireframes/UI-PM-009.png | Approved |
| UI-STG-001 | Stage Tracking | Project Status and Stage | Show status and stage; change the stage from a dropdown | ok/dropdown-open/no-stage | FR-STG-001, FR-STG-002, FR-STG-003, FR-STS-001, FR-STS-002, UC-STG-001, UC-STS-001 | Wireframes/UI-STG-001.png | Approved |
| UI-DATA-001 | Data Persistence | Save Failure | Warn the user that saving failed (message only, no button) | error | FR-DATA-001, FR-PM-001, FR-STG-001, FR-STG-002, FR-STS-002, FR-PM-005, FR-PM-006, UC-DATA-001, UC-PM-001, UC-STG-001, UC-STS-001, UC-PM-005, UC-PM-006 | Wireframes/UI-DATA-001.png | Approved |
| UI-GEN-001 | General | Generic Error | Tell the user about a load failure or any error other than a save failure, with a Try again button | error | FR-PM-002, FR-PM-003, FR-STG-003, FR-STS-001, UC-PM-002, UC-PM-003 | Wireframes/UI-GEN-001.png | Approved |

Status values follow `SCHEMA.md` (Draft | In Review | Approved | Deprecated).
Back-reference each UI ID in the UI/API notes of the FR/UC it realizes, and in
the Traceability section of the test cases that verify it.
