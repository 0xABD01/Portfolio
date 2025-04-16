import React from "react";
import tags from "./tags.js";
import "./Skills.css";
import "../../script.js";

function Skills() {
 
  const tagElement = tags.map((tag,index) => {
    return (
      <a href={tag.href} target="_blank" rel="noreferrer" key={index} className="reveal">
        <span
          style={{
            color: tag.color,
            backgroundColor: tag.backgroundColor,
            cursor: tag.href ? "pointer" : "not-allowed",
          }}
          className="tag"
        >
          {tag.name}
        </span>
      </a>
    );
  });
  return (
    <section id="skills">
      <article className="skill-header section-heading reveal">
        <h2>
          <span className="cyan">Skills</span>
        </h2>
        <p>
        My passion for technology has led me to explore various Programing languages ,tools and frameworks, and I look forward to further expanding my skills.
        </p>
      </article>
      <main className="tags-container fade-in">{tagElement}</main>
    </section>
  );
}

export default Skills;
