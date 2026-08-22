export function ResearchCycleDiagram({ language = "zh" }: { language?: "zh" | "en" }) {
  const isEnglish = language === "en";
  const phases = [
    ["搜索", "SEARCH", "大量想法 → 低成本实验", "Many ideas → cheap experiments"], ["扩展", "SCALE", "筛选 → 验证 → 放大", "Select → validate → amplify"], ["工作", "WORK", "生产部署前沿 → 真实任务", "Production frontier → real tasks"],
    ["轨迹", "TRAJECTORY", "成功 · 失败 · 归因", "Success · failure · attribution"], ["学习", "LEARN", "评估 · Harness · 数据 · 训练", "Eval · harness · data · training"],
  ];
  return <figure className="technical-figure technical-figure--frontier core-cycle-figure"><div className="technical-figure__label"><span>{isEnglish ? "FIGURE 03" : "图 03 · FIGURE 03"}</span><span>{isEnglish ? "SEARCH → SCALE → WORK → TRAJECTORY → LEARN" : "搜索 → 扩展 → 工作 → 轨迹 → 学习"}</span></div><svg viewBox="0 0 820 430" role="img" aria-label={isEnglish ? "The core loop from search to scale, work, trajectory, learning, and the next model" : "从搜索、扩展、工作、执行轨迹到学习与下一代模型的核心闭环"}>
    <defs><marker id="cycleArrow" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#d8bd78"/></marker></defs>
    <path d="M103 214H718" stroke="#d8bd78" strokeOpacity=".55" strokeWidth="2" markerEnd="url(#cycleArrow)"/>
    {phases.map(([titleZh, titleEn, subZh, subEn], index) => { const x = 82 + index * 158; return <g key={titleEn} className={`cycle-phase cycle-phase--${index}`}><circle cx={x} cy="214" r="54"/><text x={x} y="207" textAnchor="middle" className="cycle-phase__number">0{index+1}</text><text x={x} y="231" textAnchor="middle" className="cycle-phase__title">{isEnglish ? titleEn : titleZh}</text><text x={x} y={index % 2 === 0 ? 312 : 116} textAnchor="middle" className="cycle-phase__small">{isEnglish ? subEn : subZh}</text>{!isEnglish && <text x={x} y={index % 2 === 0 ? 328 : 100} textAnchor="middle" className="cycle-phase__small diagram-aux">{titleEn}</text>}<path d={index % 2 === 0 ? `M${x} 270V290` : `M${x} 158V137`} stroke="#557887" strokeDasharray="2 5"/></g>; })}
    <path d="M714 214C780 214 786 367 650 374H179C42 370 33 60 169 55H628" fill="none" stroke="#668a99" strokeDasharray="5 9" markerEnd="url(#cycleArrow)"/>
    <text x="410" y="394" textAnchor="middle" className="cycle-next">{isEnglish ? "NEXT MODEL → STRONGER AGENT → NEW RESEARCH FRONTIER" : "下一代模型 → 更强智能体 → 新的研究前沿"}</text>
    <text x="410" y="28" textAnchor="middle" className="cycle-boundary">{isEnglish ? "ANALYTICAL LOOP · NOT A CLAIM ABOUT DEEPSEEK’S PRIVATE TRAINING PIPELINE" : "分析性闭环 · 并非对 DeepSeek 内部训练流程的事实断言"}</text>
  </svg><figcaption>{isEnglish ? "The strategic loop closes only when work produces reusable signal and validated learning." : "只有当真实工作产生可复用信号并通过验证，战略闭环才真正成立。"}</figcaption></figure>;
}
