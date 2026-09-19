import ResearchSidebar from "./ResearchSidebar";
import "./ResearchShared.css";
import "./FDPs/FDPs.css";

import fdps from "../data/research/fdps";

export default function FDPs() {
  return (
    <>
      <ResearchSidebar />

      <main className="research-page">
        <div className="research-container">
          <section className="research-hero">
            <div className="research-kicker">
              {fdps.hero.kicker}
            </div>

            <h1 className="research-title">
              {fdps.hero.title}
            </h1>
          </section>

          <section className="research-section">
            {fdps.resources.map((resource, index) => (
              <div className="research-number" key={resource.name}>
                <span>{index + 1}</span>

                <div>
                  <strong>{resource.name}</strong>
                  <br />

                  <a
                    className="research-link"
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit resource ↗
                  </a>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}