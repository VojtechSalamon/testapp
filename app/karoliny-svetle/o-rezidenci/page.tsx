'use client'

import Link from 'next/link'
import { useState } from 'react'

interface Guide {
  id: string
  title: string
  content: string
  createdAt: string
}

export default function ORezidenciPage() {
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
        <h1>Karolíny Světlé - O rezidenci</h1>
        <nav>
          <Link href="/">Domů</Link>
        </nav>
      </div>

      <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href="/karoliny-svetle" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
          ← Zpět na Karolíny Světlé
        </Link>
        <Link href="/karoliny-svetle/bezpecnost" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
          Bezpečnost
        </Link>
        <Link href="/karoliny-svetle/jak-na-to" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
          Jak na to
        </Link>
        <Link href="/karoliny-svetle/o-rezidenci" className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
          O rezidenci
        </Link>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2>O rezidenci - Karolíny Světlé</h2>
          <button 
            onClick={() => setShowAddForm(!showAddForm)} 
            className="btn"
            style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
          >
            {showAddForm ? 'Zrušit' : '+ Přidat návod'}
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
            <h3 style={{ marginBottom: '1rem', color: '#000' }}>Nový návod</h3>
            <input
              type="text"
              placeholder="Název návodu"
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
              placeholder="Obsah návodu"
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
              Uložit návod
            </button>
          </div>
        )}

        {guides.length === 0 ? (
          <p style={{ color: '#000', textAlign: 'center', padding: '2rem' }}>
            Zatím nejsou žádné návody. Klikněte na "Přidat návod" pro vytvoření prvního návodu.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {guides.map((guide) => (
              <div key={guide.id} className="card" style={{ marginBottom: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                  <h3 style={{ color: '#000', margin: 0 }}>{guide.title}</h3>
                  <span style={{ color: '#000', fontSize: '0.85rem' }}>{guide.createdAt}</span>
                </div>
                <div style={{ 
                  color: '#000', 
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
    </div>
  )
}

