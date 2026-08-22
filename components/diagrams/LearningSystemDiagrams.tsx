const Arrow = () => <span className="learning-arrow" aria-hidden="true">↓</span>;

function BiText({ zh, en, language }: { zh: string; en: string; language: "zh" | "en" }) {
  return <>{language === "en" ? en : <>{zh}<small className="diagram-label__aux">{en}</small></>}</>;
}

export function HeroLearningSystemMap({ language = "zh" }: { language?: "zh" | "en" }) {
  const isEnglish = language === "en";
  const model = [["更强模型","Stronger Model"],["更难任务","Harder Tasks"],["执行轨迹","Trajectories"],["失败挖掘","Failure Mining"],["更优模型","Better Model"]];
  const ecosystem = [["开放运行时","Open Runtime"],["更多探索者","More Searchers"],["插件 / 工作流","Plugins / Workflows"],["能力复用","Capability Reuse"],["更低搜索成本","Lower Search Cost"]];
  return (
    <figure className="learning-map learning-map--hero" aria-label="Model and ecosystem flywheels joined by verification and selective absorption">
      <div className="learning-map__top"><small>{isEnglish ? "CONTROL PLANE" : "控制层 · CONTROL PLANE"}</small><strong><BiText zh="验证" en="VERIFICATION" language={language} /></strong><span>+</span><strong><BiText zh="选择性吸纳" en="SELECTIVE ABSORPTION" language={language} /></strong></div>
      <div className="learning-map__branches">
        <div className="learning-map__branch"><p>{isEnglish ? "MODEL FLYWHEEL" : "模型飞轮"}{!isEnglish && <small>MODEL FLYWHEEL</small>}</p>{model.map(([zh,en],i)=><span key={en}><BiText zh={zh} en={en} language={language} />{i<model.length-1&&<Arrow />}</span>)}</div>
        <div className="learning-map__core"><span>V</span><i /><strong>{isEnglish ? "VERIFY" : "验证"}</strong><small>{isEnglish ? <>BEFORE<br />ABSORB</> : <>先验证<br />再吸纳</>}</small></div>
        <div className="learning-map__branch"><p>{isEnglish ? "ECOSYSTEM FLYWHEEL" : "生态飞轮"}{!isEnglish && <small>ECOSYSTEM FLYWHEEL</small>}</p>{ecosystem.map(([zh,en],i)=><span key={en}><BiText zh={zh} en={en} language={language} />{i<ecosystem.length-1&&<Arrow />}</span>)}</div>
      </div>
      <figcaption><strong>MODEL × HARNESS × ECOSYSTEM</strong><span>{isEnglish ? "WIDER + CHEAPER + FASTER SEARCH" : "更宽、更便宜、更快的搜索"}</span></figcaption>
    </figure>
  );
}

const levels = [
  ["01", "组织", "ORGANIZATION", "自主研究者", "分布式假说", "信号", "集中资源放大"],
  ["02", "模型研发", "MODEL R&D", "低成本 / 并行实验", "训练 / 智能体方法", "胜出方法筛选", "高成本扩展 / 生产"],
  ["03", "HARNESS 生态", "HARNESS ECOSYSTEM", "开发者 / 智能体", "插件 / 工作流 / Harness", "独立验证", "复用 / 选择性吸纳"],
];

