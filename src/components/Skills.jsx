import { SKILLS, SKILL_COLORS } from '../data.js';

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-500/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-2 sm:mb-3">What I Work With</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4">Technical Skills</h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-xl mx-auto">
            Practical, progress-free skill badges grouped by technical domain — based on real project experience.
          </p>
        </div>

        {/* Skill groups grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Object.entries(SKILLS).map(([group, items]) => {
            const colorClass = SKILL_COLORS[group];
            return (
              <div
                key={group}
                className={`glass-card rounded-2xl p-5 sm:p-6 bg-gradient-to-br ${colorClass.split(' ').filter(c => c.startsWith('from-') || c.startsWith('to-')).join(' ')} group`}
              >
                <h3 className={`text-xs sm:text-sm font-bold uppercase tracking-wider mb-3.5 sm:mb-4 ${colorClass.split(' ').find(c => c.startsWith('text-'))}`}>
                  {group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span
                      key={skill}
                      className={`inline-flex items-center px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg border text-xs font-semibold bg-black/20 backdrop-blur-sm transition-all duration-200 hover:scale-105 active:scale-95 ${colorClass.split(' ').filter(c => c.startsWith('border-') || c.startsWith('text-')).join(' ')}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick stat counters */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {[
            { value: '7+', label: 'Selected Projects' },
            { value: '1+', label: 'Year Industry Exposure' },
            { value: '6+', label: 'Programming Languages' },
            { value: '2', label: 'Company Internships' },
          ].map(({ value, label }) => (
            <div key={label} className="glass-card rounded-2xl p-4 sm:p-5 text-center group">
              <p className="text-2xl sm:text-3xl font-extrabold text-gradient mb-1 group-hover:scale-110 transition-transform duration-200">{value}</p>
              <p className="text-[11px] sm:text-xs text-slate-400 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
