import type { Metadata } from "next";
import Link from "next/link";
import "../tekla-steel-detailing/tekla.css";
import "../tekla-steel-detailing/gallery.css";
import "./cn.css";

export const metadata: Metadata = {
  title: "Tekla钢结构深化服务｜钢结构建模与加工图服务",
  description: "山江提供Tekla Structures三维建模、钢结构深化、加工图和施工图支持。20年钢结构经验，7年Tekla使用经验，服务钢结构公司、建筑承包商和模块化建筑企业。",
  keywords: ["Tekla钢结构深化", "Tekla建模服务", "钢结构加工图", "钢结构施工图", "钢结构深化外包", "Tekla Structures建模"],
  alternates: { canonical: "https://griegojaquish-bot.github.io/tekla-steel-detailing-cn" },
};

const services = [
  { number: "01", eyebrow: "TEKLA STRUCTURES", title: "Tekla三维建模", text: "根据设计图纸、结构资料和项目标准，建立准确、便于复核和出图的钢结构三维模型。", items: ["钢框架建模", "节点与连接建模", "构件及装配组织", "模型检查与碰撞支持"] },
  { number: "02", eyebrow: "FABRICATION", title: "钢结构加工图", text: "面向钢结构车间生产，整理清晰的构件、装配和材料信息，减少加工沟通成本。", items: ["零件图", "构件装配图", "材料表与螺栓信息", "焊接与下料细节"] },
  { number: "03", eyebrow: "SHOP DRAWINGS", title: "施工图与深化支持", text: "让图纸版本、加工问题和现场安装需求保持衔接，支持项目稳定推进。", items: ["图纸编排与出图", "版本及修改协调", "车间问题沟通", "结合安装的深化细节"] },
];
const industries = [["01", "工业建筑", "钢结构厂房、仓库和生产车间。"], ["02", "商业建筑", "办公楼、商业空间和公共建筑。"], ["03", "模块化建筑", "预制房屋、工地营地和临时建筑。"], ["04", "桥梁与重型钢结构", "钢构件、复杂结构和定制加工项目。"]];
const workflow = [["01", "设计图纸"], ["02", "Tekla三维模型"], ["03", "深化检查"], ["04", "加工图纸"], ["05", "车间生产支持"]];
const projectExperience = [["钢结构厂房项目", "Tekla建模、施工图和加工细节支持。"], ["模块化建筑项目", "结构深化、构件图纸和生产配合。"], ["复杂钢结构项目", "三维建模、节点深化和制造图纸。"]];

