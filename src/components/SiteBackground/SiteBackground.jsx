import "./SiteBackground.css";

function SiteBackground() {
  return (
    <div className="site-background">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="/videos/department-bg.mp4"
          type="video/mp4"
        />
      </video>

      <div className="site-background-overlay" />
    </div>
  );
}

export default SiteBackground;