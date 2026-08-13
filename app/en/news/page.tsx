import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "./data";

export const metadata: Metadata = {
  title: "News & Insights | Shanjiang Modular Housing",
  description: "Practical insights on modular buildings, site camps, product selection, installation and project delivery from Shanjiang.",
  alternates: { canonical: "/en/news" },
};

export default function EnglishNews() {
  return <main className="listing enListing">
    <header className="detailTop"><Link className="brand" href="/en"><b>SJ</b><span>SHANJIANG<small>MODULAR HOUSING</small></span></Link><div><Link href="/en">Home</Link><a className="detailCta" href="/en/#contact">Get a quote →</a></div></header>
    <section className="listingHero newsHero"><p>NEWS &amp; INSIGHTS</p><h1>Practical ideas for<br/><em>better site delivery.</em></h1><span>Useful guidance on modular buildings, manufacturing and project delivery from the Shanjiang team.</span></section>
    <section className="articleList">{articles.map(article=><article key={article.slug}><small>{article.date}　{article.category}</small><h2>{article.title}</h2><p>{article.summary}</p><Link aria-label={`Read article: ${article.title}`} href={`/en/news/${article.slug}`} /></article>)}</section>
  </main>;
}
