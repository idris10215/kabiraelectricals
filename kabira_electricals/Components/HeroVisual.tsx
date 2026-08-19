"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function HeroVisual() {
  const redWireRef = useRef<SVGPathElement>(null);
  const blueWireRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // GSAP continuous electric laser pulse animation along red & blue phase wires
    if (redWireRef.current) {
      gsap.to(redWireRef.current, {
        strokeDashoffset: -300,
        duration: 3,
        repeat: -1,
        ease: "none",
      });
    }

    if (blueWireRef.current) {
      gsap.to(blueWireRef.current, {
        strokeDashoffset: -300,
        duration: 2.4,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  return (
    <div className="relative w-full min-h-[520px] py-6 flex items-center overflow-hidden">
      
      {/* --- BACKGROUND SVG ANIMATED CABLE CANVAS (Red & Blue Phase Lines) --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 560" preserveAspectRatio="none" fill="none">
          {/* Base Wire Conduits */}
          <path
            d="M 170 420 C 340 580, 860 580, 1030 420"
            stroke="#fca5a5"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M 170 445 C 340 605, 860 605, 1030 445"
            stroke="#93c5fd"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.5"
          />

          {/* GSAP Laser Pulse Stream Lines */}
          {/* RED WIRE (HT Phase) */}
          <path
            ref={redWireRef}
            d="M 170 420 C 340 580, 860 580, 1030 420"
            stroke="#dc2626"
            strokeWidth="5"
            strokeDasharray="30 45"
            strokeLinecap="round"
          />

          {/* BLUE WIRE (LT Phase) */}
          <path
            ref={blueWireRef}
            d="M 170 445 C 340 605, 860 605, 1030 445"
            stroke="#2563eb"
            strokeWidth="5"
            strokeDasharray="40 60"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* --- 3-COLUMN SCENE: LEFT TRANSFORMER | CENTER CONTENT | RIGHT SKYSCRAPER --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center w-full">
        
        {/* --- FAR LEFT: REAL VERTICAL TRANSFORMER (No UI Card Container) --- */}
        <div className="lg:col-span-3 flex justify-center lg:justify-start">
          <div className="relative w-48 sm:w-56 h-[380px] sm:h-[440px] drop-shadow-xl hover:scale-105 transition-transform duration-500">
            <Image
              src="/left_transformer.jpg"
              alt="High Voltage Electrical Power Transformer"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* --- CENTER COLUMN: MAIN HERO CONTENT & METRICS --- */}
        <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
          {/* License Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>Govt. Licensed Class 1 Electrical Contractor & Engineers</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-slate-900 leading-tight">
            Powering Corporate & <br />
            <span className="text-amber-600">Industrial Success</span>
          </h1>

          {/* Executive Paragraph */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
            With Kabira Electricals, empower your business for long-term operational success. As leading electrical contractors in Bangalore, our quality-driven approach ensures flawless execution of complex HT works, transformer works, and turnkey KPTCL works — from BESCOM load enhancement to CEIG safety clearances.
          </p>

          {/* Action Call-To-Action Buttons */}
          <div className="pt-1 flex flex-wrap gap-3 justify-center lg:justify-start">
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              <span>Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wider uppercase transition-all shadow-md hover:scale-105"
            >
              <span>Get Quote</span>
            </Link>
          </div>

          {/* Trust Metric Counters Bar */}
          <div className="pt-5 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900">44+</div>
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Projects Delivered</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900">15+</div>
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Years Experience</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900">100+</div>
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Skilled Workforce</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-amber-600">BESCOM</div>
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Empanelled Dept.</div>
            </div>
          </div>
        </div>

        {/* --- FAR RIGHT: REAL VERTICAL GLASS SKYSCRAPER (No UI Card Container) --- */}
        <div className="lg:col-span-3 flex justify-center lg:justify-end">
          <div className="relative w-44 sm:w-52 h-[400px] sm:h-[460px] drop-shadow-xl hover:scale-105 transition-transform duration-500">
            <Image
              src="/right_building.jpg"
              alt="Real Commercial Glass Skyscraper Tower"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
}
