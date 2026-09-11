import { ArrowUpRight, Building2, GraduationCap, Landmark, Users } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";

import AboutSidebar from "./AboutSidebar";

import "./AboutEchelon/AboutEchelon.css";
import "./BoardOfGovernors/BoardOfGovernors.css";


const governors = [
  {
    number: "01",
    name: "Shri Prabhat Agarwal",
    position: "Chairman, Echelon Institute of Technology",
    role: "Chairman",
    type: "Institutional Leadership",
  },
  {
    number: "02",
    name: "Dr. Arvind Kumar Pandey",
    position: "Director, Echelon Institute of Technology",
    role: "Member Secretary",
    type: "Institutional Leadership",
  },
  {
    number: "03",
    name: "Shri Manan Sharma",
    position:
      "Director, Manas Hospital (A unit of Sharma Medical Centre Pvt Ltd)",
    role: "Member",
    type: "Professional Leadership",
  },
  {
    number: "04",
    name: "Mr. Debashish Majumdar",
    position:
      "Principal Architect, Line and Form Architects’ Services Pvt. Ltd., Delhi",
    role: "Member",
    type: "Professional Leadership",
  },
  {
    number: "05",
    name: "Prof. Keya Dharamvir",
    position:
      "Professor, Physics & Coordinator Nanoscience, Panjab University, Chandigarh",
    role: "Member",
    type: "Academic Leadership",
  },
  {
    number: "06",
    name: "Dr. S.S Tyagi",
    position: "Dean Affiliation, Gurugram University, Gurugram, Haryana",
    role: "Academic Member",
    type: "Academic Leadership",
  },
  {
    number: "07",
    name: "Shri Suresh Gupta",
    position:
      "National Treasurer, Akhil Bhartiya Pravaasee Kaaryakarta Shiksha Sanskriti Utthan Nyas",
    role: "Academic Member",
    type: "Academic Leadership",
  },
  {
    number: "08",
    name: "Dr. Komal Bhatia",
    position:
      "Professor, J.C. Bose University of Science & Technology, Faridabad, Haryana",
    role: "University Nominee",
    type: "University Representation",
  },
  {
    number: "09",
    name: "Dr. Naresh Gupta",
    position: "Founder, Accuracap Consultant Private Limited",
    role: "Industry Member",
    type: "Industry Leadership",
  },
  {
    number: "10",
    name: "Dr. N. Guruprasad",
    position:
      "Dean Academics, Don Bosco Institute of Technology, Bengaluru",
    role: "Academic Member",
    type: "Academic Leadership",
  },
  {
    number: "11",
    name: "Mr. Rajesh Garg",
    position: "Retired Additional District Judge, Palwal",
    role: "Member",
    type: "Professional Leadership",
  },
  {
    number: "12",
    name: "Mr. Kiran DM",
    position: "President, Sewa Bridge Foundation",
    role: "Member",
    type: "Social Leadership",
  },
  {
    number: "13",
    name: "Dr. Vikesh Kumar",
    position:
      "Professor-CSE, Echelon Institute of Technology, Faridabad",
    role: "Member",
    type: "Institutional Academic",
  },
  {
    number: "14",
    name: "Dr. Sima Kumari",
    position:
      "Professor & Dean, Department of Management Studies, Echelon Institute of Technology",
    role: "Member",
    type: "Institutional Academic",
  },
];


const governanceStats = [
  {
    number: "14",
    label: "Board Members",
    icon: Users,
  },
  {
    number: "06",
    label: "Academic Members",
    icon: GraduationCap,
  },
  {
    number: "01",
    label: "Industry Member",
    icon: Building2,
  },
  {
    number: "01",
    label: "University Nominee",
    icon: Landmark,
  },
];


function BoardOfGovernors() {
  const membersRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  useEffect(() => {
    const cards = membersRef.current?.querySelectorAll(
      ".board-member-card"
    );

    if (!cards?.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("board-card-visible");
          obs.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="board-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="board-hero">

        <div className="board-hero-grid" />

        <div className="board-hero-glow" />

        <div className="board-hero-content">

          <span className="board-eyebrow">
            ECHELON INSTITUTE OF TECHNOLOGY
          </span>

          <h1>
            BOARD OF
            <span>GOVERNORS</span>
          </h1>

          <p>
            A distinguished governing body bringing together
            institutional leadership, academic expertise, professional
            experience and industry perspective.
          </p>

          <div className="board-hero-meta">
            <i />
            <span>INSTITUTIONAL GOVERNANCE</span>
          </div>

        </div>

        <div className="board-hero-index">
          03
        </div>

        <div className="board-scroll">
          <span>EXPLORE THE BOARD</span>
          <div />
        </div>

      </section>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="board-layout">

        <AboutSidebar />

        <main className="board-main">


          {/* =================================================
              INTRODUCTION
          ================================================= */}

          <section className="board-intro">

            <div className="board-section-label">
              <span>01</span>
              GOVERNANCE
            </div>

            <div className="board-intro-heading">

              <div>
                <span className="board-kicker">
                  THE GOVERNING COUNCIL
                </span>

                <h2>
                  Leadership with
                  <em> perspective.</em>
                </h2>
              </div>

              <p>
                The Board of Governors brings together leaders from
                education, industry, professional practice and the
                wider community to provide institutional guidance and
                perspective.
              </p>

            </div>


            {/* Stats */}

            <div className="board-stats">

              {governanceStats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    className="board-stat"
                    key={stat.label}
                  >
                    <div className="board-stat-icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>

                    <strong>{stat.number}</strong>

                    <span>{stat.label}</span>
                  </div>
                );
              })}

            </div>

          </section>


          {/* =================================================
              MEMBERS
          ================================================= */}

          <section className="board-members">

            <div className="board-members-header">

              <div className="board-section-label">
                <span>02</span>
                BOARD MEMBERS
              </div>

              <div className="board-members-count">
                14 MEMBERS
              </div>

            </div>


            <div className="board-members-intro">

              <h2>
                The people behind
                <em> the governance.</em>
              </h2>

              <p>
                A collective of experienced leaders and academics
                supporting the institutional direction of Echelon
                Institute of Technology.
              </p>

            </div>


            <div
                className="board-members-grid"
                ref={membersRef}
            >

              {governors.map((member) => (
                <article
                    className={`board-member-card ${
                        member.number === "01" ? "board-member-featured" : ""
                    }`}
                    key={member.number}
                    style={{
                        "--card-delay": `${(Number(member.number) - 1) * 70}ms`,
                    }}
                >

                  <div className="board-member-top">

                    <span className="board-member-number">
                      {member.number}
                    </span>

                    <span className="board-member-type">
                      {member.type}
                    </span>

                  </div>


                  <div className="board-member-content">

                    <h3>
                      {member.name}
                    </h3>

                    <p>
                      {member.position}
                    </p>

                  </div>


                  <div className="board-member-footer">

                    <span>
                      {member.role}
                    </span>

                    <ArrowUpRight size={17} />

                  </div>

                </article>
              ))}

            </div>

          </section>


          {/* =================================================
              GOVERNANCE PERSPECTIVE
          ================================================= */}

          <section className="board-perspective">

            <div className="board-perspective-number">
              03
            </div>

            <div className="board-perspective-content">

              <span>
                A MULTIDISCIPLINARY PERSPECTIVE
              </span>

              <h2>
                Different disciplines.
                <br />
                One <em>direction.</em>
              </h2>

              <p>
                The composition of the Board reflects a broad range of
                academic, professional, institutional, industry and
                social perspectives. Together, these voices contribute
                to the governance and continued development of the
                institution.
              </p>

            </div>

          </section>


          {/* =================================================
              CLOSING
          ================================================= */}

          <section className="board-closing">

            <div className="board-closing-line" />

            <span>
              ECHELON INSTITUTE OF TECHNOLOGY
            </span>

            <h2>
              Govern.
              <br />
              <em>Guide.</em>
            </h2>

            <p>
              Strong institutions are shaped by thoughtful leadership,
              diverse perspectives and a clear sense of purpose.
            </p>

            <Link
              to="/about-eit"
              className="board-closing-button"
            >
              BACK TO ABOUT EIT
              <ArrowUpRight size={16} />
            </Link>

          </section>

        </main>

      </div>

    </div>
  );
}

export default BoardOfGovernors;