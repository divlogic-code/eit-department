import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  Users,
  Trophy,
  Leaf,
  Sparkles,
  HeartHandshake,
  School,
  Globe2,
  BookOpen,
  Target,
  Landmark,
  Brain,
  Cpu,
  Network,
  BriefcaseBusiness,
  Lightbulb,
  Smartphone,
  Factory,
} from "lucide-react";

import AdmissionsSidebar from "./AdmissionsSidebar";
import "./WhyEchelon/WhyEchelon.css";

const reasons = [
  {
    number: "01",
    icon: Building2,
    title: "17.5 Acres of State-of-the-Art Infrastructure",
    text: "17.5-acre campus with centralized AC and modern academic facilities.",
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "Quality Faculty from Academia and Industry",
    text: "Highly qualified faculty, including more than 50 faculty members holding Ph.D. degrees.",
  },
  {
    number: "03",
    icon: Users,
    title: "Dedicated Mentoring System",
    text: "Structured mentoring with personalized interaction and individual attention.",
  },
  {
    number: "04",
    icon: Trophy,
    title: "Expansive Sports Arena",
    text: "Sports facilities for Cricket, Basketball, Kabaddi, Football, Throw Ball and more.",
  },
  {
    number: "05",
    icon: Trophy,
    title: "Multi-Disciplinary Sports Complex",
    text: "Upcoming expansion includes a tennis court with floodlights and a swimming pool.",
  },
  {
    number: "06",
    icon: Leaf,
    title: "Sustainable Green Campus & Waste Management",
    text: "Comprehensive waste management and environmental improvement initiatives.",
  },
  {
    number: "07",
    icon: Sparkles,
    title: "Holistic Club Culture & Semester-Long Programs",
    text: "Clubs focused on human development alongside semester-long programs based on student interests and aspirations.",
  },
  {
    number: "08",
    icon: HeartHandshake,
    title: "Three-Way Partnership Model",
    text: "Parents, students and the institute work together through engagement with the Principal, Deans and Board of Governors.",
  },
  {
    number: "09",
    icon: Utensils,
    title: "State-of-the-Art Cafeteria",
    text: "Wholesome, nourishing and Ayurvedic food for the campus community.",
  },
  {
    number: "10",
    icon: School,
    title: "Hostel Life – A Modern Gurukul",
    text: "Hostel life encourages human development, freedom, independent decision-making, responsibility and commitment.",
  },
  {
    number: "11",
    icon: Globe2,
    title: "National & International Competition Participation",
    text: "Students participate in SIH, Ideathon and other national and international platforms.",
  },
  {
    number: "12",
    icon: BookOpen,
    title: "Centrally Air-Conditioned Distinguished Library",
    text: "A physical and digital library regarded among the best in NCR.",
  },
  {
    number: "13",
    icon: Target,
    title: "Intensive Training for Competitive Examinations",
    text: "Two-semester GATE training from the third year onwards and CAT support.",
  },
  {
    number: "14",
    icon: Landmark,
    title: "Unnat Bharat Abhiyan & SAGY",
    text: "Active implementation of Unnat Bharat Abhiyan and Saansad Adarsh Gram Yojana.",
  },
  {
    number: "15",
    icon: Brain,
    title: "The Last Centre – Leadership Development Space",
    text: "A dedicated 3000 sq. ft. space for developing conscious leaders contributing to industry, society, environment and nation.",
  },
  {
    number: "16",
    icon: Cpu,
    title: "Industry-Integrated Learning & Emerging Technologies",
    text: "Ongoing training by high-end industry experts in emerging technologies.",
  },
  {
    number: "17",
    icon: Network,
    title: "Centres of Excellence & Skill Development Partnerships",
    text: "MoUs and partnerships with organisations including Honeywell–ICT Academy, GTT BARCLAYS, CISCO–NIIT Academy Foundation Partner, CETPA, SOFT PRO, NASSCOM, Froyo Technologies Pvt. Ltd., Skill Clout, IID, KVCH and Code Squads.",
  },
  {
    number: "18",
    icon: HeartHandshake,
    title: "Inbuilt Social & Emotional Learning Mechanism",
    text: "Social and emotional learning mechanism aligned with the National Education Policy.",
  },
  {
    number: "19",
    icon: Leaf,
    title: "Green & Energy-Efficient Campus",
    text: "Eco-friendly practices focused on energy efficiency and preservation of natural resources.",
  },
  {
    number: "20",
    icon: BriefcaseBusiness,
    title: "Mandatory Internship Policy",
    text: "Internships are mandatory for all students.",
  },
  {
    number: "21",
    icon: Landmark,
    title: "Implementation of Government of India Schemes",
    text: "Implementation of relevant Government of India schemes.",
  },
  {
    number: "22",
    icon: Lightbulb,
    title: "Institute Innovation Council",
    text: "Supports innovation and entrepreneurship among students.",
  },
  {
    number: "23",
    icon: Smartphone,
    title: "Fully Digitalized Campus",
    text: "ERP-enabled campus supporting institutional and student processes.",
  },
  {
    number: "24",
    icon: Factory,
    title: "Institution–Industry Cell & Innovation Cell",
    text: "Strengthens industry collaboration, innovation, research and practical learning.",
  },
];

