import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
       <motion.nav 
       className={styles.navbar}
       initial={{ y: -100, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.8 }}
       >
        <div className={styles.logo}>LTZ</div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
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