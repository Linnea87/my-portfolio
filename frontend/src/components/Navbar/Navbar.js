import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.1 });

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
       <motion.nav 
       className={styles.navbar}
       initial={{ y: -100, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.8 }}
       >
        <div className={styles.logo}>LTZ</div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
            <li><a href="#hero" className={activeSection === 'hero' ? styles.active : ''}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? styles.active : ''}>About</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? styles.active : ''}>Projects</a></li>
            <li><a href="#skills" className={activeSection === 'skills' ? styles.active : ''}>Skills</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? styles.active : ''}>Contact</a></li>
        </ul>

        <div 
        className={styles.hamburger} 
        onClick={() => setMenuOpen(!menuOpen)}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
       </motion.nav>
    );
};

export default Navbar;