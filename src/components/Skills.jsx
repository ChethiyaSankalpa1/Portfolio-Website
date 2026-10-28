import { SKILLS, SKILL_COLORS } from '../data.js';

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-10 right-1/4 w-[400px] sm:w-[600px] h-[350px] sm:h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <span>What I Work With</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">Technical Skills</h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Practical, progress-free skill badges grouped by technical domain — based on real project experience.
          </p>
        </div>

        {/* Skill groups grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {Object.entries(SKILLS).map(([group, items]) => {
            const colorClass = SKILL_COLORS[group];
            return (
              <div
                key={group}
                className={`glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08] flex flex-col justify-between group hover:border-indigo-500/40`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/[0.06]">
                    <h3 className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${colorClass.split(' ').find(c => c.startsWith('text-'))}`}>
                      {group}
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-indigo-400 transition-colors" />
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {items.map(skill => (
                      <span
                        key={skill}
                        className={`inline-flex items-center px-3 py-1.5 rounded-lg border text-xs font-semibold bg-white/[0.03] backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-white/[0.07] ${colorClass.split(' ').filter(c => c.startsWith('border-') || c.startsWith('text-')).join(' ')}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick stat counters */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {[
            { value: '12+', label: 'Selected Projects' },
            { value: '1+', label: 'Year Industry Exposure' },
            { value: '6+', label: 'Programming Languages' },
            { value: '2', label: 'Company Internships' },
          ].map(({ value, label }) => (
            <div key={label} className="glass-card rounded-2xl p-5 sm:p-6 text-center group border border-white/[0.08] hover:border-indigo-400/40">
              <p className="text-3xl sm:text-4xl font-extrabold text-gradient mb-1.5 group-hover:scale-110 transition-transform duration-300">{value}</p>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
