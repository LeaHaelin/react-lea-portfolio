import React from "react";
import "./styles/app.css";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { FooterNav } from "./components/FooterNav";
import up from "./assets/images/up_arrow_icon.svg";
function App() {
  const scrollUpHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="App">
      <Nav />
      <Hero />
      <hr className="line first-line" />
      <Skills />
      <hr className="line middle-line" />
      <Projects />
      <section className="footer" >
        <Contact />
        <hr className="line last-line" />
        <FooterNav />
      </section>
      <button className="scroll-up" onClick={scrollUpHandler}><img src={up} alt="go to top of the page" /></button>
    </div>
  );
}

export default App;
