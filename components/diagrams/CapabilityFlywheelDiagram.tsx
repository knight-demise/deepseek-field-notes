export function CapabilityFlywheelDiagram({ language = "zh" }: { language?: "zh" | "en" }) {
  const isEnglish = language === "en";
  const labels = [
    ["更多开发者","MORE DEVELOPERS",320,54],["更宽的搜索空间","WIDER SEARCH",530,168],["可复用能力","REUSABLE CAPABILITY",500,390],["更低边际成本","LOWER MARGINAL COST",150,408],["更低进入门槛","EASIER ENTRY",70,178]
  ];
  return <figure className="technical-figure"><div className="technical-figure__label"><span>{isEnglish ? "FIGURE 02" : "图 02 · FIGURE 02"}</span><span>{isEnglish ? "CAPABILITY FLYWHEEL" : "能力飞轮 · CAPABILITY FLYWHEEL"}</span></div><svg className="flywheel-svg" viewBox="0 0 640 500" role="img" aria-label="能力飞轮：更多开发者、更宽搜索、可复用能力、更低边际成本与更低进入门槛">
    <defs><marker id="arrowFlywheel" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#6fc9f2"/></marker></defs>
    <circle cx="320" cy="250" r="158" fill="none" stroke="#33566b" strokeWidth="1" strokeDasharray="2 9"/>
    <path d="M320 91C455 91 548 168 548 250S456 417 320 417 92 337 92 250 185 91 320 91Z" fill="none" stroke="#6fc9f2" strokeOpacity=".5" strokeWidth="2" markerEnd="url(#arrowFlywheel)"/>
    <circle cx="320" cy="250" r="84" fill="#0b1924" stroke="#6fc9f2" strokeOpacity=".5"/><text x="320" y="236" textAnchor="middle" className="flywheel-core">{isEnglish ? "CAPABILITY" : "能力生产"}</text><text x="320" y="263" textAnchor="middle" className="flywheel-core">{isEnglish ? "PRODUCTION" : "CAPABILITY PRODUCTION"}</text><text x="320" y="290" textAnchor="middle" className="flywheel-small">RUNTIME × ECOSYSTEM</text>
    {labels.map(([zh,en,x,y],i)=><g key={String(en)} className="flywheel-label"><circle cx={Number(x)} cy={Number(y)} r="17"/><text x={Number(x)} y={Number(y)+4} textAnchor="middle">0{i+1}</text><text className="flywheel-label__title" x={Number(x)} y={Number(y)+34} textAnchor="middle">{isEnglish ? en : zh}</text>{!isEnglish && <text className="diagram-aux flywheel-label__aux" x={Number(x)} y={Number(y)+50} textAnchor="middle">{en}</text>}</g>)}
  </svg><figcaption>{isEnglish ? "Distributed innovation × capability reuse × cost compression" : "分布式创新 × 能力复用 × 成本压缩"}</figcaption></figure>;
}
