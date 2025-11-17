function Trend({ up=true }){
  const path = up ? 'M0 20 L20 14 L40 16 L60 8 L80 12 L100 4' : 'M0 4 L20 10 L40 8 L60 16 L80 12 L100 20'
  const stroke = up ? '#1dd1a1' : '#ff6b6b'
  return (
    <svg viewBox="0 0 100 24" className="h-6 w-24">
      <path d={path} fill="none" stroke={stroke} strokeWidth="2" />
    </svg>
  )
}

export default function Markets(){
  const rows = [
    { coin:'BTC', price:'€ 62,430', ch:'+2.3%', up:true, vol:'€ 12.4B' },
    { coin:'ETH', price:'€ 3,120', ch:'-1.1%', up:false, vol:'€ 6.8B' },
    { coin:'SOL', price:'€ 142', ch:'+6.2%', up:true, vol:'€ 1.2B' },
    { coin:'AVAX', price:'€ 38', ch:'-3.1%', up:false, vol:'€ 0.9B' },
  ]
  return (
    <section className="w-full bg-[#0a0f17] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="mb-4 text-xl text-cyan-50/90">Marktübersicht</h3>
        <div className="overflow-hidden rounded-xl border border-cyan-400/10 bg-[#131B27]/60 backdrop-blur">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-cyan-100/60">
              <tr>
                <th className="px-4 py-3">Coin</th>
                <th className="px-4 py-3">Preis</th>
                <th className="px-4 py-3">24h Change</th>
                <th className="px-4 py-3">Volumen</th>
                <th className="px-4 py-3">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {rows.map((r,i)=> (
                <tr key={i} className="text-cyan-100/80">
                  <td className="px-4 py-3">{r.coin}</td>
                  <td className="px-4 py-3">{r.price}</td>
                  <td className={`px-4 py-3 ${r.up?'text-[#1dd1a1]':'text-[#ff6b6b]'}`}>{r.ch}</td>
                  <td className="px-4 py-3">{r.vol}</td>
                  <td className="px-4 py-3"><Trend up={r.up} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
