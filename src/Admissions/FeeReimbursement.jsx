import {
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";

import AdmissionsSidebar from "./AdmissionsSidebar";
import "./FeeReimbursement/FeeReimbursement.css";

const jeeApplicationUrl =
  "https://examinationservices.nic.in/jeemainx2026/root/home.aspx?enc=WPJ5WSCVWOMNiXoyyomJgDUffqDdG1LTsAPBKFcEC9VCAbchJdrRG5w+4Ch32Wrm";

const cetApplicationUrl =
  "https://admissions.nic.in/IPUADM/Applicant/Root/home.aspx?enc=yVQCIiq12npg+pcvNJRdc0YTdqI/r6UpNtHUkVddWy9SG879809gkErWCjQnR+tD+ZL5AF8JuNgAQDgVlpnnSw==";

const jeeSteps = [
  "Apply & appear for JEE Main",
  "Visit the Echelon Institute of Technology campus",
  "Carry JEE admit card & fee receipt",
  "Complete document verification",
  "Get 100% JEE Main exam fee reimbursed",
];

const cetSteps = [
  "Appear for CET",
  "Visit the campus with CET admit card",
  "Documents verified on campus",
  "Receive 50% CET exam fee reimbursement",
];

const requiredDocuments = [
  "Exam Admit Card (JEE or CET)",
  "Exam Fee Payment Receipt",
  "Valid Photo ID Proof",
];

function FeeReimbursement() {
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
          <source src="/videos/college-campus.mp4" type="video/mp4" />
        </video>

        <div className="fee-reimbursement-hero-overlay" />

        <div className="fee-reimbursement-hero-content">
          <span className="fee-reimbursement-eyebrow">
            ADMISSIONS • STUDENT SUPPORT
          </span>

          <h1>Exam Fee Reimbursement</h1>

          <p>
            Financial support for students appearing for JEE Main and CET,
            helping make access to higher education more affordable.
          </p>
        </div>

        <div className="fee-reimbursement-hero-bottom">
          <span>ECHELON INSTITUTE OF TECHNOLOGY</span>
          <strong>STUDENT WELFARE</strong>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="fee-reimbursement-main">
        <div className="fee-reimbursement-container">

          {/* INTRO */}
          <section className="fee-reimbursement-intro">
            <div className="fee-reimbursement-kicker">
              <IndianRupee size={18} />
              <span>EXAM FEE REIMBURSEMENT INITIATIVE</span>
            </div>

            <h2>
              100% JEE Main Fee Refund &amp; 50% CET Fee Refund @Echelon
              Institute of Technology
            </h2>

            <p>
              Entrance exams like <strong>JEE Main</strong> and{" "}
              <strong>CET (Common Entrance Test)</strong> are important
              milestones for students aiming for higher education. However,
              the <strong>exam fees</strong> can often become a financial
              concern.
            </p>

            <p>
              To support aspiring students, Echelon Institute of Technology
              has introduced a Student Exam Fee Reimbursement Initiative,
              offering:
            </p>

            <div className="fee-reimbursement-benefits">
              <div className="fee-reimbursement-benefit">
                <div className="fee-reimbursement-benefit-icon">
                  <CheckCircle2 size={22} />
                </div>

                <div>
                  <strong>100%</strong>
                  <span>JEE Main exam fee reimbursement</span>
                </div>
              </div>

              <div className="fee-reimbursement-benefit">
                <div className="fee-reimbursement-benefit-icon">
                  <CheckCircle2 size={22} />
                </div>

                <div>
                  <strong>50%</strong>
                  <span>CET exam fee reimbursement</span>
                </div>
              </div>
            </div>

            <p>
              This initiative reflects the institute’s commitment to student
              welfare, transparency, and equal access to opportunities.
            </p>
          </section>

          {/* APPLICATION LINKS */}
          <section className="fee-reimbursement-applications">
            <div className="fee-reimbursement-section-heading">
              <span>ENTRANCE EXAM APPLICATIONS</span>
              <h2>Apply for the examination</h2>
            </div>

            <div className="fee-reimbursement-application-grid">
              <a
                href={jeeApplicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fee-reimbursement-application-card"
              >
                <div className="fee-reimbursement-application-icon">
                  <span>01</span>
                </div>

                <div className="fee-reimbursement-application-content">
                  <span>JEE MAIN</span>
                  <h3>JEE - Application Form</h3>
                  <p>
                    Apply through the official JEE Main examination portal.
                  </p>
                </div>

                <ExternalLink size={19} />
              </a>

              <a
                href={cetApplicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fee-reimbursement-application-card"
              >
                <div className="fee-reimbursement-application-icon">
                  <span>02</span>
                </div>

                <div className="fee-reimbursement-application-content">
                  <span>CET</span>
                  <h3>CET - Application Form</h3>
                  <p>
                    Apply through the official CET admission portal.
                  </p>
                </div>

                <ExternalLink size={19} />
              </a>
            </div>
          </section>

          {/* WHAT IS THE INITIATIVE */}
          <section className="fee-reimbursement-explainer">
            <div className="fee-reimbursement-explainer-number">
              01
            </div>

            <div>
              <div className="fee-reimbursement-small-title">
                THE INITIATIVE
              </div>

              <h2>What Is the Exam Fee Reimbursement Initiative?</h2>

              <p>
                Under this initiative, students who have appeared for JEE Main
                or CET can receive a partial or full refund of their exam fee,
                after completing a simple on-campus document verification
                process.
              </p>

              <div className="fee-reimbursement-pill-grid">
                <div>
                  <ShieldCheck size={18} />
                  <span>Transparent</span>
                </div>

                <div>
                  <ShieldCheck size={18} />
                  <span>Student-first</span>
                </div>

                <div>
                  <ShieldCheck size={18} />
                  <span>Genuine support beyond academics</span>
                </div>
              </div>
            </div>
          </section>

          {/* JEE MAIN */}
          <section className="fee-reimbursement-program">
            <div className="fee-reimbursement-program-header">
              <div>
                <span>JEE MAIN EXAM</span>
                <h2>Exam Fee Reimbursement</h2>
              </div>

              <div className="fee-reimbursement-percentage">
                <strong>100%</strong>
                <span>REIMBURSEMENT</span>
              </div>
            </div>

            <div className="fee-reimbursement-program-body">
              <p>
                Students who appear for the JEE Main examination are eligible
                to receive 100% reimbursement of their JEE Main exam fee.
              </p>

              <div className="fee-reimbursement-process-heading">
                <FileCheck2 size={19} />
                <span>JEE Reimbursement Process (Short)</span>
              </div>

              <div className="fee-reimbursement-steps">
                {jeeSteps.map((step, index) => (
                  <div className="fee-reimbursement-step" key={step}>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CET */}
          <section className="fee-reimbursement-program">
            <div className="fee-reimbursement-program-header">
              <div>
                <span>CET EXAM</span>
                <h2>Exam Fee Reimbursement</h2>
              </div>

              <div className="fee-reimbursement-percentage">
                <strong>50%</strong>
                <span>REIMBURSEMENT</span>
              </div>
            </div>

            <div className="fee-reimbursement-program-body">
              <p>
                Students who have appeared for the CET exam can receive 50%
                of their CET exam fee reimbursed, after verification.
              </p>

              <div className="fee-reimbursement-process-heading">
                <FileCheck2 size={19} />
                <span>CET Reimbursement Process (Short)</span>
              </div>

              <div className="fee-reimbursement-steps">
                {cetSteps.map((step, index) => (
                  <div className="fee-reimbursement-step" key={step}>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section className="fee-reimbursement-documents">
            <div className="fee-reimbursement-section-heading">
              <span>DOCUMENT VERIFICATION</span>
              <h2>Documents Required (For Both JEE &amp; CET)</h2>
              <p>Students should carry:</p>
            </div>

            <div className="fee-reimbursement-document-grid">
              {requiredDocuments.map((document, index) => (
                <div
                  className="fee-reimbursement-document-card"
                  key={document}
                >
                  <div className="fee-reimbursement-document-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <FileCheck2 size={21} />

                  <span>{document}</span>
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