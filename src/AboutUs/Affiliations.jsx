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

const aicteApprovals = [
  {
    year: "2026–27",
    title: "Approval Letter 2026–27",
    url: "https://eitfaridabad.com/pdf/approval/EOA-Report-26-27.PDF",
    latest: true,
  },
  {
    year: "2025–26",
    title: "Approval Letter 2025–2026",
    url: "https://eitfaridabad.com/pdf/approval/AICTE%20EOA%202025-2026_IPU.PDF",
  },
  {
    year: "2024–25",
    title: "Approval Letter 2024–25",
    url: "https://eitfaridabad.com/pdf/approval/approval-letter-2024-25.pdf",
  },
  {
    year: "2023–24",
    title: "Approval Letter 2023–24",
    url: "https://eitfaridabad.com/pdf/approval/approval-letter-2023-24.pdf",
  },
  {
    year: "2022–23",
    title: "Approval Letter 2022–23",
    url: "https://eitfaridabad.com/pdf/approval/approval-letter-2022-23.pdf",
  },
  {
    year: "2021–22",
    title: "Approval Letter 2021–22",
    url: "https://eitfaridabad.com/pdf/approval/approval-letter-2021-26=2.pdf",
  },
  {
    year: "2020–21",
    title: "Approval Letter 2020–21",
    url: "https://eitfaridabad.com/pdf/approval/approval-letter-2020-21.pdf",
  },
  {
    year: "2019–20",
    title: "Approval Letter 2019–20",
    url: "https://eitfaridabad.com/pdf/approval/approval-letter-2019-20.pdf",
  },
  {
    year: "2018–19",
    title: "Approval Letter 2018–19",
    url: "https://eitfaridabad.com/pdf/approval/approval-letter-2018-19.pdf",
  },
];

const universityAffiliations = [
  {
    year: "2024",
    title: "Affiliation Letter 2024",
    url: "https://eitfaridabad.com/pdf/approval/EIT%20Affiliation%20Letter%202024.pdf",
  },
  {
    year: "2023",
    title: "Affiliation Letter 2023",
    url: "https://eitfaridabad.com/pdf/approval/EIT%20Affiliation%20Letter%202023.pdf",
  },
  {
    year: "2022",
    title: "Affiliation Letter 2022",
    url: "https://eitfaridabad.com/pdf/approval/EIT%20Affiliation%20Letter%202022.pdf",
  },
  {
    year: "2021",
    title: "Affiliation Letter 2021",
    url: "https://eitfaridabad.com/pdf/approval/Affliation%20letter%202021-22.pdf",
  },
  {
    year: "2018",
    title: "Affiliation Letter 2018",
    url: "https://eitfaridabad.com/pdf/approval/Affiliation%20Letter%202018.pdf",
  },
];

