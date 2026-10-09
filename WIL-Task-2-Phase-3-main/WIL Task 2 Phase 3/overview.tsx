import { useState } from 'react'
import type { PageProps } from './types'
import { C, Badge, Btn, StarRating, MobileFooter, courses } from './shared'

export const MobileOverview = ({ nav }: PageProps) => {
  const [cat, setCat] = useState('All')
  const filtered = courses.filter(c => cat === 'All' || c.cat === cat)
  return (
    <div style={{ background: C.cream }}>
      <div style={{ background: `linear-gradient(135deg, ${C.greenDark}, ${C.green})`, padding: '32px 16px 24px' }}>
        <div style={{ color: C.amber, fontWeight: 700, fontSize: 11, letterSpacing: 1, marginBottom: 6 }}>PROGRAMS</div>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: '#fff', fontFamily: "'Roboto Slab', serif", marginBottom: 14 }}>All Training Courses</h1>
        <input placeholder="Search courses…" style={{ width: '100%', height: 42, borderRadius: 8, border: 'none', paddingLeft: 14, fontSize: 14, boxSizing: 'border-box', fontFamily: "'Inter', sans-serif" }} />
      </div>

      <div style={{ display: 'flex', gap: 8, padding: '14px 16px', overflowX: 'auto', borderBottom: `1px solid ${C.border}` }}>
        {['All', 'Puppy', 'Agility', 'Behavioral', 'Enrichment'].map(c => (
          <button key={c} onClick={() => setCat(c)} style={{ flexShrink: 0, padding: '7px 16px', borderRadius: 20, border: `1.5px solid ${cat === c ? C.green : C.border}`, background: cat === c ? C.green : '#fff', fontSize: 12, fontWeight: 700, color: cat === c ? '#fff' : C.midGray, cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>{c}</button>
        ))}
      </div>

      <div style={{ padding: '16px 16px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ fontSize: 13, color: C.midGray }}>{filtered.length} programs found</div>
        {filtered.slice(0, 6).map(c => (
          <div key={c.title} onClick={() => nav('individual')} style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', border: `1px solid ${C.border}`, display: 'flex', cursor: 'pointer' }}>
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <img src={c.img} alt={c.title} style={{ width: 100, height: 108, objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 6, left: 6 }}><Badge label={c.cat} color={C.amber} textColor={C.charcoal} /></div>
            </div>
            <div style={{ padding: '12px 14px', flex: 1 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: C.charcoal, marginBottom: 4 }}>{c.title}</h3>
              <p style={{ fontSize: 11, color: C.midGray, lineHeight: 1.5, marginBottom: 6 }}>{c.desc}</p>
              <StarRating count={c.rating} />
              <div style={{ fontSize: 11, color: C.midGray, marginTop: 4 }}>⏱ {c.dur} · 👥 {c.size}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                <span style={{ fontSize: 17, fontWeight: 800, color: C.green }}>${c.price}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: C.green }}>View →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', padding: '8px 16px 32px' }}>
        <Btn label="Load More Programs" variant="outline" />
      </div>
      <MobileFooter />
    </div>
  )
}
