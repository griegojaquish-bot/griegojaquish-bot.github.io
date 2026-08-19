import type { Metadata } from "next";
import Link from "next/link";
import "../gallery.css";
import "../tekla-link.css";
import GalleryLightbox from "../gallery-lightbox";
import EnglishHomeEnhancements from "./featured";
import ResponsiveImage from "../responsive-image";

export const metadata: Metadata = {
  title: "Shanjiang Modular Housing | Modular Building Solutions",
  description: "Shanjiang provides modular housing, flat-pack containers, site offices and one-stop project delivery.",
};

const categories = [
  ["01", "Flat-Pack Containers", "Flexible units for site camps, offices, accommodation and support facilities.", "flat-pack"],
  ["02", "Quick Assembly Houses", "Economical modular buildings for rapid, large-volume delivery.", "quick-assembly"],
  ["03", "K-Type Prefab Houses", "Pitched-roof, modular camp buildings for offices, accommodation and support spaces.", "site-office"],
  ["04", "Wave Containers", "Creative modular spaces for retail, displays and temporary commercial use.", "site-fence"],
  ["05", "U-Shaped Hip-Roof Houses", "Courtyard-style modular camps with corridors, stairs and four-slope roofs.", "premium-house"],
  ["06", "Modular Combination 1", "Open reception and display spaces with terraces and glazed areas.", "combination-1"],
  ["07", "Modular Combination 2", "Colourful stacked modules for hospitality, retail and community events.", "combination-2"],
  ["08", "Modular Combination 3", "Multi-level modular spaces for commercial and leisure projects.", "combination-3"],
];

const englishGalleryItems = [
  { src:"/real-gallery/车间01.png", alt:"Shanjiang workshop production", section:"FACTORY / 01", title:"Workshop production and capacity", feature:true },
  { src:"/real-gallery/车间02.png", alt:"Shanjiang workshop equipment", section:"FACTORY / 02", title:"Production equipment" },
  { src:"/real-gallery/车间03.png", alt:"Shanjiang products prepared for delivery", section:"FACTORY / 03", title:"Finished products for delivery" },
  { src:"/real-gallery/车间04.png", alt:"Shanjiang loading and delivery preparation", section:"FACTORY / 04", title:"Loading and delivery preparation" },
  { src:"/real-gallery/车间05.png", alt:"Shanjiang coil processing workshop", section:"FACTORY / 05", title:"Coil processing capability" },
  { src:"/real-gallery/办公室01.png", alt:"Shanjiang office and service team", section:"OFFICE / 01", title:"Office and service team" },
  { src:"/real-gallery/办公室02.png", alt:"Shanjiang office environment", section:"OFFICE / 02", title:"Office environment" },
  { src:"/real-gallery/工地案例01.png", alt:"Shanjiang modular office project", section:"PROJECT / 01", title:"Modular office project" },
  { src:"/real-gallery/工地案例02.png", alt:"Shanjiang construction site project", section:"PROJECT / 02", title:"Construction site project" },
  { src:"/real-gallery/project-brand-space.png", alt:"Modular brand display and reception space", section:"PROJECT / 03", title:"Brand display and reception space" },
  { src:"/real-gallery/project-park-space.png", alt:"Modular public space in a park", section:"PROJECT / 04", title:"Park facilities and public space" },
  { src:"/real-gallery/project-tourism-camp.png", alt:"Modular tourism camp and accommodation", section:"PROJECT / 05", title:"Tourism camp and quality accommodation" },
  { src:"/real-gallery/project-campus-aerial.png", alt:"Large construction project office", section:"PROJECT / 06", title:"Large construction project office" },
];

