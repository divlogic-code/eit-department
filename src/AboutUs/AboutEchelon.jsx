import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import { createPortal } from "react-dom";

import {
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./AboutEchelon/AboutEchelon.css";

import {
  sidebarItems,
  heroData,
  aboutData,
  highlights,
  qualityPolicyData,
  visionMissionData,
  organisationalStructureData,
  closingData,
} from "../data/about/aboutContent";

/* =========================================================
   ABOUT PAGE BACKGROUND VIDEO

   IMPORTANT:
   The video is rendered directly into document.body.
   This prevents parent containers, route wrappers,
   transforms, overflow rules, or stacking contexts
   from trapping the video inside the About page.

   Scroll position controls video position.
   Video NEVER autoplay.
========================================================= */

function AboutBackgroundVideo() {
  const videoRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    let mounted = true;

    const updateVideo = () => {
      if (!mounted) return;

      if (
        !video.duration ||
        !Number.isFinite(video.duration)
      ) {
        animationFrameRef.current =
          requestAnimationFrame(updateVideo);

        return;
      }

      const scrollTop = window.scrollY;

      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        maxScroll > 0
          ? Math.min(
              Math.max(
                scrollTop / maxScroll,
                0
              ),
              1
            )
          : 0;

      const targetTime =
        progress * video.duration;

      if (
        Math.abs(
          video.currentTime - targetTime
        ) > 0.01
      ) {
        try {
          video.currentTime = targetTime;
        } catch {
          /* Ignore seek errors while metadata is updating */
        }
      }

      animationFrameRef.current =
        requestAnimationFrame(updateVideo);
    };

    const startVideoControl = () => {
      if (
        animationFrameRef.current
      ) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }

      video.pause();

      animationFrameRef.current =
        requestAnimationFrame(updateVideo);
    };

    const handleLoadedMetadata = () => {
      video.pause();
      video.currentTime = 0;
      startVideoControl();
    };

    video.pause();

    if (video.readyState >= 1) {
      startVideoControl();
    } else {
      video.addEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );
    }

    return () => {
      mounted = false;

      video.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );

      if (
        animationFrameRef.current
      ) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }

      video.pause();
    };
  }, []);

  const video = (
    <video
      ref={videoRef}
      className="about-background-video"
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source
        src="/videos/1.mp4"
        type="video/mp4"
      />
    </video>
  );

  /*
    Render directly into <body>.

    This is the important part that prevents the video
    from being trapped inside the About page wrapper.
  */
  return createPortal(
    video,
    document.body
  );
}

/* =========================================================
   ABOUT ECHELON PAGE
========================================================= */

