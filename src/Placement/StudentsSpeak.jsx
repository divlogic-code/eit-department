import { ArrowUpRight, PlayCircle } from "lucide-react";
import AdmissionsSidebar from "../Admissions/AdmissionsSidebar";
import "./StudentsSpeak/StudentsSpeak.css";

const studentVideos = [
  {
    name: "Student Experience",
    description:
      "Hear directly from students about their campus experience, learning environment, and placement journey.",
    videoId: "",
  },
  {
    name: "Placement Experience",
    description:
      "Students share their experience with placement preparation, industry exposure, and recruitment opportunities.",
    videoId: "",
  },
  {
    name: "Campus Experience",
    description:
      "Explore student perspectives on academics, activities, infrastructure, and life at Echelon.",
    videoId: "",
  },
];

function StudentsSpeak() {
  return (
    <div className="students-speak-page">
      <AdmissionsSidebar />

      <section className="students-speak-hero">
        <video
          className="students-speak-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/college-campus.mp4" type="video/mp4" />
        </video>

        <div className="students-speak-hero-overlay" />

        <div className="students-speak-hero-content">
          <span className="students-speak-eyebrow">
            PLACEMENT & CAREER DEVELOPMENT
          </span>

          <h1>Students Speak</h1>

          <p>
            Discover the experiences, perspectives, and placement journeys
            shared by students of Echelon Institute of Technology.
          </p>
        </div>
      </section>

      <main className="students-speak-content">
        <section className="students-speak-intro">
          <span className="students-speak-section-label">
            STUDENT VOICES
          </span>

          <h2>Hear It From Our Students</h2>

          <p>
            Student experiences offer a genuine perspective on campus life,
            academics, industry exposure, professional development, and
            placements at Echelon Institute of Technology.
          </p>
        </section>

        <section className="students-speak-grid">
          {studentVideos.map((student, index) => (
            <article className="student-video-card" key={student.name}>
              <div className="student-video-media">
                {student.videoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${student.videoId}`}
                    title={student.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div className="student-video-placeholder">
                    <PlayCircle size={54} strokeWidth={1.4} />

                    <span>Student video</span>

                    <small>
                      Video content will appear here when the official video
                      link is added.
                    </small>
                  </div>
                )}
              </div>

              <div className="student-video-body">
                <span className="student-video-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{student.name}</h3>

                <p>{student.description}</p>

                {student.videoId && (
                  <a
                    href={`https://www.youtube.com/watch?v=${student.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="student-video-link"
                  >
                    Watch video
                    <ArrowUpRight size={17} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </section>

        <section className="students-speak-note">
          <div>
            <span className="students-speak-section-label">
              STUDENT PERSPECTIVE
            </span>

            <h2>Real Experiences. Real Journeys.</h2>

            <p>
              Student testimonials provide an authentic window into the
              academic and professional journey at Echelon Institute of
              Technology.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default StudentsSpeak;