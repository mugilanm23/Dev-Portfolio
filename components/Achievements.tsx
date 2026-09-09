"use client";

import { motion } from "framer-motion";
import { Award, Code2, ShieldCheck, Star, ExternalLink, CheckCircle, Flame, Trophy } from "lucide-react";

const cpStats = [
  {
    platform: "LeetCode",
    score: "502+ Solved",
    rating: "1750+ Contest Rating",
    detail: "Top Tier Problem Solving & Algorithms",
    icon: Code2,
    badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  },
  {
    platform: "CodeChef",
    score: "1★ Division",
    rating: "1385 Rating | 50+ Contests",
    detail: "Competitive Programming Competitions",
    icon: Trophy,
    badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
  },
  {
    platform: "GeeksforGeeks",
    score: "300+ Solved",
    rating: "Data Structures & Core CS",
    detail: "Relentless Algorithmic Practice",
    icon: Flame,
    badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
];

const certifications = [
  { name: "ServiceNow CAD", issuer: "ServiceNow Certified Application Developer", category: "Cloud Platform" },
  { name: "ServiceNow CSA", issuer: "ServiceNow Certified System Administrator", category: "System Admin" },
  { name: "NPTEL Cloud Computing", issuer: "IIT Kharagpur / NPTEL", category: "Cloud & Infrastructure" },
  { name: "NPTEL IoT", issuer: "IIT Kharagpur / NPTEL", category: "Embedded Systems & IoT" },
  { name: "NPTEL DBMS", issuer: "IIT Madras / NPTEL", category: "Database Systems" },
  { name: "Cisco CCNA Certifications", issuer: "Cisco Networking Academy", category: "Networking & Security" },
  { name: "EduSkills Certifications", issuer: "EduSkills Academy", category: "Software Development" },
  { name: "Cybersecurity Essentials", issuer: "Cisco & Industry Partners", category: "Security & Threat Mitigation" },
  { name: "Python Programming", issuer: "Advanced Data Structures & OOP", category: "Languages" },
  { name: "AI / Data Science Specialization", issuer: "Machine Learning & Deep Learning", category: "Artificial Intelligence" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10 bg-[#080c14]">
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
            // Accomplishments
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Competitive Programming &amp; <span className="text-gradient">Certifications</span>
          </motion.h3>
        </div>

        {/* Competitive Programming Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cpStats.map((cp, idx) => {
            const Icon = cp.icon;
            return (
              <motion.div
                key={cp.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <h4 className="text-lg font-bold text-white">{cp.platform}</h4>
                  </div>
                  <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-semibold border ${cp.badgeColor}`}>
                    Active
                  </span>
                </div>

                <div className="text-2xl font-extrabold text-white mb-1 font-mono">
                  {cp.score}
                </div>
                <div className="text-cyan-400 text-xs font-semibold mb-2">
                  {cp.rating}
                </div>
                <p className="text-slate-400 text-xs">
                  {cp.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications Sub-heading */}
        <div className="mb-8 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
            <Award className="w-4 h-4 text-purple-400" />
          </div>
          <h4 className="text-xl font-bold text-white">Professional Certifications</h4>
        </div>

        {/* Compact Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-panel p-4 rounded-xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">
                    {cert.category}
                  </span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                </div>
                <h5 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-1">
                  {cert.name}
                </h5>
                <p className="text-[11px] text-slate-400 leading-tight">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800/60 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                <span>Verified Credential</span>
                <ShieldCheck className="w-3 h-3 text-cyan-400/60" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
