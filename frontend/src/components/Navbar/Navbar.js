import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';
import { SECTIONS, NAV_LINKS } from '../../constants/navigation';

// ====== Navbar Component ===============================

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    // ====== Intersection Observer ===============================

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.1 });

        SECTIONS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // ====== Handlers ===============================

    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId);
        setMenuOpen(false);
    };

    // ====== Render ===============================

    return (
       <motion.nav 
       className={styles.navbar}
       initial={{ y: -100, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.8 }}
       >
        <div className={styles.logo}>LTZ</div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
            {NAV_LINKS.map((link) => (
                <li key={link.id}>
                    <a
                        href={`#${link.id}`}
                        onClick={() => handleNavClick(link.id)}
                        className={activeSection === link.id ? styles.active : ''}
                    >
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>

        <div 
        className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
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