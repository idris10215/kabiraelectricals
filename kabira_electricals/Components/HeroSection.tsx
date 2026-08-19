"use client";

import Hero from "./Hero";

export default function HeroSection() {
  return (
    <section className="relative w-full aspect-[4/3.5] sm:aspect-square md:aspect-video md:min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark Slate Overlay for Text Readability */}
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>

      {/* Foreground Hero Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
      </div>
    </section>
  );
}