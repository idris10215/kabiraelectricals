"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProjectClient {
  id: string;
  name: string;
  location: string;
  workType: string;
  logo?: string;
}

const clientProjects: ProjectClient[] = [
  {
    id: "act",
    name: "ACT FIBERNET",
    location: "Bangalore",
    workType: "L.T Network Infrastructure",
    logo: "/act_fibernet.svg",
  },
  {
    id: "embassy",
    name: "EMBASSY TECH VILLAGE",
    location: "Marathahalli, Bangalore",
    workType: "H.T Substation & Cables",
    logo: "/embassy_tech_village.svg",
  },
  {
    id: "meghana",
    name: "MEGHNAS FOOD",
    location: "Koramangala, Bangalore",
    workType: "H.T / L.T Electricals",
    logo: "/meghana_foods.svg",
  },
  {
    id: "drls",
    name: "DRLS PALACE BANQUET HALL",
    location: "Shetty Halli, Jalahalli",
    workType: "H.T Power Substation",
    logo: "/drls_palace.svg",
  },
  {
    id: "narmada",
    name: "NARMADA RESTAURANTS",
    location: "Koramangala, Bangalore",
    workType: "H.T Power Works",
    logo: "/narmada.svg",
  },
  {
    id: "marriott",
    name: "COURT YARD MARRIOTT",
    location: "Outer Ring Road, Marathahalli",
    workType: "H.T Power Substation",
  },
  {
    id: "supreme",
    name: "SUPREME CONSTRUCTIONS",
    location: "Frazer Town, Bangalore",
    workType: "H.T / L.T Commercial Works",
  },
  {
    id: "ngs",
    name: "NGS GROUPS",
    location: "Basavangudi, Bangalore",
    workType: "H.T Electrical Works",
  },
  {
    id: "rainbow",
    name: "RAINBOW APARTMENTS",
    location: "Bannerghatta Road, Bangalore",
    workType: "H.T Distribution",
  },
  {
    id: "gm_agency",
    name: "GM AGENCY (TRENDS SHOWROOM)",
    location: "Channagiri, Davanagere Dist",
    workType: "H.T Commercial Works",
  },
  {
    id: "diascope",
    name: "DIASCOPE HEALTHCARE",
    location: "Wilson Garden, Bangalore",
    workType: "L.T Medical Infrastructure",
  },
  {
    id: "ibps",
    name: "IBPS WATER PLANT",
    location: "Mysore Pinjarapole",
    workType: "H.T Industrial Substation",
  },
];

export default function Projects() {
  // Duplicate array for infinite seamless looping
  const marqueeItems = [...clientProjects, ...clientProjects];

  return (
    <section id="projects" className="py-12 sm:py-16 bg-slate-50 text-slate-900 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight uppercase">
            Powering Infrastructure For <span className="text-amber-600">Industry Leaders & Corporate Hubs</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Delivering high-voltage electrical installations, substation erection, and BESCOM clearances for Karnataka's top corporate tech parks, luxury hospitality, and commercial brands.
          </p>
        </div>

        {/* Clean Logo & Brand Name Marquee Container */}
        <div className="relative w-full overflow-hidden py-8 border-y border-slate-200 bg-white">
          
          {/* Subtle Left & Right Fade Gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          {/* Continuous Moving Track */}
          <div className="animate-marquee items-center gap-14 sm:gap-20">
            {marqueeItems.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="flex flex-col items-center justify-center space-y-2 shrink-0"
              >
                {/* Pure Colorful Logo (If Available) */}
                {project.logo ? (
                  <>
                    <div className="relative w-44 h-16 sm:w-56 sm:h-20 flex items-center justify-center">
                      <Image
                        src={project.logo}
                        alt={project.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    {/* Location Only Below Logo */}
                    <div className="text-xs font-semibold text-slate-500 tracking-wide">
                      {project.location}
                    </div>
                  </>
                ) : (
                  /* Clean Text-Branded Item (If No Logo) */
                  <div className="text-center space-y-1 px-4">
                    <div className="font-extrabold text-sm sm:text-base text-slate-900 tracking-wide uppercase">
                      {project.name}
                    </div>
                    <div className="text-xs font-semibold text-slate-500">
                      {project.location}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Explore All Sector Projects CTA Button */}
        <div className="text-center pt-2">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-950 px-8 py-4 rounded-full font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105 transform"
          >
            <span>Explore All Sector Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
