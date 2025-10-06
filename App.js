
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <main className="portfolio-background">
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}


export default App;
