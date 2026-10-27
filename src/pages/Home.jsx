import { useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { FiArrowDown, FiArrowUpRight, FiCheck, FiStar } from "react-icons/fi";
import SEO from "../components/common/SEO.jsx";
import SectionHeading from "../components/common/SectionHeading.jsx";
import ProjectCard from "../components/common/ProjectCard.jsx";
import BlogCard from "../components/common/BlogCard.jsx";
import images from "../data/images.js";
import { projects } from "../data/projects.js";
import { blogs } from "../data/blogs.js";
import {
  awards,
  benefits,
  process,
  services,
  stats,
} from "../data/content.js";
import { faqs } from "../data/faqs.js";
import { testimonials } from "../data/testimonials.js";
import { reviewSummary, reviews } from "../data/reviews.js";

function Hero() {
  return (
    <section className="hero">
      <Swiper
        className="hero-swiper"
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1200}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        loop
      >
        {[images.hero, images.projectHouse, images.projectGarden].map(
          (image, index) => {
            const Heading = index === 0 ? "h1" : "h2";
            return (
            <SwiperSlide key={image}>
              <div
                className="hero-image"
                style={{ backgroundImage: `url("${image}")` }}
                aria-hidden="true"
              />
              <div className="hero-shade" />
              <div className="container hero-content">
                <p className="eyebrow">
                  Independent architecture studio · Sydney
                </p>
                <Heading>
                  {
                    [
                      "Spaces with a sense of belonging.",
                      "Made for living. Designed to last.",
                      "A quieter kind of architecture.",
                    ][index]
                  }
                </Heading>
                <p>
                  We shape thoughtful places for living, working and gathering —
                  rooted in their setting, made for the lives within.
                </p>
                <div className="hero-actions">
                  <Link className="button button-light" to="/projects">
                    Explore our work <FiArrowUpRight />
                  </Link>
                  <Link className="hero-text-link" to="/contact">
                    Start a conversation <FiArrowUpRight />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
          },
        )}
      </Swiper>
      <div className="hero-foot">
        <span>01 — 03 &nbsp; Architecture / Interiors / Landscape</span>
        <a href="#intro">
          <FiArrowDown /> Scroll to explore
        </a>
        <span>Sydney · Working everywhere</span>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="section intro-section" id="intro">
      <div className="container intro-grid">
        <div className="intro-copy">
          <p className="eyebrow">A considered approach</p>
          <h2>
            Good architecture begins with <em>listening.</em>
          </h2>
          <p className="intro-body">
            We are an independent architecture and design studio interested in
            the way a place can shape how we feel. Working from the scale of a
            room to the wider landscape, we create enduring spaces that feel
            quietly, unmistakably their own.
          </p>
          <Link className="text-link" to="/about">
            Discover our studio <FiArrowUpRight />
          </Link>
          <div className="intro-caption">
            <span>01 / 06</span>
            <span>Thoughtful design, from first sketch to final detail.</span>
          </div>
        </div>
        <div className="intro-collage">
          <img
            className="intro-main-image"
            src={images.intro}
            alt="Sunlit contemporary living room with natural materials"
            loading="lazy"
          />
          <img
            className="intro-overlap-image"
            src={images.introDetail}
            alt="Detail of warm timber and stone interior"
            loading="lazy"
          />
          <span className="collage-label">Spaces that bring us closer</span>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats-band">
      <div className="container stats-grid">
        {stats.map((item) => (
          <div className="stat-item" key={item.label}>
            <span className="stat-value">
              <CountUp
                end={item.value}
                duration={2.2}
                enableScrollSpy
                scrollSpyOnce
              />
              {item.suffix}
            </span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services-section">
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          title="A thoughtful practice, from the ground up."
          text="An integrated design approach keeps each detail connected to the bigger picture."
        />
        <div className="services-grid">
          {services.map(({ icon: Icon, title, text }, index) => (
            <article className="service-card" key={title}>
              <span className="service-number">0{index + 1}</span>
              <Icon className="service-icon" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="service-arrow">
                <FiArrowUpRight />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Interior",
    "Landscape",
  ];
  const [filter, setFilter] = useState("All");
  const shown = projects.filter(
    (project) =>
      project.featured && (filter === "All" || project.category === filter),
  );
  return (
    <section className="section projects-section home-projects-section">
      <div className="container">
        <div className="split-heading">
          <SectionHeading
            eyebrow="Selected work"
            title="Places made with purpose."
            text="A selection of projects shaped by their setting and the people who call them theirs."
          />
          <Link className="text-link desktop-only" to="/projects">
            View all projects <FiArrowUpRight />
          </Link>
        </div>
        <div
          className="filter-tabs"
          role="group"
          aria-label="Filter featured projects"
        >
          {categories.map((category) => (
            <button
              key={category}
              className={filter === category ? "active" : ""}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {shown.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} showExcerpt />
          ))}
        </div>
        <Link className="text-link mobile-only" to="/projects">
          View all projects <FiArrowUpRight />
        </Link>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process-section">
      <div className="container">
        <SectionHeading
          eyebrow="How we work"
          title="A clear path, thoughtfully made."
          text="Every project is different. Our process gives each one a steady, considered framework."
        />
        <div className="process-grid">
          {process.map(([number, title, text]) => (
            <article className="process-step" key={number}>
              <span>{number}</span>
              <div className="process-line" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="why-section">
      <div className="container why-grid">
        <div className="why-image">
          <img
            src={images.studio}
            alt="Atelier studio workspace"
            loading="lazy"
          />
          <span>Our studio, Sydney</span>
        </div>
        <div className="why-content">
          <SectionHeading
            eyebrow="Why Atelier"
            title="Care in every decision."
            text="Small enough to stay personal. Experienced enough to see the whole picture."
          />
          {benefits.map(([number, title, text]) => (
            <article className="benefit-item" key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <FiCheck />
            </article>
          ))}
        </div>
      </div>
      <div className="container awards-strip">
        <span>Recognised for considered design</span>
        {awards.map((award) => (
          <strong key={award}>{award}</strong>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonial-section">
      <div className="container testimonial-container">
        <SectionHeading
          eyebrow="Kind words"
          title="Made together. Remembered together."
          align="center"
        />
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          loop
          className="testimonial-swiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="testimonial-card">
                <span className="quote-mark">“</span>
                <blockquote>{item.quote}</blockquote>
                <div className="testimonial-person">
                  <img src={item.image} alt="" loading="lazy" />
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                  <div
                    className="testimonial-stars"
                    aria-label="5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }, (_, i) => (
                      <FiStar key={i} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="reviews-section">
      <div className="container reviews-grid">
        <div className="rating-overview">
          <p className="eyebrow">Client reviews</p>
          <div className="rating-number">
            {reviewSummary.rating}<span>/{reviewSummary.scale}</span>
          </div>
          <div className="rating-stars" aria-label="Rated 4.9 out of 5">
            {Array.from({ length: 5 }, (_, i) => (
              <FiStar key={i} fill="currentColor" />
            ))}
          </div>
          <p>Based on {reviewSummary.count} verified client reviews</p>
          <a
            className="button button-outline"
            href="mailto:hello@atelier.studio?subject=Atelier%20client%20review"
          >
            Write a review <FiArrowUpRight />
          </a>
        </div>
        <div className="review-cards">
          {reviews.map((review) => (
            <article className="review-card" key={review.source}>
              <div className="review-card-top">
                <span className="review-source">
                  <FiStar fill="currentColor" /> {review.source}
                </span>
                <span>★★★★★</span>
              </div>
              <p>{review.quote}</p>
              <span>
                — {review.author}{" "}
                <span className="verified-review">Verified client</span>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const names = [
    "Cultiver",
    "COSENTINO",
    "Dulux",
    "Fisher & Paykel",
    "CARR",
    "Earp Bros",
  ];
  return (
    <section className="partners-section">
      <div className="container">
        <p className="eyebrow">In good company</p>
        <div className="partners-marquee">
          {[...names, ...names].map((name, index) => (
            <span key={`${name}-${index}`}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestBlogs() {
  return (
    <section className="section blog-section">
      <div className="container">
        <div className="split-heading">
          <SectionHeading
            eyebrow="From the journal"
            title="Notes on making and place."
            text="Ideas, observations and details from the studio."
          />
          <Link to="/blogs" className="text-link desktop-only">
            Visit the journal <FiArrowUpRight />
          </Link>
        </div>
        <div className="blog-grid">
          {blogs.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq-section">
      <div className="container faq-grid">
        <SectionHeading
          eyebrow="A few questions"
          title="Before we begin."
          text="A little more about working with our studio."
        />
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article
              className={`faq-item ${open === index ? "open" : ""}`}
              key={faq.question}
            >
              <button
                aria-expanded={open === index}
                onClick={() => setOpen(open === index ? -1 : index)}
              >
                <span>{faq.question}</span>
                <span>{open === index ? "−" : "+"}</span>
              </button>
              {open === index && <p>{faq.answer}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      className="cta-banner"
      style={{ "--banner-image": `url("${images.hero}")` }}
    >
      <div className="container cta-content">
        <p className="eyebrow">Have a place in mind?</p>
        <h2>
          Let’s make room
          <br />
          <em>for what matters.</em>
        </h2>
        <Link to="/contact" className="button button-light">
          Start a conversation <FiArrowUpRight />
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SEO
        title="Architecture & Design Studio"
        description="Thoughtful architecture and design for living, working and gathering. Discover Atelier’s selected projects and approach."
      />
      <Hero />
      <Intro />
      <Stats />
      <Services />
      <FeaturedProjects />
      <Process />
      <WhyUs />
      <Testimonials />
      <Reviews />
      <Partners />
      <LatestBlogs />
      <FAQ />
      <CTA />
    </>
  );
}
