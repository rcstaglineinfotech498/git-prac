import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description }) {
  const pageTitle = title ? `${title} — Atelier` : 'Atelier — Architecture & Design';
  const summary = description || 'An independent architecture and design studio creating thoughtful spaces for living, working and gathering.';

  useEffect(() => {
    document.title = pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', summary);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', pageTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', summary);
  }, [pageTitle, summary]);

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={summary} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={summary} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85" />
    </Helmet>
  );
}
