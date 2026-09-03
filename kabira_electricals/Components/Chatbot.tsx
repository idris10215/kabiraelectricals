"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, ChevronRight, Send, Zap } from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: { label: string; action: () => void }[];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll smoothly to bottom whenever messages update
  useEffect(() => {
    if (isOpen && messages.length > 0) {
      chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Initialize chat greeting when opened
  const handleOpenChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      showInitialOptions();
    }
  };

  const showInitialOptions = () => {
    setMessages([
      {
        id: "1",
        sender: "bot",
        text: "Hello! Welcome to Kabira Electricals. I am your Engineering Consultation Assistant. Select any option below to explore our services, project portfolio, or get a quick quotation:",
        options: [
          {
            label: "⚡ HT/LT Substation & Cable Laying",
            action: () => handleSelectService("HT/LT Substation & Cable Laying Works"),
          },
          {
            label: "📜 BESCOM Load Enhancement & Reduction",
            action: () => handleSelectService("BESCOM Load Enhancement & Reduction"),
          },
          {
            label: "🏗️ KPTCL Turnkey Substation Works",
            action: () => handleSelectService("KPTCL Turnkey Substation Works"),
          },
          {
            label: "🏭 Commercial & Industrial Electrical",
            action: () => handleSelectService("Commercial & Industrial Electrical Contracting"),
          },
          {
            label: "🏢 View 44+ Executed Projects",
            action: () => handleSelectProjects(),
          },
          {
            label: "🏆 Govt. Completion Certificates",
            action: () => handleSelectCertificates(),
          },
          {
            label: "📞 Direct Contact Details",
            action: () => handleSelectContact(),
          },
        ],
      },
    ]);
  };

  const handleSelectService = (serviceName: string) => {
    let responseText = "";
    let projectsText = "";
    let whatsappQuery = "";

    if (serviceName === "HT/LT Substation & Cable Laying Works") {
      responseText = "For HT/LT Substation & Cable Laying, M/s Kabira Electricals executes 11kV/33kV indoor & outdoor substation erection, RMU installation, transformer commissioning, and high-voltage underground cable pothead jointing.";
      projectsText = "🏆 Featured Executed Projects: Embassy Tech Village (Marathahalli), Courtyard Marriott, DRLS Palace Banquet Hall, and Supreme Constructions.";
      whatsappQuery = "Hi Mr. Afzal Khan, I inquired on your website regarding HT/LT Substation & Cable Laying Works and would like a quotation for my project.";
    } else if (serviceName === "BESCOM Load Enhancement & Reduction") {
      responseText = "We manage complete end-to-end BESCOM electrical load sanction enhancements, load reductions, power supply arrangements, and safety approvals for commercial facilities & tech parks.";
      projectsText = "🏆 Featured Executed Work: Sanctioned completion clearances for MS Building Panathur (₹16.96 Lakhs BESCOM Work Order) and enterprise establishments.";
      whatsappQuery = "Hi Mr. Afzal Khan, I need assistance with BESCOM Load Enhancement / Reduction for my commercial project.";
    } else if (serviceName === "KPTCL Turnkey Substation Works") {
      responseText = "We specialize in KPTCL turnkey substation construction, bay line extension works, overhead transmission line erection, and Government safety testing across Karnataka.";
      projectsText = "🏆 Executed Work: Turnkey municipal water plant infrastructure (Mysore City Corporation ₹19.84 Lakhs IBPS Kabini Water Supply Project).";
      whatsappQuery = "Hi Mr. Afzal Khan, I would like to consult regarding KPTCL Turnkey Substation & Transmission Works.";
    } else {
      responseText = "We execute complete end-to-end electrical contracting for IT tech parks, luxury hotels, multi-specialty hospitals, banquet halls, and industrial manufacturing plants.";
      projectsText = "🏆 Representative Establishments: Meghana Foods (Koramangala), Narmada Restaurants, ACT Fibernet (Atria Convergence), Diascope Healthcare, and IBPS Plant.";
      whatsappQuery = "Hi Mr. Afzal Khan, I have a Commercial / Industrial Electrical Contracting project inquiry.";
    }

    const newMessages: ChatMessage[] = [
      {
        id: Date.now().toString(),
        sender: "user",
        text: `Tell me about ${serviceName}`,
      },
      {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: `${responseText}\n\n${projectsText}\n\nWould you like to connect with Mr. Afzal Khan directly for a turnkey quotation?`,
        options: [
          {
            label: "💬 Enquire on WhatsApp Now",
            action: () => {
              window.open(`https://wa.me/919986979419?text=${encodeURIComponent(whatsappQuery)}`, "_blank");
            },
          },
          {
            label: "📄 View All Executed Projects",
            action: () => {
              setIsOpen(false);
              window.location.href = "/projects";
            },
          },
          {
            label: "🔄 Explore Other Services",
            action: () => showInitialOptions(),
          },
        ],
      },
    ];

    setMessages((prev) => [...prev, ...newMessages]);
  };

  const handleSelectProjects = () => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: "user",
        text: "Tell me about your Executed Projects",
      },
      {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "M/s Kabira Electricals has executed over 44+ turnkey commercial, tech park, and industrial electrical projects across Karnataka.\n\n🏢 Key Executed Establishments:\n• Tech Parks & Offices: Embassy Tech Village, Supreme Constructions, NGS Groups\n• Hospitality & Dining: Courtyard Marriott, DRLS Palace, Meghana Foods, Narmada\n• Enterprise Infrastructure: ACT Fibernet (Atria Convergence)\n• Municipal & Healthcare: Mysore City Corporation IBPS Plant, Diascope Healthcare\n\nPlus 25+ private commercial & residential estate projects!",
        options: [
          {
            label: "💬 Connect with Mr. Afzal Khan on WhatsApp",
            action: () => {
              window.open("https://wa.me/919986979419?text=Hi%20Mr.%20Afzal%20Khan,%20I%20would%20like%20to%20consult%20regarding%20turnkey%20electrical%20projects.", "_blank");
            },
          },
          {
            label: "📄 Open Complete Projects Portfolio Page",
            action: () => {
              setIsOpen(false);
              window.location.href = "/projects";
            },
          },
          {
            label: "🔄 Main Menu",
            action: () => showInitialOptions(),
          },
        ],
      },
    ]);
  };

  const handleSelectCertificates = () => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: "user",
        text: "Tell me about your Government Completion Certificates",
      },
      {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "M/s Kabira Electricals holds verified Class 1 Government licenses with Karnataka State Government & BESCOM. We have executed official sanctioned projects including BESCOM Koramangala Division (₹16.96 Lakhs) and Mysore City Corporation Kabini Water Supply (₹19.84 Lakhs).\n\nYou can view and audit our official completion certificates directly on our Projects page!",
        options: [
          {
            label: "📄 View Official Certificates on Projects Page",
            action: () => {
              setIsOpen(false);
              window.location.href = "/projects";
            },
          },
          {
            label: "💬 Connect with Mr. Afzal Khan on WhatsApp",
            action: () => {
              window.open("https://wa.me/919986979419?text=Hi%20Mr.%20Afzal%20Khan,%20I%20would%20like%20to%20consult%20regarding%20turnkey%20electrical%20projects.", "_blank");
            },
          },
          {
            label: "🔄 Main Menu",
            action: () => showInitialOptions(),
          },
        ],
      },
    ]);
  };

  const handleSelectContact = () => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: "user",
        text: "Show Direct Contact Details",
      },
      {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "📍 Executive Office:\n38/1, Netaji Rd, Frazer Town, Bengaluru, Karnataka 560005\n\n📞 Direct Contact:\n+91 9986979419 / +91 9008155556\n\n✉️ Email:\nkabiraelectricals@gmail.com",
        options: [
          {
            label: "💬 Chat on WhatsApp (+91 9986979419)",
            action: () => {
              window.open("https://wa.me/919986979419", "_blank");
            },
          },
          {
            label: "📞 Call Executive Office",
            action: () => {
              window.location.href = "tel:+919986979419";
            },
          },
          {
            label: "🔄 Main Menu",
            action: () => showInitialOptions(),
          },
        ],
      },
    ]);
  };

  return (
    <aside aria-label="Engineering Assistant Chatbot">
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={handleOpenChat}
          aria-label="Open Kabira Electricals Chat Assistant"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-slate-900 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl border border-amber-500/40 hover:border-amber-400 hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-amber-400 fill-amber-400/20" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-xs font-extrabold text-white leading-none">Kabira Electrical Assistant</div>
            <div className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mt-0.5">Quick Project Inquiry</div>
          </div>
        </button>
      )}

      {/* Interactive Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 bg-white border border-slate-300 shadow-2xl rounded-2xl overflow-hidden flex flex-col max-h-[85vh] sm:max-h-[580px] animate-fadeIn">

          {/* Header */}
          <div className="bg-slate-900 text-white p-4 border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">

              <div>
                <div className="text-xs font-extrabold text-white">Kabira Electrical Assistant</div>

              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="p-4 overflow-y-auto flex-1 space-y-4 bg-slate-50 text-xs text-slate-900">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-xl leading-relaxed font-normal shadow-2xs ${msg.sender === "user"
                      ? "bg-amber-500 text-slate-950 font-bold rounded-br-none"
                      : "bg-white text-slate-800 border border-slate-200 rounded-bl-none whitespace-pre-line"
                    }`}
                >
                  {msg.text}
                </div>

                {/* Option Buttons (If Any) */}
                {msg.options && (
                  <div className="w-full space-y-2 pt-3">
                    {msg.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={opt.action}
                        className="w-full text-left p-3 bg-white hover:bg-amber-50 border border-slate-200 hover:border-amber-400 text-slate-900 font-bold text-xs rounded-xl transition-all flex items-center justify-between shadow-2xs group cursor-pointer"
                      >
                        <span className="pr-2">{opt.label}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 shrink-0 transform group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Smooth Scroll Anchor Element */}
            <div ref={chatBottomRef} />
          </div>

          {/* Footer CTA Bar */}
          <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-300 shrink-0">
            <span>Direct Officer: <strong>+91 9986979419</strong></span>
            <a
              href="https://wa.me/919986979419"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-[10px] uppercase tracking-wider rounded-lg transition-colors"
            >
              <span>WhatsApp</span>
              <Send className="w-3 h-3" />
            </a>
          </div>

        </div>
      )}
    </aside>
  );
}
