import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { NAV_LINKS } from '../data.js';

const BASE = import.meta.env.BASE_URL || '/';

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive]       = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = NAV_LINKS.map(l => l.toLowerCase());
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 130) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Desktop & Mobile top bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-nav shadow-2xl shadow-black/60 border-b border-white/[0.08]' 
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">

          {/* Logo */}
          <a
            href="#"
            className="font-bold text-base sm:text-lg tracking-tight select-none flex-shrink-0 group flex items-center gap-1.5"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 group-hover:scale-125 transition-transform duration-300 shadow-sm shadow-indigo-500/50" />
            <span className="text-white group-hover:text-slate-100 transition-colors">Chethiya</span>
            <span className="text-gradient font-extrabold ml-0.5">Sankalpa</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
            {NAV_LINKS.map(link => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    active === link.toLowerCase()
                      ? 'text-white bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-md shadow-indigo-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            {/* CV button - desktop */}
            <a
              href={`${BASE}assets/Chethiya_CV.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 flex-shrink-0 active:scale-95"
            >
              <Download size={15} />
              <span className="hidden md:inline">Download CV</span>
              <span className="md:hidden">CV</span>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] transition active:scale-95"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Slide-in panel */}
        <div className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-[#070b1a]/95 backdrop-blur-2xl border-l border-white/[0.08] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 h-16 sm:h-20 border-b border-white/[0.06]">
            <span className="font-bold text-gradient text-xs tracking-widest uppercase">Navigation</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition"
            >
              <X size={18} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-1.5">
            {NAV_LINKS.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active === link.toLowerCase()
                    ? 'text-white bg-indigo-600/25 border border-indigo-500/40 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link}
              </button>
            ))}

            {/* CV download in drawer */}
            <a
              href={`${BASE}assets/Chethiya_CV.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-4 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-sm font-semibold transition shadow-lg shadow-indigo-600/20 active:scale-95"
              onClick={() => setMobileOpen(false)}
            >
              <Download size={15} />
              Download CV
            </a>
          </nav>

          {/* Footer of drawer */}
          <div className="p-4 border-t border-white/[0.06] text-center">
            <p className="text-xs text-slate-500 font-mono">chethiyasankalpa456@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
