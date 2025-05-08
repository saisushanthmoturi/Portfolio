import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="contact-content"
                >
                    <h2 className="section-title">Get In Touch</h2>
                    
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h3>Let's Connect <span className="blink">_</span></h3>
                            <p>
                                I'm always interested in hearing about new projects and opportunities.
                                Feel free to reach out if you'd like to collaborate!
                            </p>
                            
                            <div className="contact-details">
                                <motion.div 
                                    className="contact-item"
                                    whileHover={{ x: 10 }}
                                >
                                    <FaEnvelope className="contact-icon" />
                                    <span>saisushanth194@gmail.com</span>
                                </motion.div>
                                
                                <motion.div 
                                    className="contact-item"
                                    whileHover={{ x: 10 }}
                                >
                                    <FaPhone className="contact-icon" />
                                    <span>+91 9398684538</span>
                                </motion.div>
                                
                                <motion.div 
                                    className="contact-item"
                                    whileHover={{ x: 10 }}
                                >
                                    <FaMapMarkerAlt className="contact-icon" />
                                    <span>Hyderabad, India</span>
                                </motion.div>
                            </div>

                            <div className="social-links">
                                <motion.a 
                                    href="https://github.com/saisushanthmoturi" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5 }}
                                >
                                    <FaGithub />
                                </motion.a>
                                <motion.a 
                                    href="https://linkedin.com/in/yourusername" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5 }}
                                >
                                    <FaLinkedin />
                                </motion.a>
                            </div>
                        </div>

                        <motion.form 
                            onSubmit={handleSubmit} 
                            className="contact-form"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    required
                                ></textarea>
                            </div>
                            <motion.button 
                                type="submit" 
                                className="submit-btn"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Message
                            </motion.button>
                        </motion.form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
