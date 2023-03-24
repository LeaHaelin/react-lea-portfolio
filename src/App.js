import React from "react";
import "./styles/app.css";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { FooterNav } from "./components/FooterNav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <hr className="line first-line" />
      <Skills />
      <hr className="line middle-line" />
      <Projects />
      <section className="footer">
        <Contact />
        <hr className="line last-line" />
        <FooterNav />
      </section>
    </div>
  );
}

export default App;
