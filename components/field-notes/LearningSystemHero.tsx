import { HeroLearningSystemMap } from "@/components/diagrams/LearningSystemDiagrams";
import { fieldNote03, fieldNote03En } from "@/lib/content";

export function LearningSystemHero({ language = "zh" }: { language?: "zh" | "en" }) {
  const isEnglish = language === "en";
  const note = isEnglish ? fieldNote03En : fieldNote03;
  return <header className="article-hero article-hero--learning">
    <div className="article-hero__grid" aria-hidden="true" />
    <div className="article-hero__content">
      <div className="article-hero__copy">
        <div className="hero-kicker">{isEnglish ? <><span>FIELD NOTE {note.number}</span><span>ACTIVE HYPOTHESIS</span></> : <><span className="ui-bilingual"><b>研究笔记 {note.number}</b><small>FIELD NOTE {note.number}</small></span><span className="ui-bilingual"><b>持续验证中的假说</b><small>ACTIVE HYPOTHESIS</small></span></>}</div>
        {isEnglish ? <h1 className="learning-title learning-title--en">Centralized Substrate,<br /><em>Decentralized Search</em><small>DeepSeek&apos;s Nonlinear Dual Flywheel</small></h1> : <h1 className="learning-title">集中式底座，<br /><em>分布式搜索</em><small>DeepSeek 的非线性双飞轮</small></h1>}
        <p className="hero-subtitle">{note.subtitle}</p>
        <p className="learning-equation">{isEnglish ? <>MODEL <i>×</i> HARNESS <i>×</i> ECOSYSTEM</> : <>模型 <i>×</i> HARNESS <i>×</i> 生态<small>MODEL × HARNESS × ECOSYSTEM</small></>}</p>
        <div className="hero-meta">{isEnglish ? <><span>6–18 MONTH PREDICTION HORIZON</span><span>1–2 MAJOR MODEL GENERATIONS</span><span>FALSIFIABLE</span><span>{note.readingTime.toUpperCase()}</span></> : <><span className="ui-bilingual"><b>6–18 个月预测窗口</b><small>PREDICTION HORIZON</small></span><span className="ui-bilingual"><b>1–2 个主要模型代际</b><small>MAJOR MODEL GENERATIONS</small></span><span className="ui-bilingual"><b>可证伪</b><small>FALSIFIABLE</small></span><span className="ui-bilingual"><b>约 24 分钟</b><small>24 MIN READ</small></span></>}</div>
        <blockquote className="hero-thesis hero-thesis--learning">{isEnglish ? "The durable advantage may not be the strongest model at one moment, but a learning system that discovers failures, validates solutions, and turns verified experience into the next generation of capability at progressively lower cost." : "真正的竞争优势，可能不是谁拥有今天最强的一次模型，而是谁拥有一套能越来越快、越来越便宜地发现错误、验证答案，并把正确经验重新变成下一代能力的学习系统。"}</blockquote>
      </div>
      <div className="article-hero__diagram"><HeroLearningSystemMap language={language} /></div>
    </div>
    <div className="hero-scroll" aria-hidden="true"><span /> {isEnglish ? "EXPLORE → VERIFY → ABSORB → IMPROVE" : "探索 → 验证 → 吸纳 → 改进"}</div>
  </header>;
}
