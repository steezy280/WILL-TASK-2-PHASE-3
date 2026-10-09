import type { PageProps } from './types'
import { C, IMG, Badge, MobileFooter, StarRating } from './shared'

export const MobileAbout = ({ nav }: PageProps) => (
  <div style={{ background: C.cream }}>
    <div style={{ position: 'relative', height: 230 }}>
      <img src={IMG.heroAbout} alt="Training team" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(28,82,57,0.4), rgba(28,82,57,0.65))' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 20px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#fff', fontSize: 11, letterSpacing: 1, fontWeight: 700 }}>OUR STORY</div>
          <h1 style={{ color: '#fff', fontSize: 30, fontFamily: "'Roboto Slab', serif", margin: '6px 0 0' }}>About Pawsitive</h1>
        </div>
      </div>
    </div>

    <div style={{ padding: '24px 16px' }}>
      <p style={{ fontSize: 14, color: C.midGray, lineHeight: 1.8, margin: 0 }}>
        We help dogs and their people learn, grow, and bond through compassionate, science-based training.
        Our team blends practical behavior work with real-world confidence building for every stage of life.
      </p>
      <div style={{ marginTop: 18, padding: '16px', background: '#fff', borderRadius: 14, border: `1px solid ${C.border}` }}>
        <img src={IMG.womanDogs} alt="Lead trainer" style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 12, marginBottom: 12 }} />
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
          <Badge label="Founded 2018" />
          <Badge label="CPDT-KA" color={C.greenLight} textColor={C.green} />
        </div>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: C.charcoal, margin: '10px 0 8px' }}>Why families trust us</h2>
        <p style={{ fontSize: 13, color: C.midGray, lineHeight: 1.7, margin: 0 }}>
          Small classes, compassionate coaching, and progress tracking that supports both pets and owners.
        </p>
      </div>
    </div>

    <div style={{ padding: '0 16px 20px' }}>
      <h2 style={{ fontSize: 22, fontWeight: 800, color: C.charcoal, fontFamily: "'Roboto Slab', serif", marginBottom: 12 }}>Our team</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {[
          { name: 'Dr. Lena Marsh', role: 'Head Trainer', img: IMG.trainerPerson2 },
          { name: 'Tom Rivera', role: 'Agility Coach', img: IMG.trainerPerson1 },
        ].map(member => (
          <div key={member.name} style={{ background: '#fff', padding: 12, borderRadius: 14, border: `1px solid ${C.border}`, display: 'flex', gap: 12, alignItems: 'center' }}>
            <img src={member.img} alt={member.name} style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <div style={{ fontWeight: 800, fontSize: 15, color: C.charcoal }}>{member.name}</div>
              <div style={{ fontSize: 12, color: C.green, fontWeight: 700 }}>{member.role}</div>
              <div style={{ marginTop: 6 }}><StarRating count={5} /></div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div style={{ padding: '0 16px 32px' }}>
      <h2 style={{ fontSize: 22, fontWeight: 800, color: C.charcoal, fontFamily: "'Roboto Slab', serif", marginBottom: 12 }}>Milestones</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {[['2018', 'Founded with one puppy class and a mission to build calmer homes.'],['2020', 'Expanded to small group behavior programs and private coaching.'],['2024', 'Opened a state-of-the-art agility and enrichment training space.']].map(([yr, text]) => (
          <div key={yr} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div style={{ width: 44, height: 44, background: C.amber, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, color: C.charcoal, flexShrink: 0 }}>{yr}</div>
            <div style={{ fontSize: 13, color: C.midGray, lineHeight: 1.7, paddingTop: 7 }}>{text}</div>
          </div>
        ))}
      </div>
    </div>

    <div style={{ margin: '0 16px 16px', background: `linear-gradient(135deg, ${C.green}, ${C.greenDark})`, borderRadius: 16, padding: '20px 18px', textAlign: 'center' }}>
      <h3 style={{ margin: '0 0 10px', color: '#fff', fontSize: 20, fontWeight: 800 }}>Meet your dog’s next chapter</h3>
      <button onClick={() => nav('overview')} style={{ background: C.amber, color: C.charcoal, border: 'none', borderRadius: 10, padding: '10px 18px', fontWeight: 800, cursor: 'pointer' }}>Explore Programs</button>
    </div>

    <MobileFooter />
  </div>
)
