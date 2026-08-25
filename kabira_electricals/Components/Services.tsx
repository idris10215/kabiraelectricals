"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { servicesData } from "@/data/services";

// Duplicate items for 100% seamless, continuous infinite looping
const N = servicesData.length;
const tripleServices = [...servicesData, ...servicesData, ...servicesData];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(N); // Start at middle set (index 8)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Responsive items count calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // 1 card on mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // 2 cards on tablet
      } else {
        setItemsPerPage(4); // 4 cards on desktop/laptop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Infinite Next / Prev handlers
  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  // Seamless jump reset when transition finishes
  const handleTransitionEnd = () => {
    if (currentIndex >= N * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - N);
    } else if (currentIndex < N) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + N);
    }
  };

  // Re-enable smooth transition after resetting index
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Exact gap-aware translate formula to eliminate pixel overflow peeking
  const getTranslateX = () => {
    if (itemsPerPage === 1) {
      return `calc(-1 * ${currentIndex} * (100% + 1rem))`;
    }
    return `calc(-1 * ${currentIndex} * ((100% + 1.5rem) / ${itemsPerPage}))`;
  };

  return (
    <section
      id="services"
      className="relative bg-slate-50 text-slate-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10 space-y-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-2 border border-amber-500/30 bg-amber-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-700">
            <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Class 1 Engineering Scope</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight uppercase">
            Our Core <span className="text-amber-600">Services</span>
          </h2>
        </div>

        {/* Carousel Viewport Wrapper */}
        <div className="relative">
          
          {/* Left Arrow Icon (Clean Minimalist Amber Arrow - NO Dark Circle Background) */}
          <button
            onClick={handlePrev}
            aria-label="Previous Service"
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-30 p-1 sm:p-2 bg-transparent hover:scale-125 transition-transform duration-200 cursor-pointer group"
          >
            <ChevronLeft className="w-8 h-8 sm:w-11 sm:h-11 text-amber-500 hover:text-amber-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] stroke-[3]" />
          </button>

          {/* Right Arrow Icon (Clean Minimalist Amber Arrow - NO Dark Circle Background) */}
          <button
            onClick={handleNext}
            aria-label="Next Service"
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-30 p-1 sm:p-2 bg-transparent hover:scale-125 transition-transform duration-200 cursor-pointer group"
          >
            <ChevronRight className="w-8 h-8 sm:w-11 sm:h-11 text-amber-500 hover:text-amber-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] stroke-[3]" />
          </button>

          {/* Inner Cards Viewport (Clipped cleanly with overflow-hidden) */}
          <div className="w-full overflow-hidden py-1">
            <div
              onTransitionEnd={handleTransitionEnd}
              className={`flex gap-4 sm:gap-6 ${
                isTransitioning ? "transition-transform duration-500 ease-out" : "transition-none"
              }`}
              style={{
                transform: `translateX(${getTranslateX()})`,
              }}
            >
              {tripleServices.map((service, idx) => (
                <div
                  key={`${service.id}-${idx}`}
                  style={{
                    flex:
                      itemsPerPage === 1
                        ? "0 0 100%"
                        : itemsPerPage === 2
                        ? "0 0 calc((100% - 1.5rem) / 2)"
                        : "0 0 calc((100% - 4.5rem) / 4)",
                  }}
                  className="shrink-0"
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative block w-full h-80 sm:h-96 overflow-hidden border border-slate-200 hover:border-amber-500/80 transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col justify-end p-6 bg-slate-900"
                  >
                    {/* Background Image */}
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />

                    {/* Card Content */}
                    <div className="relative z-20 space-y-3">
                      <div className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
                        {service.category}
                      </div>

                      <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-amber-400 transition-colors">
                        {service.title}
                      </h3>

                      <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-400 group-hover:text-amber-300 pt-1">
                        <span>Explore Service</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
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