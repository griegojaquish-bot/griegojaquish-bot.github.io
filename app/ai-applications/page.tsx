import type { Metadata } from "next";
import QuoteForm from "../quote-form";
import { services } from "../design-data";
import "../portal.css";
import "../portal-extras.css";

export const metadata: Metadata = { title: "AI 应用｜AI FDE、网站与小程序开发", description: "AI FDE 业务协同、网站建设、微信小程序开发与 AI 工程图文自动化，按实际任务人工评估。" };
const aiService = services.find((service) => service.slug === "ai-fde")!;
const applications = [
  ["企业 AI 智能体与工作流", "当前重点服务。围绕客服、资料、销售、运营或交付等高频任务，搭建可执行、可人工接管、可持续优化的 AI 工作流。", "/services/ai-agent-workflow"],
  ["AI FDE 全行业协同", "不限定行业。进入客户真实业务场景，梳理任务、资料和交付目标，验证 AI 参与环节并推动落地。", "/services/ai-fde"],
  ["网站建设", "建设企业官网、服务展示站、案例站和业务落地页，兼顾手机体验、内容结构、咨询入口和后续维护。", "#contact"],
  ["微信小程序开发", "围绕服务展示、需求提交、资料上传、人工报价和后台待办等实际流程开发轻量小程序。", "#contact"],
  ["AI 工程图文与资料自动化", "辅助整理图纸说明、变更信息、交付清单、项目资料与常见文档，专业判断保留人工复核。", "#contact"],
];
const aiCases = [
  { status: "已完成 MVP", kind: "MINI PROGRAM", title: "山江设计服务微信小程序", problem: "客户需求、图纸附件和报价沟通分散，管理员容易漏看。", solution: "完成服务与案例展示、企业/个人需求表单、最多 5 个附件上传、人工报价、客户进度查询，以及 OpenID 白名单管理员待办、筛选、备注和状态管理。", result: "形成从客户提交到后台跟进的完整闭环；正式发布仍需配置微信主体、云环境和真机验收。", visual: "mini" },
  { status: "已上线项目", kind: "WEBSITE", title: "山江设计与智能应用官网", problem: "设计深化与 AI 应用混在同一服务列表，客户难以快速判断入口。", solution: "重构为总站入口、设计深化、AI 应用三层架构；手机端使用轻量图片、延迟视频加载和独立快速导航。", result: "两类业务独立表达，咨询路径更清楚；本站就是该案例的实际页面。", visual: "site" },
  { status: "可演示流程", kind: "AI WORKFLOW", title: "全行业客户任务协同", problem: "咨询记录、资料、常见问答和交付清单分散，重复整理耗时且容易遗漏。", solution: "按“接收任务—识别资料—AI 整理与草拟—人工复核—记录结果”搭建可控工作流，可按制造、贸易、零售、专业服务等行业调整。", result: "先用真实样本验证准确性和人工接管点，再决定是否接入企业日常流程；不把演示包装成客户实绩。", visual: "workflow" },
];
const industryCases = [
  { industry: "通信与客户服务", company: "TELUS", pain: "海量来电、信息分散，客户与一线人员都要花时间查找答案。", application: "把客户数据、通话分析和 AI 智能体接入同一客户服务流程。", outcome: "客户问题解决速度提升 87%，30% 来电由 AI 主动解决。" },
  { industry: "保险理赔", company: "Travelers", pain: "灾害期间理赔来电激增，人工等待时间长，简单报案挤占专业人员精力。", application: "使用实时语音 AI 引导客户完成车险财产损失首次报案，并连接内部理赔系统。", outcome: "使用该助手的客户中，85%—90% 能完成报案流程。" },
  { industry: "专业服务与销售", company: "Zenken", pain: "研究、摘要、翻译、内容制作和销售会前准备大量依赖人工。", application: "把企业级 AI 用于知识工作和个性化销售提案，并建立组织内使用机制。", outcome: "知识工作任务平均节省 30%—50% 时间，每年减少约 5000 万日元外包成本。" },
];

