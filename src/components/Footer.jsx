import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css"; // Import CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <p style={{ color: 'white' }}>© {new Date().getFullYear()} Sai Sushanth. All rights reserved.</p>

            <div className="footer-icons">
                <a href="https://linkedin.com/in/saisushanthguptha" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/saisushanthmoturi" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="mailto:saisushanth194@gmail.com"><FaEnvelope /></a>
            </div>
        </footer>
    );
};

export default Footer;
