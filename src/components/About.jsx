import { SOFT_SKILLS, LANGUAGES } from '../data.js';

const highlights = [
  { label: 'NIBM Graduate', sub: 'HND in Software Engineering', icon: '🎓' },
  { label: 'IT Support', sub: '6 months at Hostel First Mirissa', icon: '🛠️' },
  { label: 'Developer Intern', sub: '6 months at Nova Script', icon: '💻' },
  { label: 'Open to Work', sub: 'Available immediately', icon: '✅' },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-80 sm:w-96 h-80 sm:h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <span>Get to Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">About Me</h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Software Engineering graduand based in Panwila, Sri Lanka with experience in IT support and application development.
          </p>
        </div>

        {/* 4 Highlights Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 sm:mb-10">
          {highlights.map(({ label, sub, icon }) => (
            <div key={label} className="glass-card rounded-2xl p-5 flex items-start gap-3.5 group hover:border-indigo-400/40">
              <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                {icon}
              </div>
              <div>
                <p className="text-sm font-bold text-white group-hover:text-indigo-200 transition-colors">{label}</p>
                <p className="text-xs text-slate-400 mt-1 leading-snug">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: Professional Profile & Languages */}
          <div className="flex flex-col gap-6">
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08] flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                <h3 className="text-base sm:text-lg font-bold text-gradient">Professional Profile</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm font-normal">
                Software Engineering graduand from the National Institute of Business Management (NIBM), with experience in IT support and mobile and web application development. Completed six months of IT Support experience at Hostel First Mirissa and a six-month internship as a Mobile & Web Developer at Nova Script. Familiar with programming, application development, software testing, maintenance, and technical problem-solving.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
              <h3 className="text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Languages</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {LANGUAGES.map(({ lang, level, color }) => (
                  <div key={lang} className={`flex items-center justify-between px-4 py-3 rounded-xl border text-xs font-semibold ${color} transition-all`}>
                    <span>{lang}</span>
                    <span className="text-[11px] font-normal opacity-80">{level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Current Focus Areas & Soft Skills */}
          <div className="flex flex-col gap-6">
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08] flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <h3 className="text-base sm:text-lg font-bold text-gradient-emerald">Current Focus Areas</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  'Full-stack Web Development (React.js, Node.js, Tailwind CSS)',
                  'Mobile Application Development (Flutter & Android Studio)',
                  'Database Architecture & Operations (MySQL, MongoDB)',
                  'Machine Learning & Data Exploration with Python',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-xs sm:text-sm text-slate-300 bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.04]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
              <h3 className="text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-400" />
                <span>Soft Skills</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {SOFT_SKILLS.map(({ label, icon }) => (
                  <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/25 text-[11px] sm:text-xs font-semibold text-indigo-300 hover:border-indigo-400/50 hover:bg-indigo-500/20 transition-all">
                    <span>{icon}</span>
                    <span>{label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
