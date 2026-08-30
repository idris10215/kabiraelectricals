import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Contact from "@/Components/Contact";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Contact Us | Kabira Electricals",
  description: "Contact Kabira Electricals in Bangalore for turnkey HT/LT substation erection, BESCOM load enhancement, and CEIG safety approvals.",
};

export default function ContactPage() {
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

        </div>
      </section>

      {/* Contact Section Component */}
      <Contact />

      <Footer />
    </main>
  );
}
