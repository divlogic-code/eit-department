
import { ArrowUpRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

import AboutSidebar from "./AboutSidebar";

import "./Chairman/Chairman.css";

import {
  chairmanHero,
  chairmanIntro,
  chairmanMessage,
  chairmanPrinciples,
  chairmanClosing,
} from "../data/about/chairmanMessage";

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
      {/* HERO */}
      <section className="chairman-hero">
        <div className="chairman-hero-grid" />
        <div className="chairman-hero-glow" />

        <div className="chairman-hero-content">
          <span className="chairman-eyebrow">
            {chairmanHero.eyebrow}
          </span>

          <h1>
            {chairmanHero.title}
            <span>{chairmanHero.titleAccent}</span>
          </h1>

          <p>{chairmanHero.description}</p>

          <div className="chairman-hero-meta">
            <span>{chairmanHero.metaPrimary}</span>
            <i />
            <span>{chairmanHero.metaSecondary}</span>
          </div>
        </div>

        <div className="chairman-hero-index">
          {chairmanHero.index}
        </div>

        <div className="chairman-scroll">
          <span>{chairmanHero.scrollText}</span>
          <div />
        </div>
      </section>

      {/* MAIN AREA + SHARED ABOUT SIDEBAR */}
      <div className="chairman-layout">
        <AboutSidebar />

        <main className="chairman-main">
          {/* INTRO */}
          <section className="chairman-intro">
            <div className="chairman-section-label">
              <span>{chairmanIntro.sectionNumber}</span>
              {chairmanIntro.sectionLabel}
            </div>

            <div className="chairman-intro-grid">
              <div className="chairman-profile">
                <div className="chairman-profile-frame">
                  <div className="chairman-profile-number">
                    {chairmanIntro.profile.number}
                  </div>

                  <div className="chairman-profile-initial">
                    {chairmanIntro.profile.initials}
                  </div>

                  <div className="chairman-profile-bottom">
                    <span>{chairmanIntro.profile.role}</span>
                    <span>{chairmanIntro.profile.tenure}</span>
                  </div>
                </div>
              </div>

              <div className="chairman-intro-copy">
                <span className="chairman-kicker">
                  {chairmanIntro.kicker}
                </span>

                <h2>
                  {chairmanIntro.heading}
                  <em>{chairmanIntro.headingAccent}</em>
                </h2>

                <p className="chairman-lead">
                  {chairmanIntro.lead}
                </p>

                <div className="chairman-signature-block">
                  <strong>{chairmanIntro.name}</strong>

                  <span>{chairmanIntro.designation}</span>
                </div>
              </div>
            </div>
          </section>

          {/* MESSAGE */}
          <section className="chairman-message-section">
            <div className="chairman-message-header">
              <div className="chairman-section-label">
                <span>{chairmanMessage.sectionNumber}</span>
                {chairmanMessage.sectionLabel}
              </div>

              <div className="chairman-message-index">
                {chairmanMessage.index}
              </div>
            </div>

            <div className="chairman-message-layout">
              <aside className="chairman-message-aside">
                <Quote size={30} />

                <span>
                  {chairmanMessage.themes.map((theme) => (
                    <React.Fragment key={theme}>
                      {theme}
                      <br />
                    </React.Fragment>
                  ))}
                </span>
              </aside>

              <article className="chairman-message-content">
                {/* FIRST THREE PARAGRAPHS */}
                {chairmanMessage.paragraphsBeforeHighlight.map(
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

                {/* HIGHLIGHT */}
                <div className="chairman-highlight">
                  <span>
                    {chairmanMessage.highlight.number}
                  </span>

                  <p>
                    {chairmanMessage.highlight.text}
                  </p>
                </div>

                {/* REMAINING THREE PARAGRAPHS */}
                {chairmanMessage.paragraphsAfterHighlight.map(
                  (paragraph, index) => (
                    <p key={`after-${index}`}>
                      {paragraph.text}
                    </p>
                  )
                )}

                {/* FINAL STATEMENT */}
                <div className="chairman-final-statement">
                  <div className="final-statement-number">
                    {chairmanMessage.finalStatement.number}
                  </div>

                  <p>
                    {chairmanMessage.finalStatement.text}
                  </p>
                </div>
              </article>
            </div>
          </section>

          {/* LEADERSHIP PRINCIPLES */}
          <section className="chairman-principles">
            <div className="chairman-section-label">
              <span>{chairmanPrinciples.sectionNumber}</span>
              {chairmanPrinciples.sectionLabel}
            </div>

            <div className="chairman-principles-heading">
              <h2>
                {chairmanPrinciples.heading}
                <em>{chairmanPrinciples.headingAccent}</em>
              </h2>

              <p>{chairmanPrinciples.description}</p>
            </div>

            <div className="chairman-principles-grid">
              {chairmanPrinciples.items.map((principle) => (
                <article
                  className="chairman-principle-card"
                  key={principle.number}
                >
                  <span>{principle.number}</span>

                  <h3>{principle.title}</h3>

                  <p>{principle.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* CLOSING */}
          <section className="chairman-closing">
            <div className="chairman-closing-line" />

            <span>{chairmanClosing.eyebrow}</span>

            <h2>
              {chairmanClosing.heading}
              <br />
              {chairmanClosing.headingLineTwo}
              <br />
              <em>{chairmanClosing.headingAccent}</em>
            </h2>

            <p>{chairmanClosing.description}</p>

            <Link
              to={chairmanClosing.buttonLink}
              className="chairman-closing-button"
            >
              {chairmanClosing.buttonText}
              <ArrowUpRight size={18} />
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Chairman;
