import React from "react";
import p1 from "../assets/Github.png";
import p2 from "../assets/Automata.png";
import p3 from "../assets/Estados.png";
import p4 from "../assets/Planets.png";
// import p5 from "../assets/project5.svg";
// import p6 from "../assets/project6.svg";

const projects = [
  {
    id: 1,
    title: "GitHub Repositorios",
    desc: "Repositorios públicos y código fuente",
    img: p1,
    url: "https://github.com/anayaricardo",
    repoUrl: "https://github.com/anayaricardo/mypage",
  },
  {
    id: 4,
    title: "Planets",
    desc: "Proyecto de animación de planetas (HTML, CSS)",
    img: p4,
    url: "https://anayaricardo.github.io/Planets/",
    repoUrl: "https://github.com/anayaricardo/Planets",
  },
  {
    id: 2,
    title: "Autómata Celular",
    desc: "Proyecto matemático universitario (JavaScript, HTML, CSS)",
    img: p2,
    url: "https://anayaricardo.github.io/cellularAutomata/",
    repoUrl: "https://github.com/anayaricardo/cellularAutomata",
  },
  {
    id: 3,
    title: "Proyecto de Estados con React",
    desc: "Ejemplo de manejo de estados en React",
    img: p3,
    url: "https://anayaricardo.github.io/counterReact/",
    repoUrl: "https://github.com/anayaricardo/counterReact",
  },
  // {
  //   id: 5,
  //   title: "Proyecto 5",
  //   desc: "Descripción corta del proyecto 5",
  //   img: p5,
  //   url: "#",
  // },
  // {
  //   id: 6,
  //   title: "Proyecto 6",
  //   desc: "Descripción corta del proyecto 6",
  //   img: p6,
  //   url: "#",
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2>Proyectos Destacados</h2>

      <div className="projects-grid">
        {projects.map((p, index) => (
          <article
            key={p.id}
            className="project-card"
            style={{ "--item-index": index }}
          >
            <div className="project-image">
              <img src={p.img} alt={p.title} />
            </div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-links">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Ver
                </a>
                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="muted"
                >
                  Código / Más
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
