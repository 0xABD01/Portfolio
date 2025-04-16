import React from "react";
import "./Projects.css";
import projects from "./projects.js";
import "../../script.js";

function Projects() {
  const projectElement = projects.map((project, index) => {
    return (
      <div className="portfolio-grid reveal" key={index}>
        <figure className="project-fig">
          <img
            src={require(`../../assets/images/${project.image}`)}
            // src={require(`../../assets/images/${cert.image}`)}
            alt="project"
          />
          <figcaption>
            {project.tags.map((tag, index) =><span key={index}>#{tag} </span>)}
          </figcaption>
        </figure>
        <h3>{project.heading}</h3>
        <div className="buttons">
          <a
            className="demo-btn button"
            target="_blank"
            href={project.demo}
            rel="noreferrer"
          >
            Demo
          </a>

          <a
            className="code-btn button"
            target="_blank"
            href={project.repo}
            rel="noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    );
  });
  return (
    <section id="projects">
      <blockquote className="project-header section-heading reveal">
        <h2 className="portfolio-heading reveal">
        <span className="cyan">Projects</span>
        </h2>
        <p className="section-header-para">
          Here are some of my projects showcasing my <span className="cyan">skills </span> in development, problem-solving, and innovation.
        </p>
      </blockquote>

      <div class="portfolio--grid-container">{projectElement}</div>
    </section>
  );
}

export default Projects;
