export default function SectionHeading({ eyebrow, title, text, light = false, align = 'left' }) {
  return <div className={`section-heading ${align === 'center' ? 'section-heading-center' : ''} ${light ? 'section-heading-light' : ''}`}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2>{title}</h2>
    {text && <p className="section-heading-text">{text}</p>}
  </div>;
}
