import { ArrowUpRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

import AboutSidebar from "./AboutSidebar";

import "./AboutEchelon/AboutEchelon.css";
import "./Director/Director.css";

import {
  directorHero,
  directorIntro,
  directorMessage,
  directorPrinciples,
  directorClosing,
} from "../data/about/director";

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
            {directorHero.eyebrow}
          </span>

          <h1>
            {directorHero.title}
            <span>{directorHero.titleAccent}</span>
          </h1>

          <p>{directorHero.description}</p>

          <div className="director-hero-meta">
            <span>{directorHero.metaPrimary}</span>
            <i />
            <span>{directorHero.metaSecondary}</span>
          </div>
        </div>

        <div className="director-hero-index">
          {directorHero.index}
        </div>

        <div className="director-scroll">
          <span>{directorHero.scrollText}</span>
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
              <span>{directorIntro.sectionNumber}</span>
              {directorIntro.sectionLabel}
            </div>

            <div className="director-intro-grid">

              <div className="director-profile">
                <div className="director-profile-frame">

                  <div className="director-profile-number">
                    {directorIntro.profile.number}
                  </div>

                  <div className="director-profile-initial">
                    {directorIntro.profile.initials}
                  </div>

                  <div className="director-profile-bottom">
                    <span>{directorIntro.profile.role}</span>
                    <span>{directorIntro.profile.location}</span>
                  </div>

                </div>
              </div>

              <div className="director-intro-copy">
                <span className="director-kicker">
                  {directorIntro.kicker}
                </span>

                <h2>
                  {directorIntro.heading}
                  <em>{directorIntro.headingAccent}</em>
                </h2>

                <p className="director-lead">
                  {directorIntro.lead}
                </p>

                <div className="director-signature-block">
                  <strong>{directorIntro.name}</strong>
                  <span>{directorIntro.designation}</span>
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
                <span>{directorMessage.sectionNumber}</span>
                {directorMessage.sectionLabel}
              </div>

              <div className="director-message-index">
                {directorMessage.index}
              </div>
            </div>

            <div className="director-message-layout">

              <aside className="director-message-aside">
                <Quote size={30} />

                <span>
                  {directorMessage.themes.map((theme) => (
                    <React.Fragment key={theme}>
                      {theme}
                      <br />
                    </React.Fragment>
                  ))}
                </span>
              </aside>

              <article className="director-message-content">

                {directorMessage.paragraphsBeforeHighlight.map(
                  (paragraph, index) => (
                    <p
                      key={`before-${index}`}
                      className={
                        paragraph.type === "opening"
                          ? "message-opening"
                          : undefined
                      }
                    >
                      {paragraph.text}
                    </p>
                  )
                )}

                <div className="director-highlight">
                  <span>{directorMessage.highlight.number}</span>

                  <p>{directorMessage.highlight.text}</p>
                </div>

                {directorMessage.paragraphsAfterHighlight.map(
                  (paragraph, index) => (
                    <p key={`after-${index}`}>
                      {paragraph.text}
                    </p>
                  )
                )}

                <div className="director-final-statement">

                  <div className="final-statement-number">
                    {directorMessage.finalStatement.number}
                  </div>

                  <p>
                    {directorMessage.finalStatement.text}
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
              <span>{directorPrinciples.sectionNumber}</span>
              {directorPrinciples.sectionLabel}
            </div>

            <div className="director-principles-heading">

              <h2>
                {directorPrinciples.heading}
                <em>{directorPrinciples.headingAccent}</em>
              </h2>

              <p>{directorPrinciples.description}</p>

            </div>

            <div className="director-principles-grid">

              {directorPrinciples.items.map((item) => (
                <article
                  className="director-principle-card"
                  key={item.number}
                >
                  <span>{item.number}</span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              ))}

            </div>

          </section>

          {/* ===================================================
              CLOSING
          =================================================== */}

          <section className="director-closing">

            <div className="director-closing-line" />

            <span>{directorClosing.eyebrow}</span>

            <h2>
              {directorClosing.heading}
              <br />
              {directorClosing.headingLineTwo}
              <br />
              <em>{directorClosing.headingAccent}</em>
            </h2>

            <p>{directorClosing.description}</p>

            <Link
              to={directorClosing.buttonLink}
              className="director-closing-button"
            >
              {directorClosing.buttonText}
              <ArrowUpRight size={18} />
            </Link>

          </section>

        </main>
      </div>
    </div>
  );
}

export default Director;