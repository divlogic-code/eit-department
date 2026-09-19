import ResearchSidebar from "./ResearchSidebar";
import "./ResearchShared.css";
import "./JournalPapers/JournalPapers.css";

import journalPapers from "../data/research/journalPapers";

export default function JournalPapers() {
  return (
    <>
      <ResearchSidebar />

      <main className="research-page">
        <div className="research-container">
          <section className="research-hero">
            <div className="research-kicker">
              {journalPapers.hero.kicker}
            </div>

            <h1 className="research-title">
              {journalPapers.hero.title}
            </h1>
          </section>

          <section className="research-section">
            <div className="research-grid">
              {journalPapers.departments.map((department, index) => (
                <div className="research-card" key={index}>
                  <strong>{department}</strong>

                  <span>Journal papers</span>

                  <br />

                  <button
                    disabled
                    style={{
                      marginTop: 12,
                      padding: "9px 14px",
                      border: "1px solid rgba(213,180,91,.4)",
                      borderRadius: 8,
                      background: "rgba(255,255,255,.05)",
                      color: "#d5b45b"
                    }}
                  >
                    {journalPapers.button}
                  </button>
                </div>
              ))}
            </div>

            <p className="source-note">
              {journalPapers.sourceNote}
            </p>
          </section>
        </div>
      </main>
    </>
  );
}