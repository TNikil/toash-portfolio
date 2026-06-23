'use client'
import { useState } from 'react'
import styles from './Work.module.css'

const webProjects = [
  { id: '01', name: 'Danpest', year: '2018', country: 'Sri Lanka', desc: 'A team of Pest Control and Hygiene industry experts at your service.', link: 'https://www.danpest.com/' },
  { id: '02', name: 'Rian Rest Apartment', year: '2023', country: 'Sri Lanka', desc: 'Airbnb-style listing site with booking flow. An SLTDA approved sanctuary designed for those who seek tranquility, comfort, and effortless convenience.', link: 'https://rianrest.com' },
  { id: '03', name: 'Grace Flower and More', year: '2024', country: 'UAE', desc: 'Ecommerce florist website to deal across UAE.', link: 'https://grace-flower-boutique-2.vercel.app/bouquet/5c350175-6be2-44d4-8264-e969cbe8ff02' },
  { id: '04', name: 'Blossom Flowers', year: '2024', country: 'Qatar', desc: 'Bespoke digital storefront for an artisan boutique.', link: 'https://vandradur.github.io/blossom/' },
]

const designProjects = [
  { id: '01', name: 'Lotus Beverage', type: 'LOGO', year: '2023', country: 'Sri Lanka', desc: 'Clean logo and packaging system for an organic brand.' },
  { id: '02', name: 'Crevox', type: 'LOGO', year: '2023', country: 'Sri Lanka', desc: 'Visual identity for a spices packaging company.' },
  { id: '03', name: 'Mob BBQ', type: 'LOGO', year: '2019', country: 'USA', desc: 'Bold mark for a BBQ Grill company.' },
  { id: '04', name: 'Thaya Floral & Gourmet', type: 'LOGO', year: '2017', country: 'UAE', desc: 'Flower, events and landscaping company identity.' },
  { id: '05', name: 'Dan Pest', type: 'LOGO', year: '2018', country: 'Sri Lanka', desc: 'Logo for an eco-friendly pest control business.' },
  { id: '06', name: 'Rianrest', type: 'LOGO', year: '2025', country: 'Sri Lanka', desc: 'Sun and beaches represent this logo.' },
  { id: '07', name: 'Hatti', type: 'LOGO', year: '2024', country: 'Sri Lanka', desc: 'Complete visual identity system and typography.' },
  { id: '08', name: 'Crevox Spices', type: 'PACKAGING', year: '2023', country: 'USA', desc: 'Custom packaging for a US based spices company.' },
  { id: '09', name: 'Verginia Honey', type: 'PACKAGING', year: '2017', country: 'USA', desc: 'Custom packaging for a US based honey company.' },
  { id: '10', name: 'Eco Souq', type: 'PACKAGING', year: '2019', country: 'Qatar', desc: 'Market product packaging for eco items.' },
  { id: '11', name: 'Music Party', type: 'POSTER', year: '2023', country: 'Sri Lanka', desc: 'Bold event poster series for an underground collective.' },
  { id: '12', name: 'Art Festival', type: 'POSTER', year: '2023', country: 'Sri Lanka', desc: 'Black and White Modern Art Festival Poster.' },
  { id: '13', name: 'Hiring', type: 'POSTER', year: '2024', country: 'Sri Lanka', desc: 'We Are Hiring — recruitment poster design.' },
  { id: '14', name: 'Wedding Invitation', type: 'FLYER', year: '2023', country: 'Sri Lanka', desc: 'Black and White Retro Save the Date Wedding Invitation Flyer.' },
]

const designFilters = ['ALL', 'LOGO', 'PACKAGING', 'POSTER', 'FLYER']
type Tab = 'web' | 'design'

