# Requirements Analysis
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
| NFR-06 (source) | NFR-006 | NFR | Application does not collect, transmit, or store personal user
