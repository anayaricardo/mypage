import React from "react";
import heroImage from "../assets/foto.png";

export default function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Ricardo Anaya</h1>
          <p className="subtitle">Full Stack Developer · React · JavaScript</p>
          <p className="meta">Querétaro, México</p>
          <p className="cta">
            <a href="#contact" className="cta-btn">
              Contáctame
            </a>
          </p>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Ricardo Anaya" />
        </div>
      </div>
    </section>
  );
}
