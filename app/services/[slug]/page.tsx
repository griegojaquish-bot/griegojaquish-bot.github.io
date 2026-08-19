import { notFound } from "next/navigation";
import { services } from "../../design-data";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const isAiFde = service.slug === "ai-fde";
  return <main className="designDetail"><header><a href="/">← 返回首页</a><a className="detailCta" href="/#contact">提交需求 →</a></header><section className="serviceHero"><div><p>SERVICE / {service.number}</p><h1>{service.title}</h1><span>{service.summary}</span></div><img src={service.image} alt={`${service.title}服务示意`} /></section>{isAiFde && <section className="aiFdeDetail"><p className="detailKicker">AI FDE EXPLAINED</p><h2>AI FDE 是什么？<br /><em>不是单独卖 AI 工具。</em></h2><p><b>AI FDE</b> 是 <b>AI Forward Deployed Engineer</b> 的简称，可理解为“AI 现场部署工程师”。它不分行业：只要存在真实客户、明确或待梳理的业务任务，以及希望达成的交付目标，就可以采用这种协同方式。核心不是先做演示，而是在客户实际场景中把需求拆成可执行任务，确定 AI 能参与的环节，验证结果，并让它进入日常工作流程。</p><div className="aiFdeDetailGrid"><article><b>01</b><h3>从客户任务开始</h3><p>先看客户的业务资料、沟通方式、交付节点和实际难点，而不是先挑一个 AI 工具。</p></article><article><b>02</b><h3>把 AI 放进合适环节</h3><p>让 AI 辅助资料整理、信息核对、问题归纳或任务协同；关键专业判断仍由客户团队和专业人员把关。</p></article><article><b>03</b><h3>以能用为交付标准</h3><p>经过实际任务验证后，形成清晰的使用方式、人工复核点和可持续优化的客户工作流程。</p></article></div><div className="aiFdeCompare"><div><small>不是</small><b>只演示 AI 能生成什么</b></div><div><small>而是</small><b>让 AI 在真实客户流程中产生可核对的帮助</b></div></div></section>}<section className="detailBody"><div><p className="detailKicker">DELIVERABLES</p><h2>按项目范围，<em>人工确认交付内容。</em></h2></div><ul>{service.deliverables.map((item, index) => <li key={item}><b>0{index + 1}</b><span>{item}</span></li>)}</ul></section><section className="detailContact"><p>开始合作</p><h2>把资料发过来，<br />我们先看范围。</h2><a href="/#contact">提交项目需求 →</a></section></main>;
}
