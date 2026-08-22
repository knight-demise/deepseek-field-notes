"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";

type TocItem = { id: string; label: string };

export function TableOfContents({ items, status, language = "zh" }: { items: readonly TocItem[]; status?: string; language?: "zh" | "en" }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const heading = language === "zh" ? "本文目录" : "ON THIS NOTE";
  const resolvedStatus = status ?? (language === "zh" ? "初始假说" : "INITIAL HYPOTHESIS");
  useEffect(() => {
    const elements = items.map((item) => document.getElementById(item.id)).filter((item): item is HTMLElement => Boolean(item));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]?.target.id) setActive(visible[0].target.id);
    }, { rootMargin: "-15% 0px -72% 0px", threshold: 0 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [items]);

  const closeMobileToc = (event: MouseEvent<HTMLAnchorElement>) => {
    const details = event.currentTarget.closest("details");
    const href = event.currentTarget.getAttribute("href");
    if (!details || !href?.startsWith("#")) return;

    event.preventDefault();
    details.removeAttribute("open");
    const target = document.getElementById(href.slice(1));
    window.setTimeout(() => {
      const top = target ? target.getBoundingClientRect().top + window.scrollY - 16 : window.scrollY;
      window.history.replaceState(null, "", href);
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, top);
      root.style.scrollBehavior = previousBehavior;
    }, 0);
  };

  const links = <ol>{items.map((item) => <li key={item.id} className={active === item.id ? "is-active" : ""}><a href={`#${item.id}`} onClick={closeMobileToc}><span aria-hidden="true" />{item.label}</a></li>)}</ol>;

  return <>
    <nav className="toc-desktop"><p>{heading}</p>{links}<div className="toc-status"><span /> <small>{resolvedStatus}</small></div></nav>
    <details className="toc-mobile"><summary>{heading} <span>{items.find((item) => item.id === active)?.label}</span></summary>{links}</details>
  </>;
}
