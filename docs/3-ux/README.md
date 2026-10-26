Wireframes
==========

Mockup images or links for each screen. Name each file by its screen ID so it
maps 1:1 to the registry and the spec:

- `UI-<DomainCode>-<NNN>.png` (or `.svg`, or a `.md` stub holding a Figma URL).

The spec in `modules/<Module>/UI-<ID>.md` and the row in `../Screens.md` both
point here. Keep images lightweight; prefer a linked Figma frame for large sets.

Coverage (PTrack v0.1.0)
------------------------

One row per screen. "Designed" means a Figma frame exists for that state;
"Deferred" means the state has no frame yet (see ADR-011 and ADR-013); "See UI-XXX"
means the state is shown by another screen's frame. Fill the "Mockup file" column
once the image or Figma stub is added.

| UI ID | Screen | State | Frame | Mockup file |
|-------|--------|-------|-------|-------------|
| UI-PM-001 | No Projects | Empty | Designed | Wireframes/UI-PM-001.png (added) |
| UI-PM-002 | Project List | Populated | Designed | Wireframes/UI-PM-002.png (added) |
| UI-PM-002 | Project List | Filtered | Deferred | Wireframes/UI-PM-002.png |
| UI-PM-002 | Project List | Search cleared | Deferred | Wireframes/UI-PM-002.png |
| UI-PM-002 | Project List | Error | See UI-GEN-001 | Wireframes/UI-PM-002.png |
| UI-PM-003 | Project Details | Loaded | Designed | Wireframes/UI-PM-003.png (added) |
| UI-PM-003 | Project Details | No description | Deferred | Wireframes/UI-PM-003.png |
| UI-PM-003 | Project Details | Error | See UI-GEN-001 | Wireframes/UI-PM-003.png |
| UI-PM-004 | Create Project | Default | Designed | Wireframes/UI-PM-004.png (added) |
| UI-PM-004 | Create Project | Cancelled | Designed (Cancel and close icon) | Wireframes/UI-PM-004.png |
| UI-PM-004 | Create Project | Description limit reached | Deferred | Wireframes/UI-PM-004.png |
| UI-PM-004 | Create Project | Name missing | See UI-PM-006 | Wireframes/UI-PM-004.png |
| UI-PM-004 | Create Project | Name already used | See UI-PM-007 | Wireframes/UI-PM-004.png |
| UI-PM-004 | Create Project | Save fails | See UI-DATA-001 | Wireframes/UI-PM-004.png |
| UI-PM-005 | Search No Results | No results | Designed | Wireframes/UI-PM-005.png (added) |
| UI-PM-005 | Search No Results | Search cleared | Deferred | Wireframes/UI-PM-005.png |
| UI-PM-006 | Name Required Warning | Name missing | Designed | Wireframes/UI-PM-006.png (added) |
| UI-PM-007 | Name Already Used | Name already used | Designed | Wireframes/UI-PM-007.png (added) |
| UI-PM-008 | Edit and Delete Menu | Menu open | Designed | Wireframes/UI-PM-008.png (added) |
| UI-PM-008 | Edit and Delete Menu | Edit form | Deferred | Wireframes/UI-PM-008.png |
| UI-PM-008 | Edit and Delete Menu | Edit name empty | Deferred | Wireframes/UI-PM-008.png |
| UI-PM-008 | Edit and Delete Menu | Edit name already used | Deferred | Wireframes/UI-PM-008.png |
| UI-PM-008 | Edit and Delete Menu | Save fails | See UI-DATA-001 | Wireframes/UI-PM-008.png |
| UI-PM-009 | Choose a Project | No project selected | Designed | Wireframes/UI-PM-009.png (added) |
| UI-STG-001 | Project Status and Stage | Stage and status shown | Designed | Wireframes/UI-STG-001.png |
| UI-STG-001 | Project Status and Stage | Dropdown open | Designed | Wireframes/UI-STG-001.png (added) |
| UI-STG-001 | Project Status and Stage | No stage assigned | Deferred | Wireframes/UI-STG-001.png |
| UI-STG-001 | Project Status and Stage | Stage saved | Deferred | Wireframes/UI-STG-001.png |
| UI-STG-001 | Project Status and Stage | Save fails | See UI-DATA-001 | Wireframes/UI-STG-001.png |
| UI-DATA-001 | Save Failure | Save failure or storage problem | Designed | Wireframes/UI-DATA-001.png (added) |
| UI-GEN-001 | Generic Error | Error | Designed | Wireframes/UI-GEN-001.png (added) |
