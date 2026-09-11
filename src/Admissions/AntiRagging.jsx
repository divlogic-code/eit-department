import { ExternalLink, FileCheck, ShieldAlert } from "lucide-react";

import AdmissionsSidebar from "./AdmissionsSidebar";
import "./AntiRagging/AntiRagging.css";

const affidavitLink =
  "https://www.antiragging.in/affidavit_affiliated_form.php";

const committeeMembers = [
  {
    name: "Prof. Arvind Kumar Pandey",
    designation: "Director",
    position: "Chairperson",
  },
  {
    name: "Prof. M. K. Saini",
    designation: "Professor",
    position: "Member",
  },
  {
    name: "Ms. Sankeeta Jha",
    designation: "Assistant Professor (Girl’s Hostel Warden)",
    position: "Member",
  },
  {
    name: "Mr. Harsh Saxena",
    designation: "Assistant Professor (Boy’s Hostel Warden)",
    position: "Member",
  },
  {
    name: "Dr. Sheetal Prasad",
    designation: "Professor",
    position: "Member",
  },
  {
    name: "Dr. Vandana Agarwal",
    designation: "Professor",
    position: "Member",
  },
  {
    name: "Ms. Ranjana Sahoo",
    designation: "Parent",
    position: "Member",
  },
  {
    name: "Mr. Rajesh Kaushik",
    designation: "Member from Civil Administration",
    position: "Member",
  },
  {
    name: "Mr. Santram",
    designation: "Police Administration",
    position: "Member",
  },
  {
    name: "Mr. Ravinder",
    designation: "Local Media Representative",
    position: "Member",
  },
  {
    name: "Mr. Bij Bhushan Goyal",
    designation: "NGO involved in youth activity",
    position: "Member",
  },
  {
    name: "Mr. Gautam",
    designation: "Non-Teaching Staff",
    position: "Member",
  },
  {
    name: "Ms. Sashmita",
    designation: "Non-Teaching Staff",
    position: "Member",
  },
  {
    name: "Ms. Rajnadani",
    designation: "Fresher Student",
    position: "Member",
  },
  {
    name: "Mr. Nishant",
    designation: "Senior Student",
    position: "Member",
  },
];

const studentUndertaking = [
  `I, having been admitted to Programme/Stream at (Institute/College), S/D of Mr./Mrs./Ms., have read UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009, (hereinafter called the "Regulations") and fully understood the provisions contained in the said Regulations.`,

  `I have, in particular, perused clause 3 of the Regulations and am aware as to what constitutes ragging.`,

  `I have also, in particular, perused clause 5 and clause 6.1 of the Regulations and am fully aware of the penal and administrative action that is liable to be taken against me in case I am found guilty of or abetting ragging, actively or passively, or being part of a conspiracy to promote ragging.`,

  `I hereby solemnly aver and undertake that`,
];

const parentUndertaking = [
  `I, Mr./Mrs./Ms. (full name of parent/guardian), father/mother/guardian of (full name of student with admission/registration/enrolment number), having been admitted to (name of the institution), have read UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009, (hereinafter called the "Regulations") and fully understood the provisions contained in the said Regulations.`,

  `I have, in particular, perused clause 3 of the Regulations and am aware as to what constitutes ragging.`,

  `I have also, in particular, perused clause 5 and clause 6.1 of the Regulations and am fully aware of the penal and administrative action that is liable to be taken against my ward in case he/she is found guilty of or abetting ragging, actively or passively, or being part of a conspiracy to promote ragging.`,

  `I hereby solemnly aver and undertake that`,
];

const affidavitImages = [
  {
    src: "/images/anti-ragging/affidavit-1.jpg",
    alt: "Anti Ragging Affidavit Form 1",
  },
  {
    src: "/images/anti-ragging/affidavit-2.jpg",
    alt: "Anti Ragging Affidavit Form 2",
  },
  {
    src: "/images/anti-ragging/affidavit-3.jpg",
    alt: "Anti Ragging Affidavit Form 3",
  },
  {
    src: "/images/anti-ragging/affidavit-4.jpg",
    alt: "Anti Ragging Affidavit Form 4",
  },
];