export function OrganizationRuntimeDiagram({ language = "zh" }: { language?: "zh" | "en" }) {
  return (
    <figure className="system-figure organization-runtime">
      <div className="system-figure__head"><div><span>{language === "en" ? "DIAGRAM 01 · HYPOTHESIS" : "图 01 · 假说"}</span><h3>{language === "en" ? "FROM ORGANIZATION TO RUNTIME" : "从组织结构到运行时"}</h3><p>{language === "en" ? "A Conway-style mirroring hypothesis" : "一种康威定律式的结构映射假说"}</p></div><b>{language === "en" ? "STRUCTURAL SIMILARITY ≠ CAUSAL PROOF" : "结构相似 ≠ 因果证明"}</b></div>
      <div className="organization-levels">{levels.map(([n,titleZh,titleEn,...stepsZh]) => <div className="organization-level" key={n}><span>{n}</span><h4>{language === "en" ? titleEn : <>{titleZh}<small className="diagram-label__aux">{titleEn}</small></>}</h4><div>{stepsZh.map((s,i)=><span key={s}>{language === "en" ? [["Autonomous Researchers","Distributed Hypotheses","Signal","Centralized Resource Amplification"],["Cheap / Parallel Experiments","Training / Agent Methods","Winner Selection","Expensive Scaling / Production"],["Developers / Agents","Plugins / Workflows / Harnesses","Independent Verification","Reuse / Selective Absorption"]][Number(n)-1][i] : s}{i < stepsZh.length - 1 && <Arrow />}</span>)}</div></div>)}</div>
      <div className="organization-runtime__logic"><strong>{language === "en" ? "DECENTRALIZED SEARCH" : "分布式搜索"}</strong><Arrow /><strong>{language === "en" ? "SIGNAL / VERIFICATION" : "信号 / 验证"}</strong><Arrow /><strong>{language === "en" ? "CENTRALIZED AMPLIFICATION" : "集中放大"}</strong></div>
      <figcaption>{language === "en" ? "A testable interpretation, not a claim about DeepSeek's design intent." : "这是一种待验证的解释，不是对 DeepSeek 设计意图的事实断言。"}</figcaption>
    </figure>
  );
}

export function CapabilityReliabilityDiagram({ language = "zh" }: { language?: "zh" | "en" }) {
  return (
    <figure className="system-figure reliability-figure">
      <div className="system-figure__head"><div><span>{language === "en" ? "DIAGRAM 02 · OBSERVED / EXPLORATORY" : "图 02 · 观察 / 探索"}</span><h3>{language === "en" ? "CAPABILITY RELIABILITY" : "能力兑现可靠性"}</h3><p>{language === "en" ? "Model capability ≠ realized agent capability" : "模型能力 ≠ 智能体实际兑现能力"}</p></div><b>{language === "en" ? "NOT A GENERAL MODEL RANKING" : "不是通用模型排名"}</b></div>
      <div className="reliability-flow"><div><small>{language === "en" ? "SAME MODEL" : "同一个模型"}</small><strong>V4 PRO</strong></div><Arrow /><div><small>{language === "en" ? "DIFFERENT HARNESS CONDITIONS" : "不同 Harness 条件"}</small><strong>Standard · PTC · Minimal · Anchored</strong></div></div>
      <div className="reliability-rows"><div><span>{language === "en" ? "OBSERVED CASE" : "观察案例"}</span>{[91,99,92,98].map((v,i)=><b key={`${v}-${i}`} style={{"--score":v} as React.CSSProperties}>{v}</b>)}</div><div><span>{language === "en" ? "RELIABILITY TARGET" : "可靠性目标"}</span>{[96,99,97,98].map((v,i)=><b key={`${v}-${i}`} style={{"--score":v} as React.CSSProperties}>{v}</b>)}</div></div>
      <div className="reliability-caption"><strong>{language === "en" ? "REDUCE VARIANCE" : "降低方差"}</strong><span>{language === "en" ? "Capability Ceiling" : "能力上限"}</span><i>↔</i><span>{language === "en" ? "Realized Capability" : "兑现能力"}</span></div>
      <figcaption>{language === "en" ? "Harness-sensitivity case study · community reproduction · frozen engineering task." : "Harness 敏感性案例 · 社区复现 · 冻结工程任务；不是 DeepSeek 官方通用榜单。"}</figcaption>
    </figure>
  );
}

const modelLoop = [["更强模型","Stronger Model"], ["更强 AI 研究助手","Better AI Research Assistant"], ["更难的真实任务","Harder Real Tasks"], ["成功 / 失败轨迹","Success / Failure Trajectories"], ["评估 / 失败挖掘","Eval / Failure Mining"], ["更优模型","Better Model"]];
const ecosystemLoop = [["开放运行时","Open Runtime"], ["更多开发者 / 智能体","More Developers / Agents"], ["更多插件 / 工作流","More Plugins / Workflows"], ["能力复用","Capability Reuse"], ["更低边际开发成本","Lower Marginal Development Cost"], ["更宽搜索空间","Wider Search"]];

