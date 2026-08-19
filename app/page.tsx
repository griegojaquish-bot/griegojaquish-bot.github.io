import type { Metadata } from "next";
import "./portal.css";
import "./portal-extras.css";

export const metadata: Metadata = {
  title: "山江设计与智能应用｜设计深化与 AI 应用",
  description: "山江设计与智能应用分为设计深化与 AI 应用两大业务板块，分别承接工程设计深化和企业 AI 场景落地。",
};

export default function Home() { return <main className="portalHome">
  <header className="portalNav"><a className="portalBrand" href="#top"><b>SJ</b><span>山江设计与智能应用<small>SHANJIANG DESIGN &amp; AI</small></span></a><nav><a href="#business">业务板块</a><a href="#method">合作方式</a><a className="portalNavCta" href="#business">选择业务 →</a></nav></header>
  <section id="top" className="portalHero"><div className="portalHeroCopy"><p>DESIGN DETAILING · AI APPLICATIONS</p><h1>两类业务，<br /><em>两套专业交付路径。</em></h1><span>山江设计与智能应用由“设计深化”和“AI 应用”两个独立板块组成。请选择与你当前任务对应的入口，查看各自的服务内容、案例和合作方式。</span></div><div className="portalHeroVisual" aria-hidden="true"><span>DESIGN</span><span>AI</span></div></section>
  <section id="business" className="portalBusiness">
    <article className="businessCard designPortal"><div className="businessImage"><picture><source media="(max-width: 850px)" srcSet="/portal-design-mobile.webp" /><img src="/tekla/tekla-project-visual.jpg" alt="钢结构设计深化与 Tekla 模型示例" loading="lazy" decoding="async" /></picture></div><div className="businessCopy"><small>PART 01 / DESIGN DETAILING</small><h2>设计深化</h2><p>面向钢结构项目团队，提供方案与图纸表达、Tekla 三维建模、详图深化和加工图支持。</p><ul><li>方案设计与图纸表达</li><li>Tekla 三维建模</li><li>详图深化与加工图</li><li>真实案例与人工报价</li></ul><a href="/design-detailing">进入设计深化板块 <b>→</b></a></div></article>
    <article className="businessCard aiPortal"><div className="businessImage"><img src="/ai-fde-all-industries-poster.webp" alt="AI 智能体连接客服、销售、资料、网站小程序与运营交付" loading="lazy" decoding="async" /></div><div className="businessCopy"><small>PART 02 / AI APPLICATIONS</small><h2>AI 应用</h2><p>重点承接企业 AI 智能体与工作流落地，并提供网站建设、微信小程序开发及 AI 工程图文自动化。</p><ul><li>企业 AI 智能体与工作流</li><li>AI FDE 全行业协同</li><li>网站建设与微信小程序</li><li>AI 工程图文与资料自动化</li></ul><a href="/ai-applications">进入 AI 应用板块 <b>→</b></a></div></article>
  </section>
  <section id="method" className="portalMethod"><div><p>HOW TO START</p><h2>先选业务板块，<br /><em>再按实际范围评估。</em></h2></div><div className="portalSteps"><article><b>01</b><span>选择设计深化或 AI 应用</span></article><article><b>02</b><span>提交现有资料与目标</span></article><article><b>03</b><span>人工确认范围和报价</span></article></div></section>
  <footer className="portalFooter"><a className="portalBrand" href="#top"><b>SJ</b><span>山江设计与智能应用<small>SHANJIANG DESIGN &amp; AI</small></span></a><p>设计深化 · AI 应用</p><small>© 2026 SHANJIANG DESIGN &amp; AI</small></footer>
</main>; }
