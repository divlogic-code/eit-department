import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import AcademicSidebar from "./AcademicSidebar";

import "./AcademicLayout/AcademicLayout.css";

function AcademicLayout({
  pageTitle,
  pageSubtitle,
  sidebarTitle = "ACADEMICS",
  activePage,
  children,
}) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(".academic-hero");

      if (hero) {
        const bottom = hero.getBoundingClientRect().bottom;

        setShowSidebar(bottom <= 80);
      }

      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const scrollToContent = () => {
    const content = document.getElementById(
      "academic-content"
    );

    if (!content) return;

    window.scrollTo({
      top:
        content.getBoundingClientRect().top +
        window.scrollY -
        80,
      behavior: "smooth",
    });
  };

  return (
    <div className="academic-page">
      {/* ================= HERO ================= */}

      <section className="academic-hero">
        <video
            className="academic-video"
            autoPlay
            muted
            loop
            playsInline
        >
            <source
                src="/videos/academics-hero.mp4"
                type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>

        <div className="academic-overlay" />

        <div className="academic-grid" />

        <div className="academic-glow glow-one" />
        <div className="academic-glow glow-two" />

        <div className="academic-hero-content">

          <span className="academic-eyebrow">
            ECHELON INSTITUTE OF TECHNOLOGY
          </span>

          <h1>
            {pageTitle}
          </h1>

          <p>
            {pageSubtitle}
          </p>

          <div className="academic-meta">

            <span>
              EST. 2007
            </span>

            <i />

            <span>
              FARIDABAD · DELHI NCR
            </span>

          </div>

        </div>

        <div className="academic-index">
          01
        </div>

        <button
          className="academic-scroll"
          onClick={scrollToContent}
        >
          <span>
            EXPLORE
          </span>

          <ChevronDown
            size={22}
          />
        </button>

      </section>

      {/* ================= BODY ================= */}

      <div
        id="academic-content"
        className="academic-layout"
      >

        <aside
          className={`academic-sidebar-wrapper ${
            showSidebar
              ? "sidebar-visible"
              : ""
          }`}
        >
          <AcademicSidebar
            title={sidebarTitle}
            active={activePage}
          />
        </aside>

        <main
          className={`academic-main ${
            scrolled
              ? "page-scrolled"
              : ""
          }`}
        >
          {children}
        </main>

      </div>

    </div>
  );
}

export default AcademicLayout;