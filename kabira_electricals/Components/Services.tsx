"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServicePillar {
  id: string;
  title: string;
  image: string;
}

const servicePillars: ServicePillar[] = [
  {
    id: "electrical-contracting",
    title: "HT / LT Electrical Contracting & Substation Works",
    image: "/left_transformer.jpg",
  },
  {
    id: "bescom-works",
    title: "BESCOM Load Enhancement & Sanctions",
    image: "/right_building.jpg",
  },
  {
    id: "kptcl-works",
    title: "KPTCL Turnkey Substation Works",
    image: "/substation_source.jpg",
  },
  {
    id: "ceig-approvals",
    title: "CEIG Safety Clearances & Approvals",
    image: "/corporate_towers.jpg",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Enable mobile GSAP horizontal pinned scroll animation
    const isMobile = window.innerWidth < 1024;
    if (!isMobile || !scrollContainerRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const container = scrollContainerRef.current;
      const section = sectionRef.current;
      if (!container || !section) return;

      const totalWidth = container.scrollWidth - container.clientWidth;

      gsap.to(container, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "top top+=64px",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-slate-50 text-slate-900 py-12 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight uppercase">
            Our Core <span className="text-amber-600">Services</span>
          </h2>
        </div>

        {/* 4 Clean Pillar Cards Container */}
        <div className="w-full overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex lg:grid lg:grid-cols-4 gap-4 sm:gap-6 pb-4 sm:pb-0 scrollbar-none"
          >
            {servicePillars.map((pillar) => (
              <Link
                key={pillar.id}
                href="/services"
                className="group relative min-w-[260px] sm:min-w-[300px] lg:min-w-0 h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 flex flex-col justify-end p-5 sm:p-6 shrink-0 transform hover:-translate-y-2"
              >
                {/* Background Image */}
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent z-10" />

                {/* Title & Arrow */}
                <div className="relative z-20 space-y-3">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-amber-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-400 group-hover:text-amber-300">
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Services CTA Button */}
        <div className="text-center pt-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-950 px-8 py-4 rounded-full font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105 transform"
          >
            <span>Explore All 8 Specialized Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}