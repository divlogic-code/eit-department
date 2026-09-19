import {
  Award,
  BookOpen,
  Medal,
  ShieldCheck,
  Trophy,
} from "lucide-react";

import AdmissionsSidebar from "./AdmissionsSidebar";
import scholarship from "../data/admissions/scholarship";

import "./Scholarship/Scholarship.css";

const icons = {
  award: Award,
  book: BookOpen,
  shield: ShieldCheck,
  trophy: Trophy,
  medal: Medal,
};

function Scholarship() {
  const {
    hero,
    intro,
    highlight,
    section,
    table,
    scholarshipSections,
    note,
  } = scholarship;

  return (
    <div className="scholarship-page">

      <AdmissionsSidebar />

      {/* HERO */}

      <section className="scholarship-hero">

        <video
          className="scholarship-hero-video"
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

        <div className="scholarship-hero-overlay" />

        <div className="scholarship-hero-content">

          <span className="scholarship-eyebrow">
            {hero.eyebrow}
          </span>

          <h1>
            {hero.title}
          </h1>

          <p>
            {hero.description}
          </p>

          <div className="scholarship-hero-line" />

        </div>

      </section>


      {/* INTRO */}

      <section className="scholarship-intro section-shell">

        <div className="scholarship-intro-icon">
          <Award
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
            <span>{intro.titleAccent}</span>
          </h2>

          <p>
            {intro.description}
          </p>

        </div>

      </section>


      {/* HIGHLIGHT STRIP */}

      <section className="scholarship-highlight section-shell">

        <div className="scholarship-highlight-main">

          <span>
            {highlight.maximumLabel}
          </span>

          <strong>
            {highlight.maximum}
          </strong>

          <p>
            {highlight.description}
          </p>

        </div>


        <div className="scholarship-highlight-points">

          {highlight.points.map((point) => {

            const Icon = icons[point.icon];

            return (
              <div key={point.label}>

                <Icon size={21} />

                <span>
                  {point.label}
                </span>

              </div>
            );
          })}

        </div>

      </section>


      {/* SCHOLARSHIP TABLE */}

      <section className="scholarship-section section-shell">

        <div className="scholarship-heading">

          <div>

            <span className="section-kicker">
              {section.kicker}
            </span>

            <h2>
              {section.title}
            </h2>

          </div>

          <div className="tuition-badge">
            {section.badge}
          </div>

        </div>


        <div className="scholarship-table-wrapper">

          <table className="scholarship-table">

            <thead>

              <tr>

                {table.columns.map((column) => (
                  <th key={column}>
                    {column}
                  </th>
                ))}

              </tr>

            </thead>


            <tbody>

              {scholarshipSections.map((section) =>
                section.rows.map((row, index) => {

                  const Icon = icons[section.icon];

                  return (
                    <tr
                      key={`${section.title}-${row.eligibility}`}
                      className={
                        index === 0
                          ? "scholarship-first-row"
                          : ""
                      }
                    >

                      {index === 0 && (
                        <td
                          className="scholarship-category"
                          rowSpan={section.rows.length}
                        >

                          <div className="category-content">

                            <div className="category-icon">
                              <Icon size={20} />
                            </div>

                            <div>

                              <strong>
                                {section.title}
                              </strong>

                              <span>
                                {section.subtitle}
                              </span>

                            </div>

                          </div>

                        </td>
                      )}

                      <td className="eligibility-cell">
                        {row.eligibility}
                      </td>

                      <td className="scholarship-percent">
                        {row.scholarship}
                      </td>

                    </tr>
                  );
                })
              )}

            </tbody>

          </table>

        </div>


        {/* MOBILE CARDS */}

        <div className="scholarship-mobile-cards">

          {scholarshipSections.map((section) => {

            const Icon = icons[section.icon];

            return (
              <article
                className="scholarship-mobile-card"
                key={section.title}
              >

                <div className="mobile-card-header">

                  <div className="mobile-category-icon">
                    <Icon size={21} />
                  </div>

                  <div>

                    <h3>
                      {section.title}
                    </h3>

                    <p>
                      {section.subtitle}
                    </p>

                  </div>

                </div>


                <div className="mobile-card-rows">

                  {section.rows.map((row) => (
                    <div
                      className="mobile-scholarship-row"
                      key={row.eligibility}
                    >

                      <span>
                        {row.eligibility}
                      </span>

                      <strong>
                        {row.scholarship}
                      </strong>

                    </div>
                  ))}

                </div>

              </article>
            );
          })}

        </div>

      </section>


      {/* FOOTER NOTE */}

      <section className="scholarship-note section-shell">

        <div className="scholarship-note-icon">
          !
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

export default Scholarship;