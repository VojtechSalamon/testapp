'use client'

import { useRouter } from 'next/navigation'

export default function ReseniProblemuSHostyPage() {
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
        <h2 style={{ marginTop: 0, marginBottom: '1rem', color: '#000' }}>Řešení problémů s hosty</h2>
        <p style={{ color: '#000', marginBottom: '1rem' }}>
          Tohle je pouze návod, který vás má navést a pomoct v krizových situacích s hostem. Jsou zde postupy, fráze jak reagovat a možné návrhy řešení pro hosta.
        </p>
        <p style={{ color: '#000', margin: 0 }}>
          Neznamená to, že máte jednat bod po bodu, jak je zde uvedeno. Má vám to pouze pomoci. Je důležité, abyste si našli každý svůj styl řešení problémů a nebáli se ho provést, způsobem který si myslíte, že je v tu danou chvíli nejlepší.
        </p>
        <p style={{ color: '#000', marginTop: '1.5rem', marginBottom: 0, fontWeight: 700 }}>
          Buďte kreativní a nebojte se problém vyřešit sami!
        </p>

        <h3 style={{ color: '#000', marginTop: '2rem', marginBottom: '0.75rem' }}>Zásady</h3>
        <ol className="zasady-list" style={{ color: '#000', margin: 0, paddingLeft: 0 }}>
          <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>Zachovejte klid, nikdy si hostův problém nebereme osobně.</li>
          <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>Zkuste se vcítit do jeho kůže – je v cizí zemi v neznámém prostředí na dovolené a něco není podle jeho představ a mu se ta představa hroutí a ta představa se může někdy týkat banální věci.</li>
          <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>Vyslechneme si celý hostův problém, necháme ho domluvit.</li>
          <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>Nejdříve používáme fráze typu <span style={{ backgroundColor: '#f0f0f0', fontStyle: 'italic', padding: '0.1em 0.35em', borderRadius: '4px' }}>„I understand your emotions“</span>, <span style={{ backgroundColor: '#f0f0f0', fontStyle: 'italic', padding: '0.1em 0.35em', borderRadius: '4px' }}>„I truly apologize for the inconvenience.“</span>, tím se snažíme hostovi dát najevo, že ho chápeme.</li>
          <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>Omluvíme se v případě, že za to můžeme – <span style={{ backgroundColor: '#f0f0f0', fontStyle: 'italic', padding: '0.1em 0.35em', borderRadius: '4px' }}>„I truly apologize for this inconvenience“</span>, <span style={{ backgroundColor: '#f0f0f0', fontStyle: 'italic', padding: '0.1em 0.35em', borderRadius: '4px' }}>„Please accept our sincere apologies for this“</span></li>
          <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>
            Pokud se jedná o problém, za který my nemůžeme, př.: hosté dělají rámus s kufry, ozývají se z venku hlasité zvuky, nemají v blízkosti to, co potřebují atd. – dáme najevo, že to není naše chyba a dáme hostovi najevo, že uděláme vše proto, abychom mu pomohli, fráze: <span style={{ backgroundColor: '#f0f0f0', fontStyle: 'italic', padding: '0.1em 0.35em', borderRadius: '4px' }}>„While this is unfortunately outside of our control…“</span>, <span style={{ backgroundColor: '#f0f0f0', fontStyle: 'italic', padding: '0.1em 0.35em', borderRadius: '4px' }}>„Although this did not originate on our side…“</span>, <span style={{ backgroundColor: '#f0f0f0', fontStyle: 'italic', padding: '0.1em 0.35em', borderRadius: '4px' }}>„As this issue was caused by an external factor…“</span>, <span style={{ backgroundColor: '#f0f0f0', fontStyle: 'italic', padding: '0.1em 0.35em', borderRadius: '4px' }}>„I will do my best to assist you.“</span> <span style={{ backgroundColor: '#f0f0f0', fontStyle: 'italic', padding: '0.1em 0.35em', borderRadius: '4px' }}>„Let me see how I can help you with this.“</span>
          </li>
        </ol>

        <h3 style={{ color: '#000', marginTop: '2rem', marginBottom: '0.75rem' }}>Možnosti řešení</h3>
        <ol className="zasady-list zasady-list-reset" style={{ color: '#000', margin: 0, paddingLeft: 0 }}>
          <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>Donéste na pokoj víno a čokoládu.</li>
          <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>Výběr z minibaru zadarmo.</li>
          <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>Check out do 12 zadarmo.</li>
          <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>Zaplatíme taxi.</li>
          <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>Můžeme objednat jídlo, např. pizzu (dělali jsme když nefungovala trouba).</li>
          <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>
            REFUNDY – pokud je hodnota rezervace:
            <ul style={{ marginTop: '0.5rem', marginBottom: 0, paddingLeft: '1.25rem' }}>
              <li>100 euro – 45 % = 45 euro = 1100 Kč</li>
              <li>200 euro – 25 % = 50 euro = 1200 Kč</li>
              <li>300 euro – 15 % = 45 euro = 1100 Kč</li>
              <li>400 euro – 15 % = 60 euro = 1400 Kč</li>
            </ul>
          </li>
          <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>
            Nabídněte zaplacení snídaně – jen v případě, že tam jsou na minimálně dvě nebo tři noci, jinak se nám finančně nevyplatí oproti refundu, také brát v potaz kolik je to hostů, zda velká rodina či pár, běžně utrácejí dva lidi mezi 1300–2000 Kč.
          </li>
          <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>Upgrade pokoje.</li>
        </ol>
      </div>
    </div>
  )
}
