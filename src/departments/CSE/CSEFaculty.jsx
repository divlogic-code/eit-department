import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./CSEFaculty.css";

const cseFaculty = [
  {
    name: "Vikesh Kumar",
    designation: "Professor",
    qualification: "Ph.D",
  },
  {
    name: "Amit Asthana",
    designation: "Professor",
    qualification: "Ph.D",
  },
  {
    name: "Amit Singla",
    designation: "Professor",
    qualification: "Ph.D",
  },

  // Keep the remaining faculty here
];

const CSEFaculty = () => {
  const [search, setSearch] = useState("");

  const filteredFaculty = cseFaculty.filter((faculty) =>
    `${faculty.name} ${faculty.designation} ${faculty.qualification}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="faculty-page">
      <Navbar />

      <main className="faculty-main">

        <section className="faculty-hero">
          <div className="faculty-hero-content">
            <span>COMPUTER SCIENCE & ENGINEERING</span>

            <h1>
              Our
              <br />
              Faculty
            </h1>

            <p>
              The people behind the knowledge, research and
              engineering education at the department.
            </p>
          </div>
        </section>

        <section className="faculty-directory">

          <div className="faculty-directory-header">
            <div>
              <span className="section-kicker">
                ACADEMIC COMMUNITY
              </span>

              <h2>
                Faculty Directory
              </h2>
            </div>

            <div className="faculty-search">
              <input
                type="text"
                placeholder="Search faculty..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="faculty-grid">

            {filteredFaculty.map((faculty, index) => (
              <article
                className="faculty-card"
                key={faculty.name}
              >
                <div className="faculty-card-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="faculty-card-info">
                  <h3>{faculty.name}</h3>

                  <span>
                    {faculty.designation}
                  </span>

                  <small>
                    {faculty.qualification}
                  </small>
                </div>

                <div className="faculty-card-arrow">
                  ↗
                </div>
              </article>
            ))}

          </div>

        </section>

      </main>
    </div>
  );
};

export default CSEFaculty;