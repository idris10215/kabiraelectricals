import Link from "next/link";
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { ArrowLeft, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";

export const metadata = {
  title: "Services | Kabira Electricals",
  description:
    "Explore our 8 core specialized Class 1 Electrical Contracting services, BESCOM approvals, KPTCL turnkey works, transformer installations, and CEIG clearances.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 border border-amber-500/40 bg-slate-950/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Govt. Licensed Class 1 Contractor & Engineers</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
              Specialized <span className="text-amber-500">Engineering Services</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2-2-2-2 Grid (2 Columns on Desktop & Mobile) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group relative h-80 sm:h-96 overflow-hidden border border-slate-800 hover:border-amber-500/60 transition-all duration-500 flex flex-col justify-end p-6 sm:p-8 bg-slate-900 shadow-xl hover:shadow-2xl"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-flex items-center gap-1.5 bg-slate-950/90 border border-amber-500/40 text-amber-400 text-[10px] font-extrabold px-3 py-1 uppercase tracking-widest shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {service.badge}
                </span>
              </div>

              {/* Card Title & CTA */}
              <div className="relative z-20 space-y-3">
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-amber-500">
                  {service.category}
                </div>

                <h2 className="font-display text-xl sm:text-2xl font-extrabold text-white leading-snug group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h2>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-normal">
                  {service.summary}
                </p>

                <div className="pt-2 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-400 group-hover:text-amber-300">
                  <span>View Full Service Details</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
