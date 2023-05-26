/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
// import p1 from "./p1.png"
// import p2 from './p2.png'
// import p3 from "./p3.png"
// import p4 from "./p4.png"


function Projects() {
  const [projects] = useState([
    {
      title: "CoinEx",
      img: "/projects/p1.png",
      gLink: "https://github.com/kushagra721/CoinEx---Crypto-Market",
      lLink: "https://coinex-crypto-market.netlify.app/",
      desc: "It is a Crypto application where user can track the prices of trending crypto currencies along with their graphs"
    },
    {
      title: "E-commerce Store",
      img: "/projects/p2.png",
      gLink: "https://github.com/kushagra721/E-Commerce_Store",
      lLink: "https://e-commerce-by-kushagra.netlify.app/",
      desc:"It is an E-commerce store where you can but all your electronics needs like laptops,Smartphones,Smart-watches,Accessories and More ... ",
    },
    {
      title: "24x7 News",
      img: "/projects/p3.png",
      gLink: "https://github.com/kushagra721/24x7-News",
      lLink: "https://github.com/kushagra721/24x7-News",
      desc: "It is an News app which shows all the latest news and also have categories filter in it so that user can read only the news topics he/she wants to read",
    },
    {
      title: "i-Notes",
      img: "/projects/p5.png",
      gLink: "https://github.com/kushagra721/i-Notes",
      lLink: "https://github.com/kushagra721/i-Notes",
      desc: "It is a notebook application where user can create notes.This application has all the features like Login,signup,Add notes,Delete notes and all the notes are stored on a local server and are fully secured.",

    },
    
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3 style={{color:"#ef403f"}}>Featured Projects</h3>
          <a
            href="https://github.com/kushagra721"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4 style={{marginLeft:"10px",color:"#ef403f"}}>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
                {project.desc}
              </p>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
