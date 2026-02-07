'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const residenceNames: Record<string, string> = {
  '/old-royal-post': 'Old Royal Post',
  '/opletalova': 'Opletalova',
  '/karoliny-svetle': 'Karolíny Světlé',
  '/nosticova': 'Nosticova',
}

const subpageNames: Record<string, string> = {
  'bezpecnost': 'Bezpečnost',
  'jak-na-to': 'Jak na to',
  'o-rezidenci': 'O rezidenci',
  'aktuality': 'Aktuality',
  'predani-smeny': 'Předání směny',
  'online-bezpecnost': 'Online bezpečnost',
}

export default function HeaderBar() {
  const pathname = usePathname()
  
  // Zjistíme, jestli jsme na stránce rezidence nebo její podstránce
  const getResidenceName = () => {
    for (const [path, name] of Object.entries(residenceNames)) {
      if (pathname.startsWith(path)) {
        return name
      }
    }
    return null
  }

  // Zjistíme název podstránky
  const getSubpageName = () => {
    const residenceName = getResidenceName()
    if (!residenceName) return null

    // Najdeme část cesty po názvu rezidence
    for (const [path] of Object.entries(residenceNames)) {
      if (pathname.startsWith(path)) {
        const remainingPath = pathname.slice(path.length)
        if (remainingPath.length > 1) {
          // Odstraníme úvodní lomítko a vezmeme segmenty
          const segments = remainingPath.split('/').filter(Boolean)
          if (segments.length > 0) {
            // Zkontrolujeme všechny segmenty, abychom našli podstránku
            for (let i = 0; i < segments.length; i++) {
              const segment = segments[i]
              // Pokud je to online-bezpecnost (vnořená pod bezpecnost), použijeme ji
              if (segment === 'online-bezpecnost') {
                return subpageNames[segment] || null
              }
              // Jinak zkontrolujeme, jestli je to známá podstránka
              if (subpageNames[segment]) {
                // Pokud je další segment a není to [id] (číslo), použijeme aktuální segment
                // Pokud je další segment online-bezpecnost, použijeme ten
                if (i + 1 < segments.length && segments[i + 1] === 'online-bezpecnost') {
                  return subpageNames['online-bezpecnost'] || null
                }
                // Pokud je další segment číslo (detailní stránka), použijeme aktuální segment
                if (i + 1 < segments.length && /^\d+$/.test(segments[i + 1])) {
                  return subpageNames[segment] || null
                }
                // Jinak použijeme aktuální segment
                return subpageNames[segment] || null
              }
            }
          }
        }
      }
    }
    return null
  }

  const residenceName = getResidenceName()
  const subpageName = getSubpageName()

  return (
    <div style={{
      width: '100%',
      borderBottom: '1px solid #ddd',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      background: '#fff',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link href="/" style={{ 
        textDecoration: 'none', 
        color: '#000',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>
        <span>🏨</span>
        <span>URBNWLF ACADEMY</span>
      </Link>
      {residenceName && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: '#000'
        }}>
          <span>{residenceName}</span>
          {subpageName && (
            <>
              <span style={{ fontSize: '1rem', opacity: 0.5 }}>/</span>
              <span>{subpageName}</span>
            </>
          )}
        </div>
      )}
    </div>
  )
}

