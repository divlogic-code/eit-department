import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Info,
} from "lucide-react";

import AdmissionsSidebar from "./AdmissionsSidebar";
import "./EligibilityCriteria/EligibilityCriteria.css";

const programmes = [
  {
    code: "01",
    programme: "B.Tech (CE)",
    fullName: "B.Tech Civil Engineering",
    duration: "4 Years",
    level: "UG",
    admission: "JEE Main",
    eligibility:
      "10+2 with minimum 55% aggregate. Physics and Mathematics compulsory, plus one of Chemistry / Biotechnology / Biology / Technical Vocational Subject.",
    selection:
      "Admission through JEE Main merit and counselling.",
  },
  {
    code: "02",
    programme: "B.Tech (CSE)",
    fullName: "B.Tech Computer Science & Engineering",
    duration: "4 Years",
    level: "UG",
    admission: "JEE Main",
    eligibility:
      "10+2 with minimum 55% aggregate. Physics and Mathematics compulsory, plus one of Chemistry / Biotechnology / Biology / Technical Vocational Subject.",
    selection:
      "Admission through JEE Main merit and counselling.",
  },
  {
    code: "03",
    programme: "B.Tech (CSE-AIML)",
    fullName:
      "B.Tech CSE (Artificial Intelligence & Machine Learning)",
    duration: "4 Years",
    level: "UG",
    admission: "JEE Main",
    eligibility:
      "10+2 with minimum 55% aggregate. Physics and Mathematics compulsory, plus one of Chemistry / Biotechnology / Biology / Technical Vocational Subject.",
    selection:
      "Admission through JEE Main merit and counselling.",
  },
  {
    code: "04",
    programme: "B.Tech (CSE-DS)",
    fullName: "B.Tech CSE (Data Science)",
    duration: "4 Years",
    level: "UG",
    admission: "JEE Main",
    eligibility:
      "10+2 with minimum 55% aggregate. Physics and Mathematics compulsory, plus one of Chemistry / Biotechnology / Biology / Technical Vocational Subject.",
    selection:
      "Admission through JEE Main merit and counselling.",
  },
  {
    code: "05",
    programme: "B.Tech (CSE-CS)",
    fullName: "B.Tech CSE (Cyber Security)",
    duration: "4 Years",
    level: "UG",
    admission: "JEE Main",
    eligibility:
      "10+2 with minimum 55% aggregate. Physics and Mathematics compulsory, plus one of Chemistry / Biotechnology / Biology / Technical Vocational Subject.",
    selection:
      "Admission through JEE Main merit and counselling.",
  },
  {
    code: "06",
    programme: "B.Tech (AI & DS)",
    fullName: "B.Tech Artificial Intelligence & Data Science",
    duration: "4 Years",
    level: "UG",
    admission: "JEE Main",
    eligibility:
      "10+2 with minimum 55% aggregate. Physics and Mathematics compulsory, plus one of Chemistry / Biotechnology / Biology / Technical Vocational Subject.",
    selection:
      "Admission through JEE Main merit and counselling.",
  },
  {
    code: "07",
    programme: "B.Tech (IoT & Blockchain)",
    fullName: "B.Tech CSE IoT & Blockchain Technology",
    duration: "4 Years",
    level: "UG",
    admission: "JEE Main",
    eligibility:
      "10+2 with minimum 55% aggregate. Physics and Mathematics compulsory, plus one of Chemistry / Biotechnology / Biology / Technical Vocational Subject.",
    selection:
      "Admission through JEE Main merit and counselling.",
  },
  {
    code: "08",
    programme: "B.Tech (Robotics & AI)",
    fullName: "B.Tech Robotics & Artificial Intelligence",
    duration: "4 Years",
    level: "UG",
    admission: "JEE Main",
    eligibility:
      "10+2 with minimum 55% aggregate. Physics and Mathematics compulsory, plus one of Chemistry / Biotechnology / Biology / Technical Vocational Subject.",
    selection:
      "Admission through JEE Main merit and counselling.",
  },
  {
    code: "09",
    programme: "B.Tech (Mechatronics)",
    fullName: "B.Tech Mechatronics",
    duration: "4 Years",
    level: "UG",
    admission: "JEE Main",
    eligibility:
      "10+2 with minimum 55% aggregate. Physics and Mathematics compulsory, plus one of Chemistry / Biotechnology / Biology / Technical Vocational Subject.",
    selection:
      "Admission through JEE Main merit and counselling.",
  },
  {
    code: "10",
    programme: "B.Tech (ECE)",
    fullName: "B.Tech Electronics & Communication Engineering",
    duration: "4 Years",
    level: "UG",
    admission: "JEE Main",
    eligibility:
      "10+2 with minimum 55% aggregate. Physics and Mathematics compulsory, plus one of Chemistry / Biotechnology / Biology / Technical Vocational Subject.",
    selection:
      "Admission through JEE Main merit and counselling.",
  },
  {
    code: "11",
    programme: "B.Tech (ME)",
    fullName: "B.Tech Mechanical Engineering",
    duration: "4 Years",
    level: "UG",
    admission: "JEE Main",
    eligibility:
      "10+2 with minimum 55% aggregate. Physics and Mathematics compulsory, plus one of Chemistry / Biotechnology / Biology / Technical Vocational Subject.",
    selection:
      "Admission through JEE Main merit and counselling.",
  },
  {
    code: "12",
    programme: "BCA",
    fullName: "Bachelor of Computer Applications",
    duration: "4 Years",
    level: "UG",
    admission: "CET / CUET",
    eligibility:
      "10+2 with minimum 50%. Must have Mathematics / Computer Science / Computer Applications.",
    selection:
      "Admission through CET merit.",
  },
  {
    code: "13",
    programme: "BCA (DS)",
    fullName: "BCA Data Science",
    duration: "4 Years",
    level: "UG",
    admission: "CET / CUET",
    eligibility:
      "10+2 with minimum 50%. Must have Mathematics / Computer Science / Computer Applications.",
    selection:
      "Admission through CET merit.",
  },
  {
    code: "14",
    programme: "BBA",
    fullName: "Bachelor of Business Administration",
    duration: "4 Years",
    level: "UG",
    admission: "CET / CUET",
    eligibility:
      "10+2 with minimum 50%. English is compulsory.",
    selection:
      "Admission through CET merit.",
  },
  {
    code: "15",
    programme: "BBA (DM)",
    fullName: "BBA Digital Marketing",
    duration: "4 Years",
    level: "UG",
    admission: "CET / CUET",
    eligibility:
      "10+2 with minimum 50%. English is compulsory.",
    selection:
      "Admission through CET merit.",
  },
  {
    code: "16",
    programme: "BBA (FS)",
    fullName: "BBA Financial Services",
    duration: "4 Years",
    level: "UG",
    admission: "CET / CUET",
    eligibility:
      "10+2 with minimum 50%. English is compulsory.",
    selection:
      "Admission through CET merit.",
  },
  {
    code: "17",
    programme: "MBA",
    fullName: "Master of Business Administration",
    duration: "2 Years",
    level: "PG",
    admission: "CAT / CMAT / CET",
    eligibility:
      "Graduation with minimum 50%.",
    selection:
      "Admission as per merit.",
  },
  {
    code: "18",
    programme: "MCA",
    fullName: "Master of Computer Applications",
    duration: "2 Years",
    level: "PG",
    admission: "CET",
    eligibility:
      "Graduation with Mathematics at 10+2 or graduation level, with minimum 50%.",
    selection:
      "Admission as per CET merit.",
  },
  {
    code: "19",
    programme: "M.Tech (CSE)",
    fullName: "M.Tech Computer Science & Engineering",
    duration: "2 Years",
    level: "PG",
    admission: "GATE / CET",
    eligibility:
      "B.Tech / BE in relevant branch with minimum 60%.",
    selection:
      "Admission through GATE / CET.",
  },
  {
    code: "20",
    programme: "M.Tech (ME)",
    fullName: "M.Tech Mechanical Engineering",
    duration: "2 Years",
    level: "PG",
    admission: "GATE / CET",
    eligibility:
      "B.Tech / BE in relevant branch with minimum 60%.",
    selection:
      "Admission through GATE / CET.",
  },
];

