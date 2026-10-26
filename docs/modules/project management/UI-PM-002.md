# UI Screen Specification
---
## 1. Screen Identification
| Field | Value |
|-------|--------|
| UI ID | UI-PM-002 |
| Title | Project List |
| Module | Project Management |
| Purpose | List all projects by name, with a search bar to filter them, and open a project's details |
| Persona | PER-PM-001 |
| Status | Approved |
| Priority | Must |
| Target Release | v0.1.0 |
| Wireframe | Wireframes/UI-PM-002.png |
---
## 2. Realizes
| Type | IDs |
|------|-----|
| Functional Requirements | FR-PM-002 (AC1, AC3), FR-PM-004 |
| Use Cases | UC-PM-002, UC-PM-004 |
| Decisions | ADR-007, ADR-008 |
---
## 3. Components
| # | Component | Description |
|---|-----------|-------------|
| 1 | Sidebar | App name "PTrack" with its logo, and a "Projects" dropdown control |
| 2 | Project list | Opens from the "Projects" dropdown in the sidebar; one row per project showing the project name only (the frame shows one row, "Caffe Website"); selecting a row shows that project's details (UI-PM-003) |
| 3 | Search bar | Main area, top; text field with the placeholder "Search ..." and a search button |
| 4 | Create Project action | Button labeled "Add New Project" in the main area, below the details card; opens UI-PM-004 |
---
## 4. States
| State | What the user sees | Source | Mockup |
|-------|--------------------|--------|--------|
| Populated | All projects, by name | FR-PM-002 AC1 | Yes |
| Filtered | Only projects whose names match the typed text | FR-PM-004 AC1 | Deferred |
| Search cleared | Full list shown again | FR-PM-004 AC3 | Deferred |
| Error | Error state instead of an empty or partial list (shown with UI-GEN-001) | FR-PM-002 AC3 | Yes (UI-GEN-001) |
---
## 5. Data
| Field | Shown | Notes |
|-------|-------|-------|
| Name | Yes | The only field in the list; description and creation date are in details only (ADR-007) |

Notes:
- The project name in the list reads "Caffe Website" while the details card shows "Cafe Website" (with an accent); the sample data is inconsistent.
- The list is a dropdown in the sidebar, not a list in the main area. The search bar filters this dropdown list (SWE decision).
---
## 6. Accessibility
See Accessibility.md (target: WCAG 2.1 Level A).
---
## 7. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Persona | PER-PM-001 |
| User Flows | UF-002 |
| Related Screens | UI-PM-001, UI-PM-003, UI-PM-005 |
| Test Cases | TC-XXX |
---
