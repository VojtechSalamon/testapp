'use client'

import Link from 'next/link'
import { useState } from 'react'

interface Guide {
  id: string
  title: string
  content: string
  createdAt: string
}

export default function OpletalovaPage() {
  const [guides, setGuides] = useState<Guide[]>([])
  const [newGuideTitle, setNewGuideTitle] = useState('')
  const [newGuideContent, setNewGuideContent] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)

  const handleAddGuide = () => {
    if (newGuideTitle.trim() && newGuideContent.trim()) {
      const guide: Guide = {
        id: Date.now().toString(),
        title: newGuideTitle,
        content: newGuideContent,
        createdAt: new Date().toLocaleDateString('cs-CZ')
      }
      setGuides([...guides, guide])
      setNewGuideTitle('')
      setNewGuideContent('')
      setShowAddForm(false)
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Opletalova</h1>
        <nav>
          <Link href="/">Domů</Link>
        </nav>
      </div>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2>Aktuality - Opletalova</h2>
          <button 
            onClick={() => setShowAddForm(!showAddForm)} 
            className="btn"
            style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
          >
            {showAddForm ? 'Zrušit' : '+ Přidat aktualitu'}
          </button>
        </div>

        {showAddForm && (
          <div style={{ 
            padding: '1.5rem', 
            background: '#f9fafb', 
            borderRadius: '8px', 
            marginBottom: '2rem',
            border: '2px solid #22c55e'
          }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>Nová aktualita</h3>
            <input
              type="text"
              placeholder="Název aktuality"
              value={newGuideTitle}
              onChange={(e) => setNewGuideTitle(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                marginBottom: '1rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem'
              }}
            />
            <textarea
              placeholder="Obsah aktuality"
              value={newGuideContent}
              onChange={(e) => setNewGuideContent(e.target.value)}
              rows={6}
              style={{
                width: '100%',
                padding: '0.75rem',
                marginBottom: '1rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
            <button onClick={handleAddGuide} className="btn">
              Uložit aktualitu
            </button>
          </div>
        )}

        {guides.length === 0 ? (
          <p style={{ color: '#666', textAlign: 'center', padding: '2rem' }}>
            Zatím nejsou žádné aktuality. Klikněte na "Přidat aktualitu" pro vytvoření první aktuality.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {guides.map((guide) => (
              <div key={guide.id} className="card" style={{ marginBottom: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                  <h3 style={{ color: '#333', margin: 0 }}>{guide.title}</h3>
                  <span style={{ color: '#999', fontSize: '0.85rem' }}>{guide.createdAt}</span>
                </div>
                <div style={{ 
                  color: '#666', 
                  lineHeight: '1.6',
                  whiteSpace: 'pre-wrap'
                }}>
                  {guide.content}
                </div>
                <button
                  onClick={() => setGuides(guides.filter(g => g.id !== guide.id))}
                  style={{
                    marginTop: '1rem',
                    padding: '0.5rem 1rem',
                    background: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  Smazat
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="card">
        <h2 style={{ marginBottom: '1.5rem' }}>Sekce</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '1rem'
        }}>
          <Link href="/opletalova/bezpecnost" className="location-card" style={{ textAlign: 'center' }}>
            <h3>Bezpečnost</h3>
          </Link>
          <Link href="/opletalova/jak-na-to" className="location-card" style={{ textAlign: 'center' }}>
            <h3>Jak na to</h3>
          </Link>
          <Link href="/opletalova/o-rezidenci" className="location-card" style={{ textAlign: 'center' }}>
            <h3>O rezidenci</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

