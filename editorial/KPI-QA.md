# KPI QA

This report tracks the KPI cleanup decisions made during the structural rebuild of Compass.

## Key findings

- The original GitBook export collapsed every KPI detail page under a repeated Jobs created and sustained slug pattern.
- The rebuild renamed each KPI page to its actual metric name so the repo and GitBook sidebar reflect the real content.
- Several KPI pages still need editorial proofreading because the import flattened some GitBook block formatting into awkward paragraphs.

## Cleanup completed on 2026-03-29

- All canonical KPI pages were normalized into a consistent Markdown structure with clear `Definition`, `Purpose`, `Rationale`, `Advantages`, `Limitations`, and `Related Articles` sections where source content supported them.
- Repeated import artifacts such as duplicated metric titles, stray asset labels, and flattened related-article text were removed from the KPI detail pages.
- Related article references were converted into working local Markdown links so the KPI set now behaves more like a connected reference library.

## Canonical KPI map

| Canonical KPI | Current file | Source file | Notes |
| --- | --- | --- | --- |
| ESG Framework Adoption | [esg-framework-adoption.md](../docs/kpis/ubi-global-benchmark-kpis/esg-framework-adoption.md) | `kpi-jobs-created-and-sustained.md` | Source slug and H1 incorrectly identified this page as Jobs created and sustained. |
| In-state Applications | [in-state-applications.md](../docs/kpis/ubi-global-benchmark-kpis/in-state-applications.md) | `kpi-jobs-created-and-sustained-1.md` | Source slug and H1 incorrectly identified this page as Jobs created and sustained. |
| Graduates | [graduates.md](../docs/kpis/ubi-global-benchmark-kpis/graduates.md) | `kpi-jobs-created-and-sustained-2.md` | Imported body merged the metric title with the description in the first paragraph. |
| Events | [events.md](../docs/kpis/ubi-global-benchmark-kpis/events.md) | `kpi-jobs-created-and-sustained-3.md` | Source slug and H1 incorrectly identified this page as Jobs created and sustained. |
| 5-Year Survival Rate | [five-year-survival-rate.md](../docs/kpis/ubi-global-benchmark-kpis/five-year-survival-rate.md) | `kpi-jobs-created-and-sustained-4.md` | Source slug and H1 incorrectly identified this page as Jobs created and sustained. |
| Seed Funding Attraction | [seed-funding-attraction.md](../docs/kpis/ubi-global-benchmark-kpis/seed-funding-attraction.md) | `kpi-jobs-created-and-sustained-5.md` | Imported body merged the metric title with supporting copy in the first paragraph. |
| High-Growth Enterprises | [high-growth-enterprises.md](../docs/kpis/ubi-global-benchmark-kpis/high-growth-enterprises.md) | `kpi-jobs-created-and-sustained-6.md` | Source slug and H1 incorrectly identified this page as Jobs created and sustained. |
| Average Investment Attracted | [average-investment-attracted.md](../docs/kpis/ubi-global-benchmark-kpis/average-investment-attracted.md) | `kpi-jobs-created-and-sustained-7.md` | Imported body merged the metric title with the description in the first paragraph. |
| Environmental Impact Stats | [environmental-impact-stats.md](../docs/kpis/ubi-global-benchmark-kpis/environmental-impact-stats.md) | `kpi-jobs-created-and-sustained-8.md` | Source slug and H1 incorrectly identified this page as Jobs created and sustained. |
| Alumni Engagement | [alumni-engagement.md](../docs/kpis/ubi-global-benchmark-kpis/alumni-engagement.md) | `kpi-jobs-created-and-sustained-9.md` | Source slug and H1 incorrectly identified this page as Jobs created and sustained. |
| 1-Year Survival Rate | [one-year-survival-rate.md](../docs/kpis/ubi-global-benchmark-kpis/one-year-survival-rate.md) | `kpi-jobs-created-and-sustained-10.md` | Source slug and H1 incorrectly identified this page as Jobs created and sustained. |
| Coaching and Mentoring Hours | [coaching-and-mentoring-hours.md](../docs/kpis/ubi-global-benchmark-kpis/coaching-and-mentoring-hours.md) | `kpi-jobs-created-and-sustained-11.md` | Imported body merged the metric title with the description in the first paragraph. |
| Out-of-State Applications | [out-of-state-applications.md](../docs/kpis/ubi-global-benchmark-kpis/out-of-state-applications.md) | `kpi-jobs-created-and-sustained-12.md` | Source slug and H1 incorrectly identified this page as Jobs created and sustained. |
| Services Offered | [services-offered.md](../docs/kpis/ubi-global-benchmark-kpis/services-offered.md) | `kpi-jobs-created-and-sustained-13.md` | Source slug and H1 incorrectly identified this page as Jobs created and sustained. |
| Sponsorship Attraction | [sponsorship-attraction.md](../docs/kpis/ubi-global-benchmark-kpis/sponsorship-attraction.md) | `kpi-jobs-created-and-sustained-14.md` | Imported body merged the metric title with the description in the first paragraph. |
| Client Startups Accepted | [client-startups-accepted.md](../docs/kpis/ubi-global-benchmark-kpis/client-startups-accepted.md) | `kpi-jobs-created-and-sustained-15.md` | Imported body merged the metric title with the description in the first paragraph. |
| Partners | [partners.md](../docs/kpis/ubi-global-benchmark-kpis/partners.md) | `kpi-jobs-created-and-sustained-16.md` | Source slug and H1 incorrectly identified this page as Jobs created and sustained. |
| Self-Generated Revenue | [self-generated-revenue.md](../docs/kpis/ubi-global-benchmark-kpis/self-generated-revenue.md) | `kpi-jobs-created-and-sustained-17.md` | Source slug and H1 incorrectly identified this page as Jobs created and sustained. |
| Graduate Retention | [graduate-retention.md](../docs/kpis/ubi-global-benchmark-kpis/graduate-retention.md) | `kpi-jobs-created-and-sustained-18.md` | Imported body merged the metric title with the description in the first paragraph. |
| Total Investment Attracted | [total-investment-attracted.md](../docs/kpis/ubi-global-benchmark-kpis/total-investment-attracted.md) | `kpi-jobs-created-and-sustained-19.md` | Source slug and H1 incorrectly identified this page as Jobs created and sustained. |
| Jobs Created and Sustained | [jobs-created-and-sustained.md](../docs/kpis/ubi-global-benchmark-kpis/jobs-created-and-sustained.md) | `kpi-jobs-created-and-sustained-20.md` | This is the only KPI detail page whose metric matched the repeated source slug. |
| Sales Revenue | [sales-revenue.md](../docs/kpis/ubi-global-benchmark-kpis/sales-revenue.md) | `kpi-jobs-created-and-sustained-21.md` | Imported body merged the metric title with the description in the first paragraph. |
| Qualified Exits | [qualified-exits.md](../docs/kpis/ubi-global-benchmark-kpis/qualified-exits.md) | `kpi-jobs-created-and-sustained-22.md` | Source slug and H1 incorrectly identified this page as Jobs created and sustained. |
