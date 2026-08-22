import Link from "next/link";
import type { ReactNode } from "react";

export function VerificationBottleneck({ language = "zh" }: { language?: "zh" | "en" }) {
  const isEnglish = language === "en";
  return <section className="verification-bottleneck"><div className="verification-bottleneck__head"><p>{isEnglish ? "THE NEW BOTTLENECK MAY BE VERIFICATION" : "新的瓶颈可能是验证"}</p><h3>{isEnglish ? "Search can scale faster than truth." : "搜索可以比真相扩张得更快。"}</h3></div><div className="verification-scale"><div><span>{isEnglish ? "CANDIDATE GENERATION" : "候选方案生成"}</span><div>{["10","100","1,000","10,000"].map((v,i)=><b key={v} style={{width:`${22+i*24}%`}}>{v}</b>)}</div></div><i>≠</i><div><span>{isEnglish ? "VALIDATED MECHANISMS" : "通过验证的机制"}</span><div className="verification-scale__slow">{["3","7","12","18"].map((v,i)=><b key={v} style={{width:`${28+i*9}%`}}>{v}</b>)}</div></div></div><div className="verification-bottleneck__verdict"><strong>{isEnglish ? "MORE SEARCH ≠ MORE KNOWLEDGE" : "更多搜索 ≠ 更多知识"}</strong><p>{isEnglish ? <>SEARCH CREATES CANDIDATES. <span>VERIFICATION CREATES KNOWLEDGE.</span></> : <>搜索产生候选。<span>验证产生知识。</span></>}</p></div></section>;
}

export function HarnessMonoculture({ language = "zh" }: { language?: "zh" | "en" }) {
  const isEnglish = language === "en";
  const labels = isEnglish ? ["Best Harness","More Usage","More Data","More Optimization","Model Adapts to Harness","Harness Scores Higher"] : ["胜出 Harness","更多使用","更多数据","更多优化","模型适应 Harness","Harness 得分更高"];
  return <section className="monoculture-block"><div><p>{isEnglish ? "RISK MODEL" : "风险模型"}</p><h3>{isEnglish ? "HARNESS MONOCULTURE" : "HARNESS 单一化风险"}</h3><span>{isEnglish ? "A successful interface can become a self-reinforcing distribution." : "一种成功接口可能变成自我强化的分布。"}</span></div><div className="monoculture-loop">{labels.map((l,i)=><span key={l}>{l}{i<labels.length-1?<i>→</i>:<i>↺</i>}</span>)}</div><blockquote>{isEnglish ? <>HARNESS DISCOVERS CAPABILITY.<br /><strong>TRAINING INTERNALIZES CAPABILITY.</strong></> : <>Harness 负责发现能力。<br /><strong>训练负责内化能力。</strong></>}<small>{isEnglish ? "The harness should reveal what the model must eventually learn, not become a permanent crutch." : "Harness 应该暴露模型最终需要学会的问题，而不是成为永久拐杖。"}</small></blockquote></section>;
}

