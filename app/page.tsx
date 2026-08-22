import Link from "next/link";

export default function Home() {
  return (
    <main className="gateway">
      <div className="gateway__mark" aria-hidden="true">DFN / 03</div>
      <p className="eyebrow">DEEPSEEK FIELD NOTES</p>
      <h1>Independent research on<br />Model × Harness × Ecosystem.</h1>
      <p className="gateway__copy">三篇研究笔记现已提供完整中英文版本：从开放 Agent Runtime、模型研发的 Search Economics，一路推进到 Model × Harness × Ecosystem 学习系统。</p>
      <div className="gateway__notes">
        <Link href="/zh/field-notes/01-deepseek-harness"><span>01 · RUNTIME</span><strong>DeepSeek Harness 可能远不只是一个 Coding Agent</strong><small>中文 / English available</small></Link>
        <Link href="/zh/field-notes/02-v4-pro-research-frontier"><span>02 · RESEARCH FRONTIER</span><strong>V4 Pro 或许从来就不是主战场</strong><small>中文 / English available</small></Link>
        <Link href="/zh/field-notes/03-centralized-substrate-decentralized-search"><span>03 · LEARNING SYSTEM</span><strong>集中式底座，分布式搜索</strong><small>中文 / English available</small></Link>
      </div>
      <div className="gateway__actions">
        <Link className="button-primary" href="/zh/field-notes/03-centralized-substrate-decentralized-search">阅读最新 Field Note</Link>
        <Link className="button-quiet" href="/en/field-notes/03-centralized-substrate-decentralized-search">Read in English</Link>
      </div>
    </main>
  );
}
