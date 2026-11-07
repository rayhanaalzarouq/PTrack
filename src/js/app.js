/* =================================================================
   PTrack v0.1.0 — Application Logic
   Tech stack : Vanilla JS + localStorage (ADR-002, ADR-003)
   Single user: no login / no server (ADR-004)
   Docs       : ../docs/  (see LIFECYCLE.md)
   ================================================================= */

'use strict';

/* -----------------------------------------------------------------
   CONSTANTS
   ----------------------------------------------------------------- */

/** localStorage key (FR-DATA-001) */
const STORAGE_KEY = 'ptrack_v010_projects';

/** Fixed stage list in order (ADR-009, FR-STG-001) */
const STAGES = [
  'Planning',
  'Analysis',
  'Design',
  'Implementation',
  'Testing',
  'Done',
];

/**
 * Stage → Status mapping (ADR-009, FR-STS-002)
 * null stage ⟹ 'No status set'
 */
const STATUS_MAP = {
  Planning:       'Not Started',
  Analysis:       'In Progress',
  Design:         'In Progress',
  Implementation: 'In Progress',
  Testing:        'In Progress',
  Done:           'Completed',
};

/** Default sample project matching UI-PM-003 mockup */
const DEFAULT_SAMPLE_PROJECT = {
  id: 'cafe-website-sample',
  name: 'Café Website',
  description: 'Client Project: Website for "Café Oasis". Goal: Cozy landing page with an online menu, opening hours, location map, and a contact form. Clean, warm design with fast loading and mobile-friendly layout.',
  createdAt: '2026-03-12T10:00:00.000Z',
  stage: 'Testing',
  status: 'In Progress',
};

/* -----------------------------------------------------------------
   APPLICATION STATE
   ----------------------------------------------------------------- */
const state = {
  /** @type {Project[]} */
  projects: [],

  /** @type {string|null} ID of the displayed project */
  selectedId: null,

  /** Current search term (empty = no filter) */
  searchQuery: '',

  /** Whether a search is currently active */
  isSearchActive: false,

  /** 'create' | 'edit' | null */
  modalMode: null,

  /** ID of the project being edited (null when creating) */
  editingId: null,

  /** Whether the stage dropdown is open */
  stageDropdownOpen: false,

  /** Whether the three-dot menu is open */
  menuOpen: false,
};

/* -----------------------------------------------------------------
   TYPES (JSDoc)
   ----------------------------------------------------------------- */
/**
 * @typedef {Object} Project
 * @property {string}      id          - UUID (ENT-PM-001)
 * @property {string}      name        - Required; unique (ADR-010)
 * @property {string}      description - Optional; max 250 chars (ADR-007)
 * @property {string}      createdAt   - ISO 8601 string (ADR-007)
 * @property {string|null} stage       - One of STAGES or null (ADR-009)
 * @property {string}      status      - Derived from stage; stored (ADR-009)
 */

/* -----------------------------------------------------------------
   UTILITY — UUID
   ----------------------------------------------------------------- */
function generateId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

/* -----------------------------------------------------------------
   UTILITY — Name normalization for uniqueness (ADR-010)
   ----------------------------------------------------------------- */
function normalizeName(name) {
  return String(name).toLowerCase().replace(/\s+/g, '');
}

/* -----------------------------------------------------------------
   UTILITY — Date formatting (e.g. 3/12/2026)
   ----------------------------------------------------------------- */
function formatDate(isoString) {
  const d = new Date(isoString);
  if (isNaN(d.getTime())) return isoString;
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
}

/* -----------------------------------------------------------------
   UTILITY — HTML escape (prevent XSS in innerHTML)
   ----------------------------------------------------------------- */
function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#039;');
}

/* -----------------------------------------------------------------
   STATUS DERIVATION (ADR-009, FR-STS-002)
   ----------------------------------------------------------------- */
function deriveStatus(stage) {
  if (!stage) return 'No status set';
  return STATUS_MAP[stage] ?? 'No status set';
}

/* -----------------------------------------------------------------
   STORAGE — localStorage CRUD (FR-DATA-001)
   ----------------------------------------------------------------- */
function loadFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === null) {
    // Fresh installation: return seed sample project
    return [DEFAULT_SAMPLE_PROJECT];
  }
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) throw new Error('Stored data is not an array.');
  return parsed;
}

