export type GlossaryEntry = {
  term: string;
  chinese: string;
  firstUse: string;
  note: string;
};

export const fieldNotesGlossary: readonly GlossaryEntry[] = [
  { term: "Harness", chinese: "智能体运行框架", firstUse: "Harness（智能体运行框架）", note: "后文保留 Harness，避免与单一工具或界面混淆。" },
  { term: "Runtime", chinese: "运行时", firstUse: "Runtime（运行时）", note: "承载模型、工具、会话、沙箱与执行循环的系统层。" },
  { term: "Agent", chinese: "智能体", firstUse: "Agent（智能体）", note: "中文正文后续优先使用“智能体”。" },
  { term: "Capability", chinese: "能力", firstUse: "Capability（能力）", note: "可被验证、组合和复用的任务完成能力。" },
  { term: "Capability Production", chinese: "能力生产", firstUse: "能力生产（Capability Production）", note: "把局部解法变成可复用能力的过程。" },
  { term: "Capability Reuse", chinese: "能力复用", firstUse: "能力复用（Capability Reuse）", note: "同一能力跨任务、团队或模型条件重复使用。" },
  { term: "Trajectory", chinese: "执行轨迹", firstUse: "智能体执行轨迹（Trajectory）", note: "包含行动、反馈、成功、失败与归因信息的执行记录。" },
  { term: "Trajectory Yield", chinese: "轨迹产出率", firstUse: "轨迹产出率（Trajectory Yield）", note: "本文提出的概念性目标，不是 DeepSeek 官方指标。" },
  { term: "Substrate", chinese: "底座", firstUse: "Substrate（底座）", note: "模型、算力、训练、协议与运行时共同构成的基础层。" },
  { term: "Centralized Substrate", chinese: "集中式底座", firstUse: "集中式底座（Centralized Substrate）", note: "稀缺资源与核心系统由中心组织配置。" },
  { term: "Decentralized Search", chinese: "分布式搜索", firstUse: "分布式搜索（Decentralized Search）", note: "指并行、分散的探索，不译作“去中心化搜索”。" },
  { term: "Selective Absorption", chinese: "选择性吸纳", firstUse: "选择性吸纳（Selective Absorption）", note: "只把通过验证且可迁移的机制吸收到核心底座。" },
  { term: "Verification", chinese: "验证", firstUse: "验证（Verification）", note: "区分候选解法与可信知识的控制环节。" },
  { term: "Independent Verification", chinese: "独立验证", firstUse: "独立验证（Independent Verification）", note: "由独立任务、环境或评估确认迁移与可靠性。" },
  { term: "Flywheel", chinese: "飞轮", firstUse: "飞轮（Flywheel）", note: "收益会降低下一轮搜索成本的正反馈机制。" },
  { term: "Learning Cycle Time", chinese: "学习周期", firstUse: "学习周期（Learning Cycle Time）", note: "从一次真实失败到系统性改进所需的时间。" },
  { term: "Cost per Validated Capability", chinese: "单位验证能力成本", firstUse: "单位验证能力成本（Cost per Validated Capability）", note: "每获得一个通过验证的可复用能力所付出的总成本。" },
  { term: "Model Dividend", chinese: "模型升级红利", firstUse: "模型升级红利（Model Dividend）", note: "模型升级为既有生态带来的能力增益。" },
  { term: "Zero-Retuning Delta", chinese: "零调参迁移增益", firstUse: "零调参迁移增益（Zero-Retuning Delta）", note: "冻结其余条件，仅替换模型后获得的净增益。" },
  { term: "Production Frontier", chinese: "生产部署前沿", firstUse: "生产部署前沿（Production Frontier）", note: "当前能够稳定投入真实工作的能力边界。" },
  { term: "Research Frontier", chinese: "研究前沿", firstUse: "研究前沿（Research Frontier）", note: "通过新方法与实验寻找下一代能力的边界。" },
  { term: "Search Economics", chinese: "搜索经济学", firstUse: "搜索经济学（Search Economics）", note: "研究实验吞吐、信号质量、验证成本与迁移收益的关系。" },
] as const;
