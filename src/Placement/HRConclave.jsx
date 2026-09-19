import PlacementSidebar from "./PlacementSidebar";
import hrConclave from "../data/placement/hrConclave";
import "./HRConclave/HRConclave.css";

export default function HRConclave() {
  return (
    <div className="placement-page HRConclave-content">
      <PlacementSidebar />

      <main>
        <section className="placement-hero">
          <span>{hrConclave.hero.eyebrow}</span>
          <h1>{hrConclave.hero.title}</h1>
          <p>{hrConclave.hero.description}</p>
        </section>

        <section className="placement-container">
          <div className="placement-dark">
            <span className="eyebrow">
              {hrConclave.conclave.eyebrow}
            </span>

            <h2>{hrConclave.conclave.title}</h2>

            <p>{hrConclave.conclave.description}</p>
          </div>

          <div className="placement-grid">
            {hrConclave.highlights.map((item) => (
              <div className="placement-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}