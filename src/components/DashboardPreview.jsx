function Card({ children, className = '' }) {
  return (
    <div className={`rounded-xl border border-cyan-400/10 bg-[#131B27]/60 p-4 shadow-[0_0_24px_rgba(0,230,255,0.06)] backdrop-blur ${className}`}>
      {children}
    </div>
  )
}

export default function DashboardPreview() {
  return (
    <section className="relative w-full bg-[#0a0f17] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_80%_0%,rgba(0,230,255,0.1),transparent)]" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-12">
        <div className="md:col-span-9">
          <Card className="h-[360px]">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-cyan-50/90">BTC/USDT</h3>
              <div className="text-sm text-cyan-100/60">24h +2.3%</div>
            </div>
            <div className="h-[280px] w-full rounded-lg bg-gradient-to-b from-white/5 to-white/0">
              <svg viewBox="0 0 400 120" className="h-full w-full">
                <defs>
                  <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#00e6ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00e6ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 90 C 60 110, 80 20, 120 50 S 200 110, 260 60 S 340 30, 400 80" fill="url(#grad)" stroke="none" />
                <path d="M0 90 C 60 110, 80 20, 120 50 S 200 110, 260 60 S 340 30, 400 80" fill="none" stroke="#00e6ff" strokeWidth="2" opacity="0.7" />
              </svg>
            </div>
          </Card>
        </div>
        <div className="md:col-span-3 grid gap-6">
          <Card>
            <div className="text-sm text-cyan-100/60">Gesamtkapital</div>
            <div className="mt-1 text-2xl text-[#e8f0fb]">€ 124,530.12</div>
            <div className="mt-2 inline-flex items-center gap-2 rounded-md bg-emerald-500/10 px-2 py-1 text-sm text-[#1dd1a1]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1dd1a1]" /> +3.8%
            </div>
          </Card>
          <Card>
            <div className="text-sm text-cyan-100/60">Risiko</div>
            <div className="mt-2 h-3 w-full rounded-full bg-white/5">
              <div className="h-3 w-2/5 rounded-full bg-[#ff6b6b]" />
            </div>
          </Card>
        </div>
        <div className="md:col-span-4">
          <Card>
            <h4 className="mb-3 text-cyan-50/90">Portfolio-Übersicht</h4>
            <div className="flex items-center gap-4">
              <div className="relative h-28 w-28">
                <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                  <circle cx="18" cy="18" r="16" stroke="#1f2a3a" strokeWidth="4" fill="none" />
                  <circle cx="18" cy="18" r="16" stroke="#00e6ff" strokeWidth="4" strokeDasharray="100 100" strokeDashoffset="35" fill="none" />
                  <circle cx="18" cy="18" r="16" stroke="#1dd1a1" strokeWidth="4" strokeDasharray="100 100" strokeDashoffset="70" fill="none" />
                </svg>
              </div>
              <div className="grid gap-2 text-sm text-cyan-100/70">
                <div className="flex items-center justify-between gap-6">
                  <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#00e6ff]"/> BTC</span>
                  <span>45%</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#1dd1a1]"/> ETH</span>
                  <span>30%</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-200"/> ALT</span>
                  <span>25%</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="md:col-span-4">
          <Card>
            <h4 className="mb-3 text-cyan-50/90">Letzte Trades</h4>
            <div className="grid gap-3 text-sm">
              {['Kauf BTC', 'Verkauf ETH', 'Kauf SOL'].map((t,i)=> (
                <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-cyan-100/80">
                  <span>{t}</span>
                  <span className={`${i===1?'text-[#ff6b6b]':'text-[#1dd1a1]'}`}>{i===1?'-€ 420':'€ '+(200*(i+1))}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className="md:col-span-4">
          <Card>
            <h4 className="mb-3 text-cyan-50/90">Top-Mover / Market Summary</h4>
            <div className="grid gap-3 text-sm text-cyan-100/80">
              {[
                { s:'SOL', c:'+6.2%', p:'#1dd1a1' },
                { s:'AVAX', c:'-3.1%', p:'#ff6b6b' },
                { s:'XRP', c:'+1.8%', p:'#1dd1a1' },
              ].map((m,i)=> (
                <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                  <span>{m.s}</span>
                  <span style={{color:m.p}}>{m.c}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
