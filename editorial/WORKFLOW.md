# Editorial Workflow

## Principle

GitBook is the public publishing layer. This repository is the source of truth.

Google Workspace is the collaboration layer for drafting, review, tracking, and media staging before approved content lands here.

## Recommended Flow

1. Draft or revise content in Google Docs if the subject-matter expert prefers that workflow.
2. Review and approve the content.
3. Convert the approved version into Markdown in `docs/`.
4. Add any publishable images to `docs/media/`.
5. Reference hosted video with a public embed URL.
6. Commit and push changes so GitBook updates.

## Team Workspace

The approved default team workflow is Shared Drive + Google Docs + Google Sheets.

- Use `editorial/GOOGLE-WORKSPACE-WORKFLOW.md` for the full operating model
- Use `editorial/CONTENT-TRACKER-SPEC.md` to create the master Google Sheet
- Use `editorial/SHARED-DRIVE-NAMING-CONVENTIONS.md` for folder and file naming
- Use `editorial/TEAM-WORKFLOW-VISUAL.md` when you need a quick team-shareable overview

## When To Use Google Docs

Use Google Docs for drafting, collaborative review, and comment resolution.

Do not treat Google Docs as the published canonical layer once content is approved. The approved version should be represented in Markdown here.

## When To Use Google Sheets

Use Google Sheets for tracking backlog, ownership, metadata, source links, media references, and publish readiness across the whole library.

## Publishing Rules

- One page per concept, KPI, or publication entry
- Stable filenames once a page is public
- Prefer relative image paths
- Prefer hosted video embeds over checked-in video binaries
- Keep raw source assets in Drive if they are large or still in production
- Use the content templates under `editorial/templates/` when creating or substantially revising a page
- Follow `editorial/READABILITY-STANDARDS.md` for page structure, freshness cues, and scan-friendly formatting
- Follow `editorial/GROWTH-MEASUREMENT.md` when adding shareability improvements, CTA sections, or outbound UBI Global links
