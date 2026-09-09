"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Code2, Brain, Sparkles, Zap } from "lucide-react";

export default function Developer3DCanvas() {
  const [activeTab, setActiveTab] = useState<"ide" | "ai" | "rag">("ide");
  const [typedCode, setTypedCode] = useState("");

  const codeSnippets = {
    ide: `// Mugilan M - Developer Workspace
const developer = {
  name: "Mugilan M",
  role: "Full Stack & AI Engineer",
  college: "Chennai Institute of Tech",
  stack: ["Next.js", "React", "Node", "Python"],
  status: "Building Intelligent Apps..."
};`,
    ai: `// AI & RAG Engine Core
import { FAISS, Gemini, RAG } from "@ai/core";

async function queryKnowledge(prompt) {
  const vectorStore = await FAISS.load("./embeddings");
  const context = await vectorStore.search(prompt, 5);
  return await Gemini.generateResponse(prompt, context);
}`,
    rag: `// Real-Time Healthcare & AI Memory
class ContextGuard {
  static detectHallucinations(output, groundTruth) {
    const score = computeSemanticSimilarity(output, groundTruth);
    return { verified: score > 0.92, confidence: score };
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
    }, 18);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="relative w-full flex items-center justify-center py-4">
      {/* Sleek Interactive IDE Editor Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-lg rounded-2xl bg-slate-950/90 border border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-500/15 overflow-hidden"
      >
        {/* IDE Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
          {/* OS Window Control Dots */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/90 shadow-sm shadow-rose-500/50" />
            <div className="w-3 h-3 rounded-full bg-amber-500/90 shadow-sm shadow-amber-500/50" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-sm shadow-emerald-500/50" />
          </div>

          {/* IDE File Tab Selector */}
          <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800 text-[11px] font-mono">
            <button
              onClick={() => setActiveTab("ide")}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${activeTab === "ide"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                  : "text-slate-400 hover:text-slate-200"
                }`}
            >
              <Code2 className="w-3 h-3 text-cyan-400" />
              <span>developer.ts</span>
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${activeTab === "ai"
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                  : "text-slate-400 hover:text-slate-200"
                }`}
            >
              <Brain className="w-3 h-3 text-purple-400" />
              <span>rag_engine.py</span>
            </button>
            <button
              onClick={() => setActiveTab("rag")}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${activeTab === "rag"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                  : "text-slate-400 hover:text-slate-200"
                }`}
            >
              <Zap className="w-3 h-3 text-emerald-400" />
              <span>guard.ts</span>
            </button>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="hidden sm:inline">Active Dev</span>
          </div>
        </div>

        {/* IDE Code Editor Body with Syntax Highlighting */}
        <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-200 min-h-[220px] overflow-x-auto bg-slate-950/80">
          <pre className="whitespace-pre-wrap font-mono">
            {typedCode.split("\n").map((line, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-slate-600 select-none w-5 text-right font-mono text-[11px]">
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
            <span className="inline-block w-2 h-4 bg-cyan-400 ml-8 animate-pulse" />
          </pre>
        </div>

        {/* IDE Footer Status Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-cyan-400">
              <Terminal className="w-3 h-3" />
              <span>UTF-8</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-purple-400">Node v20.x</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400">AI RAG v2.4</span>
          </div>

          <div className="flex items-center gap-1 text-cyan-300">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>Interactive IDE</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
