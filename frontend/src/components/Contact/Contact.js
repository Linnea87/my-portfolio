import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import globalStyles from '../../styles/global.module.css';
import useContact from '../../hooks/useContact';

// ====== Contact Component ===============================

const Contact = () => {
  const { form, status, loading, sendEmail } = useContact();

  // ====== Render ===============================

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.outer}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={globalStyles.title}>Get In <span className={globalStyles.accent}>Touch</span></h2>
          <p className={globalStyles.subtitle}>Feel free to reach out — I'd love to connect!</p>
        </motion.div>

        <div className={styles.container}>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className={styles.form}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className={styles.input}
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Message</label>
              <textarea
                name="message"
                placeholder="Your message..."
                className={styles.textarea}
                rows={6}
                required
              />
            </div>

            <button type="submit" className={styles.btn} disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className={styles.success}>Message sent successfully! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className={styles.error}>Something went wrong. Please try again.</p>
            )}
          </motion.form>
        </div>

      </div>
    </section>
  );
};

export default Contact;