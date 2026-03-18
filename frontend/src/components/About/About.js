import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.about} id="about">
            <div className={styles.container}>

                {/* Illustration */}
                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.placeholder}>
                        <span>🎨</span>
                    </div>
                </motion.div>

                {/* Text */}
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                  <h2 className={styles.title}>About <span className={styles.accent}>Me</span></h2>

                    <p className={styles.bio}>
                        I'm a Junior Full Stack Developer with a creative soul — where art meets code.
                        Painting has always been a hobby and a passion of mine. When I decided to retrain
                        and change careers, full stack development felt like the natural choice — a field
                        where I could still express my creative side, just with a different set of tools.
                    </p>
                    <p className={styles.bio}>
                        What I love most about full stack development is seeing the whole picture — how
                        the frontend and backend connect and work together. To me, it's the best of both
                        worlds, and understanding the full flow makes me a better developer.
                    </p>

                    <p className={styles.bio}>
                        To broaden my skills even further, I'm currently studying mobile app development
                        at Folkuniversitetet — working with Java, Kotlin and SwiftUI. Because I believe
                        great developers never stop learning!
                    </p>

                    {/* Utbildning */}
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Education</h3>
                        <div className={styles.educationItem}>
                            <span className={styles.year}>2023 – 2024</span>
                            <div>
                                <p className={styles.degree}>Full Stack Software Development</p>
                                <p className={styles.school}>Code Institute · Diploma (Advanced Front-End)</p>
                            </div>
                        </div>
                        <div className={styles.educationItem}>
                            <span className={styles.year}>2025 – present</span>
                            <div>
                                <p className={styles.degree}>Mobile Application Development</p>
                                <p className={styles.school}>Folkuniversitetet · Kotlin, Java & SwiftUI</p>
                            </div>
                        </div>
                    </div>

                    {/* Intressen */}
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Interests</h3>
                        <div className={styles.interests}>
                            <span className={styles.tag}>🎨 Art & Design</span>
                            <span className={styles.tag}>📱 Mobile Dev</span>
                            <span className={styles.tag}>🌐 Web Dev</span>
                            <span className={styles.tag}>✨ UI/UX</span>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;