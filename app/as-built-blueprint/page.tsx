import type { Metadata } from "next";
import QuoteForm from "../quote-form";
import { services } from "../design-data";
import "../portal.css";
import "../portal-extras.css";

export const metadata: Metadata = { title: "工程竣工图与蓝图出图｜山江设计服务", description: "提供竣工图整理、会议纪要与变更对应、工程蓝图打印和出图文件整理。按资料、图幅、份数和交付要求人工评估。", alternates: { canonical: "/as-built-blueprint" } };

const asBuilt = services.find((service) => service.slug === "as-built-drawings")!;
const blueprint = services.find((service) => service.slug === "engineering-blueprint-printing")!;
const steps = ["发来原图、变更或会议纪要", "确认图号、图幅、份数与时间", "整理竣工图或进行工程出图", "按清单核对后交付"];

export default function AsBuiltBlueprint() { return <main className="blueprintPage">
  <header className="portalNav dark"><a className="portalBrand" href="/"><b>SJ</b><span>工程竣工图与蓝图出图<small>AS-BUILT &amp; BLUEPRINT</small></span></a><nav><a href="/">三大业务</a><a href="#services">服务内容</a><a href="#process">合作流程</a><a className="portalNavCta" href="#contact">提交资料 →</a></nav></header>
  <section className="blueprintHero"><div><p>AS-BUILT DRAWINGS · ENGINEERING BLUEPRINT</p><h1>把变更和纪要，<br /><em>落实到图纸里。</em></h1><span>竣工图整理与工程蓝图出图，均以你确认的文件和清单为依据。先核对资料、图号、图幅和交期，再开始整理或出图。</span><div><a href="#contact">提交图纸资料 →</a><a href="#services">查看两项服务</a></div></div><img src="/engineering-blueprint-printing-v1.jpg" alt="大幅面工程蓝图出图设备" fetchPriority="high" decoding="async" /></section>
  <section id="services" className="blueprintServices"><div><p>WHAT WE DO</p><h2>两个独立服务，<br /><em>对应两类实际任务。</em></h2></div><div className="blueprintServiceGrid">{[asBuilt, blueprint].map((service) => <article key={service.slug}><small>SERVICE / {service.number}</small><h3>{service.title}</h3><p>{service.summary}</p><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul><a href={`/services/${service.slug}`}>查看服务详情 →</a></article>)}</div></section>
  <section className="blueprintPricing"><div><p>REFERENCE PRICE</p><h2>按线上同类价格，<br /><em>先把基础价写清。</em></h2><span>竣工图以实际修改量为准；工程蓝图按图幅单张计价。运费、加急、特殊纸张与装订按实际要求另计。</span></div><div className="priceTables"><article><small>AS-BUILT DRAWINGS</small><h3>竣工图整理</h3><div><b>简单单页整理</b><strong>¥100 起 / 张</strong></div><div><b>多页或成套图纸</b><strong>先看资料报价</strong></div><p>适用于已提供原图、变更或经确认会议纪要的图纸修改与版本整理；复杂程度、缺失资料和加急需求会影响最终报价。</p></article><article><small>ENGINEERING BLUEPRINT</small><h3>工程蓝图出图</h3><div><b>A0</b><strong>¥4 / 张起</strong></div><div><b>A1</b><strong>¥2 / 张起</strong></div><div><b>A2</b><strong>¥1 / 张起</strong></div><div><b>A3</b><strong>¥0.6 / 张起</strong></div><p>按确认的 PDF、CAD 或其他可打印文件出图；份数、折叠、装订、配送与加急请在提交时说明。</p></article></div></section>
  <section id="process" className="blueprintProcess"><p>HOW WE WORK</p><h2>先核对依据，<em>再整理和交付。</em></h2><div>{steps.map((item, index) => <article key={item}><b>0{index + 1}</b><span>{item}</span></article>)}</div></section>
  <section className="blueprintBoundary"><div><p>WORKING BASIS</p><h2>依据清楚，<br /><em>才能交付清楚。</em></h2></div><div><p>竣工图可依据原施工图、设计变更、签证、经确认的会议纪要及现场资料整理；蓝图出图以确认的文件版本、图幅和份数为准。</p><ul><li>现场实际状况与最终验收结论须由项目相关方核实</li><li>出图前请确认文件版本、图号和打印清单</li><li>图幅、份数、折叠或装订要求请在提交时写明</li><li>非标准任务先人工确认范围与交付时间</li></ul></div></section>
  <section id="contact" className="blueprintContact"><div><p>START WITH THE DOCUMENTS</p><h2>把图纸、变更或<br /><em>会议纪要发过来。</em></h2><span>请说明需要做竣工图还是蓝图出图，以及图幅、份数、图号和希望交付时间。我们先人工确认资料和范围。</span><div className="blueprintContactInfo"><a href="tel:13539957289">135 3995 7289（微信同号）</a><a href="mailto:13120056@qq.com">13120056@qq.com</a></div><div className="aiWechatQr"><img src="/wechat-qr-v2.png" alt="工程竣工图与蓝图出图微信二维码" width="193" height="193" loading="eager" decoding="sync" /><div><small>WECHAT / 微信咨询</small><b>扫码添加微信</b><span>添加后可发送原图、变更、会议纪要或出图清单。</span></div></div></div><QuoteForm variant="asBuilt" /></section>
  <footer className="portalFooter dark"><a className="portalBrand" href="/"><b>SJ</b><span>工程竣工图与蓝图出图<small>AS-BUILT &amp; BLUEPRINT</small></span></a><p>竣工图整理 · 工程蓝图出图</p><small>© 2026 SHANJIANG DESIGN SERVICE</small></footer>
  </main>; }
