import AcademicLayout from "./AcademicLayout";
import "./SchemeCalendar/SchemeCalendar.css";
import {
  FileText,
  Download,
  Eye,
  BookOpen,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

const syllabus = [
  {
    title: "Affiliated College Syllabus (IPU)",
    program: "Engineering",
    color: "emerald",
    pdf: "https://eitfaridabad.com/pdf/academic-calendar/Affiliated%20College%20Syllabus-IPU.pdf",
  },
  {
    title: "BCA 1st Year Syllabus",
    program: "BCA",
    color: "blue",
    pdf: "https://eitfaridabad.com/pdf/academic-calendar/BCA%201ST%20YEAR%20SYALLBUS.pdf",
  },
  {
    title: "GGSIPU BBA Syllabus",
    program: "BBA",
    color: "gold",
    pdf: "https://eitfaridabad.com/pdf/academic-calendar/GGSIPU%20BBA%20SYLLABUS.pdf",
  },
  {
    title: "GGSIPU MBA Syllabus",
    program: "MBA",
    color: "purple",
    pdf: "https://eitfaridabad.com/pdf/academic-calendar/GGSIPU%20MBA%20SYLLABUS.pdf",
  },
  {
    title: "MCA 1st Year Syllabus",
    program: "MCA",
    color: "cyan",
    pdf: "https://eitfaridabad.com/pdf/academic-calendar/mca%201st%20IPU.pdf",
  },
];

const features = [
  {
    icon: BookOpen,
    title: "Latest Curriculum",
    text: "Updated syllabus aligned with university regulations and industry requirements.",
  },
  {
    icon: GraduationCap,
    title: "Outcome Based Learning",
    text: "Structured learning outcomes and practical knowledge for career development.",
  },
  {
    icon: FileText,
    title: "Easy Access",
    text: "Download official syllabus PDFs anytime from one centralized location.",
  },
];

function SchemeCalendar() {
  return (
    <AcademicLayout
      pageTitle="Scheme & Syllabus"
      pageSubtitle="Curriculum • Course Structure • Learning Outcomes"
      activePage="schemeCalendar"
    >
      <section className="scheme-section">

        <div className="section-heading">

          <span>01</span>

          <h2>Scheme & Syllabus</h2>

          <p>
            Download the latest university approved
            syllabus for all programmes offered at EIT.
          </p>

        </div>

        <div className="scheme-grid">

          {syllabus.map((item) => (

            <article
              key={item.title}
              className={`scheme-card ${item.color}`}
            >

              <div className="scheme-top">

                <FileText size={38} />

                <span>{item.program}</span>

              </div>

              <h3>{item.title}</h3>

              <p>
                Official syllabus issued by the affiliated
                university for the respective programme.
              </p>

              <div className="scheme-actions">

                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="view-btn"
                >
                  <Eye size={18} />
                  View
                </a>

                <a
                  href={item.pdf}
                  download
                  className="download-btn"
                >
                  <Download size={18} />
                </a>

              </div>

            </article>

          ))}

        </div>

      </section>

      <section className="scheme-features">

        <div className="section-heading">

          <span>02</span>

          <h2>Academic Excellence</h2>

        </div>

        <div className="feature-grid">

          {features.map((item) => {

            const Icon = item.icon;

            return (

              <article
                key={item.title}
                className="feature-card"
              >

                <div className="feature-icon">

                  <Icon size={36} />

                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <ArrowUpRight size={18} />

              </article>

            );

          })}

        </div>

      </section>

      <section className="scheme-footer">

        <div className="scheme-footer-card">

          <small>ACADEMIC RESOURCES</small>

          <h2>
            Learn with an
            <br />
            Industry Ready Curriculum
          </h2>

          <p>
            Every programme follows the latest
            university-approved curriculum to ensure
            students receive quality education,
            practical exposure and strong academic
            foundations.
          </p>

        </div>

      </section>

    </AcademicLayout>
  );
}

export default SchemeCalendar;