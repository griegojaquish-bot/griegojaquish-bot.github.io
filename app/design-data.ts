export type ProcessStep = { title: string; text: string };
export type Service = {
  number: string; slug: string; title: string; image: string; summary: string;
  deliverables: string[]; audience: string[]; inputs: string[]; process: ProcessStep[];
  boundary: string; cta: string; caseSlugs: string[];
};
export type DesignCase = { slug: string; image: string; title: string; tag: string; summary: string; focus: string[]; };

export const services: Service[] = [
  {
    number: "01", slug: "drawing-expression", title: "方案设计与图纸表达", image: "/tekla/tekla-project-visual.jpg", summary: "将项目需求转化为用于沟通、确认与施工参考的图纸表达。",
    audience: ["需要把想法讲清楚的项目负责人", "需要进行方案沟通与节点确认的团队", "已有初步资料、需要整理成图纸表达的项目"],
    inputs: ["已有平面、草图、照片或参考资料", "项目用途、尺寸与关键需求", "已明确的结构或专业条件（如有）"],
    process: [{ title: "资料与目标", text: "先确认项目用途、沟通对象、图纸深度和需要解决的问题。" }, { title: "表达与核对", text: "组织平面、立面、剖面和节点信息，形成可讨论的图纸。" }, { title: "确认与整理", text: "按反馈调整重点内容，整理本阶段可交付图纸。" }],
    deliverables: ["平面、立面与剖面表达", "节点与构造示意", "方案沟通图", "施工参考图纸整理"], boundary: "本服务用于方案表达和沟通支持；最终结构计算、施工图审查及现场技术决策应由具备相应资质的专业人员确认。", cta: "发来现有资料，先确认图纸表达范围", caseSlugs: ["landscape-structure", "brand-space", "colourful-pavilion"]
  },
  {
    number: "02", slug: "tekla-modeling", title: "Tekla 三维建模", image: "/tekla/tekla-stair-detail.jpg", summary: "依据结构资料建立三维模型，用于构件组织、节点复核及深化协调。",
    audience: ["需要将二维资料转为三维模型的项目团队", "需要核对构件、节点和装配关系的加工或施工团队", "需要模型辅助深化协调的设计单位"],
    inputs: ["结构图、建筑图或已确认的技术资料", "构件截面、材料、连接及规范要求（如有）", "模型用途、交付格式和计划节点"],
    process: [{ title: "资料校核", text: "核对图纸版本、建模范围与关键构件关系。" }, { title: "建立模型", text: "完成钢框架、构件、板件及相关节点的三维组织。" }, { title: "复核与输出", text: "按约定范围复核模型，输出用于协调或后续深化的资料。" }],
    deliverables: ["钢框架与构件建模", "节点及连接关系梳理", "模型复核支持", "构件与装配组织"], boundary: "模型以客户提供或确认的资料为依据；连接设计、荷载计算和最终工程责任不替代原设计单位及相关专业确认。", cta: "发来结构资料，先确认建模范围", caseSlugs: ["curved-stair", "curved-model", "roof-model"]
  },
  {
    number: "03", slug: "shop-drawings", title: "详图深化与加工图", image: "/tekla/tekla-drawing.jpg", summary: "整理构件、装配和材料信息，服务车间加工与现场安装沟通。",
    audience: ["需要构件图、装配图和材料信息的加工单位", "需要深化图纸协助现场安装沟通的项目团队", "已有结构资料、需要统一图纸版本与构件组织的项目"],
    inputs: ["已确认的设计图、模型或结构资料", "加工、安装顺序及图纸标准要求", "材料、连接和项目版本信息"],
    process: [{ title: "接收资料", text: "核对工程图、模型、版本要求和加工安装计划。" }, { title: "深化整理", text: "组织构件、装配、节点、材料和必要的图纸说明。" }, { title: "出图与沟通", text: "按确认范围提供图纸包，并支持版本与问题沟通。" }],
    deliverables: ["构件图与装配图", "材料与螺栓信息", "图纸版本整理", "加工及安装沟通支持"], boundary: "图纸服务以已确认的设计资料为基础；加工前应由项目相关方复核图纸、材料和现场条件，最终执行以项目确认版本为准。", cta: "发来图纸或模型，先确认深化与出图范围", caseSlugs: ["landscape-bridge-drawing", "steel-site-reference", "curved-stair"]
  },
  {
    number: "04", slug: "ai-fde", title: "AI FDE 客户协同", image: "/tekla/tekla-bridge-model.jpg", summary: "AI FDE 是 AI Forward Deployed Engineer（AI 现场部署工程师）：不限定行业，在真实客户场景中梳理任务、验证方案并推动交付落地。",
    audience: ["有客户咨询、资料整理或报价交付等重复任务的团队", "希望从一个真实业务场景开始使用 AI 的企业", "需要保留人工复核、逐步验证 AI 工作方式的负责人"],
    inputs: ["一个最费时间或最容易遗漏的真实任务", "现有资料、流程和使用人员的基本情况", "希望改善的结果及必要的人工把关要求"],
    process: [{ title: "选定任务", text: "从一个真实客户任务开始，明确目标、资料和当前卡点。" }, { title: "试运行验证", text: "让 AI 参与合适环节，用真实任务检验结果并保留人工复核。" }, { title: "纳入流程", text: "把有效的方法整理为团队可持续使用的工作方式。" }],
    deliverables: ["客户任务与资料梳理", "AI 辅助方案验证", "交付过程协同", "反馈与持续优化"], boundary: "AI 用于辅助整理、归纳和协同；涉及专业判断、合同承诺、工程安全或对外发布的内容，仍需由客户和相应专业人员审核确认。", cta: "发一个最费时间的真实任务，先判断是否适合 AI FDE", caseSlugs: ["steel-site-reference", "landscape-bridge-drawing", "roof-model"]
  },
];

