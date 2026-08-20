import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, CheckCircle2, ArrowLeft, ArrowRight, Building2, Users, Wrench } from "lucide-react";

export const metadata = {
  title: "About Us | Kabira Electricals",
  description: "Learn about Kabira Electricals, Class 1 Licensed Electrical Contractors in Bangalore owned by Mr. Afzal Khan with 15+ years of engineering leadership.",
};

export default function AboutPage() {
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
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Class 1 Engineering Leadership</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white">
              About <span className="text-amber-500">Kabira Electricals</span>
            </h1>

            <p className="max-w-3xl text-slate-300 text-base sm:text-lg leading-relaxed">
              M/s Kabira Electricals is a premier Class 1 Licensed Electrical Contracting firm based in Bangalore, delivering end-to-end HT/LT power solutions, BESCOM approvals, and KPTCL substation projects.
            </p>
          </div>
        </div>
      </section>

      {/* About Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* Story & Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative h-96 sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-800">
            <Image
              src="/left_transformer.jpg"
              alt="Kabira Electricals Leadership & Substation Works"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-950/90 backdrop-blur-md rounded-2xl border border-amber-500/40 text-white space-y-1">
              <div className="text-2xl font-extrabold text-amber-400">Mr. Afzal Khan</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">Founder & Managing Director</div>
              <p className="text-xs text-slate-400 pt-1">
                Leading Kabira Electricals with over 15+ years of hands-on expertise in high-voltage power grids, BESCOM sanctions, and CEIG approvals.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Our Journey & <span className="text-amber-500">Engineering Excellence</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Founded with a commitment to uncompromised electrical safety and compliance, Kabira Electricals has grown into one of Bangalore’s most trusted Class 1 Govt. Licensed contractors.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We specialize in execution of complex High Tension (HT) switchgear, 11kV/33kV substations, transformer erection, BESCOM load enhancement/reduction, and arranging power supply for IT tech parks, luxury hotels, multi-specialty hospitals, and industrial manufacturing plants.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="text-3xl font-extrabold text-white">44+</div>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Executed Projects</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="text-3xl font-extrabold text-white">100+</div>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Skilled Engineers</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-display text-3xl font-extrabold uppercase text-white">Why Businesses Trust Us</h2>
            <p className="text-xs sm:text-sm text-slate-400">Built on strict compliance, safety standardizations, and departmental relationships.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <ShieldCheck className="w-8 h-8 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Class 1 Govt. License</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Authorized to execute HT installations, sub-stations, and high-voltage distribution networks across Karnataka.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Users className="w-8 h-8 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Turnkey Workforce</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Full in-house team of certified electrical engineers, supervisors, line workers, and safety officers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Wrench className="w-8 h-8 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Department Clearance</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Expert liaison with BESCOM, KPTCL, and Chief Electrical Inspectorate to Government (CEIG) for fast-track approvals.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-amber-500/30 text-center space-y-6">
          <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white uppercase">
            Ready to Start Your Electrical Project?
          </h3>
          <div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-2xl transition-transform hover:scale-105"
            >
              <span>Contact Executive Office</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}
