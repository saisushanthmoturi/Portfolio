import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll"; // For smooth scrolling
import "./Navbar.css"; // Import CSS

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Handle scroll events
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Update active section based on scroll position
            const sections = ['home', 'about', 'projects', 'contact'];
            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: "Home", id: "home" },
        { title: "About", id: "about" },
        { title: "Projects", id: "projects" },
        { title: "Contact", id: "contact" }
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="nav-logo"
                    onClick={() => setIsOpen(false)}
                >
                    Sushanth's Portfolio
                </Link>
                

                <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.id}
                            to={link.id}
                            smooth={true}
                            duration={500}
                            spy={true}
                            className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.title}
                        </Link>
                    ))}
                    <a
                        href="/Resume.pdf"
                        className="resume-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                    >
                        Resume <span>↓</span>
                    </a>
                </div>

                <div 
                    className={`nav-toggle ${isOpen ? 'active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;