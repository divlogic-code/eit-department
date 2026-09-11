import AcademicLayout from "./AcademicLayout";
import "./ProgramOffered/ProgramOffered.css";
import {
  GraduationCap,
  Cpu,
  Briefcase,
  Laptop,
  ArrowUpRight,
  Users,
} from "lucide-react";

const engineering = [
  {
    name: "Computer Science & Engineering",
    short: "CSE",
    intake: 240,
    icon: Cpu,
    color: "emerald",
  },
  {
    name: "Artificial Intelligence & Machine Learning",
    short: "AI & ML",
    intake: 60,
    icon: Cpu,
    color: "blue",
  },
  {
    name: "Data Science",
    short: "DS",
    intake: 60,
    icon: Cpu,
    color: "gold",
  },
  {
    name: "Cyber Security",
    short: "Cyber",
    intake: 60,
    icon: Cpu,
    color: "purple",
  },
  {
    name: "IoT & Cyber Security with Blockchain",
    short: "IoT",
    intake: 60,
    icon: Cpu,
    color: "cyan",
  },
  {
    name: "Artificial Intelligence & Data Science",
    short: "AI DS",
    intake: 60,
    icon: Cpu,
    color: "orange",
  },
  {
    name: "Robotics & Artificial Intelligence",
    short: "RAI",
    intake: 60,
    icon: Cpu,
    color: "red",
  },
  {
    name: "Mechanical Engineering",
    short: "ME",
    intake: 30,
    icon: GraduationCap,
    color: "emerald",
  },
  {
    name: "Civil Engineering",
    short: "CE",
    intake: 30,
    icon: GraduationCap,
    color: "blue",
  },
  {
    name: "Electronics & Communication",
    short: "ECE",
    intake: 30,
    icon: GraduationCap,
    color: "gold",
  },
  {
    name: "Mechatronics",
    short: "MTR",
    intake: 30,
    icon: GraduationCap,
    color: "purple",
  },
];

const pgCourses = [
  {
    title: "M.Tech Computer Science",
    intake: 12,
  },
  {
    title: "M.Tech Mechanical Engineering",
    intake: 12,
  },
  {
    title: "Master of Computer Applications",
    intake: 60,
  },
  {
    title: "Master of Business Administration",
    intake: 60,
  },
];

const ugCourses = [
  {
    title: "BCA General",
    intake: 120,
  },
  {
    title: "BCA Data Science",
    intake: 60,
  },
  {
    title: "BBA General",
    intake: 120,
  },
  {
    title: "BBA Digital Marketing",
    intake: 60,
  },
  {
    title: "BBA Financial Services & Banking",
    intake: 60,
  },
];

function ProgramOffered() {
  return (
    <AcademicLayout
      pageTitle="Program Offered"
      pageSubtitle="Engineering • Management • Computer Applications"
      activePage="programOffered"
    >
      <section className="program-section">

        <div className="section-heading">

          <span>
            01
          </span>

          <h2>
            Undergraduate Engineering Programmes
          </h2>

          <p>
            Explore future-ready engineering
            programmes designed to prepare students
            for innovation, research and industry.
          </p>

        </div>

        <div className="engineering-grid">

          {engineering.map((course) => {

            const Icon = course.icon;

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

                <small>
                  B.Tech
                </small>

                <h3>
                  {course.name}
                </h3>

                <div className="program-bottom">

                  <div>

                    <span>
                      Intake
                    </span>

                    <strong>
                      {course.intake}
                    </strong>

                  </div>

                  <div className="program-badge">

                    {course.short}

                  </div>

                </div>

              </article>

            );

          })}

        </div>

      </section>

      <section className="program-section">

        <div className="section-heading">

          <span>
            02
          </span>

          <h2>
            Postgraduate Programmes
          </h2>

        </div>

        <div className="pg-grid">

          {pgCourses.map((course) => (

            <article
              key={course.title}
              className="pg-card"
            >

              <Laptop
                size={40}
              />

              <h3>
                {course.title}
              </h3>

              <strong>
                Intake : {course.intake}
              </strong>

            </article>

          ))}

        </div>

      </section>

      <section className="program-section">

        <div className="section-heading">

          <span>
            03
          </span>

          <h2>
            Management & Computer Applications
          </h2>

        </div>

        <div className="management-grid">

          {ugCourses.map((course) => (

            <article
              key={course.title}
              className="management-card"
            >

              <Briefcase
                size={34}
              />

              <h3>
                {course.title}
              </h3>

              <p>

                Approved by GGSIPU

              </p>

              <div className="management-footer">

                <Users
                  size={18}
                />

                <span>

                  Intake {course.intake}

                </span>

              </div>

            </article>

          ))}

        </div>

      </section>

      <section className="program-closing">

        <div className="closing-card">

          <small>

            ECHELON INSTITUTE OF TECHNOLOGY

          </small>

          <h2>

            Building Engineers,
            Managers &
            Technology Leaders

          </h2>

          <p>

            EIT offers industry-oriented
            undergraduate and postgraduate
            programmes designed to prepare
            students for leadership,
            innovation and lifelong learning.

          </p>

          <button>

            Apply Now

          </button>

        </div>

      </section>

    </AcademicLayout>
  );
}

export default ProgramOffered;