const accreditationDocuments = [
  {
    number: "01",
    title: "NBA Accreditation Letter 2025",
    description: "National Board of Accreditation document.",
    url: "https://eitfaridabad.com/pdf/approval/NBA-Letter.pdf",
    icon: Award,
  },
  {
    number: "02",
    title: "ECE DCS Report",
    description: "Electronics & Communication Engineering DCS report.",
    url: "https://eitfaridabad.com/pdf/approval/ECE-DCS-Report.pdf",
    icon: FileCheck2,
  },
  {
    number: "03",
    title: "ME DCS Report",
    description: "Mechanical Engineering DCS report.",
    url: "https://eitfaridabad.com/pdf/approval/ME-DCS-Report.pdf",
    icon: FileCheck2,
  },
];

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
    const elements =
      sectionsRef.current?.querySelectorAll(
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
            ECHELON INSTITUTE OF TECHNOLOGY
          </span>

          <h1>
            AFFILIATIONS
            <span>&amp; APPROVALS</span>
          </h1>

          <p>
            Institutional approvals, university affiliations and accreditation
            documents that form the official record of EIT.
          </p>

          <div className="affiliations-hero-meta">
            <i />
            <span>APPROVALS • AFFILIATIONS • ACCREDITATION</span>
          </div>
        </div>

        <div className="affiliations-hero-index">04</div>

        <div className="affiliations-scroll">
          <span>EXPLORE DOCUMENTS</span>
          <div />
        </div>
      </section>

      <div className="affiliations-layout">
        <AboutSidebar />

        <main className="affiliations-main" ref={sectionsRef}>
          {/* INTRO */}
          <section className="affiliations-intro affiliation-reveal">
            <div className="affiliation-section-label">
              <span>01</span>
              INSTITUTIONAL RECORD
            </div>

            <div className="affiliations-intro-heading">
              <div>
                <span className="affiliation-kicker">
                  OFFICIAL DOCUMENTATION
                </span>

                <h2>
                  Recognition,
                  <em> recorded.</em>
                </h2>
              </div>

              <p>
                Explore the official approval, affiliation and accreditation
                documents associated with Echelon Institute of Technology.
              </p>
            </div>

            <div className="affiliations-stats">
              <div className="affiliation-stat">
                <div className="affiliation-stat-icon">
                  <ShieldCheck size={20} strokeWidth={1.5} />
                </div>
                <strong>09</strong>
                <span>AICTE APPROVALS</span>
              </div>

              <div className="affiliation-stat">
                <div className="affiliation-stat-icon">
                  <GraduationCap size={20} strokeWidth={1.5} />
                </div>
                <strong>05</strong>
                <span>AFFILIATION LETTERS</span>
              </div>

              <div className="affiliation-stat">
                <div className="affiliation-stat-icon">
                  <Award size={20} strokeWidth={1.5} />
                </div>
                <strong>03</strong>
                <span>ACCREDITATION DOCUMENTS</span>
              </div>

              <div className="affiliation-stat">
                <div className="affiliation-stat-icon">
                  <FileCheck2 size={20} strokeWidth={1.5} />
                </div>
                <strong>17</strong>
                <span>DOCUMENTS</span>
              </div>
            </div>
          </section>

          {/* AICTE */}
          <section className="approval-section">
            <div className="approval-section-header affiliation-reveal">
              <div className="affiliation-section-label">
                <span>02</span>
                AICTE APPROVALS
              </div>

              <div className="approval-section-count">
                2018 — 2026
              </div>
            </div>

            <div className="approval-heading affiliation-reveal">
              <div>
                <span className="affiliation-kicker">
                  APPROVALS THROUGH THE YEARS
                </span>

                <h2>
                  AICTE
                  <em> approvals.</em>
                </h2>
              </div>

              <p>
                Year-wise approval letters are presented in chronological
                order, with the latest approval placed first.
              </p>
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
                <span>03</span>
                UNIVERSITY AFFILIATIONS
              </div>

              <div className="university-section-count">
                05 DOCUMENTS
              </div>
            </div>

            <div className="university-heading affiliation-reveal">
              <div>
                <span className="affiliation-kicker">
                  AFFILIATION RECORD
                </span>

                <h2>
                  University
                  <em> affiliation.</em>
                </h2>
              </div>

              <p>
                A chronological collection of the university affiliation
                letters available through the institution's official records.
              </p>
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
                      <GraduationCap
                        size={20}
                        strokeWidth={1.5}
                      />
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
                <span>04</span>
                ACCREDITATION
              </div>

              <div className="accreditation-section-count">
                03 DOCUMENTS
              </div>
            </div>

            <div className="accreditation-heading affiliation-reveal">
              <div>
                <span className="affiliation-kicker">
                  ACCREDITATION RECORDS
                </span>

                <h2>
                  Evidence of
                  <em> standards.</em>
                </h2>
              </div>

              <p>
                Accreditation and programme-level documentation available from
                EIT's official records.
              </p>
            </div>

            <div className="accreditation-grid">
              {accreditationDocuments.map((document, index) => {
                const Icon = document.icon;

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

            <span>ECHELON INSTITUTE OF TECHNOLOGY</span>

            <h2>
              Recognised.
              <br />
              <em>Documented.</em>
            </h2>

            <p>
              Institutional records provide a continuing record of approvals,
              affiliations and accreditation associated with EIT.
            </p>

            <Link
              to="/about-eit"
              className="affiliations-closing-button"
            >
              BACK TO ABOUT EIT
              <ArrowUpRight size={16} />
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Affiliations;