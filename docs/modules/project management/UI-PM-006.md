# UI Screen Specification
---
## 1. Screen Identification
| Field | Value |
|-------|--------|
| UI ID | UI-PM-006 |
| Title | Name Required Warning |
| Module | Project Management |
| Purpose | Warn the user that a project name is required |
| Persona | PER-PM-001 |
| Status | Approved |
| Priority | Must |
| Target Release | v0.1.0 |
| Wireframe | Wireframes/UI-PM-006.png |
---
## 2. Realizes
| Type | IDs |
|------|-----|
| Functional Requirements | FR-PM-001 (AC2) |
| Use Cases | UC-PM-001 (E1) |
---
## 3. Components
| # | Component | Description |
|---|-----------|-------------|
| 1 | Create form modal | Same modal as UI-PM-004 ("Create new project", description box with the "0/250" counter, Cancel and Create buttons) |
| 2 | Name field | Shown with a red border |
| 3 | Warning message | Red text "This field is required" directly below the Project Name field |
---
## 4. States
| State | What the user sees | Source | Mockup |
|-------|--------------------|--------|--------|
| Name missing | Creation blocked; warning that a name is required | FR-PM-001 AC2 | Yes |
---
## 5. Data
- Name field is empty; no project is created.
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
