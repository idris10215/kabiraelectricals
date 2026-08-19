// components/ScrollVideoWrapper.tsx
'use client';

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: ReactNode;
  videoSrc: string;
  scrollMultiplier?: number; // Adjust scroll distance speed (default 2.0 = 200vh)
}

export default function ScrollVideoWrapper({ children, videoSrc, scrollMultiplier = 2.0 }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    video.pause();

    const setupAnimation = () => {
      if (!video.duration || isNaN(video.duration) || !isFinite(video.duration)) return;

      video.pause();

      const obj = { currentTime: 0 };
      let rafId: number | null = null;

      const scrollAnim = gsap.to(obj, {
        currentTime: video.duration,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.1,
          invalidateOnRefresh: true,
          onUpdate: () => {
            if (!video || !isFinite(obj.currentTime)) return;

            if (rafId) cancelAnimationFrame(rafId);

            rafId = requestAnimationFrame(() => {
              if (typeof (video as HTMLVideoElement & { fastSeek?: (t: number) => void }).fastSeek === 'function') {
                (video as HTMLVideoElement & { fastSeek: (t: number) => void }).fastSeek(obj.currentTime);
              } else {
                video.currentTime = obj.currentTime;
              }
            });
          },
        },
      });

      return () => {
        if (rafId) cancelAnimationFrame(rafId);
        scrollAnim.kill();
      };
    };

    if (video.readyState >= 2 && video.duration && isFinite(video.duration)) {
      setupAnimation();
    } else {
      video.addEventListener('loadedmetadata', setupAnimation);
      video.addEventListener('canplay', setupAnimation);
    }

    return () => {
      video.removeEventListener('loadedmetadata', setupAnimation);
      video.removeEventListener('canplay', setupAnimation);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [videoSrc]);

  return (
    /* Outer container defines total scroll distance */
    <div
      ref={containerRef}
      className="sticky-hero-wrapper relative w-full"
      style={{ height: `${scrollMultiplier * 100}vh` }}
    >
      {/* Sticky viewport frame holding both background video AND Hero content */}
      <div className="sticky top-0 h-dvh w-full overflow-hidden bg-black">
        {/* Background Video */}
        <video
          ref={videoRef}
          src={videoSrc}
          playsInline
          muted
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover z-0 brightness-105"
        />

        {/* Dark overlay covering entire video */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/40 z-10 pointer-events-none" />

        {/* Foreground Hero Content Container inside sticky viewport */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}