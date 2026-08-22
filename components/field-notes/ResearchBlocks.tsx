import type { ReactNode } from "react";
import Link from "next/link";

export function PullQuote({ children }: { children: ReactNode }) { return <blockquote className="pull-quote">{children}</blockquote>; }

export function KillConditions({ language = "zh" }: { language?: "zh" | "en" }) {
  const itemsZh = [
    ["01", "插件无法成为可复用能力。", "第三方能力只在作者环境有效，换项目或换团队就失效，复用收益无法成立。"],
    ["02", "生态产生的噪声多于通过验证的改进。", "候选数量增长，却没有评估、回归测试、安全、信誉与兼容性治理来筛掉幻觉式提升。"],
    ["03", "兼容成本吞噬能力复用收益。", "核心运行时变化过快，插件持续失效，维护与迁移成本抵消新增能力的复用价值。"],
  ];
  const itemsEn = [
    ["01", "Plugins fail to become reusable capabilities.", "Third-party capabilities only work in their authors’ environments. Change the project or team, and the reuse benefit disappears."],
    ["02", "The ecosystem produces more noise than validated improvement.", "Candidate volume grows, but no evaluation, regression, security, reputation, or compatibility layer filters out illusory gains."],
    ["03", "Compatibility costs erase reuse gains.", "The core Runtime changes so quickly that plugins constantly break, and migration costs consume the value of reuse."],
  ];
  const items = language === "zh" ? itemsZh : itemsEn;
  const subtitle = language === "zh" ? "反证不是附录，而是论证的一部分。" : "Falsification is not an appendix. It is part of the argument.";
  return <section className="kill-conditions"><div className="kill-conditions__header"><p>{language === "en" ? "HOW THIS THESIS COULD BE WRONG" : "这个命题可能如何被证伪"}</p><h2>{language === "en" ? "Kill Conditions" : "证伪条件"}</h2><span>{subtitle}</span></div><div className="kill-grid">{items.map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div><p className="kill-verdict">{language === "en" ? <>If these conditions persist, <strong>DSH should be interpreted as a strong open coding-agent framework — not a capability-production platform.</strong></> : <>如果这些条件持续存在，<strong>DSH 应被理解为优秀的开放编程智能体框架，而不是能力生产平台。</strong></>}</p></section>;
}

export function ThesisBlock({ children, language = "zh" }: { children: ReactNode; language?: "zh" | "en" }) { return <section className="thesis-block"><p>{language === "en" ? "FINAL THESIS · FIELD NOTE 01" : "最终论点 · 研究笔记 01"}</p><div>{children}</div><span className="thesis-block__index">01</span></section>; }

export function ResearchBoundary({ language = "zh" }: { language?: "zh" | "en" }) {
  const isEnglish = language === "en";
  return <section className="research-boundary"><div><p>{isEnglish ? "RESEARCH BOUNDARY" : "研究边界"}</p><h2>{isEnglish ? "Where public evidence ends, interpretation begins." : "公开证据结束，推演开始。"}</h2></div><p>{isEnglish ? "This is an independent technical-strategy interpretation based on public sources. It is not an official DeepSeek roadmap. Where public evidence ends, the article explicitly marks inference and hypothesis." : "本文是基于公开来源的独立技术—战略解释，不是 DeepSeek 官方路线图。公开证据结束之处，正文会明确标记推论与假说。"}</p><ul>{isEnglish ? <><li>The published architecture supports the factual basis for describing DSH as an open Runtime.</li><li>Distributed capability production, cost compression, and API return remain conditional interpretations.</li><li>Because the Model is replaceable, the value created by the DSH ecosystem is not automatically captured by DeepSeek.</li></> : <><li>官方公开架构可以支持“开放运行时”这一事实基础。</li><li>分布式能力生产、成本压缩和 API 回流仍是条件性解释。</li><li>模型可替换，因此 DSH 生态价值并不天然被 DeepSeek 独占。</li></>}</ul><Link className="glossary-inline-link" href={`/${language}/glossary`}>{isEnglish ? "Open the series glossary →" : "查看全系列统一术语表 →"}</Link></section>;
}

export function NextFieldNote({ language = "zh" }: { language?: "zh" | "en" }) {
  return <Link className="next-field-note next-field-note--live" href={`/${language}/field-notes/02-v4-pro-research-frontier`}><div><p>{language === "zh" ? "下一篇研究笔记" : "NEXT FIELD NOTE"}</p><span>#02</span></div><div><h2>{language === "zh" ? "V4 Pro 或许从来就不是主战场" : "V4 Pro May Never Have Been the Main Battlefield"}</h2><p>{language === "zh" ? "生产部署前沿 ≠ 研究前沿" : "Production Frontier ≠ Research Frontier"}</p></div><span aria-hidden="true">→</span></Link>;
}
