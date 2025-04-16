import React from "react";
import Home from "./components/Home/Home.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Certificates from "./components/Certificates/Certificates.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <main>
      <Home />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
