import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

import "./IntroLoader.css";

function IntroLoader({ onEnter }) {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 1;

      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setComplete(true);
        }, 500);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    if (!complete || exiting) return;

    setExiting(true);

    setTimeout(() => {
      onEnter();
    }, 900);
  };

  return (
    <div
      className={`intro-loader ${
        complete ? "is-complete" : ""
      } ${exiting ? "is-exiting" : ""}`}
    >

      {/* =========================
          DECORATIVE CORNERS
      ========================= */}

      <div className="intro-arc intro-arc-top-left intro-arc-green" />
      <div className="intro-arc intro-arc-top-left intro-arc-blue" />

      <div className="intro-arc intro-arc-bottom-right intro-arc-blue" />
      <div className="intro-arc intro-arc-bottom-right intro-arc-green" />

      {/* =========================
          SIDE LINES
      ========================= */}

      <div className="intro-side-line intro-side-line-left">
        <span className="intro-dot intro-dot-green" />
        <span className="intro-dot intro-dot-blue" />
      </div>

      <div className="intro-side-line intro-side-line-right">
        <span className="intro-dot intro-dot-green" />
        <span className="intro-dot intro-dot-blue" />
      </div>

      {/* =========================
          MAIN CONTENT
      ========================= */}

      <main className="intro-content">

        {/* LOGO */}

        <div className="intro-brand">

          <img
            src="/images/echelon-logo.png"
            alt="Echelon Institute of Technology"
            className="intro-logo"
          />

          <div className="intro-tagline">
            TRANSFORMING THE ENGINEERING EDUCATION
          </div>

          <div className="intro-institute">
            <span />
            ECHELON INSTITUTE OF TECHNOLOGY
            <span />
          </div>

        </div>

        {/* HERO */}

        <section className="intro-hero">

          <h1>
            THE FUTURE EDUCATION
          </h1>

          <p>
            LEARNING <span>/</span> INNOVATION <span>/</span> IMPACT
          </p>

        </section>

        {/* PROGRESS */}

        <div
          className={`intro-progress ${
            complete ? "progress-hidden" : ""
          }`}
        >
          <div className="intro-progress-track">
            <div
              className="intro-progress-fill"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <span className="intro-progress-number">
            {progress}%
          </span>
        </div>

        {/* ENTER */}

        <button
          type="button"
          className={`intro-enter ${
            complete ? "enter-visible" : ""
          }`}
          onClick={handleEnter}
          disabled={!complete || exiting}
        >
          <span className="intro-enter-line" />

          <span className="intro-enter-text">
            ENTER
          </span>

          <span className="intro-enter-line" />
        </button>

        {/* FOOTER */}

        <div className="intro-footer">

          <div className="intro-fields">
            <span>ENGINEERING</span>
            <b>•</b>
            <span>TECHNOLOGY</span>
            <b>•</b>
            <span>MANAGEMENT</span>
          </div>

          <span className="intro-location">
            DELHI NCR
          </span>

        </div>

        {/* SCROLL INDICATOR */}

        <div className="intro-scroll">
          <ArrowDown size={13} strokeWidth={1.3} />
        </div>

      </main>
    </div>
  );
}

export default IntroLoader;