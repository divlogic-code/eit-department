import PlacementSidebar from "./PlacementSidebar";
import industryExpertLectures from "../data/placement/industryExpertLectures";
import "./IndustryExpertLectures/IndustryExpertLectures.css";

export default function IndustryExpertLectures() {
  return (
    <div className="placement-page IndustryExpertLectures-content">
      <PlacementSidebar />

      <main>
        <section className="placement-hero">
          <span>{industryExpertLectures.hero.eyebrow}</span>
          <h1>{industryExpertLectures.hero.title}</h1>
          <p>{industryExpertLectures.hero.description}</p>
        </section>

        <section className="placement-container">
          <div className="placement-card">
            {industryExpertLectures.content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="placement-grid">
            {industryExpertLectures.highlights.map((item) => (
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