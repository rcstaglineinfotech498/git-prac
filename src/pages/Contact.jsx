import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { FiArrowUpRight, FiClock, FiMail, FiMapPin, FiPaperclip, FiPhone } from 'react-icons/fi';
import SEO from '../components/common/SEO.jsx';
import PageBanner from '../components/common/PageBanner.jsx';
import { faqs } from '../data/faqs.js';

const schema = yup.object({
  name: yup.string().trim().required('Please enter your name.').max(100, 'Please keep your name under 100 characters.'),
  email: yup.string().trim().email('Please enter a valid email address.').required('Please enter your email address.'),
  phone: yup.string().trim().max(40, 'Please enter a valid phone number.').required('Please enter your phone number.'),
  projectType: yup.string().required('Please select a project type.'),
  budget: yup.string().required('Please select an approximate budget.'),
  message: yup.string().trim().required('Please tell us a little about your project.').min(20, 'Please add a little more detail (at least 20 characters).').max(3000, 'Please keep your message under 3,000 characters.'),
});

export default function Contact() {
  const [fileName, setFileName] = useState('');
  const [openFaq, setOpenFaq] = useState(0);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (values) => {
    toast.success(`Thanks, ${values.name.split(' ')[0]}. The form is valid and ready to connect to your email service.`);
    reset();
    setFileName('');
  };

  return (
    <>
      <SEO title="Contact" description="Tell Atelier about your architecture, interior or landscape project. We’d love to hear what you have in mind." />
      <PageBanner eyebrow="Start a conversation" title="Let’s talk about your place." intro="Tell us a little about what you’re imagining. We’ll get back to you within two working days." />
      <section className="section contact-section">
        <div className="container contact-layout">
          <div className="contact-details">
            <p className="eyebrow">Find the studio</p>
            <h2>Good things begin with a conversation.</h2>
            <p className="contact-intro">Whether you have a clear brief or just the start of an idea, we’d be glad to hear from you.</p>
            <div className="contact-info-list">
              <a href="https://maps.google.com/?q=Surry+Hills+Sydney" target="_blank" rel="noreferrer"><span><FiMapPin /></span><div><strong>Studio</strong><span>Level 2, 48 Kippax Street<br />Surry Hills NSW 2010, Australia</span></div></a>
              <a href="tel:+61255550148"><span><FiPhone /></span><div><strong>Phone</strong><span>+61 2 5555 0148</span></div></a>
              <a href="mailto:hello@atelier.studio"><span><FiMail /></span><div><strong>Email</strong><span>hello@atelier.studio</span></div></a>
              <div><span><FiClock /></span><div><strong>Studio hours</strong><span>Monday–Friday, 9:00am–5:30pm</span></div></div>
            </div>
            <div className="contact-social"><span>Follow along</span><a href="https://instagram.com">Instagram <FiArrowUpRight /></a><a href="https://linkedin.com">LinkedIn <FiArrowUpRight /></a></div>
          </div>

          <form id="enquiry-form" className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <p className="eyebrow">Your project</p>
            <div className="form-row">
              <label>Your name<input {...register('name')} autoComplete="name" placeholder="Name" />{errors.name && <span className="field-error">{errors.name.message}</span>}</label>
              <label>Email address<input {...register('email')} autoComplete="email" type="email" placeholder="you@example.com" />{errors.email && <span className="field-error">{errors.email.message}</span>}</label>
            </div>
            <div className="form-row">
              <label>Phone number<input {...register('phone')} autoComplete="tel" type="tel" placeholder="+61" />{errors.phone && <span className="field-error">{errors.phone.message}</span>}</label>
              <label>Project type<select {...register('projectType')} defaultValue=""><option value="" disabled>Select a service</option>{['Architectural Design', 'Interior Design', 'Landscape Design', 'Urban Planning', '3D Visualization', 'Renovation', 'Project Management', 'Other'].map((type) => <option key={type}>{type}</option>)}</select>{errors.projectType && <span className="field-error">{errors.projectType.message}</span>}</label>
            </div>
            <div className="form-row">
              <label>Approximate budget<select {...register('budget')} defaultValue=""><option value="" disabled>Select a range</option>{['Under $250k', '$250k – $500k', '$500k – $1m', '$1m – $2m', '$2m+', 'Not sure yet'].map((range) => <option key={range}>{range}</option>)}</select>{errors.budget && <span className="field-error">{errors.budget.message}</span>}</label>
              <label className="file-upload">Attach a brief or inspiration (optional)<span className="file-picker"><FiPaperclip />{fileName || 'Choose a file (PDF, JPG, PNG)'}<input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={(event) => setFileName(event.target.files?.[0]?.name || '')} /></span></label>
            </div>
            <label className="message-label">Tell us about your project<textarea {...register('message')} rows="5" placeholder="What are you hoping to create? Where is your site? Any early questions?" />{errors.message && <span className="field-error">{errors.message.message}</span>}</label>
            <p className="form-privacy">Preview form: connect an email or form service before publishing to receive enquiries and attachments.</p>
            <button className="button button-dark" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending…' : 'Send your enquiry'} <FiArrowUpRight /></button>
          </form>
        </div>
      </section>
      <section className="map-section"><iframe title="Map showing the Atelier studio in Surry Hills, Sydney" src="https://maps.google.com/maps?q=Surry%20Hills%20Sydney&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></section>
      <section className="consultation-cta"><div className="container"><div><p className="eyebrow">A good first step</p><h2>Book a free consultation.</h2><p>Bring your questions, your site details or simply the start of an idea.</p></div><a href="#enquiry-form" className="button button-light">Book a time to talk <FiArrowUpRight /></a></div></section>
      <section className="section contact-faq">
        <div className="container contact-faq-grid">
          <div><p className="eyebrow">A good place to start</p><h2>Questions before you write?</h2><p>Here are a few things clients often want to know before getting in touch.</p></div>
          <div className="faq-list">{faqs.slice(0, 3).map((faq, index) => <article className={`faq-item ${openFaq === index ? 'open' : ''}`} key={faq.question}><button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{faq.question}</span><span>{openFaq === index ? '−' : '+'}</span></button>{openFaq === index && <p>{faq.answer}</p>}</article>)}</div>
        </div>
      </section>
    </>
  );
}