export default function EligibilityCriteria() {
  return (
    <div className="eligibility-criteria-page">

      <AdmissionsSidebar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="eligibility-criteria-hero">

        <video
          className="eligibility-criteria-hero-video"
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

        <div className="eligibility-criteria-hero-overlay" />

        <div className="eligibility-criteria-hero-content">

          <span className="eligibility-criteria-eyebrow">
            ADMISSIONS · ELIGIBILITY
          </span>

          <h1>
            Eligibility
            <br />
            <em>Criteria</em>
          </h1>

          <p>
            Programme-wise eligibility, admission routes and
            selection criteria for undergraduate and
            postgraduate programmes.
          </p>

        </div>

        <div className="eligibility-criteria-hero-number">
          04
        </div>

      </section>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="eligibility-criteria-main">

        {/* INTRO */}

        <section className="eligibility-criteria-intro">

          <div className="eligibility-criteria-intro-icon">
            <GraduationCap size={25} strokeWidth={1.5} />
          </div>

          <div>

            <span className="eligibility-criteria-section-label">
              ADMISSION REQUIREMENTS
            </span>

            <h2>
              Find the programme that fits your next chapter.
            </h2>

            <p>
              The eligibility criteria, merit, and procedure
              for admission are subject to the guidelines
              issued by the AICTE New Delhi and Guru Gobind
              Singh Indraprastha University, Delhi.
            </p>

          </div>

        </section>


        {/* PROGRAMME DIRECTORY */}

        <section className="eligibility-criteria-directory">

          <div className="eligibility-criteria-directory-header">

            <div>
              <span>PROGRAMME DIRECTORY</span>
              <h2>Eligibility by Programme</h2>
            </div>

            <div className="eligibility-criteria-total">
              <strong>20</strong>
              <span>
                PROGRAMMES
                <br />
                LISTED
              </span>
            </div>

          </div>


          <div className="eligibility-criteria-table">

            <div className="eligibility-criteria-table-head">
              <span>No.</span>
              <span>Programme</span>
              <span>Duration</span>
              <span>Admission</span>
              <span>Eligibility</span>
            </div>


            {programmes.map((item) => (
              <article
                className="eligibility-criteria-row"
                key={item.code}
              >

                <div className="eligibility-criteria-code">
                  {item.code}
                </div>

                <div className="eligibility-criteria-programme">

                  <div className="eligibility-criteria-programme-title">
                    {item.programme}
                  </div>

                  <div className="eligibility-criteria-programme-name">
                    {item.fullName}
                  </div>

                  <span className="eligibility-criteria-level">
                    {item.level}
                  </span>

                </div>

                <div className="eligibility-criteria-duration">
                  {item.duration}
                </div>

                <div className="eligibility-criteria-admission">
                  <BookOpen size={15} />
                  <span>{item.admission}</span>
                </div>

                <div className="eligibility-criteria-requirement">

                  <p>{item.eligibility}</p>

                  <span>
                    <strong>Selection:</strong>{" "}
                    {item.selection}
                  </span>

                </div>

              </article>
            ))}

          </div>

        </section>


        {/* IMPORTANT NOTE */}

        <section className="eligibility-criteria-note">

          <div className="eligibility-criteria-note-icon">
            <Info size={21} strokeWidth={1.7} />
          </div>

          <div>

            <span>IMPORTANT INFORMATION</span>

            <h3>
              Admission remains subject to applicable university
              and regulatory guidelines.
            </h3>

            <p>
              Eligibility, merit and admission procedures are
              governed by the applicable guidelines issued by
              AICTE New Delhi and Guru Gobind Singh
              Indraprastha University, Delhi.
            </p>

          </div>

          <ArrowUpRight
            size={21}
            className="eligibility-criteria-note-arrow"
          />

        </section>

      </main>

    </div>
  );
}