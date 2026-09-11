import { Link } from "react-router-dom";
import "./Navbar.css";

const departments = [
  ["Computer Science & Engineering", "/cse"],
  ["Department Of Computer Applications", "/computer-applications"],
  ["Humanities & Applied Sciences", "/humanities"],
  ["Department Of Management Studies", "/management"],
  ["Mechanical Engineering", "/mechanical"],
  ["Electronics & Communication Engineering", "/ece"],
  ["Civil Engineering", "/civil"],
];

export default function Navbar() {
  return (
    <nav className="navbar">

      {/* LOGO */}
      <Link to="/" className="navbar-logo">
        <span className="navbar-wordmark">EIT</span>
      </Link>


      <div className="navbar-links">

        {/* =====================================================
            ABOUT US
        ===================================================== */}

        <div className="navbar-dropdown">

          <button className="navbar-link navbar-dropdown-button">
            ABOUT US <span className="nav-arrow">⌄</span>
          </button>

          <div className="department-dropdown-menu">

            <Link to="/about-eit">
              About Echelon
            </Link>

            <Link to="/about-eit#vision-mission">
              Vision & Mission
            </Link>

            <Link to="/chairman">
              Chairman's Message
            </Link>

            <Link to="/director">
              Director's Message
            </Link>

            <Link to="/about-eit#organisational-structure">
              Organisational Structure
            </Link>

            <Link to="/board-of-governors">
              Board Of Governors
            </Link>

            <Link to="/affiliations">
              Affiliations & Approvals
            </Link>

            <Link to="/iso">
              ISO & Certifications
            </Link>

            <Link to="/philosophy">
              Philosophy We Live By
            </Link>

          </div>

        </div>


        {/* =====================================================
            ACADEMICS
        ===================================================== */}

        <div className="navbar-dropdown">

          <button className="navbar-link navbar-dropdown-button">
            ACADEMICS <span className="nav-arrow">⌄</span>
          </button>

          <div className="department-dropdown-menu">

            <Link to="/program-offered">
              Program Offered
            </Link>

            <Link to="/academic-calendar">
              Academic Calendar
            </Link>

            <Link to="/scheme-calendar">
              Scheme Calendar
            </Link>

            <Link to="/nba-naac">
              NBA & NAAC Perspective
            </Link>

          </div>

        </div>


        {/* =====================================================
            DEPARTMENTS
        ===================================================== */}

        <div className="navbar-dropdown">

          <button className="navbar-link navbar-dropdown-button">
            DEPARTMENT <span className="nav-arrow">⌄</span>
          </button>

          <div className="department-dropdown-menu">

            {departments.map(([name, path]) => (
              <Link key={path} to={path}>
                {name}
              </Link>
            ))}

          </div>

        </div>


        {/* =====================================================
            ADMISSIONS
        ===================================================== */}

        <div className="navbar-dropdown">

          <button className="navbar-link navbar-dropdown-button">
            ADMISSIONS <span className="nav-arrow">⌄</span>
          </button>

          <div className="department-dropdown-menu">

            <Link to="/why-echelon">
              Why Echelon
            </Link>

            <Link to="/admission-brochure">
              Admission Brochure
            </Link>

            <a
              href="https://eitfaridabad.com/pdf/admission-procedure.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Admission Procedure
            </a>

            <Link to="/document-checklist">
              Document Check List
            </Link>
            <a
              href="https://echeloninstitute.schoolpay.co.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Online Application
            </a>

            <Link to="/eligibility-criteria">
              Eligibility Criteria
            </Link>

            <Link to="/refund-policy">
              Refund Policy
            </Link>

            <Link to="/anti-ragging">
              Anti-Ragging
            </Link>

            <Link to="/scholarship">
              Scholarship
            </Link>

          </div>

        </div>


        {/* =====================================================
            PLACEMENT
        ===================================================== */}

        <Link to="/placement" className="navbar-link">
          PLACEMENT<span className="nav-arrow">⌄</span>
        </Link>


        {/* =====================================================
            RESEARCH
        ===================================================== */}

        <div className="navbar-dropdown">

          <button className="navbar-link navbar-dropdown-button">
            RESEARCH <span className="nav-arrow">⌄</span>
          </button>

          <div className="department-dropdown-menu">

            <Link to="/research/rd-committee">
              R&D Committee
            </Link>

            <Link to="/research/journal-papers">
              Journal Papers
            </Link>

            <Link to="/research/book-chapters">
              Book / Book Chapters
            </Link>

            <Link to="/research/patents">
              Patent
            </Link>

            <Link to="/research/mous">
              MOUs
            </Link>

            <Link to="/research/fdps">
              FDPs & Funding Agencies
            </Link>

            <Link to="/research/iic">
              IIC
            </Link>

            <Link to="/research/edc">
              EDC Cell
            </Link>

            <Link to="/research/ipr">
              IPR Cell
            </Link>

          </div>

        </div>


        {/* =====================================================
            OTHER
        ===================================================== */}


        <Link to="/contact" className="navbar-link">
          CONTACT<span className="nav-arrow">⌄</span>
        </Link>

        <Link to="/icscci-2027" className="conference-button">
          ICSCCI 2027
        </Link>

      </div>

    </nav>
  );
}