import React from "react";
import "../style/landing.css";
import Divider from "./Divider";
import gl from "../assets/gl.png"
import aaghaaz from "../assets/aaghaaz.png"
import iee from "../assets/iee.jpg"
import imsuc from "../assets/imsuc.png"
import intro from "../assets/intro.mp4"

const Landing = () => {
  return (
    <div>



<section id="introduction-scroll"></section>
      <div className="landing-page">

        <div className="landing-page__content">
          <div className="landing-page__left">
            <h1 className="landing-page__name">Vishesh Verma</h1>
            <p className="landing-page__title">
              Passionate Web Dev & Tech Enthusiast
            </p>
            <p className="landing-page__description">
              4× National-Level Hackathon Winner | MERN Stack Expert | Advanced
              DSA in Java | UI/UX Innovator (Figma) | Real-Time Systems &
              WebSockets | AI-Powered Web Solutions | Scalable Architecture |
              SEO & High-Performance Web Apps
            </p>
            <div className="landing-page__buttons">
              <a target="_blank" href="https://drive.google.com/drive/folders/1DglD7f_OHgQJlZFSC8CrZk3OJs1hG4a2?usp=sharing" className="landing-page__btn">
                Resume
              </a>
              {/* <a href="/about" className="landing-page__btn">
                Contact
              </a> */}
            </div>
          </div>

          <div className="landing-page__right">
            <div className="landing-page__video-wrapper">
              <video
                className="landing-page__video"
                src={intro}
                autoPlay
                loop
                controls
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      <Divider />
      <section id="achivement-scroll"> 
      <h2 className="heading-main">Achievements / Hackathons</h2>
      </section>
      <Divider />

      <div className="card-cont">

        <div className="card-card">
          <div className="card-left">
            <h3>Quality Assurance Bug Bounty | 7th April 2025</h3>
            <p>
            Using a mix of manual testing, Selenium automation, Postman, and other QA tools, I successfully spotted several critical bugs and performance gaps. I provided detailed insights and actionable suggestions that significantly improved the site's functionality and efficiency.
            </p>
            <div className="info-row">
              <div className="info-pair">
                <span className="card-head">Competition:</span>{" "}
                <span className="card-ans">
                  Quality Assurance Bug Bounty Challenge
                </span>
              </div>
              <div className="info-pair">
                <span className="card-head">Hosted By:</span>{" "}
                <span className="card-ans">IMSUC, Ghaziabad</span>
              </div>
            </div>
            <div className="info-row">
              <div className="info-pair">
                <span className="card-head">Achievement:</span>{" "}
                <span className="card-ans">2nd Runner-up (3rd Place)</span>
              </div>
              <div className="info-pair">
                <span className="card-head">Awards:</span>{" "}
                <span className="card-ans">
                  Trophy | Certificate | ₹1000 Cash Prize 
                </span>
              </div>
            </div>
            <a href="https://drive.google.com/drive/folders/12lCYAxYQLHeBjXO-gpEBoHU97lMn7xyS?usp=sharing" target="_blank" rel="noopener noreferrer" className="proof-btn">Proves</a>
          </div>
          <div className="card-right">
            <img
              src={imsuc}
              alt="alt"
            />
          </div>
        </div>

        <div className="card-card">
        <div className="card-right">
            <img
              src={iee}
              alt="alt"
            />
          </div>
          <div className="card-left">
            <h3>IEEE CIS Poster Presentation | 29th March 2025</h3>
            <p>
            Developed SentiMail, an AI-powered web app that automates customer email processing using NLP and sentiment analysis. Integrated with Gmail API via OAuth 2.0 to fetch and categorize emails in real-time (e.g., feedback, queries, complaints). Built a centralized analytics dashboard using the MERN stack, featuring live charts and structured insights. Delivered a live demo showcasing both the AI backend and functional frontend.
            </p>
            <div className="info-row">
              <div className="info-pair">
                <span className="card-head">Competition:</span>{" "}
                <span className="card-ans">
                IEEE CIS Poster Presentation
                </span>
              </div>
              <div className="info-pair">
                <span className="card-head">Hosted By:</span>{" "}
                <span className="card-ans">AKGEC, Ghaziabad</span>
              </div>
            </div>
            <div className="info-row">
              <div className="info-pair">
                <span className="card-head">Achievement:</span>{" "}
                <span className="card-ans">2nd Rank (1st Runner-up)
                </span>
              </div>
              <div className="info-pair">
                <span className="card-head">Awards:</span>{" "}
                <span className="card-ans">
                Certificate by IEEE & Cash Prize of INR 2000

                </span>
              </div>
            </div>
            <a href="https://drive.google.com/drive/folders/1OOXhgDuJbW2Gd8wMINgxtoKLRL8EGlJF?usp=sharing" target="_blank" rel="noopener noreferrer" className="proof-btn">Proves</a>
          </div>
         
        </div>



        <div className="card-card">
          <div className="card-left">
            <h3>Aaghaaz (Web-A-Thon) | 9th February 2024</h3>
            <p>
            Built a fully functional e-commerce website in a 2-hour on-the-spot hackathon, focusing on responsive design, interactive cart features, and efficient API integration. Despite limited prep time post-exams, we delivered a smooth UI/UX experience with optimized backend performance, showcasing strong adaptability and rapid development skills.
            </p>
            <div className="info-row">
              <div className="info-pair">
                <span className="card-head">Competition:</span>{" "}
                <span className="card-ans">
                  Front-end Development Hackathon
                </span>
              </div>
              <div className="info-pair">
                <span className="card-head">Hosted By:</span>{" "}
                <span className="card-ans">IMSUC, Ghaziabad</span>
              </div>
            </div>
            <div className="info-row">
              <div className="info-pair">
                <span className="card-head">Achievement:</span>{" "}
                <span className="card-ans"> 2nd Runner-up (3rd Place)
                </span>
              </div>
              <div className="info-pair">
                <span className="card-head">Awards:</span>{" "}
                <span className="card-ans">
                Received a certificate and a medal 
                </span>
              </div>
            </div>
            <a href="https://drive.google.com/drive/folders/155e0pNKhGYYginzVpPmx2rdkMlXmnS6r?usp=sharing" target="_blank" rel="noopener noreferrer" className="proof-btn">Proves</a>
          </div>
          <div className="card-right">
          <img
              src={aaghaaz}
              alt="alt"
            />
          </div>
        </div>

        <div className="card-card">
        <div className="card-right">
        <img src= {gl} alt="alt" />


        
          </div>
          <div className="card-left">
            <h3>GDSC Hackathon | 18th December 20235</h3>
            <p>
            Built a full-stack web platform using the MERN stack to connect users with essential home services like plumbing, pipe fitting, and kitchen repairs. Implemented a secure service booking system, payment integration, and a job-matching algorithm to connect users with verified local workers. The platform follows a fixed commission model to promote employment opportunities while remaining free for users, combining accessibility with social impact.
            </p>
            <div className="info-row">
              <div className="info-pair">
                <span className="card-head">Competition:</span>{" "}
                <span className="card-ans">
                GDSC National Level Hackathon
                </span>
              </div>
              <div className="info-pair">
                <span className="card-head">Hosted By:</span>{" "}
                <span className="card-ans">GL Bajaj College, Noida
                </span>
              </div>
            </div>
            <div className="info-row">
              <div className="info-pair">
                <span className="card-head">Achievement:</span>{" "}
                <span className="card-ans">2nd Runner-up (3rd Place)
                </span>
              </div>
              <div className="info-pair">
                <span className="card-head">Awards:</span>{" "}
                <span className="card-ans">
                Certificate, Trophy, Cash Prize of INR 2000
                </span>
              </div>
            </div>
            <a href="https://drive.google.com/drive/folders/1FY6VhLTkLrkBu5P2PUnGDBTwrsO3eFuX?usp=sharing" target="_blank" rel="noopener noreferrer" className="proof-btn">Proves</a>

          </div>
         
        </div>






      </div>

      <Divider />

      <section id="project-scroll"></section>
      <h2 className="heading-main">Projects</h2>
      <Divider />

      <div className="proj-container">
      {/* Card 1 */}
      <div className="proj-card">
        <iframe className="proj-video" width="1690" height="648" src="https://www.youtube.com/embed/6kLZVGk2eyA" title="SentiMail Demo Video of Working" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        <h3 className="proj-title">SentiMail: AI-Powered Email Analysis & Insights</h3>
        <p className="proj-desc">SentiMail leverages AI, NLP, sentiment analysis, and ML models to automate email processing by integrating the Gmail API, OAuth 2.0, and webhooks within the MERN stack. It fetches and processes emails in real time, extracting key insights using intelligent data extraction. The system performs sentiment analysis to identify customer emotions, categorizes emails into various types (feedback, queries, complaints, etc.), and forwards them to appropriate departments. It also generates real-time analytics, providing structured insights, trend charts, and sentiment scores via a centralized dashboard, while efficiently handling high email volumes through automated categorization.</p>
  <div className="proj-btns">
    <a target="_blank" href="https://senti-mail-technical-poster-qr.vercel.app/" className="proj-btn">Live Demo</a>
    <a target="_blank" href="https://github.com/Vishesh-Verma-Work/Datamatics-SentiMail-IITB" className="proj-btn">Source Code</a>
  </div>
</div>


      <div className="proj-card">
      <iframe className="proj-video" width="1690" height="648" src="https://www.youtube.com/embed/rA-V1SuCpTg" title="Health-Care Simplified" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <h3 className="proj-title">Health-Care Simplified | Web Solution</h3>
        <p className="proj-desc">Healthcare Simplified is built using the MERN stack to provide a seamless web platform for booking appointments at local hospitals. MongoDB is used to store hospital details, user profiles, and appointment data, while Node.js and Express.js handle backend server logic, API routing, and real-time booking functionality. React is utilized for the frontend, ensuring a responsive and interactive user interface for searching hospitals, selecting available time slots, and making bookings. Real-time appointment booking is achieved through efficient backend logic, and hospitals can list their services and manage appointments through dynamic, user-friendly dashboards.</p>
        <div className="proj-btns">
          <a target="_blank" href="https://youtu.be/rA-V1SuCpTg" className="proj-btn">Live Demo</a>
          <a target="_blank" href="https://github.com/Vishesh-Verma-Work/Minor_Project-Revolutionizing-Healthcare-A-Web-Based-Solution" className="proj-btn">Source Code</a>
        </div>
      </div>


    </div>


    <Divider />
      <h2 className="heading-main">Skills</h2>
      <Divider />


    <div className="skills-container">
      {/* <h2 className="skills-title">My Skills</h2> */}
      <div className="skills-btn-container">
        <button className="skill-btn">Figma</button>
        <button className="skill-btn">HTML</button>
        <button className="skill-btn">CSS</button>
        <button className="skill-btn">Bootstrap</button>
        <button className="skill-btn">JavaScript</button>
        <button className="skill-btn">React</button>
        <button className="skill-btn">Node.js</button>
        <button className="skill-btn">Express</button>
        <button className="skill-btn">MongoDB</button>
        <button className="skill-btn">SQL</button>
        <button className="skill-btn">Github</button>
        <button className="skill-btn">Postman</button>
        <button className="skill-btn">C</button>
        <button className="skill-btn">Java</button>
      </div>
    </div>





    </div>
  );
};

export default Landing;
