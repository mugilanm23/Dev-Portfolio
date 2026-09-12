"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Sparkles, CheckCircle2, Cpu, Code2, Layers } from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  demoUrl: string;
  flowSteps?: string[];
  metrics?: string;
  architectureDetails?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-24 pb-8 px-4 sm:px-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080c14]/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative w-full max-w-3xl glass-panel-glow p-6 sm:p-8 rounded-3xl border border-cyan-500/30 z-10 my-auto shadow-2xl max-h-[calc(100vh-7rem)] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6 pr-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-cyan-300 font-semibold text-sm sm:text-base mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <div className="mb-6 text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            {project.description}
          </div>

          {/* Interactive RAG Flow Diagram if available */}
          {project.flowSteps && project.flowSteps.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-purple-400 font-semibold tracking-wider mb-3 flex items-center gap-1.5">
                <Cpu className="w-4 h-4" /> System Architecture &amp; Data Pipeline Flow
              </h4>
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-purple-500/30 overflow-x-auto">
                <div className="flex items-center gap-2 min-w-max py-2 px-1">
                  {project.flowSteps.map((step, idx) => (
                    <div key={step} className="flex items-center gap-2">
                      <div className="px-3 py-2 rounded-lg bg-gradient-to-r from-purple-900/50 to-slate-900 border border-purple-500/40 text-xs font-mono text-cyan-300 font-bold shadow-md shadow-purple-950/50">
                        {step}
                      </div>
                      {idx < project.flowSteps!.length - 1 && (
                        <span className="text-purple-400 font-bold font-mono text-xs animate-pulse">
                          &rarr;
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" /> Key Features &amp; Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat) => (
                <div
                  key={feat}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider mb-3">
              Technologies &amp; Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 text-cyan-300 border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-800/80">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-400 text-xs font-semibold transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
