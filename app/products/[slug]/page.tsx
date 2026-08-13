import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { getProduct, products } from "../data";
import { mobileImageSrc } from "../../image-paths";

const cases:Record<string,{title:string;description:string}>={
  "flat-pack":{title:"大型工程项目办公营地",description:"采用标准打包箱横向组合，设置办公室、会议室与接待区，并预留后续扩建接口。"},
  "quick-assembly":{title:"产业园临时住宿项目",description:"根据场地分区布置快拼箱宿舍、管理用房和公共卫浴，满足分批入住需求。"},
  "site-office":{title:"大型施工项目 K 型营地",description:"采用 K 型轻钢框架、夹芯板和坡屋顶，按办公、住宿、走廊及楼梯组织营地空间。"},
  "site-fence":{title:"城市街区波浪箱创意空间",description:"以彩色集装箱灵活叠放组合，搭配玻璃橱窗、雨棚、灯光与品牌标识，快速形成具备展示、零售与接待功能的创意商业空间。"},
  "premium-house":{title:"U 形四坡顶项目营地",description:"以围合式布局、两层走廊和四坡屋顶组织办公、住宿及接待等营地功能。"},
  "combination-1":{title:"通透接待展示空间",description:"以落地玻璃、屋顶露台和上下模块组合，构成开放、轻盈的接待与展示空间。"},
  "combination-2":{title:"彩色集装箱创意空间",description:"橙绿箱体错层叠放，结合楼梯和露台，为餐饮、零售与社群活动提供高识别度场所。"},
  "combination-3":{title:"立体复合集成街区",description:"通过双层箱体、露台与连廊组织丰富动线，适用于商业、休闲与品牌活动场景。"}
};

const coreProductDetails:Record<string,{system:string;intro:string;structure:[string,string][];steps:[string,string][];question:string;answer:string}>={
  "flat-pack":{system:"标准平顶箱式模块",intro:"行业常用单箱尺寸约为 6055 × 2990 × 2895 mm，以顶框、底框、角柱与保温墙板组成平顶模块；可按项目形成单层、多层或连廊组合。",structure:[["主体模块","顶框、底框、四角立柱与围护墙板"],["常规围护","50 / 75 mm 保温夹芯墙板，门窗和电气可选"],["组合逻辑","单箱、横向、纵向及走廊组合；层数以设计复核为准"]],steps:[["01","确认用途、数量与平面组合"],["02","工厂完成模块构件与配套准备"],["03","按项目计划发运并现场安装"],["04","按使用需要继续扩建或转场"]],question:"打包箱适合什么项目？",answer:"适合需要标准化模块、可灵活组合和后续可调整的项目，例如施工营地、临时办公、宿舍及配套空间。"},
  "quick-assembly":{system:"平顶快拼箱结构",intro:"以角件、立柱、上下框架、檩条、墙板和屋面构件现场拼接。常规配置可采用 50 / 75 mm 岩棉夹芯板、玻镁防火地板、钢质门和塑钢推拉窗。",structure:[["主体框架","角件、立柱、顶底框及檩条的拼装结构"],["平顶屋面","顶瓦、保温层及吊顶板的平顶构造"],["门窗地面","钢质门、带防护栏推拉窗；常规 16 mm 玻镁防火地板"]],steps:[["01","确认场地、人数、功能与工期"],["02","按批量需求安排构件生产"],["03","构件运输到场并组织快速搭建"],["04","按使用阶段补充单元或配套"]],question:"快拼箱适合什么项目？",answer:"适合工期紧、数量较多、需分批交付的临时建筑项目，例如施工住宿、临时仓储、门卫室与现场管理用房。"},
  "site-office":{system:"K 型板房模数体系",intro:"采用 1K = 1820 mm 的常用模数，通过轻钢立柱、圈梁、斜撑、坡屋顶屋架和夹芯板围护组成。",structure:[["骨架系统","轻钢立柱、圈梁、斜撑、屋架与檩条"],["围护屋面","彩钢夹芯墙板、屋面板与收边系统"],["空间组织","单层、双层或三层参考方案，可配走廊和楼梯"]],steps:[["01","确认场地、人数、工期与功能需求"],["02","按 K 模数梳理平面、走廊和楼梯位置"],["03","确定构件清单与分阶段安装计划"],["04","现场拼装并按项目进度调整"]],question:"K 型板房如何开始规划？",answer:"提供项目地点、预计人数、工期、办公与住宿需求后，山江可先协助梳理按 K 模数组织的基础功能分区和产品组合方向。"},
  "premium-house":{system:"U 形四坡顶组合体系",intro:"以 U 形围合布局组织办公、住宿或接待空间，钢柱、梁、楼面和夹芯板围护构成主体；屋面采用四坡屋架、檩条、屋面板及排水收边。",structure:[["主体结构","钢柱、钢梁、楼面梁与二层走廊"],["围合布局","U 形开口及中央活动空间按场地布置"],["屋面围护","四坡屋架、檩条、屋面板；门窗和内装按区域配置"]],steps:[["01","确认场地、人数、功能与 U 形开口方向"],["02","梳理办公、住宿、走廊及楼梯动线"],["03","完成结构、围护和屋面构件准备"],["04","现场安装并完成门窗、水电与配套"]],question:"U 形四坡顶豪华房适合什么项目？",answer:"适合需要办公、住宿、接待等多功能分区的项目营地和园区配套。具体尺寸、层数及屋面做法应结合场地和设计要求确认。"}
};

