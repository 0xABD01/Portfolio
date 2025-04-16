import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  console.log(formData);
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xg6fr8l",
        "template_u3vifwl",
        e.target,
        "O9m2Es3PfY5iXiD8f"
      )
      .then((resp) => {
        alert("Message sent Successfully!");
      }).catch(error => console.log(error));
  }
  return (
    <section id="contact">
      <blockquote className="contact-header section-heading reveal">
        <h2><span className="cyan">Contact</span></h2>
        <p >
        You can <span className="cyan">contact me</span> from here. I'd appreciate your <span className="cyan">feedback</span> on my portfolio!
        </p>
      </blockquote>
      <div className="contact-wrapper">
        <form id="contact-form" class="form-horizontal" onSubmit={sendEmail}>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div class="col-sm-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <textarea
            className="form-control"
            type="text"
            rows="10"
            placeholder="MESSAGE"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            className="btn btn-primary send-button"
            id="submit"
            type="submit"
            value="SEND"
          >
            <div className="alt-send-button">
              <i class="fa fa-paper-plane"></i>
              <span class="send-text">SEND</span>
            </div>
          </button>
        </form>

        <div className="direct-contact-container reveal">
          <ul className="contact-list">
            <li className="list-item">
              <i class="fa-solid fa-location-dot fa-2x">
                <span className="contact-text place">Morocco, Rabat</span>
              </i>
            </li>

            <li className="list-item">
              <i class="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <a href="mailto:Abderrazzak.esl@gmail.com" title="Send me an email">
                    Abderrazzak.esl@gmail.com
                  </a>
                </span>
              </i>
            </li>
          </ul>

          <ul className="social-media-list">
          <li>
            <a href="https://github.com/0xABD01" target="_blank" rel="noreferrer noopener">
              <i className="fa-brands fa-github"></i> 
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/abderrazzak-essalmi-807ba1268" target="_blank" rel="noreferrer noopener">
              <i className="fa-brands fa-linkedin"></i> 
            </a>
          </li>
        </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
