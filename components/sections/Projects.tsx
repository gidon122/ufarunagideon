"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, ArrowRight, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projectsData, Project } from "@/data/portfolioData";

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Full-Stack", "AI & ML", "Frontend"];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-3.5 py-1 rounded-full">
            03. Portfolio & Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Applications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Real products built with modern web frameworks, cloud backends, and artificial intelligence APIs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card rounded-2xl border border-slate-800 flex flex-col justify-between overflow-hidden group glass-card-hover"
            >
              {/* Card Banner / Code Header Preview */}
              <div className="relative h-44 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950 p-5 flex flex-col justify-between border-b border-slate-800 overflow-hidden">
                {/* Background graphic pattern */}
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/25 transition-colors" />

                {/* Category & Status */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 text-[11px] font-semibold text-cyan-300 bg-slate-900/90 border border-slate-700 rounded-md tracking-wider uppercase font-mono">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[11px] text-amber-300 font-semibold bg-amber-950/80 border border-amber-800/60 px-2 py-0.5 rounded-md">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                {/* Code icon visual */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-cyan-400 group-hover:text-white group-hover:border-cyan-500/40 transition-colors">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-bold font-mono text-slate-500 group-hover:text-cyan-400/80 transition-colors">
                    0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-0.5 transition-all"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-cyan-400 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                        aria-label={`${project.title} Live Demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
