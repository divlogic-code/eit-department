const Hero = ({ title, video }) => {
  return (
    <section className="hero">

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <div className="hero-small-title">
          Echelon Institute of Technology
        </div>

        <h1 className="hero-title">
          {title}
        </h1>

      </div>

    </section>
  );
};

export default Hero;