import type { Metadata } from "next";
import Link from "next/link";
import GalleryLightbox from "../../gallery-lightbox";
import "../../gallery.css";
import "./factory.css";
import ResponsiveImage from "../../responsive-image";

export const metadata: Metadata = {
  title: "Factory & Project Proof | Shanjiang Modular Housing",
  description: "See real workshop production, material processing, delivery preparation and project installation photographs from Shanjiang Modular Housing.",
};

const factoryPhotos = [
  ["车间01.png", "Workshop production", "Real workshop production and modular component preparation."],
  ["车间02.png", "Production equipment", "Equipment and working areas used for modular housing production."],
  ["车间05.png", "Coil processing", "Steel coil processing photographed inside the Shanjiang workshop."],
  ["车间03.png", "Delivery preparation", "Finished units prepared for delivery."],
  ["车间04.png", "Workshop operations", "Daily factory operations and material handling."],
];

const projectPhotos = [
  ["工地案例01.png", "Project installation", "A Shanjiang modular project photographed during site installation."],
  ["工地案例02.png", "Completed project", "A completed modular building project."],
  ["办公室01.png", "Modular office space", "A completed office-space application."],
  ["办公室02.png", "Project interior", "An interior view from a completed project."],
  ["project-campus-aerial.png", "Large construction project office", "A modular project office supporting large-site construction operations."],
];

const factoryLightboxItems = factoryPhotos.map(([image, title], index) => ({
  src: `/real-gallery/${image}`,
  alt: title,
  section: `FACTORY / 0${index + 1}`,
  title,
  feature: index === 0,
}));

const projectLightboxItems = projectPhotos.map(([image, title], index) => ({
  src: `/real-gallery/${image}`,
  alt: title,
  section: `PROJECT / 0${index + 1}`,
  title,
  feature: index === 0,
}));

export default function FactoryProofPage() {
  return <main className="factoryProof">
    <GalleryLightbox items={factoryLightboxItems} replaceSelector=".factoryProofGrid" />
    <GalleryLightbox items={projectLightboxItems} replaceSelector=".projectProofGrid" />
    <header className="factoryNav"><Link className="brand" href="/en"><b>SJ</b><span>SHANJIANG<small>MODULAR HOUSING</small></span></Link><div><Link href="/en#products">Products</Link><a href="/en#contact">Get a Quote →</a></div></header>
    <section className="factoryHero"><p>REAL FACTORY &amp; PROJECT PROOF</p><h1>Built in the workshop.<br/><em>Proven on site.</em></h1><span>These photographs record Shanjiang&apos;s own workshop production, material processing, delivery preparation and project installation.</span></section>
    <section className="proofIntro"><div><p>WHY THIS PAGE MATTERS</p><h2>Clear evidence,<br/><em>not stock claims.</em></h2></div><p>For every project, practical delivery begins with real materials, real production and a clear understanding of site needs. This page shows the people, equipment and project work behind Shanjiang Modular Housing.</p></section>
    <section className="proofSection"><div className="proofHeading"><p>01 / FACTORY</p><h2>Workshop &amp; production</h2><span>Real photographs from Shanjiang&apos;s manufacturing workspace.</span></div><div className="proofGrid factoryProofGrid">{factoryPhotos.map(([image,title,text], index) => <figure key={image} className={index === 0 ? "proofFeature" : ""}><ResponsiveImage src={`/real-gallery/${image}`} alt={title} mobileSizes="(max-width: 850px) 100vw, 50vw"/><figcaption><small>FACTORY / 0{index + 1}</small><b>{title}</b><p>{text}</p></figcaption></figure>)}</div></section>
    <section className="proofSection proofProjects"><div className="proofHeading"><p>02 / PROJECTS</p><h2>Installation &amp; use</h2><span>Project photographs that connect factory work with real-world application.</span></div><div className="proofGrid projectProofGrid">{projectPhotos.map(([image,title,text], index) => <figure key={image} className={index === 0 ? "proofFeature" : ""}><ResponsiveImage src={`/real-gallery/${image}`} alt={title} mobileSizes="(max-width: 850px) 100vw, 50vw"/><figcaption><small>PROJECT / 0{index + 1}</small><b>{title}</b><p>{text}</p></figcaption></figure>)}</div></section>
    <section className="proofCta"><div><p>START WITH YOUR PROJECT BRIEF</p><h2>Tell us what you need.<br/>We&apos;ll help shape the space.</h2></div><a href="/en#contact">Get a solution &amp; quote →</a></section>
    <footer><Link className="brand" href="/en"><b>SJ</b><span>SHANJIANG<small>MODULAR HOUSING</small></span></Link><p>Taiping, Conghua, Guangzhou, Guangdong, China<br/>+86 135 3995 7289 · 13120056@qq.com</p></footer>
  </main>;
}
