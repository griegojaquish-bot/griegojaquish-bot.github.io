export type Project = {
  slug: string;
  name: string;
  type: string;
  tag: string;
  image: string;
  product: string;
  productHref: string;
  overview: string;
  challenge: string;
  solution: string;
  highlights: string[];
  facts: [string, string][];
};

export const projects: Project[] = [
  {
    slug: "large-site-camp",
    name: "大型工地项目部",
    type: "大型工地项目",
    tag: "项目部办公 · 住宿与后勤配套",
    image: "/real-gallery/project-campus-aerial.png",
    product: "工地板房",
    productHref: "/products/site-office",
    overview: "面向大型施工项目部的办公、住宿、会议与后勤配套，按场地动线组织功能模块，形成清晰、可扩展的现场工作与生活空间。",
    challenge: "项目部功能多、人员规模变化快，办公、住宿、食堂和公共服务空间需要在有限场地内高效协同。",
    solution: "采用标准化模块组合，根据项目阶段分批交付，并预留后续扩容接口，让空间布局随施工进度灵活调整。",
    highlights: ["办公、住宿与后勤空间分区规划", "多栋模块化房屋组合布局", "道路、运动场与公共空间统筹", "支持分阶段建设与扩容"],
    facts: [["项目类型", "大型工地项目部"], ["主要产品", "工地板房 / 打包箱"], ["服务范围", "规划、供货、安装"], ["交付特点", "分阶段实施"]],
  },
  {
    slug: "industrial-park-office",
    name: "园区配套与公共空间",
    type: "园区公共空间",
    tag: "多功能配套 · 开放式公共场所",
    image: "/real-gallery/project-park-space.png",
    product: "集成房屋组合2",
    productHref: "/products/combination-2",
    overview: "面向园区与公共活动场景，组合办公、休闲、商业和服务单元，形成可步行、可运营的模块化公共空间。",
    challenge: "园区需要兼顾不同功能、动线和开放活动，同时保持建设周期短、后期维护和调整方便。",
    solution: "通过彩色模块、连廊、平台与公共节点组合，形成层次丰富的空间布局，支持分期建设与功能更新。",
    highlights: ["多单元组合与分区运营", "公共平台和连廊组织动线", "适合园区服务与活动配套", "模块可调整、可扩展"],
    facts: [["项目类型", "园区公共空间"], ["主要产品", "组合模块房屋"], ["空间组成", "服务 / 休闲 / 活动"], ["交付特点", "灵活组合"]],
  },
  {
    slug: "cultural-tourism-camp",
    name: "文旅营地与品质住宿",
    type: "文旅营地",
    tag: "品质住宿 · 可持续运营",
    image: "/real-gallery/project-tourism-camp.png",
    product: "豪华房",
    productHref: "/products/premium-house",
    overview: "面向文旅营地和特色住宿运营，以模块化方式交付具备完整卫浴、舒适保温和景观体验的住宿单元。",
    challenge: "既要降低现场施工对环境的影响，也要满足长期运营对外观、舒适度和维护便利性的要求。",
    solution: "工厂完成主体和主要内装，现场以吊装和接驳为主；通过落地玻璃、露台和景观布局强化住宿体验。",
    highlights: ["完整卫浴与机电系统", "保温、隔音和防水细节强化", "外立面与室内风格可定制", "适合营地分期建设"],
    facts: [["项目类型", "文旅住宿"], ["主要产品", "豪华模块房"], ["服务范围", "设计、制造、安装"], ["交付特点", "轻现场施工"]],
  },
  {
    slug: "municipal-logistics-camp",
    name: "施工现场案例",
    type: "施工配套",
    tag: "现场安装 · 快速形成使用空间",
    image: "/real-gallery/工地案例02.png",
    product: "工地板房",
    productHref: "/products/site-office",
    overview: "以施工现场的办公、住宿和后勤配套为核心，快速形成可使用、可扩展的项目服务空间。",
    challenge: "建设周期紧、运输批次多，需要在有限预算内快速形成完整的办公和生活保障能力。",
    solution: "采用标准化模块和清晰的现场安装流程，按功能分区组织运输、拼装和接驳，减少等待与返工。",
    highlights: ["现场快速安装与交付", "办公与生活功能分区", "标准节点便于批量配置", "支持后续扩建与调整"],
    facts: [["项目类型", "施工现场配套"], ["主要产品", "工地板房"], ["空间组成", "办公 / 住宿 / 后勤"], ["交付特点", "快速安装"]],
  },
  {
    slug: "temporary-showroom",
    name: "品牌展示与接待空间",
    type: "品牌展示",
    tag: "展示接待 · 定制化落地",
    image: "/real-gallery/project-brand-space.png",
    product: "集成房屋组合1",
    productHref: "/products/combination-1",
    overview: "为品牌展示、接待和园区活动打造可快速落地的模块化空间，兼顾展示效果、接待动线和后续运营。",
    challenge: "搭建周期短，但外观、采光、参观动线和品牌识别需要同时达到展示标准。",
    solution: "以模块化主体结合定制立面、玻璃开口和接待空间，工厂预制后现场快速拼接与调试。",
    highlights: ["品牌立面与色彩定制", "展示、洽谈与服务分区", "大面积玻璃提升通透感", "空间可迁移、可复用"],
    facts: [["项目类型", "品牌展示空间"], ["主要产品", "组合模块房屋"], ["空间组成", "展示 / 接待 / 服务"], ["交付特点", "形象定制"]],
  },
  {
    slug: "modular-office-project",
    name: "模块化办公项目",
    type: "模块化办公",
    tag: "标准模块 · 高效交付",
    image: "/real-gallery/工地案例01.png",
    product: "打包箱",
    productHref: "/products/flat-pack",
    overview: "以标准模块构成清晰、现代的办公空间，适合项目部、园区办公和临时办公等多种使用场景。",
    challenge: "项目需要快速投入使用，同时保持舒适采光、办公效率和后期调整的灵活性。",
    solution: "通过标准箱体组合、玻璃立面和统一机电预留，缩短现场施工时间并提高空间使用效率。",
    highlights: ["标准模块快速组合", "明亮通透的办公立面", "机电与网络接口预留", "后期可拆装和再利用"],
    facts: [["项目类型", "模块化办公"], ["主要产品", "打包箱"], ["空间组成", "办公 / 会议 / 接待"], ["交付特点", "快速启用"]],
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
