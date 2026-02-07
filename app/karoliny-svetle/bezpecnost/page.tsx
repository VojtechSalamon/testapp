'use client'

import Link from 'next/link'

export default function BezpecnostPage() {
  return (
    <div className="container">
      <div style={{ marginBottom: '1.5rem' }}>
        <Link href="/karoliny-svetle" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
          ← Zpět na Karolíny Světlé
        </Link>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        <Link 
          href="/karoliny-svetle/bezpecnost/online-bezpecnost"
          style={{
            background: 'white',
            border: '2px solid #000',
            borderRadius: '12px',
            padding: '2rem',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '250px',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)'
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <div style={{ 
            fontSize: '4rem', 
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            🔒
          </div>
          <h3 style={{ 
            color: '#000', 
            fontSize: '1.2rem',
            fontWeight: '600',
            textAlign: 'center',
            margin: 0
          }}>
            Online bezpečnost
          </h3>
        </Link>
      </div>

      <div className="card">
        <p style={{ color: '#000' }}>Obsah sekce Bezpečnost pro Karolíny Světlé.</p>
      </div>
    </div>
  )
}
