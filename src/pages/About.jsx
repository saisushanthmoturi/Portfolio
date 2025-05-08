import { motion } from "framer-motion";
import React from "react";
import { FaAws, FaCode, FaDocker, FaGit, FaGithub, FaLinkedin, FaMobile, FaNodeJs, FaPython, FaReact, FaServer } from "react-icons/fa";
import { SiExpress, SiFirebase, SiMongodb, SiMui, SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si";
import "./About.css";

const About = () => {
    const skills = {
        frontend: [
            { name: "React", icon: FaReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Material-UI", icon: SiMui }
        ],
        backend: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "Express", icon: SiExpress },
            { name: "Python", icon: FaPython },
            { name: "MongoDB", icon: SiMongodb },
            { name: "PostgreSQL", icon: SiPostgresql }
        ],
        tools: [
            { name: "Git", icon: FaGit },
            { name: "Docker", icon: FaDocker },
            { name: "AWS", icon: FaAws },
            { name: "Firebase", icon: SiFirebase },
            { name: "REST APIs", icon: FaCode }
        ]
    };

    const experiences = [
        {
            role: "Full Stack Developer Intern",
            company: "Tech Company",
            period: "June 2023 - Present",
            description: "Developing scalable web applications using modern technologies."
        }
    ];

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="about-content"
                >
                    <h2 className="section-title">About Me</h2>
                    
                    <div className="about-grid">
                        <div className="about-text">
                            <h3>Who I Am</h3>
                            <p>
                                I'm a passionate Full Stack Developer pursuing B.Tech in Computer Science,
                                with a strong foundation in both frontend and backend development.
                                I specialize in creating responsive and user-friendly web applications
                                using modern technologies and best practices.
                            </p>
                            <div className="social-links">
                                <a href="https://github.com/saisushanthmoturi" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>

                        <div className="expertise-section">
                            <h3>What I Do</h3>
                            <div className="expertise-grid">
                                <div className="expertise-card">
                                    <FaCode className="expertise-icon" />
                                    <h4>Frontend Development</h4>
                                    <p>Building responsive and interactive user interfaces</p>
                                </div>
                                <div className="expertise-card">
                                    <FaServer className="expertise-icon" />
                                    <h4>Backend Development</h4>
                                    <p>Creating robust server-side applications</p>
                                </div>
                                <div className="expertise-card">
                                    <FaMobile className="expertise-icon" />
                                    <h4>Responsive Design</h4>
                                    <p>Ensuring great user experience across all devices</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skills-section">
                        <h3>Technical Skills</h3>
                        <div className="skills-container">
                            {Object.entries(skills).map(([category, categorySkills]) => (
                                <div key={category} className="skill-category">
                                    <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                                    <div className="skills-scroll">
                                        <div className="scroll-content">
                                            {[...categorySkills, ...categorySkills].map((skill, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="skill-item"
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    <skill.icon className="skill-icon" />
                                                    <span>{skill.name}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="experience-section">
                        <h3>Experience</h3>
                        <div className="timeline">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className="timeline-item"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    <h4>{exp.role}</h4>
                                    <p className="company">{exp.company}</p>
                                    <p className="period">{exp.period}</p>
                                    <p className="description">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
