"use client";

import { useState } from "react";
import Image from "next/image";
import { FileText, X, MapPin, CheckCircle2 } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  authority: string;
  badge: string;
  location: string;
  workOrderValue: string;
  workOrderNo: string;
  date: string;
  scope: string[];
  imageSrc: string;
}

const certificatesData: Certificate[] = [
  {
    id: "bescom-panathur",
    title: "Certificate of Completion of Work",
    authority: "Bengaluru Electricity Supply Company Limited (BESCOM)",
    badge: "BESCOM Govt. Authority",
    location: "#34/5, Panathur (V) Varthur Hobli, Bangalore",
    workOrderValue: "₹16,96,117/-",
    workOrderNo: "465/KML/24-25/S7/self-exe/07 Dated: 05-04-24",
    date: "13 Nov 2024",
    scope: [
      "Installation of 2OD+1VL 11KV 3Way RMU (Ring Main Unit)",
      "Installation of 63KVA 5Star Power Transformer",
      "Laying of 11KV HT UG Cable",
      "Making of 11KV HT Potheads & Joints",
      "All Necessary Earthing for Transformer & RMU",
    ],
    imageSrc: "/certificate_bescom.png",
  },
  {
    id: "mysore-ibps",
    title: "Work Execution Clearance Certificate",
    authority: "Mysore City Corporation (Executive Engineer, Water Supply)",
    badge: "Municipal Water Works",
    location: "IBPS Plant, Pinjarapole Kabini Water Supply Scheme, Mysore",
    workOrderValue: "₹19,84,873/-",
    workOrderNo: "DMA/2024-25/WS/WORK_INDENT20144/CALL-4",
    date: "04 Sep 2025",
    scope: [
      "Installation of UG Cable & RMU for Electrical Connection Network",
      "Upgradation Project of IBPS Plant in Pinjarapole Kabini Water Supply Scheme",
    ],
    imageSrc: "/certificate_mysore.png",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section className="space-y-8 pt-4">

      {/* 2-Card Certificate Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            className="bg-white border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            {/* Card Top */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[10px] sm:text-xs font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 uppercase tracking-wider">
                  {cert.badge}
                </span>
                <span className="text-xs font-extrabold text-slate-900 bg-slate-100 px-3 py-1 border border-slate-200">
                  Value: {cert.workOrderValue}
                </span>
              </div>

              <div className="space-y-1.5 border-b border-slate-100 pb-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-bold text-amber-700 uppercase tracking-wide">
                  Issued By: {cert.authority}
                </p>
              </div>

              {/* Project Location */}
              <div className="flex items-start gap-2 text-xs text-slate-700 pb-2 border-b border-slate-100">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold text-slate-900 uppercase text-[10px] tracking-wider block">
                    Project Site Location:
                  </span>
                  <span className="font-semibold text-slate-800">{cert.location}</span>
                </div>
              </div>

              {/* Certified Scope of Work */}
              <div className="space-y-2 text-xs">
                <div className="font-extrabold text-slate-900 uppercase text-[10px] tracking-wider">
                  Certified Scope of Work:
                </div>
                <ul className="space-y-1.5">
                  {cert.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card Action Footer */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="text-[11px] font-bold text-slate-400">Date: {cert.date}</div>
              <button
                onClick={() => setSelectedCert(cert)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-950 text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Official Document</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal High-Res Document Viewer */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-white border border-slate-800 shadow-2xl max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {selectedCert.authority}
                </div>
                <h3 className="text-sm sm:text-lg font-extrabold text-white">
                  {selectedCert.title} ({selectedCert.workOrderValue})
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Close document modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Document Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-slate-100 flex items-center justify-center">
              <div className="relative w-full max-w-2xl min-h-[500px] border border-slate-300 bg-white shadow-xl">
                <Image
                  src={selectedCert.imageSrc}
                  alt={selectedCert.title}
                  width={900}
                  height={1200}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-slate-400 text-xs shrink-0">
              <div className="truncate pr-2">Ref: {selectedCert.workOrderNo}</div>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 bg-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors cursor-pointer shrink-0"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
