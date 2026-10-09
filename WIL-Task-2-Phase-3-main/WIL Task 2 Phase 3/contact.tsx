import type { PageProps } from './types'
import { C, IMG, Btn, MobileFooter } from './shared'

export const MobileContact = (_props: PageProps) => (
  <div style={{ background: C.cream }}>
    <div style={{ background: `linear-gradient(135deg, ${C.greenDark}, ${C.green})`, padding: '32px 16px', textAlign: 'center' }}>
      <div style={{ color: C.amber, fontWeight: 700, fontSize: 11, letterSpacing: 1, marginBottom: 8 }}>GET IN TOUCH</div>
      <h1 style={{ fontSize: 30, fontWeight: 800, color: '#fff', fontFamily: "'Roboto Slab', serif", marginBottom: 10 }}>Contact Us</h1>
      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>We respond within 24 hours.</p>
    </div>

    <div style={{ background: '#fff', borderBottom: `1px solid ${C.border}` }}>
      {[['📍', '123 Bark Blvd, Portland OR 97201'],['📞', '(503) 555-0142'],['✉️', 'hello@pawsitive.com'],['🕐', 'Mon–Sat 8am–7pm']].map(([ico, text]) => (
        <div key={text} style={{ display: 'flex', gap: 14, padding: '14px 16px', borderBottom: `1px solid ${C.border}`, alignItems: 'center' }}>
          <span style={{ fontSize: 20, width: 28, textAlign: 'center' }}>{ico}</span>
          <span style={{ fontSize: 13, color: C.charcoal }}>{text}</span>
        </div>
      ))}
    </div>

    {/* Map */}
    <div style={{ height: 180, background: C.greenLight, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: `1px solid ${C.border}` }}>
      <img src={IMG.heroAbout} alt="Map" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }} />
      <div style={{ position: 'absolute', textAlign: 'center' }}>
        <div style={{ fontSize: 32 }}>📍</div>
        <div style={{ fontWeight: 700, fontSize: 14, color: C.greenDark }}>123 Bark Blvd</div>
        <button style={{ marginTop: 8, background: C.green, color: '#fff', border: 'none', borderRadius: 8, padding: '6px 16px', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Open in Maps</button>
      </div>
    </div>

    {/* Book a call CTA */}
    <div style={{ margin: '16px', background: `linear-gradient(135deg, ${C.green}, ${C.greenDark})`, borderRadius: 16, padding: '20px 18px' }}>
      <h3 style={{ fontWeight: 800, fontSize: 18, color: '#fff', marginBottom: 6 }}>Skip the form</h3>
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', marginBottom: 14 }}>Book a free 15-min consultation with a trainer directly.</p>
      <Btn label="Book a Free Call →" variant="amber" full />
    </div>

    {/* Form */}
    <div style={{ padding: '20px 16px', borderTop: `1px solid ${C.border}` }}>
      <h2 style={{ fontSize: 22, fontWeight: 800, color: C.charcoal, fontFamily: "'Roboto Slab', serif", marginBottom: 18 }}>Send a Message</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {['Full Name', 'Email Address', 'Phone Number', "Pet's Name & Breed"].map(label => (
          <div key={label}>
            <label style={{ fontSize: 12, fontWeight: 600, color: C.charcoal, display: 'block', marginBottom: 5 }}>{label}</label>
            <input style={{ width: '100%', height: 44, border: `1px solid ${C.border}`, borderRadius: 8, paddingLeft: 14, fontSize: 14, boxSizing: 'border-box', fontFamily: "'Inter', sans-serif" }} />
          </div>
        ))}
        <div>
          <label style={{ fontSize: 12, fontWeight: 600, color: C.charcoal, display: 'block', marginBottom: 8 }}>Inquiry Type</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {['Course Info', 'Enrollment', 'Equipment', 'General'].map(t => (
              <label key={t} style={{ display: 'flex', alignItems: 'center', gap: 7, cursor: 'pointer' }}>
                <input type="radio" name="inq" style={{ accentColor: C.green }} />
                <span style={{ fontSize: 12, color: C.midGray }}>{t}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label style={{ fontSize: 12, fontWeight: 600, color: C.charcoal, display: 'block', marginBottom: 5 }}>Message</label>
          <textarea rows={4} placeholder="Tell us about your pet and goals…" style={{ width: '100%', border: `1px solid ${C.border}`, borderRadius: 8, padding: '10px 14px', fontSize: 13, fontFamily: "'Inter', sans-serif", resize: 'vertical', boxSizing: 'border-box' }} />
        </div>
        <Btn label="Send Message →" variant="primary" full />
        <div style={{ textAlign: 'center', fontSize: 11, color: C.midGray }}>🔒 Your info is never shared.</div>
      </div>
    </div>

    <div style={{ padding: '20px 16px 0' }}>
      <div style={{ fontWeight: 700, fontSize: 14, color: C.charcoal, marginBottom: 10 }}>Follow Pawsitive</div>
      <div style={{ display: 'flex', gap: 10 }}>
        {['📘 Facebook', '📷 Instagram', '▶️ YouTube'].map(s => (
          <div key={s} style={{ background: '#fff', border: `1px solid ${C.border}`, borderRadius: 8, padding: '8px 10px', fontSize: 11, fontWeight: 600, color: C.charcoal }}>{s}</div>
        ))}
      </div>
    </div>
    <MobileFooter />
  </div>
)