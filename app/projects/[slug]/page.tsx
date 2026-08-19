import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { getProject, projects } from "../data";
import { mobileImageSrc } from "../../image-paths";

export function generateStaticParams(){return projects.map(project=>({slug:project.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const project=getProject(slug);return project?{title:`${project.name}｜项目案例`,description:project.overview,alternates:{canonical:`/projects/${slug}`},openGraph:{title:`${project.name}｜山江项目案例`,description:project.overview,images:[project.image]},twitter:{card:"summary_large_image",title:`${project.name}｜山江项目案例`,description:project.overview,images:[project.image]}}:{};}

export default async function ProjectDetail({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const project=getProject(slug);
  if(!project)notFound();
  return <main className="projectDetail">
    <header className="detailTop"><a className="brand" href="/"><b>SJ</b><span>广州山江钢结构<small>SHANJIANG STEEL STRUCTURE</small></span></a><div><a href="/projects">全部案例</a><a className="detailCta" href="/#contact">咨询同类项目 →</a></div></header>
    <section className="projectDetailHero"><div><p>PROJECT CASE · {project.type}</p><h1>{project.name}</h1><span>{project.tag}</span></div><div style={{"--desktop-image":`url(${project.image})`,"--mobile-image":`url(${mobileImageSrc(project.image)})`} as CSSProperties}/></section>
    <section className="projectOverview"><div><p className="kicker">PROJECT OVERVIEW</p><h2>从真实需求出发，<br/><em>组织一套可落地的空间。</em></h2></div><p>{project.overview}</p></section>
    <section className="projectFacts">{project.facts.map(([label,value])=><div key={label}><span>{label}</span><b>{value}</b></div>)}</section>
    <section className="projectStory"><article><small>01 / CHALLENGE</small><h2>项目需求</h2><p>{project.challenge}</p></article><article><small>02 / SOLUTION</small><h2>山江方案</h2><p>{project.solution}</p></article></section>
    <section className="projectResult"><div className="resultImage" style={{"--desktop-image":`url(${project.image})`,"--mobile-image":`url(${mobileImageSrc(project.image)})`} as CSSProperties}/><div><p className="kicker">DELIVERY HIGHLIGHTS</p><h2>方案亮点</h2><ul>{project.highlights.map(item=><li key={item}>{item}</li>)}</ul><a href={project.productHref}>查看{project.product}产品详情 →</a></div></section>
    <section className="listingQuote"><p>获取同类项目方案</p><h2>告诉我们场地、人数与工期，<br/>一起确定更合适的实施方式。</h2><a href="/#contact">开始项目沟通 →</a></section>
  </main>
}
