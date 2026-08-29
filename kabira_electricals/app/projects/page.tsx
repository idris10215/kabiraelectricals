import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { corporateSectorsData, privateEstatesSummaryData } from "@/data/projects";

export const metadata = {
  title: "Executed Projects Portfolio | Kabira Electricals",
  description: "Official sector showcase of turnkey HT/LT electrical engineering projects executed by Kabira Electricals across Karnataka.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen">
      <Navbar />

      {/* Page Hero Header */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="space-y-2">
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Executed Projects <span className="text-amber-500">Sector Showcase</span>
            </h1>

            <p className="max-w-3xl text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
              A portfolio of turnkey HT/LT electrical engineering installations executed by Kabira Electricals across commercial, tech park, industrial, and healthcare sectors in Karnataka.
            </p>
          </div>
        </div>
      </section>

      {/* Main 4 Sector Grid Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-8 sm:space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {corporateSectorsData.map((sector) => (
            <div
              key={sector.id}
              className="bg-white border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 sm:space-y-8 rounded-none"
            >
              {/* Sector Header */}
              <div className="space-y-2 border-b border-slate-100 pb-4 sm:pb-6">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  {sector.category}
                </h2>
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-600">
                  {sector.tagline}
                </p>
              </div>

              {/* Representative Client Brands */}
              <div className="space-y-3">
                <div className="text-[10px] sm:text-xs font-extrabold text-slate-400 uppercase tracking-widest">
                  Key Client Establishments:
                </div>
                <div className="flex flex-wrap gap-2">
                  {sector.clients.map((clientName, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold shadow-2xs hover:border-amber-500/50 hover:bg-amber-50/50 transition-colors rounded-none"
                    >
                      {clientName}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Private Commercial & Residential Estates Summary Card */}
        <div className="p-6 sm:p-8 bg-white border border-slate-200 shadow-sm space-y-4 rounded-none">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
              {privateEstatesSummaryData.title}
            </h3>
            <span className="text-[10px] sm:text-xs font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 uppercase tracking-wider self-start sm:self-auto rounded-none">
              {privateEstatesSummaryData.badge}
            </span>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            {privateEstatesSummaryData.description}
          </p>
        </div>

        {/* Executive Consultation Callout Banner */}
        <div className="p-8 sm:p-12 bg-slate-900 text-white text-center space-y-6 shadow-2xl border border-slate-800 rounded-none">
          <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Have a Similar Electrical Project Requirement?
          </h3>
          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Contact Mr. Afzal Khan and our senior engineering team in Bangalore for turnkey substation design, BESCOM load enhancement, and CEIG safety clearances.
          </p>
          <div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 shadow-2xl transition-transform hover:scale-105 rounded-full"
            >
              <span>Request Turnkey Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </section>

      {/* <Footer /> */}
    </main>
  );
}
