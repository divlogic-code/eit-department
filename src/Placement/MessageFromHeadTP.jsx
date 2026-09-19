import PlacementSidebar from "./PlacementSidebar";
import messageFromHeadTP from "../data/placement/messageFromHeadTP";
import "./MessageFromHeadTP/MessageFromHeadTP.css";

export default function MessageFromHeadTP() {
  return (
    <div className="placement-page MessageFromHeadTP-content">
      <PlacementSidebar />

      <main>
        <section className="placement-hero">
          <span>{messageFromHeadTP.hero.eyebrow}</span>
          <h1>{messageFromHeadTP.hero.title}</h1>
          <p>{messageFromHeadTP.hero.description}</p>
        </section>

        <section className="placement-container">
          <div className="placement-card">
            {messageFromHeadTP.message.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <blockquote className="placement-dark">
              {messageFromHeadTP.message.quote.text}
              <br />
              <small>{messageFromHeadTP.message.quote.author}</small>
            </blockquote>

            <p>{messageFromHeadTP.message.closing}</p>
          </div>
        </section>
      </main>
    </div>
  );
}