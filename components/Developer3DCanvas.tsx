"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Code2, Brain, Sparkles, Zap } from "lucide-react";

export default function Developer3DCanvas() {
  const [activeTab, setActiveTab] = useState<"ide" | "ai" | "rag">("ide");
  const [typedCode, setTypedCode] = useState("");

  const codeSnippets = {
    ide: `// Mugilan M - Developer Workspace
const engineer = {
  name: "Mugilan M",
  role: "Forward Deployed & AI Engineer",
  institution: "Chennai Institute of Technology",
  stack: ["React / Next.js", "Node.js", "Python", "RAG & LLMs"],
  status: "Deploying High-Impact Intelligent Systems..."
};`,
    ai: `// AI & Neural Systems Engine
import { FAISS, Gemini, RAGPipeline } from "@ai/systems";

async function executeRAGQuery(query) {
  const embeddings = await FAISS.loadStore("./knowledge-base");
  const context = await embeddings.similaritySearch(query, 5);
  return await Gemini.generateGroundedResponse(query, context);
}`,
    rag: `// Hallucination Prevention & Validation Guard
class ContextGuard {
  static validateConfidence(output, groundTruth) {
    const score = computeSemanticSimilarity(output, groundTruth);
    return { verified: score > 0.94, confidence: score };
  }
}`
  };

  // Typewriter effect for code preview
  useEffect(() => {
    let index = 0;
    const fullText = codeSnippets[activeTab];
    setTypedCode("");

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedCode(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="relative w-full flex items-center justify-center py-2">
      {/* Sleek Rectangular IDE Editor Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-2xl lg:max-w-3xl rounded-2xl bg-slate-950/95 border border-cyan-500/35 backdrop-blur-2xl shadow-2xl shadow-cyan-500/15 overflow-hidden"
      >
        {/* IDE Header Bar with Balanced Equal Padding & Spacing */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-slate-900/95 border-b border-slate-800/90 gap-2 sm:gap-4">
          {/* OS Window Control Dots */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-3 h-3 rounded-full bg-rose-500/90 shadow-sm shadow-rose-500/50" />
            <div className="w-3 h-3 rounded-full bg-amber-500/90 shadow-sm shadow-amber-500/50" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-sm shadow-emerald-500/50" />
          </div>

          {/* IDE File Tab Selector - Perfectly Centered & Compact */}
          <div className="flex items-center justify-center gap-1 sm:gap-1.5 bg-slate-950/90 p-1 rounded-xl border border-slate-800/90 text-[11px] sm:text-xs font-mono">
            <button
              onClick={() => setActiveTab("ide")}
              className={`flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg transition-all whitespace-nowrap ${activeTab === "ide"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
                }`}
            >
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>developer.ts</span>
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg transition-all whitespace-nowrap ${activeTab === "ai"
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
                }`}
            >
              <Brain className="w-3.5 h-3.5 text-purple-400" />
              <span>rag_engine.py</span>
            </button>
            <button
              onClick={() => setActiveTab("rag")}
              className={`flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg transition-all whitespace-nowrap ${activeTab === "rag"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
                }`}
            >
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>guard.ts</span>
            </button>
          </div>

          {/* Single-Line Active Dev Status Badge */}
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-emerald-400 font-mono whitespace-nowrap shrink-0 bg-emerald-500/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <span>Active Dev</span>
          </div>
        </div>

        {/* IDE Code Editor Body with Syntax Highlighting */}
        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed text-slate-200 min-h-[220px] overflow-x-auto bg-slate-950/90">
          <pre className="whitespace-pre-wrap font-mono">
            {typedCode.split("\n").map((line, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-slate-600 select-none w-6 text-right font-mono text-xs flex-shrink-0">
                  {i + 1}
                </span>
                <span className="flex-1">
                  {line.startsWith("//") ? (
                    <span className="text-slate-500 italic">{line}</span>
                  ) : line.includes("const") || line.includes("import") || line.includes("class") || line.includes("async") ? (
                    <span>
                      <span className="text-purple-400 font-semibold">{line.split(" ")[0]} </span>
                      <span className="text-cyan-300">{line.substring(line.indexOf(" ") + 1)}</span>
                    </span>
                  ) : (
                    <span className="text-slate-200">{line}</span>
                  )}
                </span>
              </div>
            ))}
            <span className="inline-block w-2 h-4 bg-cyan-400 ml-10 animate-pulse" />
          </pre>
        </div>

        {/* IDE Footer Status Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-900/90 border-t border-slate-800/90 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>UTF-8</span>
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-purple-400">Node v20.x</span>
            <span className="text-slate-700">|</span>
            <span className="text-emerald-400">AI RAG Engine</span>
          </div>

          <div className="flex items-center gap-1.5 text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive IDE</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
