import ResearchSidebar from "./ResearchSidebar";
import "./ResearchShared.css";
import "./Patents/Patents.css";

import patents from "../data/research/patents";

export default function Patents() {
  return (
    <>
      <ResearchSidebar />

      <main className="research-page">
        <div className="research-container">
          <section className="research-hero">
            <div className="research-kicker">
              {patents.hero.kicker}
            </div>

            <h1 className="research-title">
              {patents.hero.title}
            </h1>
          </section>

          <section className="research-section">
            <div className="research-table-wrap">
              <table className="research-table">
                <thead>
                  <tr>
                    {patents.columns.map((column) => (
                      <th key={column}>{column}</th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {patents.records.map((record, index) => (
                    <tr key={index}>
                      {record.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}