"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight, Building2, ShieldCheck, MapPin } from "lucide-react";
import ClientLogos from "@/Components/ClientLogos";

interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  location: string;
  scope: string;
  image?: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: "marriott",
    title: "Court Yard Marriott",
    category: "HT Substation & Panels",
    location: "Outer Ring Road, Marathahalli, Bangalore",
    scope: "Turnkey High-Voltage Power Substation, Transformer Erection & Main LT Distribution Panel Works",
    image: "/commercial_buildings.jpg",
  },
  {
    id: "embassy",
    title: "Embassy Tech Village",
    category: "HT Distribution & CEIG NOC",
    location: "Marathahalli, Bangalore",
    scope: "HT Underground Cable Laying, Ring Main Unit (RMU) & CEIG Safety Inspectorate Clearances",
    image: "/corporate_towers.jpg",
  },
  {
    id: "supreme",
    title: "Supreme Constructions",
    category: "Commercial Electrical Engineering",
    location: "Frazer Town, Bangalore",
    scope: "Complete Commercial Building Power Infrastructure & BESCOM Load Sanction Approval",
    image: "/power_substation.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Trusted Partners & Empanelled Utilities Logos */}
        <ClientLogos />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-slate-950 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 shadow-lg">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Proven Engineering Track Record</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight uppercase">
            Featured <span className="text-amber-500">Executed Projects</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Over 44+ major HT/LT electrical engineering projects delivered for leading corporate tech parks, luxury hotels, and commercial hubs across Bangalore.
          </p>
        </div>

        {/* Featured Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-950 rounded-2xl border border-slate-800 hover:border-amber-500/50 overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Header */}
              {project.image && (
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-amber-500 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {project.category}
                    </span>
                  </div>
                </div>
              )}

              {/* Card Details */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-start gap-1.5 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{project.location}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
                  {project.scope}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More / View All Projects Button */}
        <div className="text-center pt-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-4 rounded-full font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-2xl hover:scale-105 transform"
          >
            <span>Explore All Executed Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
