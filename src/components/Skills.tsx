import styles from './Skills.module.css'

const skillGroups = [
  { category: 'DESIGN TOOLS', icon: '◈', skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro', 'Gimp', 'Inkscape', 'Figma'] },
  { category: '3D & MOTION', icon: '◉', skills: ['Blender 3D', 'ZBrush'] },
  { category: 'WEB DEV', icon: '◎', skills: ['HTML5', 'CSS3/SCSS', 'JavaScript', 'Vue.js / React.js', 'Next.js'] },
  { category: 'LANGUAGES', icon: '◆', skills: ['C#', 'Python', 'Android Studio'] },
  { category: 'PRODUCTIVITY', icon: '◇', skills: ['Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint', 'Inventory Management'] },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.accentPanel} aria-hidden="true">
        <span className={styles.panelText}>EXPERTISE</span>
      </div>
      <div className={styles.inner}>
        <div className={styles.header} data-reveal data-delay="0">
          <span className={styles.sectionLabel}>// 003</span>
          <h2 className={styles.sectionTitle}>MY<br /><span className={styles.outline}>ARSENAL</span></h2>
          <p className={styles.sectionSub}>Tools and technologies I wield to build memorable digital experiences.</p>
        </div>
        <div className={styles.groupsWrap}>
          {skillGroups.map((group, i) => (
            <div key={group.category} className={styles.group} data-reveal data-delay={String(i * 80)}>
              <div className={styles.groupHeader}>
                <span className={styles.groupIcon}>{group.icon}</span>
                <span className={styles.groupName}>{group.category}</span>
              </div>
              <ul className={styles.skillList}>
                {group.skills.map((skill) => (
                  <li key={skill} className={styles.skillItem}>
                    <span className={styles.skillBullet}>—</span>
                    <span className={styles.skillName}>{skill}</span>
                    <span className={styles.skillDot} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
