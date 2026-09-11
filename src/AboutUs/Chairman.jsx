import { ArrowUpRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

import AboutSidebar from "./AboutSidebar";

import "./Chairman/Chairman.css";

function Chairman() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <div className="chairman-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="chairman-hero">

        <div className="chairman-hero-grid" />
        <div className="chairman-hero-glow" />

        <div className="chairman-hero-content">

          <span className="chairman-eyebrow">
            ECHELON INSTITUTE OF TECHNOLOGY
          </span>

          <h1>
            CHAIRMAN'S
            <span>MESSAGE</span>
          </h1>

          <p>
            Leadership rooted in education, innovation,
            consciousness and the continuous evolution of life.
          </p>

          <div className="chairman-hero-meta">
            <span>FROM THE CHAIRMAN'S DESK</span>
            <i />
            <span>EIT · FARIDABAD</span>
          </div>

        </div>

        <div className="chairman-hero-index">
          01
        </div>

        <div className="chairman-scroll">
          <span>READ MESSAGE</span>
          <div />
        </div>

      </section>


      {/* =====================================================
          MAIN AREA + SHARED ABOUT SIDEBAR
      ===================================================== */}

      <div className="chairman-layout">

        <AboutSidebar />

        <main className="chairman-main">

          {/* ===================================================
              INTRO
          =================================================== */}

          <section className="chairman-intro">

            <div className="chairman-section-label">
              <span>01</span>
              FROM THE CHAIRMAN'S DESK
            </div>

            <div className="chairman-intro-grid">

              <div className="chairman-profile">

                <div className="chairman-profile-frame">

                  <div className="chairman-profile-number">
                    EIT
                  </div>

                  <div className="chairman-profile-initial">
                    PA
                  </div>

                  <div className="chairman-profile-bottom">
                    <span>CHAIRMAN</span>
                    <span>2007 — PRESENT</span>
                  </div>

                </div>

              </div>


              <div className="chairman-intro-copy">

                <span className="chairman-kicker">
                  LEADERSHIP
                </span>

                <h2>
                  A message from
                  <em> Shri Prabhat Agarwal.</em>
                </h2>

                <p className="chairman-lead">
                  It's my great honor to be able to talk to you
                  people in the capacity of the Chairman of this
                  august institute.
                </p>

                <div className="chairman-signature-block">

                  <strong>
                    Shri Prabhat Agarwal
                  </strong>

                  <span>
                    Chairman of EIT
                  </span>

                </div>

              </div>

            </div>

          </section>


          {/* ===================================================
              MESSAGE
          =================================================== */}

          <section className="chairman-message-section">

            <div className="chairman-message-header">

              <div className="chairman-section-label">
                <span>02</span>
                THE MESSAGE
              </div>

              <div className="chairman-message-index">
                EIT / CHAIRMAN
              </div>

            </div>


            <div className="chairman-message-layout">

              <aside className="chairman-message-aside">

                <Quote size={30} />

                <span>
                  EDUCATION
                  <br />
                  INNOVATION
                  <br />
                  EVOLUTION
                </span>

              </aside>


              <article className="chairman-message-content">

                <p className="message-opening">
                  It's my great honor to be able to talk to you
                  people in the capacity of the Chairman of this
                  august institute. This campaign is dedicated to
                  day-to-day the transformation and evolution of
                  engineering education.
                </p>

                <p>
                  It's my great pleasure to share with you and
                  communicate with deep sense of gratitude towards
                  my colleagues as co-trustees and faculty of this
                  institute, that, the very values we abide by and
                  live on day-to-day basis in conducting.
                </p>

                <p>
                  Coming from these values, I, as the Captain of
                  Team Echelon wish to inform all the stake holders
                  including the prospective students that our
                  endeavour incorporates and intertwines practical
                  demands and aspiration of a healthy, vibrant and
                  inquisitive campus life, enriching interactive
                  interface between academia, industry and students,
                  meaningful, fulfilling, and rewarding summer
                  training, industrial training and job placements.
                </p>

                <div className="chairman-highlight">

                  <span>03</span>

                  <p>
                    Our endeavour incorporates practical demands
                    with the aspirations of a healthy, vibrant and
                    inquisitive campus life.
                  </p>

                </div>

                <p>
                  We at Echelon, believe in oneness and the
                  wholeness of life. Being true to our vision of
                  continuous exploration of self, society and
                  nature, we see the evolution of life as the process
                  of mutual engagement between an individual and
                  the culture one lives in.
                </p>

                <p>
                  Innovation is a culture that one eats, drinks,
                  and breathes in. Culture raises new technologies
                  and new technologies enhance the already
                  established culture.
                </p>

                <p>
                  Coming from here, life at Echelon is about
                  deepening, cultivating and promoting the
                  collective shared space available to one as the
                  culture of education, inspiration and invention.
                </p>

                <div className="chairman-final-statement">

                  <div className="final-statement-number">
                    04
                  </div>

                  <p>
                    You are invited to come, participate and grow
                    as leader, creator, and an agent of
                    transformation of technology and culture from
                    the highest echelon of spiritual vision,
                    philosophical doctrine, collective societal
                    wisdom and scientific rigour.
                  </p>

                </div>

              </article>

            </div>

          </section>


          {/* ===================================================
              LEADERSHIP PRINCIPLES
          =================================================== */}

          <section className="chairman-principles">

            <div className="chairman-section-label">
              <span>03</span>
              THE ECHELON APPROACH
            </div>

            <div className="chairman-principles-heading">

              <h2>
                Education beyond
                <em> the classroom.</em>
              </h2>

              <p>
                A culture where education, inspiration and
                invention continuously influence one another.
              </p>

            </div>


            <div className="chairman-principles-grid">

              <article className="chairman-principle-card">

                <span>01</span>

                <h3>
                  Education
                </h3>

                <p>
                  Creating meaningful learning experiences that
                  connect academic knowledge with practical
                  demands and real-world aspirations.
                </p>

              </article>


              <article className="chairman-principle-card">

                <span>02</span>

                <h3>
                  Innovation
                </h3>

                <p>
                  Building an environment where innovation becomes
                  part of the culture and new technologies continue
                  to strengthen that culture.
                </p>

              </article>


              <article className="chairman-principle-card">

                <span>03</span>

                <h3>
                  Evolution
                </h3>

                <p>
                  Encouraging students to explore themselves,
                  society and nature while growing into leaders and
                  agents of transformation.
                </p>

              </article>

            </div>

          </section>


          {/* ===================================================
              CLOSING
          =================================================== */}

          <section className="chairman-closing">

            <div className="chairman-closing-line" />

            <span>
              ECHELON INSTITUTE OF TECHNOLOGY
            </span>

            <h2>
              Come.
              <br />
              Participate.
              <br />
              <em>Grow.</em>
            </h2>

            <p>
              Leadership, creativity and transformation through
              education, inspiration and invention.
            </p>

            <Link
              to="/about-eit"
              className="chairman-closing-button"
            >
              Back to About EIT
              <ArrowUpRight size={18} />
            </Link>

          </section>

        </main>

      </div>

    </div>
  );
}

export default Chairman;