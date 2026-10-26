# UI Screen Specification
---
## 1. Screen Identification
| Field | Value |
|-------|--------|
| UI ID | UI-PM-001 |
| Title | No Projects |
| Module | Project Management |
| Purpose | Show that no projects exist yet and invite the user to create one |
| Persona | PER-PM-001 |
| Status | Approved |
| Priority | Must |
| Target Release | v0.1.0 |
| Wireframe | Wireframes/UI-PM-001.png |
---
## 2. Realizes
| Type | IDs |
|------|-----|
| Functional Requirements | FR-PM-002 (AC2) |
| Use Cases | UC-PM-002 (A1) |
---
## 3. Components
| # | Component | Description |
|---|-----------|-------------|
| 1 | Empty-state message | Heading "No Projects Yet" with the text "Looks like you haven't created any projects yet. Get started by adding your first project!" |
| 2 | Create Project action | Button labeled "Add New Project"; entry point to UI-PM-004 |
| 3 | Sidebar | App name "PTrack" with its logo, and a "Projects" dropdown control |
| 4 | Search bar | Text field with the placeholder "Search ..." and a search button; shown even when no project exists |
---
## 4. States
| State | What the user sees | Source | Mockup |
|-------|--------------------|--------|--------|
| Empty | Empty state indicating no projects exist | FR-PM-002 AC2 | Yes |
---
## 5. Data
- No project data is shown.
---
## 6. Accessibility
See Accessibility.md (target: WCAG 2.1 Level A).
---
## 7. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Persona | PER-PM-001 |
| User Flows | UF-002 |
| Related Screens | UI-PM-002, UI-PM-004 |
| Test Cases | TC-XXX |
---
