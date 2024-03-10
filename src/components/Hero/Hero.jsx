import "./Hero.css";

import arrow from "../imgs/arrow.png";
import hero from "../imgs/hero.png";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVAL ONLY</h2>
        <div>
          <p>NEW Collections</p>
          <p>For everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collections</div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero} alt="" />
      </div>
    </div>
  );
}

export default Hero;
