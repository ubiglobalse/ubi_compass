# Discovery Design

## Goal

Help readers find relevant Compass content in GitBook whether they already know the exact term they need or are browsing to understand the field.

## Primary User Modes

- Known-item lookup: a reader searches for a specific term, KPI, or report title.
- Guided exploration: a reader starts from a topic area and drills into a smaller set of relevant pages.
- Cross-content discovery: a reader lands on one page and follows connected links into related glossary, KPI, or publication content.

## Browse Affordances

- Keep the three top-level public entry points explicit: Glossary, KPIs & Metrics, and Publications & Reports.
- Continue using category `README.md` pages as browse landing pages with short intros and curated child-page lists.
- Keep glossary browsing thematic rather than alphabetical so users can narrow by concept area before they know exact terms.
- Keep KPI browsing centered on the benchmark KPI library, with related-metric links inside detail pages.
- Keep publications grouped by report type so readers can distinguish benchmark reports, rankings reports, case studies, and ecosystem reports at a glance.

## Content-Type Signaling Rules

- Use the first paragraph of each landing page to say what kind of content lives there and who it helps.
- Use phrases such as "glossary," "KPI," "metric," "benchmark report," and "rankings report" early in the page so GitBook search snippets have clear context.
- Keep H1 titles canonical and human-readable even when source URLs or legacy imports used poor slug names.
- Add short "start here if..." or "browse tips" guidance on landing pages so users can self-route before searching again.

## Search Direction

- Use GitBook's native global search as the Phase 2 baseline instead of adding a custom search stack.
- Optimize repository content so GitBook indexes the most useful text first: clear H1 titles, short opening summaries, recognizable section headings, and internal cross-links.
- Make content-type context obvious in page intros so search results are easier to distinguish even if GitBook's snippet UI is limited.
- Treat related links as a second discovery layer that helps users move across glossary, KPI, and publication content after the first click.

## Priority Search Intents

The baseline GitBook search experience should work for a small set of realistic user intents before any platform-level changes are considered.

- Role lookup: `mentor`, `advisor`, `business accelerator`
- Metric lookup: `jobs created`, `graduate retention`, `investment attracted`
- Topic lookup: `esg`, `digital transformation`, `venture capital`
- Publication lookup: `world rankings`, `benchmark report`, `impact study`
- Cross-domain discovery: `benchmark`, `innovation ecosystem`, `alumni`

## Minimum Implementation Path Inside GitBook

1. Sync the rebuilt repository to GitBook with `docs/` as the publishing root.
2. Verify native GitBook search returns results from glossary, KPI, and publication pages.
3. Spot-check whether search results show enough context from page titles and opening summaries.
4. If result snippets are weak, improve the first 1 to 3 paragraphs of priority pages before considering any platform change.

## In-Repo Implementation For Phase 2

The repository-side work for discovery readiness should stay lightweight and editorial:

1. Strengthen the top-level landing pages for Glossary, KPIs & Metrics, and Publications & Reports.
2. Strengthen category `README.md` pages with concise descriptions and orientation cues.
3. Preserve related links inside KPI and publication detail pages as the main cross-content bridge.
4. Document the live GitBook verification flow separately so the remaining work is operational rather than conceptual.

## Completion Notes

The Phase 2 repository work now covers the design direction and the supporting editorial implementation:

- Top-level browse hubs now contain stronger opening summaries and routing cues.
- Category landing pages now signal what kind of content they contain and when readers should start there.
- GitBook live QA is captured in `editorial/GITBOOK-VERIFICATION.md`.

## Editorial Rules That Support Discovery

- Start priority detail pages with a concise summary before long lists or metadata.
- Use canonical page titles and avoid legacy slug language in visible headings.
- Preserve strong category landing pages because they act as browse hubs when search is not the first step.
- Add or maintain related-article sections on KPI and publication pages so readers can continue exploring from the current page.
- Place clarifying media near the top of a page when it helps orientation, not only at the bottom.

## Deferred Work

- Custom search infrastructure such as Algolia, Meilisearch, or a bespoke client-side index.
- Faceted filtering beyond the browse structure GitBook already supports.
- Analytics-driven tuning of search relevance until GitBook sync and baseline traffic are verified.
