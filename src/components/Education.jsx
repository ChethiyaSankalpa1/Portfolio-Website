import { EDUCATION, EXPERIENCE } from '../data.js';
import { Briefcase } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="relative py-16 sm:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-violet-500/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-2 sm:mb-3">My Journey</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4">Education & Experience</h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-xl mx-auto">
            Academic qualifications and professional industry experience from my journey so far.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14">
          {/* Education Timeline */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-sm sm:text-base">🎓</span>
              <span>Academic Qualifications</span>
            </h3>
            <div className="relative flex flex-col gap-0">
              {/* Vertical line */}
              <div className="absolute left-3.5 sm:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-cyan-500/20 to-transparent" />

              {EDUCATION.map((item, i) => (
                <div key={i} className="relative pl-10 sm:pl-12 pb-6 sm:pb-8 group">
                  {/* Timeline icon dot */}
                  <div className={`absolute left-0 top-1 w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-xs sm:text-sm shadow-lg flex-shrink-0 transition-transform duration-200 group-hover:scale-110`}>
                    {item.icon}
                  </div>
                  {/* Card */}
                  <div className="glass-card rounded-xl p-3.5 sm:p-4">
                    <p className="text-[11px] sm:text-xs font-semibold text-indigo-400 mb-1 uppercase tracking-wide">{item.year}</p>
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-1 leading-snug">{item.degree}</h4>
                    <p className="text-[11px] sm:text-xs text-slate-400">{item.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                <Briefcase size={16} className="text-cyan-400" />
              </span>
              <span>Professional Experience</span>
            </h3>
            <div className="flex flex-col gap-4 sm:gap-5">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className={`glass-card rounded-xl p-4 sm:p-5 bg-gradient-to-br ${exp.color} border relative overflow-hidden group`}>
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <h4 className="text-xs sm:text-sm font-bold text-white">{exp.title}</h4>
                    <span className={`text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border ${exp.badge}`}>{exp.duration}</span>
                  </div>
                  <p className="text-xs font-semibold text-cyan-400 mb-1.5 sm:mb-2">{exp.company}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>

            {/* Extracurriculars card */}
            <div className="mt-5 sm:mt-6 glass-card rounded-xl p-4 sm:p-5">
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-3">Extracurricular Activities</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  '🏛️ NIBM IT Society Member',
                  '🌱 STEMUP Foundation Volunteer',
                  '⭐ School Prefect Board Member',
                  '♟️ School Chess Team Member',
                ].map(a => (
                  <li key={a} className="text-xs text-slate-400 flex items-center gap-2">
                    <span>{a.slice(0, 2)}</span>
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
