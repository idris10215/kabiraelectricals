import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Award, ShieldCheck, MapPin, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Executed Projects | Kabira Electricals",
  description: "Explore 44+ turnkey HT/LT electrical engineering projects executed by Kabira Electricals across Bangalore and Karnataka.",
};

const allProjects = [
  {
    id: "marriott",
    title: "Court Yard Marriott",
    category: "Turnkey HT Installation & Panels",
    location: "Outer Ring Road, Marathahalli, Bangalore",
    scope: "High-Voltage Power Substation, Transformer Erection, Main LT Distribution Panel & DG Synchronization.",
    highlights: ["11kV Transformer Installation", "CEIG Safety Approval", "24/7 Power Backup Synchronizing"],
    image: "/commercial_buildings.jpg",
  },
  {
    id: "embassy",
    title: "Embassy Tech Village",
    category: "HT Substation & Cable Laying",
    location: "Marathahalli, Bangalore",
    scope: "HT Underground Cable Trenching, Ring Main Unit (RMU) Switchgear & CEIG Clearance.",
    highlights: ["HT Cable Jointing & Testing", "Substation Automation", "Fast-track Approvals"],
    image: "/corporate_towers.jpg",
  },
  {
    id: "supreme",
    title: "Supreme Constructions",
    category: "Commercial Electrical Engineering",
    location: "Frazer Town, Bangalore",
    scope: "Complete Commercial Building Power Distribution & BESCOM Load Sanction Approval.",
    highlights: ["BESCOM Load Sanction", "Internal & External Wiring", "Lightning Protection Systems"],
    image: "/power_substation.jpg",
  },
  {
    id: "hospital",
    title: "Multi-Specialty Healthcare Hub",
    category: "Medical Power Infrastructure",
    location: "Bannerghatta Road, Bangalore",
    scope: "Uninterrupted Power Supply (UPS) Panels, ICU Isolation Power & Emergency Substation Erection.",
    highlights: ["Clean Room Power Isolation", "Dual Transformer Redundancy", "CEIG Clearance"],
    image: "/left_transformer.jpg",
  },
  {
    id: "industrial",
    title: "Peenya Industrial Manufacturing Complex",
    category: "Industrial Power & Load Enhancement",
    location: "Peenya Industrial Area, Bangalore",
    scope: "Heavy Industrial Load Enhancement from 500kVA to 2000kVA with Dedicated KPTCL Bay Line.",
    highlights: ["2000kVA Load Enhancement", "Dedicated Bay Line Works", "Power Factor Improvement"],
    image: "/power_substation.jpg",
  },
  {
    id: "housing",
    title: "Luxury Residential Township",
    category: "Residential HT/LT Distribution",
    location: "Whitefield, Bangalore",
    scope: "Underground LT Cable Distribution, Transformer Yard & Individual Smart Meter Panel Yards.",
    highlights: ["Smart Metering Panels", "Underground Cable Networks", "BESCOM Individual Sanctions"],
    image: "/corporate_towers.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen">
      <Navbar />

      {/* Page Hero Header */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-slate-950 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Portfolio of Excellence</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white">
              Executed <span className="text-amber-500">Projects</span>
            </h1>

            <p className="max-w-3xl text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore our track record of over 44+ completed turnkey electrical projects across Karnataka, spanning corporate tech parks, 5-star hotels, healthcare hubs, and heavy industrial facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Showcase Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 rounded-3xl border border-slate-800 hover:border-amber-500/50 overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Project Image Header */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-slate-950 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h2 className="text-2xl font-extrabold text-white">{project.title}</h2>
                  <div className="flex items-center gap-1.5 text-xs text-amber-400">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-2">
                    {project.scope}
                  </p>
                </div>

                {/* Highlights Bullet Points */}
                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key Deliverables</div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-amber-500/30 text-center space-y-6">
          <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white uppercase">
            Have a Similar Electrical Project in Mind?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Get in touch with Kabira Electricals for turnkey substation design, BESCOM load enhancement, and CEIG safety approvals.
          </p>
          <div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-2xl transition-transform hover:scale-105"
            >
              <span>Get a Turnkey Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
