import { access, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const DOCS_ROOT = path.join(ROOT, "docs");
const KPI_DIR = path.join(DOCS_ROOT, "kpis", "ubi-global-benchmark-kpis");
const PUBLICATIONS_ROOT = path.join(DOCS_ROOT, "publications");

const GLOSSARY_CATEGORIES = [
  {
    slug: "core-concepts-and-spaces",
    title: "Core Concepts and Spaces",
    intro:
      "Foundational concepts for understanding incubators, accelerators, ecosystems, and the collaborative structures around them.",
  },
  {
    slug: "digital-wave",
    title: "Digital Wave",
    intro:
      "Terms related to emerging technologies, digital operating models, and the next generation of startup-enabling infrastructure.",
  },
  {
    slug: "financial-terms",
    title: "Financial Terms",
    intro:
      "Funding, financing, ownership, and capital-formation terms commonly used across startup support programs.",
  },
  {
    slug: "innovation-terms-and-practices",
    title: "Innovation Terms and Practices",
    intro:
      "Language for product development, experimentation, commercialization, and startup growth methods.",
  },
  {
    slug: "key-players",
    title: "Key Players",
    intro:
      "People, roles, and stakeholder types that shape startup programs and innovation ecosystems.",
  },
  {
    slug: "organizational-types-and-methodologies",
    title: "Organizational Types and Methodologies",
    intro:
      "Program models, organizational archetypes, and delivery approaches used across incubation and acceleration.",
  },
  {
    slug: "performance-tracking-and-metrics",
    title: "Performance Tracking and Metrics",
    intro:
      "Terms that help practitioners measure outcomes, assess performance, and benchmark impact over time.",
  },
  {
    slug: "esg",
    title: "ESG",
    intro:
      "Environmental, social, governance, and inclusion concepts that increasingly shape program design and reporting.",
  },
];

const KPI_ITEMS = [
  {
    source: "kpi-jobs-created-and-sustained.md",
    slug: "esg-framework-adoption",
    title: "ESG Framework Adoption",
    issue: "Source slug and H1 incorrectly identified this page as Jobs created and sustained.",
  },
  {
    source: "kpi-jobs-created-and-sustained-1.md",
    slug: "in-state-applications",
    title: "In-state Applications",
    issue: "Source slug and H1 incorrectly identified this page as Jobs created and sustained.",
  },
  {
    source: "kpi-jobs-created-and-sustained-2.md",
    slug: "graduates",
    title: "Graduates",
    issue: "Imported body merged the metric title with the description in the first paragraph.",
  },
  {
    source: "kpi-jobs-created-and-sustained-3.md",
    slug: "events",
    title: "Events",
    issue: "Source slug and H1 incorrectly identified this page as Jobs created and sustained.",
  },
  {
    source: "kpi-jobs-created-and-sustained-4.md",
    slug: "five-year-survival-rate",
    title: "5-Year Survival Rate",
    issue: "Source slug and H1 incorrectly identified this page as Jobs created and sustained.",
  },
  {
    source: "kpi-jobs-created-and-sustained-5.md",
    slug: "seed-funding-attraction",
    title: "Seed Funding Attraction",
    issue: "Imported body merged the metric title with supporting copy in the first paragraph.",
  },
  {
    source: "kpi-jobs-created-and-sustained-6.md",
    slug: "high-growth-enterprises",
    title: "High-Growth Enterprises",
    issue: "Source slug and H1 incorrectly identified this page as Jobs created and sustained.",
  },
  {
    source: "kpi-jobs-created-and-sustained-7.md",
    slug: "average-investment-attracted",
    title: "Average Investment Attracted",
    issue: "Imported body merged the metric title with the description in the first paragraph.",
  },
  {
    source: "kpi-jobs-created-and-sustained-8.md",
    slug: "environmental-impact-stats",
    title: "Environmental Impact Stats",
    issue: "Source slug and H1 incorrectly identified this page as Jobs created and sustained.",
  },
  {
    source: "kpi-jobs-created-and-sustained-9.md",
    slug: "alumni-engagement",
    title: "Alumni Engagement",
    issue: "Source slug and H1 incorrectly identified this page as Jobs created and sustained.",
  },
  {
    source: "kpi-jobs-created-and-sustained-10.md",
    slug: "one-year-survival-rate",
    title: "1-Year Survival Rate",
    issue: "Source slug and H1 incorrectly identified this page as Jobs created and sustained.",
  },
  {
    source: "kpi-jobs-created-and-sustained-11.md",
    slug: "coaching-and-mentoring-hours",
    title: "Coaching and Mentoring Hours",
    issue: "Imported body merged the metric title with the description in the first paragraph.",
  },
  {
    source: "kpi-jobs-created-and-sustained-12.md",
    slug: "out-of-state-applications",
    title: "Out-of-State Applications",
    issue: "Source slug and H1 incorrectly identified this page as Jobs created and sustained.",
  },
  {
    source: "kpi-jobs-created-and-sustained-13.md",
    slug: "services-offered",
    title: "Services Offered",
    issue: "Source slug and H1 incorrectly identified this page as Jobs created and sustained.",
  },
  {
    source: "kpi-jobs-created-and-sustained-14.md",
    slug: "sponsorship-attraction",
    title: "Sponsorship Attraction",
    issue: "Imported body merged the metric title with the description in the first paragraph.",
  },
  {
    source: "kpi-jobs-created-and-sustained-15.md",
    slug: "client-startups-accepted",
    title: "Client Startups Accepted",
    issue: "Imported body merged the metric title with the description in the first paragraph.",
  },
  {
    source: "kpi-jobs-created-and-sustained-16.md",
    slug: "partners",
    title: "Partners",
    issue: "Source slug and H1 incorrectly identified this page as Jobs created and sustained.",
  },
  {
    source: "kpi-jobs-created-and-sustained-17.md",
    slug: "self-generated-revenue",
    title: "Self-Generated Revenue",
    issue: "Source slug and H1 incorrectly identified this page as Jobs created and sustained.",
  },
  {
    source: "kpi-jobs-created-and-sustained-18.md",
    slug: "graduate-retention",
    title: "Graduate Retention",
    issue: "Imported body merged the metric title with the description in the first paragraph.",
  },
  {
    source: "kpi-jobs-created-and-sustained-19.md",
    slug: "total-investment-attracted",
    title: "Total Investment Attracted",
    issue: "Source slug and H1 incorrectly identified this page as Jobs created and sustained.",
  },
  {
    source: "kpi-jobs-created-and-sustained-20.md",
    slug: "jobs-created-and-sustained",
    title: "Jobs Created and Sustained",
    issue: "This is the only KPI detail page whose metric matched the repeated source slug.",
  },
  {
    source: "kpi-jobs-created-and-sustained-21.md",
    slug: "sales-revenue",
    title: "Sales Revenue",
    issue: "Imported body merged the metric title with the description in the first paragraph.",
  },
  {
    source: "kpi-jobs-created-and-sustained-22.md",
    slug: "qualified-exits",
    title: "Qualified Exits",
    issue: "Source slug and H1 incorrectly identified this page as Jobs created and sustained.",
  },
];

const PUBLICATION_ITEMS = [
  {
    source: path.join(PUBLICATIONS_ROOT, "best-practices", "best-practices-at-top-university-linked-business-incubators-vol-1.md"),
    target: path.join(PUBLICATIONS_ROOT, "benchmark-reports", "world-benchmark-report-2017-2018.md"),
    title: "World Benchmark Report 2017 - 2018",
  },
  {
    source: path.join(PUBLICATIONS_ROOT, "best-practices", "best-practices-at-top-university-linked-business-incubators-vol-1-2.md"),
    target: path.join(PUBLICATIONS_ROOT, "benchmark-reports", "world-benchmark-report-2019-2020.md"),
    title: "World Benchmark Report 2019 - 2020",
  },
  {
    source: path.join(PUBLICATIONS_ROOT, "benchmark-and-ranking-reports", "world-benchmark-report-2021-2022.md"),
    target: path.join(PUBLICATIONS_ROOT, "benchmark-reports", "world-benchmark-report-2021-2022.md"),
    title: "World Benchmark Report 2021 - 2022",
  },
  {
    source: path.join(PUBLICATIONS_ROOT, "benchmark-and-ranking-reports", "world-rankings-report-2021-2022-1.md"),
    target: path.join(PUBLICATIONS_ROOT, "rankings-reports", "world-rankings-report-2017-2018.md"),
    title: "World Rankings Report 2017 - 2018",
  },
  {
    source: path.join(PUBLICATIONS_ROOT, "benchmark-and-ranking-reports", "world-rankings-report-2021-2022-2.md"),
    target: path.join(PUBLICATIONS_ROOT, "rankings-reports", "world-rankings-report-2019-2020.md"),
    title: "World Rankings Report 2019 - 2020",
  },
  {
    source: path.join(PUBLICATIONS_ROOT, "benchmark-and-ranking-reports", "world-rankings-report-2021-2022.md"),
    target: path.join(PUBLICATIONS_ROOT, "rankings-reports", "world-rankings-report-2021-2022.md"),
    title: "World Rankings Report 2021 - 2022",
  },
  {
    source: path.join(PUBLICATIONS_ROOT, "best-practices", "best-practices-at-top-university-linked-business-incubators-vol-1-3.md"),
    target: path.join(PUBLICATIONS_ROOT, "case-studies", "best-practices-at-top-university-linked-business-incubators-vol-1.md"),
    title: "Best Practices at Top University-linked Business Incubators - Vol 1",
  },
  {
    source: path.join(PUBLICATIONS_ROOT, "best-practices", "best-practices-at-top-university-linked-business-incubators-vol-1-1.md"),
    target: path.join(PUBLICATIONS_ROOT, "case-studies", "best-practices-at-top-university-linked-business-incubators-vol-2.md"),
    title: "Best Practices at Top University-linked Business Incubators - Vol 2",
  },
];

async function exists(targetPath) {
  try {
    await access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function readTitle(filePath) {
  const text = await readFile(filePath, "utf8");
  return text.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? path.basename(filePath, ".md");
}

async function writeMarkdown(filePath, content) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, content.trimEnd() + "\n", "utf8");
}

function replaceHeading(markdown, title) {
  if (/^#\s+/m.test(markdown)) {
    return markdown.replace(/^#\s+.+$/m, `# ${title}`);
  }
  return `# ${title}\n\n${markdown}`;
}

async function moveAndRetitle(sourcePath, targetPath, title) {
  if (!(await exists(sourcePath))) {
    return;
  }

  const original = await readFile(sourcePath, "utf8");
  const updated = replaceHeading(original, title);
  await writeMarkdown(targetPath, updated);

  if (path.resolve(sourcePath) !== path.resolve(targetPath)) {
    await rm(sourcePath, { force: true });
  }
}

async function listPages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const pages = [];

  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith(".md") && entry.name !== "README.md") {
      const filePath = path.join(directory, entry.name);
      pages.push({ title: await readTitle(filePath), link: entry.name });
      continue;
    }

    if (entry.isDirectory()) {
      const readmePath = path.join(directory, entry.name, "README.md");
      if (await exists(readmePath)) {
        pages.push({ title: await readTitle(readmePath), link: `${entry.name}/README.md` });
      }
    }
  }

  return pages.sort((left, right) => left.title.localeCompare(right.title));
}

