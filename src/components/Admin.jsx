function StatusCard({ title, status, color }){
  return (
    <div className="rounded-xl border border-cyan-400/10 bg-[#131B27]/60 p-4 text-cyan-100/80 backdrop-blur">
      <div className="text-sm text-cyan-100/60">{title}</div>
      <div className="mt-1 flex items-center gap-2 text-[#e8f0fb]">
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} /> {status}
      </div>
    </div>
  )
}

export default function Admin(){
  const users = [
    { name:'Alice', role:'Trader', sub:'Pro' },
    { name:'Bob', role:'Analyst', sub:'Free' },
    { name:'Charlie', role:'Admin', sub:'Enterprise' },
  ]
  const logs = [
    '12:01 Connected to market stream',
    '12:03 Strategy backtest triggered',
    '12:05 Cache warmed',
    '12:10 Healthcheck OK'
  ]
  return (
    <section className="w-full bg-[#0a0f17] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="mb-4 text-xl text-cyan-50/90">Admin Panel</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <StatusCard title="API" status="Healthy" color="#1dd1a1" />
          <StatusCard title="Worker" status="Idle" color="#00e6ff" />
          <StatusCard title="DB" status="Degraded" color="#ff6b6b" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-cyan-400/10 bg-[#131B27]/60 p-4 backdrop-blur">
            <div className="mb-2 text-sm text-cyan-100/60">User-Liste</div>
            <div className="divide-y divide-white/5 text-cyan-100/80">
              {users.map((u,i)=> (
                <div key={i} className="flex items-center justify-between py-2">
                  <div>
                    <div className="text-[#e8f0fb]">{u.name}</div>
                    <div className="text-xs text-cyan-100/60">{u.role}</div>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <span className="rounded-md bg-white/5 px-2 py-1 text-xs">{u.sub}</span>
                    <button className="rounded-md border border-cyan-400/30 px-2 py-1 text-xs text-cyan-100/80 hover:bg-white/5">Enable</button>
                    <button className="rounded-md border border-red-400/30 px-2 py-1 text-xs text-red-200/80 hover:bg-red-500/10">Disable</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-cyan-400/10 bg-[#131B27]/60 p-4 backdrop-blur">
            <div className="mb-2 text-sm text-cyan-100/60">Systemstatus</div>
            <div className="grid gap-3 text-sm text-cyan-100/80">
              <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2"><span>Latency</span><span>28ms</span></div>
              <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2"><span>Uptime</span><span>99.96%</span></div>
              <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2"><span>Jobs</span><span>3 queued</span></div>
            </div>
          </div>

          <div className="rounded-xl border border-cyan-400/10 bg-[#131B27]/60 p-4 backdrop-blur">
            <div className="mb-2 text-sm text-cyan-100/60">Log-Viewer</div>
            <div className="h-44 overflow-auto rounded-lg bg-black/30 p-3 font-mono text-xs text-cyan-100/70">
              {logs.map((l,i)=> <div key={i} className="opacity-90">{l}</div>)}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-cyan-400/10 bg-[#131B27]/60 p-4 backdrop-blur">
          <div className="mb-2 text-sm text-cyan-100/60">Abonnements</div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {['Free','Pro','Business','Enterprise'].map((p,i)=> (
              <div key={i} className="rounded-lg bg-white/5 p-4 text-cyan-100/80">
                <div className="text-[#e8f0fb]">{p}</div>
                <div className="mt-2 flex items-center gap-2">
                  <button className="rounded-md border border-cyan-400/30 px-2 py-1 text-xs text-cyan-100/80 hover:bg-white/5">Enable</button>
                  <button className="rounded-md border border-red-400/30 px-2 py-1 text-xs text-red-200/80 hover:bg-red-500/10">Disable</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
