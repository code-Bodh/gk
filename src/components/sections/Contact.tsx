"use client";

import React, { useState } from "react";
import { PROFILE } from "@/lib/data";
import { useScroll } from "@/lib/scroll";

export function Contact() {
  const { scrollTo } = useScroll();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const line1 = "Let's build";
  const line2 = "something together.";

  return (
    <section id="contact" className="section-pad relative w-full border-t border-[#0d0d0d]/10">
      <div className="page-container">
        {/* Section Tag */}
        <div className="section-tag">
          <span>06</span>
          <span>—</span>
          <span>Contact</span>
        </div>

        {/* Animated Letter Hop Heading */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#0d0d0d] leading-none select-none">
            <div className="flex flex-wrap">
              {line1.split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block transition-all duration-200 hover:-translate-y-3 hover:text-indigo-600 cursor-default"
                  style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                >
                  {char}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap mt-2">
              {line2.split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block transition-all duration-200 hover:-translate-y-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 cursor-default"
                  style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                >
                  {char}
                </span>
              ))}
            </div>
          </h2>
        </div>

        {/* Contact Links & Spinning Badge Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end mb-20">
          <div>
            <span className="font-mono text-xs uppercase font-bold text-indigo-600 block mb-3">
              Direct Inquiries
            </span>

            {/* Large Underlined Email + Copy Chip */}
            <div className="flex flex-wrap items-baseline gap-4 mb-6">
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-2xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 hover:from-indigo-600 hover:to-pink-600 underline decoration-indigo-400 decoration-2 underline-offset-8 transition-all"
              >
                {PROFILE.email}
              </a>

              <button
                onClick={handleCopyEmail}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all shadow-sm ${
                  copied
                    ? "bg-emerald-600 text-white border border-emerald-500 shadow-emerald-500/30 scale-105"
                    : "bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:border-transparent"
                }`}
                aria-label="Copy email address"
              >
                {copied ? "Copied ✓" : "Copy Email"}
              </button>
              {/* Screen reader live announcement */}
              <div aria-live="polite" className="sr-only">
                {copied ? "Email address copied to clipboard" : ""}
              </div>
            </div>

            {/* Phone & Authentic Design Channels */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold pt-2">
              <a
                href={PROFILE.phoneHref}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors shadow-2xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Call: {PROFILE.phone}</span>
              </a>

              {PROFILE.linkedin && (
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0077b5]/10 text-[#0077b5] border border-[#0077b5]/30 hover:bg-[#0077b5] hover:text-white transition-all shadow-2xs"
                >
                  <span>LinkedIn ↗</span>
                </a>
              )}

              {PROFILE.behance && (
                <a
                  href={PROFILE.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0057ff]/10 text-[#0057ff] border border-[#0057ff]/30 hover:bg-[#0057ff] hover:text-white transition-all shadow-2xs"
                >
                  <span>Behance ↗</span>
                </a>
              )}

              {PROFILE.pinterest && (
                <a
                  href={PROFILE.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e60023]/10 text-[#e60023] border border-[#e60023]/30 hover:bg-[#e60023] hover:text-white transition-all shadow-2xs"
                >
                  <span>Pinterest ↗</span>
                </a>
              )}

              {PROFILE.instagram && (
                <a
                  href={PROFILE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all shadow-2xs"
                >
                  <span>Instagram ↗</span>
                </a>
              )}
            </div>
          </div>

          {/* Spinning Circular "SAY HELLO" Badge */}
          <div className="relative w-32 h-32 flex items-center justify-center select-none">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full animate-[spin_12s_linear_infinite]"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text className="text-[10px] font-mono font-bold tracking-[0.22em] uppercase fill-indigo-900">
                <textPath xlinkHref="#circlePath">
                  · SAY HELLO · GET IN TOUCH · DESIGN
                </textPath>
              </text>
            </svg>
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-indigo-500/40 hover:scale-110 transition-transform">
              ↗
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-8 border-t border-[#0d0d0d]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#77756f]">
          <div>
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Built with Next.js &amp; Tailwind</span>
            <button
              onClick={() => scrollTo("#hero")}
              className="hover:text-[#0d0d0d] underline decoration-dotted"
            >
              Back to top ↑
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}