function saveToStorage(projects) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    return true;
  } catch (_) {
    return false;
  }
}

/* -----------------------------------------------------------------
   DOM HELPERS
   ----------------------------------------------------------------- */
const $ = id => document.getElementById(id);

function show(el) {
  const node = typeof el === 'string' ? $(el) : el;
  node?.removeAttribute('hidden');
}

function hide(el) {
  const node = typeof el === 'string' ? $(el) : el;
  node?.setAttribute('hidden', '');
}

function setText(el, text) {
  const node = typeof el === 'string' ? $(el) : el;
  if (node) node.textContent = text;
}

/* -----------------------------------------------------------------
   DERIVED HELPERS
   ----------------------------------------------------------------- */
function getFilteredProjects() {
  if (!state.isSearchActive || !state.searchQuery) return state.projects;
  const q = normalizeName(state.searchQuery);
  return state.projects.filter(p => normalizeName(p.name).includes(q));
}

function findProject(id) {
  return state.projects.find(p => p.id === id) ?? null;
}

/* -----------------------------------------------------------------
   RENDER — Sidebar project list (FR-PM-002)
   ----------------------------------------------------------------- */
function renderSidebar() {
  const list = $('sidebar-project-list');
  list.innerHTML = '';

  const visible = getFilteredProjects();
  if (visible.length === 0) return;

  visible.forEach(project => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className =
      'sidebar-project-item' + (project.id === state.selectedId ? ' selected' : '');
    btn.setAttribute('role', 'option');
    btn.setAttribute('aria-selected', String(project.id === state.selectedId));
    btn.textContent = project.name;
    btn.dataset.id = project.id;
    btn.addEventListener('click', () => selectProject(project.id));
    list.appendChild(btn);
  });
}

/* -----------------------------------------------------------------
   RENDER — Main content area (router)
   ----------------------------------------------------------------- */
function renderContent() {
  const area = $('content-area');

  // 1. No projects at all → empty state (UI-PM-001)
  if (state.projects.length === 0) {
    area.innerHTML = buildEmptyState();
    $('btn-create-first')?.addEventListener('click', openCreateModal);
    return;
  }

  // 2. Search active with zero matches → no results (UI-PM-005)
  if (state.isSearchActive && getFilteredProjects().length === 0) {
    area.innerHTML = buildNoResults();
    $('btn-clear-search')?.addEventListener('click', clearSearch);
    return;
  }

  // 3. No project selected → choose prompt (UI-PM-009)
  if (!state.selectedId) {
    area.innerHTML = buildChoosePrompt();
    $('btn-create-from-prompt')?.addEventListener('click', openCreateModal);
    return;
  }

  // 4. Project selected → details card (UI-PM-003 + UI-STG-001)
  const project = findProject(state.selectedId);
  if (!project) {
    state.selectedId = null;
    renderContent();
    return;
  }

  area.innerHTML = buildDetailsCard(project);
  attachDetailsListeners(project);
}

/* -----------------------------------------------------------------
   RENDER — Full app
   ----------------------------------------------------------------- */
function renderApp() {
  // Show/hide top bar (search)
  if (state.projects.length > 0) {
    show('top-bar');
  } else {
    hide('top-bar');
  }

  // Keep sidebar list open state in sync
  const listEl = $('sidebar-project-list');
  const toggleBtn = $('btn-projects-toggle');
  if (listEl && !listEl.hidden) {
    renderSidebar();
    show(listEl);
    toggleBtn?.setAttribute('aria-expanded', 'true');
  } else {
    renderSidebar();
  }

  renderContent();
}

/* -----------------------------------------------------------------
   BUILD — Empty state HTML (UI-PM-001)
   ----------------------------------------------------------------- */
function buildEmptyState() {
  return `
    <div class="empty-state">
      <h1>No Projects Yet</h1>
      <p>Start tracking your projects by creating your first one.</p>
      <button class="btn-primary" id="btn-create-first">Add New Project</button>
    </div>`;
}

/* -----------------------------------------------------------------
   BUILD — Choose a project (UI-PM-009)
   ----------------------------------------------------------------- */
function buildChoosePrompt() {
  return `
    <div class="empty-state">
      <h1>Choose a Project</h1>
      <p>Select a project from the list on the left, or create a new one.</p>
      <button class="btn-primary" id="btn-create-from-prompt">Add New Project</button>
    </div>`;
}

