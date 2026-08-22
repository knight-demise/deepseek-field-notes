import type { ReactNode } from "react";

export type EvidenceType = "official" | "observed" | "inference" | "hypothesis";

const evidenceMeta: Record<EvidenceType, { labelZh: string; labelEn: string; glyph: string; description: string }> = {
  official: { labelZh: "官方事实", labelEn: "OFFICIAL FACT", glyph: "■", description: "官方文档或项目资料明确披露" },
  observed: { labelZh: "观察证据", labelEn: "OBSERVED EVIDENCE", glyph: "◇", description: "公开研究或生态行为的可观察证据" },
  inference: { labelZh: "推论", labelEn: "INFERENCE", glyph: "↗", description: "从公开事实推导出的解释" },
  hypothesis: { labelZh: "假说", labelEn: "HYPOTHESIS", glyph: "?", description: "需要未来验证或证伪的强判断" },
};

const evidenceDescriptionsEn: Record<EvidenceType, string> = {
  official: "Explicitly documented by official project materials",
  observed: "Observable evidence from public research or ecosystem behavior",
  inference: "An interpretation derived from public facts",
  hypothesis: "A strong claim that still requires future verification",
};

export function EvidenceBadge({ type, language = "zh" }: { type: EvidenceType; language?: "zh" | "en" }) {
  const meta = evidenceMeta[type];
  return <span className={`evidence-badge evidence-badge--${type}`}><i aria-hidden="true">{meta.glyph}</i><span>{language === "en" ? meta.labelEn : meta.labelZh}{language === "zh" && <small>{meta.labelEn}</small>}</span></span>;
}

export function EvidenceNote({ type, title, children, language = "zh" }: { type: EvidenceType; title?: string; children: ReactNode; language?: "zh" | "en" }) {
  return <aside className={`evidence-note evidence-note--${type}`}><EvidenceBadge type={type} language={language} />{title && <strong>{title}</strong>}<div>{children}</div></aside>;
}

export function EvidenceLegend({ language = "zh" }: { language?: "zh" | "en" }) {
  const isEnglish = language === "en";
  return (
    <section className="evidence-legend" aria-labelledby="evidence-title">
      <div><p className="eyebrow">{isEnglish ? "EVIDENCE DISCIPLINE" : "证据纪律 · EVIDENCE DISCIPLINE"}</p><h2 id="evidence-title">{isEnglish ? "Evidence Legend" : "证据等级说明"}</h2><p>{isEnglish ? "Facts, observations, inferences, and forward-looking claims share one visual grammar — not one level of certainty." : "事实、观察、推论和未来假说采用同一套视觉语法，但证据强度并不相同。"}</p></div>
      <ul>{(Object.keys(evidenceMeta) as EvidenceType[]).map((type) => <li key={type}><EvidenceBadge type={type} language={language} /><span>{isEnglish ? evidenceDescriptionsEn[type] : evidenceMeta[type].description}</span></li>)}</ul>
    </section>
  );
}
