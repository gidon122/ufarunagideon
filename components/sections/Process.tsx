"use client";

import { motion } from "framer-motion";
import { Search, Compass, Code, CheckCircle, Rocket } from "lucide-react";
import { processSteps } from "@/data/portfolioData";

export default function Process() {
  const stepIcons = [Search, Compass, Code, CheckCircle, Rocket];

  return (
    <section id="process" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-3.5 py-1 rounded-full">
            07. Engineering Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Work
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            A disciplined 5-step development methodology ensuring reliable, scalable, and beautifully designed software.
          </p>
        </div>

        {/* 5-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {processSteps.map((stepItem, idx) => {
            const IconComponent = stepIcons[idx] || Search;

            return (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-5 border border-slate-800 flex flex-col justify-between glass-card-hover relative group space-y-4"
              >
                {/* Step Header */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {stepItem.step}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-white transition-colors">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs text-cyan-300 font-medium">
                    {stepItem.description}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {stepItem.details}
                  </p>
                </div>

                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mt-2">
                  <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-indigo-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
