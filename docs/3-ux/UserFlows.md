# User Flows
---
## UF-001: Create a Project
- Persona: PER-PM-001 | Screens: UI-PM-001 or UI-PM-002 (start), UI-PM-004 (form), UI-PM-003 (result) | Realizes: UC-PM-001 (FR-PM-001)
- Goal: Add a new project to track.
- Main path:
  1. User selects "Create Project".
  2. User enters a project name and, optionally, a description; a counter shows the characters used out of 250 and typing stops at the limit.
  3. User confirms.
  4. System creates the project, records the creation date, adds it to the list, and opens its details card.
- Alternate and error paths:
  - Name already used -> creation blocked, "name is already used" message, UI-PM-007 (step 3).
  - Name empty -> creation blocked, "name is required" warning, UI-PM-006 (step 3).
  - Saving fails -> save failure warning message, UI-DATA-001 (step 4); no project is created.
  - Pasted description longer than 250 characters -> cut to 250 characters (step 2).
---
## UF-002: Find a Project
- Persona: PER-PM-001 | Screens: UI-PM-001 (no projects), UI-PM-002 (list), UI-PM-005 (no results) | Realizes: UC-PM-002, UC-PM-004 (FR-PM-002, FR-PM-004)
- Goal: Locate a project in the list.
- Main path:
  1. User opens the app; the list shows all projects by name.
  2. User types in the search bar and selects the search button; the list filters by name.
  3. User selects a project (continues in UF-003), or clears the search to see the full list.
- Alternate and error paths:
  - No projects yet -> "no projects" state with a create prompt.
  - No name matches the search -> "no results" state.
  - List fails to load -> generic error with a Try again button, UI-GEN-001.
  - Projects exist but none is selected -> message asking the user to choose a project, UI-PM-009.
---
## UF-003: View Details and Change Stage
- Persona: PER-PM-001 | Screens: UI-PM-003 (details), UI-STG-001 (status and stage) | Realizes: UC-PM-003, UC-STG-001, UC-STS-001 (FR-PM-003, FR-STG-001, FR-STG-002, FR-STG-003, FR-STS-001, FR-STS-002)
- Goal: Inspect a project and move it to its current stage.
- Main path:
  1. The details card opens after the user selects a project in the list or right after a project is created.
  2. System shows name, description, creation date, status, stage.
  3. User opens the stage dropdown and selects a stage.
  4. System saves the stage and updates the status automatically.
  5. User selects close from the three-dot menu; the details close and the message asking the user to choose a project is shown.
- Alternate and error paths:
  - No description -> "No description" shown.
  - No stage yet -> "No stage assigned" and "No status set" shown; first selection assigns the stage.
  - Details fail to load -> generic error with a Try again button, UI-GEN-001.
  - Stage save fails -> previous stage and status remain; save failure warning message, UI-DATA-001.
---
## UF-004: Edit or Delete a Project
- Persona: PER-PM-001 | Screens: UI-PM-003 (details card), UI-PM-008 (menu), UI-DATA-001 (save failure) | Realizes: UC-PM-005, UC-PM-006 (FR-PM-005, FR-PM-006)
- Goal: Correct or remove an existing project.
- Main path:
  1. In the project details card, the user clicks the three dots; the menu offers Edit and Delete.
  2. User selects Edit and saves changes to the name and/or description (same rules as creation), or selects Delete, which deletes the project immediately without confirmation.
  3. System updates the project, or removes it from the list.
- Alternate and error paths:
  - Edit with empty name, a name already used, or a description over 250 characters -> same warnings and limits as creation.
  - Last project deleted -> "no projects" state, UI-PM-001.
  - Saving fails -> project keeps its previous state; save failure warning message, UI-DATA-001.
---
