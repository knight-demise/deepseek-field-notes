import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/field-notes/SiteHeader";
import { fieldNotesGlossary } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "术语表",
  description: "DeepSeek Field Notes 中文版的共享技术术语与统一译法。",
  alternates: { canonical: "/zh/glossary", languages: { "zh-CN": "/zh/glossary", en: "/en/glossary" } },
};

export default function GlossaryPage() {
  return (
    <><SiteHeader activeNote="none" /><main className="glossary-page">
      <header className="glossary-hero">
        <p className="eyebrow">共享语言规范 · SHARED LANGUAGE</p>
        <h1>术语表</h1>
        <p>三篇 Field Note 共用同一套译法。中文承担主要叙事，英文只在首次出现或需要消除歧义时保留。</p>
      </header>
      <section className="glossary-grid" aria-label="技术术语">
        {fieldNotesGlossary.map((entry) => <article key={entry.term}>
          <div><h2>{entry.chinese}</h2><span>{entry.term}</span></div>
          <p><strong>首次写法</strong>{entry.firstUse}</p>
          <small>{entry.note}</small>
        </article>)}
      </section>
      <Link className="glossary-back" href="/zh/field-notes/03-centralized-substrate-decentralized-search">← 返回 Field Notes</Link>
    </main></>
  );
}
