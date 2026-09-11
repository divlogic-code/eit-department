import {
  AlertCircle,
  Building2,
  CalendarClock,
  FileCheck2,
  FileText,
  Landmark,
  ShieldCheck,
} from "lucide-react";

import AdmissionsSidebar from "./AdmissionsSidebar";
import "./RefundPolicy/RefundPolicy.css";

const refundPolicies = [
  {
    number: "01",
    icon: FileCheck2,
    title: "Withdrawal Application Requirements",
    text: "Candidates who wish to withdraw their admission must submit a handwritten request letter in person, along with the original Admission Letter and the official Withdrawal Letter issued by the University, within the prescribed deadline notified by the University.",
    highlight:
      "Handwritten request + Original Admission Letter + University Withdrawal Letter",
  },
  {
    number: "02",
    icon: Landmark,
    title: "Submission Location",
    text: "The withdrawal application shall be submitted exclusively to the Office of the Registrar of the institute.",
    highlight: "Office of the Registrar",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Refund Initiation",
    text: "The refund process will be initiated only after the admission has been formally cancelled by the University and the corresponding fee has been refunded by the University.",
    highlight: "University cancellation and fee refund are prerequisites",
  },
  {
    number: "04",
    icon: FileText,
    title: "Refund Deduction & Schedule",
    text: "Refund of fees, including applicable deductions such as processing charges etc., shall be governed in accordance with University/UGC/AICTE guidelines issued from time to time.",
    highlight: "University / UGC / AICTE guidelines",
  },
  {
    number: "05",
    icon: CalendarClock,
    title: "Deadline Compliance",
    text: "No request for withdrawal will be entertained after the deadline/time notified by the university, and the full fee may be forfeited in such cases. Withdrawal applications submitted via post/email will not be accepted.",
    highlight: "Late applications and post/email submissions are not accepted",
  },
  {
    number: "06",
    icon: Building2,
    title: "Compliance with UGC/AICTE Guidelines",
    text: "Refund of fees shall be governed strictly in accordance with the guidelines issued by the University and the All India Council for Technical Education (AICTE), as amended from time to time.",
    highlight: "Refund is subject to prevailing regulatory guidelines",
  },
];

function RefundPolicy() {
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
          <source src="/videos/college-campus.mp4" type="video/mp4" />
        </video>

        <div className="refund-policy-hero-overlay" />

        <div className="refund-policy-hero-content">
          <div className="refund-policy-eyebrow">
            <span>ADMISSIONS</span>
            <span className="refund-policy-eyebrow-line" />
            <span>REFUND POLICY</span>
          </div>

          <h1>
            Refund
            <span> Policy</span>
          </h1>

          <p>
            Important guidelines governing admission withdrawal and fee
            refunds at Echelon Institute of Technology.
          </p>

          <div className="refund-policy-hero-meta">
            <span>
              <ShieldCheck size={17} />
              Official Guidelines
            </span>

            <span>
              <FileText size={17} />
              Admission &amp; Withdrawal
            </span>
          </div>
        </div>

        <div className="refund-policy-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div className="refund-policy-scroll-line" />
        </div>
      </section>

      {/* MAIN */}
      <main className="refund-policy-main">
        {/* INTRO */}
        <section className="refund-policy-intro">
          <div className="refund-policy-section-label">
            <span>01</span>
            <span>REFUND POLICY</span>
          </div>

          <div className="refund-policy-intro-grid">
            <div>
              <p className="refund-policy-kicker">
                Admission Withdrawal
              </p>

              <h2>
                Important information
                <span> for candidates.</span>
              </h2>
            </div>

            <div className="refund-policy-intro-copy">
              <p>
                Candidates seeking withdrawal of admission must comply with
                the prescribed procedure, documentation requirements and
                deadline notified by the University.
              </p>

              <p>
                Refund of fees is subject to formal cancellation of admission
                by the University and the applicable University, UGC and AICTE
                guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* POLICY LIST */}
        <section className="refund-policy-list-section">
          <div className="refund-policy-section-heading">
            <div>
              <span>02 / POLICY PROVISIONS</span>
              <h2>Refund &amp; withdrawal guidelines</h2>
            </div>

            <p>
              Please read each provision carefully before submitting an
              admission withdrawal request.
            </p>
          </div>

          <div className="refund-policy-list">
            {refundPolicies.map((policy) => {
              const Icon = policy.icon;

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
                    <h3>{policy.title}</h3>

                    <p>{policy.text}</p>

                    <div className="refund-policy-highlight">
                      <span className="refund-policy-highlight-dot" />
                      <span>{policy.highlight}</span>
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
            <span>IMPORTANT NOTICE</span>

            <h2>
              Observe the prescribed
              <em> deadline and procedure.</em>
            </h2>

            <p>
              Withdrawal applications submitted after the deadline notified by
              the University will not be entertained. Applications sent through
              post or email will also not be accepted.
            </p>
          </div>
        </section>

        {/* REGULATORY FOOTER */}
        <section className="refund-policy-regulatory">
          <div className="refund-policy-regulatory-line" />

          <div className="refund-policy-regulatory-content">
            <span>REGULATORY FRAMEWORK</span>

            <h2>
              University
              <span> · </span>
              UGC
              <span> · </span>
              AICTE
            </h2>

            <p>
              Refund of fees shall be governed strictly in accordance with the
              applicable guidelines issued by the University and the All India
              Council for Technical Education, as amended from time to time.
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