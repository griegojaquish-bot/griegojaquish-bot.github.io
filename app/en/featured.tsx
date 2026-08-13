export default function EnglishHomeEnhancements() {
  return <>
    <section className="projects enProjects">
      <div className="projectLead">
        <p className="kicker">FEATURED SPACES</p>
        <h2>Real modular spaces,<br/><em>made for their setting.</em></h2>
        <p>A selection of project photographs showing mountain-camp reception, steel corridors and custom modular office spaces.</p>
      </div>
      <div className="projectCards">
        <div className="projectCard large"><div><small>SPACE / 01</small><h3>Mountain Valley<br/>Camp Reception</h3><span>Modular reception · mountain setting</span></div></div>
        <div className="projectCard"><div><small>SPACE / 02</small><h3>Steel Structure<br/>Corridor</h3><span>Night lighting · landscaped setting</span></div></div>
        <div className="projectCard"><div><small>SPACE / 03</small><h3>Custom Modular<br/>Space</h3><span>Terrace office · flexible combination</span></div></div>
      </div>
    </section>
    <section className="designCapability">
      <div className="designCapabilityLead">
        <p className="kicker">DESIGN &amp; DETAILING</p>
        <h2>From concept to site,<br/><em>make every step clear.</em></h2>
        <p>Project-based support for drawings, visual communication and steel-structure detailing helps teams confirm the solution, organise production and prepare installation.</p>
      </div>
      <div className="designCapabilityGrid">
        <article><b>01</b><small>CAD DRAWINGS</small><h3>CAD Construction Drawings</h3><p>Plans, elevations, key details, foundations and MEP reservation references.</p></article>
        <article><b>02</b><small>3D VISUALS</small><h3>3D Visualisations</h3><p>For proposal communication, spatial planning and facade confirmation.</p></article>
        <a className="designCapabilityCard" href="/tekla-steel-detailing" aria-label="Open English Tekla steel detailing service"><b>03</b><small>TEKLA DETAILING</small><h3>Tekla Detailing</h3><p>Steel member, connection and fabrication-installation detailing as required.</p><i className="designCapabilityArrow">→</i></a>
      </div>
    </section>
  </>;
}
