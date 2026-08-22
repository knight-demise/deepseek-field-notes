export function ProductionResearchDiagram({ language = "zh" }: { language?: "zh" | "en" }) {
  const isEnglish = language === "en";
  const nodes = [
    ["V4 Pro", "V4 PRO", 380, 62], ["真实智能体工作", "REAL AGENT WORK", 610, 145], ["成功 / 失败", "SUCCESS / FAILURE", 660, 310],
    ["失败挖掘", "FAILURE MINING", 545, 454], ["评估 · Harness · 数据", "EVAL · HARNESS · DATA", 285, 494], ["下一代模型", "NEXT MODEL", 87, 388], ["更强智能体", "STRONGER AGENT", 92, 188],
  ];
  return <figure className="technical-figure technical-figure--frontier"><div className="technical-figure__label"><span>{isEnglish ? "FIGURE 02" : "图 02 · FIGURE 02"}</span><span>{isEnglish ? "PRODUCTION AS RESEARCH INSTRUMENT" : "生产部署也是研究工具 · PRODUCTION AS RESEARCH INSTRUMENT"}</span></div><svg viewBox="0 0 760 570" role="img" aria-label={isEnglish ? "V4 Pro performs real agent work and contributes research signal to the next model" : "V4 Pro 完成真实智能体工作，产生执行轨迹和研究信号，并推动下一代模型"}>
    <defs><marker id="productionArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#8ec4d7"/></marker></defs>
    <path d="M380 70C570 70 695 190 695 285S570 505 380 505 65 410 65 285 190 70 380 70Z" fill="none" stroke="#53798a" strokeWidth="1.4" strokeDasharray="6 9" markerEnd="url(#productionArrow)"/>
    <circle cx="380" cy="285" r="105" fill="#0d1b23" stroke="#d8bd78" strokeOpacity=".8"/><circle cx="380" cy="285" r="83" fill="none" stroke="#d8bd78" strokeOpacity=".2" strokeDasharray="3 8"/>
    <text x="380" y="270" textAnchor="middle" className="production-core">{isEnglish ? "TRAJECTORY" : "轨迹产出率"}</text><text x="380" y="300" textAnchor="middle" className="production-core">{isEnglish ? "YIELD" : "TRAJECTORY YIELD"}</text><text x="380" y="327" textAnchor="middle" className="production-core__small">{isEnglish ? "WORK × SIGNAL / COST" : "工作 × 信号 / 成本"}</text>
    {nodes.map(([zh,en,x,y], index) => <g key={String(en)} className="production-node"><circle cx={Number(x)} cy={Number(y)} r="23"/><text x={Number(x)} y={Number(y)+4} textAnchor="middle">0{index+1}</text><text x={Number(x)} y={Number(y)+39} textAnchor="middle" className="production-node__label">{isEnglish ? en : zh}</text>{!isEnglish && <text x={Number(x)} y={Number(y)+53} textAnchor="middle" className="production-node__label diagram-aux">{en}</text>}</g>)}
    <text x="380" y="551" textAnchor="middle" className="production-disclaimer">{isEnglish ? "CONCEPT INTRODUCED HERE · NOT AN OFFICIAL DEEPSEEK METRIC" : "本文提出的概念 · 不是 DeepSeek 官方指标"}</text>
  </svg><figcaption>{isEnglish ? "A production model can be both a capability endpoint and a research instrument." : "生产模型既可以是能力终点，也可以成为研究工具。"}</figcaption></figure>;
}
