export default function Footer(){
  return (
    <footer className="w-full border-t border-cyan-400/10 bg-[#0a0f17] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-cyan-100/70 md:flex-row">
        <div className="text-sm">SimEx v2 Development Preview</div>
        <div className="flex items-center gap-4">
          <a href="#" className="opacity-80 transition hover:opacity-100" aria-label="Twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00e6ff" strokeWidth="1.5"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 7.48v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83"/></svg>
          </a>
          <a href="#" className="opacity-80 transition hover:opacity-100" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00e6ff" strokeWidth="1.5"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.06 1.53 1.06.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.26-4.55-1.11-4.55-4.93a3.86 3.86 0 0 1 1-2.67 3.59 3.59 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.42.1 2.67a3.86 3.86 0 0 1 1 2.67c0 3.83-2.34 4.66-4.57 4.91.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>
          </a>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-[#00e6ff]">Impressum</a>
          <a href="#" className="hover:text-[#00e6ff]">Datenschutz</a>
        </div>
      </div>
    </footer>
  )
}
