import React from "react";

import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  CreditCard,
  FileText,
  BadgeCheck,
  ShieldAlert,
  BookOpen,
  Users,
  HeartHandshake,
  GraduationCap,
  Newspaper,
  Library,
  BriefcaseBusiness,
} from "lucide-react";

import contact from "../data/contact/contact";

import "./Contact.css";


const icons = {
  creditCard: CreditCard,
  fileText: FileText,
  badgeCheck: BadgeCheck,
  shieldAlert: ShieldAlert,
  bookOpen: BookOpen,
  heartHandshake: HeartHandshake,
  users: Users,
  graduationCap: GraduationCap,
  newspaper: Newspaper,
  library: Library,
  briefcase: BriefcaseBusiness,
};


function QuickLinkColumn({ title, links }) {
  return (
    <div className="contact-links-column">

      <div className="contact-links-heading">
        <span></span>
        <h3>{title}</h3>
      </div>


      <div className="contact-links-list">

        {links.map((link) => {

          const Icon = icons[link.icon];

          return (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >

              <span className="contact-link-icon">
                <Icon
                  size={16}
                  strokeWidth={1.8}
                />
              </span>


              <span className="contact-link-text">
                {link.label}
              </span>


              <ExternalLink
                className="contact-link-arrow"
                size={14}
                strokeWidth={1.8}
              />

            </a>
          );
        })}

      </div>

    </div>
  );
}


function Contact() {

  const {
    hero,
    brand,
    contactInformation,
    quickLinks,
  } = contact;


  return (
    <main className="contact-page">

      {/* HERO */}

      <section className="contact-hero">

        <div className="contact-hero-glow"></div>


        <div className="contact-hero-content">

          <span className="contact-eyebrow">
            {hero.eyebrow}
          </span>


          <h1>
            {hero.title}{" "}
            <span>{hero.titleAccent}</span>
          </h1>


          <p>
            {hero.description}
          </p>

        </div>

      </section>


      {/* MAIN CONTACT AREA */}

      <section className="contact-main">

        <div className="contact-top-grid">

          {/* BRAND CARD */}

          <div className="contact-brand-card">

            <div className="contact-brand-glow"></div>


            <div className="contact-logo-wrap">

              <img
                src={brand.logo}
                alt={brand.logoAlt}
                className="contact-logo"
              />

            </div>


            <div className="contact-brand-line"></div>


            <p>
              {brand.name}
            </p>


            <span>
              {brand.location}
            </span>

          </div>


          {/* CONTACT INFORMATION */}

          <div className="contact-information">

            <div className="contact-section-heading">

              <span className="contact-section-number">
                {contactInformation.sectionNumber}
              </span>


              <div>

                <span>
                  {contactInformation.eyebrow}
                </span>

                <h2>
                  {contactInformation.title}
                </h2>

              </div>

            </div>


            <div className="contact-info-grid">

              {/* LOCATION */}

              <div className="contact-info-card">

                <div className="contact-info-icon">
                  <MapPin size={22} />
                </div>


                <div>

                  <span className="contact-info-label">
                    {contactInformation.location.label}
                  </span>


                  <p>
                    {contactInformation.location.lines.map(
                      (line, index) => (
                        <React.Fragment key={line}>
                          {index > 0 && <br />}
                          {line}
                        </React.Fragment>
                      )
                    )}
                  </p>

                </div>

              </div>


              {/* PHONE */}

              <a
                href={contactInformation.phone.href}
                className="contact-info-card contact-info-card-link"
              >

                <div className="contact-info-icon">
                  <Phone size={21} />
                </div>


                <div>

                  <span className="contact-info-label">
                    {contactInformation.phone.label}
                  </span>


                  <p>
                    {contactInformation.phone.display}
                  </p>

                </div>


                <ExternalLink
                  className="contact-info-arrow"
                  size={15}
                />

              </a>


              {/* EMAIL */}

              <a
                href={contactInformation.email.href}
                className="contact-info-card contact-info-card-link"
              >

                <div className="contact-info-icon">
                  <Mail size={21} />
                </div>


                <div>

                  <span className="contact-info-label">
                    {contactInformation.email.label}
                  </span>


                  <p>
                    {contactInformation.email.display}
                  </p>

                </div>


                <ExternalLink
                  className="contact-info-arrow"
                  size={15}
                />

              </a>

            </div>

          </div>

        </div>


        {/* QUICK LINKS */}

        <div className="contact-quick-links">

          <div className="contact-quick-header">

            <span className="contact-section-number">
              {quickLinks.sectionNumber}
            </span>


            <div>

              <span>
                {quickLinks.eyebrow}
              </span>

              <h2>
                {quickLinks.title}
              </h2>

            </div>

          </div>


          <div className="contact-links-grid">

            {quickLinks.columns.map((column, index) => (
              <QuickLinkColumn
                key={index}
                title={column.title}
                links={column.links}
              />
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}


export default Contact;