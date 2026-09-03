"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, ChevronRight, Send } from "lucide-react";
import { servicesData } from "@/data/services";

interface ChatOption {
  label: string;
  actionKey: string;
  payload?: string;
}

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: ChatOption[];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Load saved session conversation history on initial mount
  useEffect(() => {
    try {
      const savedMessages = sessionStorage.getItem("ke_chat_messages");
      if (savedMessages) {
        const parsed = JSON.parse(savedMessages);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch (e) {
      console.error("Failed to load chat history", e);
    }
  }, []);

  // Save conversation history to sessionStorage whenever messages update
  useEffect(() => {
    if (messages.length > 0) {
      try {
        sessionStorage.setItem("ke_chat_messages", JSON.stringify(messages));
      } catch (e) {
        console.error("Failed to save chat history", e);
      }
    }
  }, [messages]);

  // Lock background body scroll when chatbot window is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Auto-scroll smoothly to bottom whenever messages update
  useEffect(() => {
    if (isOpen && messages.length > 0) {
      chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Main menu options generator
  const getInitialMenuOptions = (): ChatOption[] => [
    { label: "⚡ View Our Services (7 Specialized Services)", actionKey: "show_services_list" },
    { label: "🏢 View 44+ Executed Projects", actionKey: "projects" },
    { label: "🏆 Govt. Completion Certificates", actionKey: "certificates" },
    { label: "📞 Direct Contact Details", actionKey: "contact" },
  ];

  // Initialize chat greeting when opened for first time
  const handleOpenChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setMessages([
        {
          id: "1",
          sender: "bot",
          text: "Hello! Welcome to Kabira Electricals. I am your Engineering Consultation Assistant. Select any option below to explore our services, project portfolio, or get a quick quotation:",
          options: getInitialMenuOptions(),
        },
      ]);
    }
  };

  // List all 7 specialized services as interactive sub-options
  const handleShowServicesList = () => {
    const serviceOptions: ChatOption[] = servicesData.map((s) => ({
      label: `👉 ${s.shortTitle}`,
      actionKey: "service",
      payload: s.slug,
    }));

    serviceOptions.push({ label: "🔄 Main Menu", actionKey: "menu" });

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: "user",
        text: "View Our Services (7 Specialized Services)",
      },
      {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "We offer 7 specialized Class 1 electrical engineering services across Karnataka. Select any service below to explore what we offer:",
        options: serviceOptions,
      },
    ]);
  };

  // Append Main Menu without erasing previous conversation history
  const handleShowMenu = () => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: "user",
        text: "Show Main Menu",
      },
      {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "Please select an option below to continue exploring our services & projects:",
        options: getInitialMenuOptions(),
      },
    ]);
  };

  const handleSelectServiceBySlug = (slug: string) => {
    const service = servicesData.find((s) => s.slug === slug);
    if (!service) return;

    const responseText = service.summary;
    const whatsappQuery = `Hi Mr. Afzal Khan, I inquired on your website regarding ${service.title} and would like a quotation for my project.`;

    const newMessages: ChatMessage[] = [
      {
        id: Date.now().toString(),
        sender: "user",
        text: `Tell me about ${service.title}`,
      },
      {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: `${responseText}\n\nWould you like to connect with Mr. Afzal Khan directly for a turnkey quotation or view full service details?`,
        options: [
          {
            label: "💬 Enquire on WhatsApp Now",
            actionKey: "whatsapp",
            payload: whatsappQuery,
          },
          {
            label: `📄 View Full ${service.shortTitle} Page`,
            actionKey: "page_service",
            payload: service.slug,
          },
          {
            label: "⚡ View All 7 Services",
            actionKey: "show_services_list",
          },
          {
            label: "🔄 Main Menu",
            actionKey: "menu",
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
            actionKey: "whatsapp",
            payload: "Hi Mr. Afzal Khan, I would like to consult regarding turnkey electrical projects.",
          },
          {
            label: "📄 Open Complete Projects Portfolio Page",
            actionKey: "page_projects",
          },
          {
            label: "🔄 Main Menu",
            actionKey: "menu",
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
            actionKey: "page_projects",
          },
          {
            label: "💬 Connect with Mr. Afzal Khan on WhatsApp",
            actionKey: "whatsapp",
            payload: "Hi Mr. Afzal Khan, I would like to consult regarding turnkey electrical projects.",
          },
          {
            label: "🔄 Main Menu",
            actionKey: "menu",
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
            actionKey: "whatsapp",
            payload: "Hi Mr. Afzal Khan, I got your contact details from the website.",
          },
          {
            label: "📞 Call Executive Office",
            actionKey: "phone",
          },
          {
            label: "🔄 Main Menu",
            actionKey: "menu",
          },
        ],
      },
    ]);
  };

  const handleOptionClick = (opt: ChatOption) => {
    if (opt.actionKey === "show_services_list") {
      handleShowServicesList();
    } else if (opt.actionKey === "service" && opt.payload) {
      handleSelectServiceBySlug(opt.payload);
    } else if (opt.actionKey === "projects") {
      handleSelectProjects();
    } else if (opt.actionKey === "certificates") {
      handleSelectCertificates();
    } else if (opt.actionKey === "contact") {
      handleSelectContact();
    } else if (opt.actionKey === "whatsapp") {
      window.open(`https://wa.me/919986979419?text=${encodeURIComponent(opt.payload || "")}`, "_blank");
    } else if (opt.actionKey === "page_service" && opt.payload) {
      setIsOpen(false);
      window.location.href = `/services/${opt.payload}`;
    } else if (opt.actionKey === "page_projects") {
      setIsOpen(false);
      window.location.href = "/projects";
    } else if (opt.actionKey === "phone") {
      window.location.href = "tel:+919986979419";
    } else if (opt.actionKey === "menu") {
      handleShowMenu();
    }
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
          <div className="p-4 overflow-y-auto flex-1 space-y-4 bg-slate-50 text-xs text-slate-900 overscroll-contain">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-xl leading-relaxed font-normal shadow-2xs ${
                    msg.sender === "user"
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
                        onClick={() => handleOptionClick(opt)}
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
