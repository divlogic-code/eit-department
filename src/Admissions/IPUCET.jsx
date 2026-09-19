import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  LibraryBig,
  ShieldCheck,
} from "lucide-react";

import AdmissionsSidebar from "./AdmissionsSidebar";
import ipuCet from "../data/admissions/ipuCet";

import "./IPUCET/IPUCET.css";

function IPUCET() {
  const {
    hero,
    intro,
    section,
    brochures,
    note,
  } = ipuCet;

  return (
    <div className="ipu-cet-page">

      <AdmissionsSidebar />

      {/* HERO */}

      <section className="ipu-cet-hero">

        <video
          className="ipu-cet-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src={hero.video}
            type="video/mp4"
          />
        </video>

        <div className="ipu-cet-hero-overlay" />

        <div className="ipu-cet-hero-content">

          <span className="ipu-cet-eyebrow">
            {hero.eyebrow}
          </span>

          <h1>
            {hero.title}
          </h1>

          <p>
            {hero.description}
          </p>

          <div className="ipu-cet-hero-line" />

        </div>

      </section>


      {/* INTRO */}

      <section className="ipu-cet-intro section-shell">

        <div className="ipu-cet-intro-icon">
          <LibraryBig
            size={29}
            strokeWidth={1.8}
          />
        </div>

        <div>

          <span className="section-kicker">
            {intro.kicker}
          </span>

          <h2>
            {intro.title}
            <span> {intro.session}</span>
          </h2>

          <p>
            {intro.description}
          </p>

        </div>

      </section>


      {/* BROCHURES */}

      <section className="ipu-cet-brochures section-shell">

        <div className="ipu-cet-section-heading">

          <div>

            <span className="section-kicker">
              {section.kicker}
            </span>

            <h2>
              {section.title}
            </h2>

          </div>

          <div className="ipu-cet-document-badge">

            <ShieldCheck size={17} />

            <span>
              {section.badge}
            </span>

          </div>

        </div>


        <div className="ipu-cet-brochure-grid">

          {brochures.map((brochure) => (
            <article
              className="ipu-cet-brochure-card"
              key={brochure.type}
            >

              <div className="ipu-cet-card-top">

                <div className="ipu-cet-card-icon">
                  <GraduationCap size={28} />
                </div>

                <span className="ipu-cet-card-label">
                  {brochure.type}
                </span>

              </div>


              <div className="ipu-cet-card-body">

                <h3>
                  {brochure.title}
                </h3>

                <p>
                  {brochure.description}
                </p>

                <div className="ipu-cet-card-meta">

                  <BookOpen size={17} />

                  <span>
                    {brochure.meta}
                  </span>

                </div>

              </div>


              <a
                href={brochure.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ipu-cet-brochure-button"
              >

                <span>
                  {brochure.button}
                </span>

                <ArrowUpRight size={18} />

              </a>

            </article>
          ))}

        </div>

      </section>


      {/* INFORMATION NOTE */}

      <section className="ipu-cet-note section-shell">

        <div className="ipu-cet-note-icon">
          <ShieldCheck size={21} />
        </div>

        <div>

          <h3>
            {note.title}
          </h3>

          <p>
            {note.description}
          </p>

        </div>

      </section>

    </div>
  );
}

export default IPUCET;