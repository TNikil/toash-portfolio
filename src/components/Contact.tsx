'use client'
import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <div className={styles.left} data-reveal="left">
          <span className={styles.sectionLabel}>// 004</span>
          <h2 className={styles.sectionTitle}>
            LET'S<br />
            <span className={styles.outline}>CONNECT</span>
          </h2>
          <p className={styles.sub}>
            Have a project in mind? Want to collaborate?<br />
            I'm ready to bring your vision to life.
          </p>

          <div className={styles.contactLinks}>
            <a href="mailto:toash@email.com" className={styles.contactRow}>
              <span className={styles.contactIcon}>✉</span>
              <span>toash@email.com</span>
            </a>
            <a href="https://github.com/toash" className={styles.contactRow}>
              <span className={styles.contactIcon}>⌥</span>
              <span>github.com/toash</span>
            </a>
            <a href="https://linkedin.com/in/toash" className={styles.contactRow}>
              <span className={styles.contactIcon}>◈</span>
              <span>linkedin.com/in/toash</span>
            </a>
            <a
              href="https://wa.me/94711368724"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactRow}
            >
              <span className={styles.contactIcon}>◉</span>
              <span>+94 71 136 8724</span>
            </a>
          </div>
        </div>

        <div className={styles.right} data-reveal="right">
          {sent ? (
            <div className={styles.successMsg}>
              <span className={styles.successIcon}>✓</span>
              <p>Message transmitted.<br />I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">NAME_</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={styles.input}
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">EMAIL_</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">MESSAGE_</label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                TRANSMIT →
              </button>
            </form>
          )}
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerLogo}>TOASH<span>.</span></span>
          <p className={styles.footerCopy}>© 2025 TOASH — All rights reserved.</p>

          <span className={styles.footerMono}>BUILD_V1.0.0</span>
        </div>
      </div>

      {/* Floating WhatsApp bubble */}
      <a
        href="https://wa.me/94711368724"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.waFloat}
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="22"
          height="22"
          className={styles.waFloatIcon}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className={styles.waFloatLabel}>WHATSAPP →</span>
      </a>
    </section>
  )
}
