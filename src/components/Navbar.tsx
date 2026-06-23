'use client'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['Home', 'Work', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#home" className={styles.logo}>
        <span className={styles.logoText}>TOASH</span>
        <span className={styles.logoDot}>.</span>
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.burgerLineOpen : styles.burgerLine} />
        <span className={menuOpen ? styles.burgerLineOpen2 : styles.burgerLine} />
        <span className={menuOpen ? styles.burgerLineOpen3 : styles.burgerLine} />
      </button>
    </nav>
  )
}
