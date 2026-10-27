import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUp, FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext.jsx';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Projects', '/projects'],
  ['Journal', '/blogs'],
  ['Contact', '/contact'],
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const transparentHeader = location.pathname === '/'
    || location.pathname === '/about'
    || location.pathname === '/projects'
    || location.pathname === '/blogs'
    || /^\/projects\/[^/]+$/.test(location.pathname);

  useEffect(() => {
    setMenuOpen(false);
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  return (
    <header className={`site-header ${scrolled || !transparentHeader ? 'is-scrolled' : ''}`}>
      <div className="header-inner container">
        <Link to="/" className="brand" aria-label="Atelier home"><span className="brand-mark">A.</span><span className="brand-name">ATELIER<span>ARCHITECTURE & DESIGN</span></span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'}>{label}</NavLink>)}
        </nav>
        <Link className="header-cta" to="/contact">Let’s talk <FiArrowUpRight aria-hidden="true" /></Link>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && <motion.nav className="mobile-nav" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} aria-label="Mobile navigation">
          {links.map(([label, path], index) => <motion.div key={path} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.04 }}><NavLink to={path} end={path === '/'}>{label}<FiArrowUpRight /></NavLink></motion.div>)}
          <Link className="button button-dark mobile-quote" to="/contact">Start a project <FiArrowUpRight /></Link>
        </motion.nav>}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const submit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-about">
          <Link to="/" className="brand footer-brand"><span className="brand-mark">A.</span><span className="brand-name">ATELIER<span>ARCHITECTURE & DESIGN</span></span></Link>
          <p>We create thoughtful architecture for the way people live, work and come together.</p>
          <div className="social-links"><a href="https://instagram.com" aria-label="Instagram">IG</a><a href="https://linkedin.com" aria-label="LinkedIn">IN</a><a href="https://pinterest.com" aria-label="Pinterest">PI</a></div>
        </div>
        <div className="footer-column"><h3>Explore</h3>{links.slice(1).map(([label, path]) => <Link key={path} to={path}>{label}</Link>)}</div>
        <div className="footer-column"><h3>Expertise</h3><span>Architecture</span><span>Interiors</span><span>Landscape</span><span>Urban planning</span><span>Project management</span></div>
        <div className="footer-newsletter"><h3>Notes from the studio</h3><p>Occasional thoughts on spaces, materials and the places in between.</p>
          <form onSubmit={submit} className="newsletter-form"><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} required /><button aria-label="Subscribe to newsletter"><FiArrowUpRight /></button></form>
          {subscribed && <span className="newsletter-success">Thank you — you’re on the list.</span>}
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Atelier Architecture. All rights reserved.</span><span>Sydney, Australia · By appointment worldwide</span><Link to="/contact">Privacy & enquiries</Link></div>
    </footer>
  );
}

function ThemeDock() {
  const { mode, toggleMode } = useTheme();
  return (
    <aside className="theme-dock" aria-label="Appearance settings">
      <button className="mode-toggle" onClick={toggleMode} aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
        {mode === 'light' ? <FiMoon /> : <FiSun />}
      </button>
    </aside>
  );
}

function CookieBanner() {
  const [accepted, setAccepted] = useState(() => {
    try {
      if (typeof window === 'undefined') return false;
      return window.localStorage.getItem('atelier-cookies') === 'accepted';
    } catch {
      return false;
    }
  });

  if (accepted) return null;

  return (
    <div className="cookie-banner">
      <p>We use essential cookies to make this site work well. <Link to="/contact">Learn more</Link></p>
      <button
        className="button button-small button-dark"
        onClick={() => {
          try {
            if (typeof window !== 'undefined') {
              window.localStorage.setItem('atelier-cookies', 'accepted');
            }
          } catch {
            // Ignore storage errors from restricted or unavailable browser storage.
          }
          setAccepted(true);
        }}
      >
        Accept
      </button>
    </div>
  );
}

export default function SiteLayout({ children }) {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable * 100 : 0);
      setShowTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return <>
    <div className="scroll-progress" style={{ width: `${progress}%` }} />
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header />
    <main id="main-content"><AnimatePresence mode="wait"><motion.div key={location.pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>{children}</motion.div></AnimatePresence></main>
    <Footer />
    <ThemeDock />
    <a className="floating-contact" href="tel:+61255550148" aria-label="Call Atelier"><span>Let’s talk</span><FiArrowUpRight /></a>
    {showTop && <button className="back-to-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><FiArrowUp /></button>}
    <CookieBanner />
  </>;
}
