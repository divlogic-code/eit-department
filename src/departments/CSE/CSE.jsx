import DepartmentLayout from "../../components/DepartmentLayout/DepartmentLayout";
import cse from "../../data/departments/cse";
import "../../styles/HODCard.css";
import "./CSE.css";

const CSE = () => {
  return (
    <DepartmentLayout department={cse}>

      {/* 01 — OVERVIEW */}

      <section
        id="section-0"
        className="department-section overview-section"
      >

        <div className="overview-header">

          <div className="section-number">
            {cse.overview.sectionNumber}
          </div>

          <h2 className="section-title">
            {cse.overview.title}
            <span>{cse.overview.titleAccent}</span>
          </h2>

        </div>


        <div className="overview-content">

          <div className="overview-intro">

            <span className="overview-line"></span>

            <p>
              {cse.overview.intro}
            </p>

          </div>


          <div className="overview-details">

            {cse.overview.details.map((detail) => (
              <div
                className="overview-detail"
                key={detail.number}
              >

                <span className="detail-number">
                  {detail.number}
                </span>

                <p>
                  {detail.text}
                </p>

              </div>
            ))}

          </div>

        </div>


        <div className="overview-footer">

          {cse.overview.footer.map((item) => (
            <span key={item}>
              {item}
            </span>
          ))}

        </div>

      </section>


      {/* 02 — HOD'S MESSAGE */}

      <section
        id="section-1"
        className="department-section hod-section"
      >

        <div className="hod-top">

          <div className="section-number">
            {cse.hod.sectionNumber}
          </div>

          <div className="hod-heading">

            <span>
              {cse.hod.eyebrow}
            </span>

            <h2>
              {cse.hod.title}
              <em>{cse.hod.titleAccent}</em>
            </h2>

          </div>

        </div>


        <div className="hod-layout">

          <div className="hod-profile">

            <div className="hod-portrait">

              <img
                src={cse.hod.image}
                alt={cse.hod.imageAlt}
                className="hod-portrait-image"
                loading="lazy"
              />

              <div className="hod-portrait-number">
                {cse.hod.number}
              </div>

            </div>


            <div className="hod-name">

              <span>
                {cse.hod.label}
              </span>

              <h3>
                {cse.hod.department}
              </h3>

            </div>

          </div>


          <div className="hod-message">

            <div className="quote-mark">
              “
            </div>

            <p>
              {cse.hod.message}
            </p>

            <div className="hod-signature">

              <span>
                {cse.hod.signature[0]}
              </span>

              <strong>
                {cse.hod.signature[1]}
              </strong>

            </div>

          </div>

        </div>

      </section>


      {/* 03 — VISION & MISSION */}

      <section
        id="section-2"
        className="department-section vision-section"
      >

        <div className="vision-header">

          <div className="section-number">
            {cse.visionMission.sectionNumber}
          </div>

          <h2 className="vision-title">
            {cse.visionMission.title}
            <span>{cse.visionMission.titleAccent}</span>
          </h2>

        </div>


        <div className="vision-grid">

          {/* VISION */}

          <article className="vision-card vision-main-card">

            <div className="vision-card-top">

              <span>
                {cse.visionMission.vision.number}
              </span>

              <small>
                {cse.visionMission.vision.label}
              </small>

            </div>

            <div className="vision-icon">
              {cse.visionMission.vision.icon}
            </div>

            <p>
              {cse.visionMission.vision.text}
            </p>

            <div className="vision-card-footer">

              {cse.visionMission.vision.footer.map((item) => (
                <span key={item}>
                  {item}
                </span>
              ))}

            </div>

          </article>


          {/* MISSION */}

          <article className="mission-card">

            <div className="mission-heading">

              <span>
                {cse.visionMission.mission.number}
              </span>

              <div>

                <small>
                  {cse.visionMission.mission.label}
                </small>

                <h3>
                  {cse.visionMission.mission.title}
                  <em>
                    {cse.visionMission.mission.titleAccent}
                  </em>
                </h3>

              </div>

            </div>


            <div className="mission-list">

              {cse.visionMission.mission.items.map((item) => (
                <div
                  className="mission-item"
                  key={item.number}
                >

                  <span>
                    {item.number}
                  </span>

                  <p>
                    {item.text}
                  </p>

                </div>
              ))}

            </div>

          </article>

        </div>

      </section>


      {/* 04 — PEO / PO / PSO */}

      <section
        id="section-3"
        className="department-section outcomes-section"
      >

        <div className="outcomes-header">

          <div className="section-number">
            {cse.outcomes.sectionNumber}
          </div>

          <div>

            <span className="outcomes-kicker">
              {cse.outcomes.kicker}
            </span>

            <h2 className="outcomes-title">
              {cse.outcomes.title}
              <span>{cse.outcomes.titleAccent}</span>
            </h2>

          </div>

        </div>


        {/* PEO */}

        <div className="outcome-block">

          <div className="outcome-label">

            <span>
              {cse.outcomes.peo.number}
            </span>

            <small>
              {cse.outcomes.peo.label}
            </small>

          </div>


          <div className="outcome-content">

            <div className="outcome-heading">

              <h3>
                {cse.outcomes.peo.title}
              </h3>

              <p>
                {cse.outcomes.peo.description}
              </p>

            </div>


            <div className="peo-grid">

              {cse.outcomes.peo.items.map((item) => (
                <article
                  className="peo-card"
                  key={item.number}
                >

                  <span>
                    {item.number}
                  </span>

                  <p>
                    {item.text}
                  </p>

                </article>
              ))}

            </div>

          </div>

        </div>


        {/* PO */}

        <div className="outcome-block po-block">

          <div className="outcome-label">

            <span>
              {cse.outcomes.po.number}
            </span>

            <small>
              {cse.outcomes.po.label}
            </small>

          </div>


          <div className="outcome-content">

            <div className="outcome-heading">

              <h3>
                {cse.outcomes.po.title}
              </h3>

              <p>
                {cse.outcomes.po.description}
              </p>

            </div>


            <div className="po-list">

              {cse.outcomes.po.items.map((item) => (
                <div
                  className="po-item"
                  key={item.number}
                >

                  <span>
                    {item.number}
                  </span>

                  <strong>
                    {item.title}
                  </strong>

                  <p>
                    {item.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>


        {/* PSO */}

        <div className="outcome-block pso-block">

          <div className="outcome-label">

            <span>
              {cse.outcomes.pso.number}
            </span>

            <small>
              {cse.outcomes.pso.label}
            </small>

          </div>


          <div className="outcome-content">

            <div className="outcome-heading">

              <h3>
                {cse.outcomes.pso.title}
              </h3>

              <p>
                {cse.outcomes.pso.description}
              </p>

            </div>


            <div className="pso-grid">

              {cse.outcomes.pso.items.map((item) => (
                <article
                  className="pso-card"
                  key={item.number}
                >

                  <div>
                    {item.number}
                  </div>

                  <p>
                    {item.text}
                  </p>

                </article>
              ))}

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
            {cse.faculty.sectionNumber}
          </div>

          <span className="section-kicker">
            {cse.faculty.kicker}
          </span>

          <h2>
            {cse.faculty.title}
            <em>{cse.faculty.titleAccent}</em>
          </h2>

          <p>
            {cse.faculty.description}
          </p>

          <a
            href={cse.faculty.url}
            className="faculty-link-button"
          >

            <span>
              {cse.faculty.button}
            </span>

            <strong>
              ↗
            </strong>

          </a>

        </div>

      </section>


      {/* 06 — LABORATORIES */}

      <section
        id="section-5"
        className="department-section labs-section"
      >

        <div className="section-heading">

          <span className="section-kicker">
            {cse.laboratories.kicker}
          </span>

          <h2 className="section-title">
            {cse.laboratories.title}
          </h2>

          <p className="labs-intro">
            {cse.laboratories.description}
          </p>

        </div>


        <div className="labs-grid">

          {cse.laboratories.items.map((lab, index) => (

            <article
              className="lab-card"
              key={lab.name}
            >

              <div className="lab-number">
                {String(index + 1).padStart(2, "0")}
              </div>


              <div className="lab-info">

                <h3>
                  {lab.name}
                </h3>

                <div className="lab-capacity">

                  <span>
                    CAPACITY
                  </span>

                  <strong>
                    {lab.capacity}
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
            {cse.newsletter.sectionNumber}
          </div>

          <div className="newsletter-heading">

            <span>
              {cse.newsletter.eyebrow}
            </span>

            <h2>
              {cse.newsletter.title}
              <em>{cse.newsletter.titleAccent}</em>
            </h2>

          </div>

        </div>


        <div className="newsletter-feature">

          <div className="newsletter-feature-number">
            {cse.newsletter.number}
          </div>


          <div className="newsletter-feature-content">

            <span className="newsletter-label">
              {cse.newsletter.label}
            </span>


            <h3>

              {cse.newsletter.headline.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}

            </h3>


            <p>
              {cse.newsletter.description}
            </p>


            <a
              href={cse.newsletter.url}
              className="newsletter-button"
            >

              <span>
                {cse.newsletter.button}
              </span>

              <strong>
                ↗
              </strong>

            </a>

          </div>


          <div className="newsletter-decoration">
            {cse.newsletter.decoration}
          </div>

        </div>


        <div className="newsletter-footer">

          {cse.newsletter.footer.map((item) => (
            <span key={item}>
              {item}
            </span>
          ))}

        </div>

      </section>

    </DepartmentLayout>
  );
};

export default CSE;