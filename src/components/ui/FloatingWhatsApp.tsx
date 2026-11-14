"use client";

import React from "react";

export function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/919814275335?text=Hi%20Gurpreet,%20I%20saw%20your%20portfolio";

  return (
    <aside
      aria-label="Contact Gurpreet on WhatsApp"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 print:hidden"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Gurpreet on WhatsApp (+91 98142 75335)"
        className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-black text-white shadow-[0_10px_28px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 animate-float"
      >
        {/* White WhatsApp Vector Glyph */}
        <svg
          className="w-5 h-5 fill-white shrink-0 transition-transform duration-300 group-hover:rotate-12"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.204 8.204 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.214 8.214 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24h.02zm-3.56 4.31c-.19 0-.42.07-.64.32-.23.24-.87.85-.87 2.08 0 1.23.9 2.42 1.02 2.59.13.16 1.76 2.69 4.26 3.77.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48z" />
        </svg>

        {/* Text Label "Whatsapp" */}
        <span className="text-[15px] font-medium text-white tracking-normal font-sans select-none">
          Whatsapp
        </span>

        {/* Red Active Notification Badge on top right corner */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 pointer-events-none">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-80" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#e50914] border-2 border-white shadow-sm" />
        </span>
      </a>
    </aside>
  );
}