/* -----------------------------------------------------------------
   BUILD — No results (UI-PM-005)
   ----------------------------------------------------------------- */
function buildNoResults() {
  return `
    <div class="no-results-card">
      <div class="no-results-icon" aria-hidden="true">🔍</div>
      <h2>No results found</h2>
      <p>No project name matches "<strong>${escapeHtml(state.searchQuery)}</strong>".</p>
      <button class="btn-primary" id="btn-clear-search">Clear search</button>
    </div>`;
}

/* -----------------------------------------------------------------
   BUILD — Project details card (UI-PM-003 + UI-STG-001)
   ----------------------------------------------------------------- */
function buildDetailsCard(project) {
  const hasDesc = project.description && project.description.trim().length > 0;
  const stageIdx = project.stage ? STAGES.indexOf(project.stage) : -1;
  const isDropOpen = state.stageDropdownOpen;

  /* ---- Stage dropdown options ---- */
  const stageOptionsHtml = STAGES.map((s, i) => {
    let indicatorHtml;
    let optionClass = '';

    if (i < stageIdx) {
      // Before current → green check
      indicatorHtml = `<span class="stage-check" aria-hidden="true">✓</span>`;
    } else if (i === stageIdx) {
      // Current → orange dot + highlighted row
      indicatorHtml = `<span class="stage-dot current" aria-hidden="true"></span>`;
      optionClass = 'is-current';
    } else {
      // Not yet reached → grey dot, dimmed text
      indicatorHtml = `<span class="stage-dot remaining" aria-hidden="true"></span>`;
      optionClass = 'is-remaining';
    }

    return `
      <button
        type="button"
        class="stage-option ${optionClass}"
        role="option"
        aria-selected="${project.stage === s}"
        data-stage="${escapeHtml(s)}"
      >
        ${indicatorHtml}
        <span class="stage-name">${escapeHtml(s)}</span>
      </button>`;
  }).join('');

  return `
    <div class="details-card-wrap">
      <div class="details-card" id="details-card">

        <!-- Save failure banner (UI-DATA-001) -->
        <div id="card-save-fail" class="save-failure-banner" role="alert" hidden>
          <span aria-hidden="true">⚠</span> Saving failed. Please try again.
        </div>

        <!-- Header: name + three-dot button -->
        <div class="card-header">
          <h1 class="card-project-name">${escapeHtml(project.name)}</h1>
          <button
            type="button"
            id="btn-three-dot"
            class="three-dot-btn"
            aria-label="Project options"
            aria-haspopup="menu"
            aria-expanded="${state.menuOpen}"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="5" r="2.2"></circle>
              <circle cx="12" cy="12" r="2.2"></circle>
              <circle cx="12" cy="19" r="2.2"></circle>
            </svg>
          </button>
        </div>

        <!-- Three-dot menu popover (UI-PM-008) -->
        <div
          id="three-dot-menu"
          class="three-dot-menu"
          role="menu"
          ${state.menuOpen ? '' : 'hidden'}
        >
          <button type="button" class="menu-item" role="menuitem" data-action="edit">
            <svg class="menu-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
            </svg>
            <span>Edit</span>
          </button>
          <button type="button" class="menu-item" role="menuitem" data-action="delete">
            <svg class="menu-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
            <span>Delete</span>
          </button>
          <button type="button" class="menu-item" role="menuitem" data-action="close">
            <svg class="menu-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
            <span>close</span>
          </button>
        </div>

        <!-- Description (FR-PM-003 AC2) -->
        <p class="card-description ${hasDesc ? '' : 'no-desc'}">
          ${hasDesc ? escapeHtml(project.description) : 'No description'}
        </p>

        <!-- Bottom row: Created Date & Status/Stage pill -->
        <div class="card-bottom-row">
          <div class="card-meta">
            <span class="meta-label">Created</span>
            <span class="meta-date">${formatDate(project.createdAt)}</span>
          </div>

          <div class="status-stage-container">
            <button
              type="button"
              id="btn-stage-toggle"
              class="status-stage-pill"
              aria-expanded="${isDropOpen}"
              aria-controls="stage-dropdown"
              aria-label="Status: ${escapeHtml(project.status || 'No status set')}, Stage: ${escapeHtml(project.stage || 'No stage assigned')}. Click to change stage."
            >
              <div class="ss-column">
                <span class="ss-label">Status</span>
                <span class="ss-value">${escapeHtml(project.status || 'No status set')}</span>
              </div>
              <div class="ss-column">
                <span class="ss-label">Stage</span>
                <span class="ss-value">${project.stage ? escapeHtml(project.stage) : 'No stage assigned'}</span>
              </div>
              <span class="stage-chevron ${isDropOpen ? 'open' : ''}" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>

            <!-- Stage dropdown (UI-STG-001) -->
            <div
              id="stage-dropdown"
              class="stage-dropdown"
              role="listbox"
              aria-label="Select development stage"
              ${isDropOpen ? '' : 'hidden'}
            >
              ${stageOptionsHtml}
            </div>
          </div>
        </div>

      </div><!-- /details-card -->

      <!-- Below-card: Add New Project button (UI-PM-003 component 7) -->
      <div class="card-footer-action">
        <button type="button" class="btn-primary btn-add-project" id="btn-add-below">Add New Project</button>
      </div>
    </div>`;
}

