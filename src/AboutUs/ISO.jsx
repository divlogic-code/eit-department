import { ArrowUpRight, Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import AboutSidebar from "./AboutSidebar";

import "./AboutEchelon/AboutEchelon.css";
import "./ISO/ISO.css";

import {
  isoHero,
  isoIntro,
  isoCertifications,
  isoSection,
  otherCertificates,
  otherCertificatesSection,
  isoClosing,
} from "../data/about/iso";

function ISO() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-eit-page">
      <AboutSidebar />

      <main className="about-eit-main">

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="iso-hero">
          <div className="iso-hero-content">

            <span className="iso-eyebrow">
              {isoHero.eyebrow}
            </span>

            <h1>
              {isoHero.title}
              <br />
              <em>{isoHero.titleAccent}</em>
            </h1>

            <p>{isoHero.description}</p>

            <div className="iso-hero-meta">
              <span>{isoHero.meta}</span>
              <span>{isoHero.index}</span>
            </div>

          </div>

          <div className="iso-hero-scroll">
            <span>{isoHero.scrollText}</span>
            <ArrowUpRight size={16} />
          </div>
        </section>


        {/* =====================================================
            CONTENT
        ===================================================== */}
        <section className="iso-content">

          {/* ===================================================
              INTRO
          =================================================== */}
          <section className="iso-intro">

            <div className="iso-section-number">
              {isoIntro.sectionNumber}
            </div>

            <div className="iso-intro-content">

              <span className="iso-section-label">
                {isoIntro.sectionLabel}
              </span>

              <span className="iso-kicker">
                {isoIntro.kicker}
              </span>

              <h2>
                {isoIntro.heading}
                <br />
                <em>{isoIntro.headingAccent}</em>
              </h2>

              <p>{isoIntro.description}</p>

            </div>

          </section>


          {/* ===================================================
              ISO CERTIFICATIONS
          =================================================== */}
          <section className="iso-section">

            <div className="iso-section-top">

              <div className="iso-section-heading-meta">

                <span className="iso-section-number">
                  {isoSection.sectionNumber}
                </span>

                <span className="iso-section-label">
                  {isoSection.sectionLabel}
                </span>

              </div>

              <span className="iso-section-count">
                {isoSection.count} {isoSection.countLabel}
              </span>

            </div>


            <div className="iso-section-intro">

              <span className="iso-kicker">
                {isoSection.kicker}
              </span>

              <h2>
                {isoSection.heading}
                <br />
                <em>{isoSection.headingAccent}</em>
              </h2>

              <p>{isoSection.description}</p>

            </div>


            <div className="iso-list">

              {isoCertifications.map((certificate) => (
                <article
                  className="iso-card"
                  key={certificate.number}
                >

                  <div className="iso-card-number">
                    {certificate.number}
                  </div>

                  <div className="iso-card-content">

                    <span className="iso-card-standard">
                      {certificate.standard}
                    </span>

                    <h3>{certificate.title}</h3>

                    <p>{certificate.description}</p>

                  </div>

                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noreferrer"
                    className="iso-card-link"
                    aria-label={`Open ${certificate.standard}`}
                  >
                    <ExternalLink size={18} />
                  </a>

                </article>
              ))}

            </div>

          </section>


          {/* ===================================================
              OTHER CERTIFICATES
          =================================================== */}
          <section className="iso-section iso-other-section">

            <div className="iso-section-top">

              <div className="iso-section-heading-meta">

                <span className="iso-section-number">
                  {otherCertificatesSection.sectionNumber}
                </span>

                <span className="iso-section-label">
                  {otherCertificatesSection.sectionLabel}
                </span>

              </div>

              <span className="iso-section-count">
                {otherCertificatesSection.count}{" "}
                {otherCertificatesSection.countLabel}
              </span>

            </div>


            <div className="iso-section-intro">

              <span className="iso-kicker">
                {otherCertificatesSection.kicker}
              </span>

              <h2>
                {otherCertificatesSection.heading}
                <br />
                <em>
                  {otherCertificatesSection.headingAccent}
                </em>
              </h2>

              <p>
                {otherCertificatesSection.description}
              </p>

            </div>


            <div className="iso-list">

              {otherCertificates.map((certificate) => (
                <article
                  className="iso-card"
                  key={certificate.number}
                >

                  <div className="iso-card-number">
                    {certificate.number}
                  </div>

                  <div className="iso-card-content">

                    <span className="iso-card-standard">
                      RECOGNITION
                    </span>

                    <h3>{certificate.title}</h3>

                    <p>{certificate.description}</p>

                  </div>

                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noreferrer"
                    className="iso-card-link"
                    aria-label={`Open ${certificate.title}`}
                  >
                    <Award size={18} />
                  </a>

                </article>
              ))}

            </div>

          </section>


          {/* ===================================================
              CLOSING
          =================================================== */}
          <section className="iso-closing">

            <span className="iso-closing-eyebrow">
              {isoClosing.eyebrow}
            </span>

            <h3>
              {isoClosing.heading}
              <br />
              <em>{isoClosing.headingAccent}</em>
            </h3>

            <p>{isoClosing.description}</p>

            <Link
              to={isoClosing.buttonLink}
              className="iso-closing-button"
            >
              {isoClosing.buttonText}
              <ArrowUpRight size={18} />
            </Link>

          </section>

        </section>

      </main>
    </div>
  );
}

export default ISO;