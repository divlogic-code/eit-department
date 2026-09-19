import ResearchSidebar from "./ResearchSidebar";
import "./ResearchShared.css";
import "./RDCommittee/RDCommittee.css";

import rdCommittee from "../data/research/rdCommittee";

export default function RDCommittee() {
  return (
    <>
      <ResearchSidebar />

      <main className="research-page">
        <div className="research-container">
          <section className="research-hero">
            <div className="research-kicker">
              {rdCommittee.hero.kicker}
            </div>

            <h1 className="research-title">
              {rdCommittee.hero.title}
            </h1>
          </section>

          <section className="research-section">
            <h2>{rdCommittee.about.title}</h2>

            {rdCommittee.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          <section className="research-section">
            <h2>{rdCommittee.dean.title}</h2>

            <div className="research-card">
              <strong>{rdCommittee.dean.name}</strong>
              {rdCommittee.dean.role}
            </div>

            <h3>{rdCommittee.r1.title}</h3>

            <ul>
              {rdCommittee.r1.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="research-section">
            <h2>{rdCommittee.departmentResearchCoordinator.title}</h2>

            <h3>
              {rdCommittee.departmentResearchCoordinator.subtitle}
            </h3>

            <ul>
              {rdCommittee.departmentResearchCoordinator.items.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </section>

          <section className="research-section">
            <h2>R&D Committee Members</h2>

            <div className="research-grid">
              {rdCommittee.committeeMembers.map((member, index) => (
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