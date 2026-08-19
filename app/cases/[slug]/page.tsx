import { notFound } from "next/navigation";
import { designCases } from "../../design-data";

export function generateStaticParams() {
  return designCases.map(({ slug }) => ({ slug }));
}

export default async function CaseDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = designCases.find((entry) => entry.slug === slug);
  if (!item) notFound();
  return <main className="designDetail"><header><a href="/#cases">← 返回案例</a><a className="detailCta" href="/#contact">提交需求 →</a></header><section className="caseHero"><img src={item.image} alt={item.title} /><div><p>CASE DETAIL · {item.tag}</p><h1>{item.title}</h1><span>{item.summary}</span></div></section><section className="detailBody"><div><p className="detailKicker">REFERENCE FOCUS</p><h2>从图片中，<em>看空间与构件关系。</em></h2></div><ul>{item.focus.map((focus, index) => <li key={focus}><b>0{index + 1}</b><span>{focus}</span></li>)}</ul></section><section className="detailContact"><p>开始合作</p><h2>有类似项目？<br />先把资料发过来。</h2><a href="/#contact">提交项目需求 →</a></section></main>;
}