export default function EnglishHome() {
  return <main>
    <GalleryLightbox items={englishGalleryItems} replaceSelector="#factory .galleryGrid" />
    <header className="topbar"><span>Guangzhou Shanjiang Steel Structure</span><a href="tel:13539957289">Tel: +86 135 3995 7289 (WeChat)</a></header>
    <nav className="nav" aria-label="Main navigation"><Link className="brand" href="/en"><b>SJ</b><span>SHANJIANG<small>MODULAR HOUSING</small></span></Link><div className="navLinks"><a href="#products">Products</a><Link href="/en/factory">Factory &amp; Projects</Link><Link href="/tekla-steel-detailing">Tekla Detailing</Link><Link href="/tekla-steel-detailing-cn">中文 Tekla</Link><Link href="/en/news">News</Link><a href="#contact">Contact</a><Link href="/">中文</Link><a className="navCta" href="#contact">Get a Quote <i>→</i></a></div></nav>
    <section className="hero"><div className="heroImage"/><div className="heroShade"/><div className="heroText"><p>MODULAR BUILDING · ONE-STOP DELIVERY</p><h1>Bring every project<br/><em>to life, faster.</em></h1><div className="heroLine"/><span>From site facilities to quality camps, Shanjiang delivers efficient, dependable modular spaces from manufacturing through installation.</span><div><a className="btn fill" href="#contact">Request a Proposal <b>→</b></a><a className="btn light" href="#products">Explore Products</a></div></div><div className="heroBadge"><strong>70<span>%</span></strong><small>Less on-site time<br/>than traditional building</small></div></section>
    <section className="intro"><div><p className="kicker">SHANJIANG STEEL STRUCTURE</p><h2>Spaces should not wait.<br/><em>They should be made efficiently.</em></h2></div><div><p className="introCopy">Guangdong Shanjiang Modular Housing designs, manufactures and installs integrated modular buildings. We turn complex site needs into dependable, clearly scheduled deliveries.</p></div><div className="facts"><div><b>10<span>+</span></b><small>Years of experience</small></div><div><b>100<span>k</span>㎡</b><small>Annual delivery capacity</small></div><div><b>24<span>h</span></b><small>Fast response service</small></div><div><b>One-stop</b><small>From proposal to installation</small></div></div></section>
    <section id="products" className="products"><div className="sectionTitle"><div><p className="kicker">PRODUCTS</p><h2>The right space,<br/><em>for every site.</em></h2></div><p>From a single modular unit to the planning of a complete camp.</p></div><div className="productGrid">{categories.map(([number, title, text, slug]) => <Link className={`product p${number}`} href={`/en/products/${slug}`} key={slug}><span>{number}</span><ResponsiveImage className="productPhoto" src={`/product-${slug}.webp`} alt={title} mobileSizes="(max-width: 850px) 50vw, 25vw"/><div className="productInfo"><small>MODULAR SOLUTION</small><h3>{title}</h3><p>{text}</p><span className="productLink">View details <b>→</b></span></div></Link>)}</div></section>
    <EnglishHomeEnhancements />
    <section id="factory" className="realGallery" aria-label="Factory and project photographs"><div className="galleryHeading"><div><p className="kicker">REAL FACTORY &amp; PROJECTS</p><h2>Visible manufacturing strength,<br/><em>proven on site.</em></h2></div><p>Factory production, delivery preparation and completed projects — all recorded by Shanjiang.</p></div><div className="galleryGrid"><figure className="galleryFeature"><img src="/real-gallery/车间01.png" alt="Workshop production"/><figcaption><small>FACTORY / 01</small><b>Workshop production</b></figcaption></figure><figure><img src="/real-gallery/车间02.png" alt="Workshop equipment"/><figcaption><small>FACTORY / 02</small><b>Production equipment</b></figcaption></figure><figure><img src="/real-gallery/车间05.png" alt="Coil processing in workshop"/><figcaption><small>FACTORY / 03</small><b>Coil processing capability</b></figcaption></figure><figure><img src="/real-gallery/车间03.png" alt="Finished products being loaded"/><figcaption><small>FACTORY / 04</small><b>Loading for delivery</b></figcaption></figure><figure><img src="/real-gallery/工地案例01.png" alt="Modular office project"/><figcaption><small>PROJECT / 01</small><b>Modular office project</b></figcaption></figure></div><Link className="galleryLink" href="/en/factory">View factory &amp; project proof <b>→</b></Link></section>
    <section id="contact" className="contact"><div><p className="kicker">CONTACT SHANJIANG</p><h2>Turn your brief into<br/><em>a working space.</em></h2><p>Tell us your country, intended use, quantity and project schedule. We will provide initial advice within 24 hours.</p><div className="contactDetails"><span>Guangzhou Shanjiang Steel Structure</span><a href="tel:13539957289">+86 135 3995 7289</a><a href="mailto:13120056@qq.com">13120056@qq.com</a></div></div><form className="quoteForm" action="https://formsubmit.co/13120056@qq.com" method="POST"><input type="hidden" name="_subject" value="Shanjiang Website: New English Quote Request"/><input type="hidden" name="_next" value="https://shanjiang.asia/en/thanks"/><input type="hidden" name="_url" value="https://shanjiang.asia/en/"/><input type="hidden" name="_template" value="table"/><p className="quoteHint">Submit your request directly to the Shanjiang team. For urgent enquiries, call or message us on WeChat.</p><label>Name or Company<input name="name" required maxLength={80} placeholder="Your name or company"/></label><label>Phone / WhatsApp<input name="phone" required maxLength={40} inputMode="tel" placeholder="Your phone or WhatsApp"/></label><label>Email (optional)<input name="email" type="email" maxLength={120} placeholder="For receiving a proposal"/></label><label className="formWide">Project Type<select name="projectType" required defaultValue=""><option value="" disabled>Select project type</option><option>Site camp / temporary facilities</option><option>Office / accommodation</option><option>Tourism / commercial space</option><option>Other modular project</option></select></label><label>Country / Region<input name="country" required maxLength={100} placeholder="Where will the project be located?"/></label><label>Estimated Quantity<input name="quantity" maxLength={80} placeholder="For example: 12 units"/></label><label>Preferred Size or Layout<input name="preferredSize" maxLength={120} placeholder="For example: 20ft, 40ft or custom"/></label><label className="formWide">Project Requirements<textarea name="requirement" required maxLength={2000} placeholder="Area, number of users, schedule and product requirements"/></label><button type="submit">Request a Proposal &amp; Quote <b>→</b></button></form></section>
    <aside className="quickContact" aria-label="Quick contact"><a href="tel:13539957289">Call us</a><a href="#contact">Request a quote</a></aside>
    <footer><Link className="brand" href="/en"><b>SJ</b><span>SHANJIANG<small>MODULAR HOUSING</small></span></Link><p>Taiping, Conghua, Guangzhou, Guangdong, China<br/>+86 135 3995 7289 · 13120056@qq.com</p><small>© 2026 SHANJIANG STEEL STRUCTURE. ALL RIGHTS RESERVED.</small></footer>
  </main>;
}
