import type { Metadata } from "next";
import "./gallery.css";
import "./tekla-link.css";
import GalleryLightbox from "./gallery-lightbox";
import QuoteForm from "./quote-form";
import ResponsiveImage from "./responsive-image";

export const metadata: Metadata = { title: "广州山江钢结构｜模块化空间解决方案", description: "打包箱、快拼箱、工地板房、围挡与豪华房，山江提供从方案到安装的一站式集成房屋服务。" };
const products = [["打包箱","标准模块 · 灵活组合","适用于工地营地、办公、住宿、商业配套等场景。","01","flat-pack"],["快拼箱","快速搭建 · 经济耐用","用更短工期回应临建需求，适合批量快速交付。","02","quick-assembly"],["工地板房","项目配套 · 整体规划","临时办公、宿舍、会议室与生活区一体化配置。","03","site-office"],["波浪箱","创意组合 · 品牌展示","色彩箱体与叠放结构，适合快闪、零售及园区配套。","04","site-fence"],["豪华房","品质空间 · 定制交付","更重视美感、舒适度和长期使用体验的模块化建筑。","05","premium-house"],["集成房屋组合1","通透接待 · 露台延展","模块化接待与展示空间，结合落地玻璃与屋顶露台。","06","combination-1"],["集成房屋组合2","彩色叠放 · 创意经营","橙绿箱体组合，适合创意园区、餐饮与社群活动。","07","combination-2"],["集成房屋组合3","立体组合 · 复合体验","双层箱体、露台与连廊，打造可拓展的商业空间。","08","combination-3"]];
const steps = ["项目沟通","场地勘察","方案报价","工厂生产","运输安装","交付服务"];
const galleryItems = [
  { src:"/real-gallery/车间01.png", alt:"山江车间生产实拍", section:"FACTORY / 01", title:"车间生产与加工能力", feature:true },
  { src:"/real-gallery/车间02.png", alt:"山江车间设备实拍", section:"FACTORY / 02", title:"自动化生产设备" },
  { src:"/real-gallery/车间03.png", alt:"山江产品装车实拍", section:"FACTORY / 03", title:"成品装车发运" },
  { src:"/real-gallery/车间04.png", alt:"山江产品装车实拍", section:"FACTORY / 04", title:"装车与交付准备" },
  { src:"/real-gallery/车间05.png", alt:"山江车间卷材加工实拍", section:"FACTORY / 05", title:"卷材加工与设备能力" },
  { src:"/real-gallery/办公室01.png", alt:"山江办公环境实拍", section:"OFFICE / 01", title:"办公与服务团队" },
  { src:"/real-gallery/办公室02.png", alt:"山江办公环境实拍", section:"OFFICE / 02", title:"办公配套环境" },
  { src:"/real-gallery/工地案例01.png", alt:"山江模块化建筑项目实拍", section:"PROJECT / 01", title:"模块化办公项目" },
  { src:"/real-gallery/工地案例02.png", alt:"山江施工现场实拍", section:"PROJECT / 02", title:"施工现场案例" },
  { src:"/real-gallery/project-brand-space.png", alt:"模块化品牌展示与接待空间案例", section:"PROJECT / 03", title:"品牌展示与接待空间" },
  { src:"/real-gallery/project-park-space.png", alt:"模块化园区公共空间案例", section:"PROJECT / 04", title:"园区配套与公共空间" },
  { src:"/real-gallery/project-tourism-camp.png", alt:"模块化文旅营地与住宿空间案例", section:"PROJECT / 05", title:"文旅营地与品质住宿" },
  { src:"/real-gallery/project-campus-aerial.png", alt:"大型工地项目部案例", section:"PROJECT / 06", title:"大型工地项目部" },
];
export default function Home(){return <main>
<header className="topbar">
<span>广州山江钢结构</span>
<a href="tel:13539957289">电话：13539957289（微信同号）</a>
</header>
<nav className="nav" aria-label="主导航">
<a className="brand" href="/#top">
<b>ZY</b>
<span>广州山江钢结构<small>SHANJIANG STEEL STRUCTURE</small>
</span>
</a>
<div className="navLinks">
<a href="/projects">项目案例</a>
<a href="/#products">产品体系</a>
<a href="/tekla-steel-detailing-cn">Tekla钢结构深化</a>
<a href="/news">资讯中心</a>
<a className="langSwitch" href="/en">English</a>
<a className="navCta" href="/#contact">获取方案报价 <i>→</i>
</a>
</div>
</nav>
<section id="top" className="hero">
<div className="heroImage"/>
<div className="heroShade"/>
<div className="heroText">
<p>MODULAR BUILDING · ONE-STOP DELIVERY</p>
<h1>让每一个项目，<br/>
<em>更快落地。</em>
</h1>
<div className="heroLine"/>
<span>从工地临建到品质营地，山江以模块化制造与现场交付经验，<br/>为您建立更高效、更安心的空间解决方案。</span>
<div>
<a className="btn fill" href="#contact">获取项目方案 <b>→</b>
</a>
<a className="btn light" href="#products">了解山江产品</a>
</div>
</div>
<div className="heroBadge">
<strong>70<span>%</span>
</strong>
<small>较传统建造<br/>缩短现场工期</small>
</div>
</section>
<section className="intro">
<p className="kicker">SHANJIANG STEEL STRUCTURE</p>
<h2>空间不该等待。<br/>
<em>它应当被高效制造。</em>
</h2>
<p className="introCopy">广州山江钢结构专注于集成房屋的设计、生产与安装。我们把复杂的现场需求，拆解为可控的模块化交付，让每一个项目都有更清晰的时间表、更稳定的品质与更从容的现场。</p>
<div className="facts">
<div>
<b>10<span>+</span>
</b>
<small>年行业经验</small>
</div>
<div className="deliveryMetric">
<b>约100,000<span>㎡</span></b>
<small>年交付能力</small>
</div>
<div>
<b>24<span>h</span>
</b>
<small>快速响应服务</small>
</div>
<div>
<b>一站式</b>
<small>从方案到安装</small>
</div>
</div>
</section>
<section id="products" className="products">
<div className="sectionTitle">
<div>
<p className="kicker">PRODUCTS</p>
<h2>为不同现场，<br/>
<em>准备合适的空间。</em>
</h2>
</div>
<p>从一间标准箱房，到大型营地的整体规划。<br/>我们将产品、效率和使用体验做在一起。</p>
</div>
<div className="productGrid">{products.map(([title,tag,desc,num,slug],index)=>
<a href={`/products/${slug}`} className={`product p${index+1}`} key={title} aria-label={`查看${title}产品详情`}>
<span>{num}</span>
<ResponsiveImage className="productPhoto" src={`/product-${slug}.webp`} alt={`${title}实景照片`} mobileSizes="(max-width: 850px) 50vw, 25vw"/>
<div className="productInfo">
<small>{tag}</small>
<h3>{title}</h3>
<p>{desc}</p>
<span className="productLink">查看产品详情 <b>↗</b>
</span>
</div>
</a>)}</div>
</section>
<section id="projects" className="projects">
<div className="projectLead">
<p className="kicker">SELECTED PROJECTS</p>
<h2>有温度的空间，<br/>
<em>也要经得起现场考验。</em>
</h2>
<p>山江服务于建设工地、产业园、文旅营地与商业临建等多样项目。从实用出发，也从长期使用的舒适度出发。</p>
<a className="arrowLink" href="/projects">查看全部项目案例 <b>→</b>
</a>
</div>
<div className="projectCards">
<a href="/projects/large-site-camp" className="projectCard large">
<div>
<small>PROJECT / 01</small>
<h3>大型工地<br/>生活办公营地</h3>
<span>模块化组合 · 分期交付</span>
<i>查看详情 →</i>
</div>
</a>
<a href="/projects/industrial-park-office" className="projectCard">
<div>
<small>PROJECT / 02</small>
<h3>园区临时<br/>办公空间</h3>
<i>查看详情 →</i>
</div>
</a>
<a href="/projects/cultural-tourism-camp" className="projectCard">
<div>
<small>PROJECT / 03</small>
<h3>文旅营地<br/>品质住宿单元</h3>
<i>查看详情 →</i>
</div>
</a>
</div>
</section>
<section className="designCapability">
<div className="designCapabilityLead">
<p className="kicker">DESIGN &amp; DETAILING</p>
<h2>从方案到施工，<br/><em>把每一步做清楚。</em></h2>
<p>围绕实际项目需求，可提供图纸、效果表达与钢结构深化支持，帮助客户更高效地确认方案、组织生产与现场安装。</p>
</div>
<div className="designCapabilityGrid">
<article><b>01</b><small>CAD DRAWINGS</small><h3>CAD 施工图</h3><p>平面、立面、节点、基础及水电预留等施工参考图纸。</p></article>
<article><b>02</b><small>3D VISUALS</small><h3>3D 效果图</h3><p>用于前期方案沟通、空间组合与外观效果确认。</p></article>
<a className="designCapabilityCard" href="/tekla-steel-detailing-cn" aria-label="进入Tekla钢结构深化服务中文页面"><b>03</b><small>TEKLA DETAILING</small><h3>Tekla 详图深化</h3><p>针对钢结构构件、节点及加工安装需求进行深化。</p><i className="designCapabilityArrow">→</i></a>
</div>
</section>
<section id="why" className="why">
<div className="whyVisual">
<div className="frame">
<span>FACTORY DIRECT</span>
<b>山江制造</b>
</div>
</div>
<div className="whyText">
<p className="kicker">WHY SHANJIANG</p>
<h2>好房子，<br/>
<em>从可靠的制造开始。</em>
</h2>
<p>我们坚持在工厂完成更多工作，在现场减少更多不确定性。统一的材料标准、清晰的生产节点和经验丰富的安装团队，让项目交付不止“快”，更是“稳”。</p>
<ul>
<li>
<b>01</b> 工厂标准化生产，品质稳定可控</li>
<li>
<b>02</b> 结构、装配、运输方案同步规划</li>
<li>
<b>03</b> 专人项目跟进，安装售后有保障</li>
</ul>
</div>
</section>
<section id="process" className="process">
<p className="kicker">HOW WE WORK</p>
<h2>从第一次沟通，<br/>
<em>到空间真正投入使用。</em>
</h2>
<div className="steps">{steps.map((step,i)=>
<div key={step}>
<b>0{i+1}</b>
<span>{step}</span>
<i>→</i>
</div>)}</div>
</section>
<section className="news">
<div>
<p className="kicker">INSIGHTS</p>
<h2>懂产品，也懂现场。</h2>
</div>
<div className="newsList">
<a href="/news/integrated-vs-prefabricated">
<small>行业知识</small>
<b>集成房屋与装配式房屋，有什么区别？</b>
<span>阅读文章 →</span>
</a>
<a href="/news/site-camp-planning-checklist">
<small>交付指南</small>
<b>做工地营地前，需要确认哪些事情？</b>
<span>阅读文章 →</span>
</a>
<a href="/news/flat-pack-office-layout">
<small>产品应用</small>
<b>打包箱如何组合成高效办公空间？</b>
<span>阅读文章 →</span>
</a>
</div>
</section>
<section className="realGallery" aria-label="工厂与项目实拍">
<div className="galleryHeading">
<div><p className="kicker">REAL FACTORY &amp; PROJECTS</p><h2>看得见的生产实力，<br/><em>经得起现场考验。</em></h2></div>
<p>从工厂生产、办公配套到项目现场，所有照片均为山江真实记录。点击图片可查看大图。</p>
</div>
<GalleryLightbox items={galleryItems} />
</section>
<section id="contact" className="contact">
<div>
<p className="kicker">CONTACT SHANJIANG</p>
<h2>把您的想法，<br/>
<em>变成可落地的空间。</em>
</h2>
<p>告诉我们项目所在地、使用人数和计划时间，我们将在 24 小时内为您提供初步建议。</p>
<div className="contactDetails">
<span>广州山江钢结构</span>
<span>地址：广州市从化区太平镇太平村渡头庄14号一楼（自主申报）</span>
<a href="tel:13539957289">电话：13539957289</a>
<a href="mailto:13120056@qq.com">邮箱：13120056@qq.com</a>
</div>
<div className="wechatContact">
<div><small>WECHAT / 微信咨询</small><b>扫码添加微信，获取方案报价</b><span>电话：13539957289（微信同号）</span></div>
<img src="/wechat-qr.png" alt="广州山江钢结构微信二维码" width={136} height={136} loading="eager" decoding="async" fetchPriority="high"/>
</div>
</div>
<QuoteForm />
</section>
<aside className="quickContact" aria-label="快速咨询">
<a href="tel:13539957289">电话咨询</a>
<a href="#contact">在线询价</a>
</aside>
<footer>
<a className="brand" href="#top">
<b>ZY</b>
<span>广州山江钢结构<small>SHANJIANG STEEL STRUCTURE</small>
</span>
</a>
<p>广州市从化区太平镇太平村渡头庄14号一楼（自主申报）<br/>13539957289 · 13120056@qq.com</p>
<small>© 2026 SHANJIANG STEEL STRUCTURE. ALL RIGHTS RESERVED.</small>
</footer>
</main>}
