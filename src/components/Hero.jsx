import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="hero-inner">
        <h1>Ricardo Anaya Moreno</h1>
        <p className="subtitle">
          Frontend / Full Stack Developer · React · JavaScript
        </p>
        <p className="meta">Santiago de Querétaro, México</p>
        <p className="cta">
          <a href="#contact">Contáctame</a> ·{" "}
          <a
            href="https://anayaricardo.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Portafolio
          </a>
        </p>
      </div>
    </section>
  );
}