const advantageDescriptions:Record<string,string[]>={
  "flat-pack":[
    "顶框、底框、角柱及围护系统按标准化流程生产，便于统一质量管理。",
    "单箱可并联、叠层或设置连廊，方便根据人数和场地调整平面。",
    "工厂预制并按计划发运，现场以吊装、连接和配套安装为主。",
    "项目需求变化时，可继续扩建、拆装或转场复用，降低重复建设成本。"
  ]
};

export function generateStaticParams(){return products.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const product=getProduct(slug);return {title:product?`${product.name}｜广州山江钢结构`:"产品详情｜广州山江钢结构",description:product?.description};}

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const product=getProduct(slug);
  if(!product)notFound();
  const image=slug==="premium-house" ? "/product-premium-house-card.png" : slug.startsWith("combination-") ? `/product-${slug}.jpg` : `/product-${slug}.webp`;
  const project=cases[slug];
  const core=coreProductDetails[slug];
  const advantageNotes=advantageDescriptions[slug]||product.advantages.map(()=>"以标准化制造和现场安装经验，帮助项目减少等待与不确定性。");
  const detailImages:Record<string,string>={"flat-pack":"/product-details/flat-pack-approved.png?v=20260731-43","quick-assembly":"/product-details/quick-assembly-approved.png?v=20260731-43","site-office":"/product-details/k-type-approved.png?v=20260731-43","premium-house":"/product-details/u-shaped-hip-roof-approved.png?v=20260731-43"};
  const approvedImage=detailImages[slug];
  const secondaryImages:Record<string,string>={"flat-pack":"/product-details/flat-pack-structure.png","quick-assembly":"/product-details/quick-assembly-structure.png","site-office":"/product-details/k-type-interior.png","premium-house":"/product-details/u-shaped-hip-roof-frame.png"};
  const secondaryImage=secondaryImages[slug];
  const caseImage=image;
  const related=products.filter(item=>item.slug!==slug).slice(0,3);
  return <main className="detail">
    <header className="detailTop"><a className="brand" href="/"><b>ZY</b><span>广州山江钢结构<small>SHANJIANG STEEL STRUCTURE</small></span></a><div><a href="/#products">全部产品</a><a className="detailCta" href="#inquiry">获取报价 →</a></div></header>
    <section className="detailHero"><div><p>{product.en}</p><h1>{product.name}</h1><h2>{product.tagline}</h2><span>PRODUCT / SHANJIANG STEEL STRUCTURE</span></div><div className="detailImage" style={{"--desktop-image":`url(${image})`,"--mobile-image":`url(${mobileImageSrc(image)})`} as CSSProperties}/></section>
    <section className="detailIntro"><div><p className="kicker">PRODUCT OVERVIEW</p><h2>为项目而生的<br/><em>{product.name}解决方案。</em></h2></div><p>{product.description}</p></section>
    {core&&<section className="detailSystem detailSystemV2"><div className="systemIntro"><div><p className="kicker">PRODUCT SYSTEM</p><h2>{core.system}</h2></div><p>{core.intro}</p></div><div className="systemContent"><div className="systemMedia">{approvedImage&&<figure><img src={approvedImage} srcSet={`${mobileImageSrc(approvedImage)} 900w, ${approvedImage} 1800w`} sizes="(max-width: 850px) 100vw, 50vw" alt={`${product.name}实拍图`}/><figcaption>项目实拍图 <span>PROJECT VIEW</span></figcaption></figure>}{secondaryImage&&<figure><img className="systemDrawing" src={secondaryImage} srcSet={`${mobileImageSrc(secondaryImage)} 900w, ${secondaryImage} 1800w`} sizes="(max-width: 850px) 100vw, 50vw" alt={`${product.name}结构示意图`}/><figcaption>结构参考图 <span>SYSTEM REFERENCE</span></figcaption></figure>}</div><div className="systemDiagram" aria-label={`${product.name} system overview`}>{core.structure.map(([label,value],index)=><article key={label}><b>0{index+1}</b><span>{label}</span><strong>{value}</strong></article>)}</div></div></section>}
    <section className="detailSplit"><div className="detailUse"><p className="kicker">APPLICATIONS</p><h2>适用场景</h2>{product.applications.map((item,index)=><div className="useRow" key={item}><b>0{index+1}</b><span>{item}</span></div>)}</div><div className="detailStructure"><p>MODULAR SYSTEM</p><h3>{core?core.system:"工厂预制\n现场快速安装"}</h3>{(core?core.structure:[["主体结构","轻钢模块框架"],["围护系统","保温夹芯墙板"],["组合方式","单箱 / 横向 / 多层"]]).map(([label,value])=><div key={label}><span>{label}</span><b>{value}</b></div>)}</div></section>
    {core&&<section className="deliveryPlan"><div><p className="kicker">PROJECT DELIVERY</p><h2>从需求到落地，<br/><em>每一步更清楚。</em></h2><p>以下为常见项目推进方式。实际方案、生产与安装安排，以确认后的项目需求为准。</p></div><div>{core.steps.map(([number,text])=><article key={number}><b>{number}</b><span>{text}</span></article>)}</div></section>}
    <section className="detailAdvantages"><p className="kicker">CORE ADVANTAGES</p><h2>让交付更清晰，<br/><em>让现场更从容。</em></h2><div>{product.advantages.map((item,index)=><article key={item}><b>0{index+1}</b><h3>{item}</h3><p>{advantageNotes[index]}</p></article>)}</div></section>
    <section className="detailSpecs"><div><p className="kicker">TECHNICAL REFERENCE</p><h2>产品参考信息</h2><p>以下为常用配置参考。具体尺寸、材料及技术要求，将根据项目需求确认。</p></div><dl>{product.specs.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>
    <section className="detailOptions"><p className="kicker">CUSTOMIZATION</p><h2>可选配置</h2><div>{product.options.map(option=><span key={option}>✓ {option}</span>)}</div></section>
    <section className="productCase"><div className="casePhoto" style={{"--desktop-image":`url(${caseImage})`,"--mobile-image":`url(${mobileImageSrc(caseImage)})`} as CSSProperties}/><div><p className="kicker">APPLICATION CASE</p><h2>{project.title}</h2><p>{project.description}</p><dl><div><dt>产品类型</dt><dd>{product.name}</dd></div><div><dt>服务内容</dt><dd>方案、供货、运输、安装</dd></div><div><dt>适用场景</dt><dd>{product.applications[0]}</dd></div></dl><a href="#inquiry">获取类似项目方案 →</a></div></section>
    <section className="relatedProducts"><p className="kicker">RELATED PRODUCTS</p><h2>相关产品</h2><div>{related.map(item=><a key={item.slug} href={`/products/${item.slug}`}><span>{item.en}</span><b>{item.name}</b><i>查看详情 →</i></a>)}</div></section>
    {core&&<section className="productFaq"><p className="kicker">COMMON QUESTION</p><h2>{core.question}</h2><p>{core.answer}</p></section>}
    <section id="inquiry" className="detailInquiry"><div><p>START A PROJECT</p><h2>需要这类产品？<br/>让我们从项目需求开始。</h2><span>留下基本信息，我们将在 24 小时内联系您。</span></div><form action="https://formsubmit.co/13120056@qq.com" method="POST"><input type="hidden" name="_subject" value={`山江网站：${product.name}方案报价咨询`}/><input type="hidden" name="_next" value="https://YOUR-DOMAIN.example/thanks"/><input type="hidden" name="_url" value={`https://YOUR-DOMAIN.example/products/${slug}`}/><input type="hidden" name="_template" value="table"/><input name="name" required placeholder="您的称呼"/><input name="phone" required inputMode="tel" placeholder="联系电话"/><textarea name="requirement" required placeholder="项目地点、数量、用途、预计使用时间等"/><button type="submit">获取方案报价 →</button></form></section>
    <footer><span>广州山江钢结构</span><a href="/">返回首页 ↑</a></footer>
  </main>
}
