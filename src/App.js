import React from "react";
import "./styles/app.css";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import iconGithub from "./assets/images/icon-github.svg";
import iconFrontendM from "./assets/images/icon-frontend-mentor.svg";
import iconLinkedin from "./assets/images/icon-linkedin.svg";
import iconTwitter from "./assets/images/icon-twitter.svg";
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <section className="footer">
        <Contact />
        <hr />
        <Nav />
      </section>
    </div>
  );
}

export default App;
