import Link from "next/link";
import type { CSSProperties } from "react";
import { projects } from "./data";
import { mobileImageSrc } from "../image-paths";

export default function Projects() {
  return (
    <main className="listing">
      <header className="detailTop">
        <Link className="brand" href="/"><b>ZY</b><span>广州山江钢结构<small>SHANJIANG STEEL STRUCTURE</small></span></Link>
        <div><Link href="/">首页</Link><Link className="detailCta" href="/#contact">项目咨询 →</Link></div>
      </header>
      <section className="listingHero">
        <p>SELECTED PROJECTS</p>
        <h1>让空间适配每一种<br/><em>真实现场。</em></h1>
        <span>从大型工地项目部、园区公共空间到文旅营地，山江以真实项目图展示模块化空间的规划、制造与交付能力。</span>
      </section>
      <section className="projectListing">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            className="projectShowcase"
            href={`/projects/${project.slug}`}
            style={{ "--desktop-image": `url(${project.image})`, "--mobile-image": `url(${mobileImageSrc(project.image)})` } as CSSProperties}
            aria-label={`查看${project.name}`}
          >
            <div>
              <small>PROJECT / {String(index + 1).padStart(2, "0")}</small>
              <h2>{project.name}</h2>
              <p>{project.type}</p>
              <span>{project.tag}</span>
              <b className="projectCardLink">查看项目详情 →</b>
            </div>
          </Link>
        ))}
      </section>
      <section className="listingQuote">
        <p>从项目需求出发</p>
        <h2>您的项目，也可以拥有<br/>一套更合适的空间方案。</h2>
        <Link href="/#contact">开始项目沟通 →</Link>
      </section>
    </main>
  );
}
