import PlacementSidebar from "./PlacementSidebar";
import recruitersSpeak from "../data/placement/recruitersSpeak";
import "./RecruitersSpeak/RecruitersSpeak.css";

export default function RecruitersSpeak() {
  return (
    <div className="placement-page RecruitersSpeak-content">
      <PlacementSidebar />

      <main>
        <section className="placement-hero">
          <span>{recruitersSpeak.hero.eyebrow}</span>
          <h1>{recruitersSpeak.hero.title}</h1>
          <p>{recruitersSpeak.hero.description}</p>
        </section>

        <section className="placement-container">
          <div className="placement-card">
            <h2>{recruitersSpeak.content.title}</h2>
            <p>{recruitersSpeak.content.description}</p>
          </div>
        </section>
      </main>
    </div>
  );
}