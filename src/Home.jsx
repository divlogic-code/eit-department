import React, { useEffect, useState } from "react";
import "./Home.css";

const programmes = [
  {
    title: "B.Tech in Computer Science & Engineering",
    category: "ENGINEERING & TECHNOLOGY",
    link: "/cse",
  },
  {
    title: "B.Tech in Artificial Intelligence & Data Science",
    category: "ENGINEERING & TECHNOLOGY",
  },
  {
    title: "B.Tech in Robotics & Artificial Intelligence",
    category: "ENGINEERING & TECHNOLOGY",
  },
  {
    title: "B.Tech in Mechatronics Engineering",
    category: "ENGINEERING & TECHNOLOGY",
  },
  {
    title: "B.Tech(CSE) in AI & Machine Learning",
    category: "ENGINEERING & TECHNOLOGY",
  },
  {
    title: "B.Tech(CSE) in Cyber Security",
    category: "ENGINEERING & TECHNOLOGY",
  },
  {
    title: "B.Tech(CSE) in Data Science",
    category: "ENGINEERING & TECHNOLOGY",
  },
  {
    title: "B.Tech in Civil Engineering",
    category: "ENGINEERING & TECHNOLOGY",
    link: "/civil",
  },
  {
    title: "B.Tech in Mechanical Engineering",
    category: "ENGINEERING & TECHNOLOGY",
    link: "/mechanical",
  },
  {
    title: "B.Tech in Electronics & Communication Engineering",
    category: "ENGINEERING & TECHNOLOGY",
    link: "/ece",
  },
  {
    title: "BBA General",
    category: "MANAGEMENT STUDIES",
  },
  {
    title: "BBA in Digital Marketing",
    category: "MANAGEMENT STUDIES",
  },
  {
    title: "Master of Business Administration",
    category: "MANAGEMENT STUDIES",
  },
  {
    title: "BCA General",
    category: "COMPUTER APPLICATION",
    link: "/computer-applications",
  },
  {
    title: "BCA in Data Science",
    category: "COMPUTER APPLICATION",
  },
  {
    title: "Master of Computer Applications",
    category: "COMPUTER APPLICATION",
  },
];

const recruiters = [
  "TCS",
  "IBM",
  "KPMG",
  "Infosys",
  "Accenture",
  "HSBC",
  "Google",
  "NIIT",
  "Samsung",
  "BSNL",
  "IndiGo",
  "Air India",
];

const placementProfiles = [
  {
    name: "Yash Bedi",
    designation: "Technical Head, Sale Tax",
    package: "60+ LPA",
    image: "https://eitfaridabad.com/images/alumni-pic/Yash-Bedi.jpg",
  },
  {
    name: "Mohd. Sameer Ansari",
    designation: "Mid Senior Software Engineer",
    package: "52 LPA",
  },
  {
    name: "Rama Shankar",
    designation: "Software Developer Engineer",
    package: "40+ LPA",
  },
  {
    name: "Arpit Kela",
    designation: "General Manager",
    package: "40+ LPA",
  },
  {
    name: "Romil Kumar Toom",
    designation: "Inspector (Preventive Officer)",
    package: "50 LPA",
  },
  {
    name: "Yatharth Arora",
    designation: "Sr. Developer",
    package: "32 LPA",
  },
  {
    name: "Vipin Singh",
    designation: "Sr. Developer",
    package: "32 LPA",
  },
  {
    name: "Rakesh Kr Sharma",
    designation: "Sr. PHP Developer",
    package: "22+ LPA",
  },
];

const achievers = [
  {
    name: "Ankit Kumar",
    image: "https://eitfaridabad.com/images/sparkling/Ankit-Kumar.jpg",
  },
  {
    name: "Lalit",
    image: "https://eitfaridabad.com/images/sparkling/lalit.jpeg",
  },
  {
    name: "Nandini",
    image: "https://eitfaridabad.com/images/sparkling/nandani.jpg",
  },
  {
    name: "Yash Dixit",
  },
  {
    name: "Vimal Gupta",
  },
  {
    name: "Mansi",
  },
  {
    name: "Sneha Kapur",
  },
  {
    name: "Anjali Verma",
  },
];

