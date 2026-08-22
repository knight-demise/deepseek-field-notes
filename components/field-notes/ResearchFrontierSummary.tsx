const stepsZh = [
  ["01", "V4 Flash 显示出异常高的后训练弹性。", "Flash 0731 在架构与尺寸不变的情况下，仅靠重新后训练就显著改变了智能体表现。"],
  ["02", "更小的模型可能降低训练方法的搜索成本。", "更便宜的 Rollout 与消融可能提高单位时间内可验证的研究假说数量。"],
  ["03", "更大的模型可能用于验证并放大胜出方法。", "Pro 的更高能力上限可能更适合验证迁移，并把有效方法推向生产。"],
  ["04", "生产系统也可以成为模型研发的一部分。", "强生产智能体完成真实工作时，也可能产生揭示下一代模型该学什么的成功与失败轨迹。"],
];

const stepsEn = [
  ["01", "V4 Flash suggests unusually high post-training elasticity.", "Flash 0731 changed agent performance materially through re-post-training while preserving the preview model’s architecture and size."],
  ["02", "Smaller models may lower the cost of searching training methods.", "Cheaper rollouts and ablations can increase the number of meaningful hypotheses tested per unit of time and compute."],
  ["03", "Larger models may validate and amplify winners.", "A higher capability ceiling may make Pro the better place to test transfer, amplify strong methods, and carry them into production."],
  ["04", "Production can become part of model R&D.", "A strong production agent can do useful work while producing success and failure trajectories that reveal what the next model should learn."],
];

export function ResearchFrontierSummary({ language = "zh" }: { language?: "zh" | "en" }) {
  const steps = language === "zh" ? stepsZh : stepsEn;
  return (
    <section className="executive-summary executive-summary--frontier" aria-labelledby="frontier-argument-title">
      <div className="section-label"><span>00</span><h2 id="frontier-argument-title">{language === "zh" ? "30 秒读懂核心论点" : "THE ARGUMENT IN 30 SECONDS"}</h2></div>
      <div className="argument-steps">
        {steps.map(([number, title, copy]) => <div className="argument-step" key={number}><span className="argument-step__number">{number}</span><h3>{title}</h3><p>{copy}</p></div>)}
      </div>
      <div className="argument-test">
        <p>{language === "zh" ? "真正的问题，不是 Flash 和 Pro 谁赢。" : "THE QUESTION IS NOT FLASH VERSUS PRO."}</p>
        <strong>{language === "zh" ? <>问题是如何把<span>搜索</span>、<span>扩展</span>与<span>执行轨迹</span>连接成更短的研究周期。</> : <>The question is how to connect <span>Search</span>, <span>Scale</span>, and <span>Trajectory</span> into a shorter research cycle.</>}</strong>
      </div>
    </section>
  );
}
