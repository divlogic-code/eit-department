import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  Landmark,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";

import AboutSidebar from "./AboutSidebar";

import "./AboutEchelon/AboutEchelon.css";
import "./BoardOfGovernors/BoardOfGovernors.css";

import {
  boardHero,
  boardIntro,
  governanceStats,
  governors,
  boardMembersSection,
  governancePerspective,
  boardClosing,
} from "../data/about/boardOfGovernors";

function getStatIcon(icon) {
  const icons = {
    users: Users,
    graduation: GraduationCap,
    building: Building2,
    landmark: Landmark,
  };

  return icons[icon] || Users;
}

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
      {/* HERO */}
      <section className="board-hero">
        <div className="board-hero-grid" />
        <div className="board-hero-glow" />

        <div className="board-hero-content">
          <span className="board-eyebrow">
            {boardHero.eyebrow}
          </span>

          <h1>
            {boardHero.title}
            <span>{boardHero.titleAccent}</span>
          </h1>

          <p>{boardHero.description}</p>

          <div className="board-hero-meta">
            <i />
            <span>{boardHero.meta}</span>
          </div>
        </div>

        <div className="board-hero-index">
          {boardHero.index}
        </div>

        <div className="board-scroll">
          <span>{boardHero.scrollText}</span>
          <div />
        </div>
      </section>

      {/* CONTENT */}
      <div className="board-layout">
        <AboutSidebar />

        <main className="board-main">
          {/* INTRODUCTION */}
          <section className="board-intro">
            <div className="board-section-label">
              <span>{boardIntro.sectionNumber}</span>
              {boardIntro.sectionLabel}
            </div>

            <div className="board-intro-heading">
              <div>
                <span className="board-kicker">
                  {boardIntro.kicker}
                </span>

                <h2>
                  {boardIntro.heading}
                  <em>{boardIntro.headingAccent}</em>
                </h2>
              </div>

              <p>{boardIntro.description}</p>
            </div>

            {/* STATS */}
            <div className="board-stats">
              {governanceStats.map((stat) => {
                const Icon = getStatIcon(stat.icon);

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

          {/* MEMBERS */}
          <section className="board-members">
            <div className="board-members-header">
              <div className="board-section-label">
                <span>{boardMembersSection.sectionNumber}</span>
                {boardMembersSection.sectionLabel}
              </div>

              <div className="board-members-count">
                {boardMembersSection.count}
              </div>
            </div>

            <div className="board-members-intro">
              <h2>
                {boardMembersSection.heading}
                <em>{boardMembersSection.headingAccent}</em>
              </h2>

              <p>{boardMembersSection.description}</p>
            </div>

            <div
              className="board-members-grid"
              ref={membersRef}
            >
              {governors.map((member) => (
                <article
                  className={`board-member-card ${
                    member.number === "01"
                      ? "board-member-featured"
                      : ""
                  }`}
                  key={member.number}
                  style={{
                    "--card-delay": `${
                      (Number(member.number) - 1) * 70
                    }ms`,
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
                    <h3>{member.name}</h3>

                    <p>{member.position}</p>
                  </div>

                  <div className="board-member-footer">
                    <span>{member.role}</span>

                    <ArrowUpRight size={17} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* GOVERNANCE PERSPECTIVE */}
          <section className="board-perspective">
            <div className="board-perspective-number">
              {governancePerspective.sectionNumber}
            </div>

            <div className="board-perspective-content">
              <span>{governancePerspective.eyebrow}</span>

              <h2>
                {governancePerspective.heading}
                <br />
                {governancePerspective.headingLineTwo}{" "}
                <em>{governancePerspective.headingAccent}</em>
              </h2>

              <p>{governancePerspective.description}</p>
            </div>
          </section>

          {/* CLOSING */}
          <section className="board-closing">
            <div className="board-closing-line" />

            <span>{boardClosing.eyebrow}</span>

            <h2>
              {boardClosing.heading}
              <br />
              <em>{boardClosing.headingAccent}</em>
            </h2>

            <p>{boardClosing.description}</p>

            <Link
              to={boardClosing.buttonLink}
              className="board-closing-button"
            >
              {boardClosing.buttonText}
              <ArrowUpRight size={16} />
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}

export default BoardOfGovernors;
