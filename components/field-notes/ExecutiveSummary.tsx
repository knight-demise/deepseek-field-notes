const stepsZh = [
  ["01", "编程是第一个试验场。", "可验证的行动—反馈回路，让代码成为智能体运行时的第一块试验田。"],
  ["02", "“万物皆插件”让 Harness 成为运行时。", "能力不再被锁死在产品里，而成为可替换、可组合、可实验的接口。"],
  ["03", "开放运行时让能力生产走向分布式。", "拥有局部需求与领域知识的开发者，可以并行搜索外围能力。"],
  ["04", "能力复用可能压低下一位智能体的边际成本。", "一项能力被验证并复用得越多，后来者越不必从零开始。"],
];

const stepsEn = [
  ["01", "Coding is the first proving ground.", "Machine-verifiable action and feedback make code an unusually dense environment for testing an Agent Runtime."],
  ["02", "Everything is a Plugin turns Harness into a Runtime.", "Capabilities are no longer locked inside one product; they become replaceable, composable, and open to experimentation."],
  ["03", "An open Runtime lets capability production become distributed.", "Developers with local needs and domain knowledge can search the capability space in parallel."],
  ["04", "Capability reuse may compress the next Agent’s marginal cost.", "The more often a validated capability is reused, the less often the ecosystem has to rebuild from zero."],
];

export function ExecutiveSummary({ language = "zh" }: { language?: "zh" | "en" }) {
  const steps = language === "zh" ? stepsZh : stepsEn;
  return (
    <section className="executive-summary" aria-labelledby="argument-title">
      <div className="section-label"><span>00</span><h2 id="argument-title">{language === "zh" ? "30 秒读懂核心论点" : "THE ARGUMENT IN 30 SECONDS"}</h2></div>
      <div className="argument-steps">
        {steps.map(([number, title, copy]) => (
          <div className="argument-step" key={number}><span className="argument-step__number">{number}</span><h3>{title}</h3><p>{copy}</p></div>
        ))}
      </div>
      <div className="argument-test">
        <p>{language === "zh" ? "真正的问题，不是 DSH 有多少插件。" : "The real question is not how many plugins DSH has."}</p>
        <strong>{language === "zh" ? <>而是一次性的智能体行为能否转化为<span>可验证</span>、<span>可复用</span>、<span>可改进</span>的能力。</> : <>It is whether one-off Agent behavior can become <span>verifiable</span>, <span>reusable</span>, and <span>improvable</span> capability.</>}</strong>
      </div>
    </section>
  );
}
