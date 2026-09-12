"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Code, Users, Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";

const stats = [
  { label: "CGPA", value: "8.75", subtitle: "Academic Excellence", icon: Award, color: "text-cyan-400" },
  { label: "LeetCode", value: "500+", subtitle: "Problems Solved", icon: Code, color: "text-purple-400" },
  { label: "GFG Problems", value: "300+", subtitle: "Algorithmic Challenges", icon: Code, color: "text-emerald-400" },
  { label: "Internships", value: "2", subtitle: "Full Stack & Web Dev", icon: Briefcase, color: "text-amber-400" },
  { label: "Event Participants", value: "12,300+", subtitle: "Lead Organizing Impact", icon: Users, color: "text-pink-400" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold mb-3"
          >
            // About Me
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Engineering Intelligent Systems with <span className="text-gradient">Passion &amp; Precision</span>
          </motion.h3>
        </div>

        {/* Bio & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-slate-800/80 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <Code className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="text-xl font-bold text-white">Forward Deployed Engineer &amp; AI Developer</h4>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                I am a Computer Science Engineering student driven by building scalable web architectures, AI-empowered systems, and intuitive user experiences. My focus spans robust backend development, modern responsive frontends, Retrieval-Augmented Generation (RAG), and Natural Language Processing.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base mb-6">
                Whether implementing real-time socket channels for healthcare applications or fine-tuning LLM pipelines to eliminate hallucination, I thrive on tackling complex engineering challenges and delivering impactful software solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
              {["System Design", "RAG Frameworks", "Full Stack Development", "Real-Time Sockets", "REST API Architecture"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-cyan-300 border border-cyan-500/20"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel p-8 rounded-2xl border border-slate-800/80 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">Education</span>
                  <h4 className="text-lg font-bold text-white">Degree Details</h4>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="text-base font-bold text-white leading-snug">
                    B.E. Computer Science Engineering
                  </h5>
                  <p className="text-cyan-400 font-semibold text-sm">
                    Chennai Institute of Technology
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>2023 – 2027</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span>Chennai, India</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-400">Cumulative GPA</span>
                    <span className="text-sm font-bold text-emerald-400">8.75 CGPA</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full w-[87.5%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Status: Active CSE Student</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Enrolled
              </span>
            </div>
          </motion.div>
        </div>

        {/* Animated Statistics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-400 uppercase">{stat.label}</span>
                  <Icon className={`w-4 h-4 ${stat.color} group-hover:scale-110 transition-transform`} />
                </div>
                <div className={`text-2xl sm:text-3xl font-extrabold ${stat.color} mb-1 font-mono tracking-tight`}>
                  {stat.value}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  {stat.subtitle}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
