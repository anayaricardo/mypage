import React from "react";

export default function Header() {
  return (
    <header style={{ padding: "1rem 0" }}>
      <nav>
        <strong>Portafolio2026</strong>
        <span style={{ marginLeft: "1rem" }}>
          <a href="#projects">Projects</a> · <a href="#about">About</a> ·{" "}
          <a href="#contact">Contact</a>
        </span>
      </nav>
    </header>
  );
}
