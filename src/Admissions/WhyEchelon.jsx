import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  Users,
  Trophy,
  Leaf,
  Sparkles,
  HeartHandshake,
  School,
  Globe2,
  BookOpen,
  Target,
  Landmark,
  Brain,
  Cpu,
  Network,
  BriefcaseBusiness,
  Lightbulb,
  Smartphone,
  Factory,
} from "lucide-react";

import AdmissionsSidebar from "./AdmissionsSidebar";
import whyEchelon from "../data/admissions/whyEchelon";

import "./WhyEchelon/WhyEchelon.css";

function Utensils({ size = 21, strokeWidth = 1.5 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 3v7" />
      <path d="M4 3v5a3 3 0 0 0 6 0V3" />
      <path d="M7 11v10" />
      <path d="M16 3v18" />
      <path d="M16 3c2.2 1.4 3.3 3.7 3.3 6.2 0 1.9-1.1 3.2-3.3 3.8" />
    </svg>
  );
}

const icons = {
  building: Building2,
  graduation: GraduationCap,
  users: Users,
  trophy: Trophy,
  leaf: Leaf,
  sparkles: Sparkles,
  heart: HeartHandshake,
  utensils: Utensils,
  school: School,
  globe: Globe2,
  book: BookOpen,
  target: Target,
  landmark: Landmark,
  brain: Brain,
  cpu: Cpu,
  network: Network,
  briefcase: BriefcaseBusiness,
  lightbulb: Lightbulb,
  smartphone: Smartphone,
  factory: Factory,
};

function WhyEchelon() {
  const [visibleCards, setVisibleCards] = useState({});
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(entry.target.dataset.index);

          setVisibleCards((previous) => ({
            ...previous,
            [index]: true,
          }));

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const {
    hero,
    intro,
    reasonsSection,
    reasons,
    cta,
  } = whyEchelon;

  return (
    <div className="why-echelon-page">

      <AdmissionsSidebar />

      {/* HERO */}

      <section className="why-echelon-hero">

        <video
          className="why-echelon-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src={hero.video}
            type="video/mp4"
          />
        </video>

        <div className="why-echelon-hero-content">

          <div className="eyebrow">
            {hero.eyebrow}
          </div>

          <h1>
            {hero.title}
          </h1>

          <p>
            {hero.description}
          </p>

        </div>

        <div className="why-echelon-hero-number">

          <span>
            {hero.number}
          </span>

          <small>
            {hero.numberLabel}
          </small>

        </div>

      </section>


      {/* INTRO */}

      <section className="why-echelon-intro">

        <div className="why-echelon-intro-inner">

          <div className="why-echelon-intro-label">

            <span>
              {intro.sectionNumber}
            </span>

            <span>
              {intro.sectionLabel}
            </span>

          </div>


          <div className="why-echelon-intro-copy">

            <h2>

              {intro.title}

              <br />

              <em>
                {intro.titleAccent}
              </em>

            </h2>


            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            ))}

          </div>

        </div>

      </section>


      {/* REASONS */}

      <section className="why-echelon-reasons">

        <div className="why-echelon-section-header">

          <div>

            <span className="why-echelon-section-kicker">
              {reasonsSection.kicker}
            </span>

            <h2>

              {reasonsSection.title}

              <br />

              <em>
                {reasonsSection.titleAccent}
              </em>

            </h2>

          </div>

          <p>
            {reasonsSection.description}
          </p>

        </div>


        <div className="why-echelon-grid">

          {reasons.map((reason, index) => {

            const Icon = icons[reason.icon];

            return (
              <article
                key={reason.number}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                data-index={index}
                className={`why-echelon-card ${
                  visibleCards[index]
                    ? "why-echelon-card-visible"
                    : ""
                }`}
              >

                <div className="why-echelon-card-top">

                  <span className="why-echelon-card-number">
                    {reason.number}
                  </span>

                  <div className="why-echelon-card-icon">

                    <Icon
                      size={21}
                      strokeWidth={1.5}
                    />

                  </div>

                </div>


                <h3>
                  {reason.title}
                </h3>

                <p>
                  {reason.text}
                </p>

                <div className="why-echelon-card-line" />

              </article>
            );
          })}

        </div>

      </section>


      {/* CTA */}

      <section className="why-echelon-cta">

        <div className="why-echelon-cta-inner">

          <div>

            <span>
              {cta.eyebrow}
            </span>

            <h2>

              {cta.title}

              <br />

              <em>
                {cta.titleAccent}
              </em>

            </h2>

          </div>


          <a
            href={cta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="why-echelon-cta-button"
          >

            <span>
              {cta.button}
            </span>

            <ArrowUpRight size={19} />

          </a>

        </div>

      </section>

    </div>
  );
}

export default WhyEchelon;