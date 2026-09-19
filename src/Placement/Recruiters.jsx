import PlacementSidebar from "./PlacementSidebar";
import recruiters from "../data/placement/recruiters";
import "./Recruiters/Recruiters.css";

export default function Recruiters() {
  return (
    <div className="placement-page Recruiters-content">
      <PlacementSidebar />

      <main>
        <section className="placement-hero">
          <span>{recruiters.hero.eyebrow}</span>
          <h1>{recruiters.hero.title}</h1>
          <p>{recruiters.hero.description}</p>
        </section>

        <section className="placement-container">
          <div className="placement-card">
            <h2>{recruiters.content.title}</h2>
            <p>{recruiters.content.description}</p>
          </div>
        </section>
      </main>
    </div>
  );
}