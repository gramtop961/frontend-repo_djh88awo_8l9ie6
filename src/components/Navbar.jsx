export default function Navbar({ active, onNavigate }) {
  const links = [
    { key: 'landing', label: 'Landing' },
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'markets', label: 'Märkte' },
    { key: 'portfolio', label: 'Portfolio' },
    { key: 'admin', label: 'Admin' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-cyan-400/10 bg-[#0a0f17]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="rounded-md bg-white/5 px-2 py-1 text-[#00e6ff] shadow-[0_0_16px_rgba(0,230,255,0.35)] backdrop-blur">
            <span className="font-orbitron text-xl">SimEx</span>
          </div>
          <span className="hidden text-sm text-cyan-100/60 sm:block">Trading Simulator</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <button key={l.key} onClick={() => onNavigate(l.key)} className={`text-sm transition hover:text-[#00e6ff] ${active===l.key?'text-[#00e6ff]':'text-cyan-100/70'}`}>{l.label}</button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-cyan-400/30 bg-white/5 px-3 py-1.5 text-sm text-cyan-100/80 hover:bg-white/10">Login</button>
          <button className="md:hidden rounded-lg border border-cyan-400/30 bg-white/5 px-2 py-1 text-cyan-100/80">Menu</button>
        </div>
      </div>
    </header>
  )
}