function makeLinkList(items) {
  return items.map((item) => `- [${item.title}](${item.link})`);
}

async function rebuildGlossary() {
  const articleMoves = [
    {
      source: path.join(DOCS_ROOT, "glossary", "digital-wave", "article", "digital-transformation.md"),
      target: path.join(DOCS_ROOT, "glossary", "digital-wave", "digital-transformation.md"),
      title: "Digital Transformation",
    },
    {
      source: path.join(DOCS_ROOT, "glossary", "financial-terms", "article", "decentralized-finance-defi.md"),
      target: path.join(DOCS_ROOT, "glossary", "financial-terms", "decentralized-finance-defi.md"),
      title: "Decentralized Finance (DeFi)",
    },
  ];

  for (const move of articleMoves) {
    await moveAndRetitle(move.source, move.target, move.title);
  }

  await rm(path.join(DOCS_ROOT, "glossary", "digital-wave", "article"), { recursive: true, force: true });
  await rm(path.join(DOCS_ROOT, "glossary", "financial-terms", "article"), { recursive: true, force: true });

  const categoryLinks = [];
  for (const category of GLOSSARY_CATEGORIES) {
    const categoryDir = path.join(DOCS_ROOT, "glossary", category.slug);
    const pages = await listPages(categoryDir);
    await writeMarkdown(
      path.join(categoryDir, "README.md"),
      [
        `# ${category.title}`,
        "",
        category.intro,
        "",
        "## Pages",
        "",
        ...makeLinkList(pages),
      ].join("\n"),
    );

    categoryLinks.push({ title: category.title, link: `${category.slug}/README.md` });
  }

  await writeMarkdown(
    path.join(DOCS_ROOT, "glossary", "README.md"),
    [
      "# Glossary of Terms",
      "",
      "Compass terminology is organized as a browsable reference library so editors and readers can find concepts by theme, not by the shape of the old GitBook import.",
      "",
      "## Categories",
      "",
      ...makeLinkList(categoryLinks),
    ].join("\n"),
  );
}

