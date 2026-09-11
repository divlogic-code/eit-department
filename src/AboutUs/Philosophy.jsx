import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Link } from "react-router-dom";

import AboutSidebar from "./AboutSidebar";

import "./AboutEchelon/AboutEchelon.css";
import "./Philosophy/Philosophy.css";

const philosophyPosters = [
  {
    id: "01",
    title: "Future of Education",
    theme: "Education",
    image: "/images/philosophy/philosophy-1.jpg",
  },
  {
    id: "02",
    title: "Of the Students, For the Students, By the Students",
    theme: "Student-Centric Education",
    image: "/images/philosophy/philosophy-2.jpg",
  },
  {
    id: "03",
    title: "Culture of Inspiration, Exploration & Invention",
    theme: "Inspiration & Innovation",
    image: "/images/philosophy/philosophy-3.jpg",
  },
  {
    id: "04",
    title: "Collaborative Creation & Evolutionary Partnerships",
    theme: "Collaboration",
    image: "/images/philosophy/philosophy-4.jpg",
  },
  {
    id: "05",
    title: "Exploration of Self, Society & Nature",
    theme: "Conscious Exploration",
    image: "/images/philosophy/philosophy-5.jpg",
  },
  {
    id: "06",
    title: "Experiential Education",
    theme: "Learning by Experience",
    image: "/images/philosophy/philosophy-6.jpg",
  },
  {
    id: "07",
    title: "One Common Future",
    theme: "Shared Responsibility",
    image: "/images/philosophy/philosophy-7.jpg",
  },
  {
    id: "08",
    title: "The Art of Education",
    theme: "Knowledge & Creativity",
    image: "/images/philosophy/philosophy-8.jpg",
  },
  {
    id: "09",
    title: "Service to Humanity",
    theme: "Humanity & Service",
    image: "/images/philosophy/philosophy-9.jpg",
  },
];

