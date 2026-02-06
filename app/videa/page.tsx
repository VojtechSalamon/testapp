'use client'

import Link from 'next/link'
import { useState } from 'react'

interface Video {
  id: string
  title: string
  description: string
  duration: string
  category: string
}

const videos: Video[] = [
  {
    id: '1',
    title: 'Základy recepčního provozu',
    description: 'Naučte se základní postupy při check-in a check-out hostů, práci s rezervačním systémem a komunikaci s hosty.',
    duration: '15 min',
    category: 'Recepce'
  },
  {
    id: '2',
    title: 'Standardy služeb a etiketa',
    description: 'Důležité standardy služeb, profesionální vystupování a etiketa při komunikaci s hosty.',
    duration: '12 min',
    category: 'Služby'
  },
  {
    id: '3',
    title: 'Housekeeping - úklid pokojů',
    description: 'Správné postupy při úklidu pokojů, kontrola kvality a příprava pokojů pro nové hosty.',
    duration: '18 min',
    category: 'Housekeeping'
  },
  {
    id: '4',
    title: 'Bezpečnostní protokoly',
    description: 'Bezpečnostní postupy, evakuační plány, první pomoc a zvládání krizových situací.',
    duration: '20 min',
    category: 'Bezpečnost'
  },
  {
    id: '5',
    title: 'Řešení stížností',
    description: 'Jak profesionálně řešit stížnosti hostů, deeskalace konfliktů a zajištění spokojenosti hostů.',
    duration: '14 min',
    category: 'Komunikace'
  },
  {
    id: '6',
    title: 'Práce s rezervačním systémem',
    description: 'Základy práce s hotelovým rezervačním systémem, vytváření rezervací a správa pokojů.',
    duration: '16 min',
    category: 'Recepce'
  }
]

export default function VideaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Vše')

  const categories = ['Vše', ...Array.from(new Set(videos.map(v => v.category)))]

  const filteredVideos = selectedCategory === 'Vše' 
    ? videos 
    : videos.filter(v => v.category === selectedCategory)

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

      <div className="card">
        <h2>Vzdělávací videa</h2>
        <p style={{ marginBottom: '1.5rem', color: '#666' }}>
          Prozkoumejte naši sbírku vzdělávacích videí zaměřených na hotelový provoz.
        </p>

        <div style={{ marginBottom: '2rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="btn"
              style={{
                background: selectedCategory === category 
                  ? 'linear-gradient(135deg, #22c55e 0%, #059669 100%)' 
                  : '#e0e0e0',
                color: selectedCategory === category ? 'white' : '#333',
                padding: '0.5rem 1rem',
                fontSize: '0.9rem'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="video-grid">
          {filteredVideos.map(video => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail">
                ▶️
              </div>
              <div className="video-info">
                <span style={{ 
                  display: 'inline-block', 
                  background: '#22c55e', 
                  color: 'white', 
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '4px', 
                  fontSize: '0.75rem',
                  marginBottom: '0.5rem'
                }}>
                  {video.category}
                </span>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#999', fontSize: '0.85rem' }}>⏱️ {video.duration}</span>
                  <Link href={`/videa/${video.id}`} className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    Sledovat
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

