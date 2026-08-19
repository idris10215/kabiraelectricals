"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  videoSrc: string;
}

export default function ScrollVideoWrapper({ children, videoSrc }: Props) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20 pb-12 sm:py-24">
      {/* 1. Cinematic Continuous Looping Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover z-0 brightness-105"
        src={videoSrc}
      />

      {/* 2. Premium Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/90 z-10 pointer-events-none" />

      {/* 3. Hero Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        {children}
      </div>
    </section>
  );
}