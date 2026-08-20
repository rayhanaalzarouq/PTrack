# Screen Specification (UI)
---
## 1. Identification
| Field | Value |
|-------|--------|
| UI ID | UI-PM-001 |
| Title | Project Dashboard |
| Module | Project Management |
| Purpose | Single unified screen where the user creates, edits, and deletes projects, and views/updates each project's development stage and status |
| Status | Draft |
| Priority | Must |
---
## 2. Realizes (Related FRs / UCs)
| Type | ID | Note |
|------|-----|------|
| FR | FR-PM-001 | Create New Project |
| FR | FR-PM-002 | Display Project List |
| FR | FR-PM-003 | Edit Project Name |
| FR | FR-PM-004 | Delete Project |
| FR | FR-STG-001 | Assign Development Stage |
| FR | FR-STG-002 | Modify Development Stage |
| FR | FR-STG-003 | Display Development Stage |
| FR | FR-STS-001 | Display Project Status |
| FR | FR-STS-002 | Update Project Status |
| UC | UC-PM-001 | Create New Project |
| UC | UC-PM-002 | View Project List |
| UC | UC-PM-003 | Edit or Delete Project |
| UC | UC-STG-001 | Track Development Stage |
| UC | UC-STS-001 | Track Project Status |

Note: UC-DATA-001 (persistence) is not realized by this or any screen -- it is
background system behavior with no distinct UI (see UC-DATA-001, Section 10).
---
## 3. States
| State | Trigger / Condition | Source |
|-------|----------------------|--------|
| Empty | No projects have been created yet | FR-PM-002 AC2 |
| Success | One or more projects displayed, each showing name, stage, and status | FR-PM-002 AC1, FR-STG-003 AC1, FR-STS-001 AC1 |
| Success (stage unset) | A project has no stage assigned | Displays "No stage assigned" (FR-STG-003 AC2) |
| Success (status unset) | A project has no status set | Displays "No status set" (FR-STS-001 AC2) |
| Validation error | User attempts to create a project with an empty name | FR-PM-001 AC2 |
| Validation error | User selects a stage/status value outside the defined set | FR-STG-001 AC2, FR-STG-002 AC2, FR-STS-002 AC2 |
| Error (load) | Project list fails to load due to a data access issue | FR-PM-002 AC3 |
| Error (save) | An unexpected error occurs while creating a project or updating stage/status | FR-PM-001 AC3, FR-STG-001 AC3, FR-STG-002 AC3, FR-STS-002 AC3 |
| Confirmation prompt | User initiates project deletion | FR-PM-004 AC1/AC2, UC-PM-003 A1/A2 |
| Validation error (edit) | User attempts to save an edited project name as empty | FR-PM-003 AC2 |
| Loading | Brief loading indicator while the project list or an update is in progress | UX convention; not derived from a specific AC, added for responsiveness feedback within the NFR-002 (2 second) target |
---
## 4. Key Components and Primary Actions
- Components used (pending formal registration in DesignSystem.md): text input, primary button, dropdown/select, list/table row, empty-state message, inline validation message, error banner, edit action icon/button, delete action icon/button, confirmation dialog.
- Primary actions:
  - Create Project (text input + confirm button)
  - Edit a project's name
  - Delete a project (requires confirmation)
  - Select/change a project's Development Stage (dropdown: Planning, Design, Development, Testing, Done)
  - Select/change a project's Status (dropdown: Not Started, In Progress, Completed)
  - View the list of all projects with their current stage and status
---
## 5. Data Shown / Captured
| Field | Shown / Captured | Validation | Bound Entity |
|-------|-------------------|------------|--------------|
| Project name | Both | Required, non-empty (FR-PM-001 AC2, FR-PM-003 AC2) | Project (entity formalized in Phase 4 Design) |
| Creation date | Shown only | System-generated at creation; not user-editable | Project |
| Development Stage | Both | Must be one of: Planning, Design, Development, Testing, Done, or unset | Project |
| Status | Both | Must be one of: Not Started, In Progress, Completed, or unset | Project |

Ambiguity #1 in AN-001 is resolved: name (user-entered) plus an automatic
creation date are the only fields captured in v0.1.0. Ambiguity #5 in AN-001
(project deletion/editing) is resolved: both are included in v0.1.0 via
FR-PM-003/FR-PM-004.
---
## 6. Accessibility Notes
- Target: WCAG 2.1 Level A (see Accessibility.md).
- All interactive elements (name input, stage/status dropdowns, create button) must be reachable and operable via keyboard alone.
- Every input and dropdown has a visible, programmatically associated label.
- Focus order follows the logical reading order: name input -> create action -> project list -> per-project stage/status controls.
- Validation and error messages are presented as text (not color alone) and are associated with their field.
---
## 7. Mockup Link
- TBD. Visual design pending in Figma (per ADR-005, Decision Log); no wireframe link available yet.
---
## 8. Traceability
| Related Artifact | Reference |
|-------------------|-----------|
| Related FRs | FR-PM-001, FR-PM-002, FR-PM-003, FR-PM-004, FR-STG-001, FR-STG-002, FR-STG-003, FR-STS-001, FR-STS-002 |
| Related UCs | UC-PM-001, UC-PM-002, UC-PM-003, UC-STG-001, UC-STS-001 |
| Design Component (Phase 4) | TBD |
| Test Cases | TC-XXX |
---
