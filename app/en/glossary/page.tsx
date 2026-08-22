import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/field-notes/SiteHeader";
import { fieldNotesGlossary } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Glossary",
  description: "The shared English–Chinese terminology used across DeepSeek Field Notes.",
  alternates: { canonical: "/en/glossary", languages: { en: "/en/glossary", "zh-CN": "/zh/glossary" } },
};

const notesEn: Record<string, string> = {
  Harness: "The execution framework around an agent; retained in English after its first bilingual definition.",
  Runtime: "The system layer that hosts models, tools, sessions, sandboxes, and execution loops.",
  Agent: "An AI system that acts through tools and feedback; later rendered as 智能体 in Chinese prose.",
  Capability: "A task-performing ability that can be verified, composed, and reused.",
  "Capability Production": "The process of turning a local solution into a reusable capability.",
  "Capability Reuse": "Using one validated capability across tasks, teams, or model conditions.",
  Trajectory: "An execution record containing actions, feedback, outcomes, and attribution evidence.",
  "Trajectory Yield": "A conceptual objective introduced in Note 02, not an official DeepSeek metric.",
  Substrate: "The foundational layer spanning models, compute, training, protocols, and runtime.",
  "Centralized Substrate": "A substrate in which scarce resources and core systems are centrally allocated.",
  "Decentralized Search": "Parallel, distributed exploration; deliberately translated as 分布式搜索, not 去中心化搜索.",
  "Selective Absorption": "Moving only verified, transferable mechanisms into the core substrate.",
  Verification: "The control process that separates candidate solutions from trusted knowledge.",
  "Independent Verification": "Validation under independent tasks, environments, models, or evaluation conditions.",
  Flywheel: "A positive feedback mechanism in which one round lowers the cost of the next search.",
  "Learning Cycle Time": "The time required to turn one real failure into a system-level improvement.",
  "Cost per Validated Capability": "Total cost required to produce one verified, reusable capability.",
  "Model Dividend": "The improvement a new model generation delivers to the existing ecosystem.",
  "Zero-Retuning Delta": "The gain obtained by swapping the model while freezing all other conditions.",
  "Production Frontier": "The boundary of capabilities reliable enough for real production deployment.",
  "Research Frontier": "The boundary where experiments seek methods and capabilities for the next generation.",
  "Search Economics": "The relationship among experiment throughput, signal quality, verification cost, and transfer.",
};

export default function EnglishGlossaryPage() {
  return (
    <><SiteHeader language="en" activeNote="none" /><main className="glossary-page" lang="en">
      <header className="glossary-hero">
        <p className="eyebrow">SHARED LANGUAGE · 中英术语规范</p>
        <h1>Glossary</h1>
        <p>One terminology system is used across all three Field Notes. English remains primary here; the Chinese equivalent records how each concept appears in the Chinese edition.</p>
      </header>
      <section className="glossary-grid glossary-grid--en" aria-label="Technical terminology">
        {fieldNotesGlossary.map((entry) => <article key={entry.term}>
          <div><h2>{entry.term}</h2><span>{entry.chinese}</span></div>
          <p><strong>CHINESE FIRST USE</strong>{entry.firstUse}</p>
          <small>{notesEn[entry.term]}</small>
        </article>)}
      </section>
      <Link className="glossary-back" href="/en/field-notes/03-centralized-substrate-decentralized-search">← Back to Field Notes</Link>
    </main></>
  );
}
