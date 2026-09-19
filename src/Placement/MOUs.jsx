import PlacementSidebar from "./PlacementSidebar";
import mous from "../data/placement/mous";
import "./MOUs/MOUs.css";

export default function MOUs() {
  return (
    <div className="placement-page MOUs-content">
      <PlacementSidebar />

      <main>
        <section className="placement-hero">
          <span>{mous.hero.eyebrow}</span>
          <h1>{mous.hero.title}</h1>
          <p>{mous.hero.description}</p>
        </section>

        <section className="placement-container">
          <div className="placement-card">
            <h2>{mous.content.title}</h2>
            <p>{mous.content.description}</p>
          </div>
        </section>
      </main>
    </div>
  );
}