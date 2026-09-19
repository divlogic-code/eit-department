import ResearchSidebar from "./ResearchSidebar";
import "./ResearchShared.css";
import "./EDC/EDC.css";

import edc from "../data/research/edc";

export default function EDC() {
  return (
    <>
      <ResearchSidebar />

      <main className="research-page">
        <div className="research-container">
          <section className="research-hero">
            <div className="research-kicker">
              {edc.hero.kicker}
            </div>

            <h1 className="research-title">
              {edc.hero.title}
            </h1>
          </section>

          <section className="research-section">
            <h2>Objectives</h2>

            <ul>
              {edc.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </section>

          <section className="research-section">
            <h2>EDC Committee</h2>

            <div className="research-grid">
              {edc.committee.map((member, index) => (
                <div className="research-card" key={index}>
                  <strong>{member.name}</strong>

                  <div>{member.role}</div>

                  <small>{member.position}</small>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}