import React, { useState, useRef, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Detectar clics fuera del menú y cerrar
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    // Solo añadir listener si el menú está abierto
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Función para scroll suave al inicio
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header>
      <nav ref={menuRef}>
        <a href="#" onClick={handleScrollToTop} className="logo">
          {" "}
          {">"}_{" "}
        </a>

        {/* Botón hamburguesa */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menú desktop */}
        <span className="nav-links">
          <a href="#inicio" onClick={handleScrollToTop}>
            Inicio
          </a>{" "}
          · <a href="#projects">Proyectos</a> ·{" "}
          <a href="#about">Acerca de mí</a> · <a href="#contact">Contacto</a>
        </span>

        {/* Menú mobile */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <a
            href="#inicio"
            onClick={(e) => {
              handleScrollToTop(e);
              setMenuOpen(false);
            }}
          >
            Inicio
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Proyectos
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            Acerca de mí
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
}
