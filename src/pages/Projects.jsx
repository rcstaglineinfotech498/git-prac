import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiSearch } from 'react-icons/fi';
import SEO from '../components/common/SEO.jsx';
import PageBanner from '../components/common/PageBanner.jsx';
import ProjectCard from '../components/common/ProjectCard.jsx';
import { projectCategories, projects } from '../data/projects.js';
import images from '../data/images.js';

export default function Projects() {
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('newest');
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(6);
  const filtered = useMemo(() => projects
    .filter((project) => (category === 'All' || project.category === category || (category === 'Urban' && project.category === 'Commercial')))
    .filter((project) => `${project.title} ${project.location} ${project.category}`.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sort === 'newest' ? Number(b.year) - Number(a.year) : Number(a.year) - Number(b.year)), [category, search, sort]);
  return (
    <>
      <SEO
        title="Selected Projects"
        description="Explore residential, commercial, interior and landscape architecture projects by Atelier."
      />
      <PageBanner
        eyebrow="Our work"
        title="Projects"
        intro="Every project starts with a place, a conversation and a question worth exploring."
        image={images.projectsBanner}
      />
      <section className="section listing-section">
        <div className="container">
          <div className="listing-toolbar">
            <div className="filter-tabs">
              {projectCategories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={category === item ? 'active' : ''}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="listing-controls">
              <label className="search-box">
                <FiSearch />
                <span className="sr-only">Search projects</span>
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search projects"
                />
              </label>
              <label className="sort-select">
                <span className="sr-only">Sort projects</span>
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                >
                  <option value="newest">Newest first</option>
                  <option value="oldest">Oldest first</option>
                </select>
              </label>
            </div>
          </div>
          {filtered.length ? (
            <div className="projects-grid">
              {filtered
                .slice(0, limit)
                .map((project, index) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    index={index}
                  />
                ))}
            </div>
          ) : (
            <p className="empty-state">
              No projects match that search. Try another term or category.
            </p>
          )}
          {filtered.length > limit && (
            <button
              className="button button-outline load-more"
              onClick={() => setLimit(limit + 6)}
            >
              Load more projects <FiArrowUpRight />
            </button>
          )}
        </div>
      </section>
      <section className="small-cta">
        <div className="container">
          <p>Have a project in mind?</p>
          <Link to="/contact">
            Let’s discuss what’s possible <FiArrowUpRight />
          </Link>
        </div>
      </section>
    </>
  );
}