export default function TeklaSteelDetailingChinesePage() {
  return <main className="teklaPage teklaCn">
    <header className="teklaHeader"><Link className="teklaBrand" href="/" aria-label="山江首页"><b>SJ</b><span>广州山江钢结构<small>SHANJIANG STEEL STRUCTURE</small></span></Link><nav aria-label="Tekla服务导航"><Link href="/">首页</Link><Link href="/projects">工厂与项目</Link><Link href="#services">服务内容</Link><Link href="/tekla-steel-detailing">English <i>↗</i></Link><Link className="teklaNavCta" href="#contact">获取报价 <i>→</i></Link></nav></header>

    <section className="teklaHero"><div className="teklaHeroCopy"><p className="teklaKicker">TEKLA钢结构深化服务</p><h1>让钢结构深化，<em>真正服务于生产。</em></h1><p className="teklaLead">山江为钢结构公司、建筑承包商和模块化建筑企业提供Tekla建模、钢结构深化、加工图和施工图支持，帮助海外项目团队提高出图效率，减少深化成本。</p><div className="teklaExperience"><div><strong>20</strong><span>年钢结构行业经验</span></div><div><strong>7</strong><span>年Tekla Structures使用经验</span></div></div><div className="teklaActions"><Link className="teklaButton primary" href="#contact">获取项目报价 <b>→</b></Link><Link className="teklaButton secondary" href="#services">查看服务内容</Link></div></div><div className="teklaModelBoard" aria-label="Tekla钢结构三维模型示例"><div className="modelTopline"><span>TEKLA / MODEL REVIEW</span><span>STEEL READY</span></div><div className="modelFrame"><div className="modelRoof" /><div className="modelColumns"><i /><i /><i /><i /><i /></div><div className="modelFloor" /><span className="modelLabel labelA">3D MODEL</span><span className="modelLabel labelB">DETAIL</span><span className="modelLabel labelC">FABRICATION</span></div><p>真实Tekla模型示例：弧形楼梯与平台深化。</p></div></section>

    <section className="teklaProof" aria-label="服务经验"><div><strong>20</strong><span>年钢结构项目经验</span></div><div><strong>7</strong><span>年Tekla建模经验</span></div><div><strong>01</strong><span>从模型到加工图的实践伙伴</span></div><div><strong>GLOBAL</strong><span>支持海外项目团队</span></div></section>

    <section id="services" className="teklaSection servicesSection"><div className="teklaSectionHeading"><div><p className="teklaKicker">我们的钢结构深化服务</p><h2>让深化工作，<em>跟上生产节奏。</em></h2></div><p>把钢结构实际经验和规范的Tekla工作流程结合起来，让模型和图纸真正能服务于复核、加工与现场安装。</p></div><div className="serviceGrid">{services.map((service) => <article className="serviceCard" key={service.number}><span className="serviceNumber">{service.number}</span><p className="serviceEyebrow">{service.eyebrow}</p><h3>{service.title}</h3><p>{service.text}</p><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

    <section className="teklaGallery"><div className="teklaSectionHeading compact"><div><p className="teklaKicker">TEKLA模型与项目示例</p><h2>从模型复核，<em>到现场可用的细节。</em></h2></div><p>精选Tekla图片：钢结构建模、钢屋架、楼梯节点、钢结构现场、复杂曲面项目和工程图。</p></div><div className="teklaImageGrid"><figure className="imageFeature"><img src="/tekla/tekla-bridge-model.jpg" alt="弧形钢结构Tekla三维模型" loading="lazy" decoding="async" /><figcaption><span>01 / TEKLA MODEL</span><b>弧形钢结构建模</b></figcaption></figure><figure><img src="/tekla/tekla-roof-model.jpg" alt="钢屋架Tekla三维模型" loading="lazy" decoding="async" /><figcaption><span>02 / FRAME MODEL</span><b>钢屋架建模</b></figcaption></figure><figure><img src="/tekla/tekla-stair-detail.jpg" alt="楼梯与平台Tekla节点深化" loading="lazy" decoding="async" /><figcaption><span>03 / DETAIL</span><b>楼梯与平台节点</b></figcaption></figure><figure><img src="/tekla/tekla-steel-frame.jpg" alt="钢结构施工现场" loading="lazy" decoding="async" /><figcaption><span>04 / SITE REFERENCE</span><b>加工与安装现场</b></figcaption></figure><figure><img src="/tekla/tekla-project-visual.jpg" alt="复杂曲面钢结构项目效果" loading="lazy" decoding="async" /><figcaption><span>05 / PROJECT VIEW</span><b>复杂钢结构形体</b></figcaption></figure><figure><img src="/tekla/tekla-drawing.jpg" alt="弧形钢结构工程图" loading="lazy" decoding="async" /><figcaption><span>06 / DRAWING</span><b>图纸协同与深化</b></figcaption></figure></div></section>

    <section className="teklaIndustries"><div className="teklaSectionHeading compact"><div><p className="teklaKicker">适用项目类型</p><h2>围绕你的<em>钢结构工作范围。</em></h2></div><p>适合需要稳定深化产能、又不希望增加长期固定成本的项目团队。</p></div><div className="industryGrid">{industries.map(([number, title, text]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p><span>STEEL DETAILING SUPPORT</span></article>)}</div></section>

    <section className="teklaWhy"><div className="whyCopy"><p className="teklaKicker">为什么选择山江？</p><h2>我们不只是会操作软件，<em>更理解工程现场。</em></h2><p>20年的钢结构行业经验，让我们能够从加工、运输和安装的角度理解图纸。深化工作不只追求模型完成，还要让车间看得懂、现场用得上。</p><ul><li>理解钢结构加工要求</li><li>关注现场安装过程</li><li>识别施工中的实际难点</li><li>提供可落地的工程解决方案</li></ul></div><div className="workflowPanel"><p className="teklaKicker">清晰的TEKLA工作流程</p><div className="workflowList">{workflow.map(([number, title]) => <div key={number}><b>{number}</b><span>{title}</span>{number !== "05" && <i>↓</i>}</div>)}</div></div></section>

    <section className="teklaSection experienceSection"><div className="teklaSectionHeading compact"><div><p className="teklaKicker">项目经验方向</p><h2>输出真正服务于<em>实际项目。</em></h2></div><p>覆盖钢结构厂房、模块化建筑交付和复杂钢结构应用场景。</p></div><div className="experienceGrid">{projectExperience.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="teklaSoftware"><div><p className="teklaKicker">软件与工作能力</p><h2>为准确交付，<em>做好图纸管理。</em></h2></div><div className="softwareList"><span>Tekla Structures</span><span>AutoCAD</span><span>三维建模工作流程</span><span>工程图纸管理</span></div></section>

    <section id="contact" className="teklaContact"><div className="contactCopy"><p className="teklaKicker">开始合作</p><h2>把图纸发过来，<em>我们先聊聊项目。</em></h2><p>如果你正在寻找可靠的Tekla钢结构深化伙伴，请发送结构图纸、项目要求、执行标准和交付计划。我们会先了解工作范围，再给出初步建议。</p><div className="contactInfo"><a href="mailto:13120056@qq.com?subject=Tekla%20steel%20detailing%20enquiry">发送项目资料</a><a href="tel:13539957289">+86 135 3995 7289</a></div></div><div className="contactCard"><p>为了更快评估项目，请准备：</p><ul><li>结构图纸和项目类型</li><li>执行标准与交付内容</li><li>预计工程量或钢材吨位</li><li>目标交付时间</li></ul><a className="teklaButton dark" href="mailto:13120056@qq.com?subject=Tekla%20steel%20detailing%20enquiry">邮件联系山江 <b>→</b></a></div></section>

    <footer className="teklaFooter"><Link className="teklaBrand" href="/"><b>SJ</b><span>广州山江钢结构<small>SHANJIANG STEEL STRUCTURE</small></span></Link><p>Tekla建模 · 钢结构深化 · 加工图 · 施工图</p><span>© 2026 SHANJIANG STEEL STRUCTURE</span></footer>
  </main>;
}
