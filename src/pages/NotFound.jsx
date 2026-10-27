import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi';
import SEO from '../components/common/SEO.jsx';

export default function NotFound() {
  return <><SEO title="Page not found"/><section className="not-found container"><span className="not-found-code">404</span><p className="eyebrow">A small detour</p><h1>This page isn’t where we left it.</h1><p>Let’s take you back to somewhere considered.</p><div><Link className="button button-dark" to="/"><FiArrowLeft/> Back home</Link><Link className="text-link" to="/projects">Explore projects <FiArrowUpRight/></Link></div></section></>;
}
