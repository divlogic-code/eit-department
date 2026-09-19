import ResearchSidebar from "./ResearchSidebar";
import "./ResearchShared.css";
import "./BookChapters/BookChapters.css";

import bookChapters from "../data/research/bookChapters";

export default function BookChapters() {
  return (
    <>
      <ResearchSidebar />

      <main className="research-page">
        <div className="research-container">
          <section className="research-hero">
            <div className="research-kicker">
              {bookChapters.hero.kicker}
            </div>

            <h1 className="research-title">
              {bookChapters.hero.title}
            </h1>
          </section>

          <section className="research-section">
            <div className="research-table-wrap">
              <table className="research-table">
                <thead>
                  <tr>
                    {bookChapters.columns.map((column) => (
                      <th key={column}>{column}</th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {bookChapters.records.map((record, index) => (
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