import type { PageProps } from './types'
import { C, IMG, Badge, Btn, StarRating, MobileFooter } from './shared'

export const MobileHome = ({ nav }: PageProps) => (
  <div style={{ background: C.cream }}>
    <div style={{ position: 'relative', height: 360 }}>
      <img src={IMG.heroHome} alt="Golden retrievers training" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(28,82,57,0.75) 0%, rgba(28,82,57,0.5) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 20px' }}>
        <div style={{ background: C.amber, borderRadius: 14, padding: '4px 12px', display: 'inline-block', marginBottom: 14, width: 'fit-content' }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.charcoal }}>🏆 Portland's #1 Rated Academy</span>
        </div>
        <h1 style={{ fontSize: 34, fontWeight: 800, color: '#fff', fontFamily: "'Roboto Slab', serif", lineHeight: 1.1, marginBottom: 12 }}>Train. Bond.<br />Thrive.</h1>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.88)', lineHeight: 1.6, marginBottom: 20 }}>Science-backed, compassionate training for every dog and owner.</p>
        <Btn label="Browse Programs →" variant="amber" onClick={() => nav('overview')} />
      </div>
      <div style={{ position: 'absolute', bottom: 16, right: 16, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 4px 16px rgba(0,0,0,0.18)' }}>
        <div style={{ fontWeight: 800, fontSize: 18, color: C.charcoal }}>4.97 ⭐</div>
        <div style={{ fontSize: 10, color: C.midGray }}>342 reviews</div>
      </div>
    </div>

    <div style={{ background: C.green, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
      {[['500+', 'Pets Trained'],['98%', 'Satisfaction'],['12', 'Trainers'],['8 yrs', 'Portland']].map(([n, l], i) => (
        <div key={l} style={{ padding: '18px 0', textAlign: 'center', borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.2)' : 'none', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}>
          <div style={{ fontSize: 26, fontWeight: 800, color: '#fff', fontFamily: "'Roboto Slab', serif" }}>{n}</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.75)' }}>{l}</div>
        </div>
      ))}
    </div>

    <div style={{ padding: '32px 16px' }}>
      <div style={{ color: C.green, fontWeight: 700, fontSize: 11, letterSpacing: 1, marginBottom: 6 }}>FEATURED PROGRAMS</div>
      <h2 style={{ fontSize: 26, fontWeight: 800, color: C.charcoal, fontFamily: "'Roboto Slab', serif", marginBottom: 20, lineHeight: 1.2 }}>Training for Every Stage</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          { title: 'Puppy Foundation', img: IMG.puppyGrass, price: '$149', tag: 'Most Popular', desc: 'Essential start for pups aged 8–16 weeks.' },
          { title: 'Advanced Agility', img: IMG.agility, price: '$249', tag: 'Bestseller', desc: 'Tunnels, poles, jumps, full course sequences.' },
          { title: 'Behavioral Reset', img: IMG.personDog, price: '$389', tag: 'Specialist', desc: 'Anxiety, reactivity, behavior modification.' },
        ].map(c => (
          <div key={c.title} onClick={() => nav('individual')} style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', border: `1px solid ${C.border}`, display: 'flex', cursor: 'pointer' }}>
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <img src={c.img} alt={c.title} style={{ width: 108, height: 108, objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 8, left: 8 }}><Badge label={c.tag} color={C.amber} textColor={C.charcoal} /></div>
            </div>
            <div style={{ padding: '14px 14px' }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: C.charcoal, marginBottom: 5 }}>{c.title}</h3>
              <p style={{ fontSize: 12, color: C.midGray, lineHeight: 1.5, marginBottom: 8 }}>{c.desc}</p>
              <StarRating />
              <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 18, fontWeight: 800, color: C.green }}>{c.price}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: C.green }}>View →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20, textAlign: 'center' }}>
        <Btn label="View All Programs" variant="outline" onClick={() => nav('overview')} />
      </div>
    </div>

    <div style={{ background: C.warmGray, padding: '28px 16px' }}>
      <div style={{ color: C.green, fontWeight: 700, fontSize: 11, letterSpacing: 1, marginBottom: 6 }}>WHY CHOOSE US</div>
      <h2 style={{ fontSize: 24, fontWeight: 800, color: C.charcoal, fontFamily: "'Roboto Slab', serif", marginBottom: 20 }}>The Pawsitive Difference</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {[['🎓', 'Certified Trainers', 'All CPDT-KA certified'],['🐾', 'Force-Free', '100% positive methods'],['👥', 'Small Groups', 'Max 6 dogs per class'],['📊', 'Reports', 'Weekly progress updates']].map(([ico, t, d]) => (
          <div key={t} style={{ background: '#fff', borderRadius: 12, padding: '16px 14px', border: `1px solid ${C.border}` }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{ico}</div>
            <div style={{ fontWeight: 700, fontSize: 13, color: C.charcoal, marginBottom: 4 }}>{t}</div>
            <div style={{ fontSize: 11, color: C.midGray }}>{d}</div>
          </div>
        ))}
      </div>
    </div>

    <div style={{ padding: '28px 16px' }}>
      <h2 style={{ fontSize: 24, fontWeight: 800, color: C.charcoal, fontFamily: "'Roboto Slab', serif", marginBottom: 16 }}>What Pet Parents Say</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {[{ name: 'Sarah M.', pet: 'Max (Labrador)', text: '"Max went from constant pulling to walking calmly in 3 weeks. Tom is a miracle worker!"', img: IMG.trainerPerson2 }].map(t => (
          <div key={t.name} style={{ background: '#fff', borderRadius: 14, padding: 20, border: `1px solid ${C.border}` }}>
            <StarRating />
            <p style={{ fontSize: 13, color: C.charcoal, lineHeight: 1.7, margin: '10px 0', fontStyle: 'italic' }}>{t.text}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, borderTop: `1px solid ${C.border}`, paddingTop: 12 }}>
              <img src={t.img} alt={t.name} style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: C.charcoal }}>{t.name}</div>
                <div style={{ fontSize: 11, color: C.midGray }}>{t.pet}</div>
              </div>
              <span style={{ marginLeft: 'auto', fontSize: 11, color: C.green, fontWeight: 700 }}>Verified ✓</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div style={{ margin: '0 16px 32px', background: `linear-gradient(135deg, ${C.green}, ${C.greenDark})`, borderRadius: 18, padding: '32px 24px', textAlign: 'center' }}>
      <h2 style={{ fontSize: 24, fontWeight: 800, color: '#fff', fontFamily: "'Roboto Slab', serif", marginBottom: 10 }}>Ready to transform your pet's life?</h2>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', marginBottom: 20 }}>Book a free 15-minute consultation with our trainers.</p>
      <Btn label="Book Free Consultation" variant="amber" full onClick={() => nav('contact')} />
    </div>
    <MobileFooter />
  </div>
)
