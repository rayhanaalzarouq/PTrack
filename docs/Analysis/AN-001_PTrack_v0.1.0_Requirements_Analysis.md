ر# Requirements Analysis
=====================
Full List
---------
| Analysis ID | Source Ref | Domain / Package | Scope Summary | Owner | Status | Last Updated |
|-------------|------------|------------------|---------------|-------|--------|--------------|
| AN-001      | SRC-PRD-PTrack-v0.1.0 |  | Core MVP: create projects, track stage and status, persist data across sessions | | Approved | 2026-08-04 |
---
Analysis Template
-----------------
## 1. Analysis Identification
| Field | Value |
|-------|-------|
| Analysis ID | AN-001 |
| Source Ref | SRC-PRD-PTrack-v0.1.0 (PRD document, "PTrack V0.1.0 (MVP)", dated 13/7/2026) |
| Domain / Package | |
| Scope Summary | MVP allowing a single local user to create projects, assign/update development stage, assign/update status (incl. Completed), and persist data between sessions |
| Analyst | Rayhana Alzarouq |
| Reviewer | Rayhana Alzarouq |
| Status | Approved |
| Priority Context | Must |
| Analysis Date | 2026-08-01 |
---
## 2. Source Summary
- Source material: PRD "PTrack V0.1.0 (MVP)", dated 13/7/2026, authored by SWE Rayhana Alzarouq. Contains Introduction, Problem Statement, Goals and Objectives, Target Users, Scope, User Stories, Functional Requirements (FR-01 to FR-08 in source numbering), Non-Functional Requirements (NFR-01 to NFR-06 in source numbering), Success Criteria, Assumptions, Constraints, Risks, and Future Enhancements.
- Business objective: Validate the core concept of PTrack -- a simple web-based tool for a software engineer to track the status and development stage of their software projects -- as a foundation for future releases (0.2 through 1.0.0).
- Scope boundaries: In scope -- project creation, stage tracking, status tracking (including marking Completed), data persistence between sessions. Out of scope -- user registration/login, mobile support, multi-user support, project sharing, detailed task management, deadlines, penalties, stage notes, file uploads, collecting personal user data.
- Assumptions: Single local user who is a software engineer; user is familiar with basic development stages; user updates stage/status manually; user needs a simple tracker, not a full PM suite; MVP feature set is sufficient to validate the concept.
---
## 3. Candidate Requirement Table

### 3.1 Use Cases (from User Stories)
| Ref | Candidate ID | Type (FR/UC/NFR/Gap/Entity) | Normalized Statement | Priority | Status |
|-----|--------------|------------------------------|-----------------------|----------|--------|
| User Story 1 | UC-001 | UC | User creates a new project by providing its name | Must | Draft |
| User Story 2 | UC-002 | UC | User views the list of projects and their basic information | Must | Draft |
| User Story 3 | UC-003 | UC | User specifies and updates the current development stage of a project | Must | Draft |
| User Story 4 | UC-004 | UC | User views and updates the status of a project | Must | Draft |
| User Story 5 | UC-005 | UC | User's project information and progress persist across sessions | Must | Draft |

### 3.2 Functional Requirements
| Ref | Candidate ID | Type (FR/UC/NFR/Gap/Entity) | Normalized Statement | Priority | Status |
|-----|--------------|------------------------------|-----------------------|----------|--------|
| FR-01 (source) | FR-001 | FR | System allows the user to create a new project by entering its name | Must | Draft |
| FR-02 (source) | FR-002 | FR | System displays a list of all created projects | Must | Draft |
| FR-03 (source) | FR-003 | FR | System allows the user to assign the current development stage to a project | Must | Draft |
| FR-04 (source) | FR-004 | FR | System allows the user to modify the current development stage of an existing project | Must | Draft |
| FR-05 (source) | FR-005 | FR | System displays the current development stage for each project | Must | Draft |
| FR-06 (source) | FR-006 | FR | System displays the current status of each project | Must | Draft |
| FR-07 (source) | FR-007 | FR | System allows the user to update the status of a project | Must | Draft |
| FR-08 (source) | FR-008 | FR | System saves project information and progress so data is available on reopening | Must | Draft |

