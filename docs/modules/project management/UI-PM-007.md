# UI Screen Specification
---
## 1. Screen Identification
| Field | Value |
|-------|--------|
| UI ID | UI-PM-007 |
| Title | Name Already Used |
| Module | Project Management |
| Purpose | Tell the user that a project with the entered name already exists |
| Persona | PER-PM-001 |
| Status | Approved |
| Priority | Must |
| Target Release | v0.1.0 |
| Wireframe | Wireframes/UI-PM-007.png |
---
## 2. Realizes
| Type | IDs |
|------|-----|
| Functional Requirements | FR-PM-001 (AC8) |
| Use Cases | UC-PM-001 (E4) |
| Decisions | ADR-010 |
---
## 3. Components
| # | Component | Description |
|---|-----------|-------------|
| 1 | Create form modal | Same modal as UI-PM-004 ("Create new project", description box with the "0/250" counter, Cancel and Create buttons) |
| 2 | Name field | Contains the name that is already used (the frame shows "Cafe Website"), with a red border |
| 3 | Error message | Red text "This name is already taken." directly below the Project Name field |
---
## 4. States
| State | What the user sees | Source | Mockup |
|-------|--------------------|--------|--------|
| Name already used | Creation blocked; message that the name is already used | FR-PM-001 AC8 | Yes |
---
## 5. Data
- The name matches an existing project name, ignoring letter case and spaces (see ADR-010).
---
## 6. Accessibility
See Accessibility.md (target: WCAG 2.1 Level A).
---
## 7. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Persona | PER-PM-001 |
| User Flows | UF-001 |
| Related Screens | UI-PM-004 |
| Test Cases | TC-XXX |
---