/* -----------------------------------------------------------------
   ATTACH — Details card event listeners
   ----------------------------------------------------------------- */
function attachDetailsListeners(project) {
  // Three-dot toggle
  $('btn-three-dot')?.addEventListener('click', e => {
    e.stopPropagation();
    toggleMenu();
  });

  // Menu item dispatch
  $('three-dot-menu')?.addEventListener('click', e => {
    const action = e.target.closest('[data-action]')?.dataset.action;
    if (!action) return;
    closeMenu();
    if (action === 'edit')   openEditModal(project);
    if (action === 'delete') deleteProject(project.id);
    if (action === 'close') {
      state.selectedId = null;
      state.stageDropdownOpen = false;
      renderApp();
    }
  });

  // Stage dropdown toggle (FR-STG-001)
  $('btn-stage-toggle')?.addEventListener('click', e => {
    e.stopPropagation();
    state.stageDropdownOpen = !state.stageDropdownOpen;
    renderContent();
  });

  // Stage selection (FR-STG-001 / FR-STG-002 / FR-STS-002)
  $('stage-dropdown')?.addEventListener('click', e => {
    const btn = e.target.closest('[data-stage]');
    if (!btn) return;
    e.stopPropagation();
    setProjectStage(project.id, btn.dataset.stage);
  });

  // Add new project button below the card
  $('btn-add-below')?.addEventListener('click', openCreateModal);
}

/* -----------------------------------------------------------------
   ACTIONS — Project selection
   ----------------------------------------------------------------- */
function selectProject(id) {
  state.selectedId        = id;
  state.stageDropdownOpen = false;
  state.menuOpen          = false;
  renderApp();
}

/* -----------------------------------------------------------------
   ACTIONS — Search (ADR-008: on button click or Enter)
   ----------------------------------------------------------------- */
function doSearch() {
  const query = $('search-input')?.value.trim() ?? '';
  state.searchQuery    = query;
  state.isSearchActive = query.length > 0;
  state.selectedId     = null;
  state.stageDropdownOpen = false;
  state.menuOpen       = false;
  renderApp();
}

function clearSearch() {
  const input = $('search-input');
  if (input) input.value = '';
  state.searchQuery    = '';
  state.isSearchActive = false;
  renderApp();
}

/* -----------------------------------------------------------------
   ACTIONS — Three-dot menu toggle / close
   ----------------------------------------------------------------- */
function toggleMenu() {
  state.menuOpen = !state.menuOpen;
  const menu = $('three-dot-menu');
  const btn  = $('btn-three-dot');
  if (!menu || !btn) return;
  if (state.menuOpen) {
    show(menu);
    btn.setAttribute('aria-expanded', 'true');
  } else {
    hide(menu);
    btn.setAttribute('aria-expanded', 'false');
  }
}

function closeMenu() {
  state.menuOpen = false;
  hide('three-dot-menu');
  $('btn-three-dot')?.setAttribute('aria-expanded', 'false');
}

/* -----------------------------------------------------------------
   ACTIONS — Set project stage (FR-STG-001 / FR-STG-002 / FR-STS-002)
   ----------------------------------------------------------------- */
