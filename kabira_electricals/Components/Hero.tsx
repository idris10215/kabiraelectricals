"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextGroupRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Parent container is the pinned ScrollVideoWrapper
    const scrollParent = container.closest(".sticky-hero-wrapper") || container.parentElement;

    const ctx = gsap.context(() => {
      // 1. Initial Load Entrance Animation (Fade & slide down into absolute dead center)
      gsap.fromTo(
        [badgeRef.current, titleRef.current, paraRef.current],
        { y: -25, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power2.out" }
      );

      // 2. Ultra-Smooth GSAP ScrollTrigger Sequence
      if (scrollParent) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: scrollParent,
            start: "top top",
            end: "85% top",
            scrub: 0.8, // Smooth fluid scrub response
            invalidateOnRefresh: true,
          },
        });

        // Step A: Translate the header text block UPWARDS smoothly to make room below
        // tl.to(
        //   heroTextGroupRef.current,
        //   {
        //     y: -110,
        //     ease: "power2.inOut",
        //     duration: 1,
        //   },
        //   0
        // );

        // Step B: 4 Features/Metrics cards animate UP into the created space
        tl.fromTo(
          metricsRef.current,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, ease: "power2.out", duration: 0.8 },
          0.25
        );

        // Step C: "Get a Turnkey Quote" CTA button animates UP below the 4 features
        tl.fromTo(
          ctaRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, ease: "power2.out", duration: 0.6 },
          0.6
        );
      }
    }, container);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-dvh flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-20 pointer-events-auto overflow-hidden"
    >
      <div className="w-full max-w-3xl flex flex-col justify-center min-h-0 relative my-auto">
        
        {/* INITIAL LOAD GROUP: Badge + Headline + Paragraph 
            Vertically centered perfectly on load */}
        <div
          ref={heroTextGroupRef}
          className="space-y-4 sm:space-y-6 pt-12 sm:pt-16 transition-transform"
        >
          {/* 1. License Badge */}
          <div>
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-amber-500/50 bg-slate-950/85 px-3 py-1.5 sm:px-4 sm:py-2 text-[9px] sm:text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md shadow-xl"
            >
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
              <span>Govt. Licensed Class 1 Electrical Contractor & Engineers</span>
            </div>
          </div>

          {/* 2. Main Headline */}
          <h1
            ref={titleRef}
            className="font-display text-2xl sm:text-4xl lg:text-6xl font-extrabold uppercase leading-tight sm:leading-[1.02] tracking-tight text-white drop-shadow-2xl"
          >
            Powering Corporate &{" "}
            <span className="text-amber-500">Industrial Success</span>
          </h1>

          {/* 3. Paragraph */}
          <p
            ref={paraRef}
            className="max-w-2xl text-xs sm:text-sm lg:text-base leading-relaxed text-slate-200 font-normal drop-shadow-md"
          >
            With Kabira Electricals, empower your business for long-term operational success. As leading Class 1 electrical contractors in Bangalore, our quality-driven approach ensures flawless execution of complex HT works, transformer works, and turnkey KPTCL projects — from BESCOM load enhancement to CEIG safety clearances.
          </p>
        </div>

        {/* SCROLL REVEAL GROUP: Positioned dynamically below the text block */}
        <div className="w-full space-y-4 pt-4 sm:pt-6">
          {/* 4 Features / Characteristics Cards */}
          <div
            ref={metricsRef}
            className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 text-left"
          >
            <div className="bg-slate-950/85 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/15 shadow-xl">
              <div className="font-display text-lg sm:text-3xl font-extrabold text-white">44+</div>
              <div className="text-[9px] sm:text-xs font-bold text-amber-400 uppercase tracking-wider mt-0.5 sm:mt-1">
                Executed Projects
              </div>
              <div className="text-[8px] sm:text-[10px] text-slate-300 mt-0.5">HT/LT Infrastructure</div>
            </div>

            <div className="bg-slate-950/85 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/15 shadow-xl">
              <div className="font-display text-lg sm:text-3xl font-extrabold text-white">15+</div>
              <div className="text-[9px] sm:text-xs font-bold text-amber-400 uppercase tracking-wider mt-0.5 sm:mt-1">
                Years Experience
              </div>
              <div className="text-[8px] sm:text-[10px] text-slate-300 mt-0.5">Govt. Certified Team</div>
            </div>

            <div className="bg-slate-950/85 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/15 shadow-xl">
              <div className="font-display text-lg sm:text-3xl font-extrabold text-white">100+</div>
              <div className="text-[9px] sm:text-xs font-bold text-amber-400 uppercase tracking-wider mt-0.5 sm:mt-1">
                Skilled Engineers
              </div>
              <div className="text-[8px] sm:text-[10px] text-slate-300 mt-0.5">Certified Technicians</div>
            </div>

            <div className="bg-slate-950/85 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/15 shadow-xl">
              <div className="font-display text-lg sm:text-3xl font-extrabold text-amber-400">BESCOM</div>
              <div className="text-[9px] sm:text-xs font-bold text-white uppercase tracking-wider mt-0.5 sm:mt-1">
                Empanelled Dept.
              </div>
              <div className="text-[8px] sm:text-[10px] text-slate-300 mt-0.5">Fast-Track Approvals</div>
            </div>
          </div>

          {/* Primary Get a Quote CTA Button */}
          <div ref={ctaRef} className="pt-1">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 px-6 py-3 sm:px-8 sm:py-3.5 font-extrabold text-slate-950 transition-all shadow-2xl text-xs sm:text-sm tracking-wider uppercase transform hover:scale-105"
            >
              <span>Get a Turnkey Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
