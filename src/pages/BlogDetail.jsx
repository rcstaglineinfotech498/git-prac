import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiArrowUpRight, FiFacebook, FiLinkedin, FiLink } from 'react-icons/fi';
import SEO from '../components/common/SEO.jsx';
import BlogCard from '../components/common/BlogCard.jsx';
import { blogs } from '../data/blogs.js';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogs.find((item) => item.slug === slug);
  if (!post) return <section className="not-found container"><p className="eyebrow">Story not found</p><h1>This story has moved on.</h1><Link className="text-link" to="/blogs">Back to the journal <FiArrowUpRight/></Link></section>;
  const related = blogs.filter((item)=>item.slug!==slug).slice(0,2);
  const share = async () => {
    if (navigator.clipboard) await navigator.clipboard.writeText(window.location.href);
  };
  return <><SEO title={post.title} description={post.excerpt}/><article className="article-page"><header className="article-heading container"><Link className="back-link" to="/blogs"><FiArrowLeft/> Back to journal</Link><p className="eyebrow">{post.category} · {post.date}</p><h1>{post.title}</h1><p className="article-deck">{post.excerpt}</p><div className="article-byline"><span>Words by <strong>{post.author}</strong></span><span>{post.readTime}</span></div></header><img className="article-cover" src={post.image} alt="" /><div className="container article-layout"><aside className="article-toc"><p className="eyebrow">In this story</p>{post.toc.map((item,index)=><a href={`#section-${index}`} key={item}>{String(index+1).padStart(2,'0')} {item}</a>)}<div className="share-buttons"><span>Share</span><a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} aria-label="Share on Facebook"><FiFacebook/></a><a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} aria-label="Share on LinkedIn"><FiLinkedin/></a><button onClick={share} aria-label="Copy article link"><FiLink/></button></div></aside><div className="article-body">{post.body.map((paragraph,index)=><section id={`section-${index}`} key={paragraph}><h2>{post.toc[index] || post.title}</h2><p>{paragraph}</p></section>)}<div className="author-box"><div><span className="eyebrow">About the author</span><h3>{post.author}</h3><p>Part of the Atelier team, exploring how considered design can make everyday life better.</p></div></div></div></div></article><section className="section related-section"><div className="container"><div className="split-heading"><div><p className="eyebrow">Keep reading</p><h2>More from the journal</h2></div><Link to="/blogs" className="text-link">All stories <FiArrowUpRight/></Link></div><div className="blog-grid">{related.map((item)=><BlogCard key={item.slug} post={item}/>)}</div></div></section></>;
}
