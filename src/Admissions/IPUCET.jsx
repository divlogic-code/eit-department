import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  LibraryBig,
  ShieldCheck,
} from "lucide-react";

import AdmissionsSidebar from "./AdmissionsSidebar";
import "./IPUCET/IPUCET.css";

const ugBrochureUrl =
  "https://eitfaridabad.com/pdf/UG-Admission-Brochure-2026-27.pdf";

const pgBrochureUrl =
  "https://eitfaridabad.com/pdf/PG-Admission-Brochure-2026-27.pdf";

function IPUCET() {
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
          <source src="/videos/college-campus.mp4" type="video/mp4" />
        </video>

        <div className="ipu-cet-hero-overlay" />

        <div className="ipu-cet-hero-content">
          <span className="ipu-cet-eyebrow">
            Admissions • Academic Session 2026-27
          </span>

          <h1>IPU CET 2026-27</h1>

          <p>
            Explore the latest undergraduate and postgraduate
            admission brochures for the 2026-27 academic session.
          </p>

          <div className="ipu-cet-hero-line" />
        </div>
      </section>

      {/* INTRO */}
      <section className="ipu-cet-intro section-shell">
        <div className="ipu-cet-intro-icon">
          <LibraryBig size={29} strokeWidth={1.8} />
        </div>

        <div>
          <span className="section-kicker">
            Admission Information
          </span>

          <h2>
            Admission Brochures
            <span> 2026-2027</span>
          </h2>

          <p>
            Access the official Echelon Institute of Technology
            admission brochures for undergraduate and postgraduate
            programmes for the 2026-27 academic session.
          </p>
        </div>
      </section>

      {/* BROCHURES */}
      <section className="ipu-cet-brochures section-shell">
        <div className="ipu-cet-section-heading">
          <div>
            <span className="section-kicker">
              Official Documents
            </span>

            <h2>Choose Your Programme</h2>
          </div>

          <div className="ipu-cet-document-badge">
            <ShieldCheck size={17} />
            <span>Official EIT Brochures</span>
          </div>
        </div>

        <div className="ipu-cet-brochure-grid">
          {/* UG */}
          <article className="ipu-cet-brochure-card">
            <div className="ipu-cet-card-top">
              <div className="ipu-cet-card-icon">
                <GraduationCap size={28} />
              </div>

              <span className="ipu-cet-card-label">
                Undergraduate
              </span>
            </div>

            <div className="ipu-cet-card-body">
              <h3>UG Admission Brochure</h3>

              <p>
                Admission brochure for undergraduate programmes
                for the 2026-27 academic session.
              </p>

              <div className="ipu-cet-card-meta">
                <BookOpen size={17} />
                <span>Academic Session 2026-27</span>
              </div>
            </div>

            <a
              href={ugBrochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ipu-cet-brochure-button"
            >
              <span>View UG Brochure</span>
              <ArrowUpRight size={18} />
            </a>
          </article>

          {/* PG */}
          <article className="ipu-cet-brochure-card">
            <div className="ipu-cet-card-top">
              <div className="ipu-cet-card-icon">
                <GraduationCap size={28} />
              </div>

              <span className="ipu-cet-card-label">
                Postgraduate
              </span>
            </div>

            <div className="ipu-cet-card-body">
              <h3>PG Admission Brochure</h3>

              <p>
                Admission brochure for postgraduate programmes
                for the 2026-27 academic session.
              </p>

              <div className="ipu-cet-card-meta">
                <BookOpen size={17} />
                <span>Academic Session 2026-27</span>
              </div>
            </div>

            <a
              href={pgBrochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ipu-cet-brochure-button"
            >
              <span>View PG Brochure</span>
              <ArrowUpRight size={18} />
            </a>
          </article>
        </div>
      </section>

      {/* INFORMATION NOTE */}
      <section className="ipu-cet-note section-shell">
        <div className="ipu-cet-note-icon">
          <ShieldCheck size={21} />
        </div>

        <div>
          <h3>Admission Information</h3>

          <p>
            Students are advised to refer to the respective
            admission brochure for programme-specific admission
            information and requirements.
          </p>
        </div>
      </section>
    </div>
  );
}

export default IPUCET;