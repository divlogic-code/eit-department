import { ArrowUpRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

import AboutSidebar from "./AboutSidebar";

import "./AboutEchelon/AboutEchelon.css";
import "./Director/Director.css";

function Director() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <div className="director-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="director-hero">

        <div className="director-hero-grid" />
        <div className="director-hero-glow" />

        <div className="director-hero-content">

          <span className="director-eyebrow">
            ECHELON INSTITUTE OF TECHNOLOGY
          </span>

          <h1>
            DIRECTOR'S
            <span>MESSAGE</span>
          </h1>

          <p>
            Education that goes beyond classrooms,
            nurturing innovation, integrity and purpose.
          </p>

          <div className="director-hero-meta">
            <span>FROM THE DIRECTOR'S DESK</span>
            <i />
            <span>EIT · FARIDABAD</span>
          </div>

        </div>

        <div className="director-hero-index">
          01
        </div>

        <div className="director-scroll">
          <span>READ MESSAGE</span>
          <div />
        </div>

      </section>


      {/* =====================================================
          MAIN AREA + SHARED ABOUT SIDEBAR
      ===================================================== */}

      <div className="director-layout">

        <AboutSidebar />

        <main className="director-main">

          {/* ===================================================
              INTRO
          =================================================== */}

          <section className="director-intro">

            <div className="director-section-label">
              <span>01</span>
              FROM THE DIRECTOR'S DESK
            </div>

            <div className="director-intro-grid">

              <div className="director-profile">

                <div className="director-profile-frame">

                  <div className="director-profile-number">
                    EIT
                  </div>

                  <div className="director-profile-initial">
                    AKP
                  </div>

                  <div className="director-profile-bottom">
                    <span>DIRECTOR</span>
                    <span>EIT · FARIDABAD</span>
                  </div>

                </div>

              </div>


              <div className="director-intro-copy">

                <span className="director-kicker">
                  LEADERSHIP
                </span>

                <h2>
                  A message from
                  <em> Prof. (Dr.) Arvind Kumar Pandey.</em>
                </h2>

                <p className="director-lead">
                  At EIT, we are committed to delivering an
                  education that goes beyond traditional classrooms
                  and textbooks.
                </p>

                <div className="director-signature-block">

                  <strong>
                    Prof. (Dr.) Arvind Kumar Pandey
                  </strong>

                  <span>
                    Director
                  </span>

                </div>

              </div>

            </div>

          </section>


          {/* ===================================================
              MESSAGE
          =================================================== */}

          <section className="director-message-section">

            <div className="director-message-header">

              <div className="director-section-label">
                <span>02</span>
                THE MESSAGE
              </div>

              <div className="director-message-index">
                EIT / DIRECTOR
              </div>

            </div>


            <div className="director-message-layout">

              <aside className="director-message-aside">

                <Quote size={30} />

                <span>
                  EDUCATION
                  <br />
                  INNOVATION
                  <br />
                  PURPOSE
                </span>

              </aside>


              <article className="director-message-content">

                <p className="message-opening">
                  At EIT, we are committed to delivering an
                  education that goes beyond traditional classrooms
                  and textbooks. We strive to nurture not only
                  competent professionals, but also confident,
                  responsible, and visionary individuals who can
                  lead with innovation, empathy, and integrity.
                </p>

                <p>
                  Our academic framework is thoughtfully designed
                  to blend theoretical knowledge with practical
                  experience. Through hands-on learning, strong
                  industry connect, research-driven projects, and
                  a focus on innovation, we empower our students to
                  meet real-world challenges with confidence and
                  creativity.
                </p>

                <div className="director-highlight">

                  <span>03</span>

                  <p>
                    We strive to nurture competent professionals
                    who are confident, responsible and visionary,
                    prepared to lead with innovation, empathy and
                    integrity.
                  </p>

                </div>

                <p>
                  We believe that every student carries unique
                  potential. At EIT, we create an environment that
                  encourages curiosity, critical thinking, and a
                  lifelong passion for learning.
                </p>

                <p>
                  Equally, we uphold the values of honesty,
                  collaboration, and social responsibility, qualities
                  that are essential in shaping thoughtful leaders
                  and global citizens.
                </p>

                <p>
                  Whether you aspire to become an engineer,
                  entrepreneur, or leader in any field, EIT offers
                  the guidance, resources, and opportunities to help
                  you achieve your goals and make a meaningful
                  impact.
                </p>

                <div className="director-final-statement">

                  <div className="final-statement-number">
                    04
                  </div>

                  <p>
                    We invite you to be part of this enriching
                    journey. Together, let's shape the future
                    through learning, innovation, and purpose.
                  </p>

                </div>

              </article>

            </div>

          </section>


          {/* ===================================================
              DIRECTOR'S PRINCIPLES
          =================================================== */}

          <section className="director-principles">

            <div className="director-section-label">
              <span>03</span>
              THE EIT APPROACH
            </div>

            <div className="director-principles-heading">

              <h2>
                Learning beyond
                <em> the classroom.</em>
              </h2>

              <p>
                An academic environment built around practical
                experience, innovation and the development of
                responsible leaders.
              </p>

            </div>


            <div className="director-principles-grid">

              <article className="director-principle-card">

                <span>01</span>

                <h3>
                  Experience
                </h3>

                <p>
                  Blending theoretical knowledge with hands-on
                  learning and practical experience to prepare
                  students for real-world challenges.
                </p>

              </article>


              <article className="director-principle-card">

                <span>02</span>

                <h3>
                  Innovation
                </h3>

                <p>
                  Encouraging research-driven projects, creativity
                  and innovation while building strong connections
                  with industry.
                </p>

              </article>


              <article className="director-principle-card">

                <span>03</span>

                <h3>
                  Purpose
                </h3>

                <p>
                  Developing confident and responsible individuals
                  guided by curiosity, integrity, collaboration and
                  social responsibility.
                </p>

              </article>

            </div>

          </section>


          {/* ===================================================
              CLOSING
          =================================================== */}

          <section className="director-closing">

            <div className="director-closing-line" />

            <span>
              ECHELON INSTITUTE OF TECHNOLOGY
            </span>

            <h2>
              Learn.
              <br />
              Innovate.
              <br />
              <em>Lead.</em>
            </h2>

            <p>
              Shaping the future through learning, innovation
              and purpose.
            </p>

            <Link
              to="/about-eit"
              className="director-closing-button"
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

export default Director;