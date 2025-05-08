import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import {
    FaDatabase,
    FaGithub,
    FaJava,
    FaJs,
    FaLinkedin,
    FaNodeJs,
    FaPython,
    FaReact
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
    useEffect(() => {
        // Create floating particles
        const createParticles = () => {
            const particles = document.querySelector('.particles');
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.animationDelay = `${Math.random() * 15}s`;
                particles.appendChild(particle);
            }
        };

        createParticles();
    }, []);

    return (
        <section className="home-section">
            <div className="split-container">
                <div className="left-side">
                    <div className="particles"></div>
                    <div className="intro-content">
                        <h1 className="name-title">Sai Sushanth</h1>
                        <h2 className="role-title">Full Stack Developer & Creative Technologist</h2>
                        <div className="status-indicator">
                            <span className="status-dot"></span>
                            Available for Projects
                        </div>
                    </div>
                </div>

                <div className="right-side">
                    <div className="terminal-container">
                        <div className="terminal-header">
                            <div className="terminal-dot"></div>
                            <div className="terminal-dot"></div>
                            <div className="terminal-dot"></div>
                        </div>
                        <div className="code-content">
                            <pre>
                                <code>
                                    {`const developer = {
    name: 'Sai Sushanth',
    skills: ['React', 'Node.js', 'MongoDB'],
    passion: 'Building amazing web experiences'
};

function createMagic() {
    return developer.skills.map(
        skill => innovation + creativity
    );
}`}
                                </code>
                            </pre>
                            <span className="cursor"></span>
                        </div>
                    </div>

                    <div className="tech-stack">
                        <motion.div className="tech-item" whileHover={{ scale: 1.05 }}>
                            <FaReact className="tech-icon" />
                            <span className="tech-info">React</span>
                        </motion.div>
                        <motion.div className="tech-item" whileHover={{ scale: 1.05 }}>
                            <FaNodeJs className="tech-icon" />
                            <span className="tech-info">Node.js</span>
                        </motion.div>
                        <motion.div className="tech-item" whileHover={{ scale: 1.05 }}>
                            <FaDatabase className="tech-icon" />
                            <span className="tech-info">MongoDB</span>
                        </motion.div>
                        <motion.div className="tech-item" whileHover={{ scale: 1.05 }}>
                            <FaPython className="tech-icon" />
                            <span className="tech-info">Python</span>
                        </motion.div>
                        <motion.div className="tech-item" whileHover={{ scale: 1.05 }}>
                            <FaJava className="tech-icon" />
                            <span className="tech-info">Java</span>
                        </motion.div>
                        <motion.div className="tech-item" whileHover={{ scale: 1.05 }}>
                            <FaJs className="tech-icon" />
                            <span className="tech-info">JavaScript</span>
                        </motion.div>
                    </div>

                    
                </div>
            </div>
        </section>
    );
};

export default Home;
