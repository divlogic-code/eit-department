import {
  CalendarDays,
  Download,
  Eye,
  Clock3,
  BookOpen,
  ArrowUpRight
} from "lucide-react";

import AcademicLayout from "./AcademicLayout";
import academicContent from "../data/academics/academicContent";

import "./AcademicCalendar/AcademicCalendar.css";

const icons = {
  calendar: CalendarDays,
  clock: Clock3,
  book: BookOpen
};

function AcademicCalendar() {
  const data = academicContent.calendar;

  return (
    <AcademicLayout
      pageTitle={data.title}
      pageSubtitle={data.subtitle}
      activePage="academicCalendar"
    >
      <section className="calendar-intro">
        <div className="section-heading">
          <span>{data.intro.number}</span>
          <h2>{data.intro.heading}</h2>
          <p>{data.intro.description}</p>
        </div>

        <div className="calendar-grid">
          {data.calendars.map((item) => (
            <article
              key={item.semester}
              className={`calendar-card ${item.color}`}
            >
              <div className="calendar-top">
                <CalendarDays size={38} />
                <span>{item.year}</span>
              </div>

              <h3>{item.semester}</h3>
              <p>{item.description}</p>

              <div className="calendar-actions">
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="view-btn"
                >
                  <Eye size={18} />
                  View PDF
                </a>

                <a href={item.pdf} download className="download-btn">
                  <Download size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="calendar-highlights">
        <div className="section-heading">
          <span>{data.highlights.number}</span>
          <h2>{data.highlights.heading}</h2>
        </div>

        <div className="highlight-grid">
          {data.highlights.items.map((item) => {
            const Icon = icons[item.icon];

            return (
              <article key={item.title} className="highlight-card">
                <div className="highlight-icon">
                  <Icon size={34} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <ArrowUpRight size={18} />
              </article>
            );
          })}
        </div>
      </section>

      <section className="calendar-footer">
        <div className="calendar-footer-card">
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

export default AcademicCalendar;