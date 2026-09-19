import ResearchSidebar from "./ResearchSidebar";
import "./ResearchShared.css";
import "./Conferences/Conferences.css";

import conferences from "../data/research/conferences";

export default function Conferences() {
  return (
    <>
      <ResearchSidebar />

      <main className="research-page">
        <div className="research-container">
          <section className="research-hero">
            <div className="research-kicker">
              {conferences.hero.kicker}
            </div>

            <h1 className="research-title">
              {conferences.hero.title}
            </h1>
          </section>

          <section className="research-section">
            <h2>{conferences.content.title}</h2>

            {conferences.content.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <p className="source-note">
              {conferences.content.sourceNote}
            </p>
          </section>
        </div>
      </main>
    </>
  );
}