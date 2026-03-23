import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import globalStyles from '../../styles/global.module.css';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import useProjects from '../../hooks/useProjects';

// ====== Projects Component ===============================

const Projects = () => {
    const { repos, loading } = useProjects();
    const carouselRef = useRef(null);

    // ====== Scroll Handlers ===============================

    const getScrollStep = () => {
        const card = carouselRef.current?.querySelector(`.${styles.card}`);
        if (!card) return 340;
        const cardWidth = card.getBoundingClientRect().width;
        return Math.round(cardWidth + 24); // card + gap
    };

    const scrollLeft = () => {
        const step = getScrollStep();
        carouselRef.current.scrollBy({ left: -step, behavior: 'smooth' });
    };

    const scrollRight = () => {
        const step = getScrollStep();
        carouselRef.current.scrollBy({ left: step, behavior: 'smooth' });
    };

    // ====== Render ===============================

    return (
        <section className={styles.projects} id="projects">
            <motion.div 
                className={styles.header}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className={globalStyles.title}>My <span className={globalStyles.accent}>Projects</span></h2>
                <p className={globalStyles.subtitle}>A selection of my work on GitHub</p>
            </motion.div>

            {loading ? (
                <div className={styles.loading}>Loading projects...</div>
            ) : (
                <div className={styles.carouselWrapper}>
                    <button className={styles.arrowLeft} onClick={scrollLeft}>
                        <FaChevronLeft />
                    </button>

                    <div className={styles.carousel} ref={carouselRef}>
                        {repos.map((repo, index) => (
                            <motion.div 
                                key={repo.id}
                                className={styles.card}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <a href={repo.html_url} target="_blank" rel="noreferrer" className={styles.cardLink} aria-label={`Open repository: ${repo.name}`}>
                                    <div className={styles.cardHeader}>
                                        <h3 className={styles.repoName}>{repo.name}</h3>
                                        <div className={styles.links}>
                                            <a href={repo.html_url} target="_blank" rel="noreferrer">
                                                <FaGithub />
                                            </a>
                                            {repo.homepage && (
                                                <a href={repo.homepage} target="_blank" rel="noreferrer">
                                                    <FaExternalLinkAlt />
                                                </a>
                                            )} 
                                        </div>
                                    </div>
                                    <p className={styles.description}>{repo.description}</p>
                                    {repo.language && (
                                        <span className={styles.language}>{repo.language}</span>
                                    )}
                                    <div className={styles.cardIndicator}>
                                        <FaExternalLinkAlt />
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    <button className={styles.arrowRight} onClick={scrollRight}>
                        <FaChevronRight />
                    </button>
                </div>
            )}
        </section>
    );
};

export default Projects;