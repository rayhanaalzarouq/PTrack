# ERD — PTrack v0.1.0

Entity-Relationship Diagrams use Crow's Foot notation, not UML. They illustrate
relationships between entities rather than the complete schema.

For the attribute-level schema (the DDT), see `../../Entities.md` and each
module's `modules/<Module>/Entities.md`.

## Note on PTrack v0.1.0

PTrack v0.1.0 has a single domain entity (`Project`). There are no FK
relationships between entities. The ERD therefore shows one entity with its full
attribute set; its value is in documenting the data shape and serving as the
baseline for Release 0.2 (when a centralised DB and potentially new entities
will be introduced).

See `PTrack-ERD.puml` for the PlantUML source. Render before asserting
correctness (see `../README.md` for instructions).
