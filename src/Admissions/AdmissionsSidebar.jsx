import { useEffect, useState } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import "./AdmissionsSidebar.css";

const sidebarItems = [
  {
    label: "Why Echelon",
    target: "/why-echelon",
  },
  {
    label: "Admission Brochure",
    target: "/admission-brochure",
  },
  {
    label: "Admission Procedure",
    target: "https://eitfaridabad.com/pdf/admission-procedure.pdf",
    external: true,
  },
  {
    label: "Document Check List",
    target: "/document-checklist",
  },
  {
    label: "Online Application",
    target: "https://echeloninstitute.schoolpay.co.in/",
    external: true,
  },
  {
    label: "Eligibility Criteria",
    target: "/eligibility-criteria",
  },
  {
    label: "Refund Policy",
    target: "/refund-policy",
  },
  {
    label: "Anti-Ragging",
    target: "/anti-ragging",
  },
  {
    label: "Fee Reimbursement",
    target: "/fee-reimbursement",
  },
  {
    label: "Fee Structure",
    target: "/fee-structure",
  },
  {
    label: "Scholarship",
    target: "/scholarship",
  },
  {
    label: "IPU CET 2026-27",
    target: "/ipu-cet",
  },
];

function AdmissionsSidebar() {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero =
        document.querySelector(".why-echelon-hero") ||
        document.querySelector(".admission-brochure-hero") ||
        document.querySelector(".document-checklist-hero") ||
        document.querySelector(".online-application-hero") ||
        document.querySelector(".eligibility-criteria-hero") ||
        document.querySelector(".refund-policy-hero") ||
        document.querySelector(".anti-ragging-hero") ||
        document.querySelector(".fee-reimbursement-hero") ||
        document.querySelector(".fee-structure-hero") ||
        document.querySelector(".scholarship-hero") ||
        document.querySelector(".ipu-cet-hero");

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
  }, [location.pathname]);

  return (
    <aside
      className={`admissions-sidebar ${
        showSidebar ? "sidebar-visible" : ""
      }`}
    >
      <div className="admissions-sidebar-inner">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="admissions-sidebar-heading">
          <span>ADMISSIONS</span>
          <small>EIT</small>
        </div>

        <div className="admissions-sidebar-line" />


        {/* =====================================================
            NAVIGATION
        ===================================================== */}

        <nav className="admissions-sidebar-nav">

          {sidebarItems.map((item) => {

            /* ============================
               EXTERNAL LINKS
               ============================ */

            if (item.external) {
              return (
                <a
                  key={item.label}
                  href={item.target}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="admissions-sidebar-link external-link"
                >
                  <span>{item.label}</span>

                  <ExternalLink size={15} />
                </a>
              );
            }


            /* ============================
               INTERNAL LINKS
               ============================ */

            const isActive =
              location.pathname === item.target;

            return (
              <Link
                key={item.label}
                to={item.target}
                className={`admissions-sidebar-link ${
                  isActive ? "active" : ""
                }`}
              >
                <span>{item.label}</span>

                <ChevronRight size={16} />
              </Link>
            );
          })}

        </nav>


        {/* =====================================================
            FOOTER
        ===================================================== */}

        <div className="admissions-sidebar-footer">
          <span>ECHELON</span>
          <span>ADMISSIONS 2026–27</span>
        </div>

      </div>
    </aside>
  );
}

export default AdmissionsSidebar;