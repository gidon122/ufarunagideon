"use client";

import { motion } from "framer-motion";
import { Globe, Layout, Sparkles, Server, BarChart3, Briefcase, Database, Check } from "lucide-react";
import { servicesData } from "@/data/portfolioData";

export default function Services() {
  const iconMap: Record<string, any> = {
    Globe: Globe,
    Layout: Layout,
    Sparkles: Sparkles,
    Server: Server,
    BarChart3: BarChart3,
    Briefcase: Briefcase,
    Database: Database,
  };

  return (
    <section id="services" className="py-14 sm:py-20 lg:py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2.5 sm:space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-3.5 py-1 rounded-full">
            06. Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            What I Can Build
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm lg:text-base">
            From modern web applications to AI-integrated microservices, I deliver performant, well-architected digital solutions.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Globe;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-800 flex flex-col justify-between glass-card-hover space-y-4 sm:space-y-5"
              >
                <div className="space-y-3.5 sm:space-y-4">
                  {/* Service Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1.5 sm:mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-3.5 sm:pt-4 border-t border-slate-800/80 space-y-1.5 sm:space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                    Key Features:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
