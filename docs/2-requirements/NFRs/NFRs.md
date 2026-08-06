# Non-Functional Requirements (NFRs)
Project-level NFR catalog. One entry per NFR with an ID and a measurable target.
Reference these NFR IDs in UC section 9 where a flow depends on them.

Note: IDs NFR-001 to NFR-006 are carried over unchanged from AN-001 (Analysis
phase) and are already referenced in the Traceability sections of FR-*.md and
UC-*.md. Two categories (Usability, Compatibility) were added because they do
not map onto the original nine-category catalog. Categories with no
applicable PTrack v0.1.0 requirement are listed as Not Applicable rather than
omitted, so the full catalog stays visible for future releases.
---
## NFR-001: Usability
- The application shall provide a simple, intuitive UI requiring minimal user effort to create and track projects.
- Source: AN-001 (derived from PRD v0.1.0). No numeric usability metric defined yet for v0.1.0.
---
## NFR-002: Performance
- The system shall respond to user actions (create/update project) within 2 seconds under normal usage.
- Source: AN-001 (derived from PRD v0.1.0).
---
## Availability
- Not applicable for v0.1.0. PTrack v0.1.0 is a single local user, client-side application with no server component or uptime target.
---
## Scalability
- Not applicable for v0.1.0. Single local user, no defined concurrent-user or record-volume target. May become relevant from Release 0.2 onward if a centralized DB is introduced (see FR-DATA-001 dependency on Ambiguity #4, AN-001).
---
## Security
- NFR-006: The application shall not collect, transmit, or store personal user information in v0.1.0.
- Source: AN-001 (derived from PRD v0.1.0). No credential handling or access control applies, since v0.1.0 has no login/accounts (explicitly out of scope).
---
## NFR-003: Reliability
- The system shall preserve project data between sessions without data loss under normal conditions.
- Source: AN-001 (derived from PRD v0.1.0). Overlaps with FR-DATA-001; exact failure-handling behavior is TBD pending Ambiguity #4 (AN-001).
---
## Observability
- Not applicable for v0.1.0. No logging, metrics, or alerting requirement defined; PTrack v0.1.0 has no server-side component to observe.
---
## Data Retention
- Not applicable for v0.1.0. No retention or erasure target defined; no personal data is collected (see NFR-006 / Security).
---
## NFR-004: Compatibility
- The application shall run on modern desktop browsers (Chrome, Edge, Firefox).
- Source: AN-001 (derived from PRD v0.1.0).
---
## NFR-005: Maintainability
- The application shall be built with a clear, organized code structure to support future maintenance.
- Source: AN-001 (derived from PRD v0.1.0). No specific architectural metric defined yet for v0.1.0.
---
## Compliance
- Not applicable for v0.1.0. No regulatory or audit requirement identified; PTrack v0.1.0 does not collect personal data (see NFR-006 / Security).
---
