import {
  Award,
  BookOpen,
  Medal,
  ShieldCheck,
  Trophy,
} from "lucide-react";

import AdmissionsSidebar from "./AdmissionsSidebar";
import "./Scholarship/Scholarship.css";

const scholarshipSections = [
  {
    title: "12th Based",
    subtitle: "12th Marksheet",
    icon: BookOpen,
    rows: [
      ["95.01% & above", "50%"],
      ["90.01% to 95%", "35%"],
      ["85% to 90%", "25%"],
    ],
  },
  {
    title: "JEE (Mains)",
    subtitle: "Score Card",
    icon: Award,
    rows: [
      ["95.01 percentile & above", "50%"],
      ["90.01 percentile to 95 percentile", "35%"],
      ["85 percentile to 90 percentile", "25%"],
      ["80 percentile to 85 percentile", "20%"],
    ],
  },
  {
    title: "CUET (UG 2026)",
    subtitle: "Percentile achieved in each of Section I, II & III",
    icon: BookOpen,
    rows: [
      ["95.01 percentile & above", "50%"],
      ["90.01 percentile to 95 percentile", "35%"],
      ["85.01 percentile to 90 percentile", "25%"],
      ["80 percentile to 85 percentile", "20%"],
    ],
  },
  {
    title: "CAT / CMAT",
    subtitle: "Valid Score Card",
    icon: Award,
    rows: [
      ["90.01 percentile & above", "50%"],
      ["85.01 percentile to 90 percentile", "35%"],
      ["80.01 percentile to 85 percentile", "25%"],
      ["75 percentile to 80 percentile", "10%"],
    ],
  },
  {
    title: "Special Categories",
    subtitle: "Additional eligibility categories",
    icon: ShieldCheck,
    rows: [
      ["Defence (Current / Ex Service Holder)", "15%"],
      ["Alumni of EIT", "10%"],
      ["Single Girl Child / Single Parent", "20%"],
      ["Siblings of Echelonian", "10%"],
    ],
  },
  {
    title: "National Level Sports",
    subtitle: "Sports participation and achievement",
    icon: Trophy,
    rows: [
      ["Participation", "25%"],
      ["Medal Winner", "50%"],
    ],
  },
  {
    title: "State Level Sports",
    subtitle: "Sports achievement",
    icon: Medal,
    rows: [
      ["Medal Winner", "25%"],
    ],
  },
];

function Scholarship() {
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
          <source src="/videos/college-campus.mp4" type="video/mp4" />
        </video>

        <div className="scholarship-hero-overlay" />

        <div className="scholarship-hero-content">
          <span className="scholarship-eyebrow">
            Admissions • Financial Support
          </span>

          <h1>Scholarship</h1>

          <p>
            Recognising academic excellence, competitive
            achievement, sports performance and special
            categories through tuition-fee scholarships.
          </p>

          <div className="scholarship-hero-line" />
        </div>
      </section>

      {/* INTRO */}
      <section className="scholarship-intro section-shell">
        <div className="scholarship-intro-icon">
          <Award size={29} strokeWidth={1.8} />
        </div>

        <div>
          <span className="section-kicker">
            Scholarship On Tuition Fee
          </span>

          <h2>
            Merit &amp; Special Category
            <span> Scholarships</span>
          </h2>

          <p>
            Echelon Institute of Technology offers scholarships
            based on academic performance, entrance examination
            scores, sports achievements and specified special
            categories.
          </p>
        </div>
      </section>

      {/* HIGHLIGHT STRIP */}
      <section className="scholarship-highlight section-shell">
        <div className="scholarship-highlight-main">
          <span>Maximum Scholarship</span>
          <strong>50%</strong>
          <p>On Tuition Fee</p>
        </div>

        <div className="scholarship-highlight-points">
          <div>
            <Award size={21} />
            <span>Academic Merit</span>
          </div>

          <div>
            <ShieldCheck size={21} />
            <span>Special Categories</span>
          </div>

          <div>
            <Trophy size={21} />
            <span>Sports Achievement</span>
          </div>
        </div>
      </section>

      {/* SCHOLARSHIP TABLE */}
      <section className="scholarship-section section-shell">
        <div className="scholarship-heading">
          <div>
            <span className="section-kicker">
              Eligibility Criteria
            </span>

            <h2>Scholarship Structure</h2>
          </div>

          <div className="tuition-badge">
            Scholarship on Tuition Fee
          </div>
        </div>

        <div className="scholarship-table-wrapper">
          <table className="scholarship-table">
            <thead>
              <tr>
                <th>Criteria / Eligibility Criteria</th>
                <th>Eligibility Criteria</th>
                <th>Scholarship</th>
              </tr>
            </thead>

            <tbody>
              {scholarshipSections.map((section) =>
                section.rows.map((row, index) => (
                  <tr
                    key={`${section.title}-${row[0]}`}
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
                            <section.icon size={20} />
                          </div>

                          <div>
                            <strong>{section.title}</strong>

                            <span>
                              {section.subtitle}
                            </span>
                          </div>
                        </div>
                      </td>
                    )}

                    <td className="eligibility-cell">
                      {row[0]}
                    </td>

                    <td className="scholarship-percent">
                      {row[1]}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* MOBILE CARDS */}
        <div className="scholarship-mobile-cards">
          {scholarshipSections.map((section) => {
            const Icon = section.icon;

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
                    <h3>{section.title}</h3>
                    <p>{section.subtitle}</p>
                  </div>
                </div>

                <div className="mobile-card-rows">
                  {section.rows.map(([eligibility, percentage]) => (
                    <div
                      className="mobile-scholarship-row"
                      key={eligibility}
                    >
                      <span>{eligibility}</span>

                      <strong>{percentage}</strong>
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
          <h3>Important Note</h3>

          <p>
            All scholarships are conditional and offered under
            specific eligibility and continuation criteria
            defined by the Institute.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Scholarship;