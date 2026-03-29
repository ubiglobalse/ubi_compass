# Shared Drive Naming Conventions

## Goal

Keep the Compass Shared Drive predictable so editors can find the latest draft, the right media folder, and the approved handoff asset without guessing.

## Core Rule

Use stable, readable names with a small number of patterns. Do not invent a new naming style for each content batch.

## Shared Drive Folder Names

Keep the top-level folders exactly as defined in `editorial/GOOGLE-WORKSPACE-WORKFLOW.md`:

```text
01 Intake
02 Drafts
03 Structured Data
04 Media
05 Video
06 Publish Queue
07 Published Reference
99 Archive
```

Use numeric prefixes only for these top-level folders so they stay ordered consistently.

## Section Folder Names

Inside the Shared Drive, mirror the same public content families used in the repo:

- `Glossary`
- `KPIs`
- `Publications`

For glossary subfolders, reuse the repo category names in human-readable form:

- `Core Concepts and Spaces`
- `Digital Wave`
- `ESG`
- `Financial Terms`
- `Innovation Terms and Practices`
- `Key Players`
- `Organizational Types and Methodologies`
- `Performance Tracking and Metrics`

## Working Doc Names

Use this format for Google Docs:

```text
<Content Type> - <Working Title>
```

Examples:

- `Glossary - Mentor`
- `Glossary - UBI Global Benchmark`
- `KPI - Sales Revenue`
- `Publication - World Benchmark Report 2021 - 2022`

If a document is still early and messy, add a short suffix:

```text
<Content Type> - <Working Title> - Draft
```

Avoid version numbers in the title unless there is a real parallel version that must coexist.

## Google Sheet Names

Use stable operational names:

- `Compass Content Tracker`
- `Compass KPI Source Validation`
- `Compass Publication Metadata`

If the sheet is temporary, make that obvious:

- `Compass Content Tracker - Temp Import Cleanup`

## Media Folder Names

For working asset folders in Shared Drive, use the canonical slug when possible:

```text
<section>/<slug>
```

Examples:

- `04 Media/Glossary/mentor`
- `04 Media/Glossary/ubi-global-benchmark`
- `04 Media/KPIs/sales-revenue`
- `04 Media/Publications/world-benchmark-report-2021-2022`

This makes handoff into `docs/media/<section>/<slug>/` much easier.

## Image File Names

Use short, descriptive, stable file names:

- `cover.png`
- `hero.png`
- `diagram-01.png`
- `diagram-02.png`
- `chart-01.png`
- `thumbnail.png`

Do not use names like:

- `image-final-final-v2.png`
- `screenshot 2026-03-29 at 14.22.11.png`
- `untitled design.png`

## Video Folder Names

Use the same slug-based pattern in `05 Video`:

```text
05 Video/<content-family>/<slug>
```

Examples:

- `05 Video/Publications/world-benchmark-report-2021-2022`
- `05 Video/Glossary/mentor`

## Video File Names

Use names that describe production stage:

- `raw-interview.mp4`
- `rough-cut-01.mp4`
- `final-cut.mp4`
- `transcript.docx`
- `public-link.txt`

If a public host URL exists, keep a small text or doc file with the approved final URL in the folder.

## Publish Queue Folder Names

Use folders named by slug or clear working title:

- `06 Publish Queue/mentor`
- `06 Publish Queue/sales-revenue`
- `06 Publish Queue/world-benchmark-report-2021-2022`

Only move items here after Google Docs review is complete.

## Archive Names

When archiving, preserve the original name and add a clear date if needed:

```text
<original name> - Archived 2026-03-29
```

## Slug Guidance

Use the repo slug as the naming source whenever a page already exists.

Examples:

- `mentor`
- `sales-revenue`
- `world-benchmark-report-2021-2022`
- `ubi-global-benchmark`

If the page does not exist yet, choose the slug once in the tracker and reuse it everywhere.

## Recommended Naming Checklist

- Does the name clearly tell the team what the file is?
- Does it match the repo page slug or content title where possible?
- Would a new editor know where to file it without asking?
- Will the name still make sense three months from now?

## Practical Default

If the team wants the simplest possible rule:

- Docs: `Content Type - Working Title`
- Media and video folders: canonical slug
- Images: `cover`, `hero`, `diagram-01`, `chart-01`
- Tracker and ops sheets: `Compass <Purpose>`

That is enough consistency for the workflow to stay clean without becoming bureaucratic.
