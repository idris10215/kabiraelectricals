"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, ArrowRight, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Column: Stats & Experience Badge */}
        <div className="lg:col-span-5 relative">
          <div className="relative h-96 sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200">
            <Image
              src="/left_transformer.jpg"
              alt="Kabira Electricals Engineers at Work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

            {/* Badge overlay */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-amber-500/40 text-white space-y-2">
              <div className="text-3xl font-extrabold text-amber-400">15+ Years</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Engineering Leadership in Karnataka
              </div>
              <p className="text-xs text-slate-400">
                Proprietary leadership owned by Mr. Afzal Khan, well-versed Class 1 electrical contractor registered with Govt. of Karnataka & BESCOM.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: About Content & Strengths */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>About Kabira Electricals</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight uppercase">
            Registered Class 1 <span className="text-amber-600">Electrical Contractors</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            M/s Kabira Electricals is a Bangalore-based firm operating in the field of High Voltage & Low Voltage Electrical Installations for Commercial Buildings, Hospitals, IT Parks, Hotels, and Industrial Facilities across Karnataka.
          </p>

          {/* Strength Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                <span>Skilled Technical Workforce</span>
              </div>
              <p className="text-xs text-slate-600">
                Experienced engineers, supervisors, quality controllers, and certified technicians dedicated to timely execution.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                <span>BESCOM & KPTCL Empanelled</span>
              </div>
              <p className="text-xs text-slate-600">
                Proven track record in obtaining fast-track departmental clearances, load sanctions, and CEIG safety NOCs.
              </p>
            </div>
          </div>

          {/* Learn More About Us Button */}
          <div className="pt-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-7 py-3.5 font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-105 transform"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
