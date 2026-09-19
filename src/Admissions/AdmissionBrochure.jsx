import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  LibraryBig,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import AdmissionsSidebar from "./AdmissionsSidebar";
import admissionBrochure from "../data/admissions/admissionBrochure";

import "./AdmissionBrochure/AdmissionBrochure.css";

const icons = {
  library: LibraryBig,
  graduation: GraduationCap,
  book: BookOpen,
  location: MapPin,
  phone: Phone,
  mail: Mail,
};

function AdmissionBrochure() {
  const { hero, section, brochures, contact } = admissionBrochure;

  return (
    <div className="admission-brochure-page">

      <AdmissionsSidebar />

      {/* HERO */}

      <section className="admission-brochure-hero">

        <video
          className="admission-brochure-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={hero.video} type="video/mp4" />
        </video>

        <div className="admission-brochure-hero-overlay" />

        <div className="admission-brochure-hero-content">

          <span className="admission-brochure-eyebrow">
            {hero.eyebrow}
          </span>

          <h1>
            {hero.title}
            <br />
            <em>{hero.titleAccent}</em>
          </h1>

          <p>{hero.description}</p>

        </div>

      </section>


      {/* BROCHURES */}

      <section className="admission-brochure-list">

        <div className="admission-brochure-section-heading">

          <div>
            <span className="admission-brochure-kicker">
              {section.kicker}
            </span>

            <h2>
              {section.title}
              <br />
              <em>{section.titleAccent}</em>
            </h2>
          </div>

          <p>{section.description}</p>

        </div>


        <div className="admission-brochure-grid">

          {brochures.map((brochure) => {
            const Icon = icons[brochure.icon];

            return (
              <article
                className="admission-brochure-card"
                key={brochure.number}
              >

                <div className="admission-brochure-card-top">

                  <span className="admission-brochure-number">
                    {brochure.number}
                  </span>

                  <div className="admission-brochure-icon">
                    <Icon size={25} strokeWidth={1.4} />
                  </div>

                </div>


                <span className="admission-brochure-label">
                  {brochure.label}
                </span>

                <h3>{brochure.title}</h3>

                <p>{brochure.description}</p>


                <a
                  href={brochure.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="admission-brochure-button"
                >
                  <span>{brochure.button}</span>
                  <ArrowUpRight size={18} />
                </a>

              </article>
            );
          })}

        </div>

      </section>


      {/* CONTACT */}

      <section className="admission-brochure-contact">

        <div className="admission-brochure-contact-inner">

          <div className="admission-brochure-contact-heading">

            <span>{contact.eyebrow}</span>

            <h2>
              {contact.title}
              <br />
              <em>{contact.titleAccent}</em>
            </h2>

          </div>


          <div className="admission-brochure-contact-details">

            {contact.details.map((item) => {
              const Icon = icons[item.icon];

              return (
                <div
                  className="admission-brochure-contact-item"
                  key={item.icon}
                >
                  <Icon size={21} strokeWidth={1.5} />

                  <div>
                    <small>{item.label}</small>

                    <p>
                      {item.text.map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < item.text.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </section>

    </div>
  );
}

export default AdmissionBrochure;