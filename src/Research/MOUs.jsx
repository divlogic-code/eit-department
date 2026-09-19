import ResearchSidebar from "./ResearchSidebar";
import "./ResearchShared.css";
import "./MOUs/MOUs.css";

import mous from "../data/research/mous";

export default function MOUs() {
  return (
    <>
      <ResearchSidebar />

      <main className="research-page">
        <div className="research-container">
          <section className="research-hero">
            <div className="research-kicker">
              {mous.hero.kicker}
            </div>

            <h1 className="research-title">
              {mous.hero.title}
            </h1>
          </section>

          <section className="research-section">
            <div className="research-grid">
              {mous.industries.map((industry, index) => (
                <div className="research-card" key={industry}>
                  <strong>
                    {String(index + 1).padStart(2, "0")}
                  </strong>

                  <span>{industry}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}