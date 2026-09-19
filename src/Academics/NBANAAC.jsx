import {
  Award,
  ShieldCheck,
  Target,
  GraduationCap,
  Users,
  ClipboardCheck,
  Building2,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";

import AcademicLayout from "./AcademicLayout";
import academicContent from "../data/academics/academicContent";

import "./NBANAAC/NBANAAC.css";

const icons = {
  award: Award,
  shield: ShieldCheck,
  target: Target,
  graduation: GraduationCap,
  users: Users,
  clipboard: ClipboardCheck,
  building: Building2
};

function NBANAAC() {
  const data = academicContent.nbaNaac;

  return (
    <AcademicLayout
      pageTitle={data.title}
      pageSubtitle={data.subtitle}
      activePage="nbaNaac"
    >
      <section className="nba-section">
        <div className="section-heading">
          <span>{data.sections[0].number}</span>
          <h2>{data.sections[0].heading}</h2>
          <p>{data.sections[0].description}</p>
        </div>

        <div className="quality-grid">
          {data.qualityPillars.map((item) => {
            const Icon = icons[item.icon];

            return (
              <article key={item.title} className="quality-card">
                <div className="quality-icon">
                  <Icon size={40} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <ArrowUpRight size={18} />
              </article>
            );
          })}
        </div>
      </section>

      <section className="nba-section">
        <div className="section-heading">
          <span>{data.sections[1].number}</span>
          <h2>{data.sections[1].heading}</h2>
        </div>

        <div className="process-grid">
          {data.process.map((item) => {
            const Icon = icons[item.icon];

            return (
              <article key={item.title} className="process-card">
                <div className="process-icon">
                  <Icon size={34} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="nba-section">
        <div className="section-heading">
          <span>{data.sections[2].number}</span>
          <h2>{data.sections[2].heading}</h2>
        </div>

        <div className="outcome-grid">
          {data.outcomes.map((item) => (
            <div key={item} className="outcome-card">
              <CheckCircle2 size={22} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="nba-closing">
        <div className="nba-closing-card">
          <small>{data.closing.eyebrow}</small>

          <h2>
            {data.closing.heading}
            <br />
            {data.closing.headingAccent}
          </h2>

          <p>{data.closing.description}</p>
        </div>
      </section>
    </AcademicLayout>
  );
}

export default NBANAAC;