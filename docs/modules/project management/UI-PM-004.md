# UI Screen Specification
---
## 1. Screen Identification
| Field | Value |
|-------|--------|
| UI ID | UI-PM-004 |
| Title | Create Project |
| Module | Project Management |
| Purpose | Add a new project with a name and an optional description |
| Persona | PER-PM-001 |
| Status | Approved |
| Priority | Must |
| Target Release | v0.1.0 |
| Wireframe | Wireframes/UI-PM-004.png |
---
## 2. Realizes
| Type | IDs |
|------|-----|
| Functional Requirements | FR-PM-001 |
| Use Cases | UC-PM-001 |
| Decisions | ADR-007, ADR-013 |
---
## 3. Components
| # | Component | Description |
|---|-----------|-------------|
| 1 | Create form modal | Modal over the dashboard (sidebar and search bar remain behind it); header "Create new project" with the text "Give your next project a place to start." |
| 2 | Close icon | "X" in the modal header; closes the form without creating a project |
| 3 | Name field | Label "Project Name" marked required (*); placeholder "e.g., Q3 Marketing Campaign" |
| 4 | Description field | Label "Description (Optional)"; multi-line box with the placeholder "A brief summary of your project..."; typing stops at 250 characters |
| 5 | Character counter | Below the description box, aligned right; shows the characters used out of 250 (for example "0/250") |
| 6 | Cancel action | Button labeled "Cancel"; closes the form without creating a project |
| 7 | Create action | Button labeled "Create"; creates the project and opens its details (UI-PM-003) |
---
## 4. States
| State | What the user sees | Source | Mockup |
|-------|--------------------|--------|--------|
| Default | Empty form with the counter at "0/250" | FR-PM-001 AC1, AC9 | Yes |
| Cancelled | Form closed; no project created | FR-PM-001 AC10 | Yes (Cancel and close icon in this frame) |
| Description limit reached | Input stops accepting characters; pasted text is cut to 250; counter shows the maximum | FR-PM-001 AC6 | Deferred (the frame shows "0/250" only) |
| Name missing | See UI-PM-006 | FR-PM-001 AC2 | Yes (UI-PM-006) |
| Name already used | See UI-PM-007 | FR-PM-001 AC8 | Yes (UI-PM-007) |
| Save fails | See UI-DATA-001 (warning message) | FR-PM-001 AC3 | Yes (UI-DATA-001) |
---
## 5. Data
| Field | Input | Validation |
|-------|-------|------------|
| Name | User | Required; must not match an existing project name (ADR-010) |
| Description | User (optional) | Maximum 250 characters, enforced by blocking input and cutting pasted text |
| Creation date | System | Generated automatically |
---
## 6. Accessibility
See Accessibility.md (target: WCAG 2.1 Level A).
---
## 7. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Persona | PER-PM-001 |
| User Flows | UF-001 |
| Related Screens | UI-PM-001, UI-PM-003, UI-PM-006, UI-PM-007, UI-DATA-001 |
| Test Cases | TC-XXX |
---