function Utensils({ size = 21, strokeWidth = 1.5 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 3v7" />
      <path d="M4 3v5a3 3 0 0 0 6 0V3" />
      <path d="M7 11v10" />
      <path d="M16 3v18" />
      <path d="M16 3c2.2 1.4 3.3 3.7 3.3 6.2 0 1.9-1.1 3.2-3.3 3.8" />
    </svg>
  );
}

function WhyEchelon() {
  const [visibleCards, setVisibleCards] = useState({});
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(entry.target.dataset.index);

          setVisibleCards((previous) => ({
            ...previous,
            [index]: true,
          }));

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="why-echelon-page">

      <AdmissionsSidebar />



     {/* HERO */}

        <section className="why-echelon-hero">

            <video
                className="why-echelon-hero-video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
            >
                <source src="/videos/college-campus.mp4" type="video/mp4" />
            </video>

            <div className="why-echelon-hero-content">

                <div className="eyebrow">
                Admissions
                </div>

                <h1>
                Why Echelon?
                </h1>

                <p>
                Discover an environment designed to transform students into
                capable professionals, innovators and future leaders.
                </p>

            </div>

            <div className="why-echelon-hero-number">
                <span>24</span>
                <small>REASONS TO CHOOSE EIT</small>
            </div>

        </section>


      {/* INTRO */}

      <section className="why-echelon-intro">

        <div className="why-echelon-intro-inner">

          <div className="why-echelon-intro-label">
            <span>01</span>
            <span>THE ECHELON DIFFERENCE</span>
          </div>

          <div className="why-echelon-intro-copy">

            <h2>
              More than a campus.
              <br />
              <em>A complete ecosystem.</em>
            </h2>

            <p>
              Echelon Institute of Technology brings together
              academic learning, industry interaction,
              competitive examination preparation, sports,
              innovation, leadership development and social
              responsibility.
            </p>

            <p>
              Explore the key features highlighted by the
              institute for the 2026–27 admissions cycle.
            </p>

          </div>

        </div>

      </section>


      {/* REASONS */}

      <section className="why-echelon-reasons">

        <div className="why-echelon-section-header">

          <div>
            <span className="why-echelon-section-kicker">
              THE ECHELON EXPERIENCE
            </span>

            <h2>
              Built for the
              <br />
              <em>next chapter.</em>
            </h2>
          </div>

          <p>
            Explore the academic, professional, personal
            and institutional advantages highlighted by EIT.
          </p>

        </div>


        <div className="why-echelon-grid">

          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.number}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                data-index={index}
                className={`why-echelon-card ${
                  visibleCards[index]
                    ? "why-echelon-card-visible"
                    : ""
                }`}
              >

                <div className="why-echelon-card-top">

                  <span className="why-echelon-card-number">
                    {reason.number}
                  </span>

                  <div className="why-echelon-card-icon">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>

                </div>

                <h3>{reason.title}</h3>

                <p>{reason.text}</p>

                <div className="why-echelon-card-line" />

              </article>
            );
          })}

        </div>

      </section>


      {/* CTA */}

      <section className="why-echelon-cta">

        <div className="why-echelon-cta-inner">

          <div>

            <span>ADMISSIONS 2026–27</span>

            <h2>
              Your next chapter
              <br />
              starts <em>here.</em>
            </h2>

          </div>

          <a
            href="https://eitfaridabad.com/pdf/admission-procedure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="why-echelon-cta-button"
          >
            <span>VIEW ADMISSION PROCEDURE</span>
            <ArrowUpRight size={19} />
          </a>

        </div>

      </section>

    </div>
  );
}

export default WhyEchelon;