import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { designCases, services } from "../../design-data";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return service ? { title: service.title, description: service.summary, alternates: { canonical: `/services/${slug}` }, openGraph: { title: `${service.title}｜山江设计服务`, description: service.summary, images: [service.image] } } : {};
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const isAiFde = service.slug === "ai-fde";
  const relatedCases = service.caseSlugs.map((caseSlug) => designCases.find((item) => item.slug === caseSlug)).filter(Boolean);

  return <main className="designDetail">
    <header><a href={isAiFde ? "/ai-applications" : "/design-detailing"}>← 返回{isAiFde ? "AI 应用" : "设计深化"}</a><a className="detailCta" href={`${isAiFde ? "/ai-applications" : "/design-detailing"}#contact`}>提交需求 →</a></header>
    <section className="serviceHero"><div><p>SERVICE / {service.number}</p><h1>{service.title}</h1><span>{service.summary}</span><a href="#start" className="serviceHeroCta">查看怎么开始 ↓</a></div><img src={service.image} alt={`${service.title}服务示意`} /></section>
    {isAiFde && <section className="aiFdeDetail">
      <p className="detailKicker">AI FDE EXPLAINED</p><h2>AI FDE 是什么？<br /><em>不是单独卖 AI 工具。</em></h2>
      <p><b>AI FDE</b> 是 <b>AI Forward Deployed Engineer</b> 的简称，可理解为“AI 现场部署工程师”。它不分行业：只要存在真实客户、明确或待梳理的业务任务，以及希望达成的交付目标，就可以采用这种协同方式。核心不是先做演示，而是在客户实际场景中把需求拆成可执行任务，确定 AI 能参与的环节，验证结果，并让它进入日常工作流程。</p>
      <div className="aiFdeVideo"><div><small>AI FDE / ALL INDUSTRIES</small><h3>用约 1 分钟看懂全行业 AI FDE</h3><p>视频面向制造、贸易、零售、专业服务、文旅、教育等所有行业，说明怎样从真实客户任务开始。</p></div><video controls playsInline preload="none" poster="/shanjiang-intro-poster.webp" aria-label="面向所有行业的 AI FDE 中文说明视频"><source media="(max-width: 850px)" src="/ai-fde-explainer-mobile-fast-v5.mp4" type="video/mp4" /><source src="/ai-fde-explainer-v4.mp4" type="video/mp4" />你的浏览器暂不支持视频播放。</video></div>
      <div className="aiFdeCompare"><div><small>不是</small><b>只演示 AI 能生成什么</b></div><div><small>而是</small><b>让 AI 在真实客户流程中产生可核对的帮助</b></div></div>
    </section>}
    <section className="serviceFit" id="start"><div><p className="detailKicker">WHO THIS IS FOR</p><h2>先判断，<em>是否适合你的项目。</em></h2></div><ul>{service.audience.map((item, index) => <li key={item}><b>0{index + 1}</b><span>{item}</span></li>)}</ul></section>
    <section className="serviceStart"><div><p className="detailKicker">START WITH WHAT YOU HAVE</p><h2>不用资料齐全，<em>先发已有内容。</em></h2></div><div><p>下面任意一类资料都可以作为开始。我们先看范围，再确认适合的工作方式。</p><ul>{service.inputs.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
    <section className="serviceProcess"><p className="detailKicker">HOW WE WORK</p><h2>从资料到交付，<em>每一步都可核对。</em></h2><div>{service.process.map((step, index) => <article key={step.title}><b>0{index + 1}</b><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>
    <section className="detailBody"><div><p className="detailKicker">DELIVERABLES</p><h2>按项目范围，<em>人工确认交付内容。</em></h2></div><ul>{service.deliverables.map((item, index) => <li key={item}><b>0{index + 1}</b><span>{item}</span></li>)}</ul></section>
    <section className="serviceCases"><div><p className="detailKicker">RELATED WORK</p><h2>从案例里看，<em>我们怎样把事做清楚。</em></h2></div><div className="serviceCaseGrid">{relatedCases.map((item) => item && <a href={`/cases/${item.slug}`} key={item.slug}><img src={item.image} alt={item.title} /><small>{item.tag}</small><h3>{item.title}</h3><p>{item.summary}</p><span>查看案例 →</span></a>)}</div></section>
    <section className="serviceBoundary"><p className="detailKicker">REVIEW & RESPONSIBILITY</p><h2>我们做支持，<em>关键决定要确认。</em></h2><p>{service.boundary}</p></section>
    <section className="detailContact"><p>开始合作</p><h2>{service.cta}</h2><a href={`${isAiFde ? "/ai-applications" : "/design-detailing"}#contact`}>提交项目需求 →</a></section>
  </main>;
}
