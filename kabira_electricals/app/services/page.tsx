import Link from "next/link";
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import { ArrowLeft, ShieldCheck, Zap, CheckCircle2, PhoneCall, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Services & Scope of Works | Kabira Electricals",
  description:
    "Explore the complete range of Class 1 Electrical Contracting services, BESCOM load enhancement/reduction, KPTCL turnkey substation works, transformer installations, and CEIG approvals by Kabira Electricals, Bangalore.",
};

interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  badge: string;
  image: string;
  summary: string;
  scope: string[];
}

const allServices: ServiceDetail[] = [
  {
    id: "electrical-contracting",
    title: "1. Electrical Contracting (HT & LT Works)",
    category: "Turnkey Contracting",
    badge: "Class 1 Licensed Engineers",
    image: "/left_transformer.jpg",
    summary:
      "Complete end-to-end High Voltage (HT) and Low Voltage (LT) electrical installation, engineering, and maintenance for commercial buildings, hospitals, apartments, hotels, and IT parks across Karnataka.",
    scope: [
      "HT Cable Laying, Straight Through Jointing & Pot-Head Terminations",
      "Overhead HT/LT Transmission Line Erection & Pole Structure Work",
      "Main Distribution Boards (MDB), Sub-Distribution Boards & Switchgear Panels",
      "Street Lighting, Outdoor Flood Lighting & Perimeter Cable Infrastructure",
      "Preventive & Breakdown Annual Maintenance Contracts (AMC)",
    ],
  },
  {
    id: "bescom-works",
    title: "2. BESCOM Works & Utility Liasioning",
    category: "Departmental Approval",
    badge: "BESCOM Empanelled",
    image: "/right_building.jpg",
    summary:
      "Official departmental representation and fast-track processing of all BESCOM documentation, approvals, and power sanction agreements for commercial and industrial establishments.",
    scope: [
      "Sanction of Power Supply for New Commercial & Residential Projects",
      "Preparation & Submission of Official BESCOM Estimation & Technical Drawings",
      "Metering Equipment Procurement, Testing & Official Grid Commissioning",
      "Departmental Nodal Coordination across Bangalore & Karnataka Circles",
    ],
  },
  {
    id: "bescom-load-enhancement",
    title: "3. BESCOM Load Enhancement (Capacity Upgradation)",
    category: "Capacity Expansion",
    badge: "Fast-Track Approval",
    image: "/corporate_towers.jpg",
    summary:
      "Seamless load enhancement and power capacity expansion for growing businesses, manufacturing units, commercial complexes, and data hubs requiring additional power supply.",
    scope: [
      "Technical Feasibility & Load Demand Study for Facilities",
      "Submission of Additional Load Demand Applications to BESCOM Offices",
      "Upgradation of Substation Transformers, Cables & Main Breakers",
      "Final Meter Inspection & Official Enhanced Power Release",
    ],
  },
  {
    id: "bescom-load-reduction",
    title: "4. BESCOM Load Reduction & Tariff Optimization",
    category: "Cost Optimization",
    badge: "Clearance Specialists",
    image: "/substation_source.jpg",
    summary:
      "Official processing for reduction of contracted power load to eliminate unnecessary fixed monthly demand charges and optimize operational electricity tariffs.",
    scope: [
      "Facility Energy Audit & Actual Maximum Demand (MD) Evaluation",
      "Application & Documentation for Contracted Load Reduction",
      "Modification of Metering CT/PT Ratios & Grid Agreements",
      "Official Department Clearance & Reduced Fixed Charge Billing Activation",
    ],
  },
  {
    id: "kptcl-works",
    title: "5. KPTCL Turnkey Substation & Transmission Works",
    category: "Grid Infrastructure",
    badge: "KPTCL Turnkey EPC",
    image: "/substation_source.jpg",
    summary:
      "Execution of large-scale KPTCL substation projects, high-voltage transmission lines, and industrial power evacuation systems across urban and rural sites.",
    scope: [
      "Turnkey Substation Bay Erection, Civil Works & Transformer Placement",
      "KPTCL Grid Feeder Line Extension & Transmission Towers",
      "High Voltage Circuit Breakers, Isolators, Lightning Arresters & Protection Relays",
      "KPTCL Departmental Testing, Safety Approvals & Final Grid Synchronization",
    ],
  },
  {
    id: "transformer-works",
    title: "6. Transformer Erection & Substation Setup",
    category: "Substation Works",
    badge: "Heavy Infrastructure",
    image: "/left_transformer.jpg",
    summary:
      "Specialized installation, testing, and commissioning of oil-immersed and dry-type distribution transformers ranging from 63 kVA to 5000+ kVA capacity.",
    scope: [
      "Distribution & Power Transformer Supply, Rigging & Mounting",
      "Transformer Oil Filtration, Dielectric Breakdown Testing & DGA",
      "HV/LV Cable Box Termination, Neutral Earthing & Lightning Protection",
      "Compact Substation (CSS) & Ring Main Unit (RMU) Integration",
    ],
  },
  {
    id: "ceig-approvals",
    title: "7. CEIG Safety Clearances & Inspection NOC",
    category: "Statutory Clearances",
    badge: "CEIG Safety Certified",
    image: "/corporate_towers.jpg",
    summary:
      "Mandatory statutory approvals from the Chief Electrical Inspectorate to Government (CEIG) for high-voltage installations prior to power energization.",
    scope: [
      "Preparation & Submission of Detailed Electrical Single Line Diagrams (SLD)",
      "CEIG Initial Drawing Sanction & Scheme Approval",
      "Pre-Commissioning Insulation Resistance, Earth Pit & Relay Calibration Audits",
      "Official CEIG Site Inspection Coordination & Final Safety Clearance Certificate",
    ],
  },
  {
    id: "arranging-power-supply",
    title: "8. Arranging Power Supply & Temporary Grid Power",
    category: "Power Procurement",
    badge: "End-to-End Solutions",
    image: "/right_building.jpg",
    summary:
      "Comprehensive power supply management for upcoming construction sites, mega-developments, and temporary industrial power requirements.",
    scope: [
      "Temporary Construction Power Sanction & DG Set Back-up Integration",
      "Express Feeder Dedicated Lines for Critical Healthcare & IT Infrastructure",
      "Net-Metering & Solar Rooftop (SRTPV) Utility Grid Connectivity",
      "24/7 Emergency Breakdown Support & Power Restoral Services",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header Bar */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-amber-400 font-semibold text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="font-bold text-base sm:text-lg tracking-tight">
            KABIRA <span className="text-amber-500">ELECTRICALS</span>
          </div>

          <Link
            href="/#contact"
            className="px-5 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md"
          >
            Get Quote
          </Link>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-slate-950/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Class 1 Govt. Licensed Contractor & Engineers</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight">
            Complete <span className="text-amber-500">Services & Scope of Works</span>
          </h1>

          <p className="max-w-3xl text-sm sm:text-lg text-slate-300 leading-relaxed font-normal">
            Explore our specialized turnkey electrical engineering services — from high-voltage substation installations and BESCOM load enhancement to CEIG safety approvals across Karnataka.
          </p>
        </div>
      </section>

      {/* All 8 Services Detailed List */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
        {allServices.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={service.id}
              id={service.id}
              className={`bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 transition-all hover:shadow-2xl`}
            >
              {/* Image Banner */}
              <div className={`relative h-64 sm:h-80 lg:h-full w-full rounded-2xl overflow-hidden bg-slate-900 ${isEven ? 'lg:order-1 lg:col-span-5' : 'lg:order-2 lg:col-span-5'}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    {service.badge}
                  </span>
                </div>
              </div>

              {/* Text Description & Scope */}
              <div className={`space-y-6 ${isEven ? 'lg:order-2 lg:col-span-7' : 'lg:order-1 lg:col-span-7'}`}>
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
                    {service.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {service.title}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {service.summary}
                </p>

                {/* Scope of Work Points */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Key Scope of Work & Deliverables:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.scope.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-950 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>Request Quote for this Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </main>

      {/* Footer Callout */}
      <footer className="bg-slate-900 text-white py-16 px-4 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase">
            Need Expert Electrical Engineering & Approvals?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Contact Mr. Afzal Khan and the senior engineering team at Kabira Electricals for immediate project consultation and turnkey quotes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg"
            >
              <span>Get Immediate Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
