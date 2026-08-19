"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: ReactNode;
  videoSrc: string;
  scrollMultiplier?: number;
}

export default function ScrollVideoWrapper({
  children,
  videoSrc,
  scrollMultiplier = 2.0,
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    video.pause();

    const setupAnimation = () => {
      if (!video.duration || isNaN(video.duration) || !isFinite(video.duration)) return;

      if (animRef.current) {
        animRef.current.kill();
        animRef.current = null;
      }

      video.pause();

      const obj = { currentTime: 0 };
      let rafId: number | null = null;

      animRef.current = gsap.to(obj, {
        currentTime: video.duration,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.2,
          invalidateOnRefresh: true,
          onUpdate: () => {
            if (!video || !isFinite(obj.currentTime)) return;

            if (rafId) cancelAnimationFrame(rafId);

            rafId = requestAnimationFrame(() => {
              if (
                typeof (video as HTMLVideoElement & { fastSeek?: (t: number) => void })
                  .fastSeek === "function"
              ) {
                (video as HTMLVideoElement & { fastSeek: (t: number) => void }).fastSeek(
                  obj.currentTime
                );
              } else {
                video.currentTime = obj.currentTime;
              }
            });
          },
        },
      });

      // Refresh ScrollTrigger so GSAP registers exact positions on production builds
      ScrollTrigger.refresh();

      return () => {
        if (rafId) cancelAnimationFrame(rafId);
      };
    };

    if (video.readyState >= 1 && video.duration && isFinite(video.duration)) {
      setupAnimation();
    }

    const onMeta = () => setupAnimation();
    video.addEventListener("loadedmetadata", onMeta);
    video.addEventListener("canplay", onMeta);
    video.addEventListener("loadeddata", onMeta);

    // Initial delay refresh for production static export
    const timer = setTimeout(() => {
      if (video.readyState >= 1 && video.duration) {
        setupAnimation();
      }
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(timer);
      video.removeEventListener("loadedmetadata", onMeta);
      video.removeEventListener("canplay", onMeta);
      video.removeEventListener("loadeddata", onMeta);
      if (animRef.current) {
        animRef.current.kill();
        animRef.current = null;
      }
    };
  }, [videoSrc]);

  return (
    <div
      ref={containerRef}
      className="sticky-hero-wrapper relative w-full"
      style={{ height: `${scrollMultiplier * 100}vh` }}
    >
      <div className="sticky top-0 h-dvh w-full overflow-hidden bg-slate-950">
        <video
          ref={videoRef}
          src={videoSrc}
          playsInline
          muted
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover z-0 brightness-105"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/40 z-10 pointer-events-none" />

        <div className="absolute inset-0 z-20 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}