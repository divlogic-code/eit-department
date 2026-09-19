import PlacementSidebar from "./PlacementSidebar";
import industrialVisits from "../data/placement/industrialVisits";
import "./IndustrialVisits/IndustrialVisits.css";

export default function IndustrialVisits() {
  return (
    <div className="placement-page IndustrialVisits-content">
      <PlacementSidebar />

      <main>
        <section className="placement-hero">
          <span>{industrialVisits.hero.eyebrow}</span>
          <h1>{industrialVisits.hero.title}</h1>
          <p>{industrialVisits.hero.description}</p>
        </section>

        <section className="placement-container">
          <div className="placement-card">
            <h2>{industrialVisits.content.title}</h2>

            {industrialVisits.content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}