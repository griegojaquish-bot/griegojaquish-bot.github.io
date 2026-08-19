import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { designCases, services } from "../../design-data";

const aiScenes = [
  ["客服与售后", "常见问题、工单分流、历史记录与人工接管，减少重复回复。", "咨询 → 识别 → 回答 → 人工复核"],
  ["销售与线索", "整理客户需求、辅助方案草拟、报价资料准备与跟进提醒。", "线索 → 摘要 → 方案 → 跟进"],
  ["资料与知识库", "把制度、产品、项目和会议资料变成可检索、可更新的知识。", "收集 → 分类 → 检索 → 更新"],
  ["网站与小程序", "承接服务展示、需求提交、附件上传、人工报价和后台待办。", "访问 → 提交 → 报价 → 进度"],
  ["运营与交付", "连接任务、节点、清单与反馈，关键结果始终保留人工确认。", "接收 → AI 辅助 → 审核 → 交付"],
  ["工程图文", "图纸说明、变更记录和交付资料只是其中一种可应用场景。", "资料 → 整理 → 核对 → 输出"],
];

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return service ? { title: service.title, description: service.summary, alternates: { canonical: `/services/${slug}` }, openGraph: { title: `${service.title}｜山江设计与智能应用`, description: service.summary, images: [service.image] } } : {};
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const isAiFde = service.slug === "ai-fde";
  const relatedCases = service.caseSlugs.map((caseSlug) => designCases.find((item) => item.slug === caseSlug)).filter(Boolean);

  return <main className="designDetail">
    <header><a href={isAiFde ? "/ai-applications" : "/design-detailing"}>← 返回{isAiFde ? "AI 应用" : "设计深化"}</a><a className="detailCta" href={`${isAiFde ? "/ai-applications" : "/design-detailing"}#contact`}>提交需求 →</a></header>
    <section className={`serviceHero ${isAiFde ? "aiServiceHero" : ""}`}><div><p>SERVICE / {service.number}</p><h1>{service.title}</h1><span>{service.summary}</span><a href="#start" className="serviceHeroCta">查看怎么开始 ↓</a></div>{isAiFde ? <div className="aiServiceMap" aria-label="AI 连接客服、销售、资料、网站小程序、运营交付与工程图文"><b>AI<br />AGENT</b>{["客服", "销售", "资料", "网站 / 小程序", "运营", "工程图文"].map((item) => <span key={item}>{item}</span>)}</div> : <img src={service.image} alt={`${service.title}服务示意`} />}</section>
    {isAiFde && <section className="aiFdeDetail">
      <p className="detailKicker">AI FDE EXPLAINED</p><h2>AI FDE 是什么？<br /><em>不是单独卖 AI 工具。</em></h2>
      <p><b>AI FDE</b> 是 <b>AI Forward Deployed Engineer</b> 的简称，可理解为“AI 现场部署工程师”。它不分行业：只要存在真实客户、明确或待梳理的业务任务，以及希望达成的交付目标，就可以采用这种协同方式。核心不是先做演示，而是在客户实际场景中把需求拆成可执行任务，确定 AI 能参与的环节，验证结果，并让它进入日常工作流程。</p>
      <div className="aiFdeVideo"><div><small>AI FDE / ALL INDUSTRIES</small><h3>用约 1 分钟看懂全行业 AI FDE</h3><p>新视频用客服、销售、知识库、网站、小程序和运营交付场景说明 AI 怎样进入真实业务；钢结构仅是工程图文场景之一。</p></div><video controls playsInline preload="none" poster="/ai-fde-all-industries-poster.webp" aria-label="面向所有行业的 AI FDE 中文说明视频"><source media="(max-width: 850px)" src="/ai-fde-all-industries-mobile.mp4" type="video/mp4" /><source src="/ai-fde-all-industries.mp4" type="video/mp4" />你的浏览器暂不支持视频播放。</video></div>
      <div className="aiFdeCompare"><div><small>不是</small><b>只演示 AI 能生成什么</b></div><div><small>而是</small><b>让 AI 在真实客户流程中产生可核对的帮助</b></div></div>
    </section>}
    <section className="serviceFit" id="start"><div><p className="detailKicker">WHO THIS IS FOR</p><h2>先判断，<em>是否适合你的项目。</em></h2></div><ul>{service.audience.map((item, index) => <li key={item}><b>0{index + 1}</b><span>{item}</span></li>)}</ul></section>
    <section className="serviceStart"><div><p className="detailKicker">START WITH WHAT YOU HAVE</p><h2>不用资料齐全，<em>先发已有内容。</em></h2></div><div><p>下面任意一类资料都可以作为开始。我们先看范围，再确认适合的工作方式。</p><ul>{service.inputs.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
    <section className="serviceProcess"><p className="detailKicker">HOW WE WORK</p><h2>从资料到交付，<em>每一步都可核对。</em></h2><div>{service.process.map((step, index) => <article key={step.title}><b>0{index + 1}</b><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>
    <section className="detailBody"><div><p className="detailKicker">DELIVERABLES</p><h2>按项目范围，<em>人工确认交付内容。</em></h2></div><ul>{service.deliverables.map((item, index) => <li key={item}><b>0{index + 1}</b><span>{item}</span></li>)}</ul></section>
    {isAiFde ? <section className="aiIndustryScenes"><div><p className="detailKicker">CROSS-INDUSTRY SCENARIOS</p><h2>不是一种行业，<br /><em>而是六类真实任务。</em></h2><span>优先从重复频率高、资料来源明确、结果可以人工核对的任务开始。</span></div><div className="aiIndustryGrid">{aiScenes.map((item, index) => <article key={item[0]}><b>0{index + 1}</b><h3>{item[0]}</h3><p>{item[1]}</p><small>{item[2]}</small></article>)}</div></section> : <section className="serviceCases"><div><p className="detailKicker">RELATED WORK</p><h2>从案例里看，<em>我们怎样把事做清楚。</em></h2></div><div className="serviceCaseGrid">{relatedCases.map((item) => item && <a href={`/cases/${item.slug}`} key={item.slug}><img src={item.image} alt={item.title} /><small>{item.tag}</small><h3>{item.title}</h3><p>{item.summary}</p><span>查看案例 →</span></a>)}</div></section>}
    <section className="serviceBoundary"><p className="detailKicker">REVIEW & RESPONSIBILITY</p><h2>我们做支持，<em>关键决定要确认。</em></h2><p>{service.boundary}</p></section>
    <section className="detailContact"><p>开始合作</p><h2>{service.cta}</h2><a href={`${isAiFde ? "/ai-applications" : "/design-detailing"}#contact`}>提交项目需求 →</a></section>
  </main>;
}
