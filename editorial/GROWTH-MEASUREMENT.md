# Growth and Measurement Playbook

## Goal

Support Phase 4 by making Compass easier to discover, easier to share, and better able to turn engaged readers into qualified UBI Global follow-up without harming trust or readability.

## Repo-Side Growth Levers

This repository cannot control every part of acquisition, indexing, or analytics. It can reliably control:

- Canonical page titles
- The first 1 to 3 paragraphs that search and sharing surfaces are most likely to expose
- Internal links that move readers into related high-intent content
- Outbound CTA copy, placement, and destination URLs
- Consistent UTM conventions for UBI Global outbound links

## Organic Discovery Rules

- Write opening summaries so they can stand alone when surfaced in GitBook search, search-engine snippets, or link previews
- Use recognizable phrases such as `glossary`, `KPI`, `benchmark report`, `rankings report`, and `UBI Global` early when they fit the page intent
- Keep the most useful context above embeds, long bullet lists, or migrated source notes
- Make landing pages explain both what content exists there and what action the reader should take next
- Preserve internal links between glossary, KPI, and publication content so discovery continues after the first click

## CTA Rules

Contextual CTAs should feel like the next logical step, not a pop-up translated into Markdown.

- Prefer one short CTA section per page, usually near the end of the core content
- Keep glossary CTAs light and educational
- Use KPI CTAs to bridge from a metric definition into benchmark context or UBI Global offers
- Use publication CTAs for the highest-intent actions because readers are already engaging with deeper research
- Lead with a useful internal next step when it improves reader trust, then offer the relevant UBI Global external path
- Avoid generic "contact us" language when a more specific action is available

## Suggested CTA Destinations

- `academy`: when the page naturally leads into structured learning
- `membership`: when the page aligns with ongoing benchmark participation, peer learning, or organization-level capability building
- `benchmark report`: when the reader needs methodology or KPI context before making a commercial decision

## UTM Convention

Use tagged outbound UBI Global links so Phase 4 performance can be attributed later even if GitBook analytics remain limited.

- `utm_source=compass`
- `utm_medium=gitbook`
- `utm_campaign=<page-or-section-slug>`

Example:

```text
https://ubi-global.com/membership?utm_source=compass&utm_medium=gitbook&utm_campaign=world-benchmark-report-2021-2022
```

## Measurement Baseline

Track the smallest set of signals that can validate Phase 4:

- Page consumption by top-level section and priority landing page
- Native search usage and high-value search intents where available
- Outbound clicks to UBI Global academy and membership pages
- Report engagement signals such as clicks to full-report destinations
- CTA click-through rate on the first high-intent benchmark and publication pages

## External Setup Checklist

These actions live outside the repository and should be completed in the live publishing or marketing stack:

1. Confirm the public GitBook space is indexable and not blocked by unexpected privacy or crawler settings.
2. Connect the preferred analytics destination available for the GitBook space.
3. Register the live Compass domain or GitBook property in the preferred search-console tool.
4. Build a simple baseline dashboard for landing-page views, outbound CTA clicks, and search behavior.
5. Record the first benchmark numbers before broadening the CTA rollout.

## QA Checklist

- Landing-page openings still read naturally to a human, not like SEO filler
- CTA sections are relevant to the page and not repetitive across every content type
- Outbound UBI Global links include the agreed UTM pattern
- Related internal links still resolve correctly after CTA additions
- Live GitBook rendering preserves the intended order and spacing of CTA sections
