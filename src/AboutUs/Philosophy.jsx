import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Link } from "react-router-dom";

import AboutSidebar from "./AboutSidebar";

import "./AboutEchelon/AboutEchelon.css";
import "./Philosophy/Philosophy.css";

import {
  philosophyHero,
  philosophyIntro,
  philosophyGallery,
  philosophyPosters,
  philosophyStatement,
  philosophyThemes,
  philosophyClosing,
} from "../data/about/philosophy";

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

          entry.target.classList.add(
            "philosophy-poster-visible"
          );

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
    document.body.style.overflow = selectedPoster
      ? "hidden"
      : "";

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
            {philosophyHero.eyebrow}
          </span>

          <h1>
            {philosophyHero.title}
            <span>{philosophyHero.titleAccent}</span>
          </h1>

          <p>{philosophyHero.description}</p>

          <div className="philosophy-hero-meta">
            <i />
            <span>{philosophyHero.meta}</span>
          </div>

        </div>

        <div className="philosophy-hero-index">
          {philosophyHero.index}
        </div>

        <div className="philosophy-scroll">
          <span>{philosophyHero.scrollText}</span>
          <div />
        </div>

      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="philosophy-layout">

        <AboutSidebar />

        <main className="philosophy-main">

          {/* =================================================
              INTRO
          ================================================= */}

          <section className="philosophy-intro">

            <div className="philosophy-section-label">
              <span>{philosophyIntro.sectionNumber}</span>
              {philosophyIntro.sectionLabel}
            </div>

            <div className="philosophy-intro-heading">

              <div>

                <span className="philosophy-kicker">
                  {philosophyIntro.kicker}
                </span>

                <h2>
                  {philosophyIntro.heading}
                  <em>{philosophyIntro.headingAccent}</em>
                </h2>

              </div>

              <p>{philosophyIntro.description}</p>

            </div>

            <div className="philosophy-intro-line">
              <span>{philosophyIntro.count}</span>
              <p>{philosophyIntro.countLabel}</p>
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
                  <span>
                    {philosophyGallery.sectionNumber}
                  </span>

                  {philosophyGallery.sectionLabel}
                </div>

                <h2>
                  {philosophyGallery.heading}
                  <em>
                    {philosophyGallery.headingAccent}
                  </em>
                </h2>

              </div>

              <p>{philosophyGallery.description}</p>

            </div>

            <div
              className="philosophy-gallery-grid"
              ref={galleryRef}
            >

              {philosophyPosters.map((poster, index) => (
                <article
                  className={
                    index === 0
                      ? "philosophy-poster philosophy-poster-featured"
                      : "philosophy-poster"
                  }
                  key={poster.id}
                  style={{
                    "--poster-delay": `${index * 80}ms`,
                  }}
                >

                  <button
                    type="button"
                    className="philosophy-poster-image"
                    onClick={() =>
                      setSelectedPoster(poster)
                    }
                    aria-label={`Open ${poster.title}`}
                  >
                    <img
                      src={poster.image}
                      alt={poster.title}
                      loading={
                        index > 2 ? "lazy" : "eager"
                      }
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
              {philosophyStatement.sectionNumber}
            </div>

            <div className="philosophy-statement-content">

              <span>{philosophyStatement.eyebrow}</span>

              <h2>
                {philosophyStatement.heading}
                <br />
                {philosophyStatement.headingLineTwo}
                <br />
                <em>
                  {philosophyStatement.headingAccent}
                </em>
              </h2>

              <p>{philosophyStatement.description}</p>

            </div>

          </section>

          {/* =================================================
              THEMES
          ================================================= */}

          <section className="philosophy-themes">

            <div className="philosophy-section-label">
              <span>{philosophyThemes.sectionNumber}</span>
              {philosophyThemes.sectionLabel}
            </div>

            <div className="philosophy-theme-list">

              {philosophyThemes.items.map((item) => (
                <div key={item.number}>

                  <span>{item.number}</span>

                  <strong>{item.title}</strong>

                  <p>{item.description}</p>

                </div>
              ))}

            </div>

          </section>

          {/* =================================================
              CLOSING
          ================================================= */}

          <section className="philosophy-closing">

            <div className="philosophy-closing-line" />

            <span>{philosophyClosing.eyebrow}</span>

            <h2>
              {philosophyClosing.heading}
              <br />
              <em>{philosophyClosing.headingAccent}</em>
            </h2>

            <p>{philosophyClosing.description}</p>

            <Link
              to={philosophyClosing.buttonLink}
              className="philosophy-closing-button"
            >
              {philosophyClosing.buttonText}
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
            onClick={(event) =>
              event.stopPropagation()
            }
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