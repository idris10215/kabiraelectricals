"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Branding */}
          <div className="space-y-3 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo_ke_transparent.svg"
                alt="Kabira Electricals Logo"
                width={140}
                height={32}
                style={{ width: "auto", height: "30px" }}
              />
              <span className="font-bold text-sm text-white tracking-tight">
                Kabira <span className="text-amber-500">Electricals</span>
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed">
              Govt. Licensed Class 1 Electrical Contractors & Engineers based in Bangalore, Karnataka.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-[10px] font-bold text-amber-400 uppercase tracking-widest">
              <ShieldCheck className="w-3 h-3 text-amber-400" />
              <span>Class 1 License</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <div className="font-bold text-white text-sm uppercase tracking-wider">Quick Links</div>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">
                  Services Page
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-amber-400 transition-colors">
                  Executed Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Engineering Services */}
          <div className="space-y-3">
            <div className="font-bold text-white text-sm uppercase tracking-wider">Engineering Scope</div>
            <ul className="space-y-1.5 text-[11px]">
              <li>• Turnkey HT Substation & Panel Works</li>
              <li>• BESCOM Load Enhancement & Reduction</li>
              <li>• KPTCL Substation & Overhead Line Works</li>
              <li>• Transformer Installation & Erection</li>
              <li>• CEIG Safety Inspection & Approvals</li>
              <li>• Commercial Electrical Contracting</li>
            </ul>
          </div>

          {/* Col 4: Reach Us */}
          <div className="space-y-3">
            <div className="font-bold text-white text-sm uppercase tracking-wider">Contact Info</div>
            <div className="space-y-2 text-[11px]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>No. 45, BHEL Officer Layout, SRK Garden, Bannerghatta Road, Bangalore - 560041</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>+91 9986979419 / +91 9008155556</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>kabiraelectricals@gmail.com</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-4">
          <div>© {new Date().getFullYear()} Kabira Electricals. All rights reserved.</div>
          <div>Govt. Licensed Class 1 Electrical Contractor — Bangalore, India</div>
        </div>
      </div>
    </footer>
  );
}
