"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { PROFILE } from "@/lib/data";
import { useScroll } from "@/lib/scroll";

export function Hero() {
  const { scrollTo } = useScroll();
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVoicePlaying, setIsVoicePlaying] = useState(false);

  // Autoplay intro video and speech automatically on page open
  useEffect(() => {
    let unmounted = false;

    const tryAutoplay = async () => {
      const video = videoRef.current;
      const audio = audioRef.current;
      if (!video) return;

      // Start the video character animation right away
      try {
        video.currentTime = 0;
        await video.play();
        if (!unmounted) setIsVoicePlaying(true);
      } catch (e) {
        // Video autoplay was prevented
      }

      // Try playing audio with sound
      if (audio) {
        audio.currentTime = 0;
        audio.muted = false;
        try {
          await audio.play();
          if (!unmounted) setIsMuted(false);
        } catch {
          // Browser audio autoplay policy requires user interaction first.
          // Unmute and sync audio the instant the user touches, scrolls, or clicks anywhere on the page!
          const unlockSound = () => {
            if (unmounted) return;
            const curAudio = audioRef.current;
            const curVideo = videoRef.current;
            if (curAudio) {
              curAudio.muted = false;
              if (curVideo && !curVideo.paused) {
                curAudio.currentTime = curVideo.currentTime;
              }
              curAudio
                .play()
                .then(() => {
                  if (!unmounted) setIsMuted(false);
                })
                .catch(() => {});
            }
            cleanupListeners();
          };

          const cleanupListeners = () => {
            window.removeEventListener("pointerdown", unlockSound);
            window.removeEventListener("touchstart", unlockSound);
            window.removeEventListener("scroll", unlockSound, true);
            window.removeEventListener("wheel", unlockSound, true);
            window.removeEventListener("keydown", unlockSound);
            window.removeEventListener("click", unlockSound);
          };

          window.addEventListener("pointerdown", unlockSound, { once: true, passive: true });
          window.addEventListener("touchstart", unlockSound, { once: true, passive: true });
          window.addEventListener("scroll", unlockSound, { once: true, capture: true, passive: true });
          window.addEventListener("wheel", unlockSound, { once: true, capture: true, passive: true });
          window.addEventListener("keydown", unlockSound, { once: true, passive: true });
          window.addEventListener("click", unlockSound, { once: true, passive: true });
        }
      }
    };

    // Hydration delay
    const timer = setTimeout(tryAutoplay, 250);

    return () => {
      unmounted = true;
      clearTimeout(timer);
    };
  }, []);

  // Synchronize talking character video animation with audio playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVoicePlaying) {
      if (video.paused) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    } else {
      video.pause();
    }
  }, [isVoicePlaying]);

  // Play calm, sweet, and youthful audio greeting
  const playGreeting = () => {
    const video = videoRef.current;
    const audio = audioRef.current;

    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }

    if (audio) {
      audio.currentTime = 0;
      audio.muted = false;
      audio
        .play()
        .then(() => {
          setIsVoicePlaying(true);
          setIsMuted(false);
        })
        .catch(() => {
          // Web Speech fallback if audio file playback is blocked
          if (typeof window !== "undefined" && "speechSynthesis" in window) {
            window.speechSynthesis.cancel();
            const utter = new SpeechSynthesisUtterance(
              "Hi, I'm Gurpreet! Senior UI/UX designer. I design intuitive web applications, mobile apps, and modern AI platforms. Welcome to my portfolio!"
            );
            utter.rate = 0.9;
            utter.pitch = 1.0;
            const voices = window.speechSynthesis.getVoices();
            const indianVoice = voices.find(
              (v) =>
                v.lang === "en-IN" ||
                v.lang.startsWith("en-IN") ||
                v.name.toLowerCase().includes("india") ||
                v.name.toLowerCase().includes("hindi")
            );
            if (indianVoice) utter.voice = indianVoice;
            utter.onend = () => {
              setIsVoicePlaying(false);
              setIsMuted(true);
            };
            window.speechSynthesis.speak(utter);
            setIsVoicePlaying(true);
            setIsMuted(false);
          }
        });
    } else {
      setIsVoicePlaying(true);
    }
  };

  // IntersectionObserver: Pause audio when scrolling away from hero
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          const audio = audioRef.current;
          const video = videoRef.current;
          if (audio) audio.pause();
          if (video) video.pause();
          setIsVoicePlaying(false);
          setIsMuted(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  // Toggle Sound Button: Plays / pauses voice greeting
  const toggleSound = () => {
    const audio = audioRef.current;
    const video = videoRef.current;
    if (isVoicePlaying) {
      if (audio) audio.pause();
      if (video) video.pause();
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setIsVoicePlaying(false);
      setIsMuted(true);
    } else {
      playGreeting();
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-between pt-24 pb-8 overflow-hidden"
    >
      {/* Background Ghost Outlined Word */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden"
      >
        <span
          className="text-[clamp(90px,18vw,280px)] font-black tracking-tighter uppercase text-transparent whitespace-nowrap opacity-[0.06]"
          style={{
            WebkitTextStroke: "2.5px rgba(99, 102, 241, 0.25)",
          }}
        >
          {PROFILE.firstName}
        </span>
      </div>

      {/* Main Centered Visual & Role */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 md:px-8 flex-1 flex flex-col items-center justify-center">
        {/* Transparent Hero Portrait with Atmospheric Color Glow */}
        <div className="relative w-full max-w-[420px] sm:max-w-[480px] md:max-w-[560px] flex items-center justify-center">
          {/* Atmospheric Ambient Color Aura */}
          <div
            aria-hidden="true"
            className="absolute -inset-16 -z-10 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full bg-gradient-to-tr from-[#6366f1]/25 via-[#ec4899]/20 to-[#f59e0b]/20 blur-[100px] animate-pulse" />
            <div className="absolute w-[260px] h-[260px] rounded-full bg-[#06b6d4]/20 blur-[80px]" />
          </div>

          <div
            className="relative w-full flex items-center justify-center"
            style={{
              aspectRatio: "480 / 600",
              maxHeight: "min(78svh, 820px)",
            }}
          >
            {/* Idle Character State (Natural gentle breathing, relaxed posture, 100% transparent) */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                isVoicePlaying ? "opacity-0 pointer-events-none" : "opacity-100 character-idle"
              }`}
            >
              <Image
                src="/hero/hero-poster.png"
                alt="Gurpreet Kaur — Lead UI/UX Designer"
                width={768}
                height={960}
                priority
                className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_16px_36px_rgba(13,13,13,0.08)]"
              />
            </div>

            {/* Speaking Character State (Pre-rendered video with subtle gestures, blinks, nods, and synced speech - 100% Transparent Alpha) */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                isVoicePlaying ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <video
                ref={videoRef}
                muted
                playsInline
                preload="auto"
                poster="/hero/hero-poster.png?v=12"
                onEnded={() => {
                  setIsVoicePlaying(false);
                  setIsMuted(true);
                }}
                className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_16px_36px_rgba(13,13,13,0.08)]"
              >
                <source src="/hero/hero-transparent.mov?v=12" type='video/quicktime' />
                <source src="/hero/hero-transparent.mov?v=12" type='video/mp4; codecs="hvc1"' />
                <source src="/hero/hero-transparent.webm?v=12" type="video/webm" />
                <source src="/hero/hero.mp4?v=12" type="video/mp4" />
              </video>
            </div>

            {/* Voice Audio Track (Synchronized 11.85s Natural Indian English Speech with natural pauses) */}
            <audio
              ref={audioRef}
              preload="auto"
              onEnded={() => {
                setIsVoicePlaying(false);
                setIsMuted(true);
              }}
            >
              <source src="/hero/intro-voice.mp3?v=12" type="audio/mpeg" />
              <source src="/hero/intro-voice.m4a?v=12" type="audio/mp4" />
              <source src="/hero/intro-voice.wav?v=12" type="audio/wav" />
            </audio>
          </div>

          {/* Floating Sound Control Button */}
          <div className="absolute bottom-6 right-6 z-20">
            <div className="relative group/sound">
              <button
                onClick={toggleSound}
                aria-label={
                  isVoicePlaying
                    ? "Pause voice intro"
                    : "Listen to Gurpreet: Senior UI/UX designer intro"
                }
                className="w-[48px] h-[48px] rounded-full bg-gradient-to-tr from-[#4f46e5] via-[#7c3aed] to-[#ec4899] text-[#ffffff] flex items-center justify-center shadow-lg shadow-indigo-500/30 transition-transform duration-300 hover:scale-110 active:scale-95"
              >
                {isVoicePlaying ? (
                  // Sound waves / Pause icon
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  // Speaker / Play voice icon
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>
              {/* Tooltip */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-[#0d0d0d] text-[#f4f2ee] text-[11px] font-mono whitespace-nowrap opacity-0 group-hover/sound:opacity-100 transition-opacity pointer-events-none shadow-md">
                {isVoicePlaying
                  ? "Playing intro: Gurpreet Kaur..."
                  : 'Voice: "Hi, I\'m Gurpreet! Lead UI/UX..."'}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Role Heading & Description */}
        <div className="text-center mt-4 max-w-2xl">
          <div className="section-tag inline-flex items-center gap-2 mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold">{PROFILE.location}</span>
            <span className="opacity-40">•</span>
            <span className="text-emerald-600 font-semibold">Available for Work</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0d0d0d] leading-none mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-[#0d0d0d] via-[#4338ca] to-[#7c3aed] bg-clip-text text-transparent">
              {PROFILE.role}.
            </span>
          </h1>
          <p className="text-sm sm:text-base text-[#64748b] max-w-lg mx-auto mb-8 font-normal">
            {PROFILE.headline}. 9+ years designing high-impact web and mobile products across eCommerce, B2B, and SaaS.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => scrollTo("#work")}
              className="btn-primary"
            >
              View My Work
            </button>
            <a
              href={PROFILE.resumePath}
              download
              className="btn-secondary flex items-center gap-2"
              aria-label="Download Resume PDF"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Download Resume
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-secondary"
            >
              Let&apos;s talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
