import "./Hero.scss";

function Hero() {
  return (
    <div id="hero" className="fullscreen Hero">
      <section className="logo">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path stroke-width="4" fill="#FF0066" d="M72.9,-21.4C82.6,6.1,70.3,42.9,48.3,56.6C26.2,70.3,-5.5,60.8,-28.8,43.1C-52.2,25.3,-67,-0.6,-60.8,-23.3C-54.6,-46,-27.3,-65.4,2.2,-66.1C31.6,-66.8,63.3,-48.8,72.9,-21.4Z" transform="translate(100 100)" />
        </svg>

      </section>
      <section className="uc-text" style={{ userSelect: "none" }}>
        <img src="university_championships.svg" alt="University Championships" />
      </section>
    </div>
  );
}

export default Hero;
