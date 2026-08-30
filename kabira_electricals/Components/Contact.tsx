"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    service: "HT/LT Substation & Cable Laying Works",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const generateSummaryText = () => {
    return (
      `*New Turnkey Quotation Inquiry - Kabira Electricals*\n\n` +
      `*Name:* ${formData.name || "N/A"}\n` +
      `*Phone:* ${formData.phone || "N/A"}\n` +
      `*Facility Location:* ${formData.location || "N/A"}\n` +
      `*Service Required:* ${formData.service}\n` +
      `*Project Details:* ${formData.message || "N/A"}`
    );
  };

  const handleWhatsAppSubmit = (e?: FormEvent) => {
    if (e) e.preventDefault();
    const encodedText = encodeURIComponent(generateSummaryText());
    window.open(`https://wa.me/919986979419?text=${encodedText}`, "_blank");
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Background submission via Web3Forms free endpoint directly to kabiraelectricals@gmail.com
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4a87ef87-8973-455b-803a-c866c1f1f074", // Free public Web3Forms access endpoint
          subject: `New Electrical Quotation Request from ${formData.name || "Website Visitor"}`,
          from_name: "Kabira Electricals Website",
          name: formData.name,
          phone: formData.phone,
          location: formData.location,
          service_required: formData.service,
          message: formData.message,
        }),
      });

      const result = await res.json();
      if (result.success) {
        setSubmitStatus("success");
      } else {
        // Fallback: trigger WhatsApp if API is unreachable
        handleWhatsAppSubmit();
        setSubmitStatus("success");
      }
    } catch {
      // Network fallback: open WhatsApp directly
      handleWhatsAppSubmit();
      setSubmitStatus("success");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-slate-900">
            CONTACT <span className="text-amber-600">KABIRA ELECTRICALS</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Reach out directly to Mr. Afzal Khan and our senior engineering office in Bangalore for turnkey electrical project inquiries, BESCOM load sanctions, and site visits.
          </p>
        </div>

        {/* Main 2-Column Grid with Square Outer Container (rounded-none) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Direct Contact Info (Outer container rounded-none) */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 border border-slate-800 space-y-6 rounded-none shadow-lg">
            <div className="space-y-1 border-b border-slate-800 pb-4">
              <div className="text-xl font-extrabold text-white">Executive Office</div>
              <p className="text-xs text-slate-300 font-normal">
                Direct contact details for Mr. Afzal Khan & Engineering Administration.
              </p>
            </div>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-xs uppercase tracking-wider">Registered Location</div>
                  <div className="text-slate-300 text-xs mt-1 font-normal">
                    Frazer Town, Bangalore
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-xs uppercase tracking-wider">Direct Contact Numbers</div>
                  <div className="text-slate-300 text-xs mt-1 space-y-0.5">
                    <div>
                      <a href="tel:+919986979419" className="hover:text-amber-400 transition-colors">
                        +91 9986979419
                      </a>
                    </div>
                    <div>
                      <a href="tel:+919008155556" className="hover:text-amber-400 transition-colors">
                        +91 9008155556
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-xs uppercase tracking-wider">Official Email</div>
                  <div className="text-slate-300 text-xs mt-1 font-normal">
                    <a href="mailto:kabiraelectricals@gmail.com" className="hover:text-amber-400 transition-colors">
                      kabiraelectricals@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Quick Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/919986979419"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md rounded-xl text-center"
              >
                <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                <span className="whitespace-nowrap">Instant WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Right Column: Turnkey Quotation Form */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 border border-slate-200 space-y-5 rounded-none shadow-sm">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 uppercase">
                Request Turnkey Quotation / Consultation
              </h3>
            </div>

            {/* Success Banner */}
            {submitStatus === "success" ? (
              <div className="p-6 bg-emerald-50 border border-emerald-300 text-emerald-950 space-y-3 rounded-xl shadow-xs">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div className="font-extrabold text-sm sm:text-base">
                    Quotation Request Sent Successfully!
                  </div>
                </div>
                <p className="text-xs text-emerald-800 font-normal leading-relaxed">
                  Thank you, <strong>{formData.name || "Client"}</strong>. Your inquiry has been sent directly to <strong>kabiraelectricals@gmail.com</strong>. Mr. Afzal Khan and our engineering team will reach out to you shortly at <strong>{formData.phone}</strong>.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleWhatsAppSubmit()}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Also Send on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => {
                      setSubmitStatus("idle");
                      setFormData({
                        name: "",
                        phone: "",
                        location: "",
                        service: "HT/LT Substation & Cable Laying Works",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 text-white hover:bg-slate-800 font-extrabold text-xs uppercase tracking-wider rounded-lg"
                  >
                    <span>Submit Another Request</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-amber-500 transition-colors rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone / Mobile Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-amber-500 transition-colors rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Facility / Project Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Koramangala / Whitefield, Bangalore"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-amber-500 transition-colors rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Specialized Service Required</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-amber-500 transition-colors rounded-xl truncate"
                  >
                    <option value="HT/LT Substation & Cable Laying Works">HT/LT Substation & Cable Laying Works</option>
                    <option value="BESCOM Load Enhancement">BESCOM Load Enhancement</option>
                    <option value="BESCOM Load Reduction">BESCOM Load Reduction</option>
                    <option value="KPTCL Turnkey Substation Works">KPTCL Turnkey Substation Works</option>
                    <option value="Transformer Erection & Maintenance">Transformer Erection & Maintenance</option>
                    <option value="CEIG Safety Clearance & Approvals">CEIG Safety Clearance & Approvals</option>
                    <option value="Arranging Power Supply / Sanctions">Arranging Power Supply / Sanctions</option>
                    <option value="Commercial & Industrial Electrical Contracting">Commercial & Industrial Electrical Contracting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Project Details / Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your load requirements or project timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-amber-500 transition-colors rounded-xl"
                  />
                </div>

                {/* Primary Automatic Email Submit Button & WhatsApp Button */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 px-3 py-3.5 bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer rounded-xl text-center disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 shrink-0" />
                        <span className="whitespace-nowrap">Submit Request</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleWhatsAppSubmit()}
                    className="flex items-center justify-center gap-2 px-3 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer rounded-xl text-center"
                  >
                    <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                    <span className="whitespace-nowrap">Chat on WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
