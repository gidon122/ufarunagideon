"use client";

import { Mail, ArrowUp, Terminal, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personalDetails } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          {/* Column 1: Brand & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Gideon Ufaruna
              </span>
            </div>

            <p className="text-slate-300 text-sm max-w-md leading-relaxed font-medium">
              "Building useful things with code, AI, and curiosity."
            </p>

            <p className="text-xs text-slate-500">
              Computer Engineering Student at Federal University of Technology, Minna (FUT Minna). Focused on Full-Stack Systems, Agentic AI, and Cloud Architecture.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-slate-200 font-bold">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">
                  Journey & Timeline
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & Socials */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-slate-200 font-bold">
              Connect
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={personalDetails.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalDetails.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalDetails.email}`}
                className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-slate-500 pt-2">
              Based in Minna, Niger State, Nigeria
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Ufaruna Gideon. Crafted with <Heart className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400/20" /> using Next.js & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