### 3.3 Non-Functional Requirements
| Ref | Candidate ID | Type (FR/UC/NFR/Gap/Entity) | Normalized Statement | Priority | Status |
|-----|--------------|------------------------------|-----------------------|----------|--------|
| NFR-01 (source) | NFR-001 | NFR | Application provides a simple, intuitive UI requiring minimal user effort | Should | Draft |
| NFR-02 (source) | NFR-002 | NFR | System responds to user actions (create/update project) within 2 seconds under normal usage | Should | Draft |
| NFR-03 (source) | NFR-003 | NFR | System preserves project data between sessions without data loss under normal conditions | Must | Draft |
| NFR-04 (source) | NFR-004 | NFR | Application runs on modern desktop browsers (Chrome, Edge, Firefox) | Should | Draft |
| NFR-05 (source) | NFR-005 | NFR | Application is built with a clear, organized code structure to support future maintenance | Could | Draft |
| NFR-06 (source) | NFR-006 | NFR | Application does not collect, transmit, or store personal user information in v0.1.0 | Must | Draft |
---
## 4. Ambiguity and Questions
| # | Item | Why Ambiguous | Proposed Options | Needed From |
|---|------|---------------|-------------------|-------------|
| 1 | "Basic project information" (FR-001, UC-002) | "Name" is the only confirmed required field; the other fields shown in the project list (if any) are not specified | (a) Name only for v0.1.0; (b) Name + auto-generated creation date; (c) Name + optional description | Product/Analyst decision |
| 2 | "Current development stage" values (FR-003/FR-004/FR-005) | The fixed list of stages (e.g., Planning, Design, Development, Testing, Done) is undefined, and whether it is free text or a fixed set is unclear | (a) Fixed predefined list of stages; (b) User-defined free-text stage | Analyst + Reviewer |
| 3 | "Project status" values (FR-006/FR-007) | "Completed" is the only status explicitly named; the rest of the status set is undefined | (a) Fixed set: Not Started / In Progress / Completed; (b) Broader fixed set including On Hold/Paused | Analyst + Reviewer |
| 4 | Data persistence mechanism (FR-008, NFR-003) | Persistence between sessions is required, but the storage mechanism (local storage vs. file vs. future DB per Release 0.2) is unspecified | Confirm local browser storage (e.g., localStorage) is acceptable for v0.1.0 given Release 0.2 introduces a centralized DB | Technical Lead |
| 5 | Project deletion/editing (name change) | Absent from Scope, User Stories, and FRs entirely; unclear if intentionally excluded or an oversight | (a) Explicitly out of scope for v0.1.0; (b) Add as a small additional FR | Product Owner |
---
## 5. Traceability Preview
| Artifact | Links To | Missing Links |
|----------|----------|---------------|
| | | Not filled -- no FR-Registry, UC-Registry, or TestCases entries exist yet for this project; to be completed once those registries are populated |
---
## 6. Quality Check (MoSCoW + INVEST)
### 6.1 Prioritization (MoSCoW)
| Candidate ID | Must | Should | Could | Won't (This Release) | Rationale |
|--------------|------|--------|-------|------------------------|-----------|
| FR-001 | Yes | | | | Core action; without it no project can exist |
| FR-002 | Yes | | | | Needed to view any created project |
| FR-003 | Yes | | | | Core stage-tracking objective of the MVP |
| FR-004 | Yes | | | | Required to keep stage information accurate |
| FR-005 | Yes | | | | Directly tied to Success Criteria |
| FR-006 | Yes | | | | Directly tied to Success Criteria |
| FR-007 | Yes | | | | Core status-tracking objective, incl. "Completed" |
| FR-008 | Yes | | | | Explicit Success Criterion; without it, all progress is lost |
| NFR-001 | | Yes | | | Important for adoption but not a blocking functional gate |
| NFR-002 | | Yes | | | Performance target improves experience, not core function |
| NFR-003 | Yes | | | | Same weight as FR-008 -- no persistence means MVP failure |
| NFR-004 | | Yes | | | Cross-browser support desirable, not strictly blocking |
| NFR-005 | | | Yes | | Code quality goal -- internal, no direct user-facing impact |
| NFR-006 | Yes | | | | Hard constraint stated explicitly in PRD (no personal data) |
### 6.2 Requirement Quality (INVEST)
| Candidate ID | Independent | Negotiable | Valuable | Estimable | Small | Testable | Notes |
|--------------|-------------|------------|----------|-----------|-------|----------|-------|
| FR-001 | Yes | Yes | Yes | Yes | Yes | Yes | Depends on Ambiguity #1 (field set) |
| FR-002 | No | Yes | Yes | Yes | Yes | Yes | Depends on FR-001 existing first |
| FR-003 | No | Yes | Yes | No | Yes | Yes | Estimation blocked until Ambiguity #2 resolved |
| FR-004 | No | Yes | Yes | No | Yes | Yes | Depends on FR-003; blocked by Ambiguity #2 |
| FR-005 | No | Yes | Yes | Yes | Yes | Yes | Depends on FR-003/FR-004 |
| FR-006 | No | Yes | Yes | No | Yes | Yes | Estimation blocked until Ambiguity #3 resolved |
| FR-007 | No | Yes | Yes | No | Yes | Yes | Depends on FR-006; blocked by Ambiguity #3 |
| FR-008 | Yes | Yes | Yes | No | No | Yes | Size depends on Ambiguity #4 (storage mechanism) |
| NFR-001 | Yes | Yes | Yes | No | No | No | Subjective; needs measurable UX criteria to be testable |
| NFR-002 | Yes | Yes | Yes | Yes | Yes | Yes | Clear numeric threshold (2 seconds) |
| NFR-003 | No | Yes | Yes | No | No | Yes | Overlaps with FR-008; consider merging or cross-referencing |
| NFR-004 | Yes | Yes | Yes | Yes | Yes | Yes | Clear, testable across 3 named browsers |
| NFR-005 | Yes | Yes | No | No | No | No | Not independently user-valuable; hard to test directly |
| NFR-006 | Yes | No | Yes | Yes | Yes | Yes | Hard constraint, not negotiable |
---
## 7. Recommended File Updates
| File | Planned Update | Reason |
|------|------------------|--------|
| docs/FR-Registry/FRs.md | Create; add rows FR-001 to FR-008 | Register FR candidates |
| docs/UC-Registry/UCs.md | Create; add rows UC-001 to UC-005 | Register UC candidates |
| docs/Packages/[Package]/FR-001.md ... FR-008.md | Create | Detailed FR content, one file per ID (package name TBD) |
| docs/Packages/[Package]/UC-001.md ... UC-005.md | Create | Detailed UC content (actors, flows, pre/postconditions per template), one file per ID (package name TBD) |
| docs/NFRs.md | Create; add rows NFR-001 to NFR-006 | NFR impact alignment |
---
## 8. Decision and Sign-off
| Decision | Value |
|----------|-------|
| Ready for authoring | Yes |
| Blockers | None at Analysis level. Ambiguities #1-#5 remain open and carry forward as input to the Requirements phase for decision; FR-Registry, UC-Registry, and NFRs.md do not exist yet under docs/ |
| Reviewer notes | Every candidate classified (FR-001..FR-008, NFR-001..NFR-006, UC-001..UC-005); open questions logged in Section 4; file update plan listed in Section 7; no hidden assumptions |
| Approval date | 2026-08-04 |
