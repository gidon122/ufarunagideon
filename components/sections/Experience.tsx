"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users, Award, Calendar, MapPin } from "lucide-react";
import { experienceData } from "@/data/portfolioData";

export default function Experience() {
  const typeIcons: Record<string, any> = {
    Internship: Briefcase,
    Education: GraduationCap,
    Training: Award,
    Community: Users,
  };

  return (
    <section id="experience" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-3.5 py-1 rounded-full">
            04. Journey & Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Technical & Academic Path
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From computer engineering fundamentals at FUT Minna to AI research tracks, internships, and technical mentorship.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l border-slate-800 space-y-12">
          {experienceData.map((item, idx) => {
            const IconComponent = typeIcons[item.type] || Briefcase;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot Marker */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-cyan-400 flex items-center justify-center text-cyan-400 transition-colors shadow-lg shadow-cyan-950/50">
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                {/* Timeline Content Card */}
                <div className="glass-card rounded-2xl p-6 border border-slate-800 glass-card-hover space-y-4">
                  
                  {/* Top Bar: Title, Org, Date badge */}
                  <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-slate-800/60">
                    <div>
                      <span className="px-2.5 py-0.5 text-[11px] font-semibold text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 rounded-md font-mono uppercase tracking-wider">
                        {item.type}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-slate-300 flex items-center gap-2 mt-0.5">
                        <span>{item.organization}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-xs text-slate-400 font-normal flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-500" /> {item.location}
                        </span>
                      </p>
                    </div>

                    <span className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" /> {item.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  {item.bulletPoints && item.bulletPoints.length > 0 && (
                    <ul className="space-y-2 pt-1 text-xs sm:text-sm text-slate-400">
                      {item.bulletPoints.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
