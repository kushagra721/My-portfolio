/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import my from "./my.jpeg" 
import "./App.css";

function Banner() {

  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img className="My-img" src={my} alt="myimg" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm kushagra</h6>
            <h3>Web Developer/Freelancer</h3>
            <p>
              Frontend developer having expertise in React.js,JavaScript,Material UI,BootStrap,HTML and CSS.<br/>I like to craft solid and scalable frontend products with great user experiences.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
