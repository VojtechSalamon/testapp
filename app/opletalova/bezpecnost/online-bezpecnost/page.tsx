'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function OnlineBezpecnostPage() {
  const router = useRouter()

  return (
    <div className="container">
      <div style={{ marginBottom: '1.5rem' }}>
        <button 
          onClick={() => router.back()} 
          className="btn btn-secondary" 
          style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
        >
          ← Zpět
        </button>
      </div>

      <div className="card">
        <div style={{ 
          position: 'relative', 
          paddingBottom: '56.25%', 
          height: 0, 
          overflow: 'hidden',
          maxWidth: '100%',
          marginBottom: '1rem'
        }}>
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            src="https://www.youtube.com/embed/TUTOQlu5kOI"
            title="Online bezpečnost"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

