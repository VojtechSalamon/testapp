import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <h1>URBNWLF ACADEMY</h1>
        <nav>
          <Link href="/">Domů</Link>
        </nav>
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

