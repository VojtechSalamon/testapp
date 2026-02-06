'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

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

  useEffect(() => {
    const saved = localStorage.getItem('opletalova-aktuality')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setGuides(parsed.map((g: any) => ({
          ...g,
          createdDate: new Date(g.createdDate)
        })))
      } catch (e) {
        console.error('Error loading aktuality:', e)
      }
    }
  }, [])

  useEffect(() => {
    if (guides.length > 0) {
      localStorage.setItem('opletalova-aktuality', JSON.stringify(guides))
    }
  }, [guides])

  const isNew = (createdDate: Date) => {
    const daysDiff = (new Date().getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24)
    return daysDiff <= 7
  }

  const getLatestGuides = () => {
    return guides
      .sort((a, b) => b.createdDate.getTime() - a.createdDate.getTime())
      .slice(0, 3)
  }

  const truncateContent = (content: string, maxLength: number = 150) => {
    if (content.length <= maxLength) return content
    return content.substring(0, maxLength) + '...'
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
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              onClick={() => setShowAddForm(!showAddForm)} 
              className="btn"
              style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
            >
              {showAddForm ? 'Zrušit' : 'Přidat'}
            </button>
            <Link 
              href="/opletalova/aktuality"
              className="btn"
              style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
            >
              Zobrazit všechny
            </Link>
          </div>
        </div>

        {showAddForm && (
          <div style={{ 
            padding: '1.5rem', 
            background: '#f9fafb', 
            borderRadius: '8px', 
            marginBottom: '2rem',
            border: '2px solid #000'
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
            Zatím nejsou žádné aktuality.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {getLatestGuides().map((guide) => {
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
                    {truncateContent(guide.content)}
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

