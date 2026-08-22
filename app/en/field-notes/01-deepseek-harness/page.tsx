import type { Metadata } from "next";
import Article from "@/content/field-notes/01-deepseek-harness.en.mdx";
import { ArticleHero } from "@/components/field-notes/ArticleHero";
import { EvidenceLegend } from "@/components/field-notes/Evidence";
import { ExecutiveSummary } from "@/components/field-notes/ExecutiveSummary";
import { ReadingProgress } from "@/components/field-notes/ReadingProgress";
import { SiteHeader } from "@/components/field-notes/SiteHeader";
import { TableOfContents } from "@/components/field-notes/TableOfContents";
import { fieldNote01En, tocItemsEn } from "@/lib/content";

export const metadata: Metadata = {
  title: fieldNote01En.title,
  description: fieldNote01En.description,
  alternates: {
    canonical: fieldNote01En.canonical,
    languages: {
      en: fieldNote01En.canonical,
      "zh-CN": "/zh/field-notes/01-deepseek-harness",
    },
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    title: fieldNote01En.title,
    description: fieldNote01En.description,
    images: ["/og-field-note-01-en.svg"],
    publishedTime: fieldNote01En.date,
    modifiedTime: fieldNote01En.updated,
  },
  twitter: {
    card: "summary_large_image",
    title: fieldNote01En.title,
    description: fieldNote01En.description,
    images: ["/og-field-note-01-en.svg"],
  },
};

export default function EnglishFieldNotePage() {
  return (
    <>
      <ReadingProgress />
      <SiteHeader language="en" />
      <main lang="en">
        <ArticleHero language="en" />
        <div className="article-shell">
          <aside className="toc-column" aria-label="Table of contents">
            <TableOfContents items={tocItemsEn} language="en" />
          </aside>
          <article className="article-column article-column--en" id="article-body">
            <ExecutiveSummary language="en" />
            <EvidenceLegend language="en" />
            <div className="mdx-prose mdx-prose--en">
              <Article />
            </div>
          </article>
          <aside className="margin-column" aria-label="Research note">
            <div className="margin-note">
              <span>RESEARCH NOTE</span>
              <p>These labels are not decoration. They mark where public evidence ends and interpretation begins.</p>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
