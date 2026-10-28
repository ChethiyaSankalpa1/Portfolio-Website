import { SOFT_SKILLS, LANGUAGES } from '../data.js';

const highlights = [
  { label: 'NIBM Graduate', sub: 'HND in Software Engineering', icon: '🎓' },
  { label: 'IT Support', sub: '6 months at Hostel First Mirissa', icon: '🛠️' },
  { label: 'Developer Intern', sub: '6 months at Nova Script', icon: '💻' },
  { label: 'Open to Work', sub: 'Available immediately', icon: '✅' },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/6 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-2 sm:mb-3">Get to Know Me</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4">About Me</h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-xl mx-auto">
            Software Engineering graduand based in Panwila, Sri Lanka with experience in IT support and application development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 items-center">
          {/* Left: About image & highlights */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <div className="relative group">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-600/20 to-cyan-500/10 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />
              <img
                src="./assets/about-pic.png"
                alt="About Chethiya"
                className="relative rounded-2xl w-full max-h-64 sm:max-h-80 object-cover shadow-2xl"
              />
            </div>

            {/* Quick stats highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {highlights.map(({ label, sub, icon }) => (
                <div key={label} className="glass-card rounded-xl p-3.5 sm:p-4 flex items-start gap-3 group">
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-white">{label}</p>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text content */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Bio card */}
            <div className="glass-card rounded-2xl p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gradient mb-2.5 sm:mb-3">Professional Profile</h3>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                Software Engineering graduand from the National Institute of Business Management (NIBM), with experience in IT support and mobile and web application development. Completed six months of IT Support experience at Hostel First Mirissa and a six-month internship as a Mobile & Web Developer at Nova Script. Familiar with programming, application development, software testing, maintenance, and technical problem-solving.
              </p>
            </div>

            {/* Current focus */}
            <div className="glass-card rounded-2xl p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gradient-emerald mb-2.5 sm:mb-3">Current Focus Areas</h3>
              <ul className="flex flex-col gap-2">
                {[
                  'Full-stack Web Development (React.js, Node.js, Tailwind CSS)',
                  'Mobile Application Development (Flutter & Android Studio)',
                  'Database Architecture & Operations (MySQL, MongoDB)',
                  'Machine Learning & Data Exploration with Python',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft skills & languages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-4 sm:p-5">
                <h3 className="text-xs sm:text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">Soft Skills</h3>
                <div className="flex flex-wrap gap-1.5">
                  {SOFT_SKILLS.map(({ label, icon }) => (
                    <span key={label} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-[11px] sm:text-xs font-medium text-indigo-300">
                      <span>{icon}</span>
                      <span>{label}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4 sm:p-5">
                <h3 className="text-xs sm:text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">Languages</h3>
                <div className="flex flex-col gap-2">
                  {LANGUAGES.map(({ lang, level, color }) => (
                    <div key={lang} className={`flex items-center justify-between px-3 py-2 rounded-lg border text-xs font-medium ${color}`}>
                      <span className="font-semibold">{lang}</span>
                      <span className="opacity-80">{level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