async function rebuildKpis() {
  await mkdir(path.join(DOCS_ROOT, "kpis", "benchmark-framework"), { recursive: true });
  await mkdir(path.join(DOCS_ROOT, "kpis", "metric-library"), { recursive: true });

  for (const item of KPI_ITEMS) {
    await moveAndRetitle(
      path.join(KPI_DIR, item.source),
      path.join(KPI_DIR, `${item.slug}.md`),
      item.title,
    );
  }

  const kpiLinks = KPI_ITEMS.map((item) => ({
    title: item.title,
    link: `${item.slug}.md`,
  }));

  await writeMarkdown(
    path.join(DOCS_ROOT, "kpis", "benchmark-framework", "README.md"),
    [
      "# Benchmark Framework",
      "",
      "This section explains how Compass uses benchmarking language across ecosystem impact, startup outcomes, ESG performance, and program operations.",
      "",
      "Industry Benchmark acts as the contextual layer around the KPI library, helping readers understand why a metric matters before they look up its definition.",
    ].join("\n"),
  );

  await writeMarkdown(
    path.join(DOCS_ROOT, "kpis", "metric-library", "README.md"),
    [
      "# Metric Library",
      "",
      "This index provides a quick scan of the KPI concepts used throughout Compass and points readers to the canonical detailed definitions in the benchmark KPI section.",
      "",
      "## Included Metrics",
      "",
      ...makeLinkList(
        KPI_ITEMS.map((item) => ({
          title: item.title,
          link: `../ubi-global-benchmark-kpis/${item.slug}.md`,
        })),
      ),
    ].join("\n"),
  );

  await writeMarkdown(
    path.join(KPI_DIR, "README.md"),
    [
      "# UBI Global Benchmark KPIs",
      "",
      "These are the canonical KPI definition pages for Compass. Each page maps to one metric and is named after the metric itself rather than the broken source slug used in the original GitBook export.",
      "",
      "## KPI Definitions",
      "",
      ...makeLinkList(kpiLinks),
    ].join("\n"),
  );

  await writeMarkdown(
    path.join(DOCS_ROOT, "kpis", "README.md"),
    [
      "# KPIs & Metrics",
      "",
      "Compass separates benchmark context, the metric index, and the detailed KPI definition pages so the library is easier to browse and maintain.",
      "",
      "## Categories",
      "",
      "- [Benchmark Framework](benchmark-framework/README.md)",
      "- [Metric Library](metric-library/README.md)",
      "- [UBI Global Benchmark KPIs](ubi-global-benchmark-kpis/README.md)",
    ].join("\n"),
  );

  await rm(path.join(DOCS_ROOT, "kpis", "industry-benchmark"), { recursive: true, force: true });
  await rm(path.join(DOCS_ROOT, "kpis", "kpis"), { recursive: true, force: true });
}

