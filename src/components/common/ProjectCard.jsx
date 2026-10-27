import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

export default function ProjectCard({ project, index = 0, showExcerpt = false }) {
  return <article className={`project-card project-card-${index % 3}`}>
    <Link to={`/projects/${project.slug}`} className="project-image-link" aria-label={`View ${project.title}`}>
      <img src={project.image} alt={`${project.title} architecture`} loading="lazy" />
      <span className="project-card-overlay"><span>Explore project</span><FiArrowUpRight /></span>
    </Link>
    <div className="project-card-meta"><span>{project.category} · {project.year}</span><span>{project.location}</span></div>
    <h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3>
    {showExcerpt && <p className="project-card-excerpt">{project.excerpt}</p>}
  </article>;
}
