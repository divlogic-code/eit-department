import PlacementSidebar from "./PlacementSidebar";
import highestPerformers from "../data/placement/highestPerformers";

import "./HighestPerformers/HighestPerformers.css";

export default function HighestPerformers() {
  return (
    <div className="placement-page HighestPerformers-content">

      <PlacementSidebar />

      <main>

        <section className="placement-hero">

          <span>
            {highestPerformers.hero.eyebrow}
          </span>

          <h1>
            {highestPerformers.hero.title}
          </h1>

          <p>
            {highestPerformers.hero.description}
          </p>

        </section>


        <section className="placement-container">

          <div className="placement-grid">

            {highestPerformers.performers.map((performer) => (

              <div
                key={performer.name}
                className={
                  performer.variant === "dark"
                    ? "placement-dark"
                    : "placement-card"
                }
              >

                <h2>
                  {performer.name}
                </h2>

                <p>
                  {performer.role}
                </p>

                {performer.package && (
                  <h2>
                    {performer.package}
                  </h2>
                )}

              </div>

            ))}

          </div>


          <div className="placement-card">

            <p>
              {highestPerformers.note}
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}