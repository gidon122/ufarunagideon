"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Code2, Sparkles, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-3xl glass-card rounded-2xl border border-slate-700/60 p-6 sm:p-8 z-10 shadow-2xl overflow-hidden text-slate-100 max-h-[90vh] flex flex-col justify-between"
        >
          {/* Header Glow */}
          <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/60 hover:bg-slate-700/80 transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Scrollable Content */}
          <div className="overflow-y-auto pr-2 custom-scrollbar space-y-6">
            {/* Category Pill */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-xs font-semibold tracking-wider text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 rounded-full uppercase">
                {project.category}
              </span>
              {project.featured && (
                <span className="flex items-center gap-1 text-xs text-amber-300 font-medium bg-amber-950/60 border border-amber-800/40 px-2.5 py-0.5 rounded-full">
                  <Sparkles className="w-3 h-3" /> Featured Project
                </span>
              )}
            </div>

            {/* Title & Short Description */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Full Description */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 sm:p-5">
              <h3 className="text-xs uppercase tracking-wider text-cyan-400 font-bold mb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Overview & Architecture
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-400" /> Key Features & Engineering Highlights
                </h3>
                <ul className="grid grid-cols-1 gap-2.5">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2.5">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-mono font-medium text-slate-200 bg-slate-800/80 border border-slate-700 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-6 mt-4 border-t border-slate-800 flex flex-wrap items-center justify-end gap-3 shrink-0">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-colors border border-slate-700"
            >
              <GithubIcon className="w-4 h-4" /> View Code on GitHub
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-cyan-500/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
