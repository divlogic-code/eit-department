import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import "./AcademicSidebar/AcademicSidebar.css";

const sidebarItems = [
  {
    title: "Program Offered",
    path: "/program-offered",
    id: "programOffered",
  },
  {
    title: "Academic Calendar",
    path: "/academic-calendar",
    id: "academicCalendar",
  },
  {
    title: "Scheme & Syllabus",
    path: "/scheme-calendar",
    id: "schemeCalendar",
  },
  {
    title: "NBA & NAAC",
    path: "/nba-naac",
    id: "nbaNaac",
  },
];

function AcademicSidebar({
  title = "ACADEMICS",
  active = "",
}) {
  return (
    <div className="academic-sidebar">

      <div className="academic-sidebar-top">

        <small>
          ECHELON
        </small>

        <h3>
          {title}
        </h3>

      </div>

      <div className="academic-sidebar-line" />

      <nav className="academic-sidebar-nav">

        {sidebarItems.map((item) => (

          <Link
            key={item.id}
            to={item.path}
            className={`academic-sidebar-link ${
              active === item.id
                ? "active"
                : ""
            }`}
          >

            <span>
              {item.title}
            </span>

            <ChevronRight
              size={18}
            />

          </Link>

        ))}

      </nav>

      <div className="academic-sidebar-footer">

        <span>
          ECHELON INSTITUTE
        </span>

        <small>
          2007 — PRESENT
        </small>

      </div>

    </div>
  );
}

export default AcademicSidebar;