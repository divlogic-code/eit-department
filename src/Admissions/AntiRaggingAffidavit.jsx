import { ArrowUpRight, ShieldCheck } from "lucide-react";

import AdmissionsSidebar from "./AdmissionsSidebar";
import antiRaggingAffidavit from "../data/admissions/antiRaggingAffidavit";

import "./AntiRaggingAffidavit/AntiRaggingAffidavit.css";

function AntiRaggingAffidavit() {
  const {
    hero,
    intro,
    gallery,
    affidavitLink,
  } = antiRaggingAffidavit;

  return (
    <div className="anti-ragging-affidavit-page">

      <AdmissionsSidebar />

      {/* HERO */}

      <section className="anti-ragging-affidavit-hero">

        <div className="anti-ragging-affidavit-hero-content">

          <div className="anti-ragging-affidavit-eyebrow">
            <span>{hero.eyebrow[0]}</span>
            <span />
            <span>{hero.eyebrow[1]}</span>
          </div>

          <div className="anti-ragging-affidavit-icon">
            <ShieldCheck size={27} />
          </div>

          <h1>
            {hero.title}
            <span>{hero.titleAccent}</span>
          </h1>

          <p>{hero.description}</p>

        </div>

      </section>


      {/* ONLINE UNDERTAKING */}

      <main className="anti-ragging-affidavit-main">

        <section className="anti-ragging-affidavit-intro">

          <div className="anti-ragging-affidavit-label">
            <span>{intro.number}</span>
            <span>{intro.label}</span>
          </div>


          <div className="anti-ragging-affidavit-grid">

            <div>

              <p className="anti-ragging-affidavit-kicker">
                {intro.kicker}
              </p>

              <h2>
                {intro.title}
                <span>{intro.titleAccent}</span>
              </h2>

            </div>


            <div>

              <p className="anti-ragging-affidavit-description">
                {intro.description}
              </p>

              <a
                href={affidavitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="anti-ragging-affidavit-button"
              >
                <span>{intro.button}</span>
                <ArrowUpRight size={18} />
              </a>

            </div>

          </div>

        </section>


        {/* AFFIDAVIT GALLERY */}

        <section className="anti-ragging-affidavit-gallery">

          <div className="anti-ragging-affidavit-gallery-heading">

            <span>{gallery.label}</span>

            <h2>{gallery.title}</h2>

          </div>


          <div className="anti-ragging-affidavit-images">

            {gallery.images.map((image) => (
              <a
                href={affidavitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="anti-ragging-affidavit-image-card"
                key={image.src}
              >

                <img
                  src={image.src}
                  alt={image.alt}
                />

                <div className="anti-ragging-affidavit-image-overlay">

                  <span>{gallery.button}</span>

                  <ArrowUpRight size={19} />

                </div>

              </a>
            ))}

          </div>

        </section>

      </main>

    </div>
  );
}

export default AntiRaggingAffidavit;