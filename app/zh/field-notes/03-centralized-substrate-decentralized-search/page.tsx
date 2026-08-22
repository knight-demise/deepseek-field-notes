import type { Metadata } from "next";
import Article from "@/content/field-notes/03-centralized-substrate-decentralized-search.zh.mdx";
import { EvidenceLegend } from "@/components/field-notes/Evidence";
import { LearningSystemHero } from "@/components/field-notes/LearningSystemHero";
import { LearningSystemSummary } from "@/components/field-notes/LearningSystemSummary";
import { ReadingProgress } from "@/components/field-notes/ReadingProgress";
import { SiteHeader } from "@/components/field-notes/SiteHeader";
import { TableOfContents } from "@/components/field-notes/TableOfContents";
import { fieldNote03, tocItems03 } from "@/lib/content";

export const metadata: Metadata = {
  title: fieldNote03.title,
  description: fieldNote03.description,
  alternates: { canonical: fieldNote03.canonical, languages: { "zh-CN": fieldNote03.canonical, en: "/en/field-notes/03-centralized-substrate-decentralized-search" } },
  openGraph: { type: "article", locale: "zh_CN", title: fieldNote03.title, description: fieldNote03.description, images: ["/og-field-note-03.svg"], publishedTime: fieldNote03.date, modifiedTime: fieldNote03.updated },
  twitter: { card: "summary_large_image", title: fieldNote03.title, description: fieldNote03.description, images: ["/og-field-note-03.svg"] },
};

export default function LearningSystemPage() {
  return <><ReadingProgress /><SiteHeader activeNote="03" /><main className="learning-page"><LearningSystemHero /><div className="article-shell"><aside className="toc-column" aria-label="文章目录"><TableOfContents items={tocItems03} status="持续验证中的假说" /></aside><article className="article-column" id="article-body"><LearningSystemSummary /><EvidenceLegend /><div className="mdx-prose"><Article /></div></article><aside className="margin-column" aria-label="文章信息"><div className="margin-note margin-note--learning"><span>可证伪假说</span><p>预测窗口：6–18 个月 / 1–2 个主要模型代际。新事实进入 Prediction Ledger，不改写 v1.0 原始命题。</p></div></aside></div></main></>;
}
