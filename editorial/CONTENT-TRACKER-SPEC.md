# Content Tracker Spec

## Goal

Define the default Google Sheet structure for Compass so the team can track terminology, KPI, publication, image, and video work in one consistent operational file.

## Recommended File

- One master Google Sheet in `03 Structured Data/`
- Suggested filename: `Compass Content Tracker`

## Required Tabs

Create these tabs first:

- `Content Tracker`
- `Glossary Backlog`
- `KPI Library`
- `Publications`
- `Media Register`
- `Video Register`
- `Publish Queue`

## `Content Tracker` Columns

Use this tab as the master view across all content types.

- `ID`
- `Content type`
- `Working title`
- `Canonical title`
- `Canonical slug`
- `Section`
- `Owner`
- `SME`
- `Source link`
- `Working doc`
- `Media folder`
- `Video link`
- `Status`
- `Priority`
- `Ready for repo`
- `Repo path`
- `Live URL`
- `Last updated`
- `Notes`

## `Glossary Backlog` Columns

- `Term`
- `Category`
- `Reason for update`
- `Owner`
- `SME`
- `Working doc`
- `Status`
- `Canonical slug`
- `Repo path`
- `Notes`

## `KPI Library` Columns

- `KPI name`
- `Metric group`
- `Source status`
- `Owner`
- `Working doc`
- `Status`
- `Canonical slug`
- `Repo path`
- `Related report`
- `Notes`

## `Publications` Columns

- `Publication title`
- `Report type`
- `Publisher`
- `Published date`
- `Region`
- `Source URL`
- `Owner`
- `Working doc`
- `Cover asset`
- `Video asset`
- `Status`
- `Repo path`
- `Live URL`
- `Notes`

## `Media Register` Columns

- `Asset name`
- `Asset type`
- `Related content`
- `Drive folder`
- `Approved for publish`
- `Repo destination`
- `Owner`
- `Last updated`
- `Notes`

## `Video Register` Columns

- `Video title`
- `Related content`
- `Raw file location`
- `Transcript link`
- `Public host URL`
- `Approved for embed`
- `Owner`
- `Status`
- `Notes`

## `Publish Queue` Columns

- `Working title`
- `Content type`
- `Owner`
- `Approved date`
- `Ready for repo`
- `Target repo path`
- `Needs image`
- `Needs video`
- `Published`
- `Live URL`
- `Notes`

## Status Values

Use the same status language across all tabs:

- `Intake`
- `Drafting`
- `In review`
- `Approved`
- `Ready for repo`
- `Published`
- `Archived`

## Recommended Rules

- One row per publishable page
- One canonical slug per page
- Always link the active Google Doc in the Sheet
- Always link the final repo path once published
- Mark `Ready for repo` only after Docs review is complete
- Do not use the Sheet itself as the place for final narrative copy

## Practical Setup Order

1. Create the Shared Drive folders.
2. Create the master Google Sheet.
3. Add the required tabs.
4. Add the standard columns.
5. Add dropdown validation for `Content type`, `Status`, and `Priority`.
6. Start every new terminology, KPI, or publication request in `Content Tracker`.