async function rebuildPublications() {
  for (const item of PUBLICATION_ITEMS) {
    await moveAndRetitle(item.source, item.target, item.title);
  }

  const publicationCategories = [
    {
      slug: "benchmark-reports",
      title: "Benchmark Reports",
      intro:
        "Long-form benchmark studies that explain the methodology, landscape, and comparative findings behind UBI Global's research.",
    },
    {
      slug: "rankings-reports",
      title: "Rankings Reports",
      intro:
        "Recognition-focused reports that spotlight top-performing incubators and accelerators across program categories and geographies.",
    },
    {
      slug: "case-studies",
      title: "Case Studies",
      intro:
        "Best-practice case study volumes that highlight standout incubators and accelerators in a more narrative, example-led format.",
    },
    {
      slug: "ecosystem-reports",
      title: "Ecosystem Reports",
      intro:
        "Research and impact studies focused on specific regions, partners, and ecosystem-building initiatives.",
    },
  ];

  for (const category of publicationCategories) {
    const categoryDir = path.join(PUBLICATIONS_ROOT, category.slug);
    const pages = await listPages(categoryDir);
    await writeMarkdown(
      path.join(categoryDir, "README.md"),
      [
        `# ${category.title}`,
        "",
        category.intro,
        "",
        "## Publications",
        "",
        ...makeLinkList(pages),
      ].join("\n"),
    );
  }

  await writeMarkdown(
    path.join(PUBLICATIONS_ROOT, "README.md"),
    [
      "# Publications & Reports",
      "",
      "Compass publications are now organized by report type instead of inheriting the mixed legacy structure from the old GitBook space.",
      "",
      "## Categories",
      "",
      "- [Benchmark Reports](benchmark-reports/README.md)",
      "- [Rankings Reports](rankings-reports/README.md)",
      "- [Case Studies](case-studies/README.md)",
      "- [Ecosystem Reports](ecosystem-reports/README.md)",
    ].join("\n"),
  );

  await rm(path.join(PUBLICATIONS_ROOT, "benchmark-and-ranking-reports"), { recursive: true, force: true });
  await rm(path.join(PUBLICATIONS_ROOT, "best-practices"), { recursive: true, force: true });
}

