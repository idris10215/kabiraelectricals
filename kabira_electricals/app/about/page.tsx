"use client";

import { useState, useEffect } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

const curatedGalleryPhotos = [
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

export default function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = curatedGalleryPhotos.length - itemsPerPage;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen">
      <Navbar />

      {/* Page Hero Header */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <Link
            href="/#about"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to About Us</span>
          </Link>

          <div className="space-y-2">
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              About <span className="text-amber-500">Kabira Electricals</span>
            </h1>
          </div>
        </div>
      </section>

      {/* About Main Content */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Leadership & Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Feature Image (gallery8.jpeg Kept As Is) */}
          <div className="lg:col-span-6 relative h-80 sm:h-[440px] bg-slate-900 border border-slate-200 overflow-hidden shadow-lg rounded-none">
            <Image
              src="/gallery8.jpeg"
              alt="Kabira Electricals Leadership & Substation Work"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">
              Engineering Excellence & <span className="text-amber-600">Govt. Empanelled Credentials</span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              Founded with a commitment to uncompromised electrical safety and compliance, Kabira Electricals is a registered Class 1 Govt. Licensed contractor with the Government of Karnataka and BESCOM, owned by Mr. Afzal Khan.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              We specialize in the execution of complex High Tension (HT) switchgear, 11kV/33kV substations, transformer erection, BESCOM load enhancement/reduction, and arranging power supply for IT tech parks, luxury hotels, multi-specialty hospitals, and industrial manufacturing plants.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-200">
              <div className="p-4 bg-white border border-slate-200 space-y-1 rounded-none">
                <div className="text-2xl font-extrabold text-slate-900">15+ Years</div>
                <div className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">Karnataka Industry Presence</div>
              </div>
              <div className="p-4 bg-white border border-slate-200 space-y-1 rounded-none">
                <div className="text-2xl font-extrabold text-slate-900">CLASS 1</div>
                <div className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">Govt. Electrical License</div>
              </div>
            </div>
          </div>
        </div>

        {/* On-Site Execution Interactive Photo Carousel */}
        <div className="space-y-6 pt-6 border-t border-slate-200">
          <div className="text-left max-w-2xl space-y-1">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-slate-900">
              On-Site Execution Showcase
            </h2>
          </div>

          {/* 2-Card Viewport with Exact Services-Style Amber Arrow Buttons */}
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
                {curatedGalleryPhotos.map((photo, idx) => (
                  <div
                    key={idx}
                    style={{
                      flex: itemsPerPage === 1 ? "0 0 100%" : "0 0 calc((100% - 1rem) / 2)",
                    }}
                    className="shrink-0"
                  >
                    <div className="group relative h-64 sm:h-72 border border-slate-200 overflow-hidden shadow-sm bg-slate-900 rounded-none">
                      <Image
                        src={photo.src}
                        alt={photo.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <div className="text-xs sm:text-sm font-extrabold text-white">
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

      </section>

      <Footer />
    </main>
  );
}
