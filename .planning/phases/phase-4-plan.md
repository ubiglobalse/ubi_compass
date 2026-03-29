# Phase 4 Plan - Public Reach, Organic Discovery, and Contextual Lead Capture

## Goal

Compass should turn public reading behavior into stronger thought leadership, better organic discovery, and qualified top-of-funnel interest for UBI Global without adding intrusive gating or compromising the reading experience.

## Technical Decisions

- **GitBook-native growth path:** Use the existing GitBook publishing model rather than introducing a custom frontend or separate marketing stack inside this repository
- **Summary-first SEO:** Treat page titles, opening summaries, and section landing pages as the primary levers for indexability, snippet quality, and shareability
- **Contextual CTA model:** Place soft calls to action only where the content naturally leads to the next UBI Global offer, report, or learning path
- **Measurement by link and surface:** Capture baseline performance through analytics configuration outside the repo and through consistent outbound-link conventions inside the repo
- **High-intent-first rollout:** Start with home, section landing pages, benchmark-oriented pages, and flagship publications before expanding CTA patterns broadly across the library

## Waves

### Wave 1 - Organic Discovery Baseline

- Strengthen home and section landing pages so they clearly communicate value to searchers and share recipients
- Add explicit shareability and snippet-writing guidance to the editorial system
- Prioritize canonical benchmark and publication pages whose openings are likely to earn external discovery

### Wave 2 - Contextual CTA System

- Define where CTA sections belong for glossary, KPI, and publication content
- Introduce soft CTA patterns that guide readers toward membership, academy, benchmark, or deeper research only when the page intent supports it
- Apply the pattern first to high-intent pages instead of across the full corpus

### Wave 3 - Baseline Measurement Readiness

- Define a small set of performance signals for page consumption, search usage, report engagement, and outbound lead clicks
- Standardize UTM-tagged outbound link conventions so CTA performance can be attributed even if GitBook tracking is limited
- Document the GitBook-side and analytics-side setup required outside the repository

### Wave 4 - Live Validation and Tuning

- Verify the updated landing pages and CTA sections in the live GitBook experience
- Spot-check search snippet quality for priority intents after the changes publish
- Capture early observations and decide whether to broaden the CTA rollout or continue refining high-intent pages first

## Acceptance Mapping

- `IA-03`: Public pages are more indexable and shareable through stronger openings, clearer value framing, and cleaner discovery paths
- `LEAD-01`: Compass exposes non-intrusive calls to action that invite qualified follow-up with UBI Global
- `LEAD-02`: CTA placement varies by content type and user intent instead of appearing as generic interruptions everywhere
- `PLAT-03`: The repo defines a measurable baseline through link conventions, tracking guidance, and a clear external setup checklist

## Expected Output

- A documented Phase 4 operating model for organic reach, contextual CTAs, and baseline measurement
- Updated templates that make shareable summaries and contextual next steps part of the editorial system
- Home, section landing pages, and selected high-intent pages upgraded with Phase 4 discovery and CTA patterns
- A short external checklist for GitBook admins or marketers who must complete analytics and search-console setup outside the repo

## External Dependencies

- GitBook administrators still need to configure any available analytics integrations and verify public indexing behavior in the live space
- Search Console, analytics dashboards, and CRM-side attribution live outside this repository and should use the repo's link conventions rather than ad hoc campaign tagging

## Progress Notes

- Phase 4 was opened on 2026-03-29 after live GitBook route checks confirmed the Phase 3 repo-backed structure was publishing correctly
- The initial Phase 4 slice focuses on planning alignment, editorial system updates, landing-page improvements, and contextual CTAs on a small set of benchmark-oriented pages
