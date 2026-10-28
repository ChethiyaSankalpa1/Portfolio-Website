import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx';
import { NAV_LINKS } from '../data.js';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#070913] pb-16 sm:pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Logo & bio */}
          <div>
            <p className="text-base sm:text-lg font-bold">
              <span className="text-white">Chethiya</span>
              <span className="text-gradient ml-1">Sankalpa</span>
            </p>
            <p className="text-xs text-slate-500 mt-1">Software Engineering Graduand &bull; Panwila, Sri Lanka</p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 justify-center">
            {NAV_LINKS.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-xs sm:text-sm text-slate-400 hover:text-white transition"
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
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500/15 hover:border-indigo-500/30 transition-all duration-200 active:scale-95"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
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
