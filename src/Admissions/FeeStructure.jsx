import {
  Building2,
  Calculator,
  GraduationCap,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";

import AdmissionsSidebar from "./AdmissionsSidebar";
import "./FeeStructure/FeeStructure.css";

const feeRows = [
  {
    program: "B.Tech",
    academicFee: 150700,
    security: 10000,
    alumni: 2000,
    university: 20000,
    exam: 3000,
    innovation: 500,
    welfare: 1000,
    firstYear: 187200,
    subsequentYear: 175200,
  },
  {
    program: "BBA",
    academicFee: 113200,
    security: 10000,
    alumni: 2000,
    university: 20000,
    exam: 3000,
    innovation: 500,
    welfare: 1000,
    firstYear: 149700,
    subsequentYear: 137700,
  },
  {
    program: "BCA",
    academicFee: 111100,
    security: 10000,
    alumni: 2000,
    university: 20000,
    exam: 3000,
    innovation: 500,
    welfare: 1000,
    firstYear: 147600,
    subsequentYear: 135600,
  },
  {
    program: "M.Tech",
    academicFee: 105000,
    security: 10000,
    alumni: 2000,
    university: 20000,
    exam: 3000,
    innovation: 500,
    welfare: 1000,
    firstYear: 141500,
    subsequentYear: 129500,
  },
  {
    program: "MBA",
    academicFee: 185200,
    security: 10000,
    alumni: 2000,
    university: 20000,
    exam: 3000,
    innovation: 500,
    welfare: 1000,
    firstYear: 221700,
    subsequentYear: 209700,
  },
  {
    program: "MCA",
    academicFee: 185200,
    security: 10000,
    alumni: 2000,
    university: 20000,
    exam: 3000,
    innovation: 500,
    welfare: 1000,
    firstYear: 221700,
    subsequentYear: 209700,
  },
];

const formatCurrency = (value) =>
  `₹${value.toLocaleString("en-IN")}`;

function FeeStructure() {
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
          <source src="/videos/college-campus.mp4" type="video/mp4" />
        </video>

        <div className="fee-structure-hero-overlay" />

        <div className="fee-structure-hero-content">
          <span className="fee-structure-eyebrow">
            Admissions • 2026-27
          </span>

          <h1>Fees Structure</h1>

          <p>
            Transparent and structured fee information for
            undergraduate and postgraduate programmes.
          </p>

          <div className="fee-structure-hero-line" />
        </div>
      </section>

      {/* INTRO */}
      <section className="fee-structure-intro section-shell">
        <div className="fee-structure-intro-icon">
          <IndianRupee size={28} strokeWidth={1.8} />
        </div>

        <div>
          <span className="section-kicker">Fee Information</span>

          <h2>
            Fees Structure <span>(2026-27)</span>
          </h2>

          <p>
            The fee structure below provides a programme-wise
            breakdown of the applicable academic and institutional
            charges.
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="fee-structure-highlights section-shell">
        <div className="fee-highlight-card">
          <div className="fee-highlight-icon">
            <GraduationCap size={24} />
          </div>

          <div>
            <h3>UG & PG Programmes</h3>
            <p>
              Fee details for undergraduate and postgraduate
              programmes offered by the institute.
            </p>
          </div>
        </div>

        <div className="fee-highlight-card">
          <div className="fee-highlight-icon">
            <Calculator size={24} />
          </div>

          <div>
            <h3>Detailed Breakdown</h3>
            <p>
              Academic, university, examination and other
              applicable charges are listed separately.
            </p>
          </div>
        </div>

        <div className="fee-highlight-card">
          <div className="fee-highlight-icon">
            <ShieldCheck size={24} />
          </div>

          <div>
            <h3>Transparent Structure</h3>
            <p>
              Review the complete fee components before
              proceeding with admission.
            </p>
          </div>
        </div>
      </section>

      {/* FEE TABLE */}
      <section className="fee-structure-table-section section-shell">
        <div className="fee-section-heading">
          <div>
            <span className="section-kicker">Programme Wise</span>

            <h2>Fee Structure</h2>
          </div>

          <div className="fee-session-label">
            <Building2 size={17} />
            <span>Academic Session 2025-26</span>
          </div>
        </div>

        <div className="fee-table-wrapper">
          <table className="fee-table">
            <thead>
              <tr>
                <th>Programme</th>
                <th>
                  Academic
                  <br />
                  Fee
                </th>
                <th>
                  Security
                  <br />
                  Deposit
                </th>
                <th>
                  Alumni
                  <br />
                  Fee
                </th>
                <th>
                  University
                  <br />
                  Fee
                </th>
                <th>
                  Exam
                  <br />
                  Fee
                </th>
                <th>
                  Innovation
                  <br />
                  Fee
                </th>
                <th>
                  Student
                  <br />
                  Welfare
                </th>
                <th>
                  First
                  <br />
                  Year
                </th>
                <th>
                  Subsequent
                  <br />
                  Year
                </th>
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
                  <span>Programme</span>
                  <h3>{row.program}</h3>
                </div>

                <GraduationCap size={25} />
              </div>

              <div className="fee-mobile-details">
                <div>
                  <span>Academic Fee</span>
                  <strong>
                    {formatCurrency(row.academicFee)}
                  </strong>
                </div>

                <div>
                  <span>Security Deposit</span>
                  <strong>
                    {formatCurrency(row.security)}
                  </strong>
                </div>

                <div>
                  <span>Alumni Fee</span>
                  <strong>
                    {formatCurrency(row.alumni)}
                  </strong>
                </div>

                <div>
                  <span>University Fee</span>
                  <strong>
                    {formatCurrency(row.university)}
                  </strong>
                </div>

                <div>
                  <span>Exam Fee</span>
                  <strong>
                    {formatCurrency(row.exam)}
                  </strong>
                </div>

                <div>
                  <span>Innovation Fee</span>
                  <strong>
                    {formatCurrency(row.innovation)}
                  </strong>
                </div>

                <div>
                  <span>Student Welfare</span>
                  <strong>
                    {formatCurrency(row.welfare)}
                  </strong>
                </div>
              </div>

              <div className="fee-mobile-totals">
                <div>
                  <span>First Year</span>
                  <strong>
                    {formatCurrency(row.firstYear)}
                  </strong>
                </div>

                <div>
                  <span>Subsequent Year</span>
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
          <h3>Fee Information</h3>

          <p>
            The fee structure displayed above follows the
            supplied institute fee information. Students are
            advised to verify the applicable fees and payment
            requirements with the institute at the time of
            admission.
          </p>
        </div>
      </section>
    </div>
  );
}

export default FeeStructure;