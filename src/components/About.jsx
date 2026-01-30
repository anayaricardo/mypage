import React from "react";

export default function About() {
  const skills = [
    "JavaScript, React, Redux, Node.js, Express",
    "HTML, CSS, Java",
    "PostgreSQL, MySQL, Sequelize",
    "Git, GitHub, Google Cloud (GCP)",
    "Trabajo en equipo, Comunicación con clientes, Creatividad",
    "Inglés (Avanzado C1)",
  ];

  return (
    <section id="about" className="section about">
      <h2>Perfil Profesional</h2>
      <p>
        Desarrollador Full Stack con 6 años de experiencia en programación web,
        enfocado en la creación de aplicaciones seguras y soluciones digitales
        de calidad. Experiencia en proyectos freelance y trabajo en equipo, con
        habilidades analíticas y de diseño.
      </p>

      <h3>Habilidades</h3>
      <ul className="skills">
        {skills.map((skill, index) => (
          <li key={index} style={{ "--item-index": index }}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
