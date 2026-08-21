import type { Metadata } from "next";
import "./portal.css";
import "./portal-extras.css";

export const metadata: Metadata = {
  title: { absolute: "山江设计与智能应用｜设计深化、竣工图出图与 AI 应用" },
  description: "山江设计与智能应用提供设计深化、工程竣工图与蓝图出图、AI 应用三大业务，分别承接工程图纸交付与企业 AI 场景落地。",
  alternates: { canonical: "/" },
};

export default function Home() { return <main className="portalHome">
  <header className="portalNav"><a className="portalBrand" href="#top"><b>SJ</b><span>山江设计与智能应用<small>SHANJIANG DESIGN &amp; AI</small></span></a><nav><a href="#business">三大业务</a><a href="#method">合作方式</a><a className="portalNavCta" href="#business">选择业务 →</a></nav></header>
  <section id="top" className="portalHero"><div className="portalHeroCopy"><p>DESIGN DETAILING · AS-BUILT · AI APPLICATIONS · AGI</p><h1>三大业务，<br /><em>三条专业交付路径。</em></h1><span>山江设计与智能应用由“设计深化”“工程竣工图与蓝图出图”和“AI 应用”三个独立板块组成。按你的真实任务选择入口，再确认资料、范围与交付方式。</span></div><div className="portalHeroVisual"><video autoPlay muted loop playsInline preload="metadata" poster="/agi-hero-poster-v1.webp" aria-label="AGI 智能核心连接业务流程、资料、工具与工程图纸的动态示意"><source media="(max-width: 850px)" src="/agi-hero-motion-mobile-v1.mp4" type="video/mp4" /><source src="/agi-hero-motion-v1.mp4" type="video/mp4" /></video><span>AGI</span><i>GENERAL INTELLIGENCE<br />FOR REAL WORK</i></div></section>
  <section id="business" className="portalBusiness">
    <article className="businessCard designPortal"><div className="businessImage"><picture><source media="(max-width: 850px)" srcSet="/portal-design-mobile.webp" /><img src="/tekla/tekla-project-visual.jpg" alt="钢结构设计深化与 Tekla 模型示例" loading="lazy" decoding="async" /></picture></div><div className="businessCopy"><small>PART 01 / DESIGN DETAILING</small><h2>设计深化</h2><p>面向钢结构项目团队，提供方案与图纸表达、Tekla 三维建模、详图深化和加工图支持。</p><ul><li>方案设计与图纸表达</li><li>Tekla 三维建模</li><li>详图深化与加工图</li><li>真实案例与人工报价</li></ul><a href="/design-detailing">进入设计深化板块 <b>→</b></a></div></article>
    <article className="businessCard aiPortal"><div className="businessImage"><img src="/ai-fde-all-industries-poster.webp" alt="AI 智能体连接客服、销售、资料、网站小程序与运营交付" loading="lazy" decoding="async" /></div><div className="businessCopy"><small>PART 02 / AI APPLICATIONS</small><h2>AI 应用</h2><p>重点承接企业 AI 智能体与工作流落地，并提供网站建设、微信小程序开发及 AI 工程图文自动化。</p><ul><li>企业 AI 智能体与工作流</li><li>AI FDE 全行业协同</li><li>网站建设与微信小程序</li><li>AI 工程图文与资料自动化</li></ul><a href="/ai-applications">进入 AI 应用板块 <b>→</b></a></div></article>
    <article className="businessCard blueprintPortal"><div className="businessImage"><img src="/as-built-drawings-v1.jpg" alt="工程竣工图整理：图纸、会议纪要和修改位置核对" loading="lazy" decoding="async" /></div><div className="businessCopy"><small>PART 03 / AS-BUILT &amp; BLUEPRINT</small><h2>工程竣工图<br />与蓝图出图</h2><p>依据已确认的变更、会议纪要和现场资料整理竣工图；同时承接工程蓝图打印与出图整理。</p><ul><li>竣工图整理与版本统一</li><li>会议纪要、变更与图号对应</li><li>工程蓝图打印与文件清点</li><li>按图幅、份数与装订要求交付</li></ul><a href="/as-built-blueprint">进入竣工图与出图入口 <b>→</b></a></div></article>
  </section>
  <section id="method" className="portalMethod"><div><p>HOW TO START</p><h2>先选业务入口，<br /><em>再按实际范围评估。</em></h2></div><div><div className="portalSteps"><article><b>01</b><span>选择设计深化、竣工图出图或 AI 应用</span></article><article><b>02</b><span>提交现有资料与目标</span></article><article><b>03</b><span>人工确认范围和报价</span></article></div><div className="portalWechat"><img src="/wechat-qr-v2.png" alt="山江设计与智能应用微信二维码，扫码添加微信" width="193" height="193" loading="eager" decoding="sync" /><div><small>WECHAT / 微信咨询</small><b>扫码添加微信</b><span>设计深化、竣工图、蓝图出图、AI 应用、网站或小程序需求均可直接沟通。</span></div></div></div></section>
  <footer className="portalFooter"><a className="portalBrand" href="#top"><b>SJ</b><span>山江设计与智能应用<small>SHANJIANG DESIGN &amp; AI</small></span></a><p>设计深化 · 竣工图与蓝图出图 · AI 应用</p><small>© 2026 SHANJIANG DESIGN &amp; AI</small></footer>
</main>; }
