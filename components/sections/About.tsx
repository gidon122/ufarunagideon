"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Brain, Cloud, Terminal, CheckCircle } from "lucide-react";
import { personalDetails } from "@/data/portfolioData";

export default function About() {
  const highlights = [
    {
      title: "Computer Engineering",
      subtitle: "Federal University of Technology, Minna (FUT Minna)",
      icon: GraduationCap,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
    },
    {
      title: "Full-Stack Development",
      subtitle: "Next.js, TypeScript, React, Node.js & Modern Web",
      icon: Code2,
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30",
    },
    {
      title: "AI & Machine Learning",
      subtitle: "LLMs, AI Agents, LangChain, MCP & Python",
      icon: Brain,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      title: "Cloud & Backend Development",
      subtitle: "REST APIs, MongoDB, Docker, AWS & Vercel",
      icon: Cloud,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-3.5 py-1 rounded-full">
            01. About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Software with Purpose & Precision
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Combining computer engineering principles with modern software craftsmanship to create impactful digital tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Profile Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="glass-card rounded-2xl p-6 border border-slate-800 relative overflow-hidden space-y-6">
              {/* Profile Avatar Badge */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-[2px] shadow-xl shadow-cyan-500/20 shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-extrabold text-2xl text-white">
                    UG
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{personalDetails.name}</h3>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">{personalDetails.fieldOfStudy}</p>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-500" /> FUT Minna
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs text-slate-300 border-t border-slate-800">
                <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Current Status:</span>
                  <span className="font-semibold text-emerald-400">Undergraduate & Developer</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">University:</span>
                  <span className="font-semibold text-slate-200">FUT Minna</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Primary Language:</span>
                  <span className="font-mono text-cyan-300">TypeScript / Python</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400">Core Goal:</span>
                  <span className="font-semibold text-purple-300">Build AI & Web Solutions</span>
                </div>
              </div>

              {/* Decorative Code Badge */}
              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-400 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>"Solving problems with clean code & continuous learning."</span>
              </div>
            </div>
          </motion.div>

          {/* Narrative & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                I am <strong className="text-white">Ufaruna Gideon</strong>, a Computer Engineering student at the <strong className="text-cyan-300">Federal University of Technology, Minna (FUT Minna)</strong>. I am deeply passionate about software engineering, artificial intelligence, cloud infrastructure, and building useful digital products that deliver real value.
              </p>
              <p>
                My journey centers around turning raw ideas into functional, performant applications. Whether it's crafting responsive frontends with <strong className="text-cyan-400">React & Next.js</strong>, engineering scalable backend APIs with <strong className="text-indigo-400">Node.js & MongoDB</strong>, or building intelligent tools using <strong className="text-purple-400">Python & AI agent frameworks</strong>, I approach every project with focus and engineering rigor.
              </p>
            </div>

            {/* Quick Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl glass-card border ${item.borderColor} space-y-2 glass-card-hover`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${item.bgColor} ${item.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-white text-sm">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-1">
                      {item.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
