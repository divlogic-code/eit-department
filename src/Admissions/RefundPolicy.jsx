import {
  AlertCircle,
  ArrowUpRight,
  Building2,
  CalendarClock,
  FileCheck2,
  FileText,
  Landmark,
  ShieldCheck,
} from "lucide-react";

import AdmissionsSidebar from "./AdmissionsSidebar";
import refundPolicy from "../data/admissions/refundPolicy";

import "./RefundPolicy/RefundPolicy.css";

const icons = {
  fileCheck: FileCheck2,
  landmark: Landmark,
  shield: ShieldCheck,
  file: FileText,
  calendar: CalendarClock,
  building: Building2,
};

function RefundPolicy() {
  const {
    hero,
    intro,
    policies,
    policySection,
    notice,
    regulatory,
  } = refundPolicy;

  const HeroShieldIcon = ShieldCheck;
  const HeroFileIcon = FileText;

  return (
    <div className="refund-policy-page">

      <AdmissionsSidebar />

      {/* HERO */}

      <section className="refund-policy-hero">

        <video
          className="refund-policy-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src={hero.video}
            type="video/mp4"
          />
        </video>

        <div className="refund-policy-hero-overlay" />

        <div className="refund-policy-hero-content">

          <div className="refund-policy-eyebrow">

            <span>
              {hero.eyebrow[0]}
            </span>

            <span className="refund-policy-eyebrow-line" />

            <span>
              {hero.eyebrow[1]}
            </span>

          </div>


          <h1>
            {hero.title}
            <span>{hero.titleAccent}</span>
          </h1>


          <p>
            {hero.description}
          </p>


          <div className="refund-policy-hero-meta">

            <span>
              <HeroShieldIcon size={17} />
              {hero.meta[0].text}
            </span>

            <span>
              <HeroFileIcon size={17} />
              {hero.meta[1].text}
            </span>

          </div>

        </div>


        <div className="refund-policy-scroll">

          <span>
            {hero.scrollText}
          </span>

          <div className="refund-policy-scroll-line" />

        </div>

      </section>


      {/* MAIN */}

      <main className="refund-policy-main">

        {/* INTRO */}

        <section className="refund-policy-intro">

          <div className="refund-policy-section-label">

            <span>
              {intro.sectionNumber}
            </span>

            <span>
              {intro.sectionLabel}
            </span>

          </div>


          <div className="refund-policy-intro-grid">

            <div>

              <p className="refund-policy-kicker">
                {intro.kicker}
              </p>

              <h2>
                {intro.title}
                <span>{intro.titleAccent}</span>
              </h2>

            </div>


            <div className="refund-policy-intro-copy">

              {intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              ))}

            </div>

          </div>

        </section>


        {/* POLICY LIST */}

        <section className="refund-policy-list-section">

          <div className="refund-policy-section-heading">

            <div>

              <span>
                {policySection.label}
              </span>

              <h2>
                {policySection.title}
              </h2>

            </div>

            <p>
              {policySection.description}
            </p>

          </div>


          <div className="refund-policy-list">

            {policies.map((policy) => {

              const Icon = icons[policy.icon];

              return (
                <article
                  className="refund-policy-item"
                  key={policy.number}
                >

                  <div className="refund-policy-item-number">
                    {policy.number}
                  </div>


                  <div className="refund-policy-item-icon">
                    <Icon size={23} />
                  </div>


                  <div className="refund-policy-item-content">

                    <h3>
                      {policy.title}
                    </h3>

                    <p>
                      {policy.text}
                    </p>


                    <div className="refund-policy-highlight">

                      <span className="refund-policy-highlight-dot" />

                      <span>
                        {policy.highlight}
                      </span>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        </section>


        {/* IMPORTANT NOTICE */}

        <section className="refund-policy-notice">

          <div className="refund-policy-notice-icon">
            <AlertCircle size={27} />
          </div>


          <div className="refund-policy-notice-content">

            <span>
              {notice.label}
            </span>

            <h2>
              {notice.title}
              <em>{notice.titleAccent}</em>
            </h2>

            <p>
              {notice.description}
            </p>

          </div>

        </section>


        {/* REGULATORY FOOTER */}

        <section className="refund-policy-regulatory">

          <div className="refund-policy-regulatory-line" />


          <div className="refund-policy-regulatory-content">

            <span>
              {regulatory.label}
            </span>

            <h2>
              {regulatory.title.map((item, index) => (
                <span key={item}>
                  {index > 0 && " · "}
                  {item}
                </span>
              ))}
            </h2>

            <p>
              {regulatory.description}
            </p>

          </div>


          <div className="refund-policy-regulatory-mark">
            <ShieldCheck size={25} />
          </div>

        </section>

      </main>

    </div>
  );
}

export default RefundPolicy;