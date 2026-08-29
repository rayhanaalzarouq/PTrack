# Personas
---
## PER-PM-001: The Solo Software Engineer
| Field | Value |
|-------|--------|
| Persona ID | PER-PM-001 |
| Name | Rayhana (representative of PTrack's single user type) |
| Role | Software Engineer, sole user of PTrack v0.1.0 |
| Status | Draft |
---
### Context
- Works on one or more personal/professional software projects at a time.
- Uses PTrack on a single desktop browser; no login or multi-device sync in v0.1.0 (see NFR-004, ADR-004).
- Wants a lightweight way to remember what stage and status each project is in, without the overhead of a full project-management tool.
---
### Goals
- Create a new project quickly (FR-PM-001).
- See all tracked projects and their current stage/status at a glance (FR-PM-002, FR-STG-003, FR-STS-001).
- Update a project's stage or status in a few clicks as work progresses (FR-STG-001/002, FR-STS-002).
---
### Pain Points (addressed by PTrack)
- Losing track of which stage a project is in when juggling multiple projects.
- Forgetting whether a project was ever marked complete.
- Not wanting to set up accounts or a heavyweight PM tool for personal use.
---
### Notes
- Since v0.1.0 has a single local user with no accounts (ADR-004, NFR-006), this is currently the only persona needed for PTrack.
