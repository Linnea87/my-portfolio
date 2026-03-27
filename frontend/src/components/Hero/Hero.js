import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import globalStyles from '../../styles/global.module.css';
import heroBg from '../../assets/hero-bg.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// ====== Hero Component ===============================

const Hero = () => {

    // ====== Render ===============================

    return (
        <section className={styles.hero} id="hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className={styles.content}>
                <motion.p
                    className={styles.greeting}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Hi, I'm
                </motion.p>

                <motion.h1
                    className={styles.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Linnéa
                    <span className={styles.lastName}> Ternevik Zackrisson</span>
                </motion.h1>

                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Junior Full Stack Software Developer
                </motion.h2>

                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Junior developer with a creative soul — where art meets code. Passionate about building meaningful applications with clean code and great user experiences.
                </motion.p>

                <motion.div
                    className={styles.buttons}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <a href="#projects" className={globalStyles.btnPrimary}>View Projects</a>
                    <a href="#contact" className={globalStyles.btnSecondary}>Contact Me</a>
                    <a href="/cv.pdf" download className={globalStyles.btnSecondary}>Download CV</a>
                </motion.div>

                <motion.div
                    className={styles.socials}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <a
                        href="https://github.com/Linnea87"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.socialLink}
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/linneaternevik"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.socialLink}
                    >
                        <FaLinkedin />
                    </a>
                </motion.div>

            </div>
            <div className={styles.glowOne}></div>
            <div className={styles.glowTwo}></div>
        </section>
    );
};

export default Hero;