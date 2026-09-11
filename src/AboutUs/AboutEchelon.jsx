import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import "./AboutEchelon/AboutEchelon.css";

const sidebarItems = [
  {
    label: "About Echelon",
    type: "section",
    target: "about-eit",
  },
  {
    label: "Vision & Mission",
    type: "section",
    target: "vision-mission",
  },
  {
    label: "Chairman's Message",
    type: "route",
    target: "/chairman",
  },
  {
    label: "Director's Message",
    type: "route",
    target: "/director",
  },
  {
    label: "Organisational Structure",
    type: "section",
    target: "organisational-structure",
  },
  {
    label: "Board Of Governors",
    type: "route",
    target: "/board-of-governors",
  },
  {
    label: "Affiliations & Approvals",
    type: "route",
    target: "/affiliations",
  },
  {
    label: "Philosophy We Live By",
    type: "route",
    target: "/philosophy",
  },
];

const highlights = [
  {
    number: "01",
    title: "Quality Education",
    text: "Offering industry-aligned academic programs that focus on developing technical expertise, problem-solving abilities, and leadership qualities.",
  },
  {
    number: "02",
    title: "Research & Innovation",
    text: "Promoting a research-driven environment that encourages creativity, interdisciplinary collaboration, and technological advancements.",
  },
  {
    number: "03",
    title: "Industry Collaboration",
    text: "Building strong partnerships with leading industries to offer practical exposure, internships, and training opportunities that bridge the gap between academics and the professional world.",
  },
  {
    number: "04",
    title: "Holistic Development",
    text: "Fostering ethical values, leadership skills, and social responsibility to create well-rounded individuals prepared to make a positive impact.",
  },
];

const qualityPoints = [
  "Deliver experiential and outcome-based education that nurtures critical thinking, problem-solving, and leadership skills.",
  "Promote research, innovation, and industry collaboration to bridge the gap between academics and real-world applications.",
  "Develop ethically responsible, self-motivated, and socially conscious professionals equipped for global challenges.",
  "Uphold continuous quality assurance through stakeholder engagement, regular assessments, and best governance practices.",
];

const missions = [
  {
    id: "M-1",
    text: "Having a culture of inspiration, exploration, and invention through effective, experiential teaching-learning giving rise to ever-evolving knowledge and wisdom.",
  },
  {
    id: "M-2",
    text: "To have self-inspired students ever engaged in continually working upon & sharpening and deepening computational, creative, innovative, & leadership consciousness.",
  },
  {
    id: "M-3",
    text: "Having students established in self-reflective consciousness, committed to personal, social and human integrity, and engaged in deep inquiry and conversation, giving rise to shared, intersubjective human values and consciousness.",
  },
];

