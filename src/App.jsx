import React from "react";
import "./styles/App.scss";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

import { Header, Hero, About, Projects, Contact, Footer } from "./components";

export default function App() {
  useScrollAnimation();

  return (
    <div id="root">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
