import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Contacto</h2>
      <p>Ricardo Anaya Moreno — Santiago de Querétaro, México</p>
      <ul className="contact-list">
        <li>Tel: (442) 717 6905</li>
        <li>
          Email:{" "}
          <a href="mailto:ricardoanayamoreno@hotmail.com">
            ricardoanayamoreno@hotmail.com
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/ricardoanaya"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/ricardoanaya
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/anayaricardo"
            target="_blank"
            rel="noreferrer"
          >
            github.com/anayaricardo
          </a>
        </li>
        <li>
          Portafolio:{" "}
          <a
            href="https://anayaricardo.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            anayaricardo.netlify.app
          </a>
        </li>
      </ul>
    </section>
  );
}
