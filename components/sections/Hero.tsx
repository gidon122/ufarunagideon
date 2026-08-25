"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles, Code2, Terminal, Cpu, Database, Brain } from "lucide-react";
import { personalDetails } from "@/data/portfolioData";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-cyan-300">
                {personalDetails.status}
              </span>
            </motion.div>

            {/* Greeting & Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="gradient-text">Gideon</span> 👋
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 tracking-tight">
                {personalDetails.roleTitle}
              </h2>
            </motion.div>

            {/* Sub-tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed font-normal"
            >
              {personalDetails.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary CTA 1 */}
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Primary CTA 2 */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md"
              >
                <span>Let's Connect</span>
              </a>

              {/* Secondary CTA: Download Resume */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 hover:underline transition-all"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View & Download Resume</span>
              </button>
            </motion.div>

            {/* Quick Tech Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-3 text-xs text-slate-400"
            >
              <span className="font-mono text-slate-500 uppercase tracking-wider text-[11px]">Primary Focus:</span>
              <span className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md text-slate-300 font-mono">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" /> Next.js & React
              </span>
              <span className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md text-slate-300 font-mono">
                <Brain className="w-3.5 h-3.5 text-indigo-400" /> AI & LangChain
              </span>
              <span className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md text-slate-300 font-mono">
                <Cpu className="w-3.5 h-3.5 text-purple-400" /> FUT Minna CompEng
              </span>
            </motion.div>
          </div>

          {/* Right Column: Interactive Developer Profile Terminal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Background glow behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000 animate-pulse-slow" />

            <div className="relative glass-card rounded-2xl border border-slate-700/80 overflow-hidden shadow-2xl">
              {/* Terminal Window Header */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 font-mono text-xs">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>gideon.ts</span>
                </div>
                <div className="w-10" />
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs sm:text-sm space-y-3 text-slate-300 overflow-x-auto leading-relaxed">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">developer</span>{" "}
                  <span className="text-slate-400">=</span> {"{"}
                </div>

                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-emerald-300">"Ufaruna Gideon"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">institution:</span>{" "}
                    <span className="text-emerald-300">"FUT Minna"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">degree:</span>{" "}
                    <span className="text-emerald-300">"Computer Engineering"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">focus:</span> [
                    <span className="text-amber-300">"Web Development"</span>,{" "}
                    <span className="text-amber-300">"Cloud"</span>,{" "}
                    <span className="text-amber-300">"AI"</span>],
                  </div>
                  <div>
                    <span className="text-slate-400">stack:</span> [
                    <span className="text-cyan-400">"Next.js"</span>,{" "}
                    <span className="text-cyan-400">"TypeScript"</span>,{" "}
                    <span className="text-cyan-400">"Python"</span>,{" "}
                    <span className="text-cyan-400">"MongoDB"</span>],
                  </div>
                  <div>
                    <span className="text-slate-400">passion:</span>{" "}
                    <span className="text-emerald-300">"Turning ideas into real software"</span>
                  </div>
                </div>

                <div>{"};"}</div>

                <div className="pt-2 text-slate-500 flex items-center gap-2">
                  <span className="text-cyan-400">❯</span>
                  <span>gideon.buildSuccessProducts()</span>
                  <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block" />
                </div>
              </div>
            </div>

            {/* Ambient Floating Badges */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 glass-pill p-3 rounded-xl border border-cyan-500/30 shadow-lg items-center gap-3 animate-float">
              <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Full-Stack & AI</p>
                <p className="text-[10px] text-slate-400">Next.js • LangChain • Cloud</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
