'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const residenceNames: Record<string, string> = {
  '/old-royal-post': 'Old Royal Post',
  '/opletalova': 'Opletalova',
  '/karoliny-svetle': 'Karolíny Světlé',
  '/nosticova': 'Nosticova',
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

  const residenceName = getResidenceName()

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
        <span style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#000'
        }}>
          {residenceName}
        </span>
      )}
    </div>
  )
}