export function AbsorptionBottleneck({ language = "zh" }: { language?: "zh" | "en" }) {
  const isEnglish = language === "en";
  return <section className="absorption-block"><div className="absorption-block__flow"><div><span>{isEnglish ? "COMMUNITY" : "社区"}</span><strong>100</strong><small>{isEnglish ? "USEFUL DISCOVERIES" : "有用发现"}</small></div><i>→</i><div className="absorption-core"><span>{isEnglish ? "CORE CAPACITY" : "核心吸纳能力"}</span><strong>3</strong><small>{isEnglish ? "UNDERSTAND · VALIDATE · ABSORB" : "理解 · 验证 · 吸纳"}</small></div></div><div className="absorption-block__principle"><span>{isEnglish ? "ABSORPTION BOTTLENECK" : "吸纳瓶颈"}</span><h3>{isEnglish ? <>ABSORB MECHANISMS,<br />NOT FEATURES.</> : <>吸纳机制，<br />而不是堆积功能。</>}</h3><p>{isEnglish ? "Keep implementation diversity at the edge. Move general lessons into the substrate." : "外围保留实现多样性，把可迁移的通用经验吸收到底座中。"}</p></div><div className="absorption-example"><span>{isEnglish ? "BROWSER PLUGIN" : "浏览器插件"}</span><div><small>{isEnglish ? "NOT NECESSARILY" : "不一定吸纳"}</small><b>{isEnglish ? "Browser implementation" : "浏览器具体实现"}</b></div><i>→</i><div><small>{isEnglish ? "MORE VALUABLE" : "更值得吸纳"}</small><b>{isEnglish ? "Tool Protocol · Context Policy · Recovery Pattern · Permission Model · Failure Taxonomy" : "工具协议 · 上下文策略 · 恢复模式 · 权限模型 · 失败分类"}</b></div></div></section>;
}

export function EconomicCheck({ language = "zh" }: { language?: "zh" | "en" }) {
  const isEnglish = language === "en";
  return <section className="economic-check"><div><span>{isEnglish ? "SEPARATE FROM THE FOUR LEARNING GATES" : "独立于四道验证门的经济性检查"}</span><h3>{isEnglish ? "ECONOMIC CHECK" : "经济性检查"}</h3><p>{isEnglish ? "Is search becoming cheaper?" : "搜索是否真的正在变便宜？"}</p></div><div className="economic-metrics"><strong>{isEnglish ? "COST PER VALIDATED CAPABILITY" : "单位验证能力成本"} <i>↓</i></strong><strong>{isEnglish ? "REUSE FACTOR" : "能力复用系数"} <i>↑</i></strong><strong>{isEnglish ? "MARGINAL INTEGRATION COST" : "边际集成成本"} <i>↓</i></strong></div><div className="economic-verdict"><p><b>{isEnglish ? "YES" : "是"}</b>{isEnglish ? " Search may be becoming cheaper." : " 搜索可能正在变便宜。"}</p><p><b>{isEnglish ? "NO" : "否"}</b>{isEnglish ? " Search may be wider, but not more efficient." : " 搜索可能更宽，但并未更高效。"}</p></div></section>;
}

export function ZeroRetuningDelta({ language = "zh" }: { language?: "zh" | "en" }) {
  const isEnglish = language === "en";
  const frozen = isEnglish ? ["HARNESS","PLUGIN","PROMPT","TOOL SCHEMA","TASK SET"] : ["HARNESS","插件","提示词","工具模式","任务集"];
  return <section className="zero-retuning"><div><span>{isEnglish ? "FREEZE" : "保持冻结"}</span>{frozen.map(x=><b key={x}>{x}</b>)}</div><div className="zero-retuning__swap"><span>{isEnglish ? "MODEL N" : "模型 N"}</span><i>→</i><span>{isEnglish ? "MODEL N+1" : "模型 N+1"}</span></div><div><span>{isEnglish ? "MEASURE" : "测量"}</span><strong>{isEnglish ? "ZERO-RETUNING DELTA" : "零调参迁移增益"}</strong><strong>{isEnglish ? "ADAPTATION COST" : "适配成本"}</strong><p>{isEnglish ? "Does the old ecosystem improve before any retuning — and how much work is required afterward?" : "旧生态能否在零调参时自动变强？此后又需要多少适配成本？"}</p></div></section>;
}

