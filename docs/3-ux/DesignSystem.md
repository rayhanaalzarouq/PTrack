# Design System
---
## 1. Overview
| Field | Value |
|-------|--------|
| Project | PTrack v0.1.0 |
| Source | The 12 Figma frames saved in Wireframes/ (one per screen ID) |
| Method | Colors were sampled from the exported frames; fonts, sizes, and radii are read by eye and are not exact. Confirm them against the Figma styles before implementation |
| Interface language | English for all interface text |
| Related | Screens.md, Accessibility.md, UI-*.md |
---
## 2. Color Tokens
| Token | Value | Used for |
|-------|-------|----------|
| color-primary | #007bff | Main action buttons: Add New Project, Create, Clear search |
| color-accent | #4b99ff | Search button, details card border, "Created" label, Try Again button, sidebar dropdown border |
| color-accent-soft | #bdd9ff | PT logo tile |
| color-surface | #ffffff | App background, sidebar, status and stage box, menus |
| color-surface-muted | #f3f3f8 | Sidebar Projects dropdown fill |
| color-canvas | not extracted | Light grey area around the app frame; the exported images have a transparent margin, so its color cannot be sampled |
| color-divider | #bababa | Line between sidebar and main area |
| color-modal-header | #edf4fa | Header band of the Create new project modal |
| color-border | #d9e0e7 | Input, textarea, and Cancel button borders |
| color-card-gradient-top | #b4d4ff | Top of the project details card |
| color-card-gradient-bottom | #fcfdfe | Bottom of the project details card |
| color-card-border-soft | #e9ebef | No results card border |
| color-text-heading | #373b43 | Empty-state heading (other headings use close values: #172b3d, #242533) |
| color-text-body | #90959f | Empty-state body text (other body text uses close values: #808192, #607184, #484c52) |
| color-text-placeholder | #abb7c2 | Input placeholders |
| color-text-on-primary | #ffffff | Text on primary and accent buttons |
| color-error | #bc454b | Field error text and required star |
| color-error-border | #dca0a4 | Input border in an error state |
| color-error-banner | #ff0000 | Save failure banner border and icon |
| color-error-icon | #ef4444 | Generic error warning icon (on #f3f4f6) |
| color-stage-done | #39a96b | Check indicator for stages before the current one |
| color-stage-current | #f28a3a | Dot for the current stage |
| color-stage-current-bg | #fff3e7 | Highlighted row of the current stage |
| color-stage-remaining | #d7dade (dot), #b9bdc4 (text) | Stages not yet reached |

Note: headings, body text, and error reds each appear in two or three slightly different values across frames; consolidating them into one token each is recommended.
---
## 3. Typography
| Role | Where it appears | Observed style |
|------|------------------|----------------|
| App name | Sidebar "PTrack" | Large, regular weight |
| Page heading | "No Projects Yet", "No results found", "Something went wrong." | Large, bold |
| Card title | Project name on the details card | Extra large, regular weight |
| Modal title | "Create new project" | Large, semi-bold, with a smaller subtitle below |
| Field label | "Project Name", "Description" | Small, semi-bold; "(Optional)" in regular weight |
| Body text | Descriptions, messages | Regular, muted gray |
| Small text | Counter "0/250", creation date, field errors | Small |

Font families look like a geometric sans-serif (Poppins style) in the dashboard and error frames and an Inter-style sans-serif in the create modal and no results frames. Confirm the actual families in Figma; using one family everywhere is recommended.
---
## 4. Shape and Spacing
- Buttons: fully rounded (pill shape).
- Cards, modal, menus, and the no results card: large corner radius with a soft shadow.
- Inputs and textarea: small corner radius with a 1 px border.
- Layout: a fixed sidebar on the left with a divider; main content centered in the remaining area, with the search bar at the top.
- Exact pixel values are not extracted.
---
## 5. Components
| Component | Description | Screens |
|-----------|-------------|---------|
| App shell | Sidebar (logo, app name, Projects dropdown) plus main area | UI-PM-001 to UI-PM-009, UI-STG-001, UI-DATA-001 |
| Projects dropdown | Pill control with a chevron; opens the list of project names | UI-PM-002 |
| Search bar | Text field with the placeholder "Search ..." and a blue search button | UI-PM-001 to UI-PM-009 (except UI-GEN-001) |
| Primary button | Pill, color-primary, white text | Add New Project, Create, Clear search |
| Accent button | Pill, color-accent, white text, optional icon | Try Again (UI-GEN-001) |
| Secondary button | Rectangular, white with a border | Cancel (UI-PM-004) |
| Create modal | Header band with title, subtitle, and close icon; form body; footer with buttons | UI-PM-004, UI-PM-006, UI-PM-007 |
| Text input | Label with a red star for required, placeholder, error state (red border and text below) | UI-PM-004, UI-PM-006, UI-PM-007 |
| Textarea with counter | Multi-line box; counter at the bottom right showing characters used out of 250 | UI-PM-004 |
| Details card | Gradient card with title, description, creation date, three-dot menu, and status and stage control | UI-PM-003, UI-PM-008, UI-STG-001 |
| Status and stage control | White box with "Status" and "Stage" values and a chevron | UI-PM-003, UI-STG-001 |
| Stage dropdown | List of six stages with check, orange dot, or grey dot indicators | UI-STG-001 |
| Three-dot menu | Popover to the right of the card with Edit, Delete, close (icon and label) | UI-PM-008 |
| Empty state | Heading, short text, and a primary button | UI-PM-001, UI-PM-009 |
| No results card | Card with a search icon, heading, text, and a Clear search button | UI-PM-005 |
| Warning banner | Red-outlined pill with an alert icon and short text, no button | UI-DATA-001 |
| Generic error panel | Centered warning icon on a grey circle, heading, text, Try Again button | UI-GEN-001 |
---
## 6. Patterns
- **Field errors:** red border on the field plus red text directly below it (required name, name already used).
- **Save failure:** an inline banner with no action button.
- **Generic error:** a full-page panel with a Try Again button; no sidebar or search bar.
- **Empty states:** heading, one or two lines of text, and a primary call to action.
- **Stage progress:** green check for earlier stages, orange dot and highlighted row for the current stage, grey dot and dimmed text for stages not yet reached (all remain selectable).
- **Language:** all interface text is in English.
---
## 7. Contrast Check (computed from the sampled colors)
| Pair | Colors | Ratio |
|------|--------|-------|
| White on primary | #ffffff on #007bff | 4.0:1 |
| White on accent blue | #ffffff on #4b99ff | 2.9:1 |
| Heading on white | #373b43 on #ffffff | 11.2:1 |
| Body gray on white | #90959f on #ffffff | 3.0:1 |
| Placeholder on white | #abb7c2 on #ffffff | 2.0:1 |
| Error text on white | #bc454b on #ffffff | 5.1:1 |
| Banner text on white | #797979 on #ffffff | 4.4:1 |
| Dimmed stage text on white | #b9bdc4 on #ffffff | 1.9:1 |
| Created label on card top | #4b99ff on #b4d4ff | 1.9:1 |

The accessibility target in Accessibility.md is WCAG 2.1 Level A, which has no contrast threshold. For a later move to Level AA, ratios below 4.5:1 for normal text would need adjusting.
---
## 8. Open Items
- Fonts, sizes, and radii to be confirmed against Figma styles.
- Near-duplicate grays and reds to be consolidated into single tokens.
- Sample data inconsistency: "Caffe Website" in the list and "Cafe Website" (with an accent) on the card.
- Dates are shown as "3/12/2026"; the date format is not specified.
---