export const designCases: DesignCase[] = [
  { slug: "landscape-structure", image: "/tekla/tekla-project-visual.jpg", title: "异形景观结构", tag: "方案形体与结构表达", summary: "以曲线空间为线索，将设计效果、结构受力与构造表达纳入同一沟通体系。", focus: ["曲线空间形体", "结构表达", "构造沟通"] },
  { slug: "curved-stair", image: "/tekla/tekla-stair-detail.jpg", title: "曲线楼梯深化", tag: "Tekla 三维建模与节点协调", summary: "针对曲线踏步、平台连接与构件关系，建立可复核的三维深化表达。", focus: ["曲线踏步", "平台节点", "构件关系"] },
  { slug: "landscape-bridge-drawing", image: "/tekla/tekla-drawing.jpg", title: "景观桥工程图", tag: "结构详图与图纸协同", summary: "把复杂形体转化为清晰的构件、节点和安装信息，便于项目各方核对。", focus: ["工程图表达", "节点信息", "安装核对"] },
  { slug: "steel-site-reference", image: "/tekla/tekla-steel-frame.jpg", title: "钢结构现场参考", tag: "设计与现场衔接", summary: "从图纸阶段关注构件组织、加工条件和安装逻辑，让深化更贴近实际。", focus: ["构件组织", "加工条件", "安装逻辑"] },
  { slug: "curved-model", image: "/tekla/tekla-bridge-model.jpg", title: "弧形结构模型", tag: "复杂曲线构件建模", summary: "通过三维模型梳理弧形构件、支撑与连接关系，为后续深化表达提供基础。", focus: ["曲线构件", "支撑体系", "连接关系"] },
  { slug: "roof-model", image: "/tekla/tekla-roof-model.jpg", title: "钢屋架模型", tag: "屋盖结构构件组织", summary: "以模型展示屋盖构件布置与整体关系，便于复核构件组织和深化范围。", focus: ["屋盖布置", "构件编号", "整体关系"] },
  { slug: "brand-space", image: "/real-gallery/project-brand-space.png", title: "品牌空间组合", tag: "项目空间参考", summary: "用于展示多层组合、悬挑支撑与立面表达等空间组织方向。", focus: ["多层组合", "悬挑支撑", "立面表达"] },
  { slug: "park-space", image: "/real-gallery/project-park-space.png", title: "园区公共空间", tag: "项目空间参考", summary: "用于展示园区尺度下的模块组合、动线与多层空间层次。", focus: ["模块组合", "园区动线", "空间层次"] },
  { slug: "tourism-camp", image: "/real-gallery/project-tourism-camp.png", title: "文旅营地空间", tag: "项目空间参考", summary: "用于展示营地单元、公共空间及不同建筑形体的组合关系。", focus: ["营地单元", "公共空间", "形体组合"] },
  { slug: "site-camp-layout", image: "/real-gallery/project-campus-aerial.png", title: "大型营地布局", tag: "项目空间参考", summary: "用于展示成组单元、功能分区和总体布局的空间组织方向。", focus: ["功能分区", "成组单元", "总体布局"] },
  { slug: "colourful-pavilion", image: "/project-colourful-pavilion.jpg", title: "彩色公共空间", tag: "项目空间参考", summary: "用于展示色彩、体块与公共活动界面的方案表达方向。", focus: ["色彩策略", "体块关系", "公共界面"] },
  { slug: "cube-office", image: "/project-cube-office.png", title: "模块办公单元", tag: "项目空间参考", summary: "用于展示标准单元组合、外立面与使用空间的表达方向。", focus: ["单元组合", "外立面", "使用空间"] },
  { slug: "mountain-valley-camp", image: "/project-mountain-valley-camp.jpg", title: "山谷营地空间", tag: "项目空间参考", summary: "用于展示自然场地中的营地单元、公共空间及不同建筑形体的组合关系。", focus: ["场地关系", "营地单元", "公共活动空间"] },
];
