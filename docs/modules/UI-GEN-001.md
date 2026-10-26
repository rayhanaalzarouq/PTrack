# UI Screen Specification
---
## 1. Screen Identification
| Field | Value |
|-------|--------|
| UI ID | UI-GEN-001 |
| Title | Generic Error |
| Module | General (cross-cutting) |
| Purpose | Inform the user when loading fails or any other error occurs that is not a save failure or storage problem (those use UI-DATA-001) |
| Persona | PER-PM-001 |
| Status | Approved |
| Priority | Must |
| Target Release | v0.1.0 |
| Wireframe | Wireframes/UI-GEN-001.png |
---
## 2. Realizes
| Type | IDs |
|------|-----|
| Functional Requirements | FR-PM-002 (AC3), FR-PM-003 (AC3), FR-STG-003 (AC3), FR-STS-001 (AC3) |
| Use Cases | UC-PM-002 (E1), UC-PM-003 (E1) |
| Decisions | ADR-012, ADR-013 |
---
## 3. Components
| # | Component | Description |
|---|-----------|-------------|
| 1 | Error indicator | Warning icon (red triangle) |
| 2 | Error message | Heading "Something went wrong." with the text "An unexpected error occurred. Please try again later or refresh the page." |
| 3 | Try again action | Button labeled "Try Again" (with a refresh icon); repeats the action or load that failed |
| 4 | Header | App name "PTrack" with its logo; the screen has no sidebar and no search bar |
---
## 4. States
| State | What the user sees | Source | Mockup |
|-------|--------------------|--------|--------|
| Error | Generic error message with a Try again action instead of blank, partial, or incorrect content | FR-PM-002 AC3, FR-PM-003 AC3, FR-STG-003 AC3, FR-STS-001 AC3 | Yes |
---
## 5. Data
- No project data is shown.
- Selection rule: save failures and storage problems are shown with UI-DATA-001; every other error and load failure is shown with this screen.
- The Try again action repeats the failed action or load.
---
## 6. Accessibility
See Accessibility.md (target: WCAG 2.1 Level A).
---
## 7. Traceability
| Related Artifact | Reference |
|------------------|------------|
| Persona | PER-PM-001 |
| User Flows | UF-002, UF-003 |
| Related Screens | UI-DATA-001, UI-PM-002, UI-PM-003, UI-STG-001 |
| Test Cases | TC-XXX |
---