function AboutEchelon() {
  const [activeSection, setActiveSection] =
    useState("about-eit");

  const [showSidebar, setShowSidebar] =
    useState(false);

  /* =======================================================
     SCROLL HANDLER
  ======================================================= */

  useEffect(() => {
    const sectionIds = [
      "about-eit",
      "vision-mission",
      "organisational-structure",
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      const hero =
        document.querySelector(
          ".about-eit-hero"
        );

      if (hero) {
        const heroBottom =
          hero.getBoundingClientRect()
            .bottom;

        setShowSidebar(
          heroBottom <= 80
        );
      } else {
        setShowSidebar(
          scrollY > 180
        );
      }

      const scrollPosition =
        scrollY + 180;

      let currentSection =
        "about-eit";

      sectionIds.forEach((id) => {
        const section =
          document.getElementById(id);

        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect()
            .top + scrollY;

        if (
          sectionTop <= scrollPosition
        ) {
          currentSection = id;
        }
      });

      setActiveSection(
        currentSection
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =======================================================
     SECTION SCROLL
  ======================================================= */

  const scrollToSection = (id) => {
    const element =
      document.getElementById(id);

    if (!element) return;

    const offset = 100;

    const elementPosition =
      element.getBoundingClientRect()
        .top + window.scrollY;

    window.scrollTo({
      top:
        elementPosition - offset,
      behavior: "smooth",
    });

    setActiveSection(id);
  };

  /* =======================================================
     PAGE
  ======================================================= */

  return (
    <>
      {/* ==================================================
          GLOBAL FIXED BACKGROUND VIDEO
      ================================================== */}

      <AboutBackgroundVideo />

      {/* ==================================================
          ABOUT PAGE
      ================================================== */}

      <div className="about-eit-page">

        {/* ==================================================
            HERO
        ================================================== */}

        <section className="about-eit-hero">

          <div className="about-eit-hero-grid" />

          <div className="about-eit-hero-glow" />

          <div className="about-eit-hero-content">

            <span className="about-eit-eyebrow">
              {heroData.eyebrow}
            </span>

            <h1>
              ABOUT
              <span>EIT</span>
            </h1>

            <p>
              {heroData.description}
            </p>

            <div className="about-eit-hero-meta">

              <span>
                {heroData.established}
              </span>

              <i />

              <span>
                {heroData.location}
              </span>

            </div>

          </div>

          <div className="about-eit-hero-index">
            {heroData.index}
          </div>

          <div className="about-eit-scroll">

            <span>
              {heroData.scrollLabel}
            </span>

            <div />

          </div>

        </section>

        {/* ==================================================
            PAGE BODY
        ================================================== */}

        <div className="about-eit-layout">

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside
            className={`about-eit-sidebar ${
              showSidebar
                ? "sidebar-visible"
                : ""
            }`}
          >

            <div className="about-eit-sidebar-inner">

              <div className="about-eit-sidebar-heading">

                <span>
                  ABOUT US
                </span>

                <small>
                  EIT
                </small>

              </div>

              <div className="about-eit-sidebar-line" />

              <nav>

                {sidebarItems.map(
                  (item) => {

                    const active =
                      item.type ===
                        "section" &&
                      activeSection ===
                        item.target;

                    if (
                      item.type ===
                      "route"
                    ) {
                      return (
                        <Link
                          key={item.label}
                          to={item.target}
                          className="about-eit-sidebar-link"
                        >

                          <span>
                            {item.label}
                          </span>

                          <ChevronRight
                            size={16}
                          />

                        </Link>
                      );
                    }

                    return (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() =>
                          scrollToSection(
                            item.target
                          )
                        }
                        className={`about-eit-sidebar-link ${
                          active
                            ? "active"
                            : ""
                        }`}
                      >

                        <span>
                          {item.label}
                        </span>

                        <ChevronRight
                          size={16}
                        />

                      </button>
                    );
                  }
                )}

              </nav>

              <div className="about-eit-sidebar-footer">

                <span>
                  ECHELON
                </span>

                <span>
                  2007 - PRESENT
                </span>

              </div>

            </div>

          </aside>

          {/* =================================================
              CONTENT
          ================================================= */}

          <main className="about-eit-content">

            {/* ===============================================
                ABOUT ECHELON
            =============================================== */}

            <section
              id="about-eit"
              className="about-eit-section"
            >

              <div className="about-eit-section-label">

                <span>
                  {aboutData.sectionNumber}
                </span>

                {aboutData.sectionLabel}

              </div>

              <div className="about-eit-intro-heading">

                <h2>

                  {aboutData.heading.firstLine}

                  <em>
                    {aboutData.heading.emphasized}
                  </em>

                  <br />

                  {aboutData.heading.secondLine}

                </h2>

                <div className="about-eit-year">

                  <small>
                    {aboutData.established.label}
                  </small>

                  <strong>
                    {aboutData.established.year}
                  </strong>

                </div>

              </div>

              <div className="about-eit-intro-grid">

                <div className="about-eit-copy">

                  {aboutData.paragraphs.map(
                    (paragraph, index) => (

                      <p
                        key={index}
                        className={
                          paragraph.type ===
                          "lead"
                            ? "about-eit-lead"
                            : undefined
                        }
                      >
                        {paragraph.text}
                      </p>

                    )
                  )}

                </div>

                <div className="about-eit-establishment">

                  <div className="about-eit-establishment-circle circle-one" />

                  <div className="about-eit-establishment-circle circle-two" />

                  <div className="about-eit-establishment-circle circle-three" />

                  <div className="about-eit-establishment-core">

                    <span>
                      {
                        aboutData
                          .establishmentVisual
                          .institute
                      }
                    </span>

                    <strong>
                      {
                        aboutData
                          .establishmentVisual
                          .year
                      }
                    </strong>

                    <small>
                      {
                        aboutData
                          .establishmentVisual
                          .label
                      }
                    </small>

                  </div>

                  <div className="about-eit-establishment-bottom">

                    {
                      aboutData
                        .establishmentVisual
                        .locations
                        .map(
                          (location) => (
                            <span
                              key={location}
                            >
                              {location}
                            </span>
                          )
                        )
                    }

                  </div>

                </div>

              </div>

              {/* KEY HIGHLIGHTS */}

              <div className="about-eit-highlights">

                <div className="about-eit-subheading">

                  <span>
                    01.01
                  </span>

                  <h3>
                    Key Highlights
                  </h3>

                </div>

                <div className="about-eit-highlight-grid">

                  {highlights.map(
                    (item) => (

                      <article
                        className="about-eit-highlight-card"
                        key={item.number}
                      >

                        <span className="highlight-number">
                          {item.number}
                        </span>

                        <div>

                          <h4>
                            {item.title}
                          </h4>

                          <p>
                            {item.text}
                          </p>

                        </div>

                        <ArrowUpRight
                          className="highlight-icon"
                          size={21}
                        />

                      </article>

                    )
                  )}

                </div>

              </div>

              {/* QUALITY POLICY */}

              <div className="about-eit-quality">

                <div className="about-eit-quality-title">

                  <span>
                    {
                      qualityPolicyData
                        .sectionNumber
                    }
                  </span>

                  <div>

                    <small>
                      {
                        qualityPolicyData
                          .eyebrow
                      }
                    </small>

                    <h3>
                      {
                        qualityPolicyData
                          .title
                      }
                    </h3>

                  </div>

                </div>

                <div className="about-eit-quality-content">

                  <p className="quality-lead">
                    {
                      qualityPolicyData
                        .lead
                    }
                  </p>

                  <div className="quality-list">

                    {
                      qualityPolicyData
                        .points
                        .map(
                          (point, index) => (

                            <div
                              className="quality-list-item"
                              key={index}
                            >

                              <span>
                                0
                                {index + 1}
                              </span>

                              <p>
                                {point}
                              </p>

                            </div>

                          )
                        )
                    }

                  </div>

                  <p className="quality-ending">
                    {
                      qualityPolicyData
                        .ending
                    }
                  </p>

                </div>

              </div>

            </section>

            {/* ===============================================
                VISION + MISSION
            =============================================== */}

            <section
              id="vision-mission"
              className="about-eit-section about-eit-vision-section"
            >

              <div className="about-eit-section-label">

                <span>
                  {
                    visionMissionData
                      .sectionNumber
                  }
                </span>

                {
                  visionMissionData
                    .sectionLabel
                }

              </div>

              <div className="about-eit-vision-card">

                <div className="vision-card-label">

                  {
                    visionMissionData
                      .vision
                      .eyebrow
                  }

                </div>

                <div className="vision-card-body">

                  <div className="vision-quote">
                    "
                  </div>

                  <blockquote>
                    {
                      visionMissionData
                        .vision
                        .quote
                    }
                  </blockquote>

                </div>

                <div className="vision-card-footer">

                  <span>
                    {
                      visionMissionData
                        .vision
                        .footerLeft
                    }
                  </span>

                  <span>
                    {
                      visionMissionData
                        .vision
                        .footerRight
                    }
                  </span>

                </div>

              </div>

              <div className="about-eit-mission-heading">

                <div>

                  <span>
                    {
                      visionMissionData
                        .mission
                        .sectionNumber
                    }
                  </span>

                  <h3>
                    {
                      visionMissionData
                        .mission
                        .title
                    }
                  </h3>

                </div>

                <p>
                  {
                    visionMissionData
                      .mission
                      .description
                  }
                </p>

              </div>

              <div className="about-eit-mission-grid">

                {
                  visionMissionData
                    .mission
                    .items
                    .map(
                      (mission) => (

                        <article
                          className="about-eit-mission-card"
                          key={mission.id}
                        >

                          <div className="mission-card-top">
                            {mission.id}
                          </div>

                          <div className="mission-card-line" />

                          <p>
                            {mission.text}
                          </p>

                          <div className="mission-card-footer">

                            <span>
                              ECHELON
                            </span>

                            <ArrowUpRight
                              size={18}
                            />

                          </div>

                        </article>

                      )
                    )
                }

              </div>

            </section>

            {/* ===============================================
                ORGANISATIONAL STRUCTURE
            =============================================== */}

            <section
              id="organisational-structure"
              className="about-eit-section about-eit-org-section"
            >

              <div className="about-eit-section-label">

                <span>
                  {
                    organisationalStructureData
                      .sectionNumber
                  }
                </span>

                {
                  organisationalStructureData
                    .sectionLabel
                }

              </div>

              <div className="about-eit-org-heading">

                <h2>

                  {
                    organisationalStructureData
                      .heading
                      .firstLine
                  }

                  <em>
                    {
                      organisationalStructureData
                        .heading
                        .emphasized
                    }
                  </em>

                </h2>

                <p>
                  {
                    organisationalStructureData
                      .description
                  }
                </p>

              </div>

              <div className="about-eit-org-chart">

                <div className="org-primary">

                  {
                    organisationalStructureData
                      .primary
                      .map(
                        (item, index) => (

                          <React.Fragment
                            key={item}
                          >

                            <div
                              className={`org-box ${
                                index === 0
                                  ? "management"
                                  : index === 1
                                  ? "governors"
                                  : "director"
                              }`}
                            >
                              {item}
                            </div>

                            {
                              index <
                                organisationalStructureData
                                  .primary
                                  .length -
                                  1 && (
                                <div className="org-line" />
                              )
                            }

                          </React.Fragment>

                        )
                      )
                  }

                </div>

                <div className="org-branches">

                  {
                    organisationalStructureData
                      .branches
                      .map(
                        (branch) => (

                          <div
                            className="org-branch"
                            key={branch.title}
                          >

                            <strong>
                              {branch.title}
                            </strong>

                            {
                              branch.items.map(
                                (item) => (
                                  <span
                                    key={item}
                                  >
                                    {item}
                                  </span>
                                )
                              )
                            }

                          </div>

                        )
                      )
                  }

                </div>

                <div className="org-footer">

                  <span>
                    {
                      organisationalStructureData
                        .footer
                        .left
                    }
                  </span>

                  <span>
                    {
                      organisationalStructureData
                        .footer
                        .right
                    }
                  </span>

                </div>

              </div>

              {/* FINAL CTA */}

              <div className="about-eit-closing">

                <span>
                  {closingData.period}
                </span>

                <h3>

                  {
                    closingData
                      .heading
                      .firstLine
                  }

                  <br />

                  {
                    closingData
                      .heading
                      .secondLine
                  }

                  <em>
                    {
                      closingData
                        .heading
                        .emphasized
                    }
                  </em>

                </h3>

                <Link
                  to={closingData.button.href}
                  className="about-eit-closing-button"
                >

                  {closingData.button.label}

                  <ArrowUpRight
                    size={18}
                  />

                </Link>

              </div>

            </section>

          </main>

        </div>

      </div>
    </>
  );
}

export default AboutEchelon;