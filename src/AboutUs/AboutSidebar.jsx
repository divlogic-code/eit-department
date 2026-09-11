import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const sidebarItems = [
  {
    label: "About Echelon",
    target: "/about-eit",
  },
  {
    label: "Vision & Mission",
    target: "/about-eit#vision-mission",
  },
  {
    label: "Chairman's Message",
    target: "/chairman",
  },
  {
    label: "Director's Message",
    target: "/director",
  },
  {
    label: "Organisational Structure",
    target: "/about-eit#organisational-structure",
  },
  {
    label: "Board Of Governors",
    target: "/board-of-governors",
  },
  {
    label: "Affiliations & Approvals",
    target: "/affiliations",
  },
  {
    label: "Philosophy We Live By",
    target: "/philosophy",
  },
];

function AboutSidebar() {
  const location = useLocation();

  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero =
        document.querySelector(".chairman-hero") ||
        document.querySelector(".director-hero") ||
        document.querySelector(".board-hero") ||
        document.querySelector(".affiliations-hero") ||
        document.querySelector(".philosophy-hero") ||
        document.querySelector(".about-eit-hero");

      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;

        setShowSidebar(heroBottom <= 80);
      } else {
        setShowSidebar(window.scrollY > 180);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <aside
      className={`about-eit-sidebar ${
        showSidebar ? "sidebar-visible" : ""
      }`}
    >
      <div className="about-eit-sidebar-inner">

        <div className="about-eit-sidebar-heading">
          <span>ABOUT US</span>
          <small>EIT</small>
        </div>

        <div className="about-eit-sidebar-line" />

        <nav>
          {sidebarItems.map((item) => {
            const isHashLink = item.target.includes("#");

            const targetPath = item.target.split("#")[0];

            const isActive =
              location.pathname === targetPath &&
              (
                !isHashLink ||
                location.pathname === "/about-eit"
              );

            return (
              <Link
                key={item.label}
                to={item.target}
                className={`about-eit-sidebar-link ${
                  isActive ? "active" : ""
                }`}
              >
                <span>{item.label}</span>

                <ChevronRight size={16} />
              </Link>
            );
          })}
        </nav>

        <div className="about-eit-sidebar-footer">
          <span>ECHELON</span>
          <span>2007 — PRESENT</span>
        </div>

      </div>
    </aside>
  );
}

export default AboutSidebar;