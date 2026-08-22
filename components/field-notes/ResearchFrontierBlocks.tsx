import Link from "next/link";
import type { ReactNode } from "react";

export function TrajectoryYieldBlock({ language = "zh" }: { language?: "zh" | "en" }) {
  const isEnglish = language === "en";
  const dimensions = isEnglish
    ? [["01", "Useful Agent Work", "Tasks whose outputs have real operational value."], ["02", "Trajectory Quality", "Complete, attributable, replayable action and feedback traces."], ["03", "Research Signal", "Failures and successes that can change evals, harnesses, data, or post-training."], ["04", "Inference Cost", "The compute and operational cost required to produce that work and signal."]]
    : [["01", "有效智能体工作", "产出具有真实业务或研发价值的任务。"], ["02", "执行轨迹质量", "完整、可归因、可回放的行动与反馈记录。"], ["03", "研究信号", "能改变评估、Harness、数据或后训练的成功与失败。"], ["04", "推理成本", "产生这些工作与信号所需的推理和运行成本。"]];

  return (
    <section className="trajectory-yield-block">
      <div className="trajectory-yield-block__top"><p>{isEnglish ? "CONCEPT INTRODUCED IN FIELD NOTE 02" : "研究笔记 02 提出的概念"}</p><span>{isEnglish ? "NOT AN OFFICIAL DEEPSEEK METRIC" : "不是 DeepSeek 官方指标"}</span></div>
      <div className="trajectory-yield-block__title"><span>TY</span><div><h3>{isEnglish ? "Trajectory Yield" : "轨迹产出率"}</h3>{!isEnglish && <small className="block-english-subtitle">TRAJECTORY YIELD</small>}<p>{isEnglish ? "A conceptual objective for asking how much useful work and research signal a production model returns per unit of cost." : "用来追问生产模型每单位成本究竟返回了多少有用工作和研究信号的概念性目标。"}</p></div></div>
      <div className="trajectory-yield-block__formula"><span>{isEnglish ? "Useful Agent Work" : "有效智能体工作"}</span><i>×</i><span>{isEnglish ? "Trajectory Quality" : "轨迹质量"}</span><i>×</i><span>{isEnglish ? "Research Productivity" : "研究生产率"}</span><i>÷</i><span>{isEnglish ? "Cost" : "成本"}</span></div>
      <strong className="trajectory-yield-block__warning">{isEnglish ? "CONCEPTUAL OBJECTIVE — NOT A CALIBRATED METRIC" : "概念性目标——不是已经标定的指标"}</strong>
      <div className="trajectory-yield-grid">{dimensions.map(([number, title, copy]) => <div key={number}><span>{number}</span><h4>{title}</h4><p>{copy}</p></div>)}</div>
    </section>
  );
}

