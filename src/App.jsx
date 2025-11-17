import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import DashboardPreview from './components/DashboardPreview'
import Markets from './components/Markets'
import Portfolio from './components/Portfolio'
import Admin from './components/Admin'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [active, setActive] = useState('landing')

  return (
    <div className="min-h-screen w-full bg-[#0a0f17] text-[#e8f0fb]">
      <Navbar active={active} onNavigate={setActive} />

      {active === 'landing' && (
        <>
          <Hero onViewDashboard={() => setActive('dashboard')} onLogin={() => {}} />
          <section className="border-t border-cyan-400/10 bg-[#0a0f17] py-10">
            <div className="mx-auto max-w-7xl px-6">
              <div className="rounded-xl border border-cyan-400/10 bg-[#131B27]/60 p-6 text-cyan-100/80 backdrop-blur">
                <div className="mb-2 text-sm text-cyan-100/60">Warum SimEx?</div>
                <p className="max-w-3xl text-cyan-50/80">Minimalistisches, futuristisches Design mit Neon-Akzenten. Reine Frontend-Vorschau ohne Backend – perfekt, um das Look-and-Feel eines professionellen FinTech-Dashboards zu erleben.</p>
              </div>
            </div>
          </section>
        </>
      )}

      {active === 'dashboard' && <DashboardPreview />}
      {active === 'markets' && <Markets />}
      {active === 'portfolio' && <Portfolio />}
      {active === 'admin' && <Admin />}

      <Footer />
    </div>
  )
}

export default App
