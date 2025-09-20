import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
