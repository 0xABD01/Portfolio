import React, { useState } from "react";
import "./Certificates.css";
import certificates from "./Certificates.js";

function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderCategoryButtons = () => {
    return (
      <div className="category-list">
        {Object.keys(certificates).map((category, index) => (
          <button
            key={index}
            className={`category-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };

  const renderCertificates = () => {
    if (!selectedCategory) return null;

    const certs = certificates[selectedCategory].map((cert, idx) => (
      <div className="certificate-grid" key={idx}>
        <figure className="certificate-fig">
          <img src={require(`../../assets/images/${cert.image}`)} alt={cert.title} />
          <figcaption>
            <a href={cert.link} target="_blank" rel="noreferrer">{cert.title}</a>
            <p>{cert.issuer}</p>
            <p>{cert.date}</p>
          </figcaption>
        </figure>
      </div>
    ));

    return (
      <section className="certificate-category">
        <h3 className="category-title">{selectedCategory}</h3>
        <div className="certificate-grid-container">{certs}</div>
      </section>
    );
  };

  return (
    <section id="certificates">
      <blockquote className="certificate-header section-heading reveal">
        <h2><span className="cyan">Certificates </span></h2>
        <p>Here are some of the <span className="cyan">certifications </span>I've earned, demonstrating my expertise and commitment to continuous learning.</p>
      </blockquote>

      {renderCategoryButtons()}
      {renderCertificates()}
    </section>
  );
}

export default Certificates;
