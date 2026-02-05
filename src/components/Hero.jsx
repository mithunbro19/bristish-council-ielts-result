import React from "react";
import "./Hero.css";
import heroimg from "../assets/hero-image.png"

const Hero = () => {
  return (
    <section className="bc-hero">
      <div className="bc-container">
        <div className="bc-hero-inner">
          <div className="bc-hero-text">
            <h2 className="bc-h2" style={{color: "#fff"}}>Tests & Results</h2>
            <p className="bc-paragraph">
              Your Test Taker portal will help you prepare for your test, manage your bookings, get your results, and use your IELTS score to continue your journey with the English language.
            </p>
          </div>

          <div className="bc-hero-img">
            <img
              src={heroimg}
              alt="hero Image"
              className="bc-hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