export default function AiApplications() { return <main className="aiApplications">
  <header className="portalNav dark"><a className="portalBrand" href="/"><b>SJ</b><span>山江 AI 应用<small>AI APPLICATIONS</small></span></a><nav><a href="/">两大业务</a><a href="#applications">服务内容</a><a href="#process">实施流程</a><a className="portalNavCta" href="#contact">提交任务 →</a></nav></header>
  <section className="aiHero"><div><p>AI AGENTS · WORKFLOW AUTOMATION</p><h1>把 AI 智能体，<br /><em>接进真实业务流程。</em></h1><span>当前重点承接企业 AI 智能体与工作流落地，并提供全行业 AI FDE、网站建设、微信小程序开发和 AI 工程图文自动化。先从一个能核对效果的真实任务开始。</span><div><a href="#contact">提交 AI 智能体需求 →</a><a href="#applications">查看全部服务</a></div></div><div className="aiHeroMedia" aria-label="企业 AI 智能体协调客户沟通、知识库、网站、小程序、人工审核和业务交付"><video autoPlay muted loop playsInline preload="metadata" poster="/ai-applications-hero-poster-v1.webp"><source media="(max-width: 850px)" src="/ai-applications-hero-motion-mobile-v1.mp4" type="video/mp4" /><source src="/ai-applications-hero-motion-v1.mp4" type="video/mp4" /></video><span>AGENT NETWORK</span><i>KNOWLEDGE · TOOLS · HUMAN REVIEW</i></div></section>
  <section id="applications" className="aiScenarios"><div><p>APPLICATION SERVICES</p><h2>五类应用服务，<br /><em>各有清晰交付边界。</em></h2></div><div className="aiScenarioGrid">{applications.map(([title, text, href], index) => <article key={title}><b>0{index + 1}</b><h3>{title}</h3><span>{text}</span><a href={href}>了解或提交需求 →</a></article>)}</div></section>
  <section className="aiCases"><div className="aiCasesHead"><p>PROVEN WORK &amp; DEMOS</p><h2>真实成果与演示流程，<br /><em>状态写清楚。</em></h2><span>不虚构客户名称和经营数据。已完成项目、已上线页面与能力演示分别标明，便于你判断我们实际做到了哪一步。</span></div><div className="aiCaseGrid">{aiCases.map((item, index) => <article key={item.title}><div className={`aiCaseVisual ${item.visual}`}><small>{item.kind}</small><b>{index === 0 ? "MP" : index === 1 ? "WEB" : "AI"}</b><i>{item.status}</i></div><div className="aiCaseCopy"><small>CASE / 0{index + 1} · {item.status}</small><h3>{item.title}</h3><dl><div><dt>原问题</dt><dd>{item.problem}</dd></div><div><dt>实现内容</dt><dd>{item.solution}</dd></div><div><dt>当前结果</dt><dd>{item.result}</dd></div></dl></div></article>)}</div></section>
  <section className="industryCases"><div className="industryCasesHead"><p>INDUSTRY PRACTICE</p><h2>企业痛点，<br /><em>已经有人这样解决。</em></h2><span>这些实践展示 AI 智能体在客服、理赔与专业服务中的可落地方向。重点看“解决什么问题”和“怎样接进流程”，不照搬大型企业预算与规模。</span></div><div className="industryCaseGrid">{industryCases.map((item, index) => <article key={item.company}><small>{String(index + 1).padStart(2, "0")} / {item.industry}</small><h3>{item.company}</h3><p><b>企业痛点：</b>{item.pain}</p><p><b>应用方式：</b>{item.application}</p><strong>{item.outcome}</strong></article>)}</div></section>
  <section id="video" className="aiIntro"><div><p>AI FDE / ALL INDUSTRIES</p><h2>AI FDE 面向所有行业，<br /><em>不限定工程领域。</em></h2><span><b>AI Forward Deployed Engineer</b> 可理解为“AI 现场部署工程师”。无论制造、贸易、零售、专业服务、文旅、教育或其他行业，只要有客户、资料和真实任务，就可以判断 AI 能在哪些环节产生价值。视频以客服、销售、知识库、网站、小程序和运营交付等跨行业场景说明。</span></div><video controls playsInline preload="none" poster="/ai-fde-all-industries-poster.webp" aria-label="面向所有行业的 AI FDE 中文说明视频"><source media="(max-width: 850px)" src="/ai-fde-all-industries-mobile.mp4" type="video/mp4" /><source src="/ai-fde-all-industries.mp4" type="video/mp4" />你的浏览器暂不支持视频播放。</video></section>
  <section id="process" className="aiProcess"><p>HOW WE WORK</p><h2>先试一件事，<em>验证后再扩展。</em></h2><div>{aiService.process.map((step, index) => <article key={step.title}><b>0{index + 1}</b><h3>{step.title}</h3><span>{step.text}</span></article>)}</div></section>
  <section className="aiBoundary"><div><p>PROJECT PRINCIPLES</p><h2>功能围绕业务，<br /><em>关键内容由人确认。</em></h2></div><div><p>网站、小程序和 AI 流程均先确认使用对象、核心任务、资料来源和维护方式。AI 用于辅助整理、归纳和协同，不替代专业判断与责任主体。</p><ul><li>网站与小程序优先完成可用的核心流程</li><li>非标准项目采用提交需求、人工报价</li><li>涉及专业、安全、合同和对外发布内容必须人工审核</li><li>上线前核对手机体验、表单与关键页面</li></ul></div></section>
  <section id="contact" className="aiContact"><div><p>START AN AI APPLICATION</p><h2>把想做的网站、小程序<br />或 AI 任务发过来。</h2><span>请说明使用对象、需要解决的问题、现有资料和希望完成的时间。我们先人工判断实现范围，再提供报价与推进建议。</span><div className="aiContactInfo"><a href="tel:13539957289">135 3995 7289（微信同号）</a><a href="mailto:13120056@qq.com">13120056@qq.com</a></div><div className="aiWechatQr"><img src="/wechat-qr-v2.png" alt="山江 AI 应用微信二维码，扫码添加微信" width="193" height="193" loading="eager" decoding="sync" /><div><small>WECHAT / 微信咨询</small><b>扫码添加微信</b><span>添加后请发送你的业务任务、资料或目标。</span></div></div></div><QuoteForm variant="ai" /></section>
  <aside className="aiMobileQuick"><a href="/">两大业务</a><a href="#applications">服务内容</a><a href="#contact">提交任务</a></aside>
  <footer className="portalFooter dark"><a className="portalBrand" href="/"><b>SJ</b><span>山江 AI 应用<small>AI APPLICATIONS</small></span></a><p>AI 智能体 · AI FDE · 网站建设 · 微信小程序 · 工程图文自动化</p><small>© 2026 SHANJIANG DESIGN SERVICE</small></footer>
  </main>; }