export default function Work() {
  const [tab, setTab] = useState<Tab>('web')
  const [designFilter, setDesignFilter] = useState('ALL')
  const [activeRow, setActiveRow] = useState<string | null>(null)

  const filteredDesign = designFilter === 'ALL' ? designProjects : designProjects.filter((p) => p.type === designFilter)
  const toggleRow = (id: string) => setActiveRow(activeRow === id ? null : id)

  return (
    <section id="work" className={styles.work}>
      {/* Header — static, safe to reveal */}
      <div className={styles.header} data-reveal data-delay="0">
        <span className={styles.sectionLabel}>// 002</span>
        <h2 className={styles.sectionTitle}>SELECTED<br /><span className={styles.outline}>WORKS</span></h2>
        <p className={styles.sectionSub}>Real projects. Real clients. Across the globe.</p>
      </div>

      {/* Tabs — static, safe to reveal */}
      <div className={styles.sysTabs} data-reveal data-delay="150">
        <button className={`${styles.sysTab} ${tab === 'web' ? styles.sysTabActive : ''}`} onClick={() => { setTab('web'); setActiveRow(null) }}>
          <span className={styles.sysPrefix}>SYS://</span>WEB
        </button>
        <button className={`${styles.sysTab} ${tab === 'design' ? styles.sysTabActive : ''}`} onClick={() => { setTab('design'); setActiveRow(null) }}>
          <span className={styles.sysPrefix}>SYS://</span>DESIGN
        </button>
        <div className={styles.sysLine} />
      </div>

      {/* Table content — NO data-reveal, renders dynamically */}
      {tab === 'web' && (
        <div className={styles.tableWrap}>
          <div className={`${styles.colHead} ${styles.colHeadWeb}`}>
            <span className={styles.ch}>ID</span>
            <span className={styles.ch}>Project</span>
            <span className={styles.ch}>Year</span>
            <span className={styles.ch}>Country</span>
            <span className={styles.ch}>Link</span>
          </div>
          {webProjects.map((p) => (
            <div key={p.id}>
              <div
                className={`${styles.row} ${styles.rowWeb} ${activeRow === p.id ? styles.rowActive : ''}`}
                onClick={() => toggleRow(p.id)}
              >
                <span className={styles.rnum}>&gt; {p.id}</span>
                <span className={styles.rname}>{p.name}</span>
                <span className={styles.ryear}>{p.year}</span>
                <span className={styles.rcountry}>{p.country}</span>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className={styles.rlink} onClick={(e) => e.stopPropagation()}>VISIT →</a>
              </div>
              {activeRow === p.id && (
                <div className={styles.descRow}><p className={styles.descText}>{p.desc}</p></div>
              )}
            </div>
          ))}
        </div>
      )}

      {tab === 'design' && (
        <div>
          <div className={styles.subFilters}>
            {designFilters.map((f) => (
              <button key={f} className={`${styles.subFilter} ${designFilter === f ? styles.subFilterActive : ''}`} onClick={() => { setDesignFilter(f); setActiveRow(null) }}>{f}</button>
            ))}
          </div>
          <div className={styles.tableWrap}>
            <div className={`${styles.colHead} ${styles.colHeadDesign}`}>
              <span className={styles.ch}>ID</span>
              <span className={styles.ch}>Project</span>
              <span className={styles.ch}>Type</span>
              <span className={styles.ch}>Year</span>
              <span className={styles.ch}>Country</span>
            </div>
            {filteredDesign.map((p) => (
              <div key={`${p.type}-${p.id}`}>
                <div
                  className={`${styles.row} ${styles.rowDesign} ${activeRow === `${p.type}-${p.id}` ? styles.rowActive : ''}`}
                  onClick={() => toggleRow(`${p.type}-${p.id}`)}
                >
                  <span className={styles.rnum}>&gt; {p.id}</span>
                  <span className={styles.rname}>{p.name}</span>
                  <span className={styles.rtag}>{p.type}</span>
                  <span className={styles.ryear}>{p.year}</span>
                  <span className={styles.rcountry}>{p.country}</span>
                </div>
                {activeRow === `${p.type}-${p.id}` && (
                  <div className={styles.descRow}><p className={styles.descText}>{p.desc}</p></div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={styles.termFooter}>
        <span className={styles.prompt}>&gt;</span> CLICK ANY ROW TO EXPAND
        <span className={styles.cursor} />
      </div>
    </section>
  )
}
