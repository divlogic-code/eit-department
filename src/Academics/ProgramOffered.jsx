import {
  GraduationCap,
  Cpu,
  Briefcase,
  Laptop,
  ArrowUpRight,
  Users
} from "lucide-react";

import AcademicLayout from "./AcademicLayout";
import academicPrograms from "../data/academics/academicPrograms";

import "./ProgramOffered/ProgramOffered.css";

const icons = {
  cpu: Cpu,
  graduation: GraduationCap
};

function ProgramOffered() {
  const data = academicPrograms;

  return (
    <AcademicLayout
      pageTitle={data.title}
      pageSubtitle={data.subtitle}
      activePage="programOffered"
    >
      <section className="program-section">
        <div className="section-heading">
          <span>01</span>

          <h2>Undergraduate Engineering Programmes</h2>

          <p>
            Explore future-ready engineering programmes designed to prepare
            students for innovation, research and industry.
          </p>
        </div>

        <div className="engineering-grid">
          {data.engineering.map((course) => {
            const Icon = icons[course.icon];

            return (
              <article
                key={course.name}
                className={`program-card ${course.color}`}
              >
                <div className="program-card-top">
                  <div className="program-icon">
                    <Icon size={32} />
                  </div>

                  <ArrowUpRight size={20} />
                </div>

                <small>B.Tech</small>

                <h3>{course.name}</h3>

                <div className="program-bottom">
                  <div>
                    <span>Intake</span>
                    <strong>{course.intake}</strong>
                  </div>

                  <div className="program-badge">{course.short}</div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="program-section">
        <div className="section-heading">
          <span>02</span>
          <h2>Postgraduate Programmes</h2>
        </div>

        <div className="pg-grid">
          {data.postgraduate.map((course) => (
            <article key={course.title} className="pg-card">
              <Laptop size={40} />

              <h3>{course.title}</h3>

              <strong>Intake : {course.intake}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="program-section">
        <div className="section-heading">
          <span>03</span>
          <h2>Management & Computer Applications</h2>
        </div>

        <div className="management-grid">
          {data.management.map((course) => (
            <article key={course.title} className="management-card">
              <Briefcase size={34} />

              <h3>{course.title}</h3>

              <p>Approved by GGSIPU</p>

              <div className="management-footer">
                <Users size={18} />
                <span>Intake {course.intake}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="program-closing">
        <div className="closing-card">
          <small>{data.closing.eyebrow}</small>

          <h2>{data.closing.heading}</h2>

          <p>{data.closing.description}</p>

          <button>{data.closing.buttonText}</button>
        </div>
      </section>
    </AcademicLayout>
  );
}

export default ProgramOffered;