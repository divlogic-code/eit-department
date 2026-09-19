import {
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";

import AdmissionsSidebar from "./AdmissionsSidebar";
import feeReimbursement from "../data/admissions/feeReimbursement";

import "./FeeReimbursement/FeeReimbursement.css";

function FeeReimbursement() {
  const {
    hero,
    intro,
    applications,
    initiative,
    programmes,
    documents,
  } = feeReimbursement;

  return (
    <div className="fee-reimbursement-page">

      <AdmissionsSidebar />

      {/* HERO */}

      <section className="fee-reimbursement-hero">

        <video
          className="fee-reimbursement-hero-video"
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

        <div className="fee-reimbursement-hero-overlay" />

        <div className="fee-reimbursement-hero-content">

          <span className="fee-reimbursement-eyebrow">
            {hero.eyebrow}
          </span>

          <h1>
            {hero.title}
          </h1>

          <p>
            {hero.description}
          </p>

        </div>

        <div className="fee-reimbursement-hero-bottom">

          <span>
            {hero.institute}
          </span>

          <strong>
            {hero.category}
          </strong>

        </div>

      </section>


      {/* MAIN CONTENT */}

      <main className="fee-reimbursement-main">

        <div className="fee-reimbursement-container">

          {/* INTRO */}

          <section className="fee-reimbursement-intro">

            <div className="fee-reimbursement-kicker">

              <IndianRupee size={18} />

              <span>
                {intro.kicker}
              </span>

            </div>

            <h2>
              {intro.title}
            </h2>

            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            ))}

            <div className="fee-reimbursement-benefits">

              {intro.benefits.map((benefit) => (
                <div
                  className="fee-reimbursement-benefit"
                  key={benefit.percentage}
                >

                  <div className="fee-reimbursement-benefit-icon">
                    <CheckCircle2 size={22} />
                  </div>

                  <div>

                    <strong>
                      {benefit.percentage}
                    </strong>

                    <span>
                      {benefit.text}
                    </span>

                  </div>

                </div>
              ))}

            </div>

            <p>
              {intro.closing}
            </p>

          </section>


          {/* APPLICATION LINKS */}

          <section className="fee-reimbursement-applications">

            <div className="fee-reimbursement-section-heading">

              <span>
                {applications.label}
              </span>

              <h2>
                {applications.title}
              </h2>

            </div>


            <div className="fee-reimbursement-application-grid">

              {applications.items.map((item) => (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fee-reimbursement-application-card"
                  key={item.number}
                >

                  <div className="fee-reimbursement-application-icon">
                    <span>
                      {item.number}
                    </span>
                  </div>

                  <div className="fee-reimbursement-application-content">

                    <span>
                      {item.type}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                  </div>

                  <ExternalLink size={19} />

                </a>
              ))}

            </div>

          </section>


          {/* WHAT IS THE INITIATIVE */}

          <section className="fee-reimbursement-explainer">

            <div className="fee-reimbursement-explainer-number">
              {initiative.number}
            </div>

            <div>

              <div className="fee-reimbursement-small-title">
                {initiative.label}
              </div>

              <h2>
                {initiative.title}
              </h2>

              <p>
                {initiative.description}
              </p>


              <div className="fee-reimbursement-pill-grid">

                {initiative.points.map((point) => (
                  <div key={point}>

                    <ShieldCheck size={18} />

                    <span>
                      {point}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </section>


          {/* JEE MAIN */}

          <section className="fee-reimbursement-program">

            <div className="fee-reimbursement-program-header">

              <div>

                <span>
                  {programmes.jee.label}
                </span>

                <h2>
                  {programmes.jee.title}
                </h2>

              </div>

              <div className="fee-reimbursement-percentage">

                <strong>
                  {programmes.jee.percentage}
                </strong>

                <span>
                  {programmes.jee.percentageLabel}
                </span>

              </div>

            </div>


            <div className="fee-reimbursement-program-body">

              <p>
                {programmes.jee.description}
              </p>

              <div className="fee-reimbursement-process-heading">

                <FileCheck2 size={19} />

                <span>
                  {programmes.jee.processTitle}
                </span>

              </div>


              <div className="fee-reimbursement-steps">

                {programmes.jee.steps.map((step, index) => (
                  <div
                    className="fee-reimbursement-step"
                    key={step}
                  >

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p>
                      {step}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </section>


          {/* CET */}

          <section className="fee-reimbursement-program">

            <div className="fee-reimbursement-program-header">

              <div>

                <span>
                  {programmes.cet.label}
                </span>

                <h2>
                  {programmes.cet.title}
                </h2>

              </div>

              <div className="fee-reimbursement-percentage">

                <strong>
                  {programmes.cet.percentage}
                </strong>

                <span>
                  {programmes.cet.percentageLabel}
                </span>

              </div>

            </div>


            <div className="fee-reimbursement-program-body">

              <p>
                {programmes.cet.description}
              </p>

              <div className="fee-reimbursement-process-heading">

                <FileCheck2 size={19} />

                <span>
                  {programmes.cet.processTitle}
                </span>

              </div>


              <div className="fee-reimbursement-steps">

                {programmes.cet.steps.map((step, index) => (
                  <div
                    className="fee-reimbursement-step"
                    key={step}
                  >

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p>
                      {step}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </section>


          {/* DOCUMENTS */}

          <section className="fee-reimbursement-documents">

            <div className="fee-reimbursement-section-heading">

              <span>
                {documents.label}
              </span>

              <h2>
                {documents.title}
              </h2>

              <p>
                {documents.description}
              </p>

            </div>


            <div className="fee-reimbursement-document-grid">

              {documents.items.map((document, index) => (
                <div
                  className="fee-reimbursement-document-card"
                  key={document}
                >

                  <div className="fee-reimbursement-document-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <FileCheck2 size={21} />

                  <span>
                    {document}
                  </span>

                </div>
              ))}

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default FeeReimbursement;