function AntiRagging() {
  return (
    <div className="anti-ragging-page">
      <AdmissionsSidebar />

      {/* HERO */}
      <section className="anti-ragging-hero">
        <video
          className="anti-ragging-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/college-campus.mp4" type="video/mp4" />
        </video>

        <div className="anti-ragging-hero-overlay" />

        <div className="anti-ragging-hero-content">
          <span className="anti-ragging-eyebrow">
            ADMISSIONS • STUDENT SAFETY
          </span>

          <h1>Anti-Ragging</h1>

          <p>
            Undertaking, awareness and institutional commitment towards a
            ragging-free campus.
          </p>
        </div>

        <div className="anti-ragging-hero-bottom">
          <span>ACADEMIC SESSION</span>
          <strong>2026–27</strong>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="anti-ragging-main">
        <div className="anti-ragging-container">
          {/* INTRO */}
          <section className="anti-ragging-intro">
            <div className="anti-ragging-section-kicker">
              <ShieldAlert size={18} />
              <span>ANTI-RAGGING UNDERTAKING</span>
            </div>

            <h2>Academic Session 2026–27</h2>

            <p>
              In pursuance of UGC DO letter No. F.1-15/2009 (ARC) Pt. III
              dated 14th December, 2023, it is compulsory for each student
              and every parent to submit an online undertaking every academic
              year at{" "}
              <a
                href="https://www.antiragging.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.antiragging.in
                <ExternalLink size={14} />
              </a>
              .
            </p>

            <p>
              After registration, the candidates will receive an email with
              his/her registration number and then candidate will forward that
              e-mail to the Nodal Officer in the University/College at the
              time of reporting in the USSs/Affiliated Institutes/Colleges.
            </p>

            <p>
              It is again reiterated that it is compulsory/mandatory for each
              student to submit an online undertaking at{" "}
              <a
                href="https://www.antiragging.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.antiragging.in
                <ExternalLink size={14} />
              </a>
              . Subsequently, an Anti Ragging Undertaking Reference Number is
              generated by the UGC which is required to be filled by the
              candidates in the online application form.
            </p>
          </section>

          {/* IMPORTANT NOTE */}
          <section className="anti-ragging-warning">
            <div className="anti-ragging-warning-icon">
              <ShieldAlert size={25} />
            </div>

            <div>
              <span>IMPORTANT NOTE</span>

              <p>
                IT IS ONCE AGAIN RETIERATED FOR THE BENEFIT OF ALL THE
                STAKEHOLDERS THAT RAGGING IS A CRIMINAL OFFENCE AND THE
                CULPRITS WILL ATTRACT PUNITIVE ACTION AS MENTIONED IN THE
                SAID UGC REGULATIONS.
              </p>
            </div>
          </section>

          {/* STUDENT UNDERTAKING */}
          <section className="anti-ragging-document">
            <div className="anti-ragging-document-heading">
              <div className="anti-ragging-document-number">01</div>

              <div>
                <span>UNDERTAKING BY THE STUDENT</span>
                <h2>With Respect to Anti Ragging</h2>
              </div>
            </div>

            <div className="anti-ragging-document-body">
              {studentUndertaking.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <div className="anti-ragging-clause">
                <strong>a)</strong>
                <p>
                  I will not indulge in any behavior or act that may be
                  constituted as ragging under clause 3 of the Regulations.
                </p>
              </div>

              <div className="anti-ragging-clause">
                <strong>b)</strong>
                <p>
                  I will not participate in or abet or propagate through any
                  act of commission or omission that may be constituted as
                  ragging under clause 3 of the Regulations.
                </p>
              </div>

              <div className="anti-ragging-numbered-clause">
                <strong>5.</strong>
                <p>
                  I hereby affirm that, if found guilty of ragging, I am liable
                  for punishment according to clause 9.1 of the Regulations,
                  without prejudice to any other criminal action that may be
                  taken against me under any penal law or any law for the time
                  being in force.
                </p>
              </div>

              <div className="anti-ragging-numbered-clause">
                <strong>6.</strong>
                <p>
                  I hereby declare that I have not been expelled or debarred
                  from admission in any institution in the country on account
                  of being found guilty of, abetting or being part of a
                  conspiracy to promote, ragging; and further affirm that, in
                  case the declaration is found to be untrue, I am aware that
                  my admission is liable to be cancelled.
                </p>
              </div>

              <div className="anti-ragging-declaration">
                <p>
                  <strong>Declared this day of month of year.</strong>
                </p>
              </div>

              <div className="anti-ragging-verification">
                <h3>Verification</h3>

                <p>
                  <strong>Signature of deponent</strong>
                </p>

                <div className="anti-ragging-fields">
                  <span>Name:</span>
                  <span>Address:</span>
                  <span>Telephone/Mobile No.:</span>
                </div>

                <p>
                  Verified that the contents of this affidavit are true to the
                  best of my knowledge and no part of the affidavit is false
                  and nothing has been concealed or misstated therein.
                </p>

                <p>
                  Verified at on this the of Signature of deponent
                </p>
              </div>
            </div>
          </section>

          {/* PARENT UNDERTAKING */}
          <section className="anti-ragging-document">
            <div className="anti-ragging-document-heading">
              <div className="anti-ragging-document-number">02</div>

              <div>
                <span>UNDERTAKING BY PARENT/GUARDIAN</span>
                <h2>With Respect of Anti Ragging</h2>
              </div>
            </div>

            <div className="anti-ragging-document-body">
              <div className="anti-ragging-appendix">
                <span>APPENDIX 7</span>
              </div>

              {parentUndertaking.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <div className="anti-ragging-clause">
                <strong>a)</strong>
                <p>
                  My ward will not indulge in any behave our or act that may be
                  constituted as ragging under clause 3 of the Regulations.
                </p>
              </div>

              <div className="anti-ragging-clause">
                <strong>b)</strong>
                <p>
                  My ward will not participate in or abet or propagate through
                  any act of commission or omission that may be constituted as
                  ragging under clause 3 of the Regulations.
                </p>
              </div>

              <div className="anti-ragging-numbered-clause">
                <strong>5.</strong>
                <p>
                  I hereby affirm that, if found guilty of ragging, my ward is
                  liable for punishment according to clause 9.1 of the
                  Regulations, without prejudice to any other criminal action
                  that may be taken against my ward under any penal law or any
                  law for the time being in force.
                </p>
              </div>

              <div className="anti-ragging-numbered-clause">
                <strong>6.</strong>
                <p>
                  I hereby declare that my ward has not been expelled or
                  debarred from admission in any institution in the country on
                  account of being found guilty of, abetting or being part of a
                  conspiracy to promote, ragging; and further affirm that, in
                  case the declaration is found to be untrue, the admission of
                  my ward is liable to be cancelled.
                </p>
              </div>

              <div className="anti-ragging-declaration">
                <p>
                  <strong>Declared this day of month of year.</strong>
                </p>
              </div>

              <div className="anti-ragging-verification">
                <h3>Verification</h3>

                <p>
                  <strong>Signature of deponent</strong>
                </p>

                <div className="anti-ragging-fields">
                  <span>Name:</span>
                  <span>Address:</span>
                  <span>Telephone/Mobile No.:</span>
                </div>

                <p>
                  Verified that the contents of this affidavit are true to the
                  best of my knowledge and no part of the affidavit is false
                  and nothing has been concealed or misstated therein.
                </p>

                <p>
                  Verified at on this the of.
                  <br />
                  Signature of deponent
                </p>
              </div>
            </div>
          </section>

          {/* COMMITTEE */}
          <section className="anti-ragging-committee">
            <div className="anti-ragging-section-heading">
              <div>
                <span>INSTITUTIONAL OVERSIGHT</span>
                <h2>Anti Ragging Committee</h2>
              </div>

              <div className="anti-ragging-section-line" />
            </div>

            <div className="anti-ragging-table-wrap">
              <table className="anti-ragging-table">
                <thead>
                  <tr>
                    <th>Name of the Faculty/Staff Members</th>
                    <th>Designation</th>
                    <th>Position in the Committee</th>
                  </tr>
                </thead>

                <tbody>
                  {committeeMembers.map((member) => (
                    <tr key={member.name}>
                      <td>{member.name}</td>
                      <td>{member.designation}</td>
                      <td>{member.position}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* AFFIDAVIT FORMS */}
          <section className="anti-ragging-affidavit">
            <div className="anti-ragging-section-heading">
              <div>
                <span>ANTI-RAGGING DOCUMENTATION</span>
                <h2>Affiliated Institute Affidavit Form</h2>
              </div>

              <div className="anti-ragging-section-line" />
            </div>

            <div className="anti-ragging-affidavit-intro">
              <FileCheck size={20} />

              <p>
                Click any of the documents below to access the official
                Anti-Ragging Affidavit Form.
              </p>

              <a
                href={affidavitLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Affidavit Form
                <ExternalLink size={15} />
              </a>
            </div>

            <div className="anti-ragging-affidavit-grid">
              {affidavitImages.map((image, index) => (
                <a
                  key={image.src}
                  href={affidavitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anti-ragging-affidavit-card"
                >
                  <div className="anti-ragging-affidavit-image">
                    <img src={image.src} alt={image.alt} />
                  </div>

                  <div className="anti-ragging-affidavit-card-footer">
                    <span>Anti-Ragging-FORM </span>
                    <ExternalLink size={16} />
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AntiRagging;