function setProjectStage(projectId, newStage) {
  const idx = state.projects.findIndex(p => p.id === projectId);
  if (idx === -1) return;

  const updated = state.projects.map((p, i) => {
    if (i !== idx) return p;
    return { ...p, stage: newStage, status: deriveStatus(newStage) };
  });

  const ok = saveToStorage(updated);
  if (!ok) {
    show('card-save-fail');
    return;
  }

  state.projects          = updated;
  state.stageDropdownOpen = false;
  renderApp();
}

/* -----------------------------------------------------------------
   ACTIONS — Delete project (FR-PM-006)
   ----------------------------------------------------------------- */
function deleteProject(projectId) {
  const remaining = state.projects.filter(p => p.id !== projectId);

  const ok = saveToStorage(remaining);
  if (!ok) {
    show('card-save-fail');
    return;
  }

  state.projects = remaining;
  if (state.selectedId === projectId) state.selectedId = null;
  state.stageDropdownOpen = false;
  state.menuOpen          = false;
  renderApp();
}

/* -----------------------------------------------------------------
   MODAL — Open / Close / Populate
   ----------------------------------------------------------------- */
function openCreateModal() {
  state.modalMode = 'create';
  state.editingId = null;

  setText('modal-title', 'Create new project');
  setText('modal-subtitle', 'Fill in the details below to add a new project.');
  setText('modal-submit', 'Create');

  $('input-name').value = '';
  $('input-desc').value = '';
  syncCharCounter($('input-desc'));
  clearNameError();
  hide('modal-save-fail');

  show('modal-overlay');
  $('input-name')?.focus();
}

function openEditModal(project) {
  state.modalMode = 'edit';
  state.editingId = project.id;

  setText('modal-title', 'Edit project');
  setText('modal-subtitle', 'Update the details of your project.');
  setText('modal-submit', 'Save');

  $('input-name').value = project.name;
  $('input-desc').value = project.description || '';
  syncCharCounter($('input-desc'));
  clearNameError();
  hide('modal-save-fail');

  show('modal-overlay');
  $('input-name')?.focus();
}

function closeModal() {
  hide('modal-overlay');
  state.modalMode = null;
  state.editingId = null;
  clearNameError();
  hide('modal-save-fail');
}

function showNameError(msg) {
  const errEl = $('name-error');
  if (errEl) {
    errEl.textContent = msg;
    show(errEl);
  }
  $('input-name')?.classList.add('has-error');
}

function clearNameError() {
  hide('name-error');
  $('input-name')?.classList.remove('has-error');
}

function handleModalSubmit() {
  const name        = $('input-name')?.value.trim() ?? '';
  const description = $('input-desc')?.value.trim() ?? '';

  if (!name) {
    showNameError('Project name is required.');
    $('input-name')?.focus();
    return;
  }

  const normalizedNew = normalizeName(name);
  const conflict = state.projects.find(
    p => normalizeName(p.name) === normalizedNew && p.id !== state.editingId
  );
  if (conflict) {
    showNameError('This name is already used by another project.');
    $('input-name')?.focus();
    return;
  }

  if (state.modalMode === 'create') submitCreate(name, description);
  else if (state.modalMode === 'edit') submitEdit(name, description);
}

function submitCreate(name, description) {
  /** @type {Project} */
  const project = {
    id:          generateId(),
    name,
    description: description || '',
    createdAt:   new Date().toISOString(),
    stage:       null,
    status:      deriveStatus(null),
  };

  const next = [...state.projects, project];
  const ok   = saveToStorage(next);

  if (!ok) {
    show('modal-save-fail');
    return;
  }

  state.projects    = next;
  state.selectedId  = project.id;

  show('sidebar-project-list');
  $('btn-projects-toggle')?.setAttribute('aria-expanded', 'true');

  closeModal();
  renderApp();
}

function submitEdit(name, description) {
  const next = state.projects.map(p => {
    if (p.id !== state.editingId) return p;
    return { ...p, name, description: description || '' };
  });

  const ok = saveToStorage(next);
  if (!ok) {
    show('modal-save-fail');
    return;
  }

  state.projects = next;
  closeModal();
  renderApp();
}

/* -----------------------------------------------------------------
   TEXTAREA — Character counter + paste clamping
   ----------------------------------------------------------------- */
function syncCharCounter(textarea) {
  const counter = $('desc-counter');
  if (counter) counter.textContent = `${textarea.value.length}/250`;
}

