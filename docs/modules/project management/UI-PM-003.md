# UI Screen Specification
---
## 1. Screen Identification
| Field | Value |
|-------|--------|
| UI ID | UI-PM-003 |
| Title | Project Details |
| Module | Project Management |
| Purpose | Show a project's information in the center of the interface, after the project is created or selected from the list (a card in the main area) |
| Persona | PER-PM-001 |
| Status | Approved |
| Priority | Must |
| Target Release | v0.1.0 |
| Wireframe | Wireframes/UI-PM-003.png |
---
## 2. Realizes
| Type | IDs |
|------|-----|
| Functional Requirements | FR-PM-003, FR-PM-001 (AC1) |
| Use Cases | UC-PM-003, UC-PM-001 (step 3) |
| Decisions | ADR-007 |
---
## 3. Components
| # | Component | Description |
|---|-----------|-------------|
| 1 | Details card | Card in the main area, below the search bar (in the frame it is not an overlay: the sidebar and search bar stay visible and undimmed); opens when a project is selected in UI-PM-002, and right after a project is created in UI-PM-004 |
| 2 | Name | Project name as the card heading (for example "Cafe Website") |
| 3 | Description | The project description shown in full (for example a client project summary of about 200 characters) |
| 4 | Creation date | Label "Created" with the date below it (for example "3/12/2026"), at the bottom left |
| 5 | Status and stage control | At the bottom right: "Status" with its value and "Stage" with its value (for example "In Progress" and "Testing") and a chevron that opens the stage list (see UI-STG-001) |
| 6 | Three-dot menu | At the top right of the card; opens the Edit and Delete menu (UI-PM-008) |
| 7 | Create Project action | Below the card: an "Add New Project" button that opens UI-PM-004 |
| 8 | Close action | Not a separate button: "close" is an item in the three-dot menu (UI-PM-008) and closes the details (FR-PM-003 AC6) |
---
## 4. States
| State | What the user sees | Source | Mockup |
|-------|--------------------|--------|--------|
| Loaded | Name, description, creation date, status, stage | FR-PM-003 AC1 | Yes |
| No description | Explicit empty state, e.g. "No description" | FR-PM-003 AC2 | Deferred |
| Error | Error state instead of blank or incorrect details (shown with UI-GEN-001) | FR-PM-003 AC3 | Yes (UI-GEN-001) |
| Closed | Details closed | FR-PM-003 AC6 | Yes (UI-PM-008) |
---
## 5. Data
| Field | Source |
|-------|--------|
| Name | User (at creation) |
| Description | User (optional, at creation) |
| Creation date | System |
| Status | System (derived from stage, ADR-009) |
| Stage | User (via UI-STG-001) |

Notes:
- The details are a card in the main area, not a modal (SWE decision). Edit, Delete, and close are items of the three-dot menu (UI-PM-008); closing shows the "choose a project" message (UI-PM-009).
- The creation date format is not specified ("3/12/2026" can be read as 3 December or 12 March).
---
## 6. Accessibility
See Accessibility.md (target: WCAG 2.1 Level A).
---
## 7. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Persona | PER-PM-001 |
| User Flows | UF-003 |
| Related Screens | UI-PM-002, UI-PM-004, UI-PM-008, UI-STG-001 |
| Test Cases | TC-XXX |
---
