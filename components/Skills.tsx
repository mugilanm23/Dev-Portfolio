"use client";

import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Server,
  Database,
  Brain,
  Wrench,
  Layers,
  Sparkles,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    color: "from-cyan-500 to-blue-600",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    skills: ["Java", "Python", "JavaScript"],
  },
  {
    title: "Frontend Development",
    icon: Layout,
    color: "from-sky-400 to-cyan-500",
    badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    skills: ["HTML", "CSS", "React.js", "Next.js", "Bootstrap"],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "from-purple-500 to-indigo-600",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    skills: ["Node.js", "Express.js", "Flask", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-emerald-400 to-teal-600",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Artificial Intelligence & NLP",
    icon: Brain,
    color: "from-pink-500 to-rose-600",
    badgeColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
    skills: [
      "NLP",
      "RAG",
      "LLMs",
      "Conversational AI",
      "HuggingFace",
      "FAISS",
      "Gemini API",
      "Prompt Engineering",
    ],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    color: "from-amber-400 to-orange-500",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    skills: ["Git", "GitHub", "Postman", "Figma", "VS Code", "Canva"],
  },
  {
    title: "Core CS & Engineering",
    icon: Layers,
    color: "from-violet-400 to-purple-500",
    badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    skills: ["Data Structures", "Algorithms", "System Design", "Deployment"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-[#080c14] bg-grid-pattern">
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
            // Technical Proficiency
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Skills &amp; <span className="text-gradient">Tech Stack</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-4"
          >
            Modern frameworks, AI tooling, data stores, and full-stack engineering tools I utilize to craft high-performance software.
          </motion.p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} p-[1px] shadow-md`}>
                      <div className="w-full h-full bg-[#080c14] rounded-[11px] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-slate-100 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {category.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono border transition-all duration-200 hover:scale-105 cursor-default ${category.badgeColor}`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{category.skills.length} Competencies</span>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400/50 group-hover:text-cyan-400 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
