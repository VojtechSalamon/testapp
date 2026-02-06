'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

const quizData: Record<string, { title: string; questions: Question[] }> = {
  '1': {
    title: 'Kvíz: Recepční provoz',
    questions: [
      {
        id: 1,
        question: 'Jaký je první krok při check-in hosta?',
        options: [
          'Ověření identity hosta',
          'Přivítání hosta a kontrola rezervace',
          'Vydání klíčů',
          'Převzetí platby'
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'Co by měl recepční vždy zkontrolovat při check-in?',
        options: [
          'Pouze jméno hosta',
          'Rezervaci, identitu a způsob platby',
          'Pouze způsob platby',
          'Pouze identitu'
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'Jak dlouho by měl trvat standardní check-in proces?',
        options: [
          '5-10 minut',
          '2-3 minuty',
          '10-15 minut',
          '1 minuta'
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: 'Co je důležité při check-out?',
        options: [
          'Pouze vyúčtování',
          'Kontrola pokoje, vyúčtování a rozloučení',
          'Pouze rozloučení',
          'Pouze kontrola pokoje'
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'Jak by měl recepční reagovat na stížnost hosta?',
        options: [
          'Ignorovat ji',
          'Poslouchat, omluvit se a nabídnout řešení',
          'Obránit hotel',
          'Přesměrovat na manažera bez vyslechnutí'
        ],
        correctAnswer: 1
      }
    ]
  },
  '2': {
    title: 'Kvíz: Standardy služeb',
    questions: [
      {
        id: 1,
        question: 'Jaký je správný způsob oslovení hosta?',
        options: [
          'Ahoj',
          'Dobrý den, pane/paní [příjmení]',
          'Hej',
          'Dobrý'
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'Jaká je doporučená doba odezvy na telefonický hovor?',
        options: [
          'Do 5 minut',
          'Do 3 zvonění',
          'Do 10 minut',
          'Kdykoliv'
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'Co je součástí profesionálního vystupování?',
        options: [
          'Pouze čistý oděv',
          'Čistý oděv, upravený vzhled a přátelský úsměv',
          'Pouze úsměv',
          'Pouze upravený vzhled'
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: 'Jak by měl zaměstnanec reagovat na požadavek hosta?',
        options: [
          'Říct ne',
          'Přijmout požadavek a informovat o možnostech',
          'Ignorovat',
          'Přesměrovat na kolegu'
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'Co je důležité při komunikaci s hostem?',
        options: [
          'Pouze mluvit',
          'Poslouchat, být empatický a poskytovat řešení',
          'Pouze poslouchat',
          'Být rychlý'
        ],
        correctAnswer: 1
      }
    ]
  },
  '3': {
    title: 'Kvíz: Housekeeping',
    questions: [
      {
        id: 1,
        question: 'Jak často by měl být pokoj uklizen během pobytu hosta?',
        options: [
          'Jednou týdně',
          'Denně (pokud host souhlasí)',
          'Jednou za pobyt',
          'Podle potřeby'
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'Co je součástí standardního úklidu pokoje?',
        options: [
          'Pouze vynášení odpadků',
          'Úklid, výměna ručníků, doplnění zásob a kontrola',
          'Pouze výměna ručníků',
          'Pouze úklid'
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'Co by měl housekeeping zkontrolovat před odchodem z pokoje?',
        options: [
          'Pouze úklid',
          'Úklid, funkčnost zařízení a doplnění zásob',
          'Pouze funkčnost',
          'Pouze zásoby'
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: 'Jak by měl housekeeping reagovat na osobní věci hosta?',
        options: [
          'Přesunout je',
          'Respektovat je a nechat na místě',
          'Vyhodit je',
          'Zkontrolovat je'
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'Co je důležité při přípravě pokoje pro nového hosta?',
        options: [
          'Pouze úklid',
          'Kompletní úklid, kontrola zařízení a příjemné prostředí',
          'Pouze kontrola',
          'Pouze prostředí'
        ],
        correctAnswer: 1
      }
    ]
  },
  '4': {
    title: 'Kvíz: Bezpečnost',
    questions: [
      {
        id: 1,
        question: 'Co by měl zaměstnanec udělat při zjištění bezpečnostního problému?',
        options: [
          'Ignorovat ho',
          'Okamžitě nahlásit nadřízenému a podle potřeby zavolat pomoc',
          'Řešit sám',
          'Počkat'
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'Kde by měli hosté najít informace o evakuačním plánu?',
        options: [
          'Pouze na recepci',
          'V každém pokoji a na viditelných místech',
          'Pouze u východů',
          'Není potřeba'
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'Co je důležité při evakuaci?',
        options: [
          'Běžet rychle',
          'Zachovat klid, pomoci hostům a následovat evakuační plán',
          'Zachránit se sám',
          'Vzít věci'
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: 'Jak by měl zaměstnanec reagovat na podezřelou aktivitu?',
        options: [
          'Ignorovat',
          'Pozorovat, nahlásit a nezasahovat sám',
          'Zasáhnout sám',
          'Fotografovat'
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'Co je součástí bezpečnostního protokolu?',
        options: [
          'Pouze kontrola',
          'Kontrola přístupů, monitoring a rychlá reakce',
          'Pouze monitoring',
          'Pouze reakce'
        ],
        correctAnswer: 1
      }
    ]
  }
}

export default function QuizPage() {
  const params = useParams()
  const quizId = params?.id as string
  const quiz = quizData[quizId]
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  if (!quiz) {
    return (
      <div className="container">
        <div className="card">
          <h2>Kvíz nenalezen</h2>
          <Link href="/kvizy" className="btn">Zpět na seznam kvízů</Link>
        </div>
      </div>
    )
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResults) return
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex
    })
  }

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let correct = 0
    quiz.questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++
      }
    })
    return Math.round((correct / quiz.questions.length) * 100)
  }

  const score = showResults ? calculateScore() : 0
  const currentQ = quiz.questions[currentQuestion]
  const selectedAnswer = selectedAnswers[currentQuestion]

  if (showResults) {
    return (
      <div className="container">
        <div className="header">
          <h1>🧩 Kvízy</h1>
          <nav>
            <Link href="/">Domů</Link>
            <Link href="/videa">Video Akademie</Link>
            <Link href="/kvizy">Kvízy</Link>
          </nav>
        </div>

        <div className="results">
          <h2>{quiz.title}</h2>
          <div className="score">{score}%</div>
          <p style={{ color: '#666', marginBottom: '2rem' }}>
            Správně jste odpověděli na {Object.values(selectedAnswers).filter((ans, idx) => 
              ans === quiz.questions[idx].correctAnswer
            ).length} z {quiz.questions.length} otázek
          </p>

          <div style={{ marginTop: '2rem', textAlign: 'left' }}>
            <h3 style={{ marginBottom: '1rem' }}>Výsledky:</h3>
            {quiz.questions.map((q, idx) => {
              const isCorrect = selectedAnswers[idx] === q.correctAnswer
              return (
                <div key={q.id} style={{ 
                  marginBottom: '1rem', 
                  padding: '1rem', 
                  background: isCorrect ? '#d4edda' : '#f8d7da',
                  borderRadius: '8px'
                }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    {idx + 1}. {q.question}
                  </p>
                  <p style={{ fontSize: '0.9rem' }}>
                    {isCorrect ? '✓ Správně' : '✗ Špatně'} - 
                    Správná odpověď: {q.options[q.correctAnswer]}
                  </p>
                </div>
              )
            })}
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/kvizy" className="btn btn-secondary">
              Zpět na kvízy
            </Link>
            <button 
              onClick={() => {
                setCurrentQuestion(0)
                setSelectedAnswers({})
                setShowResults(false)
              }} 
              className="btn"
            >
              Zkusit znovu
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="header">
        <h1>🧩 Kvízy</h1>
        <nav>
          <Link href="/">Domů</Link>
          <Link href="/videa">Video Akademie</Link>
          <Link href="/kvizy">Kvízy</Link>
        </nav>
      </div>

      <div className="quiz-container">
        <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
          <h2>{quiz.title}</h2>
          <p style={{ color: '#666' }}>
            Otázka {currentQuestion + 1} z {quiz.questions.length}
          </p>
          <div style={{ 
            width: '100%', 
            height: '8px', 
            background: '#e0e0e0', 
            borderRadius: '4px',
            marginTop: '1rem',
            overflow: 'hidden'
          }}>
            <div style={{ 
              width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%`, 
              height: '100%', 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>

        <div className="quiz-question">
          <h2>{currentQ.question}</h2>
          <div className="quiz-options">
            {currentQ.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              return (
                <div
                  key={index}
                  className={`quiz-option ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(index)}
                >
                  {option}
                </div>
              )
            })}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="btn btn-secondary"
            style={{ opacity: currentQuestion === 0 ? 0.5 : 1, cursor: currentQuestion === 0 ? 'not-allowed' : 'pointer' }}
          >
            ← Předchozí
          </button>
          <button
            onClick={handleNext}
            disabled={selectedAnswer === undefined}
            className="btn"
            style={{ opacity: selectedAnswer === undefined ? 0.5 : 1, cursor: selectedAnswer === undefined ? 'not-allowed' : 'pointer' }}
          >
            {currentQuestion === quiz.questions.length - 1 ? 'Dokončit' : 'Další →'}
          </button>
        </div>
      </div>
    </div>
  )
}

