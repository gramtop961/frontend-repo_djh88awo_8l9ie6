function Stat({ label, value, badge, positive=true }){
  return (
    <div className="rounded-xl border border-cyan-400/10 bg-[#131B27]/60 p-4 backdrop-blur">
      <div className="text-sm text-cyan-100/60">{label}</div>
      <div className="mt-1 text-2xl text-[#e8f0fb]">{value}</div>
      {badge && (
        <div className={`mt-2 inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm ${positive? 'bg-emerald-500/10 text-[#1dd1a1]':'bg-red-500/10 text-[#ff6b6b]'}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${positive? 'bg-[#1dd1a1]':'bg-[#ff6b6b]'}`} /> {badge}
        </div>
      )}
    </div>
  )
}

export default function Portfolio(){
  const items = [
    { s:'BTC', a:'1.24', v:'€ 77,450', g:'+3.4%', pos:true },
    { s:'ETH', a:'12.8', v:'€ 39,936', g:'-1.2%', pos:false },
    { s:'SOL', a:'210', v:'€ 29,820', g:'+6.2%', pos:true },
  ]
  return (
    <section className="w-full bg-[#0a0f17] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="mb-4 text-xl text-cyan-50/90">Portfolio</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Stat label="Gesamtkapital" value="€ 124,530.12" badge="+3.8%" positive />
          <Stat label="Investiert" value="€ 98,230.00" />
          <Stat label="Verfügbar" value="€ 26,300.12" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-cyan-400/10 bg-[#131B27]/60 p-4 backdrop-blur">
            <div className="text-sm text-cyan-100/60">Allocation</div>
            <div className="mt-3 h-44 w-full">
              <svg viewBox="0 0 36 36" className="h-full w-full mx-auto -rotate-90">
                <circle cx="18" cy="18" r="16" stroke="#1f2a3a" strokeWidth="4" fill="none" />
                <circle cx="18" cy="18" r="16" stroke="#00e6ff" strokeWidth="4" strokeDasharray="75 100" fill="none" />
                <circle cx="18" cy="18" r="16" stroke="#1dd1a1" strokeWidth="4" strokeDasharray="45 100" strokeDashoffset="75" fill="none" />
                <circle cx="18" cy="18" r="16" stroke="#a5f3fc" strokeWidth="4" strokeDasharray="25 100" strokeDashoffset="120" fill="none" />
              </svg>
            </div>
          </div>
          <div className="md:col-span-2 rounded-xl border border-cyan-400/10 bg-[#131B27]/60 p-4 backdrop-blur">
            <div className="text-sm text-cyan-100/60">Eigene Coins</div>
            <div className="mt-3 divide-y divide-white/5 text-cyan-100/80">
              {items.map((it,i)=> (
                <div key={i} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-white/5" />
                    <div>
                      <div className="font-medium text-[#e8f0fb]">{it.s}</div>
                      <div className="text-xs text-cyan-100/60">{it.a} • {it.v}</div>
                    </div>
                  </div>
                  <div className={`text-sm ${it.pos?'text-[#1dd1a1]':'text-[#ff6b6b]'}`}>{it.g}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
