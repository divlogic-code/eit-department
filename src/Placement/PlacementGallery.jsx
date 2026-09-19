import PlacementSidebar from "./PlacementSidebar";
import placementGallery from "../data/placement/placementGallery";
import "./PlacementGallery/PlacementGallery.css";

export default function PlacementGallery() {
  return (
    <div className="placement-page PlacementGallery-content">
      <PlacementSidebar />

      <main>
        <section className="placement-hero">
          <span>{placementGallery.hero.eyebrow}</span>
          <h1>{placementGallery.hero.title}</h1>
          <p>{placementGallery.hero.description}</p>
        </section>

        <section className="placement-container">
          <div className="placement-card">
            <h2>{placementGallery.content.title}</h2>
            <p>{placementGallery.content.description}</p>
          </div>
        </section>
      </main>
    </div>
  );
}