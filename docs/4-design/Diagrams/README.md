# Diagrams — PTrack v0.1.0

ERD, state, and architecture diagrams for PTrack. PlantUML sources live here
(`.puml` files); entity-relationship diagrams go under `ERD/`.

## Diagram Index

| File | Type | Covers | Status |
|------|------|--------|--------|
| ERD/PTrack-ERD.puml | Entity-Relationship (Crow's Foot) | Project entity — all attributes | Draft |
| ProjectStatus-State.puml | State | Project.status lifecycle transitions | Draft |

## Render Instructions

PlantUML diagrams must be rendered — a diagram that has never been rendered is
unverified. Use one of the following methods:

- **VS Code:** install the PlantUML extension (jebbs.plantuml), open a `.puml`
  file, and press `Alt+D` (Preview Current Diagram).
- **Online:** paste the `.puml` source into <https://www.plantuml.com/plantuml>.
- **CLI:** `java -jar plantuml.jar <file>.puml` (requires Java and plantuml.jar).

After rendering, assert diagram correctness — LLM-generated diagrams are
prototypes, not trusted artifacts. Correct any logic errors before marking the
diagram Approved.

## Notation Notes

- ERDs use Crow's Foot notation (see `ERD/README.md`).
- State diagrams use UML state notation: rounded rectangles for states, labeled
  arcs for transitions, `[guard]` conditions in brackets.
- PlantUML source is never inlined inside a `.md` file; the `.md` carries an
  ASCII summary and a pointer to the `.puml` source.

## Definition of Done (Phase 4)

A diagram is done when:
1. The `.puml` file exists in this folder.
2. The diagram has been rendered (exits without error).
3. Its content has been reviewed and asserted correct by the project owner.
4. Its entry in `../Entities.md` Diagrams table is updated to Approved.
