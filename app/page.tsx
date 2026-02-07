import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#000' }}>REZIDENCE</h1>
        <p style={{ fontSize: '1.1rem', color: '#666', margin: 0 }}>pro pokračování vyberte svou rezidenci</p>
      </div>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <Link href="/old-royal-post" className="btn" style={{ textAlign: 'center' }}>
            Old Royal Post
          </Link>
          <Link href="/opletalova" className="btn" style={{ textAlign: 'center' }}>
            Opletalova
          </Link>
          <Link href="/karoliny-svetle" className="btn" style={{ textAlign: 'center' }}>
            Karolíny Světlé
          </Link>
          <Link href="/nosticova" className="btn" style={{ textAlign: 'center' }}>
            Nosticova
          </Link>
        </div>
    </div>
  )
}

