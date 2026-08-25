export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  badge: string;
  image: string;
  summary: string;
  scope: string[];
  keySpecs: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "1",
    slug: "electrical-contracting",
    title: "Electrical H.T / L.T Projects & Contracting",
    shortTitle: "H.T / L.T Electrical Projects",
    category: "Class 1 Electrical Contracting",
    badge: "Govt. Class 1 Licensed",
    image: "/electrical_contracting.jpg",
    summary:
      "M/s Kabira Electricals provides complete end-to-end High Tension (H.T) and Low Tension (L.T) electrical installations, H.T cable termination, overhead line erection, and switchgear panel works for commercial buildings, hospitals, housing, hotels, and industrial facilities across Karnataka.",
    scope: [
      "H.T Cable Laying, Straight Through Jointing & Pot-Head Terminations",
      "Overhead H.T / L.T Transmission Line Erection & Pole Structure Work",
      "Electrical Control Panel & Switch Gear Installations",
      "Street Lighting & Outdoor Illumination Projects",
      "Annual Maintenance Contracts (AMC), Preventive & Breakdown Services",
    ],
    keySpecs: [
      "Voltage Range: H.T (11kV / 33kV) & L.T (415V)",
      "License: Class 1 Govt. of Karnataka Registered",
      "Applications: Commercial Buildings, Hospitals, Hotels, Industrial",
    ],
  },
  {
    id: "2",
    slug: "bescom-works",
    title: "BESCOM Works & Liasioning Services",
    shortTitle: "BESCOM Liasioning Services",
    category: "BESCOM Departmental Approvals",
    badge: "BESCOM Empanelled Liasioning",
    image: "/bescom_works.webp",
    summary:
      "Official departmental representation and fast-track processing of all BESCOM sanctions, technical approvals, drawing approvals, and power agreements for commercial, industrial, and residential projects in Bangalore.",
    scope: [
      "Liasioning & Sanction of New Power Supply Agreements",
      "Preparation & Submission of Official BESCOM Estimation Drawings",
      "Metering Equipment Procurement, Testing & Grid Commissioning",
      "Departmental Nodal Approvals across All BESCOM Sub-Divisions",
    ],
    keySpecs: [
      "Official BESCOM Departmental Representation",
      "Fast-Track Sanction & Drawing Approvals",
      "Metering Equipment Procurement & Grid Testing",
    ],
  },
  {
    id: "3",
    slug: "bescom-load-enhancement",
    title: "BESCOM Load Enhancement",
    shortTitle: "BESCOM Load Enhancement",
    category: "Power Capacity Upgradation",
    badge: "BESCOM Power Sanctions",
    image: "/bescom_load_enhancement.jpg",
    summary:
      "Official processing and turnkey infrastructure execution for BESCOM load enhancement and capacity expansion required by expanding commercial complexes, IT parks, and industrial units.",
    scope: [
      "Demand Feasibility & Load Calculation Studies",
      "Submission of Load Enhancement Applications to BESCOM Offices",
      "Upgradation of Transformers, H.T/L.T Cables & Switchgear Panels",
      "Final Inspection, Meter Calibration & Enhanced Load Release",
    ],
    keySpecs: [
      "Capacity Expansion: 50 kW to 5000+ kVA",
      "Transformer & Switchgear Upgradation",
      "Official Enhanced Power Sanction Release",
    ],
  },
  {
    id: "4",
    slug: "bescom-load-reduction",
    title: "BESCOM Load Reduction",
    shortTitle: "BESCOM Load Reduction",
    category: "Tariff & Demand Optimization",
    badge: "Fixed Demand Charge Reduction",
    image: "/bescom_load_reduction.jpg",
    summary:
      "Official processing for reduction of contracted BESCOM power load to optimize monthly electricity tariffs and eliminate unnecessary fixed demand charges for businesses.",
    scope: [
      "Facility Maximum Demand (MD) Evaluation & Load Audit",
      "Documentation & Processing for Contracted Load Reduction",
      "Modification of Metering CT/PT Ratios & Grid Tariff Agreements",
      "Official BESCOM Sanction & Reduced Fixed Charge Billing Activation",
    ],
    keySpecs: [
      "Tariff & Fixed Demand Charge Reduction",
      "CT/PT Metering Ratio Calibration",
      "Official BESCOM Billing Tariff Adjustment",
    ],
  },
  {
    id: "5",
    slug: "kptcl-works",
    title: "KPTCL Turnkey Works & Substation Erection",
    shortTitle: "KPTCL Turnkey Works",
    category: "Karnataka Power Transmission",
    badge: "KPTCL Turnkey Projects",
    image: "/kptcl_works.png",
    summary:
      "Execution of turnkey KPTCL substation works, high-voltage transmission line erection, bay line extensions, and industrial power evacuation systems across Karnataka.",
    scope: [
      "Turnkey Substation Bay Erection, Civil Structure & Equipment Mounting",
      "High-Voltage Transmission Line Erection & Pole Structures",
      "Circuit Breakers, Isolators, Lightning Arresters & Relay Panels",
      "KPTCL Testing, Safety Clearances & Final Grid Energization",
    ],
    keySpecs: [
      "Voltage Levels: 33kV, 66kV, 110kV & 220kV Grids",
      "EPC Substation Bay Erection & Transmission Towers",
      "KPTCL Departmental Testing & Grid Synchronization",
    ],
  },
  {
    id: "6",
    slug: "transformer-works",
    title: "Transformer Works (Erection, Testing & Commissioning)",
    shortTitle: "Transformer Erection & Testing",
    category: "Substation Infrastructure",
    badge: "Transformer Specialists",
    image: "/transformer_works.jpg",
    summary:
      "Specialized erection, oil filtration, testing, and commissioning of oil-cooled and dry-type power and distribution transformers for commercial and industrial establishments.",
    scope: [
      "Power & Distribution Transformer Supply, Rigging & Erection",
      "Transformer Oil Filtration, Dielectric Strength Testing & Maintenance",
      "H.T/L.T Cable Box Termination, Neutral Earthing & Lightning Protection",
      "Compact Substation (CSS) & Ring Main Unit (RMU) Integration",
    ],
    keySpecs: [
      "Transformer Range: 63 kVA to 5000+ kVA",
      "Oil Filtration & Dielectric Breakdown Testing",
      "CSS & RMU Compact Integration",
    ],
  },
  {
    id: "7",
    slug: "ceig-work",
    title: "CEIG Work (Safety Clearances & Approvals)",
    shortTitle: "CEIG Safety Approvals",
    category: "Statutory Inspection NOC",
    badge: "CEIG Safety Clearances",
    image: "/ceig_work.jpg",
    summary:
      "Mandatory statutory approvals and safety inspection NOCs from the Chief Electrical Inspectorate to Government (CEIG) of Karnataka prior to high-voltage grid energization.",
    scope: [
      "Single Line Diagram (SLD) Drawing Preparation & CEIG Scheme Approval",
      "Pre-Commissioning Insulation Resistance, Earth Pit & Relay Calibration Audits",
      "CEIG Inspection Coordination & On-Site Compliance Audits",
      "Final Safety Clearance Certificate & Energization Approval",
    ],
    keySpecs: [
      "Statutory CEIG Safety Clearance Certificate",
      "Single Line Diagram (SLD) Drawing Approval",
      "Pre-Energization Inspection & Relay Calibration Audits",
    ],
  },
  {
    id: "8",
    slug: "arranging-power-supply",
    title: "Arranging Power Supply & SRTPV Works",
    shortTitle: "Arranging Power Supply",
    category: "Grid Power Procurement",
    badge: "Turnkey Power Solutions",
    image: "/arranging_power.jpg",
    summary:
      "Arranging temporary and permanent power supply sanctions for new construction sites, commercial developments, and Solar Rooftop (SRTPV) grid connectivity across Karnataka.",
    scope: [
      "Arranging Temporary Construction Power Supply & Sanctions",
      "Permanent Grid Power Supply Agreements & Energization",
      "Solar Rooftop Photovoltaic (SRTPV) Net-Metering Grid Connectivity",
      "Express Feeder Dedicated Lines for Commercial & Industrial Clients",
    ],
    keySpecs: [
      "Temporary Construction Power Sanction",
      "Permanent Grid Power Agreements",
      "SRTPV Solar Net-Metering Integration",
    ],
  },
];