const cycle = ["FAILURE","LOCATE","REPRODUCE","VERIFY","EXTRACT MECHANISM","ABSORB","NEXT VERSION FIX"];
export function LearningCycleTime({ language = "zh" }: { language?: "zh" | "en" }) {
  const isEnglish = language === "en";
  const steps = isEnglish ? cycle : ["失败","定位","复现","验证","提取机制","吸纳","下一版本修复"];
  const times = isEnglish ? ["30 DAYS","14 DAYS","7 DAYS","48 HOURS"] : ["30 天","14 天","7 天","48 小时"];
  return <section className="learning-cycle"><div className="learning-cycle__head"><span>{isEnglish ? "ULTIMATE OPERATING METRIC" : "最终运行指标"}</span><h3>{isEnglish ? "LEARNING CYCLE TIME" : "学习周期"}</h3><p>{isEnglish ? "How long does it take to turn one failure into system improvement?" : "把一次真实失败变成系统性改进，需要多久？"}</p></div><div className="learning-cycle__steps">{steps.map((s,i)=><span key={s}>{s}{i<steps.length-1&&<i>→</i>}</span>)}</div><div className="learning-cycle__time">{times.map((s,i)=><span key={s}>{s}{i<3&&<i>→</i>}</span>)}</div><small>{isEnglish ? "ILLUSTRATIVE TRAJECTORY · NOT OBSERVED DEEPSEEK DATA" : "示意性路径 · 不是观测到的 DeepSeek 数据"}</small></section>;
}

const killZh = [
  ["01","Harness 改进无法通过留出、跨任务或跨模型迁移。","胜出方案离开原始任务、仓库或模型以后崩溃，只剩基准测试专用能力。"],
  ["02","社区发现没有被可观察地或可推论地吸纳。","官方 Harness、评估与行为鲁棒性长期看不到任何对应变化。"],
  ["03","新模型没有为冻结生态带来零调参红利。","每一代模型都要求重写提示词、工具契约与工作流，生态没有复利。"],
  ["04","学习周期没有缩短。","更多智能体与执行轨迹只增加运行负担，没有缩短从失败到系统改进的时间。"],
  ["05","验证成本与候选生成速度同步增长。","搜索更宽，但单位验证能力成本没有下降。"],
  ["06","主导 Harness 提高得分，却降低接口鲁棒性。","系统适应 Harness 单一化环境，换一个合理接口就显著失效。"],
];
const killEn = [
  ["01","Harness improvements fail held-out, cross-task, or cross-model transfer.","The winner collapses outside its originating task, repository, or model family."],
  ["02","Community discoveries are neither observably nor inferentially absorbed.","Official harnesses, evals, and model robustness show no corresponding change."],
  ["03","New models deliver no zero-retuning dividend to the frozen ecosystem.","Every generation requires prompts, tools, and workflows to be rebuilt from scratch."],
  ["04","Learning Cycle Time does not contract.","More agents and trajectories add load without shortening failure-to-improvement time."],
  ["05","Verification costs grow as fast as candidate generation.","Search widens, but total cost per validated capability does not decline."],
  ["06","A dominant harness raises scores while reducing interface robustness.","The system adapts to a monoculture and fails under reasonable interface changes."],
];

