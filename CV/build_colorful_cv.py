#!/usr/bin/env python3
"""
CV/build_colorful_cv.py
Generates an executive, colorful, designer-grade CV matching the portfolio theme:
- Warm paper canvas & modern card surfaces
- Vibrant accents: Electric Indigo, Coral Rose, Emerald Green, Amber Gold, Cyan
- High-impact metrics ribbon
- Comprehensive live products, skills, and experience
- Compiles via headless Chrome into public/resume.pdf and CV/resume.pdf
- Renders page_1.png and page_2.png for visual verification
"""

import os
import subprocess
import base64

CV_DIR = "/Users/pardeeppatel/Documents/Antigravity/Gurpreet-v2/CV"
PUBLIC_DIR = "/Users/pardeeppatel/Documents/Antigravity/Gurpreet-v2/public"
HTML_PATH = os.path.join(CV_DIR, "resume.html")
PDF_CV_PATH = os.path.join(CV_DIR, "resume.pdf")
PDF_PUBLIC_PATH = os.path.join(PUBLIC_DIR, "resume.pdf")

with open(os.path.join(CV_DIR, "avatar_bust.png"), "rb") as f:
    avatar_b64 = base64.b64encode(f.read()).decode("utf-8")
avatar_data_uri = f"data:image/png;base64,{avatar_b64}"

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Gurpreet Kaur — Senior UI/UX & Graphic Designer CV</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

    @page {
      size: A4 portrait;
      margin: 0;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background-color: #f6f5f1;
      color: #0d0d0d;
      line-height: 1.42;
      -webkit-font-smoothing: antialiased;
    }

    .page {
      width: 210mm;
      height: 297mm;
      min-height: 297mm;
      max-height: 297mm;
      padding: 14mm 15mm;
      margin: 0 auto;
      background: #f6f5f1;
      position: relative;
      overflow: hidden;
      page-break-after: always;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    /* Subtle top accent bar */
    .top-accent-bar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: linear-gradient(90deg, #6366f1 0%, #ec4899 35%, #f59e0b 70%, #10b981 100%);
    }

    /* HEADER */
    .header-card {
      background: #ffffff;
      border-radius: 18px;
      padding: 16px 20px;
      border: 1px solid rgba(13, 13, 13, 0.08);
      box-shadow: 0 4px 16px rgba(13, 13, 13, 0.03);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      margin-bottom: 12px;
    }

    .header-left {
      flex: 1;
    }

    .name-title-row {
      display: flex;
      align-items: baseline;
      gap: 12px;
      margin-bottom: 3px;
    }

    h1.name {
      font-size: 26px;
      font-weight: 800;
      letter-spacing: -0.6px;
      color: #0d0d0d;
      line-height: 1.1;
    }

    .role-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(236, 72, 153, 0.12) 100%);
      color: #4f46e5;
      font-weight: 700;
      font-size: 11px;
      padding: 3px 10px;
      border-radius: 9999px;
      border: 1px solid rgba(99, 102, 241, 0.25);
      letter-spacing: 0.2px;
      text-transform: uppercase;
    }

    .headline {
      font-size: 12px;
      font-weight: 500;
      color: #64748b;
      margin-bottom: 9px;
    }

    .contact-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      padding: 3px 9px;
      border-radius: 8px;
      font-size: 10px;
      font-weight: 500;
      color: #334155;
      text-decoration: none;
    }

    .pill-icon {
      width: 12px;
      height: 12px;
      display: inline-block;
      vertical-align: middle;
    }

    .pill-highlight {
      background: #eff6ff;
      border-color: #bfdbfe;
      color: #1d4ed8;
      font-weight: 600;
    }

    .avatar-wrapper {
      position: relative;
      width: 84px;
      height: 84px;
      border-radius: 50%;
      background: linear-gradient(135deg, #6366f1, #ec4899);
      padding: 3px;
      flex-shrink: 0;
    }

    .avatar-img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      background: #ffffff;
    }

    .status-dot {
      position: absolute;
      bottom: 2px;
      right: 2px;
      width: 12px;
      height: 12px;
      background: #10b981;
      border: 2px solid #ffffff;
      border-radius: 50%;
    }

    /* METRICS STRIP */
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 9px;
      margin-bottom: 12px;
    }

    .metric-card {
      background: #ffffff;
      border-radius: 13px;
      padding: 8px 12px;
      border: 1px solid rgba(13, 13, 13, 0.07);
      box-shadow: 0 2px 8px rgba(13, 13, 13, 0.02);
      display: flex;
      align-items: center;
      gap: 10px;
      position: relative;
      overflow: hidden;
    }

    .metric-card::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3.5px;
    }

    .m-indigo::before { background: #6366f1; }
    .m-emerald::before { background: #10b981; }
    .m-rose::before { background: #ec4899; }
    .m-amber::before { background: #f59e0b; }

    .metric-val {
      font-size: 19px;
      font-weight: 800;
      letter-spacing: -0.5px;
      line-height: 1;
    }
    .m-indigo .metric-val { color: #4338ca; }
    .m-emerald .metric-val { color: #047857; }
    .m-rose .metric-val { color: #be185d; }
    .m-amber .metric-val { color: #b45309; }

    .metric-label {
      font-size: 9.5px;
      font-weight: 600;
      color: #64748b;
      line-height: 1.2;
      text-transform: uppercase;
      letter-spacing: 0.2px;
    }

    /* TWO COLUMN LAYOUT */
    .main-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 12px;
      flex: 1;
    }

    .section-card {
      background: #ffffff;
      border-radius: 15px;
      padding: 13px 16px;
      border: 1px solid rgba(13, 13, 13, 0.08);
      box-shadow: 0 2px 10px rgba(13, 13, 13, 0.02);
      margin-bottom: 11px;
    }

    .section-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;
      border-bottom: 1.5px solid #f1f5f9;
      padding-bottom: 6px;
    }

    .section-icon {
      width: 17px;
      height: 17px;
      padding: 3.5px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon-indigo { background: rgba(99, 102, 241, 0.15); color: #4f46e5; }
    .icon-emerald { background: rgba(16, 185, 129, 0.15); color: #059669; }
    .icon-rose { background: rgba(236, 72, 153, 0.15); color: #db2777; }
    .icon-amber { background: rgba(245, 158, 11, 0.15); color: #d97706; }
    .icon-cyan { background: rgba(6, 182, 212, 0.15); color: #0891b2; }

    .section-title {
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #0f172a;
    }

    /* SUMMARY */
    .summary-text {
      font-size: 10.5px;
      color: #334155;
      line-height: 1.48;
    }

    .summary-quote {
      margin-top: 7px;
      padding: 6px 10px;
      background: linear-gradient(90deg, rgba(99, 102, 241, 0.06) 0%, rgba(246, 245, 241, 0.4) 100%);
      border-left: 3px solid #6366f1;
      border-radius: 4px;
      font-size: 9.8px;
      font-style: italic;
      color: #475569;
    }

    /* EXPERIENCE */
    .job-item {
      margin-bottom: 8px;
    }

    .job-title-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 2px;
    }

    .job-title {
      font-size: 11.8px;
      font-weight: 700;
      color: #0f172a;
    }

    .job-company {
      font-size: 11px;
      font-weight: 600;
      color: #4f46e5;
    }

    .job-date {
      font-size: 9.5px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      color: #64748b;
      background: #f1f5f9;
      padding: 2px 7px;
      border-radius: 5px;
    }

    .bullet-list {
      list-style: none;
      padding: 0;
      margin-top: 5px;
    }

    .bullet-list li {
      font-size: 10px;
      color: #334155;
      line-height: 1.42;
      position: relative;
      padding-left: 13px;
      margin-bottom: 4.5px;
    }

    .bullet-list li::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: #6366f1;
      font-size: 11px;
      line-height: 1;
    }

    .metric-badge {
      font-weight: 700;
      color: #047857;
      background: #d1fae5;
      padding: 1px 4px;
      border-radius: 4px;
      font-size: 9.5px;
    }

    /* SKILL BADGES */
    .skill-block {
      margin-bottom: 8px;
    }

    .skill-category-label {
      font-size: 9.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.3px;
      color: #64748b;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .tag-cluster {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }

    .tag {
      font-size: 9.5px;
      padding: 2.5px 7px;
      border-radius: 6px;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 3px;
    }

    .tag-blue { background: #eff6ff; color: #1e40af; border: 1px solid #dbeafe; }
    .tag-purple { background: #f5f3ff; color: #5b21b6; border: 1px solid #ede9fe; }
    .tag-pink { background: #fdf2f8; color: #9d174d; border: 1px solid #fce7f3; }
    .tag-emerald { background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; }
    .tag-amber { background: #fffbeb; color: #92400e; border: 1px solid #fde68a; }

    /* FOOTER */
    .cv-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 9px;
      color: #94a3b8;
      font-family: 'JetBrains Mono', monospace;
      border-top: 1px solid rgba(13, 13, 13, 0.08);
      padding-top: 6px;
      margin-top: 4px;
    }

    /* PAGE 2 SPECIFICS */
    .project-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-bottom: 10px;
    }

    .project-card {
      background: #ffffff;
      border-radius: 14px;
      padding: 12px 14px;
      border: 1px solid rgba(13, 13, 13, 0.08);
      box-shadow: 0 2px 8px rgba(13, 13, 13, 0.02);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
    }

    .project-header-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 4px;
    }

    .project-title {
      font-size: 11.5px;
      font-weight: 700;
      color: #0f172a;
    }

    .project-badge {
      font-size: 8.5px;
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 4px;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }

    .badge-live { background: #dcfce7; color: #15803d; }
    .badge-case { background: #e0e7ff; color: #4338ca; }
    .badge-social { background: #fce7f3; color: #be185d; }

    .project-desc {
      font-size: 9.8px;
      color: #475569;
      line-height: 1.4;
      margin-bottom: 6px;
    }

    .project-links {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 4px;
    }

    .link-pill {
      font-size: 8.5px;
      font-weight: 600;
      padding: 2px 6px;
      border-radius: 4px;
      background: #f8fafc;
      color: #4f46e5;
      text-decoration: none;
      border: 1px solid #e2e8f0;
      display: inline-flex;
      align-items: center;
      gap: 3px;
    }

    .process-timeline {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 6px;
      margin-top: 6px;
    }

    .process-step {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 9px;
      padding: 7px 6px;
      text-align: center;
    }

    .step-num {
      font-size: 9px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      color: #6366f1;
    }

    .step-title {
      font-size: 9.5px;
      font-weight: 700;
      color: #0f172a;
      margin: 1px 0;
    }

    .step-desc {
      font-size: 8px;
      color: #64748b;
      line-height: 1.25;
    }

    .edu-item {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 6px 0;
      border-bottom: 1px dashed #e2e8f0;
    }
    .edu-item:last-child { border-bottom: none; }

    .edu-degree { font-size: 11px; font-weight: 700; color: #0f172a; }
    .edu-field { font-size: 10px; color: #64748b; font-weight: 500; }
    .edu-year { font-size: 9.5px; font-family: 'JetBrains Mono', monospace; color: #4f46e5; font-weight: 600; }

    .status-banner {
      background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
      color: #ffffff;
      border-radius: 12px;
      padding: 10px 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 6px;
    }

    .status-left h4 {
      font-size: 11px;
      font-weight: 700;
      color: #ffffff;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .status-left p {
      font-size: 9px;
      color: #c7d2fe;
    }

    .status-btn {
      background: #ffffff;
      color: #1e1b4b;
      font-size: 9.5px;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 9999px;
      text-decoration: none;
      white-space: nowrap;
    }
  </style>
</head>
<body>

  <!-- ==================== PAGE 1 ==================== -->
  <div class="page">
    <div class="top-accent-bar"></div>

    <div>
      <!-- HEADER -->
      <div class="header-card">
        <div class="header-left">
          <div class="name-title-row">
            <h1 class="name">Gurpreet Kaur</h1>
            <span class="role-badge">Senior UI/UX & Graphic Designer</span>
          </div>
          <div class="headline">Websites • Mobile Apps • SaaS • eCommerce • Design Systems</div>
          <div class="contact-pills">
            <span class="pill">
              <svg class="pill-icon" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Chandigarh, India
            </span>
            <a href="tel:+919814275335" class="pill">
              <svg class="pill-icon" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +91 98142 75335
            </a>
            <a href="mailto:creativehead.gk@gmail.com" class="pill pill-highlight">
              <svg class="pill-icon" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              creativehead.gk@gmail.com
            </a>
            <a href="https://www.behance.net/designsbykaur" target="_blank" class="pill">
              <svg class="pill-icon" viewBox="0 0 24 24" fill="none" stroke="#0057ff" stroke-width="2"><path d="M2 12h20M7 8h10M7 16h10"/></svg>
              behance.net/designsbykaur
            </a>
            <a href="https://www.linkedin.com/in/gurpreet-kaur-uiux-designer" target="_blank" class="pill">
              <svg class="pill-icon" viewBox="0 0 24 24" fill="none" stroke="#0a66c2" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              linkedin.com/in/gurpreet-kaur-uiux-designer
            </a>
          </div>
        </div>
        <div class="avatar-wrapper">
          <img src="{avatar_data_uri}" alt="Gurpreet Kaur" class="avatar-img">
          <div class="status-dot" title="Open to Opportunities"></div>
        </div>
      </div>

      <!-- METRICS STRIP -->
      <div class="metrics-grid">
        <div class="metric-card m-indigo">
          <div class="metric-val">9+</div>
          <div class="metric-label">Years Design Experience</div>
        </div>
        <div class="metric-card m-emerald">
          <div class="metric-val">10+</div>
          <div class="metric-label">Live Shipped Products</div>
        </div>
        <div class="metric-card m-rose">
          <div class="metric-val">~30%</div>
          <div class="metric-label">Task Efficiency Gain</div>
        </div>
        <div class="metric-card m-amber">
          <div class="metric-val">+20%</div>
          <div class="metric-label">Conversion Rate Lift</div>
        </div>
      </div>

      <!-- MAIN TWO-COLUMN BODY -->
      <div class="main-grid">
        <!-- LEFT: EXPERIENCE & SUMMARY -->
        <div>
          <!-- PROFESSIONAL SUMMARY -->
          <div class="section-card">
            <div class="section-header">
              <div class="section-icon icon-indigo">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h2 class="section-title">Professional Summary</h2>
            </div>
            <p class="summary-text">
              Senior UI/UX & Graphic Designer with <strong>9+ years of experience</strong> leading design for web and mobile applications from initial user research and wireframing through high-fidelity UI and developer handoff. Proven track record leading design for <strong>10+ live products</strong> across eCommerce, B2B marketplaces, enterprise SaaS analytics, and outdoor advertising. Expert in atomic design systems, mobile-first responsiveness, and agile engineering collaboration.
            </p>
            <div class="summary-quote">
              "Designing intuitive, human-centered systems across mobile and web—bridging research, craft, and engineering."
            </div>
          </div>

          <!-- WORK EXPERIENCE -->
          <div class="section-card">
            <div class="section-header">
              <div class="section-icon icon-emerald">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <h2 class="section-title">Professional Experience</h2>
            </div>

            <div class="job-item">
              <div class="job-title-row">
                <div>
                  <span class="job-title">Senior UI/UX & Graphic Designer</span>
                  <span style="color:#64748b; font-size:11px;"> • </span>
                  <span class="job-company">Hashbrown Systems Pvt. Ltd.</span>
                </div>
                <span class="job-date">Feb 2017 – Present</span>
              </div>
              <ul class="bullet-list">
                <li><strong>Lead Designer for 10+ Web & Mobile Products:</strong> Owned the complete product design lifecycle across mobile apps (iOS & Android) and responsive web dashboards.</li>
                <li><strong>Enterprise Data Visualizations:</strong> Architected complex analytics dashboards that reduced cognitive overload and <span class="metric-badge">improved task completion by ~30%</span>.</li>
                <li><strong>eCommerce Optimization:</strong> Restructured mobile-first browsing, cart flows, and checkout funnels, <span class="metric-badge">raising conversion rates by ~15–20%</span>.</li>
                <li><strong>Design Systems & Component Libraries:</strong> Built scalable, multi-brand component libraries in Figma, dramatically accelerating developer handoff velocity.</li>
                <li><strong>Agile Collaboration:</strong> Partnered closely with engineering leads, product managers, and QA across iterative two-week sprint cycles.</li>
                <li><strong>Branding & Investor Assets:</strong> Designed high-impact brand identities, product logos, marketing collateral, investor pitch decks, and executive presentations.</li>
                <li><strong>Mentorship & Standards:</strong> Mentored junior UI designers and instituted structured design critique and design QA workflows.</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- RIGHT: SKILLS & TOOLCHAIN -->
        <div>
          <!-- CORE COMPETENCIES -->
          <div class="section-card">
            <div class="section-header">
              <div class="section-icon icon-rose">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              </div>
              <h2 class="section-title">Core Skills</h2>
            </div>

            <div class="skill-block">
              <div class="skill-category-label">Design Capabilities</div>
              <div class="tag-cluster">
                <span class="tag tag-purple">UI/UX Design</span>
                <span class="tag tag-blue">Data Visualization</span>
                <span class="tag tag-blue">Dashboard Design</span>
                <span class="tag tag-purple">Design Systems</span>
                <span class="tag tag-emerald">Mobile-First</span>
                <span class="tag tag-emerald">Responsive Web</span>
                <span class="tag tag-pink">User Flows</span>
                <span class="tag tag-amber">Wireframing</span>
                <span class="tag tag-purple">Prototyping</span>
              </div>
            </div>

            <div class="skill-block">
              <div class="skill-category-label">Design Tools</div>
              <div class="tag-cluster">
                <span class="tag tag-purple">Figma (Advanced)</span>
                <span class="tag tag-pink">Adobe XD</span>
                <span class="tag tag-blue">Photoshop</span>
                <span class="tag tag-amber">Illustrator</span>
                <span class="tag tag-pink">Firefly</span>
                <span class="tag tag-blue">Canva</span>
                <span class="tag tag-purple">Keynote</span>
              </div>
            </div>

            <div class="skill-block">
              <div class="skill-category-label">AI Workflows</div>
              <div class="tag-cluster">
                <span class="tag tag-emerald">ChatGPT</span>
                <span class="tag tag-purple">Claude</span>
                <span class="tag tag-blue">Gemini</span>
                <span class="tag tag-pink">Stitch</span>
                <span class="tag tag-amber">Google Flow</span>
              </div>
              <p style="font-size: 8.5px; color:#64748b; margin-top:3px; line-height:1.3;">Accelerating research, UX copywriting, and rapid prototyping.</p>
            </div>
          </div>

          <!-- KEY HIGHLIGHTS -->
          <div class="section-card">
            <div class="section-header">
              <div class="section-icon icon-amber">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              </div>
              <h2 class="section-title">Highlights</h2>
            </div>
            <ul class="bullet-list" style="margin-top:0;">
              <li><strong>Live App Store & Play Store</strong> apps with thousands of active end-users.</li>
              <li><strong>National Visual Atlas:</strong> Designed election data mapping for 543 constituencies.</li>
              <li><strong>AI Video Creator:</strong> 100K+ likes for educational content on Instagram.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <div class="cv-footer">
      <span>Gurpreet Kaur • Senior UI/UX & Graphic Designer</span>
      <span>Page 1 of 2 • Portfolio: behance.net/designsbykaur</span>
    </div>
  </div>

  <!-- ==================== PAGE 2 ==================== -->
  <div class="page">
    <div class="top-accent-bar"></div>

    <div>
      <!-- TOP BANNER -->
      <div class="header-card" style="padding: 10px 18px; margin-bottom: 12px;">
        <div style="display:flex; align-items:center; justify-content:space-between; width:100%;">
          <div>
            <span style="font-size:16px; font-weight:800; color:#0d0d0d;">Featured Shipped Products & Case Studies</span>
            <div style="font-size:10px; color:#64748b; font-weight:500;">Lead Product Designer across Enterprise SaaS, B2B Marketplaces, and Mobile Applications</div>
          </div>
          <span class="role-badge" style="background:#ecfdf5; color:#047857; border-color:#a7f3d0;">10+ Shipped Apps</span>
        </div>
      </div>

      <!-- PROJECT GRID (6 PROJECTS) -->
      <div class="project-grid">
        <!-- PROJECT 1: OOH Audit -->
        <div class="project-card">
          <div>
            <div class="project-header-row">
              <span class="project-title">OOH Audit Platform & Mobile App</span>
              <span class="project-badge badge-live">Live Product</span>
            </div>
            <p class="project-desc">
              Tamper-proof outdoor campaign tracking and field verification ecosystem. Designed Moshpit mobile field app and executive Brand Manager dashboard.
            </p>
          </div>
          <div class="project-links">
            <a href="https://oohaudit.com" target="_blank" class="link-pill">oohaudit.com</a>
            <a href="https://www.behance.net/gallery/251451983/OOH-Audit-Tamper-Proof-Field-Verification-Ecosystem" target="_blank" class="link-pill" style="color:#d97706; background:#fffbeb; border-color:#fef3c7;">Behance Case Study</a>
          </div>
        </div>

        <!-- PROJECT 2: Eikaebana -->
        <div class="project-card">
          <div>
            <div class="project-header-row">
              <span class="project-title">Eikaebana Home Décor & Flora</span>
              <span class="project-badge badge-live">eCommerce App</span>
            </div>
            <p class="project-desc">
              Mobile and web eCommerce shopping experience for artificial flowers and home décor. Optimized cart discovery and streamlined checkout.
            </p>
          </div>
          <div class="project-links">
            <a href="https://shop.eikaebana.com" target="_blank" class="link-pill">shop.eikaebana.com</a>
            <span class="link-pill">App Store</span>
            <span class="link-pill">Play Store</span>
          </div>
        </div>

        <!-- PROJECT 3: Machine Dalal -->
        <div class="project-card">
          <div>
            <div class="project-header-row">
              <span class="project-title">Machine Dalal B2B Marketplace</span>
              <span class="project-badge badge-live">Industrial B2B</span>
            </div>
            <p class="project-desc">
              Global marketplace connecting machinery buyers, verified sellers, logistics partners, and financing institutions for industrial equipment trade.
            </p>
          </div>
          <div class="project-links">
            <a href="https://machinedalal.com" target="_blank" class="link-pill">machinedalal.com</a>
            <span class="link-pill">App Store</span>
          </div>
        </div>

        <!-- PROJECT 4: Election Data Visualization -->
        <div class="project-card">
          <div>
            <div class="project-header-row">
              <span class="project-title">Election Data Visualization (Atlas)</span>
              <span class="project-badge badge-case">Visual Atlas</span>
            </div>
            <p class="project-desc">
              Interactive national data visualization platform turning complex electoral history, voting patterns, and demographic datasets into intuitive maps.
            </p>
          </div>
          <div class="project-links">
            <a href="https://meradesh.org" target="_blank" class="link-pill">meradesh.org</a>
            <a href="https://www.behance.net/gallery/246130093/Election-Data-Visualization-A-Visual-Atlas" target="_blank" class="link-pill" style="color:#d97706; background:#fffbeb; border-color:#fef3c7;">Behance Case Study</a>
          </div>
        </div>

        <!-- PROJECT 5: SmartToonKids -->
        <div class="project-card">
          <div>
            <div class="project-header-row">
              <span class="project-title">SmartToonKids — AI Video Content</span>
              <span class="project-badge badge-social">100K+ Likes</span>
            </div>
            <p class="project-desc">
              End-to-end conceptualization, scripting, original character design, and AI-assisted animation production for children's educational content.
            </p>
          </div>
          <div class="project-links">
            <a href="https://instagram.com/smarttoonkids" target="_blank" class="link-pill">instagram.com/smarttoonkids</a>
            <span class="link-pill" style="color:#059669;">45K+ Views</span>
          </div>
        </div>

        <!-- PROJECT 6: purchasing.ai & Retibazaar -->
        <div class="project-card">
          <div>
            <div class="project-header-row">
              <span class="project-title">purchasing.ai & Retibazaar</span>
              <span class="project-badge badge-live">Enterprise SaaS</span>
            </div>
            <p class="project-desc">
              B2B purchase order & vendor management with ML demand forecasting (purchasing.ai), and cross-platform retail advertising tracking (Retibazaar).
            </p>
          </div>
          <div class="project-links">
            <span class="link-pill">purchasing.ai</span>
            <span class="link-pill">Retibazaar App</span>
          </div>
        </div>
      </div>

      <!-- DESIGN PROCESS & METHODOLOGY -->
      <div class="section-card" style="margin-bottom: 10px;">
        <div class="section-header" style="margin-bottom: 8px;">
          <div class="section-icon icon-indigo">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          </div>
          <h2 class="section-title">Design Process & Methodology</h2>
        </div>
        <div class="process-timeline">
          <div class="process-step">
            <div class="step-num">01</div>
            <div class="step-title">Research</div>
            <div class="step-desc">User interviews, competitive auditing, JTBD discovery</div>
          </div>
          <div class="process-step">
            <div class="step-num">02</div>
            <div class="step-title">Information Arch</div>
            <div class="step-desc">User flows, wireframing, content hierarchy</div>
          </div>
          <div class="process-step">
            <div class="step-num">03</div>
            <div class="step-title">Design System</div>
            <div class="step-desc">Atomic tokens, accessible UI components, typography</div>
          </div>
          <div class="process-step">
            <div class="step-num">04</div>
            <div class="step-title">Prototyping</div>
            <div class="step-desc">Interactive micro-animations, user testing loops</div>
          </div>
          <div class="process-step">
            <div class="step-num">05</div>
            <div class="step-title">Handoff & QA</div>
            <div class="step-desc">Figma specs, developer inspection, design QA sprints</div>
          </div>
        </div>
      </div>

      <!-- EDUCATION & PORTFOLIO -->
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 8px;">
        <!-- EDUCATION -->
        <div class="section-card" style="margin-bottom: 0;">
          <div class="section-header" style="margin-bottom: 6px;">
            <div class="section-icon icon-rose">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
            <h2 class="section-title">Education</h2>
          </div>
          <div class="edu-item">
            <div>
              <div class="edu-degree">Bachelor of Technology (B.Tech)</div>
              <div class="edu-field">Computer Science & Engineering</div>
            </div>
            <div class="edu-year">2011–2014</div>
          </div>
          <div class="edu-item">
            <div>
              <div class="edu-degree">Diploma in Computer Science</div>
              <div class="edu-field">Computer Engineering & Programming</div>
            </div>
            <div class="edu-year">2008–2011</div>
          </div>
        </div>

        <!-- PORTFOLIO LINKS & PLATFORMS -->
        <div class="section-card" style="margin-bottom: 0;">
          <div class="section-header" style="margin-bottom: 6px;">
            <div class="section-icon icon-cyan">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h2 class="section-title">Portfolio & Profiles</h2>
          </div>
          <div style="display:flex; flex-direction:column; gap:4px; font-size:9.5px;">
            <a href="https://www.behance.net/gallery/233576423/Portfolio" target="_blank" style="color:#0057ff; text-decoration:none; font-weight:600; display:flex; align-items:center; gap:4px;">
              <span>▸ Behance Full Portfolio:</span>
              <span style="color:#475569; font-weight:400;">behance.net/gallery/233576423/Portfolio</span>
            </a>
            <a href="https://in.pinterest.com/designedbykaur" target="_blank" style="color:#e60023; text-decoration:none; font-weight:600; display:flex; align-items:center; gap:4px;">
              <span>▸ Pinterest Moodboards:</span>
              <span style="color:#475569; font-weight:400;">in.pinterest.com/designedbykaur</span>
            </a>
            <a href="https://instagram.com/smarttoonkids" target="_blank" style="color:#e1306c; text-decoration:none; font-weight:600; display:flex; align-items:center; gap:4px;">
              <span>▸ Instagram Creative Suite:</span>
              <span style="color:#475569; font-weight:400;">instagram.com/smarttoonkids</span>
            </a>
          </div>
        </div>
      </div>

      <!-- STATUS BANNER -->
      <div class="status-banner">
        <div class="status-left">
          <h4>
            <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#10b981;"></span>
            Available for Senior UI/UX & Lead Design Roles
          </h4>
          <p>Open to Full-Time, Remote, Hybrid, and Strategic Product Consulting</p>
        </div>
        <a href="mailto:creativehead.gk@gmail.com" class="status-btn">Get in Touch</a>
      </div>
    </div>

    <!-- FOOTER -->
    <div class="cv-footer">
      <span>Gurpreet Kaur • Senior UI/UX & Graphic Designer</span>
      <span>Page 2 of 2 • creativehead.gk@gmail.com • +91 98142 75335</span>
    </div>
  </div>

</body>
</html>
"""

with open(HTML_PATH, "w", encoding="utf-8") as f:
    f.write(html_content.replace("{avatar_data_uri}", avatar_data_uri))
print(f"Wrote HTML CV: {HTML_PATH}")

# 2. Render to PDF via Headless Chrome
chrome_bin = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
cmd = [
    chrome_bin,
    "--headless",
    "--disable-gpu",
    "--allow-file-access-from-files",
    "--enable-local-file-accesses",
    "--no-pdf-header-footer",
    f"--print-to-pdf={PDF_CV_PATH}",
    HTML_PATH
]
print("Compiling PDF with Google Chrome...")
subprocess.check_call(cmd)
print(f"Generated PDF CV: {PDF_CV_PATH}")

# Copy to public/resume.pdf so download button gets the new colorful CV
subprocess.check_call(["cp", PDF_CV_PATH, PDF_PUBLIC_PATH])
print(f"Updated public CV: {PDF_PUBLIC_PATH}")

# 3. Render PNGs using Swift PDFKit for visual verification
swift_render_script = f"""
import PDFKit
import Foundation
import CoreGraphics

let url = URL(fileURLWithPath: "{PDF_CV_PATH}")
if let doc = PDFDocument(url: url) {{
    print("Page count: \\(doc.pageCount)")
    for i in 0..<doc.pageCount {{
        guard let page = doc.page(at: i) else {{ continue }}
        let pageRect = page.bounds(for: .mediaBox)
        let scale: CGFloat = 2.0
        let width = Int(pageRect.width * scale)
        let height = Int(pageRect.height * scale)
        let colorSpace = CGColorSpaceCreateDeviceRGB()
        let context = CGContext(data: nil, width: width, height: height, bitsPerComponent: 8, bytesPerRow: 0, space: colorSpace, bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue)!
        context.setFillColor(CGColor(red: 1, green: 1, blue: 1, alpha: 1))
        context.fill(CGRect(x: 0, y: 0, width: width, height: height))
        context.scaleBy(x: scale, y: scale)
        page.draw(with: .mediaBox, to: context)
        if let image = context.makeImage() {{
            let destUrl = URL(fileURLWithPath: "{CV_DIR}/new_page_\\(i+1).png")
            let dest = CGImageDestinationCreateWithURL(destUrl as CFURL, "public.png" as CFString, 1, nil)!
            CGImageDestinationAddImage(dest, image, nil)
            CGImageDestinationFinalize(dest)
            print("Saved {CV_DIR}/new_page_\\(i+1).png")
        }}
    }}
}}
"""

with open("/tmp/render_cv.swift", "w") as f:
    f.write(swift_render_script)

subprocess.check_call(["swift", "/tmp/render_cv.swift"])
print("Visual pages rendered successfully!")
