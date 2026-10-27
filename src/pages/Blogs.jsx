import { useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import SEO from '../components/common/SEO.jsx';
import PageBanner from '../components/common/PageBanner.jsx';
import BlogCard from '../components/common/BlogCard.jsx';
import { blogCategories, blogs } from '../data/blogs.js';
import images from '../data/images.js';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Blogs() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const visible = useMemo(
    () =>
      blogs.filter(
        (post) =>
          post.slug !== blogs[0].slug &&
          (category === 'All' || category === post.category) &&
          `${post.title} ${post.excerpt}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [category, query],
  );
  const pageSize = 3;
  const pageCount = Math.ceil(visible.length / pageSize);
  const featured = blogs[0];
  return (
    <>
      <SEO
        title="Journal"
        description="Ideas, observations and details from the Atelier architecture and design studio."
      />
      <PageBanner
        eyebrow="Ideas & observations"
        title="The journal"
        intro="Notes on design, material and the things that make a place feel like itself."
        image={images.journalBanner}
      />
      <section className="section blog-list-section">
        <div className="container">
          <article className="featured-post">
            <Link
              to={`/blogs/${featured.slug}`}
              className="featured-post-image"
            >
              <img src={featured.image} alt="" loading="lazy" />
            </Link>
            <div className="featured-post-copy">
              <p className="eyebrow">
                Featured story · {featured.category}
              </p>
              <h2>
                <Link to={`/blogs/${featured.slug}`}>{featured.title}</Link>
              </h2>
              <p>{featured.excerpt}</p>
              <span>
                {featured.date} · {featured.readTime}
              </span>
              <Link to={`/blogs/${featured.slug}`} className="text-link">
                Read the story <FiArrowUpRight />
              </Link>
            </div>
          </article>
          <div className="blog-list-toolbar">
            <div className="filter-tabs">
              {blogCategories.map((item) => (
                <button
                  key={item}
                  className={category === item ? 'active' : ''}
                  onClick={() => {
                    setCategory(item);
                    setPage(1);
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
            <label className="search-box">
              <FiSearch />
              <span className="sr-only">Search articles</span>
              <input
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setPage(1);
                }}
                placeholder="Search articles"
              />
            </label>
          </div>
          <div className="blog-layout">
            <div>
              {visible.length ? (
                <>
                  <div className="blog-grid">
                    {visible
                      .slice((page - 1) * pageSize, page * pageSize)
                      .map((post) => (
                        <BlogCard key={post.slug} post={post} />
                      ))}
                  </div>
                  {pageCount > 1 && (
                    <nav className="pagination" aria-label="Journal pages">
                      {Array.from({ length: pageCount }, (_, index) => (
                        <button
                          key={index}
                          className={page === index + 1 ? 'active' : ''}
                          aria-current={
                            page === index + 1 ? 'page' : undefined
                          }
                          onClick={() => {
                            setPage(index + 1);
                            document
                              .querySelector('.blog-list-toolbar')
                              ?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </nav>
                  )}
                </>
              ) : (
                <p className="empty-state">
                  No stories found. Try a different search.
                </p>
              )}
            </div>
            <aside className="blog-sidebar">
              <div>
                <p className="eyebrow">Recent stories</p>
                {blogs.slice(0, 3).map((post) => (
                  <Link to={`/blogs/${post.slug}`} key={post.slug}>
                    {post.title}
                    <span>{post.date}</span>
                  </Link>
                ))}
              </div>
              <div>
                <p className="eyebrow">Categories</p>
                {blogCategories.slice(1).map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setCategory(item);
                      setPage(1);
                    }}
                  >
                    {item}
                    <FiArrowUpRight />
                  </button>
                ))}
              </div>
              <div className="sidebar-note">
                <p className="eyebrow">Studio letters</p>
                <p>A considered note from our studio, every so often.</p>
                <Link to="/contact" className="text-link">
                  Join the list <FiArrowUpRight />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
