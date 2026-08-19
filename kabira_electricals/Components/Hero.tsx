"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. License Badge entrance
      tl.fromTo(
        badgeRef.current,
        { y: -20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7 }
      );

      // 2. Main Title entrance
      tl.fromTo(
        titleRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      );

      // 3. Description Paragraph entrance
      tl.fromTo(
        paraRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.5"
      );

      // 4. 4 Metric Cards staggered entrance
      tl.fromTo(
        [card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current],
        { y: 30, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "transform",
        },
        "-=0.3"
      );

      // 5. CTA Button pop-in
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.2"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto flex flex-col justify-between items-start text-left space-y-4 sm:space-y-6 pt-4 sm:pt-8"
    >
      {/* 1. Header Text Group (Pushed slightly UPWARDS) */}
      <div className="space-y-3 sm:space-y-5 w-full">
        {/* Govt. License Badge */}
        <div ref={badgeRef}>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-amber-500/50 bg-slate-950/80 px-3 py-1 sm:px-4 sm:py-2 text-[9px] sm:text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md shadow-xl">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
            <span>Govt. Licensed Class 1 Electrical Contractor & Engineers</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1
          ref={titleRef}
          className="font-display sm:text-7xl lg:text-6xl font-extrabold uppercase leading-tight tracking-tight text-white drop-shadow-2xl"
        >
          Powering Corporate &{" "}
          <span className="text-amber-500">Industrial Success</span>
        </h1>

        {/* Detailed Paragraph */}
        <p
          ref={paraRef}
          className="max-w-2xl sm:text-4xl lg:text-base leading-relaxed text-slate-200 font-normal drop-shadow-md"
        >
          With Kabira Electricals, empower your business for long-term operational success. As leading Class 1 electrical contractors in Bangalore, our quality-driven approach ensures flawless execution of complex HT works, transformer works, and turnkey KPTCL projects — from BESCOM load enhancement to CEIG safety clearances.
        </p>
      </div>

      {/* 2. Feature / Metric Cards (Pushed slightly DOWNWARDS with Glassmorphism) */}
      <div className="w-full space-y-4 pt-4 sm:pt-6">
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
          <div
            ref={card1Ref}
            className="p-3 sm:p-4 rounded-xl border border-white/15 shadow-xl hover:border-amber-500/50 transition-colors duration-200 hover:bg-slate-950/75"
          >
            <div className="font-display text-lg sm:text-3xl font-extrabold text-white">44+</div>
            <div className="text-[9px] sm:text-2xl font-bold text-amber-400 uppercase tracking-wider mt-0.5 sm:mt-1">
              Executed Projects
            </div>
          </div>

          <div
            ref={card2Ref}
            className="p-3 sm:p-4 rounded-xl border border-white/15 shadow-xl hover:border-amber-500/50 transition-colors duration-200 hover:bg-slate-950/75"
          >
            <div className="font-display text-lg sm:text-3xl font-extrabold text-white">15+</div>
            <div className="text-[9px] sm:text-2xl font-bold text-amber-400 uppercase tracking-wider mt-0.5 sm:mt-1">
              Years Experience
            </div>
          </div>

          <div
            ref={card3Ref}
            className="p-3 sm:p-4 rounded-xl border border-white/15 shadow-xl hover:border-amber-500/50 transition-colors duration-200 hover:bg-slate-950/75"
          >
            <div className="font-display text-lg sm:text-3xl font-extrabold text-white">100+</div>
            <div className="text-[9px] sm:text-2xl font-bold text-amber-400 uppercase tracking-wider mt-0.5 sm:mt-1">
              Skilled Engineers
            </div>
          </div>

          <div
            ref={card4Ref}
            className="p-3 sm:p-4 rounded-xl border border-white/15 shadow-xl hover:border-amber-500/50 transition-colors duration-200 hover:bg-slate-950/75"
          >
            <div className="font-display text-lg sm:text-3xl font-extrabold text-amber-400">BESCOM</div>
            <div className="text-[9px] sm:text-2xl font-bold text-white uppercase tracking-wider mt-0.5 sm:mt-1">
              Empanelled Dept.
            </div>
          </div>
        </div>

        {/* Primary CTA Button */}
        <div ref={ctaRef} className="pt-1">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 px-5 py-2.5 sm:px-8 sm:py-3.5 font-extrabold text-slate-950 transition-transform duration-200 shadow-2xl text-xs sm:text-sm tracking-wider uppercase transform hover:scale-105"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
