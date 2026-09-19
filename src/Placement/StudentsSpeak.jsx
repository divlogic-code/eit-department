import { ArrowUpRight, PlayCircle } from "lucide-react";
import AdmissionsSidebar from "../Admissions/AdmissionsSidebar";
import studentsSpeak from "../data/placement/studentsSpeak";
import "./StudentsSpeak/StudentsSpeak.css";

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
          <source src={studentsSpeak.hero.video} type="video/mp4" />
        </video>

        <div className="students-speak-hero-overlay" />

        <div className="students-speak-hero-content">
          <span className="students-speak-eyebrow">
            {studentsSpeak.hero.eyebrow}
          </span>

          <h1>{studentsSpeak.hero.title}</h1>

          <p>{studentsSpeak.hero.description}</p>
        </div>
      </section>

      <main className="students-speak-content">
        <section className="students-speak-intro">
          <span className="students-speak-section-label">
            {studentsSpeak.intro.label}
          </span>

          <h2>{studentsSpeak.intro.title}</h2>

          <p>{studentsSpeak.intro.description}</p>
        </section>

        <section className="students-speak-grid">
          {studentsSpeak.videos.map((student, index) => (
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
              {studentsSpeak.note.label}
            </span>

            <h2>{studentsSpeak.note.title}</h2>

            <p>{studentsSpeak.note.description}</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default StudentsSpeak;