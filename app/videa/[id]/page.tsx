'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

const videoData: Record<string, { title: string; description: string; category: string }> = {
  '1': {
    title: 'Základy recepčního provozu',
    description: 'Naučte se základní postupy při check-in a check-out hostů, práci s rezervačním systémem a komunikaci s hosty.',
    category: 'Recepce'
  },
  '2': {
    title: 'Standardy služeb a etiketa',
    description: 'Důležité standardy služeb, profesionální vystupování a etiketa při komunikaci s hosty.',
    category: 'Služby'
  },
  '3': {
    title: 'Housekeeping - úklid pokojů',
    description: 'Správné postupy při úklidu pokojů, kontrola kvality a příprava pokojů pro nové hosty.',
    category: 'Housekeeping'
  },
  '4': {
    title: 'Bezpečnostní protokoly',
    description: 'Bezpečnostní postupy, evakuační plány, první pomoc a zvládání krizových situací.',
    category: 'Bezpečnost'
  },
  '5': {
    title: 'Řešení stížností',
    description: 'Jak profesionálně řešit stížnosti hostů, deeskalace konfliktů a zajištění spokojenosti hostů.',
    category: 'Komunikace'
  },
  '6': {
    title: 'Práce s rezervačním systémem',
    description: 'Základy práce s hotelovým rezervačním systémem, vytváření rezervací a správa pokojů.',
    category: 'Recepce'
  }
}

export default function VideoPlayerPage() {
  const params = useParams()
  const videoId = params?.id as string
  const video = videoData[videoId]

  if (!video) {
    return (
      <div className="container">
        <div className="card">
          <h2>Video nenalezeno</h2>
          <Link href="/videa" className="btn">Zpět na seznam videí</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="header">
        <h1>📹 Video Akademie</h1>
        <nav>
          <Link href="/">Domů</Link>
          <Link href="/old-royal-post">Old Royal Post</Link>
          <Link href="/opletalova">Opletalova</Link>
          <Link href="/karoliny-svetle">Karolíny Světlé</Link>
          <Link href="/nosticova">Nosticova</Link>
          <Link href="/videa">Video Akademie</Link>
          <Link href="/kvizy">Kvízy</Link>
        </nav>
      </div>

      <div className="video-player-container">
        <div style={{ marginBottom: '1rem' }}>
          <span style={{ 
            display: 'inline-block', 
            background: '#22c55e', 
            color: 'white', 
            padding: '0.25rem 0.75rem', 
            borderRadius: '4px', 
            fontSize: '0.75rem',
            marginBottom: '1rem'
          }}>
            {video.category}
          </span>
          <h1 style={{ color: '#333', marginBottom: '0.5rem' }}>{video.title}</h1>
          <p style={{ color: '#666' }}>{video.description}</p>
        </div>

        <div className="video-player">
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>▶️</div>
            <p>Video přehrávač</p>
            <p style={{ fontSize: '1rem', marginTop: '0.5rem', opacity: 0.8 }}>
              (Zde by bylo vloženo skutečné video)
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/videa" className="btn btn-secondary">
            ← Zpět na seznam videí
          </Link>
          <Link href="/kvizy" className="btn">
            Otestovat znalosti →
          </Link>
        </div>
      </div>

      <div className="card">
        <h2>Klíčové body tohoto videa:</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '0.75rem', marginBottom: '0.5rem', background: '#f0fdf4', borderRadius: '8px' }}>
            ✓ Profesionální přístup k hostům
          </li>
          <li style={{ padding: '0.75rem', marginBottom: '0.5rem', background: '#f0fdf4', borderRadius: '8px' }}>
            ✓ Efektivní komunikace
          </li>
          <li style={{ padding: '0.75rem', marginBottom: '0.5rem', background: '#f0fdf4', borderRadius: '8px' }}>
            ✓ Dodržování standardů služeb
          </li>
          <li style={{ padding: '0.75rem', marginBottom: '0.5rem', background: '#f0fdf4', borderRadius: '8px' }}>
            ✓ Praktické tipy a triky
          </li>
        </ul>
      </div>
    </div>
  )
}

