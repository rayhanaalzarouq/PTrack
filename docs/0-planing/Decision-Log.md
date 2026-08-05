# Decision Log

**Project:** PTrack
**Version:** 0.1.0 (MVP)
**Type:** Personal project (single developer, no external client)

| ID | Date | Context | Options Considered | Decision | Owner | Approvers | Rationale | Reversibility | Review Date | Links (FR/UC/NFR) |
|----|------|---------|--------------------|----------|-------|-----------|-----------|----------------|--------------|--------------------|
| ADR-001 | 2026-07-13 | Defining the scope of the first release (MVP) for the PTrack application | Full scope with all future features / Reduced scope (MVP only) | Strict adherence to the MVP scope, deferring any new ideas to future releases (0.2 and beyond) | Rayhana Alzarouq | Rayhana Alzarouq | Reduce scope creep risk and ensure delivery of a usable first version within one month | Medium | YYYY-MM-DD | NFR-01 |
| ADR-002 | 2026-07-13 | Choosing the technology stack for building the UI and application | Plain HTML/CSS/JS / A framework such as React or Vue | Use plain HTML, CSS, and JavaScript without a framework | Rayhana Alzarouq | Rayhana Alzarouq | Simplify development and reduce the learning curve given time and experience constraints | Low | YYYY-MM-DD | NFR-04, NFR-05 |
| ADR-003 | 2026-07-13 | Storing project data in Version 0.1.0 | Local storage / Centralized database | Adopt local storage only for this version, with migration to a centralized database planned for Release 0.2 | Rayhana Alzarouq | Rayhana Alzarouq | Accelerate delivery and simplify the architecture for the MVP, deferring complexity to future releases | High | YYYY-MM-DD | NFR-03, NFR-06 |
| ADR-004 | 2026-07-13 | Supporting multi-user access and authentication | Include login from the start / Exclude it in this version | Exclude login, authentication, and multi-user support from Version 0.1.0 (single local user only) | Rayhana Alzarouq | Rayhana Alzarouq | Reduce complexity and focus effort on validating the core product concept | High | YYYY-MM-DD | NFR-06 |
| ADR-005 | 2026-07-13 | Design and documentation tools used in the project | Figma for design + Word for documentation / Alternative tools | Use Figma for UI/UX design and Microsoft Word for preparing documentation | Rayhana Alzarouq | Rayhana Alzarouq | Familiar and available tools that facilitate a solo workflow | Low | YYYY-MM-DD | — |
