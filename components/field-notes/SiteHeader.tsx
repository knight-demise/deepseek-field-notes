import Link from "next/link";

export function SiteHeader({ language = "zh", activeNote = "01" }: { language?: "zh" | "en"; activeNote?: "01" | "02" | "03" | "none" }) {
  const note01Href = `/${language}/field-notes/01-deepseek-harness`;
  const note02Href = `/${language}/field-notes/02-v4-pro-research-frontier`;
  const note03Href = `/${language}/field-notes/03-centralized-substrate-decentralized-search`;
  const altLanguage = language === "zh" ? "en" : "zh";
  const altHref = activeNote === "none"
    ? `/${altLanguage}/glossary`
    : activeNote === "01"
    ? `/${altLanguage}/field-notes/01-deepseek-harness`
    : activeNote === "02"
      ? `/${altLanguage}/field-notes/02-v4-pro-research-frontier`
      : `/${altLanguage}/field-notes/03-centralized-substrate-decentralized-search`;
  const navItems = [
    { number: "01", en: "Runtime", zh: "运行时架构", href: note01Href },
    { number: "02", en: "Research Frontier", zh: "研究前沿", href: note02Href },
    { number: "03", en: "Learning System", zh: "学习系统", href: note03Href },
  ] as const;
  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label={language === "zh" ? "DeepSeek Field Notes 首页" : "DeepSeek Field Notes home"}>
        <span className="wordmark__signal" aria-hidden="true" />
        DEEPSEEK FIELD NOTES
      </Link>
      <nav className="site-nav" aria-label={language === "zh" ? "主导航" : "Primary navigation"}>
        {navItems.map((item) => <Link className={activeNote === item.number ? "site-nav__active" : undefined} href={item.href} key={item.number}>
          <span className="site-nav__number">{item.number}</span><span className="site-nav__labels">{language === "zh" && <small>{item.en}</small>}<b>{language === "zh" ? item.zh : item.en}</b></span>
        </Link>)}
        <Link className="language-switch" href={altHref}>{language === "zh" ? "EN" : "中文"}</Link>
      </nav>
    </header>
  );
}
