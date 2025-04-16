import React from "react";
import "./Home.css";
import profileImg from "../../assets/profile-img.jpg";
import cv from "../../assets/ESSALMI_ABDERRAZZAK_CV.pdf";
import "../../script.js";

function Home() {
  const handleLinkClick = () => {
    const navCheck = document.getElementById("nav-check");
    if (navCheck) {
      navCheck.checked = false;
    }
  };

  return (
    <header>
      <nav className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <a href="#home" onClick={handleLinkClick}>Home</a>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
          <a href="#certificates" onClick={handleLinkClick}>Certificates</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </div>
        <button className="btn">
          <a href={cv} download>Download CV</a>
        </button>
      </nav>
      <section id="home">
        <main className="main-homepage">
          <article className="personal-info">
            <blockquote className="name">
              <p>
                Hello, <span className="cyan">I'm</span>{" "}
              </p>
              <h4 className="wordCarousel">
                <div>
                  <ul className="flip">
                    <li>Essalmi Abderrazzak</li>
                    <li>Software Engineer</li>
                    <li>Web Developer</li>
                    <li>Cyber Security Beginner</li>
                    <li>Coder</li>
                  </ul>
                </div>
              </h4>
            </blockquote>
            <div className="para reveal">
              <p>
                I am a dynamic and curious engineering student, always seeking new challenges and experiences.
                My passion for emerging technologies drives me to stay ahead in an ever-evolving field.
                I am dedicated to continuous learning and expanding my skill set.
              </p>

              <p className="margin">
                My academic journey and projects reflect my commitment to growth and problem-solving.
                I am determined to contribute to innovative environments while tackling complex challenges.
              </p>
            </div>
          </article>
          <figure className="profile-figure reveal">
            <img src={profileImg} alt="Profile" className="profile-img" />
          </figure>
        </main>
        <div className="socials-list reveal">
          <ul className="social">
            <li>Check Out My:</li>
            <li>
              <a href="https://www.linkedin.com/in/abderrazzak-essalmi-807ba1268" target="_blank" rel="noreferrer noopener">
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/0xABD01" target="_blank" rel="noreferrer noopener">
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
}

export default Home;