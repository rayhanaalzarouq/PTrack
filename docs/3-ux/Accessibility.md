# Accessibility
---
## Target
- WCAG 2.1 Level A for PTrack v0.1.0.
- Rationale: PTrack v0.1.0 is a single-user personal tool (see Personas.md, ADR-004); Level A covers the essential accessibility baseline without the added design/testing overhead of Level AA, which is not required for this release. This may be revisited for future releases if PTrack gains a broader user base.
---
## Per-Screen Acceptance Criteria
### UI-PM-001 (Project Dashboard)
| # | Criterion | WCAG Reference (informal) |
|---|-----------|-----------------------------|
| A1 | The create-project name field, stage dropdown, status dropdown, and create button are all operable using only the keyboard (Tab / Shift+Tab / Enter / Arrow keys), with no keyboard trap | 2.1.1 Keyboard, 2.1.2 No Keyboard Trap |
| A2 | Every input and dropdown has a visible, programmatically associated text label (not placeholder text alone) | 1.3.1 Info and Relationships, 3.3.2 Labels or Instructions |
| A3 | Validation errors (e.g., empty name, invalid stage/status value) are announced as text near the related field, not conveyed by color alone | 1.4.1 Use of Color, 3.3.1 Error Identification |
| A4 | Focus order follows a logical sequence: name input -> create action -> project list -> per-project stage/status controls | 2.4.3 Focus Order |
| A5 | The current focused element has a visible focus indicator | 2.4.7 Focus Visible (Level AA in WCAG 2.1, adopted here as a baseline UX practice even though not strictly required at Level A) |
---
## Out of Scope for v0.1.0
- Color contrast ratio targets (WCAG 1.4.3 Contrast Minimum) are a Level AA criterion and are not a hard requirement for this release, though the design should avoid low-contrast text where practical.
- Screen reader-specific testing is not planned for v0.1.0 given the single-user scope.