async function rebuildRootReadmes() {
  await writeMarkdown(
    path.join(DOCS_ROOT, "README.md"),
    [
      "# Compass",
      "",
      "Compass is UBI Global's repository-backed terminology and intelligence library for the incubator and accelerator industry.",
      "",
      "GitBook is the publishing layer. This repository is the canonical source of truth for approved Markdown content, media references, and information architecture.",
      "",
      "## Sections",
      "",
      "- [Glossary of Terms](glossary/README.md)",
      "- [KPIs & Metrics](kpis/README.md)",
      "- [Publications & Reports](publications/README.md)",
    ].join("\n"),
  );
}

async function rebuildSummary() {
  const lines = ["# Table of contents", "", "* [Compass](README.md)", ""];

  lines.push("* [Glossary of Terms](glossary/README.md)");
  for (const category of GLOSSARY_CATEGORIES) {
    lines.push(`  * [${category.title}](glossary/${category.slug}/README.md)`);
    const pages = await listPages(path.join(DOCS_ROOT, "glossary", category.slug));
    for (const page of pages) {
      lines.push(`    * [${page.title}](glossary/${category.slug}/${page.link})`);
    }
  }

  lines.push("");
  lines.push("* [KPIs & Metrics](kpis/README.md)");
  lines.push("  * [Benchmark Framework](kpis/benchmark-framework/README.md)");
  lines.push("  * [Metric Library](kpis/metric-library/README.md)");
  lines.push("  * [UBI Global Benchmark KPIs](kpis/ubi-global-benchmark-kpis/README.md)");
  for (const item of KPI_ITEMS) {
    lines.push(`    * [${item.title}](kpis/ubi-global-benchmark-kpis/${item.slug}.md)`);
  }

  lines.push("");
  lines.push("* [Publications & Reports](publications/README.md)");
  for (const category of [
    { slug: "benchmark-reports", title: "Benchmark Reports" },
    { slug: "rankings-reports", title: "Rankings Reports" },
    { slug: "case-studies", title: "Case Studies" },
    { slug: "ecosystem-reports", title: "Ecosystem Reports" },
  ]) {
    lines.push(`  * [${category.title}](publications/${category.slug}/README.md)`);
    const pages = await listPages(path.join(PUBLICATIONS_ROOT, category.slug));
    for (const page of pages) {
      lines.push(`    * [${page.title}](publications/${category.slug}/${page.link})`);
    }
  }

  lines.push("");
  await writeMarkdown(path.join(DOCS_ROOT, "SUMMARY.md"), lines.join("\n"));
}

async function writeKpiQa() {
  const rows = KPI_ITEMS.map(
    (item) =>
      `| ${item.title} | [${item.slug}.md](../docs/kpis/ubi-global-benchmark-kpis/${item.slug}.md) | \`${item.source}\` | ${item.issue} |`,
  );

  await writeMarkdown(
    path.join(ROOT, "editorial", "KPI-QA.md"),
    [
      "# KPI QA",
      "",
      "This report tracks the KPI cleanup decisions made during the structural rebuild of Compass.",
      "",
      "## Key findings",
      "",
      "- The original GitBook export collapsed every KPI detail page under a repeated Jobs created and sustained slug pattern.",
      "- The rebuild renamed each KPI page to its actual metric name so the repo and GitBook sidebar reflect the real content.",
      "- Several KPI pages still need editorial proofreading because the import flattened some GitBook block formatting into awkward paragraphs.",
      "",
      "## Canonical KPI map",
      "",
      "| Canonical KPI | Current file | Source file | Notes |",
      "| --- | --- | --- | --- |",
      ...rows,
      "",
    ].join("\n"),
  );
}

async function main() {
  await rebuildGlossary();
  await rebuildKpis();
  await rebuildPublications();
  await rebuildRootReadmes();
  await rebuildSummary();
  await writeKpiQa();
  console.log("Rebuilt Compass structure for canonical GitBook publishing.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
