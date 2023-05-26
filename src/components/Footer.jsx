/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Kushagra.</span>
        <div className="links">
          <a href="https://github.com/kushagra721">
            <i  className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/_kushagr__/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/kushagra-kumar-b5865621a/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Kushagra.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
