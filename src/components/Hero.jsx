import Spline from '@splinetool/react-spline'

export default function Hero({ onViewDashboard, onLogin }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0a0f17]">
      <div className="absolute inset-0 opacity-60">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_600px_at_10%_-20%,rgba(0,230,255,0.18),transparent),radial-gradient(800px_500px_at_90%_10%,rgba(0,230,255,0.12),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(19,27,39,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(19,27,39,0.25)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-24 pt-28 md:pt-40">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#00e6ff] shadow-[0_0_12px_#00e6ff]" />
          <span className="text-sm text-cyan-100/80">Futuristic FinTech UI</span>
        </div>

        <h1 className="font-orbitron text-4xl leading-tight text-[#e8f0fb] drop-shadow-[0_0_20px_rgba(0,230,255,0.15)] md:text-6xl">
          SimEx Trading Simulator
        </h1>
        <p className="max-w-2xl text-lg text-cyan-50/70 md:text-xl">
          Echtzeit-Simulation. KI-gestützte Märkte. Spieler-Wirtschaft.
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-4">
          <button onClick={onViewDashboard} className="group relative overflow-hidden rounded-lg bg-[#00e6ff] px-6 py-3 font-medium text-[#0a0f17] transition hover:shadow-[0_0_24px_#00e6ff]">
            <span className="relative z-10">Dashboard ansehen</span>
            <span className="absolute inset-0 translate-y-full bg-white/30 transition-transform duration-300 ease-out group-hover:translate-y-0" />
          </button>
          <button onClick={onLogin} className="rounded-lg border border-cyan-400/40 bg-white/5 px-6 py-3 font-medium text-cyan-100/90 backdrop-blur transition hover:bg-white/10">
            Login
          </button>
        </div>
      </div>
    </section>
  )
}
