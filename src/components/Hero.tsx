import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Big vertical TOASH text like the poster */}
      <div className={styles.verticalText} aria-hidden="true">TOASH</div>

      {/* Right vertical label */}
      <div className={styles.verticalRight} aria-hidden="true">ONLINE</div>

      {/* Main content */}
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <p className={styles.eyebrow}>
            <span className={styles.tag}>// 001</span> Creative Developer
          </p>
          <h1 className={styles.headline}>
            I BUILD<br />
            <span className={styles.accentWord}>DIGITAL</span><br />
            WORLDS
          </h1>
          <p className={styles.sub}>
            Designer × Developer × 3D Artist<br />
            Turning ideas into immersive experiences.
          </p>
          <div className={styles.ctas}>
            <a href="#work" className={styles.btnPrimary}>View Work</a>
            <a href="#contact" className={styles.btnGhost}>Contact Me</a>
          </div>
        </div>

        {/* Samurai character */}
        <div className={styles.samuraiWrap}>
          <div className={styles.samuraiBg} aria-hidden="true" />
          <Image
            src="/samurai.png"
            alt="Samurai warrior character"
            width={480}
            height={700}
            className={styles.samurai}
            priority
          />
          <div className={styles.scanLines} aria-hidden="true" />
        </div>
      </div>

      {/* Bottom strip */}
      <div className={styles.bottomStrip}>
        <span className={styles.mono}>TOASH.DEV</span>
        <span className={styles.mono}>©2025</span>
        <span className={styles.mono}>PORTFOLIO_V1</span>
      </div>
    </section>
  )
}
