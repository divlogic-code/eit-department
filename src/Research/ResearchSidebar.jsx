import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { useState } from "react";
import "./ResearchSidebar.css";

const items = [
  ["/research", "R&D Overview"],
  ["/research/journal-papers", "Journal Papers"],
  ["/research/book-chapters", "Book/Book Chapters"],
  ["/research/patents", "Patent"],
  ["/research/mous", "MOUs"],
  ["/research/fdps", "FDPs & Funding Agencies"],
  ["/research/iic", "IIC"],
  ["/research/edc", "EDC Cell"],
  ["/research/ipr", "IPR Cell"],
];

export default function ResearchSidebar() {
  const [show, setShow] = useState(false);

  return (
    <>
      <aside className={`research-sidebar ${show ? "show" : ""}`}>
        <header>
          <strong>Research & Development</strong>

          <button
            className="research-sidebar-close"
            onClick={() => setShow(false)}
            aria-label="Close research menu"
          >
            <X size={19} />
          </button>
        </header>

        <nav>
          {items.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/research"}
              onClick={() => setShow(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <button
        className="research-mobile-menu"
        onClick={() => setShow((value) => !value)}
      >
        {show ? "Close Research Menu" : "Research & Development"}
      </button>
    </>
  );
}