import { ArrowUpRight, ShieldCheck } from "lucide-react";

import AdmissionsSidebar from "./AdmissionsSidebar";
import "./AntiRaggingAffidavit/AntiRaggingAffidavit.css";

const affidavitImages = [
  "/images/anti-ragging/affidavit-1.jpg",
  "/images/anti-ragging/affidavit-2.jpg",
  "/images/anti-ragging/affidavit-3.jpg",
  "/images/anti-ragging/affidavit-4.jpg",
];

const affidavitLink =
  "https://www.antiragging.in/affidavit_affiliated_form.php";

function AntiRaggingAffidavit() {
  return (
    <div className="anti-ragging-affidavit-page">
      <AdmissionsSidebar />

      <section className="anti-ragging-affidavit-hero">
        <div className="anti-ragging-affidavit-hero-content">
          <div className="anti-ragging-affidavit-eyebrow">
            <span>ANTI-RAGGING</span>
            <span />
            <span>AFFIDAVIT</span>
          </div>

          <div className="anti-ragging-affidavit-icon">
            <ShieldCheck size={27} />
          </div>

          <h1>
            Anti-Ragging
            <span> Affidavit</span>
          </h1>

          <p>
            Complete the official Anti-Ragging undertaking through the
            designated online portal.
          </p>
        </div>
      </section>

      <main className="anti-ragging-affidavit-main">
        <section className="anti-ragging-affidavit-intro">
          <div className="anti-ragging-affidavit-label">
            <span>01</span>
            <span>ONLINE UNDERTAKING</span>
          </div>

          <div className="anti-ragging-affidavit-grid">
            <div>
              <p className="anti-ragging-affidavit-kicker">
                Official Anti-Ragging Portal
              </p>

              <h2>
                Complete your
                <span> undertaking online.</span>
              </h2>
            </div>

            <div>
              <p className="anti-ragging-affidavit-description">
                The following resources are provided for completing the
                Anti-Ragging affidavit and undertaking process. Click any
                image below to access the official Anti-Ragging portal.
              </p>

              <a
                href={affidavitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="anti-ragging-affidavit-button"
              >
                <span>OPEN ANTI-RAGGING PORTAL</span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="anti-ragging-affidavit-gallery">
          <div className="anti-ragging-affidavit-gallery-heading">
            <span>02 / AFFIDAVIT RESOURCES</span>
            <h2>Access the undertaking</h2>
          </div>

          <div className="anti-ragging-affidavit-images">
            {affidavitImages.map((image, index) => (
              <a
                href={affidavitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="anti-ragging-affidavit-image-card"
                key={image}
              >
                <img
                  src={image}
                  alt={`Anti-Ragging Affidavit ${index + 1}`}
                />

                <div className="anti-ragging-affidavit-image-overlay">
                  <span>OPEN AFFIDAVIT</span>
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