import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

export default function BlogCard({ post }) {
  return <article className="blog-card">
    <Link to={`/blogs/${post.slug}`} className="blog-card-image"><img src={post.image} alt="" loading="lazy" /></Link>
    <div className="blog-meta"><span>{post.category}</span><span>{post.readTime}</span></div>
    <h3><Link to={`/blogs/${post.slug}`}>{post.title}</Link></h3>
    <p>{post.excerpt}</p>
    <Link className="text-link" to={`/blogs/${post.slug}`}>Read the story <FiArrowUpRight /></Link>
  </article>;
}
