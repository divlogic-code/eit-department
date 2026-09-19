import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Info,
} from "lucide-react";

import AdmissionsSidebar from "./AdmissionsSidebar";
import eligibilityCriteria from "../data/admissions/eligibilityCriteria";

import "./EligibilityCriteria/EligibilityCriteria.css";

export default function EligibilityCriteria() {
  const {
    hero,
    intro,
    directory,
    note,
  } = eligibilityCriteria;

  return (
    <div className="eligibility-criteria-page">

      <AdmissionsSidebar />

      {/* HERO */}

      <section className="eligibility-criteria-hero">

        <video
          className="eligibility-criteria-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src={hero.video}
            type="video/mp4"
          />
        </video>

        <div className="eligibility-criteria-hero-overlay" />

        <div className="eligibility-criteria-hero-content">

          <span className="eligibility-criteria-eyebrow">
            {hero.eyebrow}
          </span>

          <h1>
            {hero.title}
            <br />
            <em>{hero.titleAccent}</em>
          </h1>

          <p>
            {hero.description}
          </p>

        </div>

        <div className="eligibility-criteria-hero-number">
          {hero.number}
        </div>

      </section>


      {/* MAIN */}

      <main className="eligibility-criteria-main">

        {/* INTRO */}

        <section className="eligibility-criteria-intro">

          <div className="eligibility-criteria-intro-icon">
            <GraduationCap
              size={25}
              strokeWidth={1.5}
            />
          </div>

          <div>

            <span className="eligibility-criteria-section-label">
              {intro.label}
            </span>

            <h2>
              {intro.title}
            </h2>

            <p>
              {intro.description}
            </p>

          </div>

        </section>


        {/* PROGRAMME DIRECTORY */}

        <section className="eligibility-criteria-directory">

          <div className="eligibility-criteria-directory-header">

            <div>

              <span>
                {directory.label}
              </span>

              <h2>
                {directory.title}
              </h2>

            </div>

            <div className="eligibility-criteria-total">

              <strong>
                {directory.total}
              </strong>

              <span>
                {directory.totalLabel}
              </span>

            </div>

          </div>


          <div className="eligibility-criteria-table">

            <div className="eligibility-criteria-table-head">
              <span>No.</span>
              <span>Programme</span>
              <span>Duration</span>
              <span>Admission</span>
              <span>Eligibility</span>
            </div>


            {directory.programmes.map((item) => (
              <article
                className="eligibility-criteria-row"
                key={item.code}
              >

                <div className="eligibility-criteria-code">
                  {item.code}
                </div>


                <div className="eligibility-criteria-programme">

                  <div className="eligibility-criteria-programme-title">
                    {item.programme}
                  </div>

                  <div className="eligibility-criteria-programme-name">
                    {item.fullName}
                  </div>

                  <span className="eligibility-criteria-level">
                    {item.level}
                  </span>

                </div>


                <div className="eligibility-criteria-duration">
                  {item.duration}
                </div>


                <div className="eligibility-criteria-admission">

                  <BookOpen size={15} />

                  <span>
                    {item.admission}
                  </span>

                </div>


                <div className="eligibility-criteria-requirement">

                  <p>
                    {item.eligibility}
                  </p>

                  <span>
                    <strong>Selection:</strong>{" "}
                    {item.selection}
                  </span>

                </div>

              </article>
            ))}

          </div>

        </section>


        {/* IMPORTANT NOTE */}

        <section className="eligibility-criteria-note">

          <div className="eligibility-criteria-note-icon">

            <Info
              size={21}
              strokeWidth={1.7}
            />

          </div>

          <div>

            <span>
              {note.label}
            </span>

            <h3>
              {note.title}
            </h3>

            <p>
              {note.description}
            </p>

          </div>

          <ArrowUpRight
            size={21}
            className="eligibility-criteria-note-arrow"
          />

        </section>

      </main>

    </div>
  );
}