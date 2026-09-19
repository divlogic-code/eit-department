import PlacementSidebar from "./PlacementSidebar";
import placementBrochure from "../data/placement/placementBrochure";
import "./PlacementBrochure/PlacementBrochure.css";

export default function PlacementBrochure() {
  return (
    <div className="placement-page PlacementBrochure-content">
      <PlacementSidebar />

      <main>
        <section className="placement-hero">
          <span>{placementBrochure.hero.eyebrow}</span>
          <h1>{placementBrochure.hero.title}</h1>
          <p>{placementBrochure.hero.description}</p>
        </section>

        <section className="placement-container">
          <div className="placement-dark">
            <h2>{placementBrochure.brochure.title}</h2>
            <p>{placementBrochure.brochure.description}</p>

            <a
              href={placementBrochure.brochure.url}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                padding: "13px 18px",
                background: "#d5b45b",
                color: "#09231b",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              {placementBrochure.brochure.button}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}