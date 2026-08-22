import type { Metadata } from "next";
import Article from "@/content/field-notes/03-centralized-substrate-decentralized-search.en.mdx";
import { EvidenceLegend } from "@/components/field-notes/Evidence";
import { LearningSystemHero } from "@/components/field-notes/LearningSystemHero";
import { LearningSystemSummary } from "@/components/field-notes/LearningSystemSummary";
import { ReadingProgress } from "@/components/field-notes/ReadingProgress";
import { SiteHeader } from "@/components/field-notes/SiteHeader";
import { TableOfContents } from "@/components/field-notes/TableOfContents";
import { fieldNote03En, tocItems03En } from "@/lib/content";

export const metadata: Metadata = {
  title: fieldNote03En.title,
  description: fieldNote03En.description,
  alternates: { canonical: fieldNote03En.canonical, languages: { "zh-CN": "/zh/field-notes/03-centralized-substrate-decentralized-search", en: fieldNote03En.canonical } },
  openGraph: { type: "article", locale: "en_US", title: fieldNote03En.title, description: fieldNote03En.description, images: ["/og-field-note-03-en.svg"], publishedTime: fieldNote03En.date, modifiedTime: fieldNote03En.updated },
  twitter: { card: "summary_large_image", title: fieldNote03En.title, description: fieldNote03En.description, images: ["/og-field-note-03-en.svg"] },
};

export default function LearningSystemPageEn() {
  return <><ReadingProgress /><SiteHeader language="en" activeNote="03" /><main className="learning-page"><LearningSystemHero language="en" /><div className="article-shell"><aside className="toc-column" aria-label="Article table of contents"><TableOfContents items={tocItems03En} status="ACTIVE HYPOTHESIS" language="en" /></aside><article className="article-column article-column--en" id="article-body"><LearningSystemSummary language="en" /><EvidenceLegend language="en" /><div className="mdx-prose mdx-prose--en"><Article /></div></article><aside className="margin-column" aria-label="Article note"><div className="margin-note margin-note--learning"><span>FALSIFIABLE NOTE</span><p>Prediction window: 6–18 months / one to two major model generations. New facts enter the ledger; v1.0 stays frozen.</p></div></aside></div></main></>;
}
