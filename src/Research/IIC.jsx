import ResearchSidebar from "./ResearchSidebar";
import "./ResearchShared.css";
import "./IIC/IIC.css";

import iic from "../data/research/iic";

export default function IIC() {
  return (
    <>
      <ResearchSidebar />

      <main className="research-page">
        <div className="research-container">
          <section className="research-hero">
            <div className="research-kicker">
              {iic.hero.kicker}
            </div>

            <h1 className="research-title">
              {iic.hero.title}
            </h1>
          </section>

          <section className="research-section">
            <h2>Major Focus</h2>

            <ul>
              {iic.majorFocus.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2>Functions</h2>

            <ul>
              {iic.functions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="research-section">
            <h2>IIC Council Members</h2>

            <div className="research-grid">
              {iic.councilMembers.map((member, index) => (
                <div className="research-card" key={index}>
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="research-section">
            <h2>Certificates</h2>

            {iic.certificates.map((certificate) => (
              <a
                className="research-link"
                href={certificate.url}
                target="_blank"
                rel="noreferrer"
                key={certificate.title}
              >
                {certificate.title} ↗
              </a>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}