import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "../data";

export function generateStaticParams(){return articles.map(({slug})=>({slug}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const article=getArticle(slug);
  return article?{title:`${article.title} | Shanjiang Modular Housing`,description:article.summary,alternates:{canonical:`/en/news/${slug}`},openGraph:{title:article.title,description:article.summary,url:`/en/news/${slug}`,type:"article",images:[]},twitter:{card:"summary",title:article.title,description:article.summary,images:[]}}:{};
}

const relatedRoutes:Record<string,string[]>={
  "integrated-vs-prefabricated":["/en/products/flat-pack","/en/products/site-office"],
  "site-camp-planning-checklist":["/en/products/site-office","/en/products/site-fence"],
  "flat-pack-office-layout":["/en/products/flat-pack","/en/#contact"],
  "flat-pack-container-house-guide":["/en/products/flat-pack","/en/news/site-camp-planning-checklist"],
  "modular-house-export-shipping":["/en/#contact","/en/products/flat-pack"],
  "quick-assembly-house-installation":["/en/products/quick-assembly","/en/news/site-camp-planning-checklist"],
  "temporary-site-office-cost":["/en/products/site-office","/en/products/flat-pack"],
  "modular-office-design-tips":["/en/products/site-office","/en/#contact"],
};

export default async function EnglishArticlePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const article=getArticle(slug);
  if(!article)notFound();
  const routes=relatedRoutes[slug]||["/en/products/flat-pack","/en/#contact"];
  return <main className="article enArticle">
    <header className="detailTop"><Link className="brand" href="/en"><b>SJ</b><span>SHANJIANG<small>MODULAR HOUSING</small></span></Link><div><Link href="/en/news">Back to news</Link><a className="detailCta" href="/en/#contact">Get a quote →</a></div></header>
    <section className="articleHero"><small>{article.category}　·　{article.date}</small><h1>{article.title}</h1><p>{article.lead}</p></section>
    <div className="articleBody"><aside><span>CONTENTS</span>{article.sections.map((section,index)=><a key={section.heading} href={`#section-${index+1}`}>0{index+1}　{section.heading}</a>)}</aside><article>{article.sections.map((section,index)=><section key={section.heading} id={`section-${index+1}`}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}<div className="articleCallout"><b>Need a project-specific recommendation?</b><p>Tell us your location, occupancy, schedule and intended use. The Shanjiang team can suggest a suitable product and space solution.</p><a href="/en/#contact">Request project advice →</a></div></article></div>
    <section className="related"><p className="kicker">RELATED</p><h2>Related content</h2><div>{article.related.map((item,index)=><a key={item} href={routes[index]||"/en/#contact"}>{item}<b>→</b></a>)}</div></section>
    <footer><span>Guangzhou Shanjiang Steel Structure</span><Link href="/en/news">Back to news ↑</Link></footer>
  </main>;
}
