import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { servicesData } from "@/data/services";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Kabira Electricals",
    };
  }

  return {
    title: `${service.title} | Kabira Electricals`,
    description: service.summary,
  };
}

export default async function SingleServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen text-slate-100 font-sans">
      <Navbar />

      {/* Hero Header for Single Service */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>

          <div className="space-y-3">
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Detail Section for ONLY THIS SERVICE */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Left Side: Large Visual Banner (Stretched to match right card height) */}
          <div className="lg:col-span-5 relative min-h-[320px] sm:min-h-[400px] h-full w-full border border-slate-800 overflow-hidden bg-slate-900 shadow-2xl">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          </div>

          {/* Right Side: Comprehensive Scope & Execution Details */}
          <div className="lg:col-span-7 space-y-8 bg-slate-900 p-8 sm:p-10 border border-slate-800 shadow-2xl flex flex-col justify-between">
            <div className="space-y-3">
              <h2 className="text-2xl font-extrabold text-white uppercase tracking-tight">
                Service Overview
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {service.summary}
              </p>
            </div>

            {/* Scope of Work Deliverables */}
            <div className="space-y-4 pt-6 border-t border-slate-800">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
                Key Scope of Work & Deliverables:
              </h3>
              <ul className="space-y-3">
                {service.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 leading-snug">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Consultation / Quote CTA -> Routes directly to /contact */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="font-bold text-white text-sm">Need this service for your facility?</div>
                <div className="text-xs text-slate-400">Get a turnkey quotation directly from Mr. Afzal Khan.</div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shrink-0"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
