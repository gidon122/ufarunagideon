"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Server, Cpu, Wrench, CheckCircle2, Sparkles } from "lucide-react";
import { skillCategories } from "@/data/portfolioData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categoryIcons: Record<string, any> = {
    Frontend: Code,
    Backend: Server,
    "AI & Data": Cpu,
    "Tools & Infrastructure": Wrench,
  };

  const tabs = ["All", ...skillCategories.map((cat) => cat.title)];

  const displayedCategories =
    activeTab === "All"
      ? skillCategories
      : skillCategories.filter((cat) => cat.title === activeTab);

  return (
    <section id="skills" className="py-14 sm:py-20 lg:py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2.5 sm:space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-3.5 py-1 rounded-full">
            02. Tech Stack
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Tools & Technologies I Work With
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm lg:text-base">
            Continuously expanding technical proficiency across web development, backend engineering, cloud tools, and artificial intelligence.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all min-h-[38px] sm:min-h-0 flex items-center justify-center ${
                activeTab === tab
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {displayedCategories.map((category, idx) => {
            const IconComponent = categoryIcons[category.title] || Code;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-4 sm:p-6 border border-slate-800 space-y-4 sm:space-y-5 glass-card-hover"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 pb-3 border-b border-slate-800/80">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white truncate">{category.title}</h3>
                    <p className="text-xs text-slate-400">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative p-2.5 sm:p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all flex flex-col justify-between min-h-[58px] sm:min-h-[64px]"
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[11px] sm:text-xs font-semibold text-slate-200 group-hover:text-white transition-colors truncate">
                          {skill.name}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 mt-1 sm:mt-2">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
