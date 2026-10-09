import type { PageProps } from './types'
import { C, IMG, Badge, Btn, StarRating, MobileFooter } from './shared'

export const MobileIndividual = ({ nav }: PageProps) => (
  <div style={{ background: C.cream }}>
    <div style={{ padding: '10px 16px', background: '#fff', borderBottom: `1px solid ${C.border}`, fontSize: 12, color: C.midGray }}>
      <span onClick={() => nav('overview')} style={{ color: C.green, cursor: 'pointer' }}>Programs</span> › Advanced Agility Training
    </div>

    <img src={IMG.agility} alt="Agility training" style={{ width: '100%', height: 240, objectFit: 'cover' }} />

    <div style={{ padding: '20px 16px', borderBottom: `1px solid ${C.border}` }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
        <Badge label="Agility" color={C.amber} textColor={C.charcoal} /><Badge label="8 Weeks" /><Badge label="Intermediate" />
      </div>
      <h1 style={{ fontSize: 28, fontWeight: 800, color: C.charcoal, fontFamily: "'Roboto Slab', serif", lineHeight: 1.15, marginBottom: 10 }}>Advanced Agility Training</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <StarRating count={5} /><span style={{ fontSize: 12, color: C.midGray }}>4.97 · 92 reviews</span>
      </div>
      <p style={{ fontSize: 13, color: C.midGray, lineHeight: 1.8 }}>An 8-week program for dogs with basic obedience skills ready to tackle the full agility course: weave poles, tunnels, jumps, A-frames, and full course sequences.</p>
    </div>

    <div style={{ margin: '16px', background: `linear-gradient(135deg, ${C.green}, ${C.greenDark})`, borderRadius: 16, padding: '24px 20px', color: '#fff' }}>
      <div style={{ fontSize: 38, fontWeight: 800, fontFamily: "'Roboto Slab', serif", marginBottom: 4 }}>$249</div>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)', marginBottom: 18 }}>per 8-week session · all equipment included</div>
      <Btn label="Enroll Now — Save $30" variant="amber" full />
      <div style={{ marginTop: 10 }}><Btn label="Book Free Trial" variant="ghost" full /></div>
    </div>

    <div style={{ padding: '0 16px 16px', borderBottom: `1px solid ${C.border}` }}>
      <div style={{ background: C.warmGray, borderRadius: 14, padding: '16px 18px' }}>
        <div style={{ fontWeight: 700, fontSize: 14, color: C.charcoal, marginBottom: 12 }}>📅 Upcoming Sessions</div>
        {[['Tuesdays', '10:00 AM – 11:00 AM', '2 spots', false],['Thursdays', '6:00 PM – 7:00 PM', 'Full', true],['Saturdays', '9:00 AM – 10:00 AM', '3 spots', false]].map(([day, time, avail, full]) => (
          <div key={day as string} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 10, marginBottom: 10, borderBottom: `1px solid ${C.border}` }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.charcoal }}>{day}</div>
              <div style={{ fontSize: 11, color: C.midGray }}>{time}</div>
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, color: full ? C.red : C.green, background: full ? '#FEE2E2' : C.greenLight, padding: '3px 10px', borderRadius: 10 }}>{avail}</span>
          </div>
        ))}
      </div>
    </div>

    <div style={{ padding: '20px 16px', borderBottom: `1px solid ${C.border}` }}>
      <h2 style={{ fontSize: 20, fontWeight: 800, color: C.charcoal, fontFamily: "'Roboto Slab', serif", marginBottom: 14 }}>8-Week Curriculum</h2>
      {[['Wk 1–2', 'Foundation & Safety'],['Wk 3–4', 'Tunnels & Jumps'],['Wk 5–6', 'Weave Poles & Contacts'],['Wk 7–8', 'Full Course Runs']].map(([wk, title]) => (
        <div key={wk as string} style={{ display: 'flex', gap: 12, padding: '12px 0', borderBottom: `1px solid ${C.border}`, alignItems: 'center' }}>
          <span style={{ background: C.greenLight, color: C.green, fontWeight: 700, fontSize: 11, padding: '4px 10px', borderRadius: 8, flexShrink: 0 }}>{wk}</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: C.charcoal }}>{title}</span>
          <span style={{ marginLeft: 'auto', color: C.green, fontSize: 16 }}>›</span>
        </div>
      ))}
    </div>

    <div style={{ padding: '20px 16px', borderBottom: `1px solid ${C.border}` }}>
      <h2 style={{ fontSize: 20, fontWeight: 800, color: C.charcoal, fontFamily: "'Roboto Slab', serif", marginBottom: 14 }}>Your Instructor</h2>
      <div style={{ background: '#fff', borderRadius: 14, padding: '18px 16px', border: `1px solid ${C.border}`, display: 'flex', gap: 14 }}>
        <img src={IMG.trainerPerson1} alt="Tom Rivera" style={{ width: 70, height: 70, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${C.greenLight}`, flexShrink: 0 }} />
        <div>
          <div style={{ fontWeight: 800, fontSize: 16, color: C.charcoal }}>Tom Rivera</div>
          <div style={{ fontSize: 12, color: C.green, fontWeight: 600, marginBottom: 6 }}>CPDT-KA · AKC Agility Judge</div>
          <p style={{ fontSize: 12, color: C.midGray, lineHeight: 1.6 }}>9 years experience · 80+ dogs guided to AKC agility titles.</p>
        </div>
      </div>
    </div>

    <div style={{ padding: '20px 16px 32px' }}>
      <h2 style={{ fontSize: 20, fontWeight: 800, color: C.charcoal, fontFamily: "'Roboto Slab', serif", marginBottom: 14 }}>Reviews</h2>
      <div style={{ background: '#fff', borderRadius: 14, padding: 18, border: `1px solid ${C.border}` }}>
        <StarRating count={5} />
        <p style={{ fontSize: 13, color: C.charcoal, lineHeight: 1.75, margin: '10px 0', fontStyle: 'italic' }}>"Max went from refusing jumps to running a full course in 8 weeks. Tom's handling tips are gold!"</p>
        <div style={{ fontWeight: 700, fontSize: 13, color: C.charcoal }}>Bella & Max · Border Collie</div>
      </div>
    </div>
    <MobileFooter />
  </div>
)