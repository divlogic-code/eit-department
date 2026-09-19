import PlacementSidebar from "./PlacementSidebar";
import policyOfPlacement from "../data/placement/policyOfPlacement";
import "./PolicyOfPlacement/PolicyOfPlacement.css";

export default function PolicyOfPlacement() {
  return (
    <div className="placement-page PolicyOfPlacement-content">
      <PlacementSidebar />

      <main>
        <section className="placement-hero">
          <span>{policyOfPlacement.hero.eyebrow}</span>
          <h1>{policyOfPlacement.hero.title}</h1>
          <p>{policyOfPlacement.hero.description}</p>
        </section>

        <section className="placement-container">
          <div className="placement-dark">
            <h2>{policyOfPlacement.purpose.title}</h2>
            <p>{policyOfPlacement.purpose.description}</p>
          </div>

          <div className="placement-card">
            <h2>{policyOfPlacement.definitions.title}</h2>

            {policyOfPlacement.definitions.items.map((item) => (
              <p key={item.term}>
                <b>{item.term}:</b> {item.description}
              </p>
            ))}
          </div>

          <div className="placement-grid">
            <div className="placement-card">
              <h2>{policyOfPlacement.eligibility.title}</h2>

              <ul>
                {policyOfPlacement.eligibility.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="placement-card">
              <h2>{policyOfPlacement.recruitment.title}</h2>

              <ul>
                {policyOfPlacement.recruitment.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="placement-card">
            <h2>{policyOfPlacement.conduct.title}</h2>

            <p>{policyOfPlacement.conduct.description}</p>

            <ul>
              {policyOfPlacement.conduct.instances.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}