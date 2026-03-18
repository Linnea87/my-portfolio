import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import globalStyles from '../../styles/global.module.css';
import { ROW_1, ROW_2 } from '../../constants/skills';

// ====== Ticker Row Component ===============================

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

// ====== Skills Component ===============================

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
                <h2 className={globalStyles.title}>My <span className={globalStyles.accent}>Skills</span></h2>
                <p className={globalStyles.subtitle}>My tech stack & tools</p>
            </motion.div>

            <TickerRow items={ROW_1} direction="left" />
            <TickerRow items={ROW_2} direction="right" />
        </section>
    );
};

export default Skills;