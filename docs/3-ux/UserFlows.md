# User Flows
---
## UF-PM-001: Create a New Project
| Field | Value |
|-------|--------|
| Flow ID | UF-PM-001 |
| Actor | PER-PM-001 (Solo Software Engineer) |
| Goal | Add a new project to PTrack |
| Related UC | UC-PM-001 |
| Screens | UI-PM-001 |
| Status | Draft |

Steps:
1. Actor opens UI-PM-001 (Project Dashboard).
2. Actor enters a project name in the create-project field.
3. Actor confirms creation.
4. Screen updates: new project appears in the project list with "No stage assigned" and "No status set".
---
## UF-PM-002: Review All Projects
| Field | Value |
|-------|--------|
| Flow ID | UF-PM-002 |
| Actor | PER-PM-001 (Solo Software Engineer) |
| Goal | Get an overview of all tracked projects and their current stage/status |
| Related UC | UC-PM-002 |
| Screens | UI-PM-001 |
| Status | Draft |

Steps:
1. Actor opens UI-PM-001 (Project Dashboard).
2. Screen displays every existing project with its name, stage, and status (or the empty state if none exist yet).
---
## UF-PM-003: Edit a Project's Name
| Field | Value |
|-------|--------|
| Flow ID | UF-PM-003 |
| Actor | PER-PM-001 (Solo Software Engineer) |
| Goal | Correct or update an existing project's name |
| Related UC | UC-PM-003 |
| Screens | UI-PM-001 |
| Status | Draft |

Steps:
1. Actor locates the project in the list on UI-PM-001.
2. Actor selects "Edit" for that project.
3. Actor updates the name and confirms.
4. Screen updates to show the new name.
---
## UF-PM-004: Delete a Project
| Field | Value |
|-------|--------|
| Flow ID | UF-PM-004 |
| Actor | PER-PM-001 (Solo Software Engineer) |
| Goal | Permanently remove a project that is no longer needed |
| Related UC | UC-PM-003 |
| Screens | UI-PM-001 |
| Status | Draft |

Steps:
1. Actor locates the project in the list on UI-PM-001.
2. Actor selects "Delete" for that project.
3. Screen shows a confirmation prompt.
4. Actor confirms; the project is permanently removed from the list (or actor cancels and the project remains unchanged).
| Field | Value |
|-------|--------|
| Flow ID | UF-STG-001 |
| Actor | PER-PM-001 (Solo Software Engineer) |
| Goal | Reflect a project's current development stage |
| Related UC | UC-STG-001 |
| Screens | UI-PM-001 |
| Status | Draft |

Steps:
1. Actor locates the project in the list on UI-PM-001.
2. Actor opens the stage dropdown for that project (Planning, Design, Development, Testing, Done).
3. Actor selects a value.
4. Screen updates to show the newly selected stage.
---
## UF-STS-001: Update a Project's Status
| Field | Value |
|-------|--------|
| Flow ID | UF-STS-001 |
| Actor | PER-PM-001 (Solo Software Engineer) |
| Goal | Reflect a project's current status, including marking it Completed |
| Related UC | UC-STS-001 |
| Screens | UI-PM-001 |
| Status | Draft |

Steps:
1. Actor locates the project in the list on UI-PM-001.
2. Actor opens the status dropdown for that project (Not Started, In Progress, Completed).
3. Actor selects a value.
4. Screen updates to show the newly selected status.
