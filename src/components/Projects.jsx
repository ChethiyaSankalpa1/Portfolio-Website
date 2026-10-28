import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './BrandIcons.jsx';
import { PROJECTS, PROJECT_CATEGORIES } from '../data.js';

function ProjectCard({ project }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col group h-full">
      {/* Project image */}
      <div className="relative overflow-hidden bg-[#0d1120]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category badge */}
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-[11px] sm:text-xs font-semibold text-indigo-300 border border-indigo-500/30">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5 gap-3">
        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="flex flex-col gap-1 my-1">
          {project.highlights.map(h => (
            <li key={h} className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[11px] sm:text-xs font-medium text-indigo-300">
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 pt-2 border-t border-white/5 mt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 text-xs font-medium transition-all duration-200 flex-1 active:scale-95"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-indigo-600/80 hover:bg-indigo-600 text-white text-xs font-medium transition-all duration-200 flex-1 active:scale-95"
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
    <section id="projects" className="relative py-16 sm:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="absolute bottom-1/4 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-indigo-600/6 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-2 sm:mb-3">My Work</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4">Featured Projects</h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-xl mx-auto">
            Selected projects across web apps, mobile solutions, academic systems, and machine learning.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-8 sm:mb-12">
          {PROJECT_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border active:scale-95 ${
                activeFilter === cat
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                  : 'border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-500">No projects found in this category.</div>
        )}
      </div>
    </section>
  );
}
