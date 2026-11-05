# Wireframes

This folder holds the exported screen mockups for PTrack v0.1.0. The source
designs live in Figma (ADR-005); the exports here are PNG snapshots used for
documentation reference.

## Expected Files

One PNG per screen ID (matching the registry in `../Screens.md`):

| File | Screen ID | Screen Name |
|------|-----------|-------------|
| UI-PM-001.png | UI-PM-001 | No Projects |
| UI-PM-002.png | UI-PM-002 | Project List |
| UI-PM-003.png | UI-PM-003 | Project Details |
| UI-PM-004.png | UI-PM-004 | Create Project |
| UI-PM-005.png | UI-PM-005 | Search No Results |
| UI-PM-006.png | UI-PM-006 | Name Required Warning |
| UI-PM-007.png | UI-PM-007 | Name Already Used |
| UI-PM-008.png | UI-PM-008 | Edit and Delete Menu |
| UI-PM-009.png | UI-PM-009 | Choose a Project |
| UI-STG-001.png | UI-STG-001 | Project Status and Stage |
| UI-DATA-001.png | UI-DATA-001 | Save Failure |
| UI-GEN-001.png | UI-GEN-001 | Generic Error |

## Export Instructions

1. Open the PTrack Figma file.
2. Select each frame by its screen ID label.
3. Export as PNG at 1x (or 2x for higher-resolution reference).
4. Save each file here using the exact filename shown in the table above.

## Notes

- These files are documentation references only; the Figma file is the source of truth for design.
- Screen IDs in filenames must match those in `../Screens.md` and the `modules/<Module>/UI-*.md` spec files.
- Mockups reference here are cited in `../Screens.md` under the Mockup column as `Wireframes/UI-<ID>.png`.
