"use client";

import React, { useState } from "react";
import { SKILL_GROUPS, Skill, SkillCategory } from "@/lib/data";
import { TechLogo, isBrand } from "@/components/ui/TechLogo";

const CATEGORIES: ("All" | SkillCategory)[] = [
  "All",
  "Design",
  "Tools",
  "AI Tools",
  "Process",
];

function playPopSound() {
  if (typeof window === "undefined") return;
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    // Soft, satisfying UI pop (frequency falls from 620Hz to 220Hz over 50ms)
    osc.frequency.setValueAtTime(620, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.07, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch {
    // Silently continue if audio context is blocked
  }
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<"All" | SkillCategory>("All");
  const [selectedSkill, setSelectedSkill] = useState<Skill>(SKILL_GROUPS[0]);

  const handleSelect = (skill: Skill, isUserClick = false) => {
    setSelectedSkill(skill);
    if (isUserClick) {
      playPopSound();
    }
  };

  return (
    <section id="skills" className="section-pad relative w-full border-t border-[#0d0d0d]/10">
      <div className="page-container">
        {/* Section Tag & Heading */}
        <div className="section-tag">
          <span>02</span>
          <span>—</span>
          <span>Stack</span>
        </div>

        <h2 className="section-heading">
          The periodic table of my <em>stack.</em>
        </h2>

        {/* Filter Category Chips with Distinct Palette Colors */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            let activeClass = "bg-gradient-to-r from-slate-900 to-indigo-950 text-white shadow-md";
            let idleClass = "bg-white text-slate-600 border border-slate-200 hover:border-slate-400";

            if (cat === "Design") {
              activeClass = "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25";
              idleClass = "bg-indigo-50/60 text-indigo-700 border border-indigo-200 hover:bg-indigo-100";
            } else if (cat === "Tools") {
              activeClass = "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md shadow-rose-500/25";
              idleClass = "bg-rose-50/60 text-rose-700 border border-rose-200 hover:bg-rose-100";
            } else if (cat === "AI Tools") {
              activeClass = "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/25";
              idleClass = "bg-emerald-50/60 text-emerald-700 border border-emerald-200 hover:bg-emerald-100";
            } else if (cat === "Process") {
              activeClass = "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/25";
              idleClass = "bg-amber-50/60 text-amber-700 border border-amber-200 hover:bg-amber-100";
            }

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all duration-300 ${
                  isActive ? activeClass : idleClass
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Main Grid + Inspector Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
          {/* Periodic Table Grid (8 cols on desktop, 4 on mobile) */}
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2.5 sm:gap-3">
            {SKILL_GROUPS.map((skill, index) => {
              const row = Math.floor(index / 8);
              const col = index % 8;
              const delay = (row + col) * 40;
              const matchesFilter =
                activeCategory === "All" || skill.category === activeCategory;
              const isSelected = selectedSkill.name === skill.name;

              // Color-coded categories
              let tileClass = "bg-indigo-50/80 text-indigo-950 border-indigo-200/90 hover:bg-indigo-100 hover:border-indigo-400 hover:shadow-md hover:scale-[1.04]";
              let symbolColor = "text-indigo-600";
              let badgeColor = "text-indigo-700 bg-indigo-100/80";

              if (skill.category === "Tools") {
                tileClass = "bg-rose-50/80 text-rose-950 border-rose-200/90 hover:bg-rose-100 hover:border-rose-400 hover:shadow-md hover:scale-[1.04]";
                symbolColor = "text-rose-600";
                badgeColor = "text-rose-700 bg-rose-100/80";
              } else if (skill.category === "AI Tools") {
                tileClass = "bg-emerald-50/80 text-emerald-950 border-emerald-200/90 hover:bg-emerald-100 hover:border-emerald-400 hover:shadow-md hover:scale-[1.04]";
                symbolColor = "text-emerald-600";
                badgeColor = "text-emerald-700 bg-emerald-100/80";
              } else if (skill.category === "Process") {
                tileClass = "bg-amber-50/80 text-amber-950 border-amber-200/90 hover:bg-amber-100 hover:border-amber-400 hover:shadow-md hover:scale-[1.04]";
                symbolColor = "text-amber-600";
                badgeColor = "text-amber-700 bg-amber-100/80";
              }

              if (isSelected) {
                if (skill.category === "Design") {
                  tileClass = "bg-gradient-to-br from-indigo-600 to-indigo-800 text-white border-indigo-400 shadow-xl shadow-indigo-500/30 ring-2 ring-indigo-400 scale-105 z-10";
                } else if (skill.category === "Tools") {
                  tileClass = "bg-gradient-to-br from-rose-500 to-rose-700 text-white border-rose-400 shadow-xl shadow-rose-500/30 ring-2 ring-rose-400 scale-105 z-10";
                } else if (skill.category === "AI Tools") {
                  tileClass = "bg-gradient-to-br from-emerald-500 to-emerald-700 text-white border-emerald-400 shadow-xl shadow-emerald-500/30 ring-2 ring-emerald-400 scale-105 z-10";
                } else {
                  tileClass = "bg-gradient-to-br from-amber-500 to-amber-700 text-white border-amber-400 shadow-xl shadow-amber-500/30 ring-2 ring-amber-400 scale-105 z-10";
                }
                symbolColor = "text-white";
                badgeColor = "text-white bg-white/20";
              } else if (!matchesFilter) {
                tileClass = "bg-[#f1f5f9]/40 text-slate-400 border-transparent opacity-25";
                symbolColor = "text-slate-400";
                badgeColor = "text-slate-400 bg-slate-200/50";
              }

              return (
                <button
                  key={skill.name}
                  onClick={() => handleSelect(skill, true)}
                  onMouseEnter={() => handleSelect(skill, false)}
                  onFocus={() => handleSelect(skill, false)}
                  style={{
                    animationDelay: `${delay}ms`,
                  }}
                  className={`relative p-3 rounded-2xl flex flex-col justify-between text-left transition-all duration-300 aspect-square border cursor-pointer select-none active:scale-95 ${tileClass}`}
                >
                  {/* Top Bar: Atomic Number & Category Code */}
                  <div className="flex items-center justify-between w-full font-mono text-[9px]">
                    <span className="font-semibold opacity-75">{skill.atomicNumber.toString().padStart(2, "0")}</span>
                    <span className={`px-1 py-0.2 rounded text-[8px] font-bold ${badgeColor}`}>{skill.category.substring(0, 2).toUpperCase()}</span>
                  </div>

                  {/* 2-Letter Symbol in Full Uppercase */}
                  <div className="my-auto text-center w-full">
                    <span
                      className={`text-xl sm:text-2xl font-bold font-mono transition-transform duration-200 ${symbolColor} ${
                        isSelected ? "scale-110 inline-block" : ""
                      }`}
                    >
                      {skill.symbol.toUpperCase()}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <div className="truncate w-full text-[10px] font-semibold text-center">
                    {skill.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Sticky Inspector Panel (320px wide) */}
          <div className="lg:sticky lg:top-28 card-surface p-7 flex flex-col justify-between border border-[#0d0d0d]/10">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#0d0d0d]/10 mb-6">
                <span className="font-mono text-[10px] uppercase text-[#77756f]">
                  Element Inspector
                </span>
                <span className="font-mono text-[10px] text-[#0d0d0d] font-semibold">
                  #{selectedSkill.atomicNumber.toString().padStart(2, "0")}
                </span>
              </div>

              {/* Logo Presentation (150px visual box with pop animation) */}
              <div
                key={selectedSkill.name}
                className="w-full h-44 rounded-2xl bg-gradient-to-br from-indigo-50/60 via-purple-50/40 to-pink-50/60 border border-indigo-100 flex items-center justify-center p-6 mb-6 relative overflow-hidden group transition-all duration-300"
              >
                <div className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
                  <TechLogo
                    name={selectedSkill.brandKey || selectedSkill.name}
                    size={72}
                    className="drop-shadow-sm"
                  />
                </div>
                {/* Soft brand ambient glow */}
                <div className="absolute inset-0 bg-radial from-indigo-500/10 to-transparent pointer-events-none" />
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-bold text-[#0d0d0d]">
                    {selectedSkill.name}
                  </h3>
                  <span className="font-mono text-sm font-bold text-indigo-600">
                    [{selectedSkill.symbol.toUpperCase()}]
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase text-[#77756f]">
                    Family:
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                      selectedSkill.category === "Design"
                        ? "bg-indigo-600 text-white"
                        : selectedSkill.category === "Tools"
                        ? "bg-rose-600 text-white"
                        : selectedSkill.category === "AI Tools"
                        ? "bg-emerald-600 text-white"
                        : "bg-amber-600 text-white"
                    }`}
                  >
                    {selectedSkill.category}
                  </span>
                  {selectedSkill.isBrand && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-purple-50 text-purple-700 border border-purple-200">
                      Industry Tool
                    </span>
                  )}
                </div>

                {/* Shipped Projects Using This Skill */}
                <div className="pt-4 mt-4 border-t border-[#0d0d0d]/10">
                  <span className="font-mono text-[10px] uppercase text-[#77756f] block mb-2">
                    Applied In Projects:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSkill.projects.map((proj) => (
                      <span
                        key={proj}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-indigo-50/80 text-indigo-800 border border-indigo-200/80"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#0d0d0d]/10 font-mono text-[9px] text-[#a9a6a0]">
              {selectedSkill.footerLine || "From first wireframe to final handoff."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
