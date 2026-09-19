import PlacementSidebar from "./PlacementSidebar";
import processOfPlacement from "../data/placement/processOfPlacement";
import "./ProcessOfPlacement/ProcessOfPlacement.css";

export default function ProcessOfPlacement() {
  const [
    companyEngagement,
    preparation,
    eligibility,
    registration,
    recruitment,
    offerManagement,
    postPlacement,
    codeOfConduct,
  ] = processOfPlacement.steps;

  return (
    <div className="placement-page ProcessOfPlacement-content">
      <PlacementSidebar />

      <main>
        <section className="placement-hero">
          <span>{processOfPlacement.hero.eyebrow}</span>
          <h1>{processOfPlacement.hero.title}</h1>
          <p>{processOfPlacement.hero.description}</p>
        </section>

        <section className="placement-container">
          <div className="placement-card">
            <span className="eyebrow">{companyEngagement.eyebrow}</span>
            <h2>{companyEngagement.title}</h2>
            <p>{companyEngagement.description}</p>
          </div>

          <div className="placement-card">
            <span className="eyebrow">{preparation.eyebrow}</span>
            <h2>{preparation.title}</h2>

            <ul>
              {preparation.items.map((item) => (
                <li key={item.title}>
                  <b>{item.title}:</b> {item.description}
                </li>
              ))}
            </ul>
          </div>

          <div className="placement-grid">
            {[eligibility, registration].map((section) => (
              <div className="placement-dark" key={section.number}>
                <h2>
                  {section.number} / {section.title}
                </h2>

                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="placement-card">
            <h2>
              {recruitment.number} / {recruitment.title}
            </h2>

            {recruitment.items.map((item) => (
              <p key={item.title}>
                <b>{item.title}:</b> {item.description}
              </p>
            ))}
          </div>

          <div className="placement-grid">
            <div className="placement-card">
              <h2>
                {offerManagement.number} / {offerManagement.title}
              </h2>
              <p>{offerManagement.description}</p>
            </div>

            <div className="placement-card">
              <h2>
                {postPlacement.number} / {postPlacement.title}
              </h2>
              <p>{postPlacement.description}</p>
            </div>
          </div>

          <div className="placement-card">
            <h2>
              {codeOfConduct.number} / {codeOfConduct.title}
            </h2>

            <ul>
              {codeOfConduct.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}