export function DualFlywheelDiagram({ language = "zh" }: { language?: "zh" | "en" }) {
  return (
    <figure className="system-figure dual-flywheel">
      <div className="system-figure__head"><div><span>{language === "en" ? "DIAGRAM 03 · CORE MODEL" : "图 03 · 核心模型"}</span><h3>{language === "en" ? "THE NONLINEAR DUAL FLYWHEEL" : "非线性双飞轮"}</h3><p>{language === "en" ? "Search becomes learning only after verification." : "搜索只有通过验证，才会变成学习。"}</p></div><b>MODEL × HARNESS × ECOSYSTEM</b></div>
      <div className="dual-flywheel__control"><span>{language === "en" ? "INDEPENDENT VERIFICATION" : "独立验证"}</span><i>+</i><span>{language === "en" ? "SELECTIVE ABSORPTION" : "选择性吸纳"}</span></div>
      <div className="dual-flywheel__loops"><Loop title={language === "en" ? "MODEL FLYWHEEL" : "模型飞轮"} items={modelLoop} language={language} /><div className="dual-flywheel__join"><i>×</i><strong>{language === "en" ? <>VERIFIED<br />KNOWLEDGE</> : <>已验证<br />知识</>}</strong><i>×</i></div><Loop title={language === "en" ? "ECOSYSTEM FLYWHEEL" : "生态飞轮"} items={ecosystemLoop} language={language} /></div>
      <div className="dual-flywheel__axioms">{(language === "en" ? ["Models give the ecosystem intelligence.","The ecosystem gives models experience.","Reuse lowers the cost of the next search.","Verification turns experience into knowledge."] : ["模型为生态提供智能。","生态为模型提供经验。","能力复用降低下一轮搜索成本。","验证把经验变成知识。"]).map(x=><p key={x}>{x}</p>)}</div>
    </figure>
  );
}

function Loop({ title, items, language }: { title: string; items: string[][]; language: "zh" | "en" }) {
  return <div className="flywheel-loop"><h4>{title}</h4>{items.map(([zh,en],i)=><span key={en}><BiText zh={zh} en={en} language={language} />{i < items.length - 1 ? <Arrow /> : <em>↺</em>}</span>)}</div>;
}

const gates = [["01","迁移","TRANSFER","能否泛化？","Does it generalize?"],["02","吸纳","ABSORPTION","核心是否学会？","Does the core learn?"],["03","模型升级红利","MODEL DIVIDEND","旧系统是否变强？","Do old systems get smarter?"],["04","学习周期","LEARNING CYCLE TIME","周期是否持续缩短？","Does the loop keep shrinking?"]];

export function FourGatesDiagram({ language = "zh" }: { language?: "zh" | "en" }) {
  return (
    <figure className="system-figure four-gates">
      <div className="system-figure__head"><div><span>{language === "en" ? "DIAGRAM 04 · FALSIFICATION PIPELINE" : "图 04 · 证伪流程"}</span><h3>{language === "en" ? "FOUR GATES" : "四道验证门"}</h3><p>{language === "en" ? "A strong hypothesis must be allowed to fail." : "强假说必须允许自己失败。"}</p></div><b>{language === "en" ? "6–18 MONTH HORIZON" : "6–18 个月验证窗口"}</b></div>
      <div className="four-gates__pipeline"><span className="four-gates__start">{language === "en" ? "HYPOTHESIS" : "假说"}</span>{gates.map(([n,tZh,tEn,qZh,qEn])=><div className="gate" key={n}><span>{n}</span><i /><h4>{language === "en" ? tEn : tZh}</h4><p>{language === "en" ? qEn : qZh}</p></div>)}<span className="four-gates__end">{language === "en" ? <>FLYWHEEL<br />SUPPORTED</> : <>飞轮获得<br />证据支持</>}</span></div>
    </figure>
  );
}
