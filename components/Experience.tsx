"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, TrendingUp, Zap, Globe, Layers } from "lucide-react";

const experiences = [
  {
    title: "Web Developer Intern",
    company: "Acutix Soft LLP",
    period: "May 2025 – Jun 2025",
    type: "Internship",
    techStack: ["React.js", "Vite", "Express.js", "Node.js", "Nodemailer", "Vercel", "Render", "Hostinger", "Git"],
    highlights: [
      "Architected responsive frontend interfaces with React.js & Vite, improving page load speeds by 40%.",
      "Managed and handled 200+ monthly client requests efficiently across production endpoints.",
      "Integrated Nodemailer for automated communication workflows, transactional alerts, and contact handling.",
      "Managed full deployment pipelines using Vercel, Render, and Hostinger with Git/GitHub version control.",
    ],
    metric: "+40% Speed Boost",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
  },
  {
    title: "Full Stack Developer Intern",
    company: "Rizzspace",
    period: "Nov 2024 – Dec 2024",
    type: "Internship",
    techStack: ["React.js", "Figma", "REST APIs", "Node.js", "UI/UX Design"],
    highlights: [
      "Built responsive and intuitive user interfaces across 5+ production web platforms.",
      "Designed 10+ interactive Figma wireframes and converted them into modular React components.",
      "Integrated REST APIs seamlessly, optimizing data serialization and reducing latency by 25%.",
      "Standardized reusable UI component design system across developer teams.",
    ],
    metric: "-25% Latency",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 bg-[#080c14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold mb-3"
          >
            // Career Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Work &amp; <span className="text-gradient">Internship Experience</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-4"
          >
            Practical hands-on industry experience engineering scalable web platforms, optimizing latency, and executing UI/UX workflows.
          </motion.p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 md:ml-12 space-y-12 pl-6 sm:pl-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company + exp.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative group"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#080c14] border-2 border-cyan-400 flex items-center justify-center group-hover:border-purple-400 group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(6,182,212,0.6)]">
                <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-purple-400 transition-colors" />
              </div>

              {/* Experience Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold mb-2 border ${exp.badgeColor}`}>
                      {exp.type}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.title}
                    </h4>
                    <p className="text-slate-300 font-semibold text-base flex items-center gap-2 mt-1">
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                      <span>{exp.company}</span>
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{exp.metric}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-3 mb-6 text-sm text-slate-300 leading-relaxed">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Chips */}
                <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 mr-2">Tech Utilized:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
