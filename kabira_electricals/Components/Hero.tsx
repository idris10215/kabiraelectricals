"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

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

      tl.fromTo(
        badgeRef.current,
        { y: -15, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6 }
      );

      tl.fromTo(
        titleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.4"
      );

      tl.fromTo(
        paraRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      );

      tl.fromTo(
        [card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current],
        { y: 20, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "transform",
        },
        "-=0.3"
      );

      tl.fromTo(
        ctaRef.current,
        { y: 15, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.2"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto flex flex-col justify-between items-start text-left space-y-2.5 sm:space-y-5 pt-1 sm:pt-4"
    >
      {/* 1. Header Text Group */}
      <div className="space-y-2 sm:space-y-4 w-full">
        {/* Govt. License Badge */}
        <div ref={badgeRef}>
          <div className="inline-flex items-center gap-1.5 border border-amber-500/50 bg-slate-950/70 px-2.5 py-0.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md shadow-xl">
            <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
            <span>Govt. Licensed Class 1 Electrical Contractor</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1
          ref={titleRef}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-tight text-white drop-shadow-2xl"
        >
          Powering Corporate &{" "}
          <span className="text-amber-500">Industrial Success</span>
        </h1>

        {/* Paragraph */}
        <p
          ref={paraRef}
          className="max-w-xl text-sm sm:text-base lg:text-lg font-semibold leading-normal text-slate-200 tracking-wide drop-shadow"
        >
          Empower your business for long-term operational success. As leading Class 1 electrical contractors in Bangalore, our quality-driven approach ensures flawless execution of complex HT works, transformer installations, and turnkey substation projects.
        </p>
      </div>

      {/* 2. Feature / Metric Cards */}
      <div className="w-full space-y-2.5 sm:space-y-4 pt-1 sm:pt-2">
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
          <div
            ref={card1Ref}
            className="p-2 sm:p-4 border border-white/15 shadow-xl hover:border-amber-500/50 transition-colors duration-200"
          >
            <div className="font-display text-base sm:text-3xl font-extrabold text-white">44+</div>
            <div className="text-1xl sm:text-xs font-bold text-amber-400 uppercase tracking-wider mt-0.5">
              Executed Projects
            </div>
          </div>

          <div
            ref={card2Ref}
            className="p-2 sm:p-4 border border-white/15 shadow-xl hover:border-amber-500/50 transition-colors duration-200"
          >
            <div className="font-display text-base sm:text-3xl font-extrabold text-white">15+</div>
            <div className="text-1xl sm:text-xs font-bold text-amber-400 uppercase tracking-wider mt-0.5">
              Years Experience
            </div>
          </div>

          <div
            ref={card3Ref}
            className="p-2 sm:p-4 border border-white/15 shadow-xl hover:border-amber-500/50 transition-colors duration-200"
          >
            <div className="font-display text-base sm:text-3xl font-extrabold text-white">CLASS 1</div>
            <div className="text-1xl sm:text-xs font-bold text-amber-400 uppercase tracking-wider mt-0.5">
              Licensed Engineers
            </div>
          </div>

          <div
            ref={card4Ref}
            className="p-2 sm:p-4 border border-white/15 shadow-xl hover:border-amber-500/50 transition-colors duration-200"
          >
            <div className="font-display text-base sm:text-3xl font-extrabold text-white">BESCOM</div>
            <div className="text-1xl sm:text-xs font-bold text-amber-400 uppercase tracking-wider mt-0.5">
              Empanelled Dept.
            </div>
          </div>
        </div>

        {/* Primary CTA Button -> Directly routes to /contact */}
        <div ref={ctaRef} className="pt-0.5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 px-4 py-2 sm:px-8 sm:py-3.5 font-extrabold text-slate-950 transition-transform duration-200 shadow-2xl text-xs sm:text-sm tracking-wider uppercase transform hover:scale-105"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}