const sports = [
  {
    title: "IIT Kanpur Udghosh'2025",
    image: "https://eitfaridabad.com/images/sports/1.png",
  },
  {
    title: "Aravali 2025",
    image: "https://eitfaridabad.com/images/sports/2.png",
  },
  {
    title: "Rawfest Rawal 2026",
    image: "https://eitfaridabad.com/images/sports/1.png",
  },
  {
    title: "Astititva ADGIP 2026",
    image: "https://eitfaridabad.com/images/sports/2.png",
  },
];

const alumni = [
  {
    name: "Tarun Panchal",
    image: "https://eitfaridabad.com/images/alumni-pic/TARUN-PANCHAL.jpg",
  },
  {
    name: "Danish Raja",
    image: "https://eitfaridabad.com/images/alumni-pic/DANISH-RAJA.jpg",
  },
  {
    name: "Yash Bedi",
    image: "https://eitfaridabad.com/images/alumni-pic/Yash-Bedi.jpg",
  },
];

const communities = [
  {
    title: "IEEE Student Branch",
    image: "https://eitfaridabad.com/images/club/4.png",
  },
  {
    title: "Technical Community",
    image: "https://eitfaridabad.com/images/club/1.png",
  },
  {
    title: "Innovation & Entrepreneurship",
    image: "https://eitfaridabad.com/images/club/4.png",
  },
  {
    title: "Cultural Community",
    image: "https://eitfaridabad.com/images/club/1.png",
  },
];

const events = [
  {
    title: "Mega Job Fair",
    image: "https://eitfaridabad.com/images/Events/Mega-Job-Fair.png",
  },
  {
    title: "Rawfest Rawal",
    image: "https://eitfaridabad.com/images/sports/1.png",
  },
  {
    title: "Astititva",
    image: "https://eitfaridabad.com/images/sports/2.png",
  },
  {
    title: "Campus Events",
    image: "https://eitfaridabad.com/images/Events/Mega-Job-Fair.png",
  },
];

const testimonials = [
  {
    text: "Echelon provides an environment where students can learn, experiment and grow beyond the classroom.",
    name: "Student",
  },
  {
    text: "The practical approach to education and continuous interaction with industry has helped me build confidence.",
    name: "Alumni",
  },
  {
    text: "The faculty members are supportive and encourage students to participate in projects and activities.",
    name: "Student",
  },
  {
    text: "The campus provides multiple opportunities for technical, professional and personal development.",
    name: "Alumni",
  },
];

