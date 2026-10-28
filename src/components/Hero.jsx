import { Mail, Download, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx';

const BASE = import.meta.env.BASE_URL || '/';

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[95vh] sm:min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-24 pb-14 sm:pt-28 sm:pb-20">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[380px] sm:w-[720px] h-[380px] sm:h-[720px] bg-indigo-600/15 rounded-full blur-[100px] sm:blur-[140px] animate-float-orb" />
        <div className="absolute top-1/3 -right-40 w-[320px] sm:w-[650px] h-[320px] sm:h-[650px] bg-cyan-500/10 rounded-full blur-[100px] sm:blur-[140px] animate-float-orb-slow" />
        <div className="absolute -bottom-20 left-1/4 w-[280px] sm:w-[520px] h-[220px] sm:h-[420px] bg-violet-600/10 rounded-full blur-[90px] sm:blur-[120px]" />
        
        {/* Subtle geometric dot grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#312e81_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      </div>

      <div className="relative max-w-6xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center gap-12 sm:gap-14 lg:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left w-full">
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 mb-5 sm:mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium shadow-sm shadow-emerald-500/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>Open to Opportunities &bull; Panwila, Sri Lanka</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-3 sm:mb-4 leading-[1.08] tracking-tight">
            <span className="text-white drop-shadow-sm">Chethiya</span>
            <br />
            <span className="text-gradient">Sankalpa</span>
          </h1>

          {/* Role */}
          <p className="text-lg sm:text-2xl font-semibold text-slate-200 mb-3 sm:mb-4 flex items-center justify-center lg:justify-start gap-2">
            <span>Software Engineering Graduand</span>
            <span className="text-indigo-400 font-normal">|</span>
            <span className="text-cyan-300">IT Support</span>
          </p>

          <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-7 sm:mb-9 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
            Building reliable web apps, responsive mobile experiences, and software systems. Familiar with application development, testing, maintenance, and technical problem-solving.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-3.5 justify-center lg:justify-start mb-8 sm:mb-10 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              Explore Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-7 py-3 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] hover:border-white/25 text-slate-200 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-95 backdrop-blur-md"
            >
              Contact Me
            </button>
            <a
              href={`${BASE}assets/Chethiya_CV.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 hover:border-indigo-500/50 text-indigo-200 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-95 backdrop-blur-md shadow-sm shadow-indigo-500/10"
            >
              <Download size={15} />
              Download CV
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            {[
              { href: 'https://github.com/ChethiyaSankalpa1', label: 'GitHub', Icon: GithubIcon },
              { href: 'https://www.linkedin.com/in/chethiya-sankalapa-ba3a87316/', label: 'LinkedIn', Icon: LinkedinIcon },
              { href: 'mailto:chethiyasankalpa456@gmail.com', label: 'Email', Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                title={label}
                aria-label={label}
                className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/[0.09] bg-white/[0.03] text-slate-400 hover:text-white hover:border-indigo-400/50 hover:bg-indigo-500/15 transition-all duration-200 hover:-translate-y-0.5 shadow-sm active:scale-95"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Profile Avatar Card */}
        <div className="flex-shrink-0 flex justify-center w-full sm:w-auto">
          <div className="relative">
            {/* Multi-tier gradient auras */}
            <div className="absolute -inset-4 sm:-inset-6 rounded-[2.5rem] bg-gradient-to-tr from-indigo-600/35 via-cyan-500/25 to-violet-600/30 blur-2xl opacity-80" />
            
            <div className="relative glass-card rounded-3xl p-2.5 sm:p-3 shadow-2xl border border-white/10">
              <img
                src={`${BASE}assets/profile-pic.png`}
                alt="Chethiya Sankalpa"
                className="w-60 h-60 xs:w-68 xs:h-68 sm:w-80 sm:h-80 object-cover object-top rounded-2xl shadow-inner"
              />
              {/* Stat badges */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 glass-panel rounded-2xl px-4 py-2.5 sm:px-4 sm:py-3 shadow-xl border border-white/10 backdrop-blur-xl">
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">Experience</p>
                <p className="text-sm sm:text-lg font-bold text-white">1+ Year</p>
              </div>
              <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 glass-panel rounded-2xl px-4 py-2.5 sm:px-4 sm:py-3 shadow-xl border border-white/10 backdrop-blur-xl">
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">Projects</p>
                <p className="text-sm sm:text-lg font-bold text-gradient">12+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down arrow scroll */}
      <button
        onClick={() => scrollToSection('about')}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-slate-500 hover:text-indigo-400 transition-colors group cursor-pointer"
        aria-label="Scroll down to about"
      >
        <span className="text-[10px] font-medium tracking-widest uppercase text-slate-400 group-hover:text-indigo-300 transition-colors">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
