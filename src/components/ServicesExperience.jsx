import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "UI Design",
      // desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Product Design",
      // desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: true,
    },
    {
      icon: "fa-ruler",
      title: "Branding",
      // desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3 style={{fontSize:"20px"}}>Looking for Interships/Jobs</h3>
            <p>Work Experience </p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>1</h4>
              <p>Internships done</p>
            </div>
            <div className="portfolio">
              <h4 style={{fontSize:"20px"}}>looking for Internships/Jobs</h4>
              <p >Work Experience</p>
            </div>
            <div className="portfolio">
              <h4>35+</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>5</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;