const celebrities = [
  {
    name: "Maninder Buttar",
    image: "https://eitfaridabad.com/images/stars/Maninder.jpg",
  },
  {
    name: "Babbal Rai",
    image: "https://eitfaridabad.com/images/stars/Babbal.jfif",
  },
  {
    name: "Raftaar",
  },
  {
    name: "Jassie Gill",
  },
  {
    name: "Harrdy Sandhu",
  },
  {
    name: "Millind Gaba",
  },
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="home-section-heading">
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Home() {
  const [programmeFilter, setProgrammeFilter] = useState(
    "ENGINEERING & TECHNOLOGY"
  );

  const filteredProgrammes = programmes.filter(
    (programme) => programme.category === programmeFilter
  );

  useEffect(() => {
    const handleScroll = () => {
      document.body.classList.toggle(
        "home-scrolled",
        window.scrollY > 80
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="home-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="home-hero">

        <img
          className="home-hero-image"
          src="https://eitfaridabad.com/images/eit-banner.webp"
          alt="Echelon Institute of Technology"
        />

        <div className="home-hero-overlay"></div>

        <div className="home-hero-content">

          <div className="home-affiliation">
            AFFILIATED TO GGSIPU, DELHI
          </div>

          <h1>
            Welcome to the
            <br />
            <strong>Future of Education</strong>
          </h1>

          <p>
            Innovation. Technology. Leadership.
          </p>

          <div className="home-hero-buttons">

            <a
              href="/online-application"
              className="home-primary-btn"
            >
              Apply Now
            </a>

            <a
              href="/program-offered"
              className="home-secondary-btn"
            >
              Explore Programs
            </a>

          </div>

        </div>

        <div className="home-hero-stats">

          <div>
            <strong>2500+</strong>
            <span>Students</span>
          </div>

          <div>
            <strong>52 LPA</strong>
            <span>Highest Package</span>
          </div>

          <div>
            <strong>3500+</strong>
            <span>Internships Offered</span>
          </div>

          <div>
            <strong>10,000+</strong>
            <span>Placement Offered</span>
          </div>

          <div>
            <strong>500+</strong>
            <span>Recruiting Partners</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          HDFC BANNER
      ===================================================== */}

      <section className="home-loan-banner">

        <div>
          <span>FINANCIAL SUPPORT</span>

          <h3>
            Education Loans Now Available Through HDFC BANK
          </h3>
        </div>

        <a href="/admission-procedure">
          Learn More
        </a>

      </section>


      {/* =====================================================
          INDUSTRY INTEGRATED CENTRE
      ===================================================== */}

      <section className="home-centres">

        <SectionHeading
          eyebrow="INDUSTRY CONNECT"
          title="Industry Integrated Centre of Excellence"
          text="Bridging academic learning with real-world technology and industry."
        />

        <div className="centre-marquee">

          <div className="centre-track">

            {[
              "NVIDIA",
              "Microsoft",
              "Apple",
              "Intel",
              "Oracle",
              "IoT",
              "nasscom",
              "Pearson",
              "NVIDIA",
              "Microsoft",
              "Apple",
              "Intel",
              "Oracle",
              "IoT",
              "nasscom",
              "Pearson",
            ].map((company, index) => (
              <div key={`${company}-${index}`}>
                {company}
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT EIT
      ===================================================== */}

      <section className="home-section home-about">

        <div className="home-two-column">

          <div className="home-about-text">

            <SectionHeading
              eyebrow="ABOUT ECHELON"
              title="Education Beyond Conventional Boundaries"
            />

            <p>
              Since its inception in 2007, Echelon Institute of Technology
              has been driven by a singular vision to pioneer experiential
              education that transcends conventional boundaries.
            </p>

            <p>
              Rooted in innovation, inquiry, and purposeful learning,
              Echelon is a dynamic ecosystem where technology, intellect,
              &amp; human potential converge to shape future-ready leaders.
            </p>

            <p>
              Affiliated to Guru Gobind Singh Indraprastha University
              (GGSIPU), Echelon offers the academic credibility and
              structured excellence of a premier government university,
              seamlessly integrated with the agility, mentorship, and
              personalised attention of a progressive private institution.
            </p>

            <p>
              This unique duality ensures both reliability and
              responsiveness in an ever-evolving educational landscape.
            </p>

            <a
              href="/about-eit"
              className="home-outline-btn"
            >
              Discover Echelon
            </a>

          </div>

          <div className="home-about-visual">

            <div className="home-visual-card">

              <span>EST.</span>

              <strong>2007</strong>

              <small>
                Building Future Leaders
              </small>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISION / MISSION
      ===================================================== */}

      <section className="home-section home-vision">

        <SectionHeading
          eyebrow="OUR FOUNDATION"
          title="Vision & Mission"
          text="A culture built around exploration, inspiration and growth."
        />

        <div className="home-vision-grid">

          <article className="home-content-card home-vision-card">

            <span className="card-number">
              01
            </span>

            <h3>
              Vision
            </h3>

            <p>
              Technical and Management leaders engaged in the evolution of
              life, being at the frontiers of the continuous technological
              and administrative breakthroughs, inspired by ongoing
              exploration of self, society, and nature through
              self-reflective consciousness by building a culture of
              inspiration, exploration and growth.
            </p>

          </article>

          <article className="home-content-card home-mission-card">

            <span className="card-number">
              02
            </span>

            <h3>
              Mission
            </h3>

            <div className="mission-item">

              <strong>M-1</strong>

              <p>
                Having a culture of inspiration, exploration, and invention
                through effective, experiential teaching-learning giving
                rise to ever-evolving knowledge and wisdom.
              </p>

            </div>

            <div className="mission-item">

              <strong>M-2</strong>

              <p>
                To have self-inspired students ever engaged in continually
                working upon &amp; sharpening and deepening computational,
                creative, innovative, &amp; leadership consciousness.
              </p>

            </div>

            <div className="mission-item">

              <strong>M-3</strong>

              <p>
                Having students established in self-reflective consciousness,
                committed to personal, social and human integrity, and
                engaged in deep inquiry and conversation, giving rise to
                shared, intersubjective human values and consciousness.
              </p>

            </div>

          </article>

        </div>

      </section>


      {/* =====================================================
          PROGRAMMES
      ===================================================== */}

      <section className="home-section home-programmes">

        <SectionHeading
          eyebrow="ACADEMICS"
          title="Programmes Designed for the Future"
          text="Choose a pathway that matches your ambition."
        />

        <div className="programme-filters">

          {[
            "ENGINEERING & TECHNOLOGY",
            "MANAGEMENT STUDIES",
            "COMPUTER APPLICATION",
          ].map((category) => (

            <button
              key={category}
              className={
                programmeFilter === category
                  ? "active"
                  : ""
              }
              onClick={() => setProgrammeFilter(category)}
            >
              {category}
            </button>

          ))}

        </div>

        <div className="programme-grid">

          {filteredProgrammes.map((programme, index) => (

            <a
              href={programme.link || "#"}
              className="programme-card"
              key={`${programme.title}-${index}`}
            >

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {programme.title}
              </h3>

              <div className="programme-card-arrow">
                →
              </div>

            </a>

          ))}

        </div>

      </section>


      {/* =====================================================
          PLACEMENTS
      ===================================================== */}

      <section className="home-section home-placements">

        <SectionHeading
          eyebrow="CAREERS"
          title="Where Ambition Meets Opportunity"
          text="Strong industry relationships create strong career outcomes."
        />

        <div className="placement-stat-grid">

          <div>
            <strong>3500+</strong>
            <span>Internship Opportunities</span>
          </div>

          <div>
            <strong>10000+</strong>
            <span>Placement Offers</span>
          </div>

          <div>
            <strong>52 LPA</strong>
            <span>Highest Package</span>
          </div>

          <div>
            <strong>95%</strong>
            <span>Placement Rate</span>
          </div>

          <div>
            <strong>500+</strong>
            <span>Recruiting Companies</span>
          </div>

        </div>


        {/* CONTINUOUS PLACEMENT MARQUEE */}

        <div className="home-marquee placement-marquee">

          <div className="home-marquee-track">

            {[...placementProfiles, ...placementProfiles].map(
              (profile, index) => (

                <article
                  className="placement-profile"
                  key={`${profile.name}-${index}`}
                >

                  <div className="placement-profile-image">

                    {profile.image ? (

                      <img
                        src={profile.image}
                        alt={profile.name}
                      />

                    ) : (

                      <span>
                        {profile.name
                          .split(" ")
                          .map((word) => word[0])
                          .slice(0, 2)
                          .join("")}
                      </span>

                    )}

                  </div>

                  <div>

                    <h3>
                      {profile.name}
                    </h3>

                    <p>
                      {profile.designation}
                    </p>

                    <strong>
                      {profile.package}
                    </strong>

                  </div>

                </article>

              )
            )}

          </div>

        </div>

        <a
          href="/placement"
          className="home-outline-btn"
        >
          Explore Placements
        </a>

      </section>


      {/* =====================================================
          TOP RECRUITERS
      ===================================================== */}

      <section className="home-section home-recruiters">

        <SectionHeading
          eyebrow="INDUSTRY"
          title="Top Recruiters"
          text="Our students work with leading organisations across industries."
        />

        <div className="home-marquee">

          <div className="home-marquee-track">

            {[...recruiters, ...recruiters].map(
              (company, index) => (

                <div
                  className="recruiter-logo"
                  key={`${company}-${index}`}
                >
                  {company}
                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          AFFILIATIONS
      ===================================================== */}

      <section className="home-section home-section-light home-affiliations">

        <SectionHeading
          eyebrow="RECOGNITION"
          title="Affiliations & Accreditations"
          text="Academic credibility backed by recognised institutions and industry bodies."
        />

        <div className="home-image-marquee">

          <div className="home-image-track">

            {[
              {
                title: "Approved by AICTE",
                image: "https://eitfaridabad.com/images/AICTE.webp",
              },
              {
                title: "Affiliated to GGSIPU",
                image: "https://eitfaridabad.com/images/GGSIPU-new.png",
              },
              {
                title: "NBA Accreditation",
                image: "https://eitfaridabad.com/images/nba-new.png",
              },
              {
                title: "Industry Collaborations",
              },
            ]
              .concat([
                {
                  title: "Approved by AICTE",
                  image: "https://eitfaridabad.com/images/AICTE.webp",
                },
                {
                  title: "Affiliated to GGSIPU",
                  image: "https://eitfaridabad.com/images/GGSIPU-new.png",
                },
                {
                  title: "NBA Accreditation",
                  image: "https://eitfaridabad.com/images/nba-new.png",
                },
                {
                  title: "Industry Collaborations",
                },
              ])
              .map((item, index) => (

                <article
                  className="home-content-card affiliation-card"
                  key={`${item.title}-${index}`}
                >

                  {item.image ? (

                    <img
                      src={item.image}
                      alt={item.title}
                    />

                  ) : (

                    <div className="affiliation-symbol">
                      ✓
                    </div>

                  )}

                  <h3>
                    {item.title}
                  </h3>

                </article>

              ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ACHIEVERS
      ===================================================== */}

      <section className="home-section home-achievers">

        <SectionHeading
          eyebrow="EXCELLENCE"
          title="Our Achievers"
          text="Celebrating students and alumni who turned opportunity into achievement."
        />

        <div className="home-image-marquee">

          <div className="home-image-track">

            {[...achievers, ...achievers].map(
              (achiever, index) => (

                <article
                  className="home-content-card achievement-card"
                  key={`${achiever.name}-${index}`}
                >

                  <div className="achievement-image">

                    {achiever.image ? (

                      <img
                        src={achiever.image}
                        alt={achiever.name}
                      />

                    ) : (

                      <span>
                        {achiever.name.charAt(0)}
                      </span>

                    )}

                  </div>

                  <div className="home-content-card-body">

                    <h3>
                      {achiever.name}
                    </h3>

                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          SPORTS
      ===================================================== */}

      <section className="home-section home-section-white home-sports">

        <SectionHeading
          eyebrow="CAMPUS LIFE"
          title="Sports"
          text="Competition, discipline and teamwork beyond the classroom."
        />

        <div className="home-image-marquee">

          <div className="home-image-track">

            {[...sports, ...sports].map(
              (sport, index) => (

                <article
                  className="home-content-card image-marquee-card"
                  key={`${sport.title}-${index}`}
                >

                  <img
                    src={sport.image}
                    alt={sport.title}
                  />

                  <div className="home-content-card-body">

                    <h3>
                      {sport.title}
                    </h3>

                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          ALUMNI
      ===================================================== */}

      <section className="home-section home-alumni">

        <SectionHeading
          eyebrow="OUR NETWORK"
          title="Our Proud Alumni"
          text="A growing network of professionals making their mark."
        />

        <div className="home-image-marquee">

          <div className="home-image-track">

            {[...alumni, ...alumni].map(
              (person, index) => (

                <article
                  className="home-content-card alumni-card"
                  key={`${person.name}-${index}`}
                >

                  <div className="alumni-image">

                    {person.image ? (

                      <img
                        src={person.image}
                        alt={person.name}
                      />

                    ) : (

                      <span>
                        {person.name.charAt(0)}
                      </span>

                    )}

                  </div>

                  <div className="home-content-card-body">

                    <h3>
                      {person.name}
                    </h3>

                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          STUDENTS WORK / INNOVATION
      ===================================================== */}

      <section className="home-section home-section-emerald home-innovation">

        <SectionHeading
          eyebrow="INNOVATION IN ACTION"
          title="Students Work & Projects"
          text="Ideas become prototypes, projects and real-world solutions."
        />

        <div className="innovation-grid">

          <article className="innovation-feature">

            <img
              src="https://eitfaridabad.com/images/Innovation-new/1.png"
              alt="Student Innovation"
            />

            <div>

              <span>
                FEATURED PROJECT
              </span>

              <h3>
                Innovation in Action
              </h3>

              <p>
                Students are encouraged to explore technology through
                practical projects, experimentation and interdisciplinary
                problem solving.
              </p>

            </div>

          </article>

          <article className="innovation-card">

            <span>01</span>

            <h3>
              Research
            </h3>

            <p>
              Turning curiosity into structured exploration.
            </p>

          </article>

          <article className="innovation-card">

            <span>02</span>

            <h3>
              Technology
            </h3>

            <p>
              Applying modern technologies to practical challenges.
            </p>

          </article>

          <article className="innovation-card">

            <span>03</span>

            <h3>
              Entrepreneurship
            </h3>

            <p>
              Building the mindset required to create and lead.
            </p>

          </article>

        </div>

      </section>


      {/* =====================================================
          COMMUNITIES
      ===================================================== */}

      <section className="home-section home-communities">

        <SectionHeading
          eyebrow="BELONG"
          title="Find Your Community"
          text="Clubs, societies and communities that make campus life bigger than academics."
        />

        <div className="home-image-marquee community-marquee">

          <div className="home-image-track">

            {[...communities, ...communities].map(
              (community, index) => (

                <article
                  className="home-content-card community-card"
                  key={`${community.title}-${index}`}
                >

                  <img
                    src={community.image}
                    alt={community.title}
                  />

                  <div className="home-content-card-body">

                    <span>
                      COMMUNITY
                    </span>

                    <h3>
                      {community.title}
                    </h3>

                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          EVENTS
      ===================================================== */}

      <section className="home-section home-events">

        <SectionHeading
          eyebrow="LIFE @ ECHELON"
          title="Events @ Echelon"
          text="A campus calendar filled with competitions, celebrations and opportunities."
        />

        <div className="home-image-marquee">

          <div className="home-image-track">

            {[...events, ...events].map(
              (event, index) => (

                <article
                  className="home-content-card event-card"
                  key={`${event.title}-${index}`}
                >

                  <div className="event-image">

                    <img
                      src={event.image}
                      alt={event.title}
                    />

                  </div>

                  <div className="home-content-card-body event-content">

                    <span>
                      ECHELON EVENT
                    </span>

                    <h3>
                      {event.title}
                    </h3>

                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          PODCASTS & TALKS
      ===================================================== */}

      <section className="home-section home-section-light home-podcasts">

        <SectionHeading
          eyebrow="IDEAS & CONVERSATIONS"
          title="Podcasts & Talks"
          text="Conversations that bring perspectives beyond the classroom."
        />

        <div className="podcast-grid">

          <article className="podcast-card">

            <span>01</span>

            <h3>
              Industry Conversations
            </h3>

            <p>
              Insights from professionals working at the forefront of
              technology and business.
            </p>

          </article>

          <article className="podcast-card">

            <span>02</span>

            <h3>
              Expert Talks
            </h3>

            <p>
              Exposure to ideas, experiences and lessons from industry
              experts.
            </p>

          </article>

          <article className="podcast-card">

            <span>03</span>

            <h3>
              Leadership Conversations
            </h3>

            <p>
              Discussions around leadership, careers and personal growth.
            </p>

          </article>

          <article className="podcast-card">

            <span>04</span>

            <h3>
              Student Perspectives
            </h3>

            <p>
              Stories and experiences from the Echelon student community.
            </p>

          </article>

        </div>

      </section>


      {/* =====================================================
          SHOOTING @ ECHELON
      ===================================================== */}

      <section className="home-section home-shooting">

        <SectionHeading
          eyebrow="ON SCREEN"
          title="Shooting @ Echelon"
          text="The Echelon campus has also become a setting for web-series, films, advertisements and music productions."
        />

        <div className="home-image-marquee shooting-marquee">

          <div className="home-image-track">

            {[

              {
                type: "feature",
                title: "College Romance",
                image: "https://eitfaridabad.com/images/photo.webp",
                platform: "NETFLIX",
                description: "Season 1 & 2",
              },

              {
                type: "logo",
                title: "Web-Series & Productions",
                image: "https://eitfaridabad.com/images/netflix.webp",
                description:
                  "The campus has hosted productions including web-series, short-films, movies and advertisements.",
              },

              {
                type: "text",
                title: "Ek Duje Ke Vaaste",
                platform: "02",
                description: "Sony LIV",
              },

              {
                type: "text",
                title: "Lucky Guy",
                platform: "03",
                description: "Amazon miniTV",
              },

            ]
              .concat([
                {
                  type: "feature",
                  title: "College Romance",
                  image: "https://eitfaridabad.com/images/photo.webp",
                  platform: "NETFLIX",
                  description: "Season 1 & 2",
                },

                {
                  type: "logo",
                  title: "Web-Series & Productions",
                  image: "https://eitfaridabad.com/images/netflix.webp",
                  description:
                    "The campus has hosted productions including web-series, short-films, movies and advertisements.",
                },

                {
                  type: "text",
                  title: "Ek Duje Ke Vaaste",
                  platform: "02",
                  description: "Sony LIV",
                },

                {
                  type: "text",
                  title: "Lucky Guy",
                  platform: "03",
                  description: "Amazon miniTV",
                },
              ])
              .map((shoot, index) => (

                <article
                  className="shooting-card"
                  key={`${shoot.title}-${index}`}
                >

                  {shoot.type === "feature" && (

                    <>
                      <img
                        src={shoot.image}
                        alt={shoot.title}
                      />

                      <div className="shooting-card-overlay"></div>

                      <div className="shooting-card-content">

                        <span>
                          {shoot.platform}
                        </span>

                        <h3>
                          {shoot.title}
                        </h3>

                        <p>
                          {shoot.description}
                        </p>

                      </div>
                    </>

                  )}


                  {shoot.type === "logo" && (

                    <div className="shooting-inner-card">

                      <div className="shooting-logo">

                        <img
                          src={shoot.image}
                          alt="Netflix"
                        />

                      </div>

                      <h3>
                        {shoot.title}
                      </h3>

                      <p>
                        {shoot.description}
                      </p>

                    </div>

                  )}


                  {shoot.type === "text" && (

                    <div className="shooting-inner-card">

                      <span className="shooting-index">
                        {shoot.platform}
                      </span>

                      <h3>
                        {shoot.title}
                      </h3>

                      <p>
                        {shoot.description}
                      </p>

                    </div>

                  )}

                </article>

              ))}

          </div>

        </div>

        <div className="shooting-footer">

          <span>
            ALSO USED FOR
          </span>

          <strong>
            Web-Series · Short Films · Movies · Advertisements · Music Videos
          </strong>

        </div>

      </section>


      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section className="home-section home-testimonials">

        <SectionHeading
          eyebrow="EXPERIENCE"
          title="What Our Community Says"
          text="Perspectives from the people who experience Echelon firsthand."
        />

        <div className="home-marquee">

          <div className="home-marquee-track">

            {[...testimonials, ...testimonials].map(
              (testimonial, index) => (

                <article
                  className="testimonial-card"
                  key={`${testimonial.name}-${index}`}
                >

                  <div className="testimonial-mark">
                    “
                  </div>

                  <p>
                    {testimonial.text}
                  </p>

                  <strong>
                    {testimonial.name}
                  </strong>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          CELEBRITIES
      ===================================================== */}

      <section className="home-section home-section-white home-celebrities">

        <SectionHeading
          eyebrow="SPECIAL VISITORS"
          title="Celebrities @ EIT"
          text="A campus that has welcomed artists and personalities from across the entertainment industry."
        />

        <div className="home-image-marquee">

          <div className="home-image-track">

            {[...celebrities, ...celebrities].map(
              (celebrity, index) => (

                <article
                  className="celebrity-card"
                  key={`${celebrity.name}-${index}`}
                >

                  <div className="celebrity-image">

                    {celebrity.image ? (

                      <img
                        src={celebrity.image}
                        alt={celebrity.name}
                      />

                    ) : (

                      <span>
                        {celebrity.name.charAt(0)}
                      </span>

                    )}

                  </div>

                  <h3>
                    {celebrity.name}
                  </h3>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="home-cta">

        <div className="home-cta-content">

          <span>
            YOUR NEXT CHAPTER STARTS HERE
          </span>

          <h2>
            Build Your Future
            <br />
            at Echelon.
          </h2>

          <p>
            Learn. Explore. Create. Lead.
          </p>

          <div className="home-cta-buttons">

            <a
              href="/online-application"
              className="home-primary-btn"
            >
              Apply Now
            </a>

            <a
              href="/contact"
              className="home-secondary-btn"
            >
              Contact Us
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="home-footer">

        <div className="home-footer-grid">

          <div className="home-footer-brand">

            <h2>
              ECHELON
            </h2>

            <p>
              Echelon Institute of Technology
            </p>

            <p>
              Faridabad, Haryana
            </p>

            <p>
              Affiliated to Guru Gobind Singh Indraprastha University,
              Delhi.
            </p>

          </div>


          <div className="home-footer-column">

            <h3>
              Quick Links
            </h3>

            <a href="/program-offered">
              Programmes
            </a>

            <a href="/placement">
              Placements
            </a>

            <a href="/admission-procedure">
              Admissions
            </a>

            <a href="/about-eit">
              About EIT
            </a>

            <a href="/contact">
              Contact
            </a>

          </div>


          <div className="home-footer-column">

            <h3>
              Important
            </h3>

            <a href="/fee-structure">
              Fee Structure
            </a>

            <a href="/scholarship">
              Scholarship
            </a>

            <a href="/affiliations">
              Affiliations &amp; Approvals
            </a>

            <a href="/iqac">
              IQAC
            </a>

            <a href="/career">
              Career @ Echelon
            </a>

          </div>


          <div className="home-footer-column">

            <h3>
              Departments
            </h3>

            <a href="/cse">
              Computer Science &amp; Engineering
            </a>

            <a href="/ece">
              Electronics &amp; Communication Engineering
            </a>

            <a href="/mechanical">
              Mechanical Engineering
            </a>

            <a href="/civil">
              Civil Engineering
            </a>

            <a href="/computer-applications">
              Computer Applications
            </a>

          </div>

        </div>


        <div className="home-footer-bottom">

          <span>
            © {new Date().getFullYear()} Echelon Institute of Technology
          </span>

          <span>
            All Rights Reserved
          </span>

        </div>

      </footer>


      {/* =====================================================
          FLOATING ACTIONS
      ===================================================== */}

      <div className="home-floating-actions">

        <a href="/online-application">
          Enquire Now
        </a>

        <a href="/notices">
          What's New @ Echelon
        </a>

      </div>

    </main>
  );
}

export default Home;