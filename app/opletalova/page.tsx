'use client'

import Link from 'next/link'
import { useState } from 'react'

interface Guide {
  id: string
  title: string
  content: string
  createdAt: string
  createdDate: Date
  isResolved: boolean
}

export default function OpletalovaPage() {
  const [guides, setGuides] = useState<Guide[]>([])
  const [newGuideTitle, setNewGuideTitle] = useState('')
  const [newGuideContent, setNewGuideContent] = useState('')
  const [newGuideDate, setNewGuideDate] = useState(new Date().toISOString().split('T')[0])
  const [showAddForm, setShowAddForm] = useState(false)

  const isNew = (createdDate: Date) => {
    const daysDiff = (new Date().getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24)
    return daysDiff <= 7 // Nová aktualita je méně než 7 dní stará
  }

  const handleAddGuide = () => {
    if (newGuideTitle.trim() && newGuideContent.trim()) {
      const createdDate = new Date(newGuideDate)
      const guide: Guide = {
        id: Date.now().toString(),
        title: newGuideTitle,
        content: newGuideContent,
        createdAt: createdDate.toLocaleDateString('cs-CZ'),
        createdDate: createdDate,
        isResolved: false
      }
      setGuides([...guides, guide])
      setNewGuideTitle('')
      setNewGuideContent('')
      setNewGuideDate(new Date().toISOString().split('T')[0])
      setShowAddForm(false)
    }
  }

  const handleToggleResolved = (id: string) => {
    setGuides(guides.map(g => g.id === id ? { ...g, isResolved: !g.isResolved } : g))
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Opletalova</h1>
        <nav>
          <Link href="/">Domů</Link>
        </nav>
      </div>

      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
        <Link href="/opletalova/bezpecnost" className="btn" style={{ textAlign: 'center' }}>
          Bezpečnost
        </Link>
        <Link href="/opletalova/jak-na-to" className="btn" style={{ textAlign: 'center' }}>
          Jak na to
        </Link>
        <Link href="/opletalova/o-rezidenci" className="btn" style={{ textAlign: 'center' }}>
          O rezidenci
        </Link>
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
            <h3 style={{ marginBottom: '1rem', color: '#000' }}>Nová aktualita</h3>
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
            <input
              type="date"
              value={newGuideDate}
              onChange={(e) => setNewGuideDate(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                marginBottom: '1rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem'
              }}
            />
            <button onClick={handleAddGuide} className="btn">
              Uložit aktualitu
            </button>
          </div>
        )}

        {guides.length === 0 ? (
          <p style={{ color: '#000', textAlign: 'center', padding: '2rem' }}>
            Zatím nejsou žádné aktuality. Klikněte na "Přidat aktualitu" pro vytvoření první aktuality.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {guides.map((guide) => {
              const newGuide = isNew(guide.createdDate)
              return (
                <div key={guide.id} className="card" style={{ marginBottom: 0, opacity: guide.isResolved ? 0.6 : 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
                      {newGuide && (
                        <span style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          background: '#0066ff',
                          display: 'inline-block',
                          flexShrink: 0
                        }} />
                      )}
                      <h3 style={{ 
                        color: '#000', 
                        margin: 0,
                        textDecoration: guide.isResolved ? 'line-through' : 'none'
                      }}>
                        {guide.title}
                      </h3>
                    </div>
                    <span style={{ color: '#000', fontSize: '0.85rem' }}>{guide.createdAt}</span>
                  </div>
                  <div style={{ 
                    color: '#000', 
                    lineHeight: '1.6',
                    whiteSpace: 'pre-wrap',
                    textDecoration: guide.isResolved ? 'line-through' : 'none'
                  }}>
                    {guide.content}
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', alignItems: 'center' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={guide.isResolved}
                        onChange={() => handleToggleResolved(guide.id)}
                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                      />
                      <span style={{ color: '#000', fontSize: '0.9rem' }}>Vyřešeno</span>
                    </label>
                    <button
                      onClick={() => setGuides(guides.filter(g => g.id !== guide.id))}
                      style={{
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
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

