import "./Hero.scss";

function Hero() {
  return (
    <div id="hero" className="fullscreen Hero">
      <div className="left-wave">
        <img src="bgb.svg" alt="University Championships" />
      </div>
      <div className="right-wave">
        <img src="bgu.svg" alt="University Championships" />
      </div>
      <section className="mobileLogo">
        <img src="logo.svg" alt="University Championships" />
      </section>
      <section className="logo">
        <img src="puchar.svg" alt="University Championships" />
      </section>
      <section className="uc-text" style={{ userSelect: "none" }}>
        <img src="text.svg" alt="University Championships" />
      </section>
    </div>
  );
}

export default Hero;
