import React from "react";
import "./FooterStyle.scss";

const Footer = (props) => {
  return (
    <section id="contact-section">
      <h1 class="section-heading">Let's work together</h1>
      <p>Find me on:</p>
      <p>
        <a href="#">
          {" "}
          <i class="fab fa-github"> Github</i>{" "}
        </a>
        <a href="#">
          {" "}
          <i class="fab fa-linkedin-in"> Linkedin</i>{" "}
        </a>
        <a href="#">
          {" "}
          <i class="fas fa-envelope-square"> Email</i>{" "}
        </a>
      </p>
    </section>
  );
};

export default Footer;
