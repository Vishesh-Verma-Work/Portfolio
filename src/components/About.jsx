import React from 'react';
import "../style/about.css";
import profilePic from "../assets/profilepic.png"; 

const About = () => {
  return (
    <div className="about-container" id="about-scroll">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-left">
          <img src={profilePic} alt="Vishesh Verma" className="profile-pic" />
          <div className="contact-info">
            <h3>Contact</h3>
            <p><strong>Phone:</strong> +91-8445172303</p>
            <p><strong>Email:</strong> visheshverma.workin@gmail.com</p>
          </div>
        </div>

        <div className="about-right">
          <section className="edu-section">
            <h2>Schooling</h2>
            <p><strong>10th (CBSE):</strong> Blooming Dale School, Budaun | 2020 | 82.4%</p>
            <p><strong>12th (CBSE):</strong> Blooming Dale School, Budaun | 2022 | 89.2%</p>
          </section>

          <section className="edu-section">
            <h2>B.Tech - Computer Science 2022-26</h2>
            <p><strong>College:</strong>IMSEC Ghaziabad</p>
            <p><strong>1st Sem SGPA : </strong> 8.45</p>
            <p><strong>2nd Sem SGPA : </strong> 8.64</p>
            <p><strong>3rd Sem SGPA : </strong> 8.92</p>
            <p><strong>4th Sem SGPA : </strong> 8.30</p>
          </section>

          <section className="skills-section">
            <h2>Subjects & Focus Areas</h2>
            <p>Data Structures & Algorithms using JAVA, Operating Systems, DBMS, Computer Networks, Web Development (MERN Stack), Software Engineering.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
