"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Curated photos excluding gallery6
const aboutGalleryPhotos = [
  {
    src: "/gallery1.jpeg",
    title: "LT Switchboard Panel Wiring",
  },
  {
    src: "/gallery2.jpeg",
    title: "Metering Panel Audit & Testing",
  },
  {
    src: "/gallery3.jpeg",
    title: "Wall Chaser Conduit Channeling",
  },
  {
    src: "/gallery4.jpeg",
    title: "Outdoor RMU Substation Kiosk",
  },
  {
    src: "/gallery5.jpeg",
    title: "Transformer Yard Cable Jointing",
  },
  {
    src: "/gallery7.jpeg",
    title: "HT Cable Pot-Head Terminations",
  },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // 1 card on mobile
      } else {
        setItemsPerPage(2); // 2 cards on laptop/desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = aboutGalleryPhotos.length - itemsPerPage;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Centered Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight uppercase">
            <span className="text-slate-900">ABOUT</span> <span className="text-amber-600">US</span>
          </h2>
        </div>

        {/* Main Grid: Left Image (gallery8.jpeg) + Right Paragraph & 2-Card Photo Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Primary Image (gallery8.jpeg - Kept Exactly As Is) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-80 sm:h-[440px] w-full border border-slate-200 overflow-hidden shadow-lg bg-slate-900 rounded-none">
              <Image
                src="/gallery8.jpeg"
                alt="Kabira Electricals On-Site Substation Erection"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Company Overview + 2-Card Photo Carousel */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Paragraph Text */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              M/s Kabira Electricals is a Bangalore-based engineering firm owned by Mr. Afzal Khan, operating in High Voltage (HT) & Low Voltage (LT) turnkey installations for commercial buildings, IT tech parks, luxury hotels, and industrial facilities across Karnataka.
            </p>

            {/* 2-Card Photo Carousel Container */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">
                On-Site Execution Showcase:
              </div>

              {/* Slide Viewport with Exact Same Transparent Amber Chevron Arrows as /about */}
              <div className="relative">
                
                {/* Left Arrow Button */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous Site Photos"
                  className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-30 p-1 sm:p-2 bg-transparent hover:scale-125 transition-transform duration-200 cursor-pointer group"
                >
                  <ChevronLeft className="w-8 h-8 sm:w-11 sm:h-11 text-amber-500 hover:text-amber-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] stroke-[3]" />
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={handleNext}
                  aria-label="Next Site Photos"
                  className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-30 p-1 sm:p-2 bg-transparent hover:scale-125 transition-transform duration-200 cursor-pointer group"
                >
                  <ChevronRight className="w-8 h-8 sm:w-11 sm:h-11 text-amber-500 hover:text-amber-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] stroke-[3]" />
                </button>

                <div className="w-full overflow-hidden py-1">
                  <div
                    className="flex gap-4 transition-transform duration-500 ease-out"
                    style={{
                      transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                    }}
                  >
                    {aboutGalleryPhotos.map((photo, idx) => (
                      <div
                        key={idx}
                        style={{
                          flex: itemsPerPage === 1 ? "0 0 100%" : "0 0 calc((100% - 1rem) / 2)",
                        }}
                        className="shrink-0"
                      >
                        {/* Increased Height on Mobile (h-64 sm:h-56) for crisp landscape filling */}
                        <div className="group relative h-64 sm:h-56 border border-slate-200 overflow-hidden shadow-sm bg-slate-900 rounded-none">
                          <Image
                            src={photo.src}
                            alt={photo.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                          <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                            <div className="text-xs font-extrabold text-white leading-tight truncate">
                              {photo.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
