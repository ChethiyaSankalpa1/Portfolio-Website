import { Mail, Download, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx';

const BASE = import.meta.env.BASE_URL || '/';

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-20 pb-12 sm:pt-24 sm:pb-16">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-40 -left-40 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-indigo-600/10 rounded-full blur-[90px] sm:blur-[130px]" />
        <div className="absolute top-1/2 -right-48 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-cyan-500/8 rounded-full blur-[90px] sm:blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 w-[260px] sm:w-[500px] h-[200px] sm:h-[400px] bg-violet-600/8 rounded-full blur-[80px] sm:blur-[100px]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
      </div>

      <div className="relative max-w-6xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center gap-10 sm:gap-14 lg:gap-16">
        <div className="flex-1 text-center lg:text-left w-full">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to Opportunities &bull; Panwila, Sri Lanka</span>
          </div>

          <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-3 sm:mb-4 leading-tight tracking-tight">
            <span className="text-white">Chethiya</span>
            <br />
            <span className="text-gradient">Sankalpa</span>
          </h1>

          <p className="text-lg sm:text-2xl font-semibold text-slate-300 mb-3 sm:mb-4">
            Software Engineering Graduand <span className="text-indigo-400">|</span> IT Support
          </p>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Building reliable web apps, responsive mobile experiences, and software systems. Familiar with application development, testing, maintenance, and technical problem-solving.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 justify-center lg:justify-start mb-6 sm:mb-10 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all duration-200 active:scale-95"
            >
              Explore Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-slate-200 font-semibold text-sm transition-all duration-200 active:scale-95 backdrop-blur-sm"
            >
              Contact Me
            </button>
            <a
              href={`${BASE}assets/Chethiya_CV.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-slate-200 font-semibold text-sm transition-all duration-200 active:scale-95 backdrop-blur-sm"
            >
              <Download size={15} />
              Download CV
            </a>
          </div>

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
                className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-indigo-400/50 hover:bg-indigo-500/10 transition-all duration-200 active:scale-95"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0 flex justify-center w-full sm:w-auto">
          <div className="relative">
            <div className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-gradient-to-tr from-indigo-600/30 via-cyan-500/20 to-violet-600/20 blur-xl sm:blur-2xl" />
            <div className="relative glass-card rounded-3xl p-2 sm:p-2.5 shadow-2xl">
              <img
                src={`${BASE}assets/profile-pic.png`}
                alt="Chethiya Sankalpa"
                className="w-56 h-56 xs:w-64 xs:h-64 sm:w-80 sm:h-80 object-cover rounded-2xl"
              />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 glass-panel rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl border border-white/10">
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Experience</p>
                <p className="text-sm sm:text-lg font-bold text-white">1+ Year</p>
              </div>
              <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 glass-panel rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl border border-white/10">
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Projects</p>
                <p className="text-sm sm:text-lg font-bold text-gradient">7+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition group"
        aria-label="Scroll down to about"
      >
        <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce group-hover:text-indigo-400" />
      </button>
    </section>
  );
}