export function ResearchFrontierKillConditions({ language = "zh" }: { language?: "zh" | "en" }) {
  const items = language === "en" ? [
    ["01", "Small-model search fails to transfer to larger models.", "Methods that win on a cheap proxy collapse or reverse when validated on the larger model."],
    ["02", "Cheap proxy search creates too many false positives.", "Experimental throughput rises, but signal quality falls enough that total cost per validated method does not improve."],
    ["03", "Production trajectories fail to become reusable research signals.", "Logs remain noisy, non-attributable, privacy-constrained, or too environment-specific to improve evals, harnesses, data, or training."],
    ["04", "AI-assisted research does not shorten the research cycle.", "More agents and more trajectories add operational load without reducing time from hypothesis to validated model improvement."],
  ] : [
    ["01", "小模型上的搜索结果无法迁移到大模型。", "低成本代理模型上胜出的训练方法，迁移到大模型验证时崩溃、反转或失去收益。"],
    ["02", "低成本代理搜索产生过多假阳性。", "实验吞吐提高，但信号质量下降，导致每个有效方法的总搜索成本并未改善。"],
    ["03", "生产执行轨迹无法成为可复用研究信号。", "日志过于嘈杂、无法归因、受隐私限制或过度依赖环境，不能改善评估、Harness、数据或训练。"],
    ["04", "AI 辅助研究没有缩短研发周期。", "更多智能体与轨迹只增加运行负担，并未缩短从研究假说到已验证模型改进的时间。"],
  ];

  return <section className="kill-conditions kill-conditions--frontier"><div className="kill-conditions__header"><p>{language === "en" ? "HOW THIS THESIS COULD BE WRONG" : "这个命题可能如何被证伪"}</p><h2>{language === "en" ? "Kill Conditions" : "证伪条件"}</h2><span>{language === "en" ? "The thesis survives only if search is cheaper, transfer is real, and learning cycles contract." : "只有当搜索真的更便宜、迁移真的成立、研发周期真的缩短，这个命题才有资格存活。"}</span></div><div className="kill-grid">{items.map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></section>;
}

export function ResearchFrontierThesis({ children, language = "zh" }: { children: ReactNode; language?: "zh" | "en" }) {
  return <section className="thesis-block thesis-block--frontier"><p>{language === "en" ? "FINAL THESIS · FIELD NOTE 02" : "最终论点 · 研究笔记 02"}</p><div>{children}</div><span className="thesis-block__index">02</span></section>;
}

export function ResearchFrontierBoundary({ language = "zh" }: { language?: "zh" | "en" }) {
  const isEnglish = language === "en";
  return <section className="research-boundary research-boundary--frontier"><div><p>{isEnglish ? "RESEARCH BOUNDARY" : "研究边界"}</p><h2>{isEnglish ? "Public facts establish the pieces — not the internal allocation." : "公开事实证明了拼图，不等于证明了内部资源分工。"}</h2></div><p>{isEnglish ? "This is an independent, source-based interpretation. It does not claim access to DeepSeek’s internal compute, staffing, training-data, or roadmap decisions." : "本文是基于公开来源的独立技术—战略解释，不声称知道 DeepSeek 内部的算力、人员、训练数据或路线图分配。"}</p><ul>{isEnglish ? <><li>Model scale, the Flash 0731 re-post-training update, Pro 0813 GA, and DSec infrastructure are public facts.</li><li>Flash as a Search Layer and Pro as a Scale Layer are analytical inferences, not a disclosed DeepSeek workflow.</li><li>Trajectory Yield is introduced here as a conceptual objective, not a calibrated metric.</li><li>There is no public evidence that public DSH user trajectories are being used to train a future DeepSeek model.</li></> : <><li>模型参数、Flash 0731 重新后训练、Pro 0813 GA 与 DSec 基础设施属于公开事实。</li><li>Flash 作为搜索层、Pro 作为扩展层是本文推演，不是 DeepSeek 公布的工作流。</li><li>轨迹产出率（Trajectory Yield）是本文提出的概念性目标，不是已标定指标。</li><li>目前没有公开证据证明公共 DSH 用户执行轨迹已被用于训练未来 DeepSeek 模型。</li></>}</ul><Link className="glossary-inline-link" href={`/${language}/glossary`}>{isEnglish ? "Open the series glossary →" : "查看全系列统一术语表 →"}</Link></section>;
}

export function FieldNoteNavigation({ language = "zh" }: { language?: "zh" | "en" }) {
  return <nav className="field-note-navigation" aria-label={language === "en" ? "Field note navigation" : "系列文章导航"}>
    <Link href={`/${language}/field-notes/01-deepseek-harness`}><span>{language === "en" ? "← PREVIOUS FIELD NOTE · #01" : "← 上一篇研究笔记 · #01"}</span><strong>{language === "en" ? "DeepSeek Harness May Be More Than a Coding Agent" : "DeepSeek Harness 可能远不只是一个 Coding Agent"}</strong><small>{language === "en" ? "Runtime / Capability Economics" : "运行时架构 / 能力经济学"}</small></Link>
    <Link href={`/${language}/field-notes/03-centralized-substrate-decentralized-search`}><span>{language === "en" ? "NEXT FIELD NOTE · #03 →" : "下一篇研究笔记 · #03 →"}</span><strong>{language === "en" ? "Centralized Substrate, Decentralized Search" : "集中式底座，分布式搜索"}</strong><small>{language === "en" ? "Learning System / Innovation Architecture" : "学习系统 / 创新架构"}</small></Link>
  </nav>;
}
