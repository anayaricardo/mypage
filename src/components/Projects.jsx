import React from "react";
import p1 from "../assets/project1.svg";
import p2 from "../assets/project2.svg";
import p3 from "../assets/project3.svg";
import p4 from "../assets/project4.svg";
import p5 from "../assets/project5.svg";
import p6 from "../assets/project6.svg";

const projects = [
  {
    id: 1,
    title: "Portafolio (Live)",
    desc: "Sitio personal con proyectos y contacto",
    img: p1,
    url: "https://anayaricardo.netlify.app",
  },
  {
    id: 2,
    title: "GitHub Repos",
    desc: "Repositorios públicos y código fuente",
    img: p2,
    url: "https://github.com/anayaricardo",
  },
  {
    id: 3,
    title: "Tripper (Countries App)",
    desc: "Full Stack SPA (React, Redux, Node, PostgreSQL)",
    img: p3,
    url: "#",
  },
  {
    id: 4,
    title: "Proyecto 4",
    desc: "Descripción corta del proyecto 4",
    img: p4,
    url: "#",
  },
  {
    id: 5,
    title: "Proyecto 5",
    desc: "Descripción corta del proyecto 5",
    img: p5,
    url: "#",
  },
  {
    id: 6,
    title: "Proyecto 6",
    desc: "Descripción corta del proyecto 6",
    img: p6,
    url: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2>Proyectos Destacados</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.id} className="project-card">
            <div className="project-image">
              <img src={p.img} alt={p.title} />
            </div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <p className="project-links">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Ver
                </a>
                <a
                  href={
                    p.url === "#" ? "https://github.com/anayaricardo" : p.url
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="muted"
                >
                  Código / Más
                </a>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
