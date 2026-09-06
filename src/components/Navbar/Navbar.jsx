import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="navbar-logo">
        <img
          src="/images/eit-logo.png"
          alt="Echelon Institute of Technology"
        />
      </div>

      {/* NAVIGATION */}
      <div className="navbar-links">

        <a href="#" className="navbar-link">
          ABOUT US
          <span className="nav-arrow">⌄</span>
        </a>

        <a href="#" className="navbar-link">
          ACADEMICS
          <span className="nav-arrow">⌄</span>
        </a>

        <div className="navbar-dropdown">
          <button className="navbar-link navbar-dropdown-button">
            DEPARTMENT
            <span className="nav-arrow">⌄</span>
          </button>

          <div className="department-dropdown-menu">

            <a href="/cse">
              Computer Science & Engineering
            </a>

            <a href="/computer-applications">
              Department Of Computer Applications
            </a>

            <a href="/humanities">
              Humanities & Applied Sciences
            </a>

            <a href="/management">
              Department Of Management Studies
            </a>

            <a href="/mechanical">
              Mechanical Engineering
            </a>

            <a href="/ece">
              Electronics & Communication Engineering
            </a>

            <a href="/civil">
              Civil Engineering
            </a>

          </div>
        </div>

        <a href="#" className="navbar-link">
          ADMISSIONS
          <span className="nav-arrow">⌄</span>
        </a>

        <a href="#" className="navbar-link">
          PLACEMENT
          <span className="nav-arrow">⌄</span>
        </a>

        <a href="#" className="navbar-link">
          RESEARCH
          <span className="nav-arrow">⌄</span>
        </a>

        <a href="#" className="conference-button">
          ICSCI 2027
        </a>

      </div>
    </nav>
  );
};

export default Navbar;