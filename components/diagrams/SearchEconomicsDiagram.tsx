export function SearchEconomicsDiagram({ language = "zh" }: { language?: "zh" | "en" }) {
  const isEnglish = language === "en";
  const stages = [
    ["大量未知想法", "MANY UNKNOWN IDEAS", "假说空间", "HYPOTHESIS SPACE"],
    ["低成本搜索", "CHEAP SEARCH", "后训练 · 强化学习 · 智能体实验", "POST-TRAINING · RL · AGENT EXPERIMENTS"],
    ["信号筛选", "SIGNAL SELECTION", "消融 · 迁移 · 回归测试", "ABLATION · TRANSFER · REGRESSION"],
    ["高成本扩展", "EXPENSIVE SCALING", "验证并放大胜出方法", "VALIDATE & AMPLIFY WINNERS"],
    ["生产部署前沿", "PRODUCTION FRONTIER", "真实智能体工作", "REAL AGENT WORK"],
  ];
  return <figure className="runtime-diagram research-economics-diagram" aria-labelledby="search-economics-caption">
    <div className="runtime-diagram__topline"><span>{isEnglish ? "SEARCH ECONOMICS OF MODEL DEVELOPMENT" : "模型研发的搜索经济学 · SEARCH ECONOMICS"}</span><span>02 / FRONTIER</span></div>
    <svg viewBox="0 0 560 650" role="img" aria-label="Many unknown ideas flow through cheap search, signal selection, expensive scaling, and into the production frontier">
      <defs><linearGradient id="frontierLine" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#d8bd78"/><stop offset="1" stopColor="#6fb6d4"/></linearGradient><marker id="frontierArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#9dc6d3"/></marker></defs>
      <path d="M280 74V553" stroke="url(#frontierLine)" strokeWidth="2" strokeDasharray="7 10" markerEnd="url(#frontierArrow)"/>
      {stages.map(([titleZh, titleEn, subZh, subEn], index) => { const y = 38 + index * 112; return <g key={titleEn} className={`frontier-stage frontier-stage--${index}`} transform={`translate(95 ${y})`}><rect width="370" height="76" rx="5"/><text x="185" y="29" textAnchor="middle" className="frontier-stage__title">{isEnglish ? titleEn : titleZh}</text><text x="185" y="51" textAnchor="middle" className="frontier-stage__small">{isEnglish ? subEn : subZh}</text>{!isEnglish && <text x="185" y="67" textAnchor="middle" className="frontier-stage__small diagram-aux">{titleEn}</text>}</g>; })}
      <g className="frontier-role frontier-role--flash"><rect x="6" y="153" width="78" height="155" rx="39"/><text transform="translate(32 277) rotate(-90)">{isEnglish ? "FLASH ≈ SEARCH LAYER?" : "FLASH ≈ 搜索层？"}</text><text transform="translate(54 266) rotate(-90)" className="frontier-role__small">{isEnglish ? "INFERENCE" : "推论 · INFERENCE"}</text></g>
      <g className="frontier-role frontier-role--pro"><rect x="476" y="373" width="78" height="155" rx="39"/><text transform="translate(502 500) rotate(-90)">{isEnglish ? "PRO ≈ SCALE LAYER?" : "PRO ≈ 扩展层？"}</text><text transform="translate(524 486) rotate(-90)" className="frontier-role__small">{isEnglish ? "HYPOTHESIS" : "假说 · HYPOTHESIS"}</text></g>
      <g className="frontier-tension"><path d="M110 616H450" markerStart="url(#frontierArrow)" markerEnd="url(#frontierArrow)"/><text x="280" y="607" textAnchor="middle">{isEnglish ? "EXPERIMENTAL THROUGHPUT ↔ CAPABILITY CEILING" : "实验吞吐量 ↔ 能力上限"}</text></g>
    </svg>
    <figcaption id="search-economics-caption"><span>{isEnglish ? "Cheap search finds candidates. Expensive scale validates and amplifies winners." : "低成本搜索发现候选，高成本扩展验证并放大胜出方法。"}</span><small>{isEnglish ? "Flash / Pro roles are an inference — not an official workflow" : "Flash / Pro 的角色划分是本文推论，并非官方工作流"}</small></figcaption>
  </figure>;
}
