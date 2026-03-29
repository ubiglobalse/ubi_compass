# Google Workspace Editorial Workflow

## Goal

Give the Compass team a simple shared operating model for drafting, reviewing, tracking, and handing off terminology, KPI, publication, image, and video work before content becomes canonical Markdown in this repository.

## Core Principle

- Google Workspace is the collaboration layer
- This repository is the canonical publishing layer
- GitBook is the public delivery layer

That means the team can work comfortably in Shared Drive, Google Docs, and Sheets, with Slides used only when a visual asset truly needs it. Approved content should always land in `docs/` before it is considered published.

## Approved Default

The approved default workflow for Compass is:

- Shared Drive for shared working files
- Google Docs for drafting and editorial review
- Google Sheets for tracking, metadata, and publish readiness
- Repo Markdown for approved publishable content
- GitBook for public delivery

Use Slides only as an optional visual-production tool, not as part of the default content workflow.

## Recommended Shared Drive Structure

Create one Shared Drive for Compass and keep the top-level folders stable:

```text
Compass Shared Drive/
  01 Intake/
  02 Drafts/
  03 Structured Data/
  04 Media/
  05 Video/
  06 Publish Queue/
  07 Published Reference/
  99 Archive/
```

For file and folder naming, use `editorial/SHARED-DRIVE-NAMING-CONVENTIONS.md`.

## Folder Purpose

- `01 Intake/`: raw source material, SME notes, legacy exports, external files, and anything not yet cleaned
- `02 Drafts/`: active Google Docs and working review files for terminology, KPI, and publication content
- `03 Structured Data/`: Google Sheets used for trackers, content inventory, metadata, and asset registers
- `04 Media/`: raw images, cropped versions, diagrams, licensed graphics, and image source files
- `05 Video/`: raw video, rough cuts, transcripts, and final hosting links
- `06 Publish Queue/`: items that are approved in Workspace and ready to be converted into repo Markdown
- `07 Published Reference/`: optional mirror copies, exported PDFs, and team-facing reference material for already published items
- `99 Archive/`: retired drafts, superseded media, and legacy working files that should stay findable but out of the active workflow

## Which Tool To Use

### Google Docs

Use Docs for:

- Glossary term drafts
- KPI page drafts
- Publication summaries and content revisions
- SME review and comment resolution
- Final editorial approval before repo handoff

Best when:

- Multiple people need to comment on wording
- The content is mostly narrative
- The team needs suggestion mode and approval comments

### Google Sheets

Use Sheets for:

- Master content tracker
- Terminology backlog and status
- KPI inventory and source validation
- Publication metadata and source-link tracking
- Image and video asset register
- Publish queue and approval status

Best when:

- The team needs one operational view across many entries
- Metadata must stay consistent
- Editorial status needs filtering, sorting, and ownership

### Google Slides

Use Slides for:

- Diagram layouts
- Report-summary visuals
- Simple concept illustrations that may later be exported as images
- Stakeholder review decks that explain upcoming content batches

Best when:

- The team needs visual review rather than text editing
- A diagram or chart is easier to build collaboratively in Slides than in design software

Do not use Slides as the canonical place for page copy, content review, or publish tracking.

## Recommended Team Flow

1. Add the request, source, or idea to the master tracker in Google Sheets.
2. Create a working Google Doc in `02 Drafts/` using the appropriate Compass content pattern.
3. Review in Docs using comments and suggestions until the content is approved.
4. Store any supporting images in `04 Media/` and any video source material in `05 Video/`.
5. Move the approved item into `06 Publish Queue/` or mark it as ready in the tracker.
6. Convert the approved content into Markdown in this repository under `docs/`.
7. Copy publishable images into `docs/media/<section>/<slug>/`.
8. Host final video externally and embed the public URL in Markdown.
9. Commit and push so GitBook publishes the approved repo version.
10. Mark the tracker row as published and link the repo path plus live URL.

## Tracker Setup

Use one master Google Sheet in `03 Structured Data/` and follow `editorial/CONTENT-TRACKER-SPEC.md` for the approved tab structure, columns, and statuses.

## Terminology Workflow

For glossary updates:

1. Track the term in the Sheet.
2. Draft the term in Google Docs.
3. Use the term template structure: summary, definition, why it matters, industry context, related terms.
4. If a visual helps, create or store it in `04 Media/`.
5. Once approved, convert it into `docs/glossary/...`.

Docs are the best default tool for terminology because terms need collaborative wording review more than tabular structure.

## KPI Workflow

For KPI updates:

1. Use Sheets to manage the KPI list, naming, source validation, and status.
2. Use Docs for the narrative page draft and interpretation text.
3. Use Slides only if the team needs to produce a simple explanatory chart or diagram.
4. Move final page copy into `docs/kpis/...` and final publishable images into `docs/media/kpis/...`.

Sheets plus Docs is the approved default combination here.

## Publication Workflow

For reports and publications:

1. Track source URLs, publication date, region, and status in Sheets.
2. Draft or revise the summary page in Docs.
3. Store cover images in `04 Media/`.
4. Store video walkthrough source material or transcripts in `05 Video/`.
5. Publish the final Compass summary page in `docs/publications/...`.

## Images Workflow

Use Shared Drive for working image files and the repo for final publishable assets.

- Working source: `04 Media/`
- Final publishable asset: `docs/media/<section>/<slug>/`

Keep raw or editable source files in Drive even after publishing. Only the optimized image used by the page needs to live in the repo.

## Video Workflow

Use Shared Drive for production files, not the repo.

- Working source: `05 Video/`
- Published destination: YouTube or another stable public host
- Repo usage: embed the final public URL in Markdown

Do not commit large raw video files to this repository.

## Approval Boundary

Approval should happen in Google Workspace. Publishing should happen in the repo.

That keeps review comfortable for non-technical editors while preserving a clean canonical source for GitBook.

## Practical Recommendation

The default operating model is:

- Google Docs for page drafting and review
- Google Sheets for tracking, metadata, and publish readiness
- Shared Drive as the shared workspace
- Repo Markdown as the approved publishable source

Use Google Slides only when a visual asset needs collaborative layout work.
