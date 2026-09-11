import {
  ArrowUpRight,
  ClipboardCheck,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";

import AdmissionsSidebar from "./AdmissionsSidebar";
import "./DocumentChecklist/DocumentChecklist.css";

const documents = [
  {
    number: "01",
    document: "Admission Form",
    requirement: "Original",
  },
  {
    number: "02",
    document: "Allotment letter",
    requirement: "Original",
  },
  {
    number: "03",
    document: "Entrance Test Score Card / Admit Card",
    requirement: "3 Copies",
  },
  {
    number: "04",
    document: "Fee Receipt Paid in IPU of Rs 96000/-",
    requirement: "Copies",
  },
  {
    number: "05",
    document: "Fee Receipt (Be Deposited in the college)",
    requirement: "1 Copy",
  },
  {
    number: "06",
    document: "Student Photo (passport size)",
    requirement: "4 Copies",
  },
  {
    number: "07",
    document: "Aadhar card",
    requirement: "3 Copies",
  },
  {
    number: "08",
    document: "10th Marksheet",
    requirement: "3 Copies",
  },
  {
    number: "09",
    document: "12th Marksheet",
    requirement: "3 Copies",
  },
  {
    number: "10",
    document: "Graduation Marksheet (if applicable)",
    requirement: "3 Copies",
  },
  {
    number: "11",
    document: "Migration Certificate",
    requirement: "Original + 3 Copies",
  },
  {
    number: "12",
    document: "Parivar Pehchan Patra (PPP id only for Haryana Resident)",
    requirement: "3 Copies",
  },
  {
    number: "13",
    document: "Character Certificate",
    requirement: "Original + 3 Copies",
  },
  {
    number: "14",
    document:
      "Medical Fitness certificate & Blood Group (Original) Attested from Govt. Hospital",
    requirement: "Original + 3 Copies",
  },
  {
    number: "15",
    document: "Gap-Year Affidavit if any",
    requirement: "Original",
  },
  {
    number: "16",
    document: "Category Certificate, if any (SC/ST/OBC/EWS etc.)",
    requirement: "3 Copies",
  },
];

export default function DocumentChecklist() {
  return (
    <div className="document-checklist-page">

      <AdmissionsSidebar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="document-checklist-hero">

        <video
          className="document-checklist-hero-video"
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

        <div className="document-checklist-hero-overlay" />

        <div className="document-checklist-hero-content">

          <span className="document-checklist-eyebrow">
            ADMISSIONS · SESSION 2025–26
          </span>

          <h1>
            Document
            <br />
            <em>Check List</em>
          </h1>

          <p>
            Keep your admission documents ready and make
            your reporting process smooth and efficient.
          </p>

        </div>

        <div className="document-checklist-hero-number">
          03
        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <main className="document-checklist-main">

        <section className="document-checklist-intro">

          <div className="document-checklist-intro-icon">
            <ClipboardCheck size={25} strokeWidth={1.5} />
          </div>

          <div>
            <span className="document-checklist-section-label">
              ADMISSION DOCUMENTATION
            </span>

            <h2>
              Documents required at the time of admission
            </h2>

            <p>
              Students are advised to arrange the following
              documents before reporting to the institute.
              Please ensure that the required originals and
              copies are available according to the checklist.
            </p>
          </div>

        </section>


        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <section className="document-checklist-section">

          <div className="document-checklist-header">

            <div>
              <span>DOCUMENTS</span>
              <h2>Admission Checklist</h2>
            </div>

            <div className="document-checklist-count">
              <strong>16</strong>
              <span>REQUIRED<br />ITEMS</span>
            </div>

          </div>


          <div className="document-checklist-table">

            <div className="document-checklist-table-head">
              <span>No.</span>
              <span>Document</span>
              <span>Requirement</span>
            </div>

            {documents.map((item) => (
              <div
                className="document-checklist-row"
                key={item.number}
              >

                <span className="document-checklist-number">
                  {item.number}
                </span>

                <div className="document-checklist-document">
                  <FileCheck2
                    size={17}
                    strokeWidth={1.6}
                  />

                  <span>{item.document}</span>
                </div>

                <span className="document-checklist-requirement">
                  {item.requirement}
                </span>

              </div>
            ))}

          </div>

        </section>


        {/* =====================================================
            REMINDER
        ===================================================== */}

        <section className="document-checklist-note">

          <div className="document-checklist-note-icon">
            <ShieldCheck size={22} strokeWidth={1.7} />
          </div>

          <div>
            <span>BE PREPARED</span>

            <h3>
              Carry originals wherever specified
            </h3>

            <p>
              The checklist distinguishes between original
              documents and photocopies. Make sure every
              document is prepared in the quantity mentioned
              above before reporting for admission.
            </p>
          </div>

          <ArrowUpRight
            className="document-checklist-note-arrow"
            size={21}
          />

        </section>

      </main>

    </div>
  );
}