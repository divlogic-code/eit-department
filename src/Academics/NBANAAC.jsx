import AcademicLayout from "./AcademicLayout";
import "./NBANAAC/NBANAAC.css";
import {
  Award,
  ShieldCheck,
  Target,
  GraduationCap,
  Users,
  ClipboardCheck,
  Building2,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const qualityPillars = [
  {
    icon: Award,
    title: "NBA Accreditation",
    text: "Outcome Based Education framework ensuring graduates possess strong technical knowledge, practical skills and professional ethics.",
  },
  {
    icon: ShieldCheck,
    title: "NAAC Quality Assurance",
    text: "Continuous quality improvement through academic excellence, innovation, governance and institutional best practices.",
  },
  {
    icon: Target,
    title: "Vision Driven",
    text: "Producing globally competent engineers, managers and professionals with leadership qualities.",
  },
];

const process = [
  {
    icon: GraduationCap,
    title: "Teaching & Learning",
    text: "Student-centric teaching supported by modern laboratories, ICT enabled classrooms and project-based learning.",
  },
  {
    icon: ClipboardCheck,
    title: "Assessment",
    text: "Continuous evaluation through assignments, practicals, quizzes, presentations and semester examinations.",
  },
  {
    icon: Users,
    title: "Student Development",
    text: "Technical clubs, workshops, internships, industrial visits and personality development programmes.",
  },
  {
    icon: Building2,
    title: "Industry Interaction",
    text: "Industry collaborations, expert lectures, innovation ecosystem and placement-oriented training.",
  },
];

const outcomes = [
  "Quality Education",
  "Research & Innovation",
  "Outcome Based Learning",
  "Industry Collaboration",
  "Continuous Improvement",
  "Holistic Student Development",
];

function NBANAAC() {
  return (
    <AcademicLayout
      pageTitle="NBA & NAAC"
      pageSubtitle="Quality Assurance • Outcome Based Education • Continuous Improvement"
      activePage="nbaNaac"
    >
      <section className="nba-section">

        <div className="section-heading">

          <span>01</span>

          <h2>
            Quality Assurance Framework
          </h2>

          <p>
            Echelon Institute of Technology is committed
            to delivering quality education through
            internationally accepted academic practices,
            continuous assessment and institutional
            excellence.
          </p>

        </div>

        <div className="quality-grid">

          {qualityPillars.map((item) => {

            const Icon = item.icon;

            return (

              <article
                key={item.title}
                className="quality-card"
              >

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

          <span>02</span>

          <h2>
            Programme & Process
          </h2>

        </div>

        <div className="process-grid">

          {process.map((item) => {

            const Icon = item.icon;

            return (

              <article
                key={item.title}
                className="process-card"
              >

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

          <span>03</span>

          <h2>
            Institutional Outcomes
          </h2>

        </div>

        <div className="outcome-grid">

          {outcomes.map((item) => (

            <div
              key={item}
              className="outcome-card"
            >

              <CheckCircle2 size={22} />

              <span>{item}</span>

            </div>

          ))}

        </div>

      </section>

      <section className="nba-closing">

        <div className="nba-closing-card">

          <small>
            ECHELON QUALITY POLICY
          </small>

          <h2>
            Excellence Through
            <br />
            Continuous Improvement
          </h2>

          <p>
            The Institute continuously enhances
            academic quality through innovation,
            stakeholder feedback, industry interaction,
            research culture and outcome-based
            education aligned with NBA & NAAC
            guidelines.
          </p>

        </div>

      </section>

    </AcademicLayout>
  );
}

export default NBANAAC;