function onDescInput(e) {
  syncCharCounter(e.target);
}

function onDescPaste(e) {
  e.preventDefault();
  const pasted = (e.clipboardData || window.clipboardData).getData('text');
  const ta     = e.target;
  const before = ta.value.slice(0, ta.selectionStart);
  const after  = ta.value.slice(ta.selectionEnd);
  const space  = 250 - before.length - after.length;
  if (space <= 0) return;
  ta.value = (before + pasted.slice(0, space) + after).slice(0, 250);
  syncCharCounter(ta);
}

/* -----------------------------------------------------------------
   GENERIC ERROR SCREEN (UI-GEN-001)
   ----------------------------------------------------------------- */
function showGenericError() {
  hide('app-shell');
  show('screen-generic-error');
}

function hideGenericError() {
  hide('screen-generic-error');
  show('app-shell');
}

/* -----------------------------------------------------------------
   EVENT BINDING — Static elements (bound once at startup)
   ----------------------------------------------------------------- */
function bindEvents() {

  /* -- Sidebar: Projects dropdown toggle -- */
  $('btn-projects-toggle')?.addEventListener('click', () => {
    const list = $('sidebar-project-list');
    const btn  = $('btn-projects-toggle');
    const open = list && !list.hidden;
    if (open) {
      hide(list);
      btn?.setAttribute('aria-expanded', 'false');
    } else {
      renderSidebar();
      show(list);
      btn?.setAttribute('aria-expanded', 'true');
    }
  });

  /* -- Search (ADR-008: on button click, not live) -- */
  $('btn-search')?.addEventListener('click', doSearch);
  $('search-input')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch();
  });

  /* -- Modal: close / cancel -- */
  $('modal-close')?.addEventListener('click',  closeModal);
  $('modal-cancel')?.addEventListener('click', closeModal);

  /* -- Modal: click backdrop to close -- */
  $('modal-overlay')?.addEventListener('click', e => {
    if (e.target === $('modal-overlay')) closeModal();
  });

  /* -- Modal: submit -- */
  $('modal-submit')?.addEventListener('click', handleModalSubmit);

  /* -- Modal name: clear error on change -- */
  $('input-name')?.addEventListener('input', clearNameError);

  /* -- Modal name: submit on Enter -- */
  $('input-name')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') handleModalSubmit();
  });

  /* -- Modal description: counter + paste -- */
  $('input-desc')?.addEventListener('input', onDescInput);
  $('input-desc')?.addEventListener('paste', onDescPaste);

  /* -- Try Again (UI-GEN-001) -- */
  $('btn-try-again')?.addEventListener('click', () => {
    hideGenericError();
    boot();
  });

  /* -- Global outside click handling -- */
  document.addEventListener('click', e => {
    // If three-dot menu open and clicked outside
    if (state.menuOpen && !e.target.closest('#three-dot-menu') && !e.target.closest('#btn-three-dot')) {
      closeMenu();
    }
    // If stage dropdown open and clicked outside
    if (state.stageDropdownOpen && !e.target.closest('#stage-dropdown') && !e.target.closest('#btn-stage-toggle')) {
      state.stageDropdownOpen = false;
      renderContent();
    }
  });

  /* -- Global keyboard shortcuts -- */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (!$('modal-overlay').hidden) {
        closeModal();
      } else if (state.menuOpen) {
        closeMenu();
      } else if (state.stageDropdownOpen) {
        state.stageDropdownOpen = false;
        renderContent();
      }
    }
  });
}

/* -----------------------------------------------------------------
   BOOT — Load data and render (FR-DATA-001)
   ----------------------------------------------------------------- */
function boot() {
  try {
    state.projects = loadFromStorage();
  } catch (_) {
    showGenericError();
    return;
  }

  // Reset transient state
  state.selectedId        = state.projects.length > 0 ? state.projects[0].id : null;
  state.searchQuery       = '';
  state.isSearchActive    = false;
  state.stageDropdownOpen = false;
  state.menuOpen          = false;

  // Auto-open sidebar list when projects exist
  if (state.projects.length > 0) {
    show('sidebar-project-list');
    $('btn-projects-toggle')?.setAttribute('aria-expanded', 'true');
  }

  renderApp();
}

/* -----------------------------------------------------------------
   ENTRY POINT
   ----------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  show('app-shell');
  bindEvents();
  boot();
});
