import PlacementSidebar from "./PlacementSidebar";
import skillDevelopment from "../data/placement/skillDevelopment";
import "./SkillDevelopment/SkillDevelopment.css";

export default function SkillDevelopment() {
  return (
    <div className="placement-page SkillDevelopment-content">
      <PlacementSidebar />

      <main>
        <section className="placement-hero">
          <span>{skillDevelopment.hero.eyebrow}</span>
          <h1>{skillDevelopment.hero.title}</h1>
          <p>{skillDevelopment.hero.description}</p>
        </section>

        <section className="placement-container">
          <div className="placement-card">
            <p>{skillDevelopment.intro}</p>
          </div>

          <div className="placement-grid">
            {skillDevelopment.developmentAreas.map((item) => (
              <div className="placement-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="placement-card">
            <h2>Training Partners & Technologies</h2>

            <ul>
              {skillDevelopment.trainingPartners.map((partner, index) => (
                <li key={`${partner.name}-${partner.training}-${index}`}>
                  <b>{partner.name}</b> : {partner.training}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}