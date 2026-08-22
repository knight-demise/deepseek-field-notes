import type { Metadata } from "next";
import Article from "@/content/field-notes/02-v4-pro-research-frontier.zh.mdx";
import { EvidenceLegend } from "@/components/field-notes/Evidence";
import { ReadingProgress } from "@/components/field-notes/ReadingProgress";
import { ResearchFrontierHero } from "@/components/field-notes/ResearchFrontierHero";
import { ResearchFrontierSummary } from "@/components/field-notes/ResearchFrontierSummary";
import { SiteHeader } from "@/components/field-notes/SiteHeader";
import { TableOfContents } from "@/components/field-notes/TableOfContents";
import { fieldNote02, tocItems02 } from "@/lib/content";

export const metadata: Metadata = {
  title: fieldNote02.title,
  description: fieldNote02.description,
  alternates: { canonical: fieldNote02.canonical, languages: { "zh-CN": fieldNote02.canonical, en: "/en/field-notes/02-v4-pro-research-frontier" } },
  openGraph: { type: "article", locale: "zh_CN", title: fieldNote02.title, description: fieldNote02.description, images: ["/og-field-note-02.svg"], publishedTime: fieldNote02.date, modifiedTime: fieldNote02.updated },
  twitter: { card: "summary_large_image", title: fieldNote02.title, description: fieldNote02.description, images: ["/og-field-note-02.svg"] },
};

export default function ResearchFrontierPage() {
  return <>
    <ReadingProgress />
    <SiteHeader activeNote="02" />
    <main className="frontier-page">
      <ResearchFrontierHero />
      <div className="article-shell">
        <aside className="toc-column" aria-label="文章目录"><TableOfContents items={tocItems02} status="修订假说" /></aside>
        <article className="article-column" id="article-body">
          <ResearchFrontierSummary />
          <EvidenceLegend />
          <div className="mdx-prose"><Article /></div>
        </article>
        <aside className="margin-column" aria-label="文章信息"><div className="margin-note margin-note--frontier"><span>前沿说明</span><p>“主战场”指下一阶段 Research Frontier，不否认 V4 Pro 作为当前 Production Frontier 的重要性。</p></div></aside>
      </div>
    </main>
  </>;
}
