# Risk Register

**Project:** PTrack
**Version:** 0.1.0 (MVP)
**Type:** Personal project (single developer, no external client)

## Fields
- ID: R-XXX.
- Title: short risk statement.
- Category: Delivery / Technical / Vendor / People / Compliance / Other.
- Impact: Low / Medium / High.
- Likelihood: Low / Medium / High.
- Exposure: Impact x Likelihood (e.g., H x M).
- Owner: accountable person.
- Mitigation: planned actions.
- Trigger: signal that risk is materializing.
- Status: Open / Mitigated / Closed.
- Target Date: mitigation due or review date.
- Links: FR/UC/NFR IDs or decision IDs.

## Register

| ID | Title | Category | Impact | Likelihood | Exposure | Owner | Mitigation | Trigger | Status | Target Date | Links |
|----|-------|----------|--------|------------|----------|-------|------------|---------|--------|--------------|-------|
| R-001 | Scope Creep — adding new features/ideas during development | Delivery | High | Medium | H x M | Rayhana Alzarouq | Strict adherence to defined MVP scope; document and queue new ideas for future releases | New feature idea proposed or added mid-development | Open | 2026-07-30 | ADR-001 |
| R-002 | Lack of Experience with new technologies/libraries/architecture | Technical | Medium | Medium | M x M | Rayhana Alzarouq | Proactive pre-learning, modular task decomposition, consulting reliable technical references | Repeated difficulty implementing a feature or unfamiliar tool/library | Open | 2026-08-06 | ADR-002 |
| R-003 | Time Constraints due to academic coursework, exams, or other commitments | Delivery | High | Medium | H x M | Rayhana Alzarouq | Establish a realistic, buffer-inclusive timeline; strictly prioritize core functionalities | Missing a scheduled milestone date | Open | 2026-07-30 | Milestones-Schedule.md |
| R-004 | Technical Issues / blockers during programming, design, or tool configuration | Technical | Medium | Medium | M x M | Rayhana Alzarouq | Continuous integration/testing routines; rigorous local and cloud backup protocols | Build failure, broken feature, or tool/config error blocking progress | Open | 2026-08-20 | NFR-03 |
| R-005 | Loss of Motivation / burnout / shifting focus to other projects | People | High | Low | H x L | Rayhana Alzarouq | During Version 0.1.0 development, manually track progress using the project's own PM artifacts (Milestones-Schedule.md, Decision Log, Issue Log), updating them regularly | No progress logged for several consecutive days | Open | 2026-09-05 | — |
