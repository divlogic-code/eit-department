import AcademicLayout from "./AcademicLayout";
import "./AcademicCalendar/AcademicCalendar.css";
import {
  CalendarDays,
  Download,
  Eye,
  Clock3,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

const calendars = [
  {
    semester: "Odd Semester",
    year: "2025-26",
    color: "emerald",
    description:
      "Academic schedule for the Odd Semester including commencement, examinations, holidays and important institutional events.",
    pdf: "https://eitfaridabad.com/pdf/academic-calendar/Academic%20Calendar%20Odd%20Sem%202025-26.pdf",
  },
  {
    semester: "Even Semester",
    year: "2025-26",
    color: "blue",
    description:
      "Academic schedule for the Even Semester including semester timeline, examinations and university activities.",
    pdf: "https://eitfaridabad.com/pdf/academic-calendar/Academic%20Calendar%20even%20sem%20JCBUST%202025%20Version-2.pdf",
  },
];

const highlights = [
  {
    icon: CalendarDays,
    title: "Semester Planning",
    text: "Well-defined academic schedules ensure smooth teaching-learning throughout the session.",
  },
  {
    icon: Clock3,
    title: "Important Dates",
    text: "All examinations, holidays and institutional events are planned in advance.",
  },
  {
    icon: BookOpen,
    title: "Academic Excellence",
    text: "Structured calendar promotes discipline, consistency and effective learning.",
  },
];

function AcademicCalendar() {
  return (
    <AcademicLayout
      pageTitle="Academic Calendar"
      pageSubtitle="Session Planning • Events • Examination Schedule"
      activePage="academicCalendar"
    >
      <section className="calendar-intro">

        <div className="section-heading">

          <span>01</span>

          <h2>
            Academic Session 2025–26
          </h2>

          <p>
            Download the official academic calendars
            for the current session.
          </p>

        </div>

        <div className="calendar-grid">

          {calendars.map((item) => (

            <article
              key={item.semester}
              className={`calendar-card ${item.color}`}
            >

              <div className="calendar-top">

                <CalendarDays size={38} />

                <span>
                  {item.year}
                </span>

              </div>

              <h3>
                {item.semester}
              </h3>

              <p>
                {item.description}
              </p>

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

      <section className="calendar-highlights">

        <div className="section-heading">

          <span>02</span>

          <h2>
            Why Academic Calendar Matters
          </h2>

        </div>

        <div className="highlight-grid">

          {highlights.map((item) => {

            const Icon = item.icon;

            return (

              <article
                key={item.title}
                className="highlight-card"
              >

                <div className="highlight-icon">

                  <Icon size={34} />

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                <ArrowUpRight size={18} />

              </article>

            );

          })}

        </div>

      </section>

      <section className="calendar-footer">

        <div className="calendar-footer-card">

          <small>
            ECHELON ACADEMICS
          </small>

          <h2>
            Stay Updated.
            <br />
            Stay Ahead.
          </h2>

          <p>
            Students are advised to regularly
            follow the academic calendar for
            examinations, academic activities,
            holidays and institutional events.
          </p>

        </div>

      </section>

    </AcademicLayout>
  );
}

export default AcademicCalendar;