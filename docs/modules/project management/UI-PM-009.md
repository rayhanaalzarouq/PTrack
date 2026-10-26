# UI Screen Specification
---
## 1. Screen Identification
| Field | Value |
|-------|--------|
| UI ID | UI-PM-009 |
| Title | Choose a Project |
| Module | Project Management |
| Purpose | Ask the user to choose a project (or create one) when no project is selected |
| Persona | PER-PM-001 |
| Status | Approved |
| Priority | Must |
| Target Release | v0.1.0 |
| Wireframe | Wireframes/UI-PM-009.png |
---
## 2. Realizes
| Type | IDs |
|------|-----|
| Functional Requirements | FR-PM-007 |
| Use Cases | UC-PM-003 (A3) |
| Decisions | ADR-015 |
---
## 3. Components
| # | Component | Description |
|---|-----------|-------------|
| 1 | Prompt message | Heading "No recent projects!" with the text "Select a project or create a new one." |
| 2 | Create Project action | Button labeled "Add New Project"; entry point to UI-PM-004 |
| 3 | Sidebar | App name "PTrack" with its logo, and a "Projects" dropdown control |
| 4 | Search bar | Text field with the placeholder "Search ..." and a search button |
---
## 4. States
| State | What the user sees | Source | Mockup |
|-------|--------------------|--------|--------|
| No project selected | Message asking the user to choose a project or create one | FR-PM-007 AC1 | Yes |
---
## 5. Data
- No project data is shown. It is shown whenever no project is selected for display, including after the project details are closed (see FR-PM-007).
---
## 6. Accessibility
See Accessibility.md (target: WCAG 2.1 Level A).
---
## 7. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Persona | PER-PM-001 |
| User Flows | UF-002 |
| Related Screens | UI-PM-002, UI-PM-003 |
| Test Cases | TC-XXX |
---
