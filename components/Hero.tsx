"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Code, Cpu, Brain, Rocket } from "lucide-react";
import Developer3DCanvas from "./Developer3DCanvas";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#080c14] bg-grid-pattern"
    >
      {/* Soft Ambient Background Glow Accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-[32rem] h-[32rem] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Hero Content & Typography (lg:col-span-7) */}
          <div className="lg:col-span-7 text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide uppercase shadow-lg shadow-cyan-500/10 mb-6 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
              <span>CSE Student @ CIT &bull; Full Stack &amp; AI Developer</span>
            </motion.div>

            {/* Hero Main Title & Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                Mugilan M
              </span>
            </motion.h1>

            {/* Subheading Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl font-semibold text-slate-300 mb-6 flex flex-wrap items-center gap-2 sm:gap-3"
            >
              <span className="text-cyan-400">Full Stack Developer</span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-purple-400">AI Enthusiast</span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-emerald-400">Problem Solver</span>
            </motion.div>

            {/* Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-2xl font-medium text-slate-200 mb-5 tracking-tight max-w-2xl"
            >
              Building <span className="text-cyan-300 font-semibold">intelligent digital experiences</span> with code &amp; AI.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base text-slate-400 max-w-xl mb-8 leading-relaxed"
            >
              Computer Science Engineering student passionate about full-stack development, AI, NLP, RAG systems, real-time applications and algorithmic problem solving.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <button
                onClick={() => handleScrollTo("projects")}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleScrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-200 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800/90 font-semibold text-sm tracking-wide transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
              >
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Interactive Feature Tags Pill Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex flex-wrap items-center gap-3 px-5 py-2.5 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-md shadow-xl"
            >
              <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                <Code className="w-3.5 h-3.5 text-cyan-400" />
                <span>React &amp; Next.js</span>
              </div>
              <span className="text-slate-700">&bull;</span>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>Node &amp; Express</span>
              </div>
              <span className="text-slate-700">&bull;</span>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                <Brain className="w-3.5 h-3.5 text-pink-400" />
                <span>RAG &amp; LLMs</span>
              </div>
              <span className="text-slate-700">&bull;</span>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                <span>Python &amp; Flask</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Developer & AI IDE Workstation (lg:col-span-5) */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <Developer3DCanvas />
          </div>

        </div>
      </div>
    </section>
  );
}
