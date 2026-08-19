import type { Metadata } from "next";
import QuoteForm from "../quote-form";
import { services } from "../design-data";
import "../portal.css";

export const metadata: Metadata = { title: "AI 应用｜AI FDE、网站与小程序开发", description: "AI FDE 业务协同、网站建设、微信小程序开发与 AI 工程图文自动化，按实际任务人工评估。" };
const aiService = services.find((service) => service.slug === "ai-fde")!;
const applications = [
  ["企业 AI 智能体与工作流", "当前重点服务。围绕客服、资料、销售、运营或交付等高频任务，搭建可执行、可人工接管、可持续优化的 AI 工作流。", "/services/ai-fde"],
  ["AI FDE 全行业协同", "不限定行业。进入客户真实业务场景，梳理任务、资料和交付目标，验证 AI 参与环节并推动落地。", "#video"],
  ["网站建设", "建设企业官网、服务展示站、案例站和业务落地页，兼顾手机体验、内容结构、咨询入口和后续维护。", "#contact"],
  ["微信小程序开发", "围绕服务展示、需求提交、资料上传、人工报价和后台待办等实际流程开发轻量小程序。", "#contact"],
  ["AI 工程图文与资料自动化", "辅助整理图纸说明、变更信息、交付清单、项目资料与常见文档，专业判断保留人工复核。", "#contact"],
];

export default function AiApplications() { return <main className="aiApplications">
  <header className="portalNav dark"><a className="portalBrand" href="/"><b>SJ</b><span>山江 AI 应用<small>AI APPLICATIONS</small></span></a><nav><a href="/">两大业务</a><a href="#applications">服务内容</a><a href="#process">实施流程</a><a className="portalNavCta" href="#contact">提交任务 →</a></nav></header>
  <section className="aiHero"><div><p>AI AGENTS · WORKFLOW AUTOMATION</p><h1>把 AI 智能体，<br /><em>接进真实业务流程。</em></h1><span>当前重点承接企业 AI 智能体与工作流落地，并提供全行业 AI FDE、网站建设、微信小程序开发和 AI 工程图文自动化。先从一个能核对效果的真实任务开始。</span><div><a href="#contact">提交 AI 智能体需求 →</a><a href="#applications">查看全部服务</a></div></div><div className="aiHeroGraphic" aria-label="企业 AI 智能体连接客户、资料、流程与交付的示意图"><span>客户</span><span>资料</span><b>AI<br />AGENT</b><span>流程</span><span>交付</span></div></section>
  <section id="applications" className="aiScenarios"><div><p>APPLICATION SERVICES</p><h2>四类应用服务，<br /><em>各有清晰交付边界。</em></h2></div><div className="aiScenarioGrid">{applications.map(([title, text, href], index) => <article key={title}><b>0{index + 1}</b><h3>{title}</h3><span>{text}</span><a href={href}>了解或提交需求 →</a></article>)}</div></section>
  <section id="video" className="aiIntro"><div><p>AI FDE / ALL INDUSTRIES</p><h2>AI FDE 面向所有行业，<br /><em>不限定工程领域。</em></h2><span><b>AI Forward Deployed Engineer</b> 可理解为“AI 现场部署工程师”。无论制造、贸易、零售、专业服务、文旅、教育或其他行业，只要有客户、资料和真实任务，就可以判断 AI 能在哪些环节产生价值。视频内容按全行业业务场景说明。</span></div><video controls playsInline preload="none" poster="/shanjiang-intro-poster.webp" aria-label="面向所有行业的 AI FDE 中文说明视频"><source media="(max-width: 850px)" src="/ai-fde-explainer-mobile-fast-v5.mp4" type="video/mp4" /><source src="/ai-fde-explainer-v4.mp4" type="video/mp4" />你的浏览器暂不支持视频播放。</video></section>
  <section id="process" className="aiProcess"><p>HOW WE WORK</p><h2>先试一件事，<em>验证后再扩展。</em></h2><div>{aiService.process.map((step, index) => <article key={step.title}><b>0{index + 1}</b><h3>{step.title}</h3><span>{step.text}</span></article>)}</div></section>
  <section className="aiBoundary"><div><p>PROJECT PRINCIPLES</p><h2>功能围绕业务，<br /><em>关键内容由人确认。</em></h2></div><div><p>网站、小程序和 AI 流程均先确认使用对象、核心任务、资料来源和维护方式。AI 用于辅助整理、归纳和协同，不替代专业判断与责任主体。</p><ul><li>网站与小程序优先完成可用的核心流程</li><li>非标准项目采用提交需求、人工报价</li><li>涉及专业、安全、合同和对外发布内容必须人工审核</li><li>上线前核对手机体验、表单与关键页面</li></ul></div></section>
  <section id="contact" className="aiContact"><div><p>START AN AI APPLICATION</p><h2>把想做的网站、小程序<br />或 AI 任务发过来。</h2><span>请说明使用对象、需要解决的问题、现有资料和希望完成的时间。我们先人工判断实现范围，再提供报价与推进建议。</span><div className="aiContactInfo"><a href="tel:13539957289">135 3995 7289（微信同号）</a><a href="mailto:13120056@qq.com">13120056@qq.com</a></div></div><QuoteForm /></section>
  <aside className="aiMobileQuick"><a href="/">两大业务</a><a href="#applications">服务内容</a><a href="#contact">提交任务</a></aside>
  <footer className="portalFooter dark"><a className="portalBrand" href="/"><b>SJ</b><span>山江 AI 应用<small>AI APPLICATIONS</small></span></a><p>AI 智能体 · AI FDE · 网站建设 · 微信小程序 · 工程图文自动化</p><small>© 2026 SHANJIANG DESIGN SERVICE</small></footer>
  </main>; }
