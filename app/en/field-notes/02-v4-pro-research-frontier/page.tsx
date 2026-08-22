import type { Metadata } from "next";
import Article from "@/content/field-notes/02-v4-pro-research-frontier.en.mdx";
import { EvidenceLegend } from "@/components/field-notes/Evidence";
import { ReadingProgress } from "@/components/field-notes/ReadingProgress";
import { ResearchFrontierHero } from "@/components/field-notes/ResearchFrontierHero";
import { ResearchFrontierSummary } from "@/components/field-notes/ResearchFrontierSummary";
import { SiteHeader } from "@/components/field-notes/SiteHeader";
import { TableOfContents } from "@/components/field-notes/TableOfContents";
import { fieldNote02En, tocItems02En } from "@/lib/content";

export const metadata: Metadata = {
  title: fieldNote02En.title,
  description: fieldNote02En.description,
  alternates: { canonical: fieldNote02En.canonical, languages: { en: fieldNote02En.canonical, "zh-CN": "/zh/field-notes/02-v4-pro-research-frontier" } },
  openGraph: { type: "article", locale: "en_US", title: fieldNote02En.title, description: fieldNote02En.description, images: ["/og-field-note-02-en.svg"], publishedTime: fieldNote02En.date, modifiedTime: fieldNote02En.updated },
  twitter: { card: "summary_large_image", title: fieldNote02En.title, description: fieldNote02En.description, images: ["/og-field-note-02-en.svg"] },
};

export default function EnglishResearchFrontierPage() {
  return <>
    <ReadingProgress />
    <SiteHeader language="en" activeNote="02" />
    <main className="frontier-page" lang="en">
      <ResearchFrontierHero language="en" />
      <div className="article-shell">
        <aside className="toc-column" aria-label="Table of contents"><TableOfContents items={tocItems02En} status="REVISED HYPOTHESIS" language="en" /></aside>
        <article className="article-column article-column--en" id="article-body">
          <ResearchFrontierSummary language="en" />
          <EvidenceLegend language="en" />
          <div className="mdx-prose mdx-prose--en"><Article /></div>
        </article>
        <aside className="margin-column" aria-label="Research note"><div className="margin-note margin-note--frontier"><span>FRONTIER NOTE</span><p>“Main battlefield” refers to the next Research Frontier, not the current Production Frontier.</p></div></aside>
      </div>
    </main>
  </>;
}
