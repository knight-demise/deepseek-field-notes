import type { Metadata } from "next";
import Article from "@/content/field-notes/01-deepseek-harness.zh.mdx";
import { ArticleHero } from "@/components/field-notes/ArticleHero";
import { EvidenceLegend } from "@/components/field-notes/Evidence";
import { ExecutiveSummary } from "@/components/field-notes/ExecutiveSummary";
import { ReadingProgress } from "@/components/field-notes/ReadingProgress";
import { SiteHeader } from "@/components/field-notes/SiteHeader";
import { TableOfContents } from "@/components/field-notes/TableOfContents";
import { fieldNote01, tocItems } from "@/lib/content";

export const metadata: Metadata = {
  title: fieldNote01.title,
  description: fieldNote01.description,
  alternates: {
    canonical: fieldNote01.canonical,
    languages: {
      "zh-CN": fieldNote01.canonical,
      en: "/en/field-notes/01-deepseek-harness",
    },
  },
  openGraph: {
    type: "article",
    locale: "zh_CN",
    title: fieldNote01.title,
    description: fieldNote01.description,
    images: ["/og-field-note-01.svg"],
    publishedTime: fieldNote01.date,
    modifiedTime: fieldNote01.updated,
  },
  twitter: {
    card: "summary_large_image",
    title: fieldNote01.title,
    description: fieldNote01.description,
    images: ["/og-field-note-01.svg"],
  },
};

export default function FieldNotePage() {
  return (
    <>
      <ReadingProgress />
      <SiteHeader />
      <main>
        <ArticleHero />
        <div className="article-shell">
          <aside className="toc-column" aria-label="文章目录">
            <TableOfContents items={tocItems} />
          </aside>
          <article className="article-column" id="article-body">
            <ExecutiveSummary />
            <EvidenceLegend />
            <div className="mdx-prose">
              <Article />
            </div>
          </article>
          <aside className="margin-column" aria-label="文章信息">
            <div className="margin-note">
              <span>研究说明</span>
              <p>这里的标签不是装饰；它们标记公开证据结束、作者推演开始的位置。</p>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
