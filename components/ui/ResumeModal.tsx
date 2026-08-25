"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, Briefcase, GraduationCap, Award, Code, MapPin, Mail } from "lucide-react";
import { personalDetails, experienceData, certificationsData, skillCategories } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Resume Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-4xl glass-card rounded-2xl border border-slate-700/80 p-6 sm:p-10 z-10 shadow-2xl overflow-hidden text-slate-100 max-h-[92vh] flex flex-col justify-between"
        >
          {/* Top Bar Actions */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
              <FileText className="w-5 h-5" /> Interactive Resume Summary
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/Gideon_Ufaruna_Resume.pdf"
                download="Gideon_Ufaruna_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
              >
                <Download className="w-4 h-4" /> Download PDF
              </a>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="overflow-y-auto pr-2 my-4 space-y-8 text-slate-300 text-sm">
            {/* Header / Bio */}
            <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800">
              <h1 className="text-2xl font-bold text-white mb-1">{personalDetails.name}</h1>
              <p className="text-cyan-400 font-medium text-base mb-3">{personalDetails.roleTitle}</p>
              <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-4">
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-slate-500" /> {personalDetails.location}</span>
                <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-slate-500" /> {personalDetails.email}</span>
                <span className="flex items-center gap-1.5"><GraduationCap className="w-3.5 h-3.5 text-slate-500" /> {personalDetails.institution}</span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{personalDetails.bio}</p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2 text-cyan-400">
                <GraduationCap className="w-4 h-4" /> Education
              </h2>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="font-bold text-slate-100">B.Eng. Computer Engineering</h3>
                    <p className="text-xs text-slate-400">{personalDetails.institution}</p>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded">2021 – Present</span>
                </div>
              </div>
            </div>

            {/* Work & Track Experience */}
            <div>
              <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2 text-indigo-400">
                <Briefcase className="w-4 h-4" /> Experience & Internships
              </h2>
              <div className="space-y-3">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-1.5">
                      <div>
                        <h3 className="font-semibold text-white">{exp.role}</h3>
                        <p className="text-xs text-cyan-400">{exp.organization} • {exp.location}</p>
                      </div>
                      <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">{exp.period}</span>
                    </div>
                    <p className="text-xs text-slate-300 mb-2">{exp.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-400">
                      {exp.bulletPoints.map((pt, idx) => (
                        <li key={idx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2 text-purple-400">
                <Award className="w-4 h-4" /> Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certificationsData.map((cert) => (
                  <div key={cert.id} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    <h3 className="font-semibold text-slate-200 text-xs">{cert.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{cert.issuer} • {cert.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Summary */}
            <div>
              <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2 text-cyan-400">
                <Code className="w-4 h-4" /> Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    <h3 className="text-xs font-bold text-slate-300 mb-2">{cat.title}</h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {cat.skills.map((s) => s.name).join(" • ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-slate-800 flex justify-end shrink-0">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-colors"
            >
              Close Preview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
