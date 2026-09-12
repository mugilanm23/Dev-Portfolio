"use client";

import { motion } from "framer-motion";
import { Users, Crown, Heart, ChevronRight } from "lucide-react";

const volunteeringRoles = [
  {
    role: "Convenor & Promotion Lead",
    event: "HACKERZ’26 (National Technical Symposium)",
    impact: "12,300+ Participants",
    description: "Volunteered and spearheaded nationwide outreach, promotional strategy, sponsor relations, and overall event execution.",
    color: "from-cyan-500 to-blue-600",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    highlight: "12,300+ Attendees",
  },
  {
    role: "Lead Organizer & Volunteer",
    event: "H@CIT’26 (24-Hour Hackathon)",
    impact: "5,000+ Participants",
    description: "Directed hackathon logistics, formulations of problem statements, mentor allocation, and on-ground volunteer coordination.",
    color: "from-purple-500 to-indigo-600",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    highlight: "5,000+ Hackers",
  },
  {
    role: "Promotion Team Volunteer",
    event: "HACKERZ’25",
    impact: "Campus & Regional Outreach",
    description: "Coordinated digital marketing campaigns, institutional outreach, and technical community engagement across institutes.",
    color: "from-emerald-400 to-teal-600",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    highlight: "Regional Outreach",
  },
  {
    role: "Event Coordinator Volunteer",
    event: "HackFusion 2025",
    impact: "Inter-College Hackathon",
    description: "Managed participant onboarding, judging rubrics, workshop coordination, and real-time tech support during the hackathon.",
    color: "from-pink-500 to-rose-600",
    badgeColor: "text-pink-400 bg-pink-500/10 border-pink-500/30",
    highlight: "Inter-College",
  },
];

export default function Leadership() {
  return (
    <section id="volunteering" className="py-24 relative z-10 bg-[#080c14] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold mb-3 flex items-center justify-center gap-2"
          >
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>// Community &amp; Impact</span>
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Volunteering &amp; <span className="text-gradient">Leadership</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-4"
          >
            Empowering tech communities, volunteering in major technical symposiums, and leading promotional initiatives for thousands of student developers.
          </motion.p>
        </div>

        {/* Volunteering & Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {volunteeringRoles.map((item, idx) => (
            <motion.div
              key={item.event}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${item.badgeColor}`}>
                    {item.highlight}
                  </span>
                  <Crown className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform" />
                </div>

                <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {item.role}
                </h4>
                <p className="text-cyan-400 font-semibold text-sm mb-4">
                  {item.event}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span>{item.impact}</span>
                </span>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
