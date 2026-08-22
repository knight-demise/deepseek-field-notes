export function RuntimeEvolutionDiagram({ language = "zh" }: { language?: "zh" | "en" }) {
  const isEnglish = language === "en";
  const nodes = [["模型", "MODEL",14,15],["工具", "TOOL",76,12],["技能", "SKILL",91,36],["会话", "SESSION",78,78],["沙箱", "SANDBOX",12,80],["存储", "STORAGE",-2,49],["循环", "LOOP",39,93],["界面", "UI",94,61]];
  return <figure className="runtime-diagram" aria-labelledby="runtime-caption">
    <div className="runtime-diagram__topline"><span>{isEnglish ? "ARCHITECTURE HYPOTHESIS" : "架构假说 · ARCHITECTURE HYPOTHESIS"}</span><span>01 / RUNTIME</span></div>
    <svg viewBox="0 0 620 520" role="img" aria-label="从 Coding Agent 到开放 Agent Runtime 与分布式能力生产的演化图">
      <defs><linearGradient id="runtimeLine" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8dd8ff"/><stop offset="1" stopColor="#267aaa" stopOpacity=".35"/></linearGradient><filter id="softGlow"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g className="runtime-orbits" fill="none" stroke="#6cc7f0" strokeOpacity=".15"><circle cx="310" cy="260" r="210"/><circle cx="310" cy="260" r="164" strokeDasharray="4 12"/></g>
      {nodes.map(([zh,en,x,y])=><g key={String(en)} transform={`translate(${Number(x)*5.4+32} ${Number(y)*4.5+25})`} className="runtime-node"><circle r="4"/><text x="10" y="4">{isEnglish ? en : <>{zh}<tspan className="diagram-aux"> · {en}</tspan></>}</text></g>)}
      <path className="runtime-path" d="M310 112V407" stroke="url(#runtimeLine)" strokeWidth="2" fill="none"/>
      <g className="runtime-stage" transform="translate(190 110)"><rect width="240" height="70" rx="6"/><text x="120" y="30">{isEnglish ? "CODING AGENT" : "编程智能体"}</text><text className="runtime-stage__small" x="120" y="51">{isEnglish ? "PROVING GROUND" : "CODING AGENT · 试验场"}</text></g>
      <g className="runtime-stage runtime-stage--focus" transform="translate(165 224)"><rect width="290" height="84" rx="6"/><text x="145" y="34">{isEnglish ? "OPEN AGENT RUNTIME" : "开放智能体运行时"}</text><text className="runtime-stage__small" x="145" y="58">{isEnglish ? "EVERYTHING IS A PLUGIN" : "OPEN AGENT RUNTIME · 万物皆插件"}</text></g>
      <g className="runtime-stage" transform="translate(190 354)"><rect width="240" height="70" rx="6"/><text x="120" y="30">{isEnglish ? "DISTRIBUTED R&D" : "分布式研发"}</text><text className="runtime-stage__small" x="120" y="51">{isEnglish ? "CAPABILITY PRODUCTION" : "能力生产 · CAPABILITY PRODUCTION"}</text></g>
      <g fill="#8dd8ff"><path d="m303 199 7 8 7-8h-5v-13h-4v13Z"/><path d="m303 329 7 8 7-8h-5v-13h-4v13Z"/></g>
    </svg>
    <figcaption id="runtime-caption"><span>{isEnglish ? "FROM CODING AGENT TO OPEN AGENT RUNTIME" : "从编程智能体到开放智能体运行时"}</span><small>{isEnglish ? "Technical interpretation · not an official roadmap" : "FROM CODING AGENT TO OPEN AGENT RUNTIME · 技术推演，并非官方路线图"}</small></figcaption>
  </figure>;
}
