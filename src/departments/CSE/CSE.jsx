import DepartmentLayout from "../../components/DepartmentLayout/DepartmentLayout";
import { departments } from "../../data/departments";
import "../../styles/HODCard.css";



const CSE = () => {
  const department = departments.CSE;

  const laboratories = [
    ["Design and Algorithm Lab", 35],
    ["Network Lab & IT Workshop", 35],
    ["Programming Lab - I", 35],
    ["Programming Lab - II", 35],
    ["DBMS Lab", 35],
    ["Project Lab", 50],
    ["Research Lab", 20],
  ];

  return (
    <DepartmentLayout department={department}>

        {/* 01 — OVERVIEW */}
        <section id="section-0" className="department-section overview-section">

          <div className="overview-header">

            <div className="section-number">
              01 / OVERVIEW
            </div>

            <h2 className="section-title">
              Computer Science
              <span>& Engineering</span>
            </h2>

          </div>


          <div className="overview-content">

            <div className="overview-intro">
              <span className="overview-line"></span>

              <p>
                The Department of Computer Science and Engineering is enriched
                with competent and well qualified faculty members to bring out
                the best in students. Ever since its inception, the Department
                has always been on a high growth pace with a strong dedication
                to provide engineering education.
              </p>
            </div>


            <div className="overview-details">

              <div className="overview-detail">
                <span className="detail-number">01</span>

                <p>
                  The department has well equipped laboratories with internet,
                  web application facilities accessible on LAN and Wi-Fi are
                  available for students to provide them hands-on experience
                  on latest softwares and technological tools used in the
                  industries.
                </p>
              </div>


              <div className="overview-detail">
                <span className="detail-number">02</span>

                <p>
                  Seminars, corporate training, workshops are conducted by
                  experts to prepare students as future software professionals.
                  PDP classes are conducted to pour add-ons to their technical
                  skills. Many of our students graduated through campus, find
                  placements in more than one organizations.
                </p>
              </div>

            </div>

          </div>


          <div className="overview-footer">

            <span>COMPUTER SCIENCE & ENGINEERING</span>

            <span>ECHELON INSTITUTE OF TECHNOLOGY</span>

          </div>

        </section>


      {/* 02 — HOD'S MESSAGE */}
      <section id="section-1" className="department-section hod-section">

        <div className="hod-top">

          <div className="section-number">
            02 / HOD'S MESSAGE
          </div>

          <div className="hod-heading">
            <span>WORDS FROM</span>
            <h2>
              The Head
              <em>of Department</em>
            </h2>
          </div>

        </div>

        <div className="hod-layout">

          <div className="hod-profile">

            <div className="hod-portrait">
              <img
                src="https://eitfaridabad.com/images/hod/cse-hod.png"
                alt="Dr. Manisha Vashisht"
                className="hod-portrait-image"
                loading="lazy"
              />

              <div className="hod-portrait-number">
                02
              </div>
            </div>

            <div className="hod-name">
              <span>HEAD OF DEPARTMENT</span>
              <h3>
                Department of Computer Science
                & Engineering
              </h3>
            </div>

          </div>

          <div className="hod-message">

            <div className="quote-mark">“</div>

            <p>
              Department of Computer Science & Engineering commits to work
              towards developing Engineers with a rich blend of competent,
              technical, managerial and social skills and contribute to nation
              building. Department places emphasis on all the important aspects
              of computers such as Computer Networks, Mobile Communication,
              Algorithm Design, Operating System, Advance Database Systems,
              Theory of Computation, Computer Graphics, Machine Learning,
              Data Science and many more.
            </p>

            <div className="hod-signature">
              <span>CSE DEPARTMENT</span>
              <strong>ECHELON INSTITUTE OF TECHNOLOGY</strong>
            </div>

          </div>

        </div>

      </section>


      {/* 03 — VISION & MISSION */}
      <section id="section-2" className="department-section vision-section">

        <div className="vision-header">

          <div className="section-number">
            03 / VISION & MISSION
          </div>

          <h2 className="vision-title">
            Direction
            <span>& Purpose</span>
          </h2>

        </div>

        <div className="vision-grid">

          {/* VISION */}
          <article className="vision-card vision-main-card">

            <div className="vision-card-top">
              <span>01</span>
              <small>OUR VISION</small>
            </div>

            <div className="vision-icon">
              ↗
            </div>

            <p>
              To develop competent computer professionals who solve real-world
              problems through continuous learning and adaptive to rapid changes
              in computer science and engineering with ethical, social, and
              managerial capabilities.
            </p>

            <div className="vision-card-footer">
              <span>CSE / VISION</span>
              <span>01</span>
            </div>

          </article>


          {/* MISSION */}
          <article className="mission-card">

            <div className="mission-heading">
              <span>02</span>

              <div>
                <small>OUR MISSION</small>
                <h3>
                  What We
                  <em>Commit To</em>
                </h3>
              </div>
            </div>

            <div className="mission-list">

              <div className="mission-item">
                <span>01</span>
                <p>
                  To produce industry-ready professionals for successful careers
                  in computer science and related domains.
                </p>
              </div>

              <div className="mission-item">
                <span>02</span>
                <p>
                  To provide exposure to cutting-edge computational tools in the
                  field of computer science and engineering.
                </p>
              </div>

              <div className="mission-item">
                <span>03</span>
                <p>
                  To create competent and ethical computer professionals through
                  quality education, innovative research, and exposure to
                  entrepreneurship.
                </p>
              </div>

            </div>

          </article>

        </div>

      </section>

      {/* 04 — PEO / PO / PSO */}
      <section id="section-3" className="department-section outcomes-section">

        <div className="outcomes-header">

          <div className="section-number">
            04 / PROGRAM OUTCOMES
          </div>

          <div>
            <span className="outcomes-kicker">
              ACADEMIC FRAMEWORK
            </span>

            <h2 className="outcomes-title">
              What Our
              <span>Graduates Become</span>
            </h2>
          </div>

        </div>


        {/* PEO */}
        <div className="outcome-block">

          <div className="outcome-label">
            <span>01</span>
            <small>PEOs</small>
          </div>

          <div className="outcome-content">

            <div className="outcome-heading">
              <h3>Program Educational Objectives</h3>
              <p>
                The professional capabilities expected from our graduates
                after completing the programme.
              </p>
            </div>

            <div className="peo-grid">

              <article className="peo-card">
                <span>PEO 01</span>
                <p>
                  Graduates will establish themselves as competent mechanical
                  engineering professionals by applying engineering knowledge
                  and problem-solving skills in industry, research, or related
                  fields.
                </p>
              </article>

              <article className="peo-card">
                <span>PEO 02</span>
                <p>
                  Graduates will adapt to evolving industrial practices by
                  upgrading their technical competencies and assuming roles
                  of increased responsibility in engineering or allied sectors.
                </p>
              </article>

              <article className="peo-card">
                <span>PEO 03</span>
                <p>
                  Graduates will demonstrate ethical conduct, teamwork, and
                  social responsibility while contributing effectively to
                  organizational and societal development.
                </p>
              </article>

            </div>

          </div>

        </div>


        {/* PO */}
        <div className="outcome-block po-block">

          <div className="outcome-label">
            <span>02</span>
            <small>POs</small>
          </div>

          <div className="outcome-content">

            <div className="outcome-heading">
              <h3>Program Outcomes</h3>
              <p>
                Core abilities developed through the engineering programme.
              </p>
            </div>

            <div className="po-list">

              <div className="po-item">
                <span>01</span>
                <strong>Engineering Knowledge</strong>
                <p>Apply engineering knowledge to solve complex engineering problems.</p>
              </div>

              <div className="po-item">
                <span>02</span>
                <strong>Problem Analysis</strong>
                <p>Identify, formulate and analyse complex engineering problems.</p>
              </div>

              <div className="po-item">
                <span>03</span>
                <strong>Design / Development of Solutions</strong>
                <p>Design solutions for complex engineering problems.</p>
              </div>

              <div className="po-item">
                <span>04</span>
                <strong>Conduct Investigations</strong>
                <p>Use research-based knowledge to investigate complex problems.</p>
              </div>

              <div className="po-item">
                <span>05</span>
                <strong>Modern Tool Usage</strong>
                <p>Create, select and apply appropriate techniques and modern engineering tools.</p>
              </div>

              <div className="po-item">
                <span>06</span>
                <strong>Engineer and Society</strong>
                <p>Apply contextual knowledge to assess societal, health and safety impacts.</p>
              </div>

              <div className="po-item">
                <span>07</span>
                <strong>Environment and Sustainability</strong>
                <p>Understand the impact of professional engineering solutions in environmental contexts.</p>
              </div>

              <div className="po-item">
                <span>08</span>
                <strong>Ethics</strong>
                <p>Apply ethical principles and commit to professional responsibilities.</p>
              </div>

              <div className="po-item">
                <span>09</span>
                <strong>Individual and Team Work</strong>
                <p>Function effectively as an individual and as a member of diverse teams.</p>
              </div>

              <div className="po-item">
                <span>10</span>
                <strong>Communication</strong>
                <p>Communicate effectively on complex engineering activities.</p>
              </div>

              <div className="po-item">
                <span>11</span>
                <strong>Project Management and Finance</strong>
                <p>Demonstrate knowledge of engineering management and economic principles.</p>
              </div>

              <div className="po-item">
                <span>12</span>
                <strong>Life-long Learning</strong>
                <p>Recognize the need for lifelong learning and engage in independent learning.</p>
              </div>

            </div>

          </div>

        </div>


        {/* PSO */}
        <div className="outcome-block pso-block">

          <div className="outcome-label">
            <span>03</span>
            <small>PSOs</small>
          </div>

          <div className="outcome-content">

            <div className="outcome-heading">
              <h3>Program Specific Outcomes</h3>
              <p>
                Specialized capabilities expected from graduates in their
                professional domain.
              </p>
            </div>

            <div className="pso-grid">

              <article className="pso-card">
                <div>PSO 01</div>
                <p>
                  Apply mechanical engineering principles, analytical methods,
                  and modern tools to solve complex engineering problems across
                  core and allied domains.
                </p>
              </article>

              <article className="pso-card">
                <div>PSO 02</div>
                <p>
                  Develop and optimize mechanical systems, processes, and
                  components by integrating design, manufacturing, and energy
                  considerations.
                </p>
              </article>

            </div>

          </div>

        </div>

      </section>


      {/* 05 — FACULTY */}
      <section
        id="section-4"
        className="department-section faculty-link-section"
      >
        <div className="faculty-link-content">

          <div className="section-number">
            05 / FACULTY
          </div>

          <span className="section-kicker">
            THE PEOPLE BEHIND THE DEPARTMENT
          </span>

          <h2>
            Minds That
            <em>Shape Minds</em>
          </h2>

          <p>
            Meet the faculty of the Department of Computer Science & Engineering,
            bringing together academic expertise, research, professional experience
            and industry-oriented knowledge.
          </p>

          <a
            href="/cse/faculty"
            className="faculty-link-button"
          >
            <span>EXPLORE FACULTY DIRECTORY</span>
            <strong>↗</strong>
          </a>

        </div>
      </section>


      {/* 06 — LABORATORIES */}
      <section id="section-5" className="department-section labs-section">

        <div className="section-heading">

          <span className="section-kicker">
            06 / FACILITIES
          </span>

          <h2 className="section-title">
            Department Laboratories
          </h2>

          <p className="labs-intro">
            Practical learning environments equipped to develop technical
            expertise, experimentation and industry-oriented skills.
          </p>

        </div>


        <div className="labs-grid">

          {laboratories.map(([name, capacity], index) => (

            <article
              className="lab-card"
              key={name}
            >

              <div className="lab-number">
                {String(index + 1).padStart(2, "0")}
              </div>


              <div className="lab-info">

                <h3>
                  {name}
                </h3>

                <div className="lab-capacity">

                  <span>
                    CAPACITY
                  </span>

                  <strong>
                    {capacity}
                  </strong>

                </div>

              </div>


              <div className="lab-arrow">
                ↗
              </div>

            </article>

          ))}

        </div>

      </section>


            {/* 07 — DEPARTMENTAL NEWSLETTER */}
      <section
        id="section-6"
        className="department-section newsletter-section"
      >

        <div className="newsletter-header">

          <div className="section-number">
            07 / NEWSLETTER
          </div>

          <div className="newsletter-heading">

            <span>DEPARTMENT ARCHIVE</span>

            <h2>
              Inside
              <em>the Department</em>
            </h2>

          </div>

        </div>


        <div className="newsletter-feature">

          <div className="newsletter-feature-number">
            07
          </div>

          <div className="newsletter-feature-content">

            <span className="newsletter-label">
              DEPARTMENTAL NEWSLETTER
            </span>

            <h3>
              Ideas.
              <br />
              Research.
              <br />
              Progress.
            </h3>

            <p>
              Explore the activities, achievements, academic initiatives,
              research, workshops and developments of the Department of
              Computer Science & Engineering.
            </p>

            <a
              href="#"
              className="newsletter-button"
            >
              <span>VIEW NEWSLETTER</span>
              <strong>↗</strong>
            </a>

          </div>

          <div className="newsletter-decoration">
            CSE
          </div>

        </div>


        <div className="newsletter-footer">

          <span>
            COMPUTER SCIENCE & ENGINEERING
          </span>

          <span>
            ECHELON INSTITUTE OF TECHNOLOGY
          </span>

        </div>

      </section>

    </DepartmentLayout>
  );
};

export default CSE; 