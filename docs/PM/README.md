# Project Management Docs

## Project Charter

### About project

PTrack is a web-based application designed to help software engineers track the progress of their software projects through each development stage. Engineers often work on multiple projects at once and, without a clear way to track progress, tend to lose focus and leave projects unfinished. PTrack addresses this by giving a simple way to monitor each project's status and current development stage.

Version 0.1.0 (MVP) targets a single local user and validates the core concept: creating projects, assigning a status, and tracking the current development stage — laying the foundation for future enhancements (Releases 0.2 through 1.0.0).

### Duration

Originally estimated at one month; current Milestones & Schedule spans ~8 weeks (2026-07-13 to 2026-09-05).

Deliverables:

1. PTrack Application (Version 0.1.0 — MVP)
2. Functional & Non-Functional Requirements documentation
3. UI/UX Design (Figma)
4. Decision Log, Milestones & Schedule, Risk Register, Stakeholder Register, Issue Log

## 1.2 Project Purpose

To deliver a working Version 0.1.0 (MVP) of PTrack that validates the core concept of PTrack by allowing a single local user to create projects, assign a status, and track the current development stage — providing a solid foundation for future enhancements.

This project does NOT include user registration/authentication, multi-user support, mobile application support, project sharing, detailed task management, project deadlines, or file/document uploads.

## 1.3 Objectives (Measurable)

By project completion:

- Users can create and manage software projects
- Users can assign and update the status of each project
- Users can track the current development stage of each project
- The application provides a simple and intuitive interface for monitoring project progress
- Project data persists between application sessions (local storage)
- A solid foundation is established for future versions of the product

## 1.4 Scope

### In Scope

1. Project creation and basic project information capture
2. Project development stage tracking (assign, update, display)
3. Project status tracking (including marking a project as "Completed")
4. Persistence of project data between application sessions (local storage)
5. Implementation of the application using HTML, CSS, and JavaScript
6. UI/UX design using Figma

### Out of Scope

- User registration and login
- Mobile application support
- Multi-user support
- Project sharing between users
- Detailed task management within project stages
- Project deadlines
- Penalties or restrictions for unfinished projects
- Notes management for each project stage
- Uploading and storing project files
- Collecting or storing personal user information

## 1.6 Constraints

- Single developer working solo, with limited and variable availability due to academic coursework, exams, or other prior commitments
- Estimated development time for Version 0.1.0 is one month (extended per current Milestones & Schedule)
- Version 0.1.0 supports a single local user only, on desktop web browsers
- Application limited to HTML, CSS, and JavaScript without a framework
- UI/UX design limited to Figma; documentation limited to Microsoft Word

## 1.7 Assumptions

- The user is a software engineer who manages one or more software projects
- The user is familiar with the basic software development stages
- The user is willing to manually update project stages and statuses
- Users primarily need a simple project tracking tool rather than a complete project management system
- The core features provided in Version 0.1.0 are sufficient to validate the product concept

## 1.8 Success Criteria

Version 0.1.0 will be considered successful if the following criteria are met:

1. Users can create a new project successfully
2. Users can assign and update the current development stage of a project
3. Users can update the project status, including marking it as Completed
4. Project information is preserved between application sessions
5. The application provides a simple and intuitive user experience
6. The core functionality operates without critical errors during normal usage
