"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, ArrowRight, ShieldCheck, CheckCircle2, Building2, Cpu, Activity } from "lucide-react";

interface ServiceCardData {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  image: string;
  highlights: string[];
}

const featuredServices: ServiceCardData[] = [
  {
    id: "ht-lt-works",
    title: "HT / LT Substation & Cable Laying Works",
    category: "Electrical Contracting",
    badge: "Class 1 HT/LT Specialists",
    description:
      "Turnkey High Voltage (HT) & Low Voltage (LT) electrical installations, overhead line erection, cable jointing, termination, and heavy-duty switchgear panels.",
    image: "/left_transformer.jpg",
    highlights: ["HT Cable Laying & Termination", "Switchgear & Main Panels", "Substation Erection"],
  },
  {
    id: "bescom-works",
    title: "BESCOM Load Enhancement & Sanctions",
    category: "Utility Liaisoning",
    badge: "BESCOM Empanelled",
    description:
      "End-to-end departmental liaisoning for commercial & industrial BESCOM load enhancement, load reduction, new power supply sanctions, and tariff approvals.",
    image: "/right_building.jpg",
    highlights: ["Load Enhancement & Expansion", "Load Reduction Clearance", "New Power Supply Sanction"],
  },
  {
    id: "kptcl-works",
    title: "KPTCL Turnkey Substation Works",
    category: "Grid Infrastructure",
    badge: "KPTCL Turnkey EPC",
    description:
      "Complete KPTCL turnkey substation projects, transmission line erection, industrial power evacuation, and grid connection engineering across Karnataka.",
    image: "/substation_source.jpg",
    highlights: ["KPTCL Substation Erection", "Overhead Transmission Lines", "Industrial Power Evacuation"],
  },
  {
    id: "ceig-approvals",
    title: "CEIG Safety Clearances & Approvals",
    category: "Statutory Approvals",
    badge: "CEIG Safety Certified",
    description:
      "Chief Electrical Inspectorate to Government (CEIG) safety clearances, statutory drawing approvals, safety NOC certificates, and routine electrical audits.",
    image: "/corporate_towers.jpg",
    highlights: ["CEIG Drawing Approval", "Electrical Safety Inspection", "Statutory NOC Certificate"],
  },
];

export default function Services() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="services" ref={sectionRef} className="relative bg-slate-50 text-slate-900 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-200 overflow-hidden">
      {/* Background Subtle Gradient Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 shadow-sm">
            <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>Class 1 Engineering Services</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight uppercase">
            Our Core <span className="text-amber-600">Electrical Capabilities</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Delivering high-voltage engineering excellence, utility department liaisoning, and turnkey power infrastructure for leading corporate, commercial, and industrial facilities in Bangalore.
          </p>
        </div>

        {/* 4 Feature Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featuredServices.map((service) => {
            const isHovered = activeCardId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveCardId(service.id)}
                onMouseLeave={() => setActiveCardId(null)}
                onMouseMove={(e) => handleMouseMove(e, service.id)}
                className="relative group bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer transform hover:-translate-y-1.5"
              >
                {/* Custom Floating Thunder Cursor Badge on Hover */}
                {isHovered && (
                  <div
                    style={{
                      left: `${mousePos.x}px`,
                      top: `${mousePos.y}px`,
                    }}
                    className="pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-amber-500 text-slate-950 px-3 py-1.5 rounded-full text-xs font-bold shadow-xl animate-fade-in border border-amber-300"
                  >
                    <Zap className="w-4 h-4 fill-slate-950 text-slate-950 animate-bounce" />
                    <span>Explore</span>
                  </div>
                )}

                <div>
                  {/* Card Image Banner */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md border border-amber-500/40 text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                        {service.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                        {service.category}
                      </span>
                      <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 pt-2 border-t border-slate-100">
                      {service.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-slate-100 group-hover:bg-amber-500 text-slate-800 group-hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-300"
                  >
                    <span>View Service Scope</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services CTA Button */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-950 px-8 py-4 rounded-full font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105 transform"
          >
            <span>Explore All 8 Specialized Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}