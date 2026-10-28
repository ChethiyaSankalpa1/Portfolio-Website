import { EDUCATION, EXPERIENCE } from '../data.js';
import { Briefcase } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -right-20 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-violet-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <span>My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">Education & Experience</h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Academic qualifications and professional industry experience from my journey so far.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-white/[0.06]">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-lg shadow-sm">
                🎓
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Academic Qualifications
              </h3>
            </div>

            <div className="relative flex flex-col gap-0">
              {/* Vertical glowing timeline line */}
              <div className="absolute left-4 top-2 bottom-6 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500/40 to-transparent shadow-sm" />

              {EDUCATION.map((item, i) => (
                <div key={i} className="relative pl-12 pb-7 group">
                  {/* Timeline icon dot */}
                  <div className={`absolute left-0 top-1 w-8 h-8 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-sm shadow-md shadow-indigo-500/20 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 z-10`}>
                    {item.icon}
                  </div>
                  {/* Card */}
                  <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/[0.08] hover:border-indigo-400/40">
                    <span className="inline-block text-[11px] font-bold text-indigo-300 mb-1 uppercase tracking-wider bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                      {item.year}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1 leading-snug group-hover:text-indigo-200 transition-colors">
                      {item.degree}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 font-normal">
                      {item.institution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-white/[0.06]">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shadow-sm">
                <Briefcase size={18} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Professional Experience
              </h3>
            </div>

            <div className="flex flex-col gap-4 sm:gap-5">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className={`glass-card rounded-2xl p-5 sm:p-6 bg-gradient-to-br ${exp.color} border border-white/[0.08] relative overflow-hidden group hover:border-cyan-400/40`}>
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">{exp.title}</h4>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${exp.badge} shadow-sm`}>{exp.duration}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-cyan-300 mb-2">{exp.company}</p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{exp.desc}</p>
                </div>
              ))}
            </div>

            {/* Extracurriculars card */}
            <div className="mt-7 glass-card rounded-2xl p-5 sm:p-6 border border-white/[0.08]">
              <h4 className="text-xs sm:text-sm font-bold text-white mb-3.5 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span>Extracurricular Activities</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  '🏛️ NIBM IT Society Member',
                  '🌱 STEMUP Foundation Volunteer',
                  '⭐ School Prefect Board Member',
                  '♟️ School Chess Team Member',
                ].map(a => (
                  <li key={a} className="text-xs sm:text-sm text-slate-300 flex items-center gap-2 bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.04]">
                    <span className="text-base">{a.slice(0, 2)}</span>
                    <span>{a.slice(3)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
