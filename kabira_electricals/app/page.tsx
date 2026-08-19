// app/page.tsx
import Hero from "@/Components/Hero";
import ScrollVideoWrapper from "@/Components/ScrollVideo";
import Services from "@/Components/Services";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Award, Building2, CheckCircle2, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen">
      {/* 1. Hero Section with Dedicated Video Background */}
      <ScrollVideoWrapper videoSrc="/videos/kling-test.mp4">
        <Hero />
      </ScrollVideoWrapper>

      {/* 2. Executive Light-Themed Services Section */}
      <Services />

      {/* 3. About Company & Trust Pillars Section */}
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
                  Proprietary leadership owned by Mr. Afzal Khan, well-versed electrical contractor registered with Govt. of Karnataka & BESCOM.
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
              M/s Kabira Electricals is a Bangalore-based firm operating in the field of Electrical Installations and related services for Commercial Buildings, Hospitals, Housing, Hotels, and Industrial Facilities across Karnataka.
            </p>

            {/* Strength Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  <span>Skilled Technical Workforce</span>
                </div>
                <p className="text-xs text-slate-600">
                  Engineers, supervisors, quality controllers, and certified technicians dedicated to timely execution.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  <span>BESCOM & KPTCL Empanelled</span>
                </div>
                <p className="text-xs text-slate-600">
                  Proven track record in obtaining fast-track departmental clearances, sanctions, and CEIG safety NOCs.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Projects Executed Highlights Section */}
      <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-slate-950 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Proven Track Record</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight uppercase">
              Featured <span className="text-amber-500">Executed Projects</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg">
              Having delivered 44+ major HT/LT electrical engineering projects for reputed corporate brands, healthcare facilities, and commercial hubs in Bangalore.
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">HT Installation</span>
              <h3 className="text-xl font-bold text-white">Court Yard Marriott</h3>
              <p className="text-xs text-slate-300">Location: Outer Ring Road, Marathahalli, Bangalore</p>
              <div className="pt-2 text-xs text-slate-400 border-t border-slate-700">Turnkey High-Voltage Power Substation & Panel Works</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">HT Substation</span>
              <h3 className="text-xl font-bold text-white">Embassy Tech Village</h3>
              <p className="text-xs text-slate-300">Location: Marathahalli, Bangalore</p>
              <div className="pt-2 text-xs text-slate-400 border-t border-slate-700">HT Distribution Cables & CEIG Safety Clearances</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">HT / LT Works</span>
              <h3 className="text-xl font-bold text-white">Supreme Constructions</h3>
              <p className="text-xs text-slate-300">Location: Frazer Town, Bangalore</p>
              <div className="pt-2 text-xs text-slate-400 border-t border-slate-700">Complete Commercial Building Electrical Engineering</div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Executive Contact Section */}
      <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-slate-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Get In Touch</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
              Contact <span className="text-amber-500">Kabira Electricals</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Reach out directly to Mr. Afzal Khan and our senior engineering office in Bangalore for turnkey electrical project inquiries, load sanctions, and site visits.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Office Address</div>
                  <div className="text-slate-300 text-xs mt-0.5">
                    No. 45, BHEL Officer Layout, SRK Garden, Bannerghatta Road, Bangalore - 560041
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="font-bold text-white">Phone Numbers</div>
                  <div className="text-slate-300 text-xs mt-0.5">
                    +91 9986979419 / +91 9008155556
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="font-bold text-white">Email Address</div>
                  <div className="text-slate-300 text-xs mt-0.5">
                    kabiraelectricals@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-7 bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-white">Request a Consultation / Quote</h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Service Required</label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500">
                  <option>Select a Service</option>
                  <option>HT/LT Substation & Cable Laying Works</option>
                  <option>BESCOM Load Enhancement</option>
                  <option>BESCOM Load Reduction</option>
                  <option>KPTCL Turnkey Substation Works</option>
                  <option>Transformer Erection & Maintenance</option>
                  <option>CEIG Safety Clearance & Approval</option>
                  <option>Arranging Power Supply / Sanction</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Message / Project Details</label>
                <textarea
                  rows={4}
                  placeholder="Describe your electrical requirements or facility location..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="button"
                className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg cursor-pointer"
              >
                Send Request
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}