import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
            image: "https://i.pinimg.com/736x/3a/52/10/3a521018bc347acc3f1cb508ef11d3c9.jpg",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            github: "https://github.com/yourusername/ecommerce",
            live: "https://ecommerce-demo.com"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates and team features.",
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/582d2d179374693.Y3JvcCwxNjE2LDEyNjQsMCww.png",
            technologies: ["React", "Firebase", "Material-UI", "Redux"],
            github: "https://github.com/yourusername/taskapp",
            live: "https://taskapp-demo.com"
        },
        {
            title: "Weather Dashboard",
            description: "A weather application showing real-time weather data and forecasts using external APIs.",
            image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1ec76612748107.562de2f30d8b2.jpg",
            technologies: ["React", "OpenWeather API", "Chart.js"],
            github: "https://github.com/yourusername/weather",
            live: "https://weather-demo.com"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="gradient-bg"></div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="projects-content"
            >
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">Some of my recent work</p>
                
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FaGithub /> Code
                                        </a>
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FaLink /> Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.map((tech, i) => (
                                        <motion.span
                                            key={i}
                                            className="tech-tag"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
