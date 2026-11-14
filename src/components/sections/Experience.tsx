"use client";

import React from "react";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-pad relative w-full border-t border-[#0d0d0d]/10"
    >
      <div className="page-container max-w-4xl">
        {/* Section Tag & Heading */}
        <div className="section-tag">
          <span>04</span>
          <span>—</span>
          <span>Trajectory</span>
        </div>

        <h2 className="section-heading">
          Experience &amp; <em>growth.</em>
        </h2>

        {/* Consolidated Single 9-Year Career Card */}
        <div className="card-surface p-6 sm:p-10 border border-[#0d0d0d]/15 bg-white shadow-xl mb-8">
          {/* Card Header: Overall Experience */}
          <div className="flex flex-wrap items-start justify-between gap-3 pb-6 border-b border-[#0d0d0d]/10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0d0d0d]">
                Hashbrown Systems Pvt. Ltd.
              </h3>
              <p className="text-xs sm:text-sm text-[#77756f] mt-1.5 font-normal">
                Chandigarh, India · Apr 2017 – Present ·{" "}
                <span className="font-semibold text-[#0d0d0d]">9 Years</span>
              </p>
            </div>

            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Present</span>
            </span>
          </div>

          {/* Connected Progressive Roles Timeline */}
          <div className="pt-8 space-y-6 sm:space-y-8">
            {/* 1. Senior UI/UX Designer */}
            <div className="relative flex items-start gap-4 sm:gap-6 group">
              <div className="flex flex-col items-center shrink-0">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0d0d0d] text-white flex items-center justify-center font-mono text-xs sm:text-sm font-bold shadow-sm">
                  1
                </span>
                <div className="w-[2px] bg-[#0d0d0d]/15 h-full min-h-[80px] mt-2" />
              </div>

              <div className="flex-1 pb-3">
                <h4 className="text-lg sm:text-xl font-bold text-[#0d0d0d]">
                  Senior UI/UX Designer
                </h4>
                <span className="text-xs font-mono text-[#77756f] block mb-2.5">
                  Apr 2024 – Present
                </span>

                <ul className="space-y-1.5 text-xs sm:text-sm text-[#3a3a3a] leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] mt-2 shrink-0" />
                    <span>
                      UI/UX design for web applications, mobile apps and SaaS products.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] mt-2 shrink-0" />
                    <span>
                      Design systems, prototyping, user flows and dashboards.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Senior Graphic Designer */}
            <div className="relative flex items-start gap-4 sm:gap-6 group">
              <div className="flex flex-col items-center shrink-0">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0d0d0d] text-white flex items-center justify-center font-mono text-xs sm:text-sm font-bold shadow-sm">
                  2
                </span>
                <div className="w-[2px] bg-[#0d0d0d]/15 h-full min-h-[80px] mt-2" />
              </div>

              <div className="flex-1 pb-3">
                <h4 className="text-lg sm:text-xl font-bold text-[#0d0d0d]">
                  Senior Graphic Designer
                </h4>
                <span className="text-xs font-mono text-[#77756f] block mb-2.5">
                  Apr 2019 – Mar 2024
                </span>

                <ul className="space-y-1.5 text-xs sm:text-sm text-[#3a3a3a] leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] mt-2 shrink-0" />
                    <span>
                      Brand identity, visual communication and marketing design.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] mt-2 shrink-0" />
                    <span>
                      Digital illustrations and product marketing creatives.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. Junior Graphic Designer / Graphic Designer */}
            <div className="relative flex items-start gap-4 sm:gap-6 group">
              <div className="flex flex-col items-center shrink-0">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0d0d0d] text-white flex items-center justify-center font-mono text-xs sm:text-sm font-bold shadow-sm">
                  3
                </span>
              </div>

              <div className="flex-1">
                <h4 className="text-lg sm:text-xl font-bold text-[#0d0d0d]">
                  Junior Graphic Designer / Graphic Designer
                </h4>
                <span className="text-xs font-mono text-[#77756f] block mb-2.5">
                  Apr 2017 – Mar 2019
                </span>

                <ul className="space-y-1.5 text-xs sm:text-sm text-[#3a3a3a] leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] mt-2 shrink-0" />
                    <span>
                      Graphic design, layouts, branding and creative assets.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education Companion Card */}
        <div className="card-surface p-6 sm:p-8 border border-[#0d0d0d]/10 bg-white/90 mb-8">
          <div className="flex items-center justify-between pb-4 border-b border-[#0d0d0d]/10 mb-5">
            <h3 className="text-lg sm:text-xl font-bold text-[#0d0d0d]">
              Education &amp; Academic Background
            </h3>
            <span className="font-mono text-[10px] uppercase text-[#77756f] bg-[#f4f2ee] px-2.5 py-1 rounded-full border border-[#0d0d0d]/5">
              Academics
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#f4f2ee] border border-[#0d0d0d]/5">
              <span className="font-mono text-xs text-[#77756f] block mb-1">
                2011 – 2014
              </span>
              <h4 className="text-sm sm:text-base font-bold text-[#0d0d0d] mb-1">
                B.Tech, Computer Science &amp; Engineering
              </h4>
              <p className="text-xs text-[#77756f]">Punjab Technical University</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#f4f2ee] border border-[#0d0d0d]/5">
              <span className="font-mono text-xs text-[#77756f] block mb-1">
                2008 – 2011
              </span>
              <h4 className="text-sm sm:text-base font-bold text-[#0d0d0d] mb-1">
                Diploma, Computer Science
              </h4>
              <p className="text-xs text-[#77756f]">State Board of Technical Education</p>
            </div>
          </div>
        </div>

        {/* Closing Future Card */}
        <div className="p-6 sm:p-8 rounded-[26px] border-2 border-dashed border-[#0d0d0d]/20 bg-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase text-[#77756f] block mb-1">
              Future
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-[#0d0d0d]">
              Next — Your team?
            </h4>
            <p className="text-xs sm:text-sm text-[#77756f] mt-1">
              Available for Remote, Hybrid, or Full-Time senior design leadership roles.
            </p>
          </div>

          <a href="#contact" className="btn-primary text-xs shrink-0">
            Let&apos;s Connect ↗
          </a>
        </div>
      </div>
    </section>
  );
}