export function LearningSystemKillConditions({ language = "zh" }: { language?: "zh" | "en" }) {
  const items=language==="en"?killEn:killZh;
  return <section className="kill-conditions kill-conditions--learning"><div className="kill-conditions__header"><p>{language==="en"?"HOW THIS THESIS COULD BE WRONG":"这个命题可能如何被证伪"}</p><h2>{language==="en"?"Kill Conditions":"证伪条件"}</h2><span>{language==="en"?"Success as an open runtime is not evidence of a nonlinear learning flywheel.":"一个开放运行时很成功，不自动等于非线性学习飞轮成立。"}</span></div><div className="kill-grid">{items.map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div><p className="kill-verdict">{language==="en"?<>If these signals remain absent after one or two major model generations, downgrade the claim to: <strong>“Great open Agent Runtime; no evidence yet for a nonlinear Model × Harness × Ecosystem flywheel.”</strong></>:<>如果未来一到两个主要模型代际后这些信号仍未出现，就把强命题降级为：<strong>“DSH 是优秀的开放智能体运行时，但还没有证据证明非线性双飞轮存在。”</strong></>}</p></section>;
}

export function PredictionLedger({ language = "zh" }: { language?: "zh" | "en" }) {
  const isEnglish = language === "en";
  const ledger=isEnglish?["TRANSFER","ABSORPTION","MODEL DIVIDEND","LEARNING CYCLE TIME","ECONOMIC CHECK"]:["迁移","选择性吸纳","模型升级红利","学习周期","经济性检查"];
  return <section className="prediction-ledger"><div><span>{isEnglish?"INITIAL FRAMEWORK · V1.0":"初始框架 · V1.0"}</span><h3>{isEnglish?"PREDICTION / UPDATE LEDGER":"预测 / 更新追踪表"}</h3><p>{isEnglish?"New evidence updates the ledger. It does not silently rewrite the original prediction.":"新事实进入追踪表，不偷偷改写原始预测。"}</p></div><div className="prediction-ledger__meta"><span>{isEnglish?"HORIZON":"预测窗口"}<strong>{isEnglish?"6–18 MONTHS":"6–18 个月"}</strong></span><span>{isEnglish?"GENERATIONS":"模型代际"}<strong>{isEnglish?"1–2 MAJOR":"1–2 个主要代际"}</strong></span><span>{isEnglish?"STATUS":"状态"}<strong>{isEnglish?"ACTIVE":"持续验证"}</strong></span></div><div className="prediction-ledger__rows">{ledger.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong><small>{isEnglish?"Update date · evidence · status":"更新日期 · 证据 · 状态"}</small><b>{isEnglish?"OPEN":"开放"}</b></div>)}</div></section>;
}

export function LearningSystemThesis({ language = "zh" }: { language?: "zh" | "en" }) {
  return <section className="thesis-block thesis-block--learning"><p>{language==="en"?"FINAL THESIS · FIELD NOTE 03":"最终论点 · 研究笔记 03"}</p><div>{language==="en"?<><h3>STRONG SUBSTRATE.<br /><em>DISTRIBUTED SEARCH.</em></h3><p>The strategic possibility is not merely that DeepSeek has built a more open coding agent. It is that centralized model, compute, training, sandbox, runtime, and protocol layers might support a distributed search over the unresolved agent design space.</p><p>But openness is not the moat. Search without verification produces noise; winners without transfer become benchmark weapons; experience without absorption never becomes core knowledge; a stronger model without a zero-retuning ecosystem dividend does not create bidirectional compounding.</p><strong>In an era when AI helps build the next AI, the hardest advantage to copy may not be the strongest model at one moment, but the fastest learning system that is also the hardest to fool.</strong></>:<><h3>强底座。<br /><em>分布式搜索。</em></h3><p>DeepSeek 开放智能体路线最值得关注的战略可能性，不是它今天做出了一个更开放的编程智能体，而是它是否正在用集中的模型、算力、训练、沙箱、运行时与协议，支撑对未知智能体解空间的分布式搜索。</p><p>但开放本身不是护城河。没有验证，搜索只会制造噪声；没有迁移，胜出方案只是基准测试专用能力；没有吸纳，生态经验无法变成核心知识；没有零调参模型升级红利，模型与生态之间就没有双向复利。</p><strong>在 AI 开始参与研发下一代 AI 的时代，最终最难复制的护城河，可能不是最强的一次模型，而是最快、同时最不容易骗自己的学习系统。</strong></>}</div><div className="thesis-evolution"><span>MODEL</span><i>→</i><span>MODEL × HARNESS</span><i>→</i><strong>MODEL × HARNESS × ECOSYSTEM</strong></div><span className="thesis-block__index">03</span></section>;
}

