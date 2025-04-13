import React from 'react';
import  "../style/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Vishesh Verma</h2>
          <p>Passionate Web Dev & Tech Enthusiast

4× National-Level Hackathon Winner | MERN Stack Expert | Advanced DSA in Java | UI/UX Innovator (Figma) | Real-Time Systems & WebSockets | AI-Powered Web Solutions | Scalable Architecture | SEO & High-Performance Web Apps</p>
        </div>
    <div className="non-brk">
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#introduction-scroll">Introduction</a></li>
            <li><a href="#achivement-scroll">Achievement</a></li>
            <li><a href="#project-scroll">Projects</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Social Links</h4>
          <a target="_blank" href="https://www.linkedin.com/in/vishesh-verma-96a6b2293/">LinkedIn</a><br />
          <a target='_blank' href="https://github.com/Vishesh-Verma-Work">Github</a><br />
          <a target='_blank' href="https://leetcode.com/u/Vishesh_Verma07/">Leetcode</a>
        </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SentiMail. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
