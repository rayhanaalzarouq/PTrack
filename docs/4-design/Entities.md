# Project Entities Registry (DDT)

## Full List

One row per entity. The attribute-level DDT and PlantUML for each entity live in
`modules/<Module>/Entities.md`. IDs follow `ENT-<DomainCode>-NNN`.

| Entity ID | Entity Name | Module | Module Role (Core/Column/Complementary) | Source FR/UC | Detail | Owner | Status |
|-----------|-------------|--------|-----------------------------------------|--------------|--------|-------|--------|
| ENT-PM-001 | Project | Project Management | Core | FR-PM-001, FR-PM-002, FR-PM-003, FR-PM-004, FR-PM-005, FR-PM-006, FR-PM-007, UC-PM-001, UC-PM-002, UC-PM-003, UC-PM-004, UC-PM-005, UC-PM-006 | modules/project management/Entities.md | Rayhana Alzarouq | Approved |
| ENT-PM-001 | Project | Stage Tracking | Core | FR-STG-001, FR-STG-002, FR-STG-003, UC-STG-001 | modules/Stage Tracking/Entities.md | Rayhana Alzarouq | Approved |
| ENT-PM-001 | Project | Status Tracking | Core | FR-STS-001, FR-STS-002, UC-STS-001 | modules/Statuts Tracking/Entities.md | Rayhana Alzarouq | Approved |
| ENT-PM-001 | Project | Data Persistence | Core | FR-DATA-001, UC-DATA-001 | modules/Data Persistence/Entities.md | Rayhana Alzarouq | Approved |

**Note on entity count:** PTrack v0.1.0 has a single domain entity — `Project`. It appears in all four modules because each module owns a different slice of its behaviour (creation/display, stage assignment, status derivation, persistence). The same `ENT-PM-001` ID is used across modules; the authoritative DDT is in the Project Management module.

---

## Module Mapping

| Entity ID | Module | Role in Module | Notes |
|-----------|--------|----------------|-------|
| ENT-PM-001 | Project Management | Core | Owns the full DDT; entry point for all project operations |
| ENT-PM-001 | Stage Tracking | Core | Operates on the `stage` attribute; triggers status update |
| ENT-PM-001 | Status Tracking | Core | Reads and derives `status` from `stage`; stores result |
| ENT-PM-001 | Data Persistence | Core | Persists and loads the full record to/from localStorage |

---

## Diagrams

| Diagram | Type | File | Covers | Status |
|---------|------|------|--------|--------|
| PTrack ERD | Entity-Relationship | Diagrams/ERD/PTrack-ERD.puml | ENT-PM-001 (Project) — all attributes | Draft |
| Project Status Lifecycle | State | Diagrams/ProjectStatus-State.puml | Project.status enum transitions (mandatory: status is a lifecycle enum column) | Draft |

See `Diagrams/README.md` for render instructions.

---

## Aggregate PlantUML

```plantuml
@startuml
hide methods
hide stereotypes

entity "Project" as Project {
  *id : UUID
  --
  name : String
  description : String
  createdAt : Date
  stage : Enum
  status : Enum
}

note right of Project
  Single domain entity across all modules.
  stage: Planning | Analysis | Design |
         Implementation | Testing | Done
  status: No status set | Not Started |
          In Progress | Completed
  (status derived from stage, stored in localStorage)
end note

storage "localStorage" as LS

Project ..> LS : persisted as JSON (FR-DATA-001)

@enduml
```
