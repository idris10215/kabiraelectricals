"use client";

import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Contact Info Column */}
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
        <div className="lg:col-span-7 bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
          <h3 className="text-xl font-bold text-white">Request a Consultation / Quote</h3>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Service Required</label>
              <select className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors">
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
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg cursor-pointer"
            >
              <span>Send Request</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
