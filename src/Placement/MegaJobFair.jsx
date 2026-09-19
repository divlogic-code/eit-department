import PlacementSidebar from "./PlacementSidebar";
import megaJobFair from "../data/placement/megaJobFair";
import "./MegaJobFair/MegaJobFair.css";

export default function MegaJobFair() {
  return (
    <div className="placement-page MegaJobFair-content">
      <PlacementSidebar />

      <main>
        <section className="placement-hero">
          <span>{megaJobFair.hero.eyebrow}</span>
          <h1>{megaJobFair.hero.title}</h1>
          <p>{megaJobFair.hero.description}</p>
        </section>

        <section className="placement-container">
          <div className="placement-dark">
            <h2>{megaJobFair.overview.title}</h2>
            <p>{megaJobFair.overview.description}</p>
          </div>

          <div className="placement-grid">
            {megaJobFair.highlights.map((item) => (
              <div className="placement-card" key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="placement-card">
            <p>{megaJobFair.footerNote}</p>
          </div>
        </section>
      </main>
    </div>
  );
}