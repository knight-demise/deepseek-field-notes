import { RuntimeEvolutionDiagram } from "@/components/diagrams/RuntimeEvolutionDiagram";
import { fieldNote01, fieldNote01En } from "@/lib/content";

export function ArticleHero({ language = "zh" }: { language?: "zh" | "en" }) {
  const note = language === "zh" ? fieldNote01 : fieldNote01En;
  const isEnglish = language === "en";
  return (
    <header className="article-hero">
      <div className="article-hero__grid" aria-hidden="true" />
      <div className="article-hero__content">
        <div className="article-hero__copy">
          <div className="hero-kicker">{isEnglish ? <><span>FIELD NOTE {note.number}</span><span>{note.series}</span></> : <><span className="ui-bilingual"><b>研究笔记 {note.number}</b><small>FIELD NOTE {note.number}</small></span><span className="ui-bilingual"><b>运行时架构</b><small>RUNTIME</small></span></>}</div>
          {isEnglish ? (
            <h1 className="hero-title--en">DeepSeek Harness<br /><span>May Be More Than</span><br /><em>a Coding Agent</em></h1>
          ) : (
            <h1>DeepSeek Harness<br /><span>可能远不只是一个</span><br /><em>Coding Agent</em></h1>
          )}
          <p className="hero-subtitle">{note.subtitle}</p>
          <div className="hero-meta" aria-label={isEnglish ? "Article metadata" : "文章元数据"}>{isEnglish ? <><span>INITIAL HYPOTHESIS</span><span>AUGUST 2026</span><span>INDEPENDENT ANALYSIS</span><span>{note.readingTime.toUpperCase()}</span></> : <><span className="ui-bilingual"><b>初始假说</b><small>INITIAL HYPOTHESIS</small></span><span className="ui-bilingual"><b>2026 年 8 月</b><small>AUGUST 2026</small></span><span className="ui-bilingual"><b>独立分析</b><small>INDEPENDENT ANALYSIS</small></span><span className="ui-bilingual"><b>约 15 分钟</b><small>15 MIN READ</small></span></>}</div>
          <blockquote className="hero-thesis">{isEnglish
            ? "What DeepSeek may be opening is not merely a Coding Agent, but a Runtime in which an entire ecosystem can continuously produce, compose, and reuse Agent capabilities."
            : "DeepSeek 可能开放的并不只是一个编程智能体，而是一层允许整个生态持续生产、组合和复用智能体能力的运行时。"}</blockquote>
        </div>
        <div className="article-hero__diagram"><RuntimeEvolutionDiagram language={language} /></div>
      </div>
      <div className="hero-scroll" aria-hidden="true"><span /> {isEnglish ? "SCROLL TO TRACE THE ARGUMENT" : "向下阅读完整论证"}</div>
    </header>
  );
}
