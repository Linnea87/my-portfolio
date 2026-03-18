import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import {
    Html5Original, Css3Original, JavascriptOriginal, ReactOriginal,
    BootstrapOriginal, PythonOriginal, DjangoPlain, NodejsOriginal,
    PostgresqlOriginal, KotlinOriginal, JavaOriginal, SwiftOriginal,
    FirebaseOriginal, GitOriginal, GithubOriginal, FigmaOriginal,
    AndroidstudioOriginal, XcodeOriginal,
} from 'devicons-react';

const row1 = [
    { name: "HTML5", icon: <Html5Original size={28} /> },
    { name: "CSS3", icon: <Css3Original size={28} /> },
    { name: "JavaScript", icon: <JavascriptOriginal size={28} /> },
    { name: "React", icon: <ReactOriginal size={28} /> },
    { name: "Bootstrap", icon: <BootstrapOriginal size={28} /> },
    { name: "Python", icon: <PythonOriginal size={28} /> },
    { name: "Django", icon: <DjangoPlain size={28} /> },
    { name: "Node.js", icon: <NodejsOriginal size={28} /> },
    { name: "PostgreSQL", icon: <PostgresqlOriginal size={28} /> },
];

const row2 = [
    { name: "Kotlin", icon: <KotlinOriginal size={28} /> },
    { name: "Java", icon: <JavaOriginal size={28} /> },
    { name: "SwiftUI", icon: <SwiftOriginal size={28} /> },
    { name: "Firebase", icon: <FirebaseOriginal size={28} /> },
    { name: "Git", icon: <GitOriginal size={28} /> },
    { name: "GitHub", icon: <GithubOriginal size={28} /> },
    { name: "Figma", icon: <FigmaOriginal size={28} /> },
    { name: "Android Studio", icon: <AndroidstudioOriginal size={28} /> },
    { name: "Xcode", icon: <XcodeOriginal size={28} /> },
];

const TickerRow = ({ items, direction }) => {
    const doubled = [...items, ...items];
    return (
        <div className={styles.tickerWrapper}>
            <div className={`${styles.tickerTrack} ${direction === 'right' ? styles.tickerRight : styles.tickerLeft}`}>
                {doubled.map((item, index) => (
                    <div key={index} className={styles.tickerItem}>
                        {item.icon}
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section className={styles.skills} id="skills">
            <motion.div
                className={styles.header}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className={styles.title}>Skills</h2>
                <p className={styles.subtitle}>My tech stack & tools</p>
            </motion.div>

            <TickerRow items={row1} direction="left" />
            <TickerRow items={row2} direction="right" />
        </section>
    );
};

export default Skills;