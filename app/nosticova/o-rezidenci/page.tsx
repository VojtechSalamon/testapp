'use client'

import Link from 'next/link'

export default function ORezidenciPage() {
  return (
    <div className="container">
      <div className="header">
        <h1>Nosticova - O rezidenci</h1>
        <nav>
          <Link href="/">Domů</Link>
        </nav>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <Link href="/nosticova" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
          ← Zpět na Nosticova
        </Link>
      </div>

      <div className="card">
        <h2>O rezidenci</h2>
        <p style={{ color: '#000' }}>Obsah sekce O rezidenci pro Nosticova.</p>
      </div>
    </div>
  )
}
