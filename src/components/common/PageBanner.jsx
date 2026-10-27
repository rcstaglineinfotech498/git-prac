import { Link } from 'react-router-dom';

export default function PageBanner({ eyebrow, title, intro, image, children }) {
  return (
    <section className={`page-banner ${image ? 'page-banner-image' : ''}`} style={image ? { '--banner-image': `url("${image}")` } : undefined}>
      <div className="container page-banner-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {intro && <p className="page-banner-intro">{intro}</p>}
        {children}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span>/</span><span>{title}</span>
        </nav>
      </div>
    </section>
  );
}
