"use client";

import React from "react";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-pad relative w-full border-t border-[#0d0d0d]/10"
    >
      <div className="page-container">
        {/* Section Tag & Heading (Left-Aligned) */}
        <div className="section-tag">
          <span>04</span>
          <span>—</span>
          <span>Trajectory</span>
        </div>

        <h2 className="section-heading">
          Experience &amp; <em>growth.</em>
        </h2>

        {/* Left-Aligned Container */}
        <div className="max-w-4xl text-left">
          {/* Consolidated 9-Year Single Company Card */}
          <div className="card-surface p-7 sm:p-10 border border-[#0d0d0d]/15 bg-white shadow-xl mb-10">
            {/* Card Header: Overall Experience */}
            <div className="flex flex-wrap items-start justify-between gap-3 pb-6 border-b border-[#0d0d0d]/10">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0d0d0d]">
                  Hashbrown Systems Pvt. Ltd.
                </h3>
                <p className="text-sm text-[#77756f] mt-1.5 font-normal">
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
            <div className="pt-8 space-y-10">
              {/* 1. Senior UI/UX Designer */}
              <div className="relative flex items-start gap-4 sm:gap-6 group">
                <div className="flex flex-col items-center shrink-0">
                  <span className="w-8 h-8 rounded-full bg-[#0d0d0d] text-white flex items-center justify-center font-mono text-sm font-bold shadow-sm">
                    1
                  </span>
                  <div className="w-[2px] bg-[#0d0d0d]/15 h-full min-h-[140px] mt-2" />
                </div>

                <div className="flex-1 pb-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h4 className="text-xl sm:text-2xl font-bold text-[#0d0d0d]">
                      Senior UI/UX Designer
                    </h4>
                    <span className="text-xs font-mono text-[#77756f]">
                      Apr 2024 – Present · 2 yrs 8 mos
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#77756f] mb-3">
                    Lead product designer overseeing web applications, mobile apps, SaaS dashboards, and design systems.
                  </p>

                  <ul className="space-y-2.5 text-sm text-[#3a3a3a] leading-relaxed mb-4">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] mt-2 shrink-0" />
                      <span>
                        Lead end-to-end product design across 10+ live platforms spanning enterprise SaaS, IoT field tracking, B2B marketplaces, and luxury eCommerce.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] mt-2 shrink-0" />
                      <span>
                        Architected and maintain scalable design systems in Figma with design tokens, auto-layout, variables, and responsive components, accelerating frontend handoff by ~40%.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] mt-2 shrink-0" />
                      <span>
                        Redesigned data-dense analytics dashboards and real-time field tracking workflows (OOH Audit &amp; Meridian), improving complex task completion times by ~30%.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] mt-2 shrink-0" />
                      <span>
                        Engineered frictionless checkout and catalog browsing journeys for Eikaebana eCommerce, delivering a verified ~15–20% conversion lift across iOS and Android.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] mt-2 shrink-0" />
                      <span>
                        Drive user research, journey mapping, wireframing, and interactive prototypes while collaborating directly with engineering and client leadership.
                      </span>
                    </li>
                  </ul>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#0d0d0d]/10">
                    <span className="text-xs mr-1 text-[#77756f]">Key Skills:</span>
                    {[
                      "Figma",
                      "Design Systems",
                      "SaaS Dashboards",
                      "User Research",
                      "Mobile Apps (iOS & Android)",
                      "Design Tokens",
                      "Prototyping",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md bg-[#f4f2ee] font-mono text-[11px] text-[#3a3a3a] border border-[#0d0d0d]/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2. Senior Graphic Designer */}
              <div className="relative flex items-start gap-4 sm:gap-6 group">
                <div className="flex flex-col items-center shrink-0">
                  <span className="w-8 h-8 rounded-full bg-[#0d0d0d] text-white flex items-center justify-center font-mono text-sm font-bold shadow-sm">
                    2
                  </span>
                  <div className="w-[2px] bg-[#0d0d0d]/15 h-full min-h-[140px] mt-2" />
                </div>

                <div className="flex-1 pb-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h4 className="text-xl sm:text-2xl font-bold text-[#0d0d0d]">
                      Senior Graphic Designer
                    </h4>
                    <span className="text-xs font-mono text-[#77756f]">
                      Apr 2019 – Mar 2024 · 5 yrs 1 mo
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#77756f] mb-3">
                    Directed brand identities, visual communication, investor pitch decks, and digital creative campaigns.
                  </p>

                  <ul className="space-y-2.5 text-sm text-[#3a3a3a] leading-relaxed mb-4">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] mt-2 shrink-0" />
                      <span>
                        Directed end-to-end visual identities, brand systems, corporate collateral, and multi-channel marketing campaigns across digital and print touchpoints for 15+ corporate clients.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] mt-2 shrink-0" />
                      <span>
                        Authored high-conversion pitch decks, investor presentations, and product marketing collateral that supported client acquisition and strategic funding rounds.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] mt-2 shrink-0" />
                      <span>
                        Created custom vector illustration systems, scalable iconography sets, and digital brand guidelines to ensure unified aesthetic standards across web, mobile, and print.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] mt-2 shrink-0" />
                      <span>
                        Supervised creative sprints, mentored junior team members, and collaborated closely with founders and product managers to translate complex business goals into memorable visual design.
                      </span>
                    </li>
                  </ul>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#0d0d0d]/10">
                    <span className="text-xs mr-1 text-[#77756f]">Key Skills:</span>
                    {[
                      "Adobe Photoshop",
                      "Adobe Illustrator",
                      "Brand Identity",
                      "Pitch Decks",
                      "Visual Communication",
                      "Vector Illustration",
                      "Marketing Collateral",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md bg-[#f4f2ee] font-mono text-[11px] text-[#3a3a3a] border border-[#0d0d0d]/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Junior Graphic Designer / Graphic Designer */}
              <div className="relative flex items-start gap-4 sm:gap-6 group">
                <div className="flex flex-col items-center shrink-0">
                  <span className="w-8 h-8 rounded-full bg-[#0d0d0d] text-white flex items-center justify-center font-mono text-sm font-bold shadow-sm">
                    3
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h4 className="text-xl sm:text-2xl font-bold text-[#0d0d0d]">
                      Junior Graphic Designer / Graphic Designer
                    </h4>
                    <span className="text-xs font-mono text-[#77756f]">
                      Apr 2017 – Mar 2019 · 2 yrs 3 mos
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#77756f] mb-3">
                    Crafted foundational digital creatives, marketing banners, social campaigns, and print collateral.
                  </p>

                  <ul className="space-y-2.5 text-sm text-[#3a3a3a] leading-relaxed mb-4">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] mt-2 shrink-0" />
                      <span>
                        Designed foundational digital marketing creatives, social media ad sets, email newsletters, responsive web banners, and editorial print layouts.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] mt-2 shrink-0" />
                      <span>
                        Developed vector assets, infographics, logo iterations, and brand identity collateral adhering to strict client brand books and guidelines.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] mt-2 shrink-0" />
                      <span>
                        Maintained rapid turnaround on daily design deliverables, collaborating closely with senior designers to master typography, color theory, grid systems, and layout polish.
                      </span>
                    </li>
                  </ul>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#0d0d0d]/10">
                    <span className="text-xs mr-1 text-[#77756f]">Key Skills:</span>
                    {[
                      "Graphic Design",
                      "Social Media Creatives",
                      "Typography",
                      "Layout Design",
                      "Vector Graphics",
                      "Infographics",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md bg-[#f4f2ee] font-mono text-[11px] text-[#3a3a3a] border border-[#0d0d0d]/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Companion Card (Left-Aligned) */}
          <div className="card-surface p-7 sm:p-8 border border-[#0d0d0d]/10 bg-white/90 mb-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#0d0d0d]/10 mb-5">
              <h3 className="text-xl font-bold text-[#0d0d0d]">
                Education &amp; Academic Foundation
              </h3>
              <span className="font-mono text-[10px] uppercase text-[#77756f] bg-[#f4f2ee] px-2.5 py-1 rounded-full border border-[#0d0d0d]/5">
                Academics
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#f4f2ee] border border-[#0d0d0d]/5">
                <span className="font-mono text-xs text-[#77756f] block mb-1">
                  2011 – 2014
                </span>
                <h4 className="text-base font-bold text-[#0d0d0d] mb-1">
                  B.Tech, Computer Science &amp; Engineering
                </h4>
                <p className="text-xs text-[#77756f]">Punjab Technical University</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#f4f2ee] border border-[#0d0d0d]/5">
                <span className="font-mono text-xs text-[#77756f] block mb-1">
                  2008 – 2011
                </span>
                <h4 className="text-base font-bold text-[#0d0d0d] mb-1">
                  Diploma, Computer Science
                </h4>
                <p className="text-xs text-[#77756f]">State Board of Technical Education</p>
              </div>
            </div>
          </div>

          {/* Closing Future Card (Left-Aligned) */}
          <div className="p-7 sm:p-8 rounded-[26px] border-2 border-dashed border-[#0d0d0d]/20 bg-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
      </div>
    </section>
  );
}
