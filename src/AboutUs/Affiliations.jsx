import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Award,
  Building2,
  ExternalLink,
  FileCheck2,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import AboutSidebar from "./AboutSidebar";

import "./AboutEchelon/AboutEchelon.css";
import "./Affiliations/Affiliations.css";

import {
  affiliationHero,
  affiliationIntro,
  affiliationStats,
  aicteApprovals,
  universityAffiliations,
  accreditationDocuments,
  affiliationSections,
  affiliationClosing,
} from "../data/about/affiliation";

function getStatIcon(icon) {
  const icons = {
    shield: ShieldCheck,
    graduation: GraduationCap,
    award: Award,
    file: FileCheck2,
  };

  return icons[icon] || FileCheck2;
}

function getDocumentIcon(icon) {
  const icons = {
    award: Award,
    file: FileCheck2,
  };

  return icons[icon] || FileCheck2;
}

function DocumentButton({ url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="affiliation-document-button"
    >
      VIEW DOCUMENT
      <ArrowUpRight size={16} />
    </a>
  );
}

function Affiliations() {
  const sectionsRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  useEffect(() => {
    const elements = sectionsRef.current?.querySelectorAll(
      ".affiliation-reveal, .approval-card, .affiliation-card, .accreditation-card"
    );

    if (!elements?.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("affiliation-visible");
          obs.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="affiliations-page">
      {/* HERO */}
      <section className="affiliations-hero">
        <div className="affiliations-hero-grid" />
        <div className="affiliations-hero-glow" />

        <div className="affiliations-hero-content">
          <span className="affiliations-eyebrow">
            {affiliationHero.eyebrow}
          </span>

          <h1>
            {affiliationHero.title}
            <span>{affiliationHero.titleAccent}</span>
          </h1>

          <p>{affiliationHero.description}</p>

          <div className="affiliations-hero-meta">
            <i />
            <span>{affiliationHero.meta}</span>
          </div>
        </div>

        <div className="affiliations-hero-index">
          {affiliationHero.index}
        </div>

        <div className="affiliations-scroll">
          <span>{affiliationHero.scrollText}</span>
          <div />
        </div>
      </section>

      <div className="affiliations-layout">
        <AboutSidebar />

        <main className="affiliations-main" ref={sectionsRef}>
          {/* INTRO */}
          <section className="affiliations-intro affiliation-reveal">
            <div className="affiliation-section-label">
              <span>{affiliationIntro.sectionNumber}</span>
              {affiliationIntro.sectionLabel}
            </div>

            <div className="affiliations-intro-heading">
              <div>
                <span className="affiliation-kicker">
                  {affiliationIntro.kicker}
                </span>

                <h2>
                  {affiliationIntro.heading}
                  <em>{affiliationIntro.headingAccent}</em>
                </h2>
              </div>

              <p>{affiliationIntro.description}</p>
            </div>

            <div className="affiliations-stats">
              {affiliationStats.map((stat) => {
                const Icon = getStatIcon(stat.icon);

                return (
                  <div className="affiliation-stat" key={stat.label}>
                    <div className="affiliation-stat-icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>

                    <strong>{stat.number}</strong>
                    <span>{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* AICTE */}
          <section className="approval-section">
            <div className="approval-section-header affiliation-reveal">
              <div className="affiliation-section-label">
                <span>{affiliationSections.aicte.sectionNumber}</span>
                {affiliationSections.aicte.label}
              </div>

              <div className="approval-section-count">
                {affiliationSections.aicte.count}
              </div>
            </div>

            <div className="approval-heading affiliation-reveal">
              <div>
                <span className="affiliation-kicker">
                  {affiliationSections.aicte.kicker}
                </span>

                <h2>
                  {affiliationSections.aicte.heading}
                  <em>{affiliationSections.aicte.headingAccent}</em>
                </h2>
              </div>

              <p>{affiliationSections.aicte.description}</p>
            </div>

            <div className="approval-list">
              {aicteApprovals.map((document, index) => (
                <article
                  className={`approval-card ${
                    document.latest ? "approval-card-latest" : ""
                  }`}
                  key={document.year}
                  style={{
                    "--card-delay": `${index * 55}ms`,
                  }}
                >
                  <div className="approval-year">
                    <span>{document.latest ? "LATEST" : "YEAR"}</span>
                    <strong>{document.year}</strong>
                  </div>

                  <div className="approval-card-divider" />

                  <div className="approval-card-content">
                    <span>AICTE EOA DOCUMENT</span>
                    <h3>{document.title}</h3>
                  </div>

                  <DocumentButton url={document.url} />
                </article>
              ))}
            </div>
          </section>

          {/* UNIVERSITY AFFILIATION */}
          <section className="university-section">
            <div className="university-section-header affiliation-reveal">
              <div className="affiliation-section-label">
                <span>{affiliationSections.university.sectionNumber}</span>
                {affiliationSections.university.label}
              </div>

              <div className="university-section-count">
                {affiliationSections.university.count}
              </div>
            </div>

            <div className="university-heading affiliation-reveal">
              <div>
                <span className="affiliation-kicker">
                  {affiliationSections.university.kicker}
                </span>

                <h2>
                  {affiliationSections.university.heading}
                  <em>{affiliationSections.university.headingAccent}</em>
                </h2>
              </div>

              <p>{affiliationSections.university.description}</p>
            </div>

            <div className="university-grid">
              {universityAffiliations.map((document, index) => (
                <article
                  className="affiliation-card"
                  key={document.year}
                  style={{
                    "--card-delay": `${index * 80}ms`,
                  }}
                >
                  <div className="affiliation-card-top">
                    <span>0{index + 1}</span>

                    <div className="affiliation-card-icon">
                      <GraduationCap size={20} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="affiliation-card-content">
                    <span>{document.year}</span>
                    <h3>{document.title}</h3>
                  </div>

                  <a
                    href={document.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="affiliation-card-link"
                  >
                    <span>OPEN DOCUMENT</span>
                    <ArrowUpRight size={17} />
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* ACCREDITATION */}
          <section className="accreditation-section">
            <div className="accreditation-section-header affiliation-reveal">
              <div className="affiliation-section-label">
                <span>{affiliationSections.accreditation.sectionNumber}</span>
                {affiliationSections.accreditation.label}
              </div>

              <div className="accreditation-section-count">
                {affiliationSections.accreditation.count}
              </div>
            </div>

            <div className="accreditation-heading affiliation-reveal">
              <div>
                <span className="affiliation-kicker">
                  {affiliationSections.accreditation.kicker}
                </span>

                <h2>
                  {affiliationSections.accreditation.heading}
                  <em>{affiliationSections.accreditation.headingAccent}</em>
                </h2>
              </div>

              <p>{affiliationSections.accreditation.description}</p>
            </div>

            <div className="accreditation-grid">
              {accreditationDocuments.map((document, index) => {
                const Icon = getDocumentIcon(document.icon);

                return (
                  <article
                    className="accreditation-card"
                    key={document.number}
                    style={{
                      "--card-delay": `${index * 90}ms`,
                    }}
                  >
                    <div className="accreditation-card-number">
                      {document.number}
                    </div>

                    <div className="accreditation-card-icon">
                      <Icon size={24} strokeWidth={1.4} />
                    </div>

                    <div className="accreditation-card-content">
                      <span>OFFICIAL DOCUMENT</span>
                      <h3>{document.title}</h3>
                      <p>{document.description}</p>
                    </div>

                    <a
                      href={document.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="accreditation-card-link"
                    >
                      VIEW DOCUMENT
                      <ArrowUpRight size={17} />
                    </a>
                  </article>
                );
              })}
            </div>
          </section>

          {/* CLOSING */}
          <section className="affiliations-closing affiliation-reveal">
            <div className="affiliations-closing-mark">
              <Building2 size={26} strokeWidth={1.3} />
            </div>

            <span>{affiliationClosing.eyebrow}</span>

            <h2>
              {affiliationClosing.heading}
              <br />
              <em>{affiliationClosing.headingAccent}</em>
            </h2>

            <p>{affiliationClosing.description}</p>

            <Link
              to={affiliationClosing.buttonLink}
              className="affiliations-closing-button"
            >
              {affiliationClosing.buttonText}
              <ArrowUpRight size={16} />
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Affiliations;

