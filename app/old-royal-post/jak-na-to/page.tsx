'use client'

import Link from 'next/link'

export default function JakNaToPage() {
  return (
    <div className="container">
      <div style={{ marginBottom: '1.5rem' }}>
        <Link href="/old-royal-post" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
          ← Zpět na Old Royal Post
        </Link>
      </div>

      <div className="card">
        <h2>Jak na to</h2>
        <p style={{ color: '#000' }}>Obsah sekce Jak na to pro Old Royal Post.</p>
      </div>
    </div>
  )
}
