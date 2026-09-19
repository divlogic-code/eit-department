import {
  ArrowUpRight,
  ClipboardCheck,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";

import AdmissionsSidebar from "./AdmissionsSidebar";
import documentChecklist from "../data/admissions/documentChecklist";

import "./DocumentChecklist/DocumentChecklist.css";

export default function DocumentChecklist() {
  const {
    hero,
    intro,
    checklist,
    note,
  } = documentChecklist;

  return (
    <div className="document-checklist-page">

      <AdmissionsSidebar />

      {/* HERO */}

      <section className="document-checklist-hero">

        <video
          className="document-checklist-hero-video"
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

        <div className="document-checklist-hero-overlay" />

        <div className="document-checklist-hero-content">

          <span className="document-checklist-eyebrow">
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

        <div className="document-checklist-hero-number">
          {hero.number}
        </div>

      </section>


      {/* INTRO */}

      <main className="document-checklist-main">

        <section className="document-checklist-intro">

          <div className="document-checklist-intro-icon">
            <ClipboardCheck
              size={25}
              strokeWidth={1.5}
            />
          </div>

          <div>

            <span className="document-checklist-section-label">
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


        {/* CHECKLIST */}

        <section className="document-checklist-section">

          <div className="document-checklist-header">

            <div>
              <span>{checklist.label}</span>
              <h2>{checklist.title}</h2>
            </div>

            <div className="document-checklist-count">
              <strong>{checklist.count}</strong>

              <span>
                {checklist.countLabel}
              </span>
            </div>

          </div>


          <div className="document-checklist-table">

            <div className="document-checklist-table-head">
              <span>No.</span>
              <span>Document</span>
              <span>Requirement</span>
            </div>


            {checklist.documents.map((item) => (
              <div
                className="document-checklist-row"
                key={item.number}
              >

                <span className="document-checklist-number">
                  {item.number}
                </span>

                <div className="document-checklist-document">

                  <FileCheck2
                    size={17}
                    strokeWidth={1.6}
                  />

                  <span>
                    {item.document}
                  </span>

                </div>

                <span className="document-checklist-requirement">
                  {item.requirement}
                </span>

              </div>
            ))}

          </div>

        </section>


        {/* REMINDER */}

        <section className="document-checklist-note">

          <div className="document-checklist-note-icon">

            <ShieldCheck
              size={22}
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
            className="document-checklist-note-arrow"
            size={21}
          />

        </section>

      </main>

    </div>
  );
}