function AboutEchelon() {
  const [activeSection, setActiveSection] = useState("about-eit");
  const [showSidebar, setShowSidebar] = useState(false);

  /*
   * ============================================================
   * SCROLL HANDLER
   * ============================================================
   */

  useEffect(() => {
    const sectionIds = [
      "about-eit",
      "vision-mission",
      "organisational-structure",
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      /*
       * --------------------------------------------------------
       * SIDEBAR VISIBILITY
       * --------------------------------------------------------
       *
       * Hidden at the hero.
       * Appears after the user has moved away from the hero.
       */
      const hero = document.querySelector(".about-eit-hero");

      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;

        setShowSidebar(heroBottom <= 80);
      } else {
        setShowSidebar(scrollY > 180);
      }

      /*
       * --------------------------------------------------------
       * ACTIVE SECTION
       * --------------------------------------------------------
       */

      const scrollPosition = scrollY + 180;

      let currentSection = "about-eit";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect().top + scrollY;

        if (sectionTop <= scrollPosition) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * ============================================================
   * SECTION SCROLL
   * ============================================================
   */

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    const offset = 100;

    const elementPosition =
      element.getBoundingClientRect().top +
      window.scrollY;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });

    setActiveSection(id);
  };

  return (
    <div className="about-eit-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-eit-hero">

        <div className="about-eit-hero-grid" />

        <div className="about-eit-hero-glow" />

        <div className="about-eit-hero-content">

          <span className="about-eit-eyebrow">
            ECHELON INSTITUTE OF TECHNOLOGY
          </span>

          <h1>
            ABOUT
            <span>EIT</span>
          </h1>

          <p>
            Empowering minds, inspiring creativity, and building
            the future of technology and education.
          </p>

          <div className="about-eit-hero-meta">
            <span>EST. 2007</span>
            <i />
            <span>FARIDABAD · DELHI NCR</span>
          </div>

        </div>

        <div className="about-eit-hero-index">
          01
        </div>

        <div className="about-eit-scroll">
          <span>EXPLORE</span>
          <div />
        </div>

      </section>

      {/* =====================================================
          PAGE BODY
      ===================================================== */}

      <div className="about-eit-layout">

        {/* ===================================================
            SIDEBAR
        =================================================== */}

        <aside
          className={`about-eit-sidebar ${
            showSidebar ? "sidebar-visible" : ""
          }`}
        >

          <div className="about-eit-sidebar-inner">

            <div className="about-eit-sidebar-heading">
              <span>ABOUT US</span>
              <small>EIT</small>
            </div>

            <div className="about-eit-sidebar-line" />

            <nav>

              {sidebarItems.map((item) => {

                const active =
                  item.type === "section" &&
                  activeSection === item.target;

                if (item.type === "route") {
                  return (
                    <Link
                      key={item.label}
                      to={item.target}
                      className="about-eit-sidebar-link"
                    >
                      <span>{item.label}</span>
                      <ChevronRight size={16} />
                    </Link>
                  );
                }

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() =>
                      scrollToSection(item.target)
                    }
                    className={`about-eit-sidebar-link ${
                      active ? "active" : ""
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={16} />
                  </button>
                );
              })}

            </nav>

            <div className="about-eit-sidebar-footer">
              <span>ECHELON</span>
              <span>2007 — PRESENT</span>
            </div>

          </div>

        </aside>

        {/* ===================================================
            CONTENT
        =================================================== */}

        <main className="about-eit-content">

          {/* =================================================
              ABOUT ECHELON
          ================================================= */}

          <section
            id="about-eit"
            className="about-eit-section"
          >

            <div className="about-eit-section-label">
              <span>01</span>
              ABOUT ECHELON
            </div>

            <div className="about-eit-intro-heading">

              <h2>
                A culture of
                <em> inspiration,</em>
                <br />
                exploration and growth.
              </h2>

              <div className="about-eit-year">
                <small>ESTABLISHED</small>
                <strong>2007</strong>
              </div>

            </div>

            <div className="about-eit-intro-grid">

              <div className="about-eit-copy">

                <p className="about-eit-lead">
                  Echelon Institute of Technology (EIT),
                  Faridabad, established in 2007, is a premier
                  institution dedicated to academic excellence,
                  innovation, and holistic development.
                </p>

                <p>
                  EIT is affiliated to Guru Gobind Singh
                  Indraprastha University, Delhi and is approved
                  by AICTE, Ministry of Education, Government of
                  India.
                </p>

                <p>
                  At EIT, we strive to nurture technical and
                  managerial leaders who drive change and
                  innovation through a culture of inspiration,
                  exploration, and continuous learning.
                </p>

                <p>
                  We place a strong emphasis on experiential and
                  outcome-based education, providing students with
                  the practical skills and knowledge necessary to
                  thrive in an ever-evolving global landscape.
                </p>

              </div>

              <div className="about-eit-establishment">

                <div className="about-eit-establishment-circle circle-one" />
                <div className="about-eit-establishment-circle circle-two" />
                <div className="about-eit-establishment-circle circle-three" />

                <div className="about-eit-establishment-core">
                  <span>EIT</span>
                  <strong>07</strong>
                  <small>ESTABLISHED</small>
                </div>

                <div className="about-eit-establishment-bottom">
                  <span>FARIDABAD</span>
                  <span>DELHI NCR</span>
                </div>

              </div>

            </div>

            {/* KEY HIGHLIGHTS */}

            <div className="about-eit-highlights">

              <div className="about-eit-subheading">
                <span>01.01</span>
                <h3>Key Highlights</h3>
              </div>

              <div className="about-eit-highlight-grid">

                {highlights.map((item) => (
                  <article
                    className="about-eit-highlight-card"
                    key={item.number}
                  >

                    <span className="highlight-number">
                      {item.number}
                    </span>

                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>

                    <ArrowUpRight
                      className="highlight-icon"
                      size={21}
                    />

                  </article>
                ))}

              </div>

            </div>

            {/* QUALITY POLICY */}

            <div className="about-eit-quality">

              <div className="about-eit-quality-title">

                <span>01.02</span>

                <div>
                  <small>OUR COMMITMENT</small>
                  <h3>Quality Policy</h3>
                </div>

              </div>

              <div className="about-eit-quality-content">

                <p className="quality-lead">
                  Echelon Institute of Technology (EIT) is
                  committed to excellence in education,
                  innovation, and holistic development by
                  fostering a culture of inspiration,
                  exploration, and continuous improvement.
                </p>

                <div className="quality-list">

                  {qualityPoints.map((point, index) => (
                    <div
                      className="quality-list-item"
                      key={index}
                    >
                      <span>
                        0{index + 1}
                      </span>

                      <p>{point}</p>
                    </div>
                  ))}

                </div>

                <p className="quality-ending">
                  Through these commitments, we strive to empower
                  students and faculty to achieve academic
                  excellence, personal integrity, and lifelong
                  learning, shaping future leaders who contribute
                  meaningfully to society.
                </p>

              </div>

            </div>

          </section>

          {/* =================================================
              VISION + MISSION
          ================================================= */}

          <section
            id="vision-mission"
            className="about-eit-section about-eit-vision-section"
          >

            <div className="about-eit-section-label">
              <span>02</span>
              VISION & MISSION
            </div>

            <div className="about-eit-vision-card">

              <div className="vision-card-label">
                OUR VISION
              </div>

              <div className="vision-card-body">

                <div className="vision-quote">
                  “
                </div>

                <blockquote>
                  Technical and Management leaders engaged in
                  the evolution of life, being at the frontiers
                  of the continuous technological and
                  administrative breakthroughs, inspired by
                  ongoing exploration of self, society, and
                  nature through self-reflective consciousness
                  by building a culture of inspiration,
                  exploration and growth.
                </blockquote>

              </div>

              <div className="vision-card-footer">
                <span>VISION · EIT</span>
                <span>02</span>
              </div>

            </div>

            <div className="about-eit-mission-heading">

              <div>
                <span>02.01</span>
                <h3>Mission</h3>
              </div>

              <p>
                Three principles shape the educational culture
                and purpose of Echelon.
              </p>

            </div>

            <div className="about-eit-mission-grid">

              {missions.map((mission) => (
                <article
                  className="about-eit-mission-card"
                  key={mission.id}
                >

                  <div className="mission-card-top">
                    {mission.id}
                  </div>

                  <div className="mission-card-line" />

                  <p>{mission.text}</p>

                  <div className="mission-card-footer">
                    <span>ECHELON</span>
                    <ArrowUpRight size={18} />
                  </div>

                </article>
              ))}

            </div>

          </section>

          {/* =================================================
              ORGANISATIONAL STRUCTURE
          ================================================= */}

          <section
            id="organisational-structure"
            className="about-eit-section about-eit-org-section"
          >

            <div className="about-eit-section-label">
              <span>03</span>
              ORGANISATIONAL STRUCTURE
            </div>

            <div className="about-eit-org-heading">

              <h2>
                The people
                <em> behind EIT.</em>
              </h2>

              <p>
                An institutional structure connecting leadership,
                academics, administration and campus operations.
              </p>

            </div>

            <div className="about-eit-org-chart">

              <div className="org-primary">

                <div className="org-box management">
                  MANAGEMENT
                </div>

                <div className="org-line" />

                <div className="org-box governors">
                  BOARD OF GOVERNORS
                </div>

                <div className="org-line" />

                <div className="org-box director">
                  DIRECTOR
                </div>

              </div>

              <div className="org-branches">

                <div className="org-branch">
                  <strong>
                    ACADEMIC LEADERSHIP
                  </strong>

                  <span>Dean Academics</span>
                  <span>Dean Student Welfare</span>
                  <span>Dean R&amp;D</span>
                  <span>Dean First Year</span>
                  <span>HODs</span>
                  <span>Faculty</span>
                </div>

                <div className="org-branch">
                  <strong>
                    ADMINISTRATION
                  </strong>

                  <span>Registrar</span>
                  <span>Controller Examinations</span>
                  <span>Assistant Registrar</span>
                  <span>Administrative Officer</span>
                  <span>HR Manager</span>
                  <span>Account Officer</span>
                </div>

                <div className="org-branch">
                  <strong>
                    STUDENT &amp; RESEARCH
                  </strong>

                  <span>Dean R&amp;D</span>
                  <span>IQAC Coordinator</span>
                  <span>Proctorial Board</span>
                  <span>Training &amp; Placement</span>
                  <span>Research Activities</span>
                  <span>Student Support</span>
                </div>

                <div className="org-branch">
                  <strong>
                    ACADEMIC SUPPORT
                  </strong>

                  <span>Laboratory Staff</span>
                  <span>Library</span>
                  <span>IT Manager</span>
                  <span>DMS Faculty</span>
                  <span>First Year Labs</span>
                  <span>Technical Support</span>
                </div>

                <div className="org-branch">
                  <strong>
                    CAMPUS OPERATIONS
                  </strong>

                  <span>Security</span>
                  <span>Transport</span>
                  <span>Maintenance</span>
                  <span>Hostel</span>
                  <span>Canteen</span>
                  <span>Accounts</span>
                </div>

              </div>

              <div className="org-footer">
                <span>
                  ECHELON INSTITUTE OF TECHNOLOGY
                </span>

                <span>
                  INSTITUTIONAL STRUCTURE
                </span>
              </div>

            </div>

            {/* =================================================
                FINAL CTA
            ================================================= */}

            <div className="about-eit-closing">

              <span>2007 — PRESENT</span>

              <h3>
                Empowering minds.
                <br />
                Inspiring <em>possibility.</em>
              </h3>

              <Link
                to="/"
                className="about-eit-closing-button"
              >
                Return to EIT
                <ArrowUpRight size={18} />
              </Link>

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}

export default AboutEchelon;