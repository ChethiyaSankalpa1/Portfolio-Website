import { useState } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from './BrandIcons.jsx';
import { PROJECTS, PROJECT_CATEGORIES } from '../data.js';

function ProjectCard({ project }) {
  return (
    <div className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group h-full border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300">
      <div>
        {/* Top bar with icon and category badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:border-indigo-400/50 group-hover:text-indigo-300 transition-all duration-300 shadow-sm">
            <Code2 size={20} />
          </div>
          <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] sm:text-xs font-semibold text-indigo-300 group-hover:border-indigo-500/30 transition-colors">
            {project.category}
          </span>
        </div>

        {/* Project title */}
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-200 transition-colors tracking-tight mb-2.5">
          {project.title}
        </h3>

        {/* Project description */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal mb-4">
          {project.description}
        </p>

        {/* Key implementation highlights */}
        <div className="bg-white/[0.02] p-3.5 rounded-xl border border-white/[0.04] mb-4">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Highlights</p>
          <ul className="flex flex-col gap-1.5">
            {project.highlights.map(h => (
              <li key={h} className="flex items-center gap-2 text-xs text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-1 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-[11px] sm:text-xs font-semibold text-indigo-300">
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2.5 pt-3.5 border-t border-white/[0.06]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-slate-200 hover:text-white hover:bg-white/[0.08] hover:border-white/20 text-xs font-semibold transition-all duration-200 flex-1 active:scale-95 shadow-sm"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-xs font-semibold transition-all duration-200 flex-1 active:scale-95 shadow-md shadow-indigo-600/25"
            >
              <ExternalLink size={13} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -left-20 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <span>My Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">Featured Projects</h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Selected projects across web apps, mobile solutions, academic systems, and machine learning.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 sm:mb-16 p-1.5 max-w-xl mx-auto rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
          {PROJECT_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-500">No projects found in this category.</div>
        )}
      </div>
    </section>
  );
}
