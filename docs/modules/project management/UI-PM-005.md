# UI Screen Specification
---
## 1. Screen Identification
| Field | Value |
|-------|--------|
| UI ID | UI-PM-005 |
| Title | Search No Results |
| Module | Project Management |
| Purpose | Show that no project name matches the search text |
| Persona | PER-PM-001 |
| Status | Approved |
| Priority | Must |
| Target Release | v0.1.0 |
| Wireframe | Wireframes/UI-PM-005.png |
---
## 2. Realizes
| Type | IDs |
|------|-----|
| Functional Requirements | FR-PM-004 (AC2, AC4) |
| Use Cases | UC-PM-004 (A1) |
| Decisions | ADR-008 |
---
## 3. Components
| # | Component | Description |
|---|-----------|-------------|
| 1 | Search bar | Contains the typed text (the frame shows "School System"); has the search button |
| 2 | No results card | Card below the search bar with a search icon, the heading "No results found", and the text "Sorry, we couldn't find any results for your search. Please try again with a different phrase." |
| 3 | Clear search action | Button labeled "Clear search" inside the card; clears the search and shows the full list |
| 4 | Create Project action | Below the card: an "Add New Project" button that opens UI-PM-004. |
---
## 4. States
| State | What the user sees | Source | Mockup |
|-------|--------------------|--------|--------|
| No results | "No results found" card with a Clear search button | FR-PM-004 AC2 | Yes |
| Clear search | Search field cleared and full list shown again | FR-PM-004 AC4 | Deferred (the button is in this frame, the resulting state is not) |
| Search cleared | Full list shown again (UI-PM-002) | FR-PM-004 AC3 | Deferred |
---
## 5. Data
- Search text only; it is not stored (NFR-006).
---
## 6. Accessibility
See Accessibility.md (target: WCAG 2.1 Level A).
---
## 7. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Persona | PER-PM-001 |
| User Flows | UF-002 |
| Related Screens | UI-PM-001, UI-PM-002 |
| Test Cases | TC-XXX |
---
