import React, { useState } from "react";
import "./Home.css";

import {
  heroData,
  loanBannerData,
  centreData,
  aboutData,
  visionMissionData,
  programmeCategories,
  programmes,
  placementData,
  placementProfiles,
  recruitersData,
  affiliationsData,
  achieversData,
  sportsData,
  alumniData,
  innovationData,
  communitiesData,
  eventsData,
  podcastsData,
  shootingData,
  testimonialsData,
  celebritiesData,
  ctaData,
  homeFooterData,
  floatingActionsData,
} from "./data/home/homeContent";

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="home-section-heading">
      {eyebrow && <span className="home-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Home() {
  const [programmeFilter, setProgrammeFilter] = useState(
    programmeCategories[0]
  );

  const filteredProgrammes = programmes.filter(
    (programme) => programme.category === programmeFilter
  );

  return (
    <main className="home-page">

      {/* FIXED BACKGROUND VIDEO */}
      <div className="home-background-video" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={(e) => {
            e.currentTarget.play().catch(() => {});
          }}
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>

        <div className="home-background-overlay" />
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="home-hero">
        <img
          className="home-hero-image"
          src={heroData.image}
          alt={heroData.imageAlt}
        />

        <div className="home-hero-overlay" />

        <div className="home-hero-content">
          <span className="home-eyebrow">
            {heroData.affiliation}
          </span>

          <h1>
            {heroData.title}
            <br />
            <strong>{heroData.highlightedTitle}</strong>
          </h1>

          <p>{heroData.tagline}</p>

          <div className="home-hero-buttons">
            {heroData.buttons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                className={
                  button.variant === "primary"
                    ? "home-btn home-btn-primary"
                    : "home-btn home-btn-secondary"
                }
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>

        <div className="home-hero-stats">
          {heroData.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          LOAN BANNER
      ===================================================== */}

      <section className="home-loan-banner">
        <div>
          <span className="home-eyebrow">
            {loanBannerData.eyebrow}
          </span>
          <h3>{loanBannerData.title}</h3>
        </div>

        <a
          href={loanBannerData.button.href}
          className="home-btn home-btn-primary"
        >
          {loanBannerData.button.label}
        </a>
      </section>

      {/* =====================================================
          INDUSTRY CENTRE
      ===================================================== */}

      <section className="home-section home-centres">
        <SectionHeading
          eyebrow={centreData.eyebrow}
          title={centreData.title}
          text={centreData.text}
        />

        <div className="home-marquee home-centre-marquee">
          <div className="home-marquee-track">
            {[...centreData.companies, ...centreData.companies].map(
              (company, index) => (
                <div
                  className="home-company-pill"
                  key={`${company}-${index}`}
                >
                  {company}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="home-section home-about">
        <div className="home-container home-two-column">
          <div className="home-about-text">
            <SectionHeading
              eyebrow={aboutData.eyebrow}
              title={aboutData.title}
            />

            <div className="home-copy">
              {aboutData.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <a
              href={aboutData.button.href}
              className="home-btn home-btn-outline"
            >
              {aboutData.button.label}
            </a>
          </div>

          <div className="home-about-visual">
            <div className="home-year-card">
              <span>{aboutData.visual.eyebrow}</span>
              <strong>{aboutData.visual.year}</strong>
              <small>{aboutData.visual.caption}</small>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISION & MISSION
      ===================================================== */}

      <section className="home-section home-vision">
        <SectionHeading
          eyebrow={visionMissionData.eyebrow}
          title={visionMissionData.title}
          text={visionMissionData.text}
        />

        <div className="home-container home-vision-grid">
          <article className="home-card home-vision-card">
            <span className="home-card-number">
              {visionMissionData.vision.number}
            </span>

            <h3>{visionMissionData.vision.title}</h3>

            <p>{visionMissionData.vision.text}</p>
          </article>

          <article className="home-card home-mission-card">
            <span className="home-card-number">
              {visionMissionData.mission.number}
            </span>

            <h3>{visionMissionData.mission.title}</h3>

            <div className="home-mission-list">
              {visionMissionData.mission.items.map((mission) => (
                <div
                  className="home-mission-item"
                  key={mission.id}
                >
                  <strong>{mission.id}</strong>
                  <p>{mission.text}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          PROGRAMMES
      ===================================================== */}

      <section className="home-section home-programmes">
        <SectionHeading
          eyebrow="ACADEMICS"
          title="Programmes Designed for the Future"
          text="Choose a pathway that matches your ambition."
        />

        <div className="home-programme-filters">
          {programmeCategories.map((category) => (
            <button
              key={category}
              className={
                programmeFilter === category ? "active" : ""
              }
              onClick={() => setProgrammeFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="home-container home-programme-grid">
          {filteredProgrammes.map((programme, index) => (
            <a
              href={programme.link || "#"}
              className="home-programme-card"
              key={`${programme.title}-${index}`}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>

              <h3>{programme.title}</h3>

              <div className="home-programme-arrow">→</div>
            </a>
          ))}
        </div>
      </section>

      {/* =====================================================
          PLACEMENTS
      ===================================================== */}

      <section className="home-section home-placements">
        <SectionHeading
          eyebrow={placementData.eyebrow}
          title={placementData.title}
          text={placementData.text}
        />

        <div className="home-placement-stats">
          {placementData.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="home-marquee">
          <div className="home-marquee-track">
            {[...placementProfiles, ...placementProfiles].map(
              (profile, index) => (
                <article
                  className="home-placement-card"
                  key={`${profile.name}-${index}`}
                >
                  <div className="home-placement-image">
                    {profile.image ? (
                      <img
                        src={profile.image}
                        alt={profile.name}
                      />
                    ) : (
                      <span>
                        {profile.name
                          .split(" ")
                          .map((word) => word[0])
                          .slice(0, 2)
                          .join("")}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3>{profile.name}</h3>
                    <p>{profile.designation}</p>
                    <strong>{profile.package}</strong>
                  </div>
                </article>
              )
            )}
          </div>
        </div>

        <a
          href="/placement"
          className="home-btn home-btn-outline"
        >
          Explore Placements
        </a>
      </section>

      {/* =====================================================
          RECRUITERS
      ===================================================== */}

      <section className="home-section home-recruiters">
        <SectionHeading
          eyebrow={recruitersData.eyebrow}
          title={recruitersData.title}
          text={recruitersData.text}
        />

        <div className="home-marquee">
          <div className="home-marquee-track">
            {[
              ...recruitersData.recruiters,
              ...recruitersData.recruiters,
            ].map((company, index) => (
              <div
                className="home-recruiter"
                key={`${company}-${index}`}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          AFFILIATIONS
      ===================================================== */}

      <section className="home-section home-affiliations">
        <SectionHeading
          eyebrow={affiliationsData.eyebrow}
          title={affiliationsData.title}
          text={affiliationsData.text}
        />

        <div className="home-image-marquee">
          <div className="home-image-track">
            {[
              ...affiliationsData.items,
              ...affiliationsData.items,
            ].map((item, index) => (
              <article
                className="home-image-card home-affiliation-card"
                key={`${item.title}-${index}`}
              >
                {item.image ? (
                  <img src={item.image} alt={item.title} />
                ) : (
                  <div className="home-symbol">✓</div>
                )}

                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ACHIEVERS
      ===================================================== */}

      <section className="home-section home-achievers">
        <SectionHeading
          eyebrow={achieversData.eyebrow}
          title={achieversData.title}
          text={achieversData.text}
        />

        <div className="home-image-marquee">
          <div className="home-image-track">
            {[
              ...achieversData.achievers,
              ...achieversData.achievers,
            ].map((achiever, index) => (
              <article
                className="home-image-card home-achiever-card"
                key={`${achiever.name}-${index}`}
              >
                <div className="home-achievement-image">
                  {achiever.image ? (
                    <img
                      src={achiever.image}
                      alt={achiever.name}
                    />
                  ) : (
                    <span>{achiever.name.charAt(0)}</span>
                  )}
                </div>

                <div className="home-image-card-body">
                  <h3>{achiever.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SPORTS
      ===================================================== */}

      <section className="home-section home-sports">
        <SectionHeading
          eyebrow={sportsData.eyebrow}
          title={sportsData.title}
          text={sportsData.text}
        />

        <div className="home-image-marquee">
          <div className="home-image-track">
            {[...sportsData.sports, ...sportsData.sports].map(
              (sport, index) => (
                <article
                  className="home-image-card"
                  key={`${sport.title}-${index}`}
                >
                  <img src={sport.image} alt={sport.title} />

                  <div className="home-image-card-body">
                    <h3>{sport.title}</h3>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          ALUMNI
      ===================================================== */}

      <section className="home-section home-alumni">
        <SectionHeading
          eyebrow={alumniData.eyebrow}
          title={alumniData.title}
          text={alumniData.text}
        />

        <div className="home-image-marquee">
          <div className="home-image-track">
            {[...alumniData.alumni, ...alumniData.alumni].map(
              (person, index) => (
                <article
                  className="home-image-card"
                  key={`${person.name}-${index}`}
                >
                  <div className="home-person-image">
                    {person.image ? (
                      <img
                        src={person.image}
                        alt={person.name}
                      />
                    ) : (
                      <span>{person.name.charAt(0)}</span>
                    )}
                  </div>

                  <div className="home-image-card-body">
                    <h3>{person.name}</h3>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          INNOVATION
      ===================================================== */}

      <section className="home-section home-innovation">
        <SectionHeading
          eyebrow={innovationData.eyebrow}
          title={innovationData.title}
          text={innovationData.text}
        />

        <div className="home-container home-innovation-grid">
          <article className="home-innovation-feature">
            <img
              src={innovationData.featuredProject.image}
              alt={innovationData.featuredProject.imageAlt}
            />

            <div>
              <span>
                {innovationData.featuredProject.eyebrow}
              </span>

              <h3>
                {innovationData.featuredProject.title}
              </h3>

              <p>
                {innovationData.featuredProject.description}
              </p>
            </div>
          </article>

          {innovationData.cards.map((card) => (
            <article
              className="home-innovation-card"
              key={card.number}
            >
              <span>{card.number}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          COMMUNITIES
      ===================================================== */}

      <section className="home-section home-communities">
        <SectionHeading
          eyebrow={communitiesData.eyebrow}
          title={communitiesData.title}
          text={communitiesData.text}
        />

        <div className="home-image-marquee">
          <div className="home-image-track">
            {[
              ...communitiesData.communities,
              ...communitiesData.communities,
            ].map((community, index) => (
              <article
                className="home-image-card"
                key={`${community.title}-${index}`}
              >
                <img
                  src={community.image}
                  alt={community.title}
                />

                <div className="home-image-card-body">
                  <span>COMMUNITY</span>
                  <h3>{community.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EVENTS
      ===================================================== */}

      <section className="home-section home-events">
        <SectionHeading
          eyebrow={eventsData.eyebrow}
          title={eventsData.title}
          text={eventsData.text}
        />

        <div className="home-image-marquee">
          <div className="home-image-track">
            {[...eventsData.events, ...eventsData.events].map(
              (event, index) => (
                <article
                  className="home-image-card home-event-card"
                  key={`${event.title}-${index}`}
                >
                  <div className="home-event-image">
                    <img
                      src={event.image}
                      alt={event.title}
                    />
                  </div>

                  <div className="home-image-card-body">
                    <span>ECHELON EVENT</span>
                    <h3>{event.title}</h3>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          PODCASTS
      ===================================================== */}

      <section className="home-section home-podcasts">
        <SectionHeading
          eyebrow={podcastsData.eyebrow}
          title={podcastsData.title}
          text={podcastsData.text}
        />

        <div className="home-container home-podcast-grid">
          {podcastsData.podcasts.map((podcast) => (
            <article
              className="home-podcast-card"
              key={podcast.number}
            >
              <span>{podcast.number}</span>
              <h3>{podcast.title}</h3>
              <p>{podcast.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          SHOOTING @ ECHELON
      ===================================================== */}

      <section className="home-section home-shooting">
        <SectionHeading
          eyebrow={shootingData.eyebrow}
          title={shootingData.title}
          text={shootingData.text}
        />

        <div className="home-image-marquee">
          <div className="home-image-track">
            {[...shootingData.shoots, ...shootingData.shoots].map(
              (shoot, index) => (
                <article
                  className="home-shooting-card"
                  key={`${shoot.title}-${index}`}
                >
                  {shoot.type === "feature" && (
                    <>
                      <img src={shoot.image} alt={shoot.title} />
                      <div className="home-shooting-overlay" />

                      <div className="home-shooting-content">
                        <span>{shoot.platform}</span>
                        <h3>{shoot.title}</h3>
                        <p>{shoot.description}</p>
                      </div>
                    </>
                  )}

                  {shoot.type === "logo" && (
                    <div className="home-shooting-inner">
                      <div className="home-shooting-logo">
                        <img
                          src={shoot.image}
                          alt={shoot.title}
                        />
                      </div>

                      <h3>{shoot.title}</h3>
                      <p>{shoot.description}</p>
                    </div>
                  )}

                  {shoot.type === "text" && (
                    <div className="home-shooting-inner">
                      <span>{shoot.platform}</span>
                      <h3>{shoot.title}</h3>
                      <p>{shoot.description}</p>
                    </div>
                  )}
                </article>
              )
            )}
          </div>
        </div>

        <div className="home-shooting-footer">
          <span>{shootingData.footer.eyebrow}</span>
          <strong>{shootingData.footer.text}</strong>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section className="home-section home-testimonials">
        <SectionHeading
          eyebrow={testimonialsData.eyebrow}
          title={testimonialsData.title}
          text={testimonialsData.text}
        />

        <div className="home-marquee">
          <div className="home-marquee-track">
            {[
              ...testimonialsData.testimonials,
              ...testimonialsData.testimonials,
            ].map((testimonial, index) => (
              <article
                className="home-testimonial-card"
                key={`${testimonial.name}-${index}`}
              >
                <div className="home-testimonial-mark">“</div>

                <p>{testimonial.text}</p>

                <strong>{testimonial.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CELEBRITIES
      ===================================================== */}

      <section className="home-section home-celebrities">
        <SectionHeading
          eyebrow={celebritiesData.eyebrow}
          title={celebritiesData.title}
          text={celebritiesData.text}
        />

        <div className="home-image-marquee">
          <div className="home-image-track">
            {[
              ...celebritiesData.celebrities,
              ...celebritiesData.celebrities,
            ].map((celebrity, index) => (
              <article
                className="home-image-card home-celebrity-card"
                key={`${celebrity.name}-${index}`}
              >
                <div className="home-person-image">
                  {celebrity.image ? (
                    <img
                      src={celebrity.image}
                      alt={celebrity.name}
                    />
                  ) : (
                    <span>{celebrity.name.charAt(0)}</span>
                  )}
                </div>

                <h3>{celebrity.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="home-cta">
        <div className="home-cta-content">
          <span className="home-eyebrow">{ctaData.eyebrow}</span>

          <h2>
            {ctaData.title}
            <br />
            {ctaData.highlightedTitle}
          </h2>

          <p>{ctaData.tagline}</p>

          <div className="home-cta-buttons">
            {ctaData.buttons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                className={
                  button.variant === "primary"
                    ? "home-btn home-btn-primary"
                    : "home-btn home-btn-secondary"
                }
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="home-footer">
        <div className="home-container home-footer-grid">
          <div className="home-footer-brand">
            <h2>{homeFooterData.brand.title}</h2>

            <p>{homeFooterData.brand.institute}</p>
            <p>{homeFooterData.brand.location}</p>
            <p>{homeFooterData.brand.affiliation}</p>
          </div>

          {homeFooterData.columns.map((column) => (
            <div
              className="home-footer-column"
              key={column.title}
            >
              <h3>{column.title}</h3>

              {column.links.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="home-footer-bottom">
          <span>
            © {new Date().getFullYear()} Echelon Institute of Technology
          </span>

          <span>All Rights Reserved</span>
        </div>
      </footer>

      {/* =====================================================
          FLOATING ACTIONS
      ===================================================== */}

      <div className="home-floating-actions">
        {floatingActionsData.map((action) => (
          <a key={action.label} href={action.href}>
            {action.label}
          </a>
        ))}
      </div>

    </main>
  );
}

export default Home;