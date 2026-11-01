"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, ExternalLink, ShieldCheck } from "lucide-react";
import { certificationsData } from "@/data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="py-14 sm:py-20 lg:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2.5 sm:space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-3.5 py-1 rounded-full">
            05. Credentials
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Industry Credentials
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm lg:text-base">
            Verified technical specializations in Agentic AI, Cloud infrastructure, and full-stack software development.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-4 sm:p-6 border border-slate-800 flex flex-col justify-between glass-card-hover space-y-4 sm:space-y-5"
            >
              <div className="space-y-3.5 sm:space-y-4">
                {/* Badge Icon Header */}
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-r ${cert.badgeColor} text-white shadow-md shadow-rose-950/40 shrink-0`}>
                    <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-cyan-400 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md">
                    {cert.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 mt-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Issued by {cert.issuer}</span>
                  </p>
                </div>
              </div>

              {/* Bottom Credential Bar */}
              <div className="pt-3 sm:pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs gap-2">
                <span className="font-mono text-slate-500 text-[10px] sm:text-[11px] truncate max-w-[140px] sm:max-w-[170px]">
                  ID: {cert.credentialId || "Verified"}
                </span>

                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-cyan-400 hover:text-cyan-300 transition-colors min-h-[36px] sm:min-h-0"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-slate-500 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Active
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
