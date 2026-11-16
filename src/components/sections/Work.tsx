"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/lib/data";
import { TechLogo } from "@/components/ui/TechLogo";

export function Work() {
  const [activeId, setActiveId] = useState<string>(PROJECTS[0].id);

  return (
    <section id="work" className="section-pad relative w-full border-t border-[#0d0d0d]/10">
      <div className="page-container">
        {/* Section Tag & Heading */}
        <div className="section-tag">
          <span>03</span>
          <span>—</span>
          <span>Selected Work</span>
        </div>

        <h2 className="section-heading">
          Things I&apos;ve <em>built.</em>
        </h2>

        {/* --- DESKTOP HORIZONTAL ACCORDION --- */}
        <div className="hidden lg:flex gap-3 min-h-[640px] lg:h-[620px] w-full items-stretch">
          {PROJECTS.map((project) => {
            const isOpen = activeId === project.id;

            return (
              <div
                key={project.id}
                tabIndex={0}
                role="region"
                aria-label={`Project: ${project.title}`}
                onClick={() => setActiveId(project.id)}
                onFocus={() => setActiveId(project.id)}
                style={{
                  flex: isOpen ? 8 : 1,
                  transition: "flex 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className={`card-surface relative overflow-hidden cursor-pointer select-none border border-[#0d0d0d]/10 ${
                  isOpen ? "bg-white shadow-xl" : "bg-[#f4f2ee] hover:bg-[#eae7e0]"
                }`}
              >
                {/* --- FOLDED SLIM SPINE (when not open) --- */}
                {!isOpen && (
                  <div className="absolute inset-0 flex flex-col justify-between items-center py-8 px-2 bg-gradient-to-b from-white to-slate-50 hover:to-indigo-50/60 transition-colors">
                    <div className="w-2 h-5 rounded-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 shadow-sm" />

                    <span className="font-mono text-xs font-extrabold text-indigo-600">
                      {project.index}
                    </span>

                    {/* Vertical rotated title */}
                    <div className="rotate-[-90deg] whitespace-nowrap text-xs font-bold uppercase tracking-wider text-slate-800">
                      {project.title}
                    </div>

                    <div className="w-8 h-8 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 flex items-center justify-center text-xs font-bold transition-transform duration-300 hover:rotate-90 hover:bg-indigo-600 hover:text-white shadow-sm">
                      +
                    </div>
                  </div>
                )}

                {/* --- EXPANDED PANEL CONTENT --- */}
                {isOpen && (
                  <div className="w-full h-full p-7 sm:p-9 flex flex-col lg:flex-row gap-6 justify-between items-stretch animate-in fade-in duration-500 overflow-y-auto">
                    {/* Left Details Column */}
                    <div className="flex-1 flex flex-col justify-between max-w-xl">
                      <div>
                        <div className="flex items-center gap-3 mb-2.5">
                          <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                            {project.index} / {PROJECTS.length.toString().padStart(2, "0")}
                          </span>
                          <span className="text-xs uppercase font-mono font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                            {project.kicker}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-[#0d0d0d] mb-3">
                          {project.title}
                        </h3>

                        <p className="text-sm leading-relaxed text-[#3a3a3a] mb-5">
                          {project.description}
                        </p>

                        {/* 2-Column Feature List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                          {project.features.map((feat, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-sm text-[#3a3a3a] leading-snug">
                              <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 mt-1.5 shrink-0 shadow-xs" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Tech Chips & Action Buttons */}
                      <div className="pt-2">
                        {/* Tech Chips */}
                        <div className="flex flex-wrap items-center gap-1.5 mb-4">
                          {project.tech.map((t) => (
                            <div
                              key={t}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50/70 text-indigo-900 border border-indigo-200/80 shadow-xs"
                            >
                              <TechLogo name={t} size={13} />
                              <span>{t}</span>
                            </div>
                          ))}
                        </div>

                        {/* Project Links & Store Pills */}
                        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#0d0d0d]/10">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md shadow-indigo-500/20 hover:scale-105 active:scale-95"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>Live Site</span>
                              <span className="text-[11px]">↗</span>
                            </a>
                          )}
                          {project.caseStudyUrl && (
                            <a
                              href={project.caseStudyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-300 hover:bg-amber-100 transition-all shadow-sm hover:scale-105 active:scale-95"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>Behance Case Study</span>
                              <span className="text-[11px]">↗</span>
                            </a>
                          )}
                          {project.appStoreUrl && (
                            <a
                              href={project.appStoreUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-white text-slate-800 border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40 transition-all shadow-sm hover:scale-105 active:scale-95"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 170 170">
                                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.78-11.66-14.23-6.52-10.22-11.41-21.49-14.67-33.8-3.26-12.32-4.9-23.77-4.9-34.37 0-14.13 3.69-25.75 11.07-34.85 7.38-9.1 16.63-13.79 27.75-14.07 5.01 0 10.36 1.34 16.07 4.02 5.71 2.68 9.38 4.08 11.01 4.2 2.18-.33 6.09-1.8 11.74-4.43 5.66-2.62 10.74-3.83 15.25-3.62 11.96.65 21.6 4.78 28.92 12.39-10.44 6.31-15.55 15.01-15.34 26.11.22 8.7 3.59 15.99 10.12 21.87 6.53 5.88 14.14 9.14 22.84 9.79-1.96 5.88-4.24 11.64-6.85 17.28zm-31.9-108.62c0 6.52-2.45 12.72-7.34 18.6-5.77 6.74-12.83 10.76-21.19 12.06-.22-1.3-.33-2.61-.33-3.92 0-6.74 2.61-13.16 7.83-19.25 2.61-3.05 5.87-5.65 9.79-7.83 3.91-2.18 7.61-3.48 11.1-3.92.11 1.42.14 2.84.14 4.26z"/>
                              </svg>
                              <span>App Store</span>
                              <span className="text-[11px]">↗</span>
                            </a>
                          )}
                          {project.playStoreUrl && (
                            <a
                              href={project.playStoreUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-white text-slate-800 border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/40 transition-all shadow-sm hover:scale-105 active:scale-95"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <svg className="w-3.5 h-3.5 fill-current text-emerald-600" viewBox="0 0 24 24">
                                <path d="M3.609 1.814L13.793 12 3.61 22.186a2.128 2.128 0 0 1-.61-1.493V3.307c0-.57.228-1.1.609-1.493zm11.242 11.244l2.493 2.493-12.05 6.945 9.557-9.438zm2.493-2.116l-2.493 2.493-9.557-9.438 12.05 6.945zm1.18.679l2.84 1.636c.92.53.92 1.402 0 1.932l-2.84 1.636-2.698-2.602 2.698-2.602z"/>
                              </svg>
                              <span>Play Store</span>
                              <span className="text-[11px]">↗</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right Side: Illustrative Mini-UI in Pure CSS/JSX */}
                    <div className="hidden xl:flex flex-1 min-w-[260px] max-w-[380px] rounded-2xl bg-[#f4f2ee] p-5 flex-col justify-between border border-[#0d0d0d]/10 relative overflow-hidden">
                      {/* Label tag */}
                      <div className="flex items-center justify-between pb-3 border-b border-[#0d0d0d]/10 font-mono text-[10px] text-[#77756f]">
                        <span className="uppercase">System Architecture</span>
                        <span className="px-2 py-0.5 rounded-full bg-white text-[#0d0d0d] border border-[#0d0d0d]/10">
                          Illustrative UI
                        </span>
                      </div>

                      {/* Dynamic Grayscale UI Mockup Representation */}
                      <div className="my-auto py-4">
                        <ProjectIllustrativeUI type={project.uiType} />
                      </div>

                      {/* Footer caption */}
                      <div className="pt-3 border-t border-[#0d0d0d]/10 font-mono text-[9px] text-[#a9a6a0] flex justify-between">
                        <span>CONFIDENTIAL / SHIPPED</span>
                        <span>DESIGN SYSTEM V2</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* --- MOBILE VERTICAL ACCORDION --- */}
        <div className="lg:hidden flex flex-col gap-4">
          {PROJECTS.map((project) => {
            const isOpen = activeId === project.id;

            return (
              <div
                key={project.id}
                onClick={() => setActiveId(isOpen ? "" : project.id)}
                className={`card-surface p-6 border transition-all ${
                  isOpen ? "border-indigo-300 ring-2 ring-indigo-500/20 shadow-lg" : "border-[#0d0d0d]/10 hover:border-indigo-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                      {project.index}
                    </span>
                    <h3 className="text-xl font-bold text-[#0d0d0d]">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-base font-bold font-mono text-indigo-600">{isOpen ? "−" : "+"}</span>
                </div>

                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-indigo-100 animate-in fade-in duration-300">
                    <span className="font-mono text-[10px] font-bold uppercase text-indigo-600 block mb-2">
                      {project.kicker}
                    </span>
                    <p className="text-sm leading-relaxed text-[#3a3a3a] mb-4">
                      {project.description}
                    </p>

                    <div className="space-y-2 mb-5">
                      {project.features.map((feat, i) => (
                        <div key={i} className="text-sm text-[#3a3a3a] flex items-start gap-2.5 leading-snug">
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 mt-1.5 shrink-0 shadow-xs shadow-indigo-500/40" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <div
                          key={t}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50/70 text-indigo-900 border border-indigo-200/80 shadow-xs"
                        >
                          <TechLogo name={t} size={13} />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#0d0d0d]/10">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md shadow-indigo-500/20"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Live Site</span>
                          <span className="text-[11px]">↗</span>
                        </a>
                      )}
                      {project.caseStudyUrl && (
                        <a
                          href={project.caseStudyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-300 hover:bg-amber-100 transition-all shadow-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Behance</span>
                          <span className="text-[11px]">↗</span>
                        </a>
                      )}
                      {project.appStoreUrl && (
                        <a
                          href={project.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-white text-slate-800 border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40 transition-all shadow-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 170 170">
                            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.78-11.66-14.23-6.52-10.22-11.41-21.49-14.67-33.8-3.26-12.32-4.9-23.77-4.9-34.37 0-14.13 3.69-25.75 11.07-34.85 7.38-9.1 16.63-13.79 27.75-14.07 5.01 0 10.36 1.34 16.07 4.02 5.71 2.68 9.38 4.08 11.01 4.2 2.18-.33 6.09-1.8 11.74-4.43 5.66-2.62 10.74-3.83 15.25-3.62 11.96.65 21.6 4.78 28.92 12.39-10.44 6.31-15.55 15.01-15.34 26.11.22 8.7 3.59 15.99 10.12 21.87 6.53 5.88 14.14 9.14 22.84 9.79-1.96 5.88-4.24 11.64-6.85 17.28zm-31.9-108.62c0 6.52-2.45 12.72-7.34 18.6-5.77 6.74-12.83 10.76-21.19 12.06-.22-1.3-.33-2.61-.33-3.92 0-6.74 2.61-13.16 7.83-19.25 2.61-3.05 5.87-5.65 9.79-7.83 3.91-2.18 7.61-3.48 11.1-3.92.11 1.42.14 2.84.14 4.26z"/>
                          </svg>
                          <span>App Store</span>
                          <span className="text-[11px]">↗</span>
                        </a>
                      )}
                      {project.playStoreUrl && (
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-white text-slate-800 border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/40 transition-all shadow-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-3.5 h-3.5 fill-current text-emerald-600" viewBox="0 0 24 24">
                            <path d="M3.609 1.814L13.793 12 3.61 22.186a2.128 2.128 0 0 1-.61-1.493V3.307c0-.57.228-1.1.609-1.493zm11.242 11.244l2.493 2.493-12.05 6.945 9.557-9.438zm2.493-2.116l-2.493 2.493-9.557-9.438 12.05 6.945zm1.18.679l2.84 1.636c.92.53.92 1.402 0 1.932l-2.84 1.636-2.698-2.602 2.698-2.602z"/>
                          </svg>
                          <span>Play Store</span>
                          <span className="text-[11px]">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Illustrative Pure CSS UI Component
function ProjectIllustrativeUI({ type }: { type: Project["uiType"] }) {
  switch (type) {
    case "dashboard":
      return (
        <div className="space-y-3 font-mono text-[9px]">
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 bg-white rounded-lg border border-[#0d0d0d]/10">
              <span className="text-[#a9a6a0] block">AUDITS</span>
              <span className="text-xs font-bold text-[#0d0d0d]">1,420</span>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-[#0d0d0d]/10">
              <span className="text-[#a9a6a0] block">PROOFS</span>
              <span className="text-xs font-bold text-[#0d0d0d]">99.8%</span>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-[#0d0d0d]/10">
              <span className="text-[#a9a6a0] block">TIME</span>
              <span className="text-xs font-bold text-[#0d0d0d]">-30%</span>
            </div>
          </div>
          {/* Simulated chart bars */}
          <div className="p-3 bg-white rounded-lg border border-[#0d0d0d]/10 space-y-2">
            <div className="flex justify-between text-[#77756f]">
              <span>CAMPAIGN VERIFICATION</span>
              <span>LIVE</span>
            </div>
            <div className="flex items-end gap-1.5 h-16 pt-2">
              {[40, 65, 55, 80, 70, 95, 85, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#0d0d0d]/80 rounded-t-sm"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      );

    case "mobile":
      return (
        <div className="space-y-2 font-mono text-[9px]">
          <div className="w-48 mx-auto p-3 bg-white rounded-2xl border-2 border-[#0d0d0d]/20 shadow-sm space-y-2">
            <div className="w-12 h-1.5 bg-[#0d0d0d]/20 rounded-full mx-auto" />
            <div className="h-20 bg-[#f4f2ee] rounded-xl flex items-center justify-center text-[#77756f]">
              [PRODUCT GALLERY]
            </div>
            <div className="space-y-1">
              <div className="h-2 bg-[#0d0d0d]/70 rounded w-3/4" />
              <div className="h-2 bg-[#0d0d0d]/30 rounded w-1/2" />
            </div>
            <div className="pt-2 flex justify-between items-center border-t border-[#0d0d0d]/10">
              <span className="font-bold text-[#0d0d0d]">₹2,499</span>
              <span className="px-2 py-0.5 rounded-full bg-[#0d0d0d] text-white text-[8px]">
                BUY
              </span>
            </div>
          </div>
        </div>
      );

    case "marketplace":
      return (
        <div className="space-y-2 font-mono text-[9px]">
          <div className="p-3 bg-white rounded-xl border border-[#0d0d0d]/10 space-y-2">
            <div className="flex items-center justify-between text-[#77756f]">
              <span>MACHINERY CATALOGUE</span>
              <span>DEALS ACTIVE</span>
            </div>
            <div className="space-y-1.5">
              {[
                { name: "HEIDELBERG SPEEDMASTER", spec: "4-COLOR OFFSET" },
                { name: "KOMORI LITHRONE G40", spec: "HIGH-SPEED SHEETFED" },
                { name: "BOBST DIE-CUTTER", spec: "AUTOMATIC PACKAGING" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-2 bg-[#f4f2ee] rounded-md flex justify-between items-center text-[8px]"
                >
                  <span className="font-bold text-[#0d0d0d]">{item.name}</span>
                  <span className="text-[#77756f]">{item.spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case "atlas":
      return (
        <div className="space-y-2 font-mono text-[9px]">
          <div className="p-3 bg-white rounded-xl border border-[#0d0d0d]/10 space-y-2">
            <div className="flex justify-between text-[#77756f]">
              <span>NATIONAL SEAT SHARE</span>
              <span>543 CONSTITUENCIES</span>
            </div>
            <div className="grid grid-cols-4 gap-1 py-2">
              {[80, 50, 40, 90, 60, 75, 45, 95].map((val, i) => (
                <div
                  key={i}
                  className="h-8 rounded bg-[#0d0d0d]/10 flex items-center justify-center font-bold text-[#0d0d0d]"
                  style={{ opacity: val / 100 }}
                >
                  {val}%
                </div>
              ))}
            </div>
            <div className="text-[8px] text-[#a9a6a0] text-center">
              DEMOGRAPHIC & ELECTORAL CARTOGRAPHY
            </div>
          </div>
        </div>
      );

    case "video":
      return (
        <div className="space-y-2 font-mono text-[9px]">
          <div className="p-3 bg-white rounded-xl border border-[#0d0d0d]/10 space-y-2">
            <div className="flex justify-between text-[#77756f]">
              <span>SMARTTOONKIDS MEDIA</span>
              <span>45K+ VIEWS</span>
            </div>
            <div className="h-20 bg-[#0d0d0d] text-white rounded-lg flex flex-col items-center justify-center gap-1">
              <span className="text-lg">▶</span>
              <span className="text-[8px] text-[#a9a6a0]">AI STORY ARC GENERATOR</span>
            </div>
            <div className="flex justify-between text-[8px] text-[#3a3a3a] pt-1">
              <span>LIKES: 100K+</span>
              <span>RETENTION: HIGH</span>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="p-3 bg-white rounded-xl border border-[#0d0d0d]/10 space-y-2 font-mono text-[9px]">
          <div className="flex justify-between text-[#77756f]">
            <span>ENTERPRISE SUITE</span>
            <span>ML FORECAST</span>
          </div>
          <div className="h-16 bg-[#f4f2ee] rounded flex items-center justify-center text-[#77756f]">
            PURCHASING.AI DEMAND ENGINE
          </div>
        </div>
      );
  }
}