export function LearningSystemBoundary({ language = "zh" }: { language?: "zh" | "en" }) {
  const isEnglish = language === "en";
  return <section className="research-boundary research-boundary--learning"><div><p>{isEnglish?"RESEARCH BOUNDARY":"研究边界"}</p><h2>{isEnglish?"The architecture is public. The closed learning loop is not.":"架构组件是公开事实；闭合学习回路仍是待验证假说。"}</h2></div><p>{isEnglish?"Independent, source-based analysis. Not an official DeepSeek statement.":"本文是基于公开来源的独立分析，不是 DeepSeek 官方陈述。"}</p><ul>{isEnglish?<><li>“Everything is a Plugin,” append-only traceability, composable profiles, Minimal, and Code Mode are documented in the official DSH repository.</li><li>V4 internal agentic-coding use and DSec trajectory infrastructure are documented in the V4 technical report.</li><li>Organizational mirroring, distributed capability search, and upstream absorption are inference or hypothesis.</li><li>There is no public evidence that public DSH community trajectories train a future DeepSeek model.</li><li>PTC is retained only as the label used by the community case study; the current official preset name is Code.</li></>:<><li>“万物皆插件”、仅追加式可追溯日志、可组合配置、Minimal 与 Code Mode 来自 DSH 官方仓库。</li><li>V4 内部智能体编程使用和 DSec 执行轨迹基础设施来自 V4 技术报告。</li><li>组织映射、分布式能力搜索与上游吸纳属于推论或假说。</li><li>目前没有公开证据证明公共 DSH 社区执行轨迹被用于未来 DeepSeek 模型训练。</li><li>PTC 只保留为社区案例使用的实验标签；当前官方预设名称为 Code。</li></>}</ul><Link className="glossary-inline-link" href={`/${language}/glossary`}>{isEnglish?"Open the series glossary →":"查看全系列统一术语表 →"}</Link></section>;
}

export function SeriesComplete({ language = "zh" }: { language?: "zh" | "en" }) {
  const notes=[
    ["01",language==="en"?"RUNTIME":"运行时架构","01-deepseek-harness",language==="en"?"What is the runtime?":"Harness 到底是什么？"],
    ["02",language==="en"?"SEARCH":"研究搜索","02-v4-pro-research-frontier",language==="en"?"How might model R&D economics work?":"模型研发的搜索经济学如何运作？"],
    ["03",language==="en"?"LEARNING":"学习系统","03-centralized-substrate-decentralized-search",language==="en"?"How might the whole system learn?":"整个系统如何学习？"],
  ];
  return <section className="series-complete"><span>{language==="en"?"SERIES COMPLETE":"系列阶段完成"}</span><h3>{language==="en"?"RUNTIME → SEARCH → VERIFICATION → ABSORPTION → LEARNING SYSTEM":"运行时 → 搜索 → 验证 → 吸纳 → 学习系统"}</h3><div>{notes.map(([n,k,slug,t])=><Link key={n} href={`/${language}/field-notes/${slug}`} className={n==="03"?"is-current":undefined}><span>{n} · {k}</span><strong>{t}</strong></Link>)}</div></section>;
}

export function LearningSystemNavigation({ language = "zh" }: { language?: "zh" | "en" }) {
  return <nav className="field-note-navigation"><Link href={`/${language}/field-notes/02-v4-pro-research-frontier`}><span>{language==="en"?"← PREVIOUS FIELD NOTE · #02":"← 上一篇研究笔记 · #02"}</span><strong>{language==="en"?"V4 Pro May Never Have Been the Main Battlefield":"V4 Pro 或许从来就不是主战场"}</strong><small>{language==="en"?"Research Frontier / Search Economics":"研究前沿 / 搜索经济学"}</small></Link><Link href="/"><span>{language==="en"?"BACK TO SERIES":"返回系列首页"}</span><strong>DeepSeek Field Notes · 01–03</strong><small>{language==="en"?"The complete bilingual research series":"完整中英文研究系列"}</small></Link></nav>;
}

export function LearningPullQuote({ children }: { children: ReactNode }) { return <blockquote className="pull-quote pull-quote--learning">{children}</blockquote>; }
