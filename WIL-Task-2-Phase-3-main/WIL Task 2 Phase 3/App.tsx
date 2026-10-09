import { useState, type FC } from 'react'
import type { Page } from './types'
import type { PageProps } from './types'
import { MobileHome } from './home'
import { MobileAbout } from './about'
import { MobileOverview } from './overview'
import { MobileIndividual } from './individual'
import { MobileFees } from './fees'
import { MobileContact } from './contact'
import { C, Logo, MobileFooter } from './shared'

const PAGES: { id: Page; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'overview', label: 'Overview' },
  { id: 'individual', label: 'Individual' },
  { id: 'fees', label: 'Calculate Fees' },
  { id: 'contact', label: 'Contact Us' },
]

const MobileNav = ({ onNavigate }: { onNavigate: (p: Page) => void }) => {
  const [open, setOpen] = useState(false)
  return (
    <nav style={{
      background: C.white,
      borderBottom: `1px solid ${C.border}`,
      padding: '0 28px',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Logo size={34} />
        <div>
          <div style={{ fontWeight: 800, fontSize: 15, color: C.charcoal, lineHeight: 1 }}>Pawsitive</div>
          <div style={{ fontWeight: 600, fontSize: 10, color: C.green, letterSpacing: 1.2 }}>PET ACADEMY</div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        {PAGES.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              onNavigate(item.id)
              setOpen(false)
            }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: C.charcoal,
              fontSize: 14,
              fontWeight: 700,
              padding: '10px 14px',
              borderRadius: 8,
              fontFamily: "'Inter', sans-serif",
              transition: 'background 0.15s ease',
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      <button
        onClick={() => setOpen(!open)}
        style={{
          background: C.greenLight,
          border: `1px solid ${C.border}`,
          cursor: 'pointer',
          display: 'none',
          flexDirection: 'column',
          gap: 4,
          padding: '8px 10px',
          borderRadius: 8
        }}
      >
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ width: 20, height: 2, background: C.charcoal, borderRadius: 2 }} />
        ))}
      </button>

      {open && (
        <div style={{ position: 'absolute', top: 72, left: 0, right: 0, background: C.white, borderBottom: `1px solid ${C.border}`, padding: '12px 0', zIndex: 20, boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
          {PAGES.map((item) => (
            <button key={item.id} onClick={() => { onNavigate(item.id); setOpen(false) }} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 20px', background: 'none', border: 'none', fontSize: 15, fontWeight: 600, color: C.charcoal, cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>{item.label}</button>
          ))}
        </div>
      )}
    </nav>
  )
}

const MOBILE_PAGES: Record<Page, FC<PageProps>> = {
  home: MobileHome,
  about: MobileAbout,
  overview: MobileOverview,
  individual: MobileIndividual,
  fees: MobileFees,
  contact: MobileContact,
}

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const nav = (p: Page) => setPage(p)
  const PageComponent = MOBILE_PAGES[page]

  return (
    <div style={{ minHeight: '100vh', background: '#E8EDE9', fontFamily: "'Inter', sans-serif", display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', minHeight: '100vh', background: C.cream, boxShadow: 'none' }}>
        <MobileNav onNavigate={nav} />
        <main style={{ background: C.cream, width: '100%' }}>
          <PageComponent nav={nav} />
        </main>
        <MobileFooter />
      </div>
    </div>
  )
}

