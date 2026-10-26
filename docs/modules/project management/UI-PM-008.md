# UI Screen Specification
---
## 1. Screen Identification
| Field | Value |
|-------|--------|
| UI ID | UI-PM-008 |
| Title | Edit and Delete Menu |
| Module | Project Management |
| Purpose | Offer Edit, Delete, and Close for a project when the user clicks the three dots on the project details card |
| Persona | PER-PM-001 |
| Status | Approved |
| Priority | Must |
| Target Release | v0.1.0 |
| Wireframe | Wireframes/UI-PM-008.png |
---
## 2. Realizes
| Type | IDs |
|------|-----|
| Functional Requirements | FR-PM-005, FR-PM-006, FR-PM-003 (AC6) |
| Use Cases | UC-PM-005, UC-PM-006 |
| Decisions | ADR-014 |
---
## 3. Components
| # | Component | Description |
|---|-----------|-------------|
| 1 | Three-dot control | At the top right of the details card (UI-PM-003); opens the menu |
| 2 | Menu | Small popover to the right of the card, near the three dots, with three items |
| 3 | Edit action | Pencil icon with the label "Edit"; opens the name and description for editing |
| 4 | Delete action | Trash icon with the label "Delete"; deletes the project immediately, without a confirmation step |
| 5 | Close action | Circled-x icon with the label "close" (lowercase in the frame); closes the project details |
---
## 4. States
| State | What the user sees | Source | Mockup |
|-------|--------------------|--------|--------|
| Menu open | Edit, Delete, and close actions | FR-PM-005 AC1, FR-PM-006 AC1, FR-PM-003 AC6 | Yes |
| Edit form | Name field, description field with the character counter, save action | FR-PM-005 AC1, AC4 | Deferred |
| Edit name empty | Warning that a name is required | FR-PM-005 AC2 | Deferred |
| Edit name already used | Message that the name is already used | FR-PM-005 AC3 | Deferred |
| Save fails | See UI-DATA-001 | FR-PM-005 AC5, FR-PM-006 AC3 | Yes (UI-DATA-001) |
---
## 5. Data
- Editable fields: name and description, with the same rules as creation. Delete has no confirmation.
---
## 6. Accessibility
See Accessibility.md (target: WCAG 2.1 Level A).
---
## 7. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Persona | PER-PM-001 |
| User Flows | UF-004 |
| Related Screens | UI-PM-003, UI-DATA-001 |
| Test Cases | TC-XXX |
---
