import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';


const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/Linnea87/repos?sort=updated&per_page=100')
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(repo => 
                    repo.description && 
                    !repo.topics.includes('exclude-from-portfolio')
                );
                setRepos(filtered);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })

    }, []);

    return (
        <section className={styles.projects} id="projects">
            <motion.div 
                className={styles.header}
                initial= {{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className={styles.title}>My Projects</h2>
                <p className={styles.subtitle}>A selection of my work on GitHub</p>
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