# UI Screen Specification
---
## 1. Screen Identification
| Field | Value |
|-------|--------|
| UI ID | UI-STG-001 |
| Title | Project Status and Stage |
| Module | Stage Tracking |
| Purpose | Show a project's status and stage and let the user change the stage; the status updates automatically |
| Persona | PER-PM-001 |
| Status | Approved |
| Priority | Must |
| Target Release | v0.1.0 |
| Wireframe | Wireframes/UI-STG-001.png |
---
## 2. Realizes
| Type | IDs |
|------|-----|
| Functional Requirements | FR-STG-001, FR-STG-002, FR-STG-003, FR-STS-001, FR-STS-002 |
| Use Cases | UC-STG-001, UC-STS-001 |
| Decisions | ADR-009 |
---
## 3. Components
| # | Component | Description |
|---|-----------|-------------|
| 1 | Status and stage control | At the bottom right of the details card (UI-PM-003): "Status" with its value and "Stage" with its value (for example "In Progress" and "Testing"), and a chevron that points down when closed and up when the list is open |
| 2 | Stage dropdown | List opening below the control with six entries in this order: Planning, Analysis, Design, Implementation, Testing, Done; selecting a stage saves it |
| 3 | Stage indicators | Each entry has an indicator: stages before the current one show a green check; the current stage shows an orange dot and a highlighted row; stages not yet reached (Done in the frame) show a grey dot and dimmed text until the user selects them |
---
## 4. States
| State | What the user sees | Source | Mockup |
|-------|--------------------|--------|--------|
| Stage and status shown | Current stage and status | FR-STG-003 AC1, FR-STS-001 | Yes |
| Dropdown open | The six stages as a dropdown list with indicators (checked, current, remaining) | FR-STG-001 AC2 | Yes |
| No stage assigned | "No stage assigned" and "No status set" | FR-STG-003 AC2, FR-STS-001 AC2 | Deferred |
| Stage saved | New stage and automatically updated status | FR-STG-002 AC1, FR-STS-002 | Deferred |
| Save fails | See UI-DATA-001 | FR-STG-001 AC3, FR-STG-002 AC3, FR-STS-002 AC5 | Yes (UI-DATA-001) |
---
## 5. Data
| Field | Source | Notes |
|-------|--------|-------|
| Stage | User (dropdown) | One of the six fixed values |
| Status | System (derived) | No stage = No status set; Planning = Not Started; Analysis, Design, Implementation, Testing = In Progress; Done = Completed (ADR-009) |

- The indicators (check, orange dot, grey dot) are visual only: every stage in the list can be selected, including the dimmed one and the earlier checked ones (SWE decision). A dimmed stage such as Done is dimmed because it has not been reached yet, and takes the active style once selected (SWE decision).
---
## 6. Accessibility
See Accessibility.md (target: WCAG 2.1 Level A).
---
## 7. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Persona | PER-PM-001 |
| User Flows | UF-003 |
| Related Screens | UI-PM-003, UI-DATA-001 |
| Test Cases | TC-XXX |
---