function Philosophy() {
  const [selectedPoster, setSelectedPoster] = useState(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  useEffect(() => {
    const cards =
      galleryRef.current?.querySelectorAll(".philosophy-poster");

    if (!cards?.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("philosophy-poster-visible");
          obs.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedPoster ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPoster]);

  return (
    <div className="philosophy-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="philosophy-hero">
        <div className="philosophy-hero-grid" />

        <div className="philosophy-hero-glow philosophy-glow-one" />
        <div className="philosophy-hero-glow philosophy-glow-two" />

        <div className="philosophy-hero-content">
          <span className="philosophy-eyebrow">
            ECHELON INSTITUTE OF TECHNOLOGY
          </span>

          <h1>
            PHILOSOPHY
            <span>WE LIVE BY</span>
          </h1>

          <p>
            An invitation to a culture of inspiration, exploration,
            invention, collaboration and experiential learning.
          </p>

          <div className="philosophy-hero-meta">
            <i />
            <span>THE ECHELON PHILOSOPHY</span>
          </div>
        </div>

        <div className="philosophy-hero-index">05</div>

        <div className="philosophy-scroll">
          <span>EXPLORE THE PHILOSOPHY</span>
          <div />
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div className="philosophy-layout">
        <AboutSidebar />

        <main className="philosophy-main">

          {/* INTRO */}
          <section className="philosophy-intro">
            <div className="philosophy-section-label">
              <span>01</span>
              PHILOSOPHY
            </div>

            <div className="philosophy-intro-heading">
              <div>
                <span className="philosophy-kicker">
                  THE ECHELON WAY
                </span>

                <h2>
                  Ideas that
                  <em> shape the journey.</em>
                </h2>
              </div>

              <p>
                The philosophy of Echelon Institute of Technology is
                expressed through a collection of ideas surrounding
                education, students, exploration, collaboration,
                experience and service.
              </p>
            </div>

            <div className="philosophy-intro-line">
              <span>09</span>
              <p>PHILOSOPHICAL PERSPECTIVES</p>
              <div />
            </div>
          </section>

          {/* =================================================
              POSTER GALLERY
          ================================================= */}
          <section className="philosophy-gallery">
            <div className="philosophy-gallery-header">
              <div>
                <div className="philosophy-section-label">
                  <span>02</span>
                  THE COLLECTION
                </div>

                <h2>
                  The ideas
                  <em> we live by.</em>
                </h2>
              </div>

              <p>
                Nine visual perspectives capturing the spirit,
                aspirations and educational philosophy of Echelon.
              </p>
            </div>

            <div
              className="philosophy-gallery-grid"
              ref={galleryRef}
            >
              {philosophyPosters.map((poster, index) => (
                <article
                  className={`philosophy-poster ${
                    index === 0
                      ? "philosophy-poster-featured"
                      : ""
                  }`}
                  key={poster.id}
                  style={{
                    "--poster-delay": `${index * 80}ms`,
                  }}
                >
                  <button
                    type="button"
                    className="philosophy-poster-image"
                    onClick={() => setSelectedPoster(poster)}
                    aria-label={`Open ${poster.title}`}
                  >
                    <img
                      src={poster.image}
                      alt={poster.title}
                      loading={index > 2 ? "lazy" : "eager"}
                    />

                    <div className="philosophy-poster-overlay">
                      <span>VIEW POSTER</span>
                      <ArrowUpRight size={18} />
                    </div>
                  </button>

                  <div className="philosophy-poster-info">
                    <div>
                      <span className="philosophy-poster-number">
                        {poster.id}
                      </span>

                      <span className="philosophy-poster-theme">
                        {poster.theme}
                      </span>
                    </div>

                    <h3>{poster.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* =================================================
              DARK STATEMENT
          ================================================= */}
          <section className="philosophy-statement">
            <div className="philosophy-statement-grid" />

            <div className="philosophy-statement-number">
              03
            </div>

            <div className="philosophy-statement-content">
              <span>A CULTURE OF POSSIBILITY</span>

              <h2>
                Inspiration.
                <br />
                Exploration.
                <br />
                <em>Invention.</em>
              </h2>

              <p>
                The philosophy collection presents education as
                something that extends beyond conventional boundaries.
                It connects the learner with ideas, people, society,
                nature, technology and the wider human experience.
              </p>
            </div>
          </section>

          {/* =================================================
              THEMES
          ================================================= */}
          <section className="philosophy-themes">
            <div className="philosophy-section-label">
              <span>04</span>
              CORE THEMES
            </div>

            <div className="philosophy-theme-list">
              <div>
                <span>01</span>
                <strong>Students</strong>
                <p>
                  Education shaped around participation, ownership
                  and the growth of students.
                </p>
              </div>

              <div>
                <span>02</span>
                <strong>Exploration</strong>
                <p>
                  Looking inward and outward to understand self,
                  society and nature.
                </p>
              </div>

              <div>
                <span>03</span>
                <strong>Innovation</strong>
                <p>
                  Encouraging invention, experimentation and new
                  ways of thinking.
                </p>
              </div>

              <div>
                <span>04</span>
                <strong>Collaboration</strong>
                <p>
                  Building partnerships and creating through shared
                  knowledge.
                </p>
              </div>

              <div>
                <span>05</span>
                <strong>Experience</strong>
                <p>
                  Connecting education with practical and
                  experiential learning.
                </p>
              </div>

              <div>
                <span>06</span>
                <strong>Humanity</strong>
                <p>
                  Keeping education connected to responsibility,
                  society and service.
                </p>
              </div>
            </div>
          </section>

          {/* =================================================
              CLOSING
          ================================================= */}
          <section className="philosophy-closing">
            <div className="philosophy-closing-line" />

            <span>ECHELON INSTITUTE OF TECHNOLOGY</span>

            <h2>
              Explore.
              <br />
              <em>Imagine.</em>
            </h2>

            <p>
              A philosophy is not simply written. It is expressed
              through the culture an institution creates and the
              experiences it enables.
            </p>

            <Link
              to="/about-eit"
              className="philosophy-closing-button"
            >
              BACK TO ABOUT EIT
              <ArrowUpRight size={16} />
            </Link>
          </section>
        </main>
      </div>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}
      {selectedPoster && (
        <div
          className="philosophy-lightbox"
          onClick={() => setSelectedPoster(null)}
        >
          <button
            type="button"
            className="philosophy-lightbox-close"
            onClick={() => setSelectedPoster(null)}
            aria-label="Close poster"
          >
            <X size={24} />
          </button>

          <div
            className="philosophy-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedPoster.image}
              alt={selectedPoster.title}
            />

            <div className="philosophy-lightbox-caption">
              <span>{selectedPoster.id}</span>
              <strong>{selectedPoster.title}</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Philosophy;