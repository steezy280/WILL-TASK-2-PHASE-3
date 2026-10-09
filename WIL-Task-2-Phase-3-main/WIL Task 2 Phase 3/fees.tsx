import { useState } from 'react'
import type { PageProps } from './types'
import { C, products, Badge, Btn, MobileFooter } from './shared'

export const MobileFees = (_props: PageProps) => {
  const [qty, setQty] = useState<Record<string, number>>(Object.fromEntries(products.map(p => [p.name, 0])))
  const total = products.reduce((s, p) => s + p.price * qty[p.name], 0)
  return (
    <div style={{ background: C.cream }}>
      <div style={{ background: `linear-gradient(135deg, ${C.greenDark}, ${C.green})`, padding: '28px 16px 22px' }}>
        <div style={{ color: C.amber, fontWeight: 700, fontSize: 11, letterSpacing: 1, marginBottom: 6 }}>PAWSITIVE SHOP</div>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: '#fff', fontFamily: "'Roboto Slab', serif" }}>Equipment Calculator</h1>
      </div>

      {/* Cart summary bar */}
      {total > 0 && (
        <div style={{ background: C.amber, padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: C.charcoal }}>Your Kit: ${total.toFixed(2)}</span>
          <Btn label="Checkout →" variant="primary" small />
        </div>
      )}

      <div style={{ display: 'flex', gap: 8, padding: '14px 16px', overflowX: 'auto', borderBottom: `1px solid ${C.border}` }}>
        {['All', 'Leash', 'Harness', 'Training', 'Agility'].map(f => (
          <button key={f} style={{ flexShrink: 0, padding: '6px 14px', borderRadius: 16, border: `1px solid ${C.border}`, background: '#fff', fontSize: 12, fontWeight: 600, color: C.midGray, cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>{f}</button>
        ))}
      </div>

      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {products.map(p => (
          <div key={p.name} style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', border: `1px solid ${C.border}`, display: 'flex' }}>
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <img src={p.img} alt={p.name} style={{ width: 100, height: 110, objectFit: 'cover' }} />
              {p.tag && <div style={{ position: 'absolute', top: 8, left: 8 }}><Badge label={p.tag} color={C.amber} textColor={C.charcoal} /></div>}
            </div>
            <div style={{ padding: '12px 14px', flex: 1 }}>
              <div style={{ fontSize: 10, color: C.green, fontWeight: 700, marginBottom: 2 }}>{p.category.toUpperCase()}</div>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: C.charcoal, marginBottom: 3 }}>{p.name}</h3>
              <p style={{ fontSize: 11, color: C.midGray, lineHeight: 1.4, marginBottom: 10 }}>{p.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 18, fontWeight: 800, color: C.green }}>${p.price}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: C.warmGray, borderRadius: 8, padding: '3px 8px' }}>
                  <button onClick={() => setQty(q => ({ ...q, [p.name]: Math.max(0, q[p.name] - 1) }))} style={{ width: 26, height: 26, borderRadius: 6, border: `1px solid ${C.border}`, background: '#fff', cursor: 'pointer', fontWeight: 700, fontSize: 14, color: C.green }}>−</button>
                  <span style={{ minWidth: 16, textAlign: 'center', fontWeight: 700, fontSize: 13, color: C.charcoal }}>{qty[p.name]}</span>
                  <button onClick={() => setQty(q => ({ ...q, [p.name]: q[p.name] + 1 }))} style={{ width: 26, height: 26, borderRadius: 6, border: 'none', background: C.green, cursor: 'pointer', fontWeight: 700, fontSize: 14, color: '#fff' }}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div style={{ margin: '0 16px 16px', background: '#fff', borderRadius: 16, padding: '20px', border: `1px solid ${C.border}` }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, color: C.charcoal, marginBottom: 16 }}>Order Summary</h2>
        {products.filter(p => qty[p.name] > 0).map(p => (
          <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 8, marginBottom: 8, borderBottom: `1px solid ${C.border}` }}>
            <div style={{ fontSize: 12, color: C.charcoal }}>{p.name} × {qty[p.name]}</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.green }}>${(qty[p.name] * p.price).toFixed(2)}</div>
          </div>
        ))}
        {total === 0 && <p style={{ fontSize: 13, color: C.midGray, textAlign: 'center', padding: '10px 0' }}>No items selected yet.</p>}
        <div style={{ paddingTop: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}><span style={{ fontSize: 13, color: C.midGray }}>Subtotal</span><span style={{ fontSize: 13 }}>${total.toFixed(2)}</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}><span style={{ fontSize: 13, color: C.midGray }}>Shipping</span><span style={{ fontSize: 13, color: total > 100 ? C.green : C.charcoal }}>{total > 100 ? '🎉 FREE' : '$9.99'}</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, borderTop: `2px solid ${C.charcoal}` }}>
            <span style={{ fontSize: 16, fontWeight: 800, color: C.charcoal }}>Total</span>
            <span style={{ fontSize: 16, fontWeight: 800, color: C.green }}>${(total + (total > 100 ? 0 : 9.99)).toFixed(2)}</span>
          </div>
        </div>
        <div style={{ marginTop: 16 }}><Btn label="Proceed to Checkout →" variant="primary" full /></div>
        <div style={{ textAlign: 'center', fontSize: 11, color: C.midGray, marginTop: 8 }}>🔒 Secure checkout · 30-day returns</div>
        {total > 0 && total <= 100 && (
          <div style={{ marginTop: 10, background: C.greenLight, borderRadius: 8, padding: '8px 12px', textAlign: 'center' }}>
            <span style={{ fontSize: 11, color: C.green, fontWeight: 600 }}>Add ${(100 - total).toFixed(2)} more for free shipping!</span>
          </div>
        )}
      </div>
      <MobileFooter />
    </div>
  )
}
