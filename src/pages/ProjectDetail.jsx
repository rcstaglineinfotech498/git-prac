import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import SEO from '../components/common/SEO.jsx';
import ProjectCard from '../components/common/ProjectCard.jsx';
import { projects } from '../data/projects.js';

function Drawings({ title }) {
  return (
    <section className="section drawings-section">
      <div className="container drawings-grid">
        <div>
          <p className="eyebrow">Design development</p>
          <h2>From the first line to the finished place.</h2>
          <p className="drawings-copy">A project is built through a sequence of careful decisions. This schematic plan shows how rooms, movement and landscape can work together.</p>
        </div>
        <div className="plan-card">
          <span>Ground floor · Concept plan</span>
          <svg viewBox="0 0 620 360" role="img" aria-label={`Conceptual floor plan drawing for ${title}`}>
            <rect x="50" y="35" width="505" height="285" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M50 165h200v155M250 35v130h305M250 165h155v155M405 165v-90h150M405 245h150M110 35v130M110 165v95h140M250 260h155M455 75h100M455 245v75" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M125 38v120M265 178h125M418 90h122M425 258h115" fill="none" stroke="var(--color-accent-contrast)" strokeWidth="1" strokeDasharray="5 5" />
            <text x="135" y="105">LIVING</text><text x="296" y="113">COURTYARD</text><text x="295" y="230">KITCHEN</text><text x="450" y="135">BEDROOM</text><text x="457" y="295">STUDY</text><text x="63" y="304">01</text>
          </svg>
          <div className="plan-legend"><span><i /> Living / shared</span><span><i /> Private / service</span></div>
        </div>
      </div>
    </section>
  );
}

function BeforeAfter({ project }) {
  const [position, setPosition] = useState(50);
  return (
    <section className="section before-after-section">
      <div className="container before-after-grid">
        <div>
          <p className="eyebrow">A considered renewal</p>
          <h2>Before &amp; after</h2>
          <p className="drawings-copy">A careful renovation can respect what is already loved while making room for what comes next. Move the slider to explore the transformation.</p>
        </div>
        <div className="comparison-wrap">
          <div className="comparison-images">
            <img src={project.beforeAfter.after} alt={`${project.title} after renovation`} />
            <div className="comparison-before" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
              <img src={project.beforeAfter.before} alt={`${project.title} before renovation`} />
            </div>
            <span className="comparison-label before-label">Before</span>
            <span className="comparison-label after-label">After</span>
            <span className="comparison-divider" style={{ left: `${position}%` }} />
          </div>
          <label className="sr-only" htmlFor="comparison-slider">Compare before and after images</label>
          <input id="comparison-slider" className="comparison-slider" type="range" min="0" max="100" value={position} onChange={(event) => setPosition(Number(event.target.value))} />
        </div>
      </div>
    </section>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const [lightbox, setLightbox] = useState(-1);
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <section className="not-found container"><p className="eyebrow">Project not found</p><h1>This project isn’t here.</h1><Link className="text-link" to="/projects">Back to projects <FiArrowRight /></Link></section>;
  }

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const related = projects.filter((item) => item.slug !== slug && item.category === project.category).slice(0, 2);
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <SEO title={project.title} description={project.excerpt} />
      <section className="detail-hero">
        <img src={project.image} alt={`${project.title}, ${project.location}`} />
        <div className="detail-hero-overlay"><div className="container"><p className="eyebrow">{project.category} · {project.year}</p><h1>{project.title}</h1><p>{project.location}</p></div></div>
      </section>
      <section className="section project-detail-section">
        <div className="container project-detail-grid">
          <aside className="project-facts">
            <p className="eyebrow">Project details</p>
            {[['Location', project.location], ['Year', project.year], ['Area', project.area || '—'], ['Client', project.client || 'Private client'], ['Status', project.status || 'Completed'], ['Architects', project.architects || 'Atelier team']].map(([label, value]) => <div className="fact-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}
          </aside>
          <article className="project-story">
            <p className="eyebrow">The story</p><h2>A considered response to place.</h2><p>{project.overview}</p>
            <div className="challenge-solution"><div><h3>The challenge</h3><p>{project.challenge}</p></div><div><h3>Our response</h3><p>{project.solution}</p></div></div>
          </article>
        </div>
        <div className="container detail-gallery">
          <p className="eyebrow">A closer look</p>
          <div className="gallery-grid">{project.gallery.map((image, index) => <button onClick={() => setLightbox(index)} className={`gallery-image gallery-image-${index}`} key={image} aria-label={`Open gallery image ${index + 1}`}><img src={image} alt={`${project.title} detail ${index + 1}`} loading="lazy" /></button>)}</div>
        </div>
      </section>
      <Drawings title={project.title} />
      {project.renovation && project.beforeAfter && <BeforeAfter project={project} />}
      <section className="project-nav container"><Link to={`/projects/${previous.slug}`}><FiArrowLeft /> Previous project</Link><span>{String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span><Link to={`/projects/${next.slug}`}>Next project <FiArrowRight /></Link></section>
      {related.length > 0 && <section className="section related-section"><div className="container"><p className="eyebrow">Continue exploring</p><h2>Related projects</h2><div className="projects-grid">{related.map((item, index) => <ProjectCard key={item.slug} project={item} index={index} />)}</div></div></section>}
      <section className="small-cta"><div className="container"><p>Inspired by this project?</p><Link to="/contact">Start a similar project <FiArrowUpRight /></Link></div></section>
      <Lightbox open={lightbox >= 0} index={lightbox} close={() => setLightbox(-1)} slides={project.gallery.map((src) => ({ src }))} />
    </>
  );
}
