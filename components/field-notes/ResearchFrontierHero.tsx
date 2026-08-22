import { SearchEconomicsDiagram } from "@/components/diagrams/SearchEconomicsDiagram";
import { fieldNote02, fieldNote02En } from "@/lib/content";

export function ResearchFrontierHero({ language = "zh" }: { language?: "zh" | "en" }) {
  const note = language === "zh" ? fieldNote02 : fieldNote02En;
  const isEnglish = language === "en";

  return (
    <header className="article-hero article-hero--frontier">
      <div className="article-hero__grid" aria-hidden="true" />
      <div className="article-hero__content">
        <div className="article-hero__copy">
          <div className="hero-kicker">{isEnglish ? <><span>FIELD NOTE {note.number}</span><span>{note.series}</span></> : <><span className="ui-bilingual"><b>研究笔记 {note.number}</b><small>FIELD NOTE {note.number}</small></span><span className="ui-bilingual"><b>研究前沿</b><small>RESEARCH FRONTIER</small></span></>}</div>
          {isEnglish ? (
            <h1 className="frontier-title frontier-title--en">V4 Pro<br /><span>May Never Have Been</span><br /><em>the Main Battlefield</em></h1>
          ) : (
            <h1 className="frontier-title"><span>V4 Pro</span><br />或许从来就不是<br /><em>主战场</em></h1>
          )}
          <p className="hero-subtitle">{note.subtitle}</p>
          <div className="hero-meta" aria-label={isEnglish ? "Article metadata" : "文章元数据"}>{isEnglish ? <><span>PARTIALLY REVISED HYPOTHESIS</span><span>AUGUST 2026</span><span>INDEPENDENT ANALYSIS</span><span>{note.readingTime.toUpperCase()}</span></> : <><span className="ui-bilingual"><b>部分修订假说</b><small>PARTIALLY REVISED HYPOTHESIS</small></span><span className="ui-bilingual"><b>2026 年 8 月</b><small>AUGUST 2026</small></span><span className="ui-bilingual"><b>独立分析</b><small>INDEPENDENT ANALYSIS</small></span><span className="ui-bilingual"><b>约 18 分钟</b><small>18 MIN READ</small></span></>}</div>
          <blockquote className="hero-thesis hero-thesis--frontier">{isEnglish
            ? "The scarce resource may not be raw compute alone, but how many wrong research paths a lab can eliminate per unit of compute — and how much signal production work returns to the next model."
            : "真正稀缺的可能不只是算力，而是单位算力能排除多少错误路线，以及生产模型能为下一代研发返回多少有效信号。"}</blockquote>
        </div>
        <div className="article-hero__diagram"><SearchEconomicsDiagram language={language} /></div>
      </div>
      <div className="hero-scroll" aria-hidden="true"><span /> {isEnglish ? "TRACE SEARCH → SCALE → WORK → LEARN" : "追踪：搜索 → 扩展 → 工作 → 学习"}</div>
    </header>
  );
}
