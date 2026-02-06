'use client'

import Link from 'next/link'
import { useState } from 'react'

interface Quiz {
  id: string
  title: string
  description: string
  category: string
  questionCount: number
}

const quizzes: Quiz[] = [
  {
    id: '1',
    title: 'Kvíz: Recepční provoz',
    description: 'Otestujte své znalosti o check-in/check-out procesech a práci s rezervačním systémem.',
    category: 'Recepce',
    questionCount: 5
  },
  {
    id: '2',
    title: 'Kvíz: Standardy služeb',
    description: 'Zkontrolujte, jak dobře znáte standardy služeb a profesionální etiketu.',
    category: 'Služby',
    questionCount: 5
  },
  {
    id: '3',
    title: 'Kvíz: Housekeeping',
    description: 'Test znalostí o úklidu pokojů a přípravě pokojů pro hosty.',
    category: 'Housekeeping',
    questionCount: 5
  },
  {
    id: '4',
    title: 'Kvíz: Bezpečnost',
    description: 'Ověřte své znalosti o bezpečnostních protokolech a krizových situacích.',
    category: 'Bezpečnost',
    questionCount: 5
  }
]

export default function KvizyPage() {
  return (
    <div className="container">
      <div className="header">
        <h1>🧩 Kvízy</h1>
        <nav>
          <Link href="/">Domů</Link>
        </nav>
      </div>

      <div className="card">
        <h2>Dostupné kvízy</h2>
        <p style={{ marginBottom: '1.5rem', color: '#666' }}>
          Otestujte své znalosti a získejte certifikát absolvováním našich kvízů.
        </p>

        <div className="video-grid">
          {quizzes.map(quiz => (
            <div key={quiz.id} className="video-card">
              <div className="video-thumbnail" style={{ fontSize: '2rem' }}>
                🧩
              </div>
              <div className="video-info">
                <span style={{ 
                  display: 'inline-block', 
                  background: '#f39c12', 
                  color: 'white', 
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '4px', 
                  fontSize: '0.75rem',
                  marginBottom: '0.5rem'
                }}>
                  {quiz.category}
                </span>
                <h3>{quiz.title}</h3>
                <p>{quiz.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                  <span style={{ color: '#999', fontSize: '0.85rem' }}>❓ {quiz.questionCount} otázek</span>
                  <Link href={`/kvizy/${quiz.id}`} className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    Začít kvíz
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

