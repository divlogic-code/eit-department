import ResearchSidebar from "./ResearchSidebar";
import "./ResearchShared.css";
import "./IPR/IPR.css";

import ipr from "../data/research/ipr";

export default function IPR() {
  return (
    <>
      <ResearchSidebar />

      <main className="research-page">
        <div className="research-container">
          <section className="research-hero">
            <div className="research-kicker">
              {ipr.hero.kicker}
            </div>

            <h1 className="research-title">
              {ipr.hero.title}
            </h1>
          </section>

          <section className="research-section">
            <h2>{ipr.about.title}</h2>
            <p>{ipr.about.description}</p>

            <h2>{ipr.importance.title}</h2>
            <p>{ipr.importance.description}</p>
          </section>

          <section className="research-section">
            <h2>Documents</h2>

            {ipr.documents.map((document) => (
              <a
                className="research-link"
                href={document.url}
                target="_blank"
                rel="noreferrer"
                key={document.title}
              >
                {document.title} ↗
              </a>
            ))}
          </section>

          <section className="research-section">
            <h2>IPR Links For Faculty</h2>

            {ipr.facultyLinks.map((link) => (
              <a
                className="research-link"
                href={link.url}
                target="_blank"
                rel="noreferrer"
                key={link.title}
              >
                {link.title} ↗
              </a>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}