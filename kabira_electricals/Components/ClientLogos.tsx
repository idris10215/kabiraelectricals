"use client";

import { Building2, ShieldCheck, Award, CheckCircle2 } from "lucide-react";

interface ClientPartner {
  name: string;
  category: string;
  location: string;
}

const partners: ClientPartner[] = [
  { name: "BESCOM", category: "Govt. Power Utility", location: "Bangalore" },
  { name: "KPTCL", category: "Karnataka Power Transmission", location: "Karnataka" },
  { name: "Courtyard Marriott", category: "Luxury Hospitality", location: "ORR Marathahalli" },
  { name: "Embassy Tech Village", category: "Corporate Tech Park", location: "Bangalore" },
  { name: "Supreme Constructions", category: "Commercial Hubs", location: "Frazer Town" },
  { name: "CEIG Karnataka", category: "Electrical Safety Inspectorate", location: "Govt. Body" },
];

export default function ClientLogos() {
  return (
    <section className="bg-slate-900 text-white py-12 sm:py-16 border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Banner Title */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-slate-950 px-3.5 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-400">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Trusted Engineering Leadership</span>
          </div>

          <h3 className="font-display text-lg sm:text-2xl font-bold uppercase tracking-wider text-slate-200">
            Empanelled & Trusted By Leading <span className="text-amber-500">Corporations & Utilities</span>
          </h3>
        </div>

        {/* Client Partners Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 text-center space-y-1.5 transition-all duration-300 hover:scale-105 shadow-md"
            >
              <div className="flex justify-center text-amber-400">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="font-display font-extrabold text-sm sm:text-base text-white">
                {partner.name}
              </div>
              <div className="text-[9px] sm:text-[10px] text-amber-400 font-semibold uppercase tracking-wider">
                {partner.category}
              </div>
              <div className="text-[8px] sm:text-[9px] text-slate-400">
                {partner.location}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
