'use client'

import Link from 'next/link'

export default function ORezidenciPage() {
  return (
    <div className="container">
      <div style={{ marginBottom: '1.5rem' }}>
        <Link href="/opletalova" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
          ← Zpět na Opletalova
        </Link>
      </div>

      <div className="card">
        <p style={{ color: '#000' }}>Obsah sekce O rezidenci pro Opletalova.</p>
      </div>
    </div>
  )
}
