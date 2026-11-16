"use client";

import React, { useRef, useState, useEffect } from "react";
import { ACHIEVEMENTS } from "@/lib/data";

export function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="section-pad relative w-full border-t border-[#0d0d0d]/10"
    >
      <div className="page-container">
        {/* Section Header */}
        <div className="section-tag">
          <span>05</span>
          <span>—</span>
          <span>Milestones</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="section-heading mb-3">
              Proven metrics &amp; <em>real scale.</em>
            </h2>
            <p className="text-sm sm:text-base text-[#77756f] max-w-xl font-normal leading-relaxed">
              Design is more than visuals — it is measurable business impact. Here is what 9+ years of craft has delivered in production.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto font-mono text-xs text-[#0d0d0d] bg-white border border-[#0d0d0d]/10 px-4 py-2 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Verified Production Impact</span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 (Spans 2 cols on desktop for visual rhythm) */}
          <div className="lg:col-span-2 card-surface p-8 sm:p-10 flex flex-col justify-between border border-indigo-200/80 bg-gradient-to-br from-white via-indigo-50/20 to-purple-50/30 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-8">
              <span className="font-mono text-[11px] uppercase text-indigo-700 bg-indigo-100/70 px-3.5 py-1 rounded-full border border-indigo-200 font-bold">
                UI/UX Leadership · Hashbrown Systems
              </span>
              <span className="font-mono text-xs text-indigo-400 font-bold">01 / 06</span>
            </div>

            <div className="my-auto">
              <div className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 font-sans flex items-baseline">
                <Counter target={9} active={hasAnimated} suffix="+" />
                <span className="text-2xl sm:text-3xl font-serif italic text-purple-700 ml-3 font-normal">
                  Years of Craft
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0d0d0d] mb-2">
                From Junior Designer to Product Design Lead
              </h3>
              <p className="text-sm text-[#52504b] leading-relaxed max-w-2xl">
                Led end-to-end design across 10+ live platforms — driving user research, wireframing, high-fidelity prototypes, component design systems, and seamless developer handoff.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-indigo-100 flex flex-wrap items-center gap-2 font-mono text-[10px] text-slate-600">
              <span className="font-bold text-indigo-900">Key Focus:</span>
              <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-medium">Design Systems</span>
              <span>·</span>
              <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-medium">Web &amp; Mobile Architecture</span>
              <span>·</span>
              <span className="px-2 py-0.5 rounded bg-pink-50 text-pink-700 font-medium">Team Mentorship</span>
            </div>
          </div>

          {/* Card 2: 10+ Live Products */}
          <div className="card-surface p-8 sm:p-10 flex flex-col justify-between border border-emerald-200/80 bg-gradient-to-br from-white to-emerald-50/30 hover:border-emerald-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-8">
              <span className="font-mono text-[11px] uppercase text-emerald-800 bg-emerald-100/70 px-3.5 py-1 rounded-full border border-emerald-200 font-bold">
                Scale &amp; Breadth
              </span>
              <span className="font-mono text-xs text-emerald-400 font-bold">02 / 06</span>
            </div>

            <div className="my-auto">
              <div className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-3 font-sans">
                <Counter target={10} active={hasAnimated} suffix="+" />
              </div>
              <h3 className="text-lg font-bold text-[#0d0d0d] mb-2">
                Live Products Shipped
              </h3>
              <p className="text-xs sm:text-sm text-[#52504b] leading-relaxed">
                Active in production across eCommerce, outdoor media audit, B2B marketplaces, and enterprise SaaS.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-emerald-100 font-mono text-[10px] text-emerald-700 flex items-center gap-1.5 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Available on iOS, Android &amp; Web</span>
            </div>
          </div>

          {/* Card 3: ~30% Task Completion */}
          <div className="card-surface p-8 sm:p-10 flex flex-col justify-between border border-rose-200/80 bg-gradient-to-br from-white to-rose-50/30 hover:border-rose-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-8">
              <span className="font-mono text-[11px] uppercase text-rose-800 bg-rose-100/70 px-3.5 py-1 rounded-full border border-rose-200 font-bold">
                Efficiency Boost
              </span>
              <span className="font-mono text-xs text-rose-400 font-bold">03 / 06</span>
            </div>

            <div className="my-auto">
              <div className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent mb-3 font-sans">
                <Counter target={30} active={hasAnimated} prefix="~" suffix="%" />
              </div>
              <h3 className="text-lg font-bold text-[#0d0d0d] mb-2">
                Faster Task Execution
              </h3>
              <p className="text-xs sm:text-sm text-[#52504b] leading-relaxed">
                Measured speedup through redesigned data visualization, dense dashboards, and simplified operational workflows.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-rose-100 font-mono text-[10px] text-rose-700 font-semibold">
              Platform: OOH Audit &amp; Meridian Portals
            </div>
          </div>

          {/* Card 4: SmartToonKids 2D Animated Channel & Video Production */}
          <div className="card-surface p-8 sm:p-10 flex flex-col justify-between border border-amber-200/80 bg-gradient-to-br from-white to-amber-50/30 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-8">
              <span className="font-mono text-[11px] uppercase text-amber-800 bg-amber-100/70 px-3.5 py-1 rounded-full border border-amber-200 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span>Animation &amp; Video Craft</span>
              </span>
              <span className="font-mono text-xs text-amber-400 font-bold">04 / 06</span>
            </div>

            <div className="my-auto">
              <div className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent mb-3 font-sans">
                <Counter target={45} active={hasAnimated} suffix="K+" />
              </div>
              <h3 className="text-lg font-bold text-[#0d0d0d] mb-2">
                SmartToonKids Animated Series
              </h3>
              <p className="text-xs sm:text-sm text-[#52504b] leading-relaxed mb-4">
                End-to-end 2D animation, storyboarding, original character design, voiceover sync, and sound direction for educational video content.
              </p>

              <div className="flex flex-wrap gap-1.5">
                {[
                  "2D Animation",
                  "Storyboarding",
                  "Character Design",
                  "Motion Direction",
                  "Audio Sync",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 font-mono text-[10px] text-amber-900 font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-amber-100 font-mono text-[10px] text-amber-800 flex items-center justify-between font-semibold">
              <span>Channel: 45K+ Views · 100K+ Likes</span>
              <a
                href="https://www.instagram.com/smarttoonkids/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 underline font-bold hover:text-pink-700"
              >
                Watch on Instagram ↗
              </a>
            </div>
          </div>

          {/* Card 5: AI-Accelerated Design Suite */}
          <div className="card-surface p-8 sm:p-10 flex flex-col justify-between border border-purple-200/80 bg-gradient-to-br from-white to-purple-50/30 hover:border-purple-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-6">
              <span className="font-mono text-[11px] uppercase text-purple-800 bg-purple-100/70 px-3.5 py-1 rounded-full border border-purple-200 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                <span>Next-Gen Workflow</span>
              </span>
              <span className="font-mono text-xs text-purple-400 font-bold">05 / 06</span>
            </div>

            <div className="my-auto">
              <div className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 bg-clip-text text-transparent mb-3 font-sans">
                <Counter target={7} active={hasAnimated} suffix="+" />
              </div>
              <h3 className="text-lg font-bold text-[#0d0d0d] mb-2">
                AI Tools in Daily Craft
              </h3>
              <p className="text-xs sm:text-sm text-[#52504b] leading-relaxed mb-4">
                Augmenting research, rapid wireframing, copywriting, and visual asset iteration with next-gen AI tools.
              </p>

              {/* AI Tool Chips */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  "ChatGPT",
                  "Claude",
                  "Gemini",
                  "Antigravity",
                  "Meta AI",
                  "Stitch",
                  "Nano Banana",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 rounded-md bg-purple-50 border border-purple-200 font-mono text-[10px] text-purple-900 font-semibold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-purple-100 font-mono text-[10px] text-purple-800 font-semibold">
              Workflow: 3x Faster Exploration &amp; Research Synthesis
            </div>
          </div>

          {/* Card 6: 100% Engineering Alignment (Spans 3 cols on desktop for strong closing) */}
          <div className="lg:col-span-3 card-surface p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-indigo-200/80 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-indigo-50/60 via-purple-50/40 to-pink-50/60">
            <div className="max-w-2xl">
              <span className="font-mono text-[10px] uppercase text-indigo-700 font-bold block mb-2">
                Handoff &amp; Collaboration
              </span>
              <h3 className="text-2xl font-extrabold text-[#0d0d0d] mb-2">
                100% Developer-Aligned Design Systems
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                I bridge the gap between design and development by delivering production-ready tokens, modular variants, and pixel-precise responsive specs in Figma.
              </p>
            </div>

            <a
              href="#contact"
              className="btn-primary text-xs shrink-0 self-start md:self-center"
            >
              Start a Conversation ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({
  target,
  active,
  prefix = "",
  suffix = "",
}: {
  target: number;
  active: boolean;
  prefix?: string;
  suffix?: string;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1200;
    const start = performance.now();
    let id: number;

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) id = requestAnimationFrame(tick);
    };

    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [active, target]);

  return (
    <span>
      {prefix}
      {active ? val : 0}
      {suffix}
    </span>
  );
}
