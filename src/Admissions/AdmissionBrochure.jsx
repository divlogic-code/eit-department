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
import "./AdmissionBrochure/AdmissionBrochure.css";

const brochures = [
  {
    number: "01",
    icon: LibraryBig,
    label: "Information Brochure",
    title: "Information Brochure 2026–2027",
    description:
      "Explore the latest information about Echelon Institute of Technology and its academic environment.",
    href: "https://eitfaridabad.com/pdf/Mini-Prospectus.pdf",
    button: "VIEW BROCHURE",
  },
  {
    number: "02",
    icon: GraduationCap,
    label: "Bachelor Programmes",
    title: "Admission Brochure for Academic Session 2025–2026",
    description:
      "Official admission brochure covering undergraduate programmes and admission information.",
    href: "https://eitfaridabad.com/pdf/Admission-Brochure-ug-2025-26.pdf",
    button: "VIEW UG BROCHURE",
  },
  {
    number: "03",
    icon: BookOpen,
    label: "Master Programmes",
    title: "Admission Brochure for Academic Session 2025–2026",
    description:
      "Official admission brochure covering postgraduate programmes and admission information.",
    href: "https://eitfaridabad.com/pdf/Admission-Brochure-pg-2025-26.pdf",
    button: "VIEW PG BROCHURE",
  },
];

function AdmissionBrochure() {
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
          <source
            src="/videos/college-campus.mp4"
            type="video/mp4"
          />
        </video>

        <div className="admission-brochure-hero-overlay" />

        <div className="admission-brochure-hero-content">

          <span className="admission-brochure-eyebrow">
            ADMISSIONS
          </span>

          <h1>
            Admission
            <br />
            <em>Brochure</em>
          </h1>

          <p>
            Everything you need to know about beginning
            your journey at Echelon Institute of Technology.
          </p>

        </div>

      </section>


      {/* BROCHURES */}

      <section className="admission-brochure-list">

        <div className="admission-brochure-section-heading">

          <div>
            <span className="admission-brochure-kicker">
              OFFICIAL DOCUMENTS
            </span>

            <h2>
              Your admission
              <br />
              <em>guidebook.</em>
            </h2>
          </div>

          <p>
            Access the official information and admission
            brochures provided for prospective students.
          </p>

        </div>


        <div className="admission-brochure-grid">

          {brochures.map((brochure) => {
            const Icon = brochure.icon;

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

                <h3>
                  {brochure.title}
                </h3>

                <p>
                  {brochure.description}
                </p>


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

            <span>
              NEED ASSISTANCE?
            </span>

            <h2>
              Speak with our
              <br />
              <em>admissions team.</em>
            </h2>

          </div>


          <div className="admission-brochure-contact-details">

            <div className="admission-brochure-contact-item">

              <MapPin size={21} strokeWidth={1.5} />

              <div>
                <small>VISIT US</small>
                <p>
                  Faridabad-121101
                  <br />
                  Delhi NCR, Haryana
                </p>
              </div>

            </div>


            <div className="admission-brochure-contact-item">

              <Phone size={21} strokeWidth={1.5} />

              <div>
                <small>CALL US</small>
                <p>
                  +91-9999753763
                </p>
              </div>

            </div>


            <div className="admission-brochure-contact-item">

              <Mail size={21} strokeWidth={1.5} />

              <div>
                <small>EMAIL US</small>
                <p>
                  admissions@eitfaridabad.co.in
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default AdmissionBrochure;