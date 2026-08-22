const zh = [
  ["01","DeepSeek 的研发组织似乎把分布式探索与稀缺资源的集中配置结合在一起。","内部自主探索产生信号，再由集中资源放大赢家。"],
  ["02","DeepSeek Harness 应用了结构相似的逻辑。","稳定的运行时核心与高度可组合的能力边缘并存。"],
  ["03","更多搜索者可以扩大能力搜索空间。","复用还可能降低下一次工具、插件与工作流搜索的边际成本。"],
  ["04","但搜索本身只会产生噪声。","独立验证与选择性吸纳，才可能把经验变成知识。"],
  ["05","竞争单元可能从模型转向 Model × Harness × Ecosystem。","前提是更强模型提高生态上限，而被验证的生态发现又能改善未来系统。"],
];
const en = [
  ["01","DeepSeek's research organization appears to combine distributed exploration with centralized allocation of scarce resources.","Autonomous exploration generates signals; concentrated resources amplify the winners."],
  ["02","DeepSeek Harness applies a structurally similar logic.","A stable runtime substrate coexists with highly composable capability edges."],
  ["03","More searchers can widen the capability search space.","Reuse may also lower the marginal cost of the next search across tools, plugins, and workflows."],
  ["04","But search alone produces noise.","Independent verification and selective absorption are required to turn experience into knowledge."],
  ["05","The competition unit may shift from Model to Model × Harness × Ecosystem.","That requires stronger models to lift the ecosystem, and verified ecosystem discoveries to improve the future system."],
];

export function LearningSystemSummary({ language = "zh" }: { language?: "zh" | "en" }) {
  const items = language === "en" ? en : zh;
  return <section className="executive-summary executive-summary--learning"><div className="section-label"><span>00</span><h2>{language === "zh" ? "30 秒读懂核心论点" : "THE ARGUMENT IN 30 SECONDS"}</h2></div><div className="argument-steps">{items.map(([n,t,c])=><div className="argument-step" key={n}><span className="argument-step__number">{n}</span><h3>{t}</h3><p>{c}</p></div>)}</div><div className="argument-test argument-test--learning"><p>{language === "zh" ? "控制平面" : "THE CONTROL PLANE"}</p><strong>{language === "zh" ? <>搜索产生候选。<span>验证产生知识。</span></> : <>Search creates candidates. <span>Verification creates knowledge.</span></>}</strong></div></section>;
}
