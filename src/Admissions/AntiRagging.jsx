import { ExternalLink, FileCheck, ShieldAlert } from "lucide-react";

import AdmissionsSidebar from "./AdmissionsSidebar";
import antiRagging from "../data/admissions/antiRagging";

import "./AntiRagging/AntiRagging.css";

function AntiRagging() {
  const {
    hero,
    intro,
    warning,
    studentUndertaking,
    parentUndertaking,
    committee,
    affidavit,
  } = antiRagging;

  const renderUndertaking = (document) => (
    <section className="anti-ragging-document">

      <div className="anti-ragging-document-heading">
        <div className="anti-ragging-document-number">
          {document.number}
        </div>

        <div>
          <span>{document.label}</span>
          <h2>{document.title}</h2>
        </div>
      </div>

      <div className="anti-ragging-document-body">

        {document.appendix && (
          <div className="anti-ragging-appendix">
            <span>{document.appendix}</span>
          </div>
        )}

        {document.introduction.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {document.clauses.map((clause, index) => (
          <div
            key={index}
            className={
              clause.type === "letter"
                ? "anti-ragging-clause"
                : "anti-ragging-numbered-clause"
            }
          >
            <strong>{clause.label}</strong>
            <p>{clause.text}</p>
          </div>
        ))}

        <div className="anti-ragging-declaration">
          <p>
            <strong>{document.declaration}</strong>
          </p>
        </div>

        <div className="anti-ragging-verification">

          <h3>{document.verification.title}</h3>

          <p>
            <strong>{document.verification.signature}</strong>
          </p>

          <div className="anti-ragging-fields">
            {document.verification.fields.map((field) => (
              <span key={field}>{field}</span>
            ))}
          </div>

          {document.verification.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

        </div>

      </div>
    </section>
  );

  return (
    <div className="anti-ragging-page">

      <AdmissionsSidebar />

      {/* HERO */}

      <section className="anti-ragging-hero">

        <video
          className="anti-ragging-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={hero.video} type="video/mp4" />
        </video>

        <div className="anti-ragging-hero-overlay" />

        <div className="anti-ragging-hero-content">

          <span className="anti-ragging-eyebrow">
            {hero.eyebrow}
          </span>

          <h1>{hero.title}</h1>

          <p>{hero.description}</p>

        </div>

        <div className="anti-ragging-hero-bottom">
          <span>{hero.sessionLabel}</span>
          <strong>{hero.session}</strong>
        </div>

      </section>


      {/* MAIN CONTENT */}

      <main className="anti-ragging-main">

        <div className="anti-ragging-container">

          {/* INTRO */}

          <section className="anti-ragging-intro">

            <div className="anti-ragging-section-kicker">
              <ShieldAlert size={18} />
              <span>{intro.kicker}</span>
            </div>

            <h2>{intro.title}</h2>

            {intro.paragraphs.map((paragraph, index) => (
              <p key={index}>

                {paragraph.text || paragraph.before}

                {paragraph.link && (
                  <>
                    {" "}
                    <a
                      href={paragraph.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {paragraph.linkText}
                      <ExternalLink size={14} />
                    </a>
                  </>
                )}

                {paragraph.after}

              </p>
            ))}

          </section>


          {/* IMPORTANT NOTE */}

          <section className="anti-ragging-warning">

            <div className="anti-ragging-warning-icon">
              <ShieldAlert size={25} />
            </div>

            <div>
              <span>{warning.label}</span>
              <p>{warning.text}</p>
            </div>

          </section>


          {/* STUDENT UNDERTAKING */}

          {renderUndertaking(studentUndertaking)}


          {/* PARENT UNDERTAKING */}

          {renderUndertaking(parentUndertaking)}


          {/* COMMITTEE */}

          <section className="anti-ragging-committee">

            <div className="anti-ragging-section-heading">

              <div>
                <span>{committee.eyebrow}</span>
                <h2>{committee.title}</h2>
              </div>

              <div className="anti-ragging-section-line" />

            </div>


            <div className="anti-ragging-table-wrap">

              <table className="anti-ragging-table">

                <thead>
                  <tr>
                    {committee.columns.map((column) => (
                      <th key={column}>{column}</th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {committee.members.map((member) => (
                    <tr key={member.name}>
                      <td>{member.name}</td>
                      <td>{member.designation}</td>
                      <td>{member.position}</td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>

          </section>


          {/* AFFIDAVIT FORMS */}

          <section className="anti-ragging-affidavit">

            <div className="anti-ragging-section-heading">

              <div>
                <span>{affidavit.eyebrow}</span>
                <h2>{affidavit.title}</h2>
              </div>

              <div className="anti-ragging-section-line" />

            </div>


            <div className="anti-ragging-affidavit-intro">

              <FileCheck size={20} />

              <p>{affidavit.description}</p>

              <a
                href={affidavit.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {affidavit.button}
                <ExternalLink size={15} />
              </a>

            </div>


            <div className="anti-ragging-affidavit-grid">

              {affidavit.images.map((image) => (
                <a
                  key={image.src}
                  href={affidavit.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anti-ragging-affidavit-card"
                >
                  <div className="anti-ragging-affidavit-image">
                    <img src={image.src} alt={image.alt} />
                  </div>

                  <div className="anti-ragging-affidavit-card-footer">
                    <span>{affidavit.cardLabel}</span>
                    <ExternalLink size={16} />
                  </div>
                </a>
              ))}

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default AntiRagging;