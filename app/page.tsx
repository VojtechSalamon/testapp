import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <h1>URBNWLF Onboarding Academy</h1>
        <p>Vítejte v akademii pro nábor a školení nových zaměstnanců</p>
        <nav>
          <Link href="/">Domů</Link>
          <Link href="/old-royal-post">Old Royal Post</Link>
          <Link href="/opletalova">Opletalova</Link>
          <Link href="/karoliny-svetle">Karolíny Světlé</Link>
          <Link href="/nosticova">Nosticova</Link>
        </nav>
      </div>

      <div className="card">
        <h2>Vítejte v URBNWLF Onboarding Academy</h2>
        <p style={{ marginBottom: '1.5rem', color: '#666', lineHeight: '1.6' }}>
          Tato akademie je navržena pro efektivní nábor a školení nových zaměstnanců. 
          Prozkoumejte naše vzdělávací videa a otestujte své znalosti pomocí interaktivních kvízů.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          <div style={{ padding: '1.5rem', background: '#f0fdf4', borderRadius: '8px' }}>
            <h3 style={{ color: '#22c55e', marginBottom: '1rem' }}>📹 Video Akademie</h3>
            <p style={{ color: '#666', marginBottom: '1rem', fontSize: '0.9rem' }}>
              Naučte se základy hotelového provozu prostřednictvím našich vzdělávacích videí.
            </p>
            <Link href="/videa" className="btn">Prozkoumat videa</Link>
          </div>

          <div style={{ padding: '1.5rem', background: '#fff8f0', borderRadius: '8px' }}>
            <h3 style={{ color: '#f39c12', marginBottom: '1rem' }}>🧩 Kvízy</h3>
            <p style={{ color: '#666', marginBottom: '1rem', fontSize: '0.9rem' }}>
              Otestujte své znalosti a získejte certifikát absolvováním našich kvízů.
            </p>
            <Link href="/kvizy" className="btn">Začít kvíz</Link>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Co se naučíte?</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '1rem', marginBottom: '0.5rem', background: '#f0fdf4', borderRadius: '8px' }}>
            ✅ Základy recepčního provozu a check-in/check-out procesů
          </li>
          <li style={{ padding: '1rem', marginBottom: '0.5rem', background: '#f0fdf4', borderRadius: '8px' }}>
            ✅ Standardy služeb a komunikace s hosty
          </li>
          <li style={{ padding: '1rem', marginBottom: '0.5rem', background: '#f0fdf4', borderRadius: '8px' }}>
            ✅ Správa pokojů a housekeeping
          </li>
          <li style={{ padding: '1rem', marginBottom: '0.5rem', background: '#f0fdf4', borderRadius: '8px' }}>
            ✅ Bezpečnostní protokoly a postupy
          </li>
          <li style={{ padding: '1rem', marginBottom: '0.5rem', background: '#f0fdf4', borderRadius: '8px' }}>
            ✅ Řešení stížností a zvládání náročných situací
          </li>
        </ul>
      </div>
    </div>
  )
}

