import {
  Building2,
  Calculator,
  GraduationCap,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";

import AdmissionsSidebar from "./AdmissionsSidebar";
import feeStructure from "../data/admissions/feeStructure";

import "./FeeStructure/FeeStructure.css";

const icons = {
  graduation: GraduationCap,
  calculator: Calculator,
  shield: ShieldCheck,
};

const formatCurrency = (value) =>
  `₹${value.toLocaleString("en-IN")}`;

function FeeStructure() {
  const {
    hero,
    intro,
    highlights,
    table,
    feeRows,
    mobileLabels,
    note,
  } = feeStructure;

  return (
    <div className="fee-structure-page">

      <AdmissionsSidebar />

      {/* HERO */}

      <section className="fee-structure-hero">

        <video
          className="fee-structure-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src={hero.video}
            type="video/mp4"
          />
        </video>

        <div className="fee-structure-hero-overlay" />

        <div className="fee-structure-hero-content">

          <span className="fee-structure-eyebrow">
            {hero.eyebrow}
          </span>

          <h1>
            {hero.title}
          </h1>

          <p>
            {hero.description}
          </p>

          <div className="fee-structure-hero-line" />

        </div>

      </section>


      {/* INTRO */}

      <section className="fee-structure-intro section-shell">

        <div className="fee-structure-intro-icon">
          <IndianRupee
            size={28}
            strokeWidth={1.8}
          />
        </div>

        <div>

          <span className="section-kicker">
            {intro.kicker}
          </span>

          <h2>
            {intro.title}{" "}
            <span>{intro.session}</span>
          </h2>

          <p>
            {intro.description}
          </p>

        </div>

      </section>


      {/* HIGHLIGHTS */}

      <section className="fee-structure-highlights section-shell">

        {highlights.map((item) => {
          const Icon = icons[item.type];

          return (
            <div
              className="fee-highlight-card"
              key={item.title}
            >

              <div className="fee-highlight-icon">
                <Icon size={24} />
              </div>

              <div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            </div>
          );
        })}

      </section>


      {/* FEE TABLE */}

      <section className="fee-structure-table-section section-shell">

        <div className="fee-section-heading">

          <div>

            <span className="section-kicker">
              {table.kicker}
            </span>

            <h2>
              {table.title}
            </h2>

          </div>

          <div className="fee-session-label">

            <Building2 size={17} />

            <span>
              {table.session}
            </span>

          </div>

        </div>


        <div className="fee-table-wrapper">

          <table className="fee-table">

            <thead>

              <tr>

                {table.columns.map((column) => (
                  <th key={column.label}>

                    {column.label}

                    {column.subLabel && (
                      <>
                        <br />
                        {column.subLabel}
                      </>
                    )}

                  </th>
                ))}

              </tr>

            </thead>


            <tbody>

              {feeRows.map((row) => (
                <tr key={row.program}>

                  <td className="program-name">
                    <span>{row.program}</span>
                  </td>

                  <td>{formatCurrency(row.academicFee)}</td>
                  <td>{formatCurrency(row.security)}</td>
                  <td>{formatCurrency(row.alumni)}</td>
                  <td>{formatCurrency(row.university)}</td>
                  <td>{formatCurrency(row.exam)}</td>
                  <td>{formatCurrency(row.innovation)}</td>
                  <td>{formatCurrency(row.welfare)}</td>

                  <td className="total-cell">
                    {formatCurrency(row.firstYear)}
                  </td>

                  <td className="subsequent-cell">
                    {formatCurrency(row.subsequentYear)}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>


        {/* MOBILE CARD VIEW */}

        <div className="fee-mobile-cards">

          {feeRows.map((row) => (
            <article
              className="fee-mobile-card"
              key={row.program}
            >

              <div className="fee-mobile-card-header">

                <div>

                  <span>
                    {mobileLabels.programme}
                  </span>

                  <h3>
                    {row.program}
                  </h3>

                </div>

                <GraduationCap size={25} />

              </div>


              <div className="fee-mobile-details">

                <div>
                  <span>{mobileLabels.academicFee}</span>
                  <strong>{formatCurrency(row.academicFee)}</strong>
                </div>

                <div>
                  <span>{mobileLabels.security}</span>
                  <strong>{formatCurrency(row.security)}</strong>
                </div>

                <div>
                  <span>{mobileLabels.alumni}</span>
                  <strong>{formatCurrency(row.alumni)}</strong>
                </div>

                <div>
                  <span>{mobileLabels.university}</span>
                  <strong>{formatCurrency(row.university)}</strong>
                </div>

                <div>
                  <span>{mobileLabels.exam}</span>
                  <strong>{formatCurrency(row.exam)}</strong>
                </div>

                <div>
                  <span>{mobileLabels.innovation}</span>
                  <strong>{formatCurrency(row.innovation)}</strong>
                </div>

                <div>
                  <span>{mobileLabels.welfare}</span>
                  <strong>{formatCurrency(row.welfare)}</strong>
                </div>

              </div>


              <div className="fee-mobile-totals">

                <div>
                  <span>{mobileLabels.firstYear}</span>
                  <strong>
                    {formatCurrency(row.firstYear)}
                  </strong>
                </div>

                <div>
                  <span>{mobileLabels.subsequentYear}</span>
                  <strong>
                    {formatCurrency(row.subsequentYear)}
                  </strong>
                </div>

              </div>

            </article>
          ))}

        </div>

      </section>


      {/* NOTE */}

      <section className="fee-structure-note section-shell">

        <div className="fee-note-mark">
          !
        </div>

        <div>

          <h3>
            {note.title}
          </h3>

          <p>
            {note.description}
          </p>

        </div>

      </section>

    </div>
  );
}

export default FeeStructure;