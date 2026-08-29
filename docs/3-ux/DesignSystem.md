# Design System
---
## Purpose
Functional inventory of the UI components PTrack's screens reuse. This
captures what each component does and where it's used; visual tokens (colors,
typography, spacing) are TBD pending the Figma design work planned in
ADR-005 and are not invented here.
---
## Component Inventory
| Component | Purpose | Used In |
|-----------|---------|---------|
| Text input | Captures the project name (create and edit) | UI-PM-001 |
| Primary button | Confirms an action (create project, save edit, confirm delete) | UI-PM-001 |
| Dropdown / select | Lets the user choose a Development Stage or Status value from a fixed set | UI-PM-001 |
| List / table row | Displays one project per row: name, creation date, stage, status, and its actions | UI-PM-001 |
| Empty-state message | Shown when no projects exist yet | UI-PM-001 |
| Inline validation message | Shown next to a field when input is invalid (e.g., empty name) | UI-PM-001 |
| Error banner | Shown when a load or save operation fails | UI-PM-001 |
| Edit action icon/button | Opens edit mode for a project's name | UI-PM-001 |
| Delete action icon/button | Initiates project deletion (opens the confirmation dialog) | UI-PM-001 |
| Confirmation dialog | Requires explicit confirmation before a destructive action (delete) completes | UI-PM-001 |
---
## Visual Tokens (Colors, Typography, Spacing)
- TBD. Pending Figma design work (ADR-005). Not defined here to avoid
  inventing visual decisions that belong to the design tool, not this
  specification document.
---
## Status
- Status: Draft
- Owner: Rayhana Alzarouq
