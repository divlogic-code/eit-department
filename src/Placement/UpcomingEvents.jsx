import PlacementSidebar from "./PlacementSidebar";
import upcomingEvents from "../data/placement/upcomingEvents";
import "./UpcomingEvents/UpcomingEvents.css";

export default function UpcomingEvents() {
  return (
    <div className="placement-page UpcomingEvents-content">
      <PlacementSidebar />

      <main>
        <section className="placement-hero">
          <span>{upcomingEvents.hero.eyebrow}</span>
          <h1>{upcomingEvents.hero.title}</h1>
          <p>{upcomingEvents.hero.description}</p>
        </section>

        <section className="placement-container">
          <div className="placement-card">
            <h2>{upcomingEvents.content.title}</h2>
            <p>{upcomingEvents.content.description}</p>
          </div>
        </section>
      </main>
    </div>
  );
}