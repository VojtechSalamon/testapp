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

export default function KarolinySvetlePage() {
  const [guides, setGuides] = useState<Guide[]>([])
  const [newGuideTitle, setNewGuideTitle] = useState('')
  const [newGuideContent, setNewGuideContent] = useState('')
  const [newGuideDate, setNewGuideDate] = useState(new Date().toISOString().split('T')[0])
  const [showAddForm, setShowAddForm] = useState(false)

  const [shiftHandovers, setShiftHandovers] = useState<Guide[]>([])
  const [newShiftHandoverTitle, setNewShiftHandoverTitle] = useState('')
  const [newShiftHandoverContent, setNewShiftHandoverContent] = useState('')
  const [newShiftHandoverDate, setNewShiftHandoverDate] = useState(new Date().toISOString().split('T')[0])
  const [showAddShiftHandoverForm, setShowAddShiftHandoverForm] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('karoliny-svetle-aktuality')
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
      localStorage.setItem('karoliny-svetle-aktuality', JSON.stringify(guides))
    }
  }, [guides])

  useEffect(() => {
    const saved = localStorage.getItem('karoliny-svetle-predani-smeny')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setShiftHandovers(parsed.map((g: any) => ({
          ...g,
          createdDate: new Date(g.createdDate)
        })))
      } catch (e) {
        console.error('Error loading predani smeny:', e)
      }
    }
  }, [])

  useEffect(() => {
    if (shiftHandovers.length > 0) {
      localStorage.setItem('karoliny-svetle-predani-smeny', JSON.stringify(shiftHandovers))
    }
  }, [shiftHandovers])

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

  const getLatestShiftHandovers = () => {
    return shiftHandovers
      .sort((a, b) => b.createdDate.getTime() - a.createdDate.getTime())
      .slice(0, 3)
  }

  const handleAddShiftHandover = () => {
    if (newShiftHandoverTitle.trim() && newShiftHandoverContent.trim()) {
      const createdDate = new Date(newShiftHandoverDate)
      const shiftHandover: Guide = {
        id: Date.now().toString(),
        title: newShiftHandoverTitle,
        content: newShiftHandoverContent,
        createdAt: createdDate.toLocaleDateString('cs-CZ'),
        createdDate: createdDate,
        isResolved: false
      }
      setShiftHandovers([...shiftHandovers, shiftHandover])
      setNewShiftHandoverTitle('')
      setNewShiftHandoverContent('')
      setNewShiftHandoverDate(new Date().toISOString().split('T')[0])
      setShowAddShiftHandoverForm(false)
    }
  }

  return (
    <div className="container">
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
        <Link href="/karoliny-svetle/bezpecnost" className="btn" style={{ textAlign: 'center' }}>
          Bezpečnost
        </Link>
        <Link href="/karoliny-svetle/jak-na-to" className="btn" style={{ textAlign: 'center' }}>
          Jak na to
        </Link>
        <Link href="/karoliny-svetle/o-rezidenci" className="btn" style={{ textAlign: 'center' }}>
          O rezidenci
        </Link>
      </div>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ margin: 0, color: '#000' }}>Aktuality</h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              onClick={() => setShowAddForm(!showAddForm)} 
              className="btn"
              style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
            >
              {showAddForm ? 'Zrušit' : 'Přidat'}
            </button>
            <Link 
              href="/karoliny-svetle/aktuality"
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

      <div className="card" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ margin: 0, color: '#000' }}>Předání směny</h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              onClick={() => setShowAddShiftHandoverForm(!showAddShiftHandoverForm)} 
              className="btn"
              style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
            >
              {showAddShiftHandoverForm ? 'Zrušit' : 'Přidat'}
            </button>
            <Link 
              href="/karoliny-svetle/predani-smeny"
              className="btn"
              style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
            >
              Zobrazit všechny
            </Link>
          </div>
        </div>

        {showAddShiftHandoverForm && (
          <div style={{ 
            padding: '1.5rem', 
            background: '#f9fafb', 
            borderRadius: '8px', 
            marginBottom: '2rem',
            border: '2px solid #000'
          }}>
            <h3 style={{ marginBottom: '1rem', color: '#000' }}>Nové předání směny</h3>
            <input
              type="text"
              placeholder="Název předání směny"
              value={newShiftHandoverTitle}
              onChange={(e) => setNewShiftHandoverTitle(e.target.value)}
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
              placeholder="Obsah předání směny"
              value={newShiftHandoverContent}
              onChange={(e) => setNewShiftHandoverContent(e.target.value)}
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
              value={newShiftHandoverDate}
              onChange={(e) => setNewShiftHandoverDate(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                marginBottom: '1rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem'
              }}
            />
            <button onClick={handleAddShiftHandover} className="btn">
              Uložit předání směny
            </button>
          </div>
        )}

        {shiftHandovers.length === 0 ? (
          <p style={{ color: '#000', textAlign: 'center', padding: '2rem' }}>
            Zatím nejsou žádná předání směny.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {getLatestShiftHandovers().map((shiftHandover) => {
              const newShiftHandover = isNew(shiftHandover.createdDate)
              return (
                <div key={shiftHandover.id} className="card" style={{ marginBottom: 0, opacity: shiftHandover.isResolved ? 0.6 : 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
                      {newShiftHandover && (
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
                        textDecoration: shiftHandover.isResolved ? 'line-through' : 'none'
                      }}>
                        {shiftHandover.title}
                      </h3>
                    </div>
                    <span style={{ color: '#000', fontSize: '0.85rem' }}>{shiftHandover.createdAt}</span>
                  </div>
                  <div style={{ 
                    color: '#000', 
                    lineHeight: '1.6',
                    whiteSpace: 'pre-wrap',
                    textDecoration: shiftHandover.isResolved ? 'line-through' : 'none'
                  }}>
                    {truncateContent(shiftHandover.content)}
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

