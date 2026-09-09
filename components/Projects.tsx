"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Sparkles,
  Layers,
  ArrowRight,
  Brain,
  Activity,
  ShieldCheck,
  Bot,
  CalendarClock,
  Eye,
} from "lucide-react";
import ProjectModal, { ProjectData } from "./ProjectModal";

const projectsList: ProjectData[] = [
  {
    id: "lifelink",
    title: "LifeLink Network",
    subtitle: "Real-Time Healthcare Coordination Platform",
    category: "Full Stack & Real-Time",
    description:
      "A high-concurrency real-time healthcare platform engineered to streamline communication between emergency care providers, ambulances, and hospital trauma units. Features instant telemetry streaming, automated JWT session authentication, and bed availability updates.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Socket.IO",
      "JWT",
      "Tailwind CSS",
    ],
    features: [
      "Real-Time Socket.IO telemetry & location dispatching",
      "Role-based access control with JWT authorization",
      "Hospital bed and ICU availability live tracking",
      "Instant notification alerts for emergency medical teams",
      "MySQL relational schema optimized for medical records",
    ],
    githubUrl: "https://github.com/mugilanm23/lifelink-network",
    demoUrl: "https://lifelink-network.demo.app",
    metrics: "Real-time socket sync < 50ms",
  },
  {
    id: "contextguard",
    title: "ContextGuard AI",
    subtitle: "LLM Hallucination Detection Framework",
    category: "AI Safety & NLP",
    description:
      "An advanced AI framework engineered to detect, score, and mitigate hallucinations in large language model outputs. Evaluates generated responses against reference knowledge bases using vector embeddings, semantic similarity, and HuggingFace transformer classifiers.",
    technologies: [
      "React.js",
      "Flask",
      "MySQL",
      "FAISS",
      "HuggingFace Transformers",
      "Gemini API",
      "Python",
    ],
    features: [
      "Real-time hallucination index scoring",
      "FAISS high-dimensional vector similarity comparison",
      "HuggingFace transformer model inference",
      "Gemini API integration for fallback validation",
      "Detailed factual groundness visual report generation",
    ],
    githubUrl: "https://github.com/mugilanm23/contextguard-ai",
    demoUrl: "https://contextguard-ai.demo.app",
    metrics: "94.2% Hallucination Detection Accuracy",
  },
  {
    id: "rag-assistant",
    title: "RAG Knowledge Assistant",
    subtitle: "Retrieval-Augmented Generation System",
    category: "Generative AI Architecture",
    description:
      "An enterprise-grade Retrieval-Augmented Generation (RAG) system built to transform unstructured enterprise documents into precise, grounded conversational knowledge. Eliminates model hallucination by embedding source documents into a vector database for semantic retrieval.",
    technologies: [
      "Python",
      "LLMs",
      "Text Embeddings",
      "FAISS / Qdrant",
      "HuggingFace",
      "LangChain",
    ],
    flowSteps: [
      "Documents",
      "Embeddings",
      "Vector DB",
      "Retrieval",
      "Context",
      "LLM",
      "Grounded Response",
    ],
    features: [
      "Automated PDF & text document chunking & tokenization",
      "Dense vector embedding generation via HuggingFace models",
      "Sub-millisecond semantic search with FAISS/Qdrant",
      "Dynamic prompt augmentation with retrieved context",
      "Strict grounding enforcement to ensure 0 hallucination",
    ],
    githubUrl: "https://github.com/mugilanm23/rag-knowledge-assistant",
    demoUrl: "https://rag-assistant.demo.app",
    metrics: "Sub-second vector retrieval",
  },
  {
    id: "healthcare-chatbot",
    title: "Intelligent Healthcare Chatbot",
    subtitle: "NLP & Conversational AI",
    category: "AI & Healthcare",
    description:
      "A clinical NLP conversational AI system designed to assist patients with preliminary symptom assessment, healthcare FAQs, and medical tips. Incorporates emergency keyword detection to immediately direct critical cases to emergency contacts.",
    technologies: [
      "Flask",
      "MySQL",
      "Gemini API",
      "NLP",
      "Python",
      "NLTK/SpaCy",
    ],
    features: [
      "NLP intent detection & entity extraction",
      "Interactive symptom checker engine",
      "Automated medical FAQ response matching",
      "Gemini API integration for natural dialogue",
      "Emergency condition detection & urgent routing",
      "Personalized health suggestions & advice",
      "Persistent user chat history tracking",
      "Daily wellness & preventive healthcare tips",
    ],
    githubUrl: "https://github.com/mugilanm23/healthcare-chatbot",
    demoUrl: "https://healthcare-chatbot.demo.app",
    metrics: "8 Comprehensive Features Integrated",
  },
  {
    id: "memory-assistant",
    title: "NLP Personal Memory Assistant",
    subtitle: "Contextual Memory & Automated Workflow Scheduler",
    category: "Full Stack & Automation",
    description:
      "A smart personal memory assistant that helps users record, query, and schedule critical daily tasks and memories using natural language parsing. Automates recurring email reminders and task tracking.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Node-cron",
      "Nodemailer",
    ],
    features: [
      "Natural language memory recording & retrieval",
      "Automated task scheduling via Node-cron background jobs",
      "Email notification alerts delivered via Nodemailer",
      "MySQL relational schema for indexed temporal memory",
      "Clean responsive React interface with dark theme",
    ],
    githubUrl: "https://github.com/mugilanm23/nlp-memory-assistant",
    demoUrl: "https://memory-assistant.demo.app",
    metrics: "Automated cron email dispatches",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="py-24 relative z-10 bg-[#080c14] bg-grid-pattern">
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
            // Featured Work
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Architectural &amp; <span className="text-gradient">AI Software Projects</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-4"
          >
            A showcase of production systems, RAG pipelines, healthcare AI applications, and full-stack solutions built with clean code and modern tooling.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projectsList.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                project.id === "rag-assistant" ? "lg:col-span-2 border-purple-500/30" : ""
              }`}
            >
              {/* Card Subtle Gradient Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                      {project.metrics}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h4 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {project.title}
                </h4>
                <p className="text-sm font-semibold text-cyan-400 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Flow Diagram Banner specifically for RAG Knowledge Assistant */}
                {project.flowSteps && (
                  <div className="mb-6 p-4 rounded-2xl bg-slate-950/80 border border-purple-500/30 overflow-x-auto">
                    <div className="text-[11px] font-mono text-purple-400 font-semibold mb-2 uppercase tracking-wider">
                      // RAG System Data Pipeline Architecture
                    </div>
                    <div className="flex items-center gap-2 min-w-max">
                      {project.flowSteps.map((step, sIdx) => (
                        <div key={step} className="flex items-center gap-1.5">
                          <span className="px-2.5 py-1 rounded-md bg-purple-950/70 border border-purple-500/40 text-[11px] font-mono text-cyan-300 font-bold">
                            {step}
                          </span>
                          {sIdx < project.flowSteps!.length - 1 && (
                            <span className="text-purple-400 text-xs font-bold font-mono">
                              &rarr;
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-2 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-400 border border-slate-800">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>Inspect Architecture &amp; Details</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all"
                    aria-label="GitHub repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal Detail Window */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
