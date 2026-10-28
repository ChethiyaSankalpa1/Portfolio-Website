import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx';
import { NAV_LINKS } from '../data.js';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#040611] pb-16 sm:pb-12 pt-4">
      {/* Top subtle highlight gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Logo & bio */}
          <div>
            <p className="text-base sm:text-lg font-bold flex items-center justify-center md:justify-start gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400" />
              <span className="text-white">Chethiya</span>
              <span className="text-gradient ml-1">Sankalpa</span>
            </p>
            <p className="text-xs text-slate-500 mt-1 font-normal">Software Engineering Graduand &bull; Panwila, Sri Lanka</p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap gap-x-5 sm:gap-x-7 gap-y-2 justify-center">
            {NAV_LINKS.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3 justify-center">
            {[
              { href: 'https://github.com/ChethiyaSankalpa1', Icon: GithubIcon, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/chethiya-sankalapa-ba3a87316/', Icon: LinkedinIcon, label: 'LinkedIn' },
              { href: 'mailto:chethiyasankalpa456@gmail.com', Icon: Mail, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                title={label}
                aria-label={label}
                className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500/15 hover:border-indigo-500/40 transition-all duration-200 hover:-translate-y-0.5 shadow-sm active:scale-95"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.05] text-center">
          <p className="text-[11px] sm:text-xs text-slate-500 flex items-center justify-center gap-1.5 flex-wrap">
            <span>&copy; 2026 Chethiya Sankalpa. Built with</span>
            <Heart size={12} className="text-rose-400 fill-rose-400 inline" />
            <span>using React, Vite & Tailwind CSS. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
