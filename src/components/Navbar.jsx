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
      setScrolled(window.scrollY > 50);
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-2xl shadow-black/40' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          <a href="#" className="font-bold text-base sm:text-lg tracking-tight select-none flex-shrink-0"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <span className="text-white">Chethiya</span>
            <span className="text-gradient ml-1">Sankalpa</span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <li key={link}>
                <button onClick={() => scrollTo(link)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active === link.toLowerCase()
                      ? 'text-indigo-400 bg-indigo-500/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}>
                  {link}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href={`${BASE}assets/Chethiya_CV.pdf`} target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-indigo-600/25 flex-shrink-0">
              <Download size={14} />
              <span className="hidden md:inline">Download CV</span>
              <span className="md:hidden">CV</span>
            </a>

            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
              aria-label="Toggle navigation menu">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)} />

        <div className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] glass-nav shadow-2xl flex flex-col transition-transform duration-300 ease-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between px-5 h-16 border-b border-white/5">
            <span className="font-bold text-gradient text-sm tracking-wide">MENU</span>
            <button onClick={() => setMobileOpen(false)} className="p-1.5 rounded-lg text-slate-400 hover:text-white transition">
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-1">
            {NAV_LINKS.map(link => (
              <button key={link} onClick={() => scrollTo(link)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active === link.toLowerCase()
                    ? 'text-indigo-300 bg-indigo-500/15 border border-indigo-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}>
                {link}
              </button>
            ))}

            <a href={`${BASE}assets/Chethiya_CV.pdf`} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-4 px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition"
              onClick={() => setMobileOpen(false)}>
              <Download size={14} />
              Download CV
            </a>
          </nav>

          <div className="p-4 border-t border-white/5">
            <p className="text-xs text-slate-600 text-center">chethiyasankalpa456@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
