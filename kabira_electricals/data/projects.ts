export interface CorporateSector {
  id: string;
  category: string;
  tagline: string;
  clients: string[];
}

export const corporateSectorsData: CorporateSector[] = [
  {
    id: "hospitality-commercial",
    category: "Commercial Complexes & Luxury Hospitality",
    tagline: "High-Voltage Substation Erection & Main Distribution Panels",
    clients: [
      "Court Yard Marriott",
      "Meghnas Food",
      "Narmada Chain of Restaurants",
      "DRLS Palace Banquet Hall",
      "Mayfair Service Apartments",
    ],
  },
  {
    id: "corporate-it",
    category: "Corporate Tech Parks & IT Infrastructure",
    tagline: "Underground HT Cable Laying, RMU Switchgear & Clean Feeders",
    clients: [
      "Embassy Tech Village",
      "ATRIA Convergence (ACT Fibernet)",
      "Software Industry Complex",
      "NGS Groups",
    ],
  },
  {
    id: "industrial-utility",
    category: "Industrial Power Grids & Public Utilities",
    tagline: "KPTCL Bay Line Extensions, Transformer Filtration & Load Enhancement",
    clients: [
      "Peenya Industrial Manufacturing Complex",
      "IBPS Water Plant (Mysore)",
      "GM Agency (Trends Showroom)",
    ],
  },
  {
    id: "healthcare-residential",
    category: "Healthcare Hubs & Multi-Dwelling Infrastructure",
    tagline: "ICU Isolated Power Panels & Residential Smart Metering Yards",
    clients: [
      "Diascope Healthcare Centre",
      "Supreme Constructions",
      "Rainbow Service Apartments",
      "Safe Stay PG Complex",
    ],
  },
];

export const privateEstatesSummaryData = {
  title: "Private Commercial Estates & High-Voltage Sanctions",
  badge: "25+ Private Projects Executed",
  description:
    "In addition to major corporate tech parks and hotel chains, Kabira Electricals has executed over 25+ private commercial estate power distribution systems, bungalow substations, and BESCOM load sanctions across key prime locations in Bangalore including R.T. Nagar, Koramangala, Vasanth Nagar, HSR Layout, Yelahanka, and Bannerghatta Road.",
};
