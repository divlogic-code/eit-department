import {
  FileText,
  Download,
  Eye,
  BookOpen,
  GraduationCap,
  ArrowUpRight
} from "lucide-react";

import AcademicLayout from "./AcademicLayout";
import academicContent from "../data/academics/academicContent";

import "./SchemeCalendar/SchemeCalendar.css";

const icons = {
  book: BookOpen,
  graduation: GraduationCap,
  file: FileText
};

function SchemeCalendar() {
  const data = academicContent.schemeCalendar;

  return (
    <AcademicLayout
      pageTitle={data.title}
      pageSubtitle={data.subtitle}
      activePage="schemeCalendar"
    >
      <section className="scheme-section">
        <div className="section-heading">
          <span>{data.intro.number}</span>
          <h2>{data.intro.heading}</h2>
          <p>{data.intro.description}</p>
        </div>

        <div className="scheme-grid">
          {data.syllabus.map((item) => (
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
                Official syllabus issued by the affiliated university for
                the respective programme.
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

                <a href={item.pdf} download className="download-btn">
                  <Download size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="scheme-features">
        <div className="section-heading">
          <span>{data.features.number}</span>
          <h2>{data.features.heading}</h2>
        </div>

        <div className="feature-grid">
          {data.features.items.map((item) => {
            const Icon = icons[item.icon];

            return (
              <article key={item.title} className="feature-card">
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
          <small>{data.footer.eyebrow}</small>

          <h2>
            {data.footer.heading}
            <br />
            {data.footer.headingAccent}
          </h2>

          <p>{data.footer.description}</p>
        </div>
      </section>
    </AcademicLayout>
  );
}

export default SchemeCalendar;