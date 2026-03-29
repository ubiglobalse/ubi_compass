# Phase 2 Plan - Discovery, Editorial QA, Media Validation, and GitBook Verification Readiness

## Goal

Compass should publish from the rebuilt repo structure with cleaner editorial quality, validated media patterns, stronger browse landing pages, and a clear path into search and browse improvements.

## Technical Decisions

- **Canonical architecture:** Continue using the rebuilt repo-first structure as the source of truth for GitBook
- **Editorial priority:** Fix KPI body quality and other obvious import artifacts before adding higher-level discovery features
- **Media validation:** Prove the image and video workflow with a small number of real examples before scaling it broadly
- **Discovery direction:** Improve findability through both structural browse paths and a future cross-content search surface
- **Discovery readiness:** Strengthen landing-page intros and verification tooling so GitBook native search has better context to index

## Waves

### Wave 1 - GitBook Sync Verification

- Refresh the GitBook space against the rebuilt `main` branch
- Verify the published sidebar matches `docs/SUMMARY.md`
- Spot check glossary, KPI, and publication pages in the live GitBook experience

### Wave 2 - KPI Editorial Cleanup (Complete)

- Work through `editorial/KPI-QA.md`
- Normalize awkward imported paragraphs, headings, and labels on KPI detail pages
- Preserve canonical KPI slugs and titles while improving body clarity

### Wave 3 - Media Workflow Validation (Complete)

- Add one real image-backed glossary or publication page
- Add one real video-embedded glossary, KPI, or publication page
- Confirm the workflow is easy enough for ongoing editorial use

### Wave 4 - Discovery Design (Complete)

- Define the browse affordances that help readers who do not know the exact term
- Outline how site-wide search should span glossary, KPI, and publication content
- Identify the minimum implementation path available inside the GitBook publishing model
- Capture the current direction in `editorial/DISCOVERY-DESIGN.md`

### Wave 5 - GitBook Verification Readiness (Complete)

- Improve top-level and category landing page summaries to better support browse-first users
- Add a reusable verification checklist for sidebar, search, and page-level QA in GitBook
- Leave the remaining external step focused on the actual GitBook sync and live checks

## Acceptance Mapping

- `DISC-01`: Search direction is defined across glossary, KPI, and publication content
- `DISC-02`: Search result context is improved through stronger titles and opening summaries on landing pages
- `DISC-03`: Browse structure supports exploration by section and topic grouping
- `CONT-02`: KPI pages become readable and editorially coherent
- `CONT-03`: Publication pages remain understandable and well organized after restructuring
- `PLAT-04`: Images and embedded video are validated in the real publishing workflow

## Expected Output

- GitBook reflects the rebuilt canonical repo structure
- KPI pages read cleanly enough to serve as authoritative references
- Editors have at least one working example each for image-backed and video-backed content
- The next implementation path for search and browse is explicit rather than still exploratory
- GitBook verification can be executed with a concrete checklist instead of ad hoc manual review

## Remaining External Step

- Run the actual GitBook sync against the target space
- Execute `editorial/GITBOOK-VERIFICATION.md` in the live GitBook environment
- Log the outcome and any gaps before declaring Phase 2 complete

## Execution Outcome

- Closed in-repo on 2026-03-29 after KPI cleanup, media validation, discovery design, and verification-readiness work
- Live GitBook sync and verification remain as an operational follow-up outside the repository itself
