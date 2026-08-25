"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Copy, Check, Sparkles, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/SocialIcons";
import { personalDetails } from "@/data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-3.5 py-1 rounded-full">
            08. Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Have an idea? <span className="gradient-text">Let's build it.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Whether you have a project in mind, an opportunity, or simply want to connect, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" /> Direct Contact Information
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Reach out directly via email, message on social platforms, or send a quick query through the form.
              </p>

              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-slate-400 font-bold flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" /> Direct Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy Email
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors break-all block"
                >
                  {personalDetails.email}
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <span className="text-xs font-mono uppercase text-slate-400 font-bold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" /> Location & Campus
                </span>
                <p className="text-sm font-semibold text-slate-200">
                  {personalDetails.location}
                </p>
                <p className="text-xs text-slate-400">
                  Federal University of Technology, Minna (FUT Minna)
                </p>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase text-slate-400 font-bold block">
                  Connect Across Platforms:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href={personalDetails.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white transition-colors text-xs font-semibold"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" /> GitHub
                  </a>
                  <a
                    href={personalDetails.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white transition-colors text-xs font-semibold"
                  >
                    <LinkedinIcon className="w-4 h-4 text-indigo-400" /> LinkedIn
                  </a>
                  <a
                    href={personalDetails.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white transition-colors text-xs font-semibold"
                  >
                    <WhatsappIcon className="w-4 h-4 text-emerald-400" /> WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6"
            >
              <h3 className="text-xl font-bold text-white">Send a Message</h3>

              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Message sent successfully!</p>
                    <p className="text-emerald-400/90 mt-0.5">
                      Thank you for reaching out. Gideon will respond to your email shortly.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs sm:text-sm">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-slate-300 block">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-slate-300 block">
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-medium text-slate-300 block">
                  Subject <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  placeholder="Project inquiry / Full-stack position / Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-medium text-slate-300 block">
                  Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, timeline, or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
