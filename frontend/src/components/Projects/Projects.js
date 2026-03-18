import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import globalStyles from '../../styles/global.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import useProjects from '../../hooks/useProjects';

// ====== Projects Component ===============================

const Projects = () => {
    const { repos, loading } = useProjects();

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
                <div className={styles.grid}>
                    {repos.map((repo, index) => (
                        <motion.div 
                            key={repo.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
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
                        </motion.div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Projects;