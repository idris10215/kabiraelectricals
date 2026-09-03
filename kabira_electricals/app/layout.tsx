import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Navbar";

// Load Inter for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Load Oswald for high-impact industrial headlines
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kabiraelectricals.com"),
  title: {
    default: "Kabira Electricals",
    template: "%s | Kabira Electricals",
  },
  description:
    "M/s Kabira Electricals is a Class 1 Govt. Licensed Electrical Contractor & Engineering firm in Bangalore owned by Mr. Afzal Khan. Specializing in HT/LT substations, BESCOM load enhancement, transformer works, and CEIG approvals across Karnataka.",
  keywords: [
    "Kabira Electricals",
    "Kabira Electricals Bangalore",
    "Kabira Electricals Frazer Town",
    "Kabira Electricals contact number",
    "Kabira Electricals Mr Afzal Khan",
    "Kabira Electrical",
    "Kabira Electrical Contractor",
    "Kabira Electrical Engineering",
    "Bangalore electrical contractors",
    "Best electrical contractors Bangalore",
    "Top electrical engineering companies in Bangalore",
    "Class 1 Electrical Contractor Bangalore",
    "Govt Licensed Electrical Contractor Karnataka",
    "BESCOM Load Enhancement Contractor",
    "BESCOM Load Reduction Sanctions",
    "BESCOM approved electrical contractors",
    "11kV 33kV Substation Erection Bangalore",
    "CEIG Safety Inspection Approval",
    "CEIG clearance consultants Bangalore",
    "High voltage HT contractors Bangalore",
    "Substation construction company Bangalore",
    "Transformer Installation Contractor Bangalore",
    "Cable laying contractors Bangalore",
    "Industrial electrical contractors Karnataka",
    "Commercial Electrical Contractor Bangalore",
    "Tech park electrical contractors Bangalore",
    "Afzal Khan Kabira Electricals",
    "Frazer Town Electrical Contractor",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  authors: [{ name: "Kabira Electricals", url: "https://kabiraelectricals.com" }],
  creator: "Kabira Electricals",
  publisher: "Kabira Electricals",
  openGraph: {
    title: "Kabira Electricals | Class 1 Licensed Electrical Contractors Bangalore",
    description:
      "Govt. Licensed Class 1 Electrical Contractors & Engineers in Bangalore owned by Mr. Afzal Khan. 15+ years of excellence in HT/LT substations, BESCOM sanctions, and CEIG clearances.",
    url: "https://kabiraelectricals.com",
    siteName: "Kabira Electricals",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/gallery8.jpeg",
        width: 1200,
        height: 630,
        alt: "Kabira Electricals On-Site Substation Erection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kabira Electricals | Class 1 Licensed Electrical Contractors Bangalore",
    description:
      "Govt. Licensed Class 1 Electrical Contractors & Engineers in Bangalore owned by Mr. Afzal Khan.",
    images: ["/gallery8.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  name: "Kabira Electricals",
  url: "https://kabiraelectricals.com",
  logo: "https://kabiraelectricals.com/logo_ke_transparent.svg",
  image: "https://kabiraelectricals.com/gallery8.jpeg",
  description:
    "Class 1 Govt. Licensed Electrical Contractor and Engineering firm based in Bangalore, Karnataka, owned by Mr. Afzal Khan.",
  founder: {
    "@type": "Person",
    name: "Mr. Afzal Khan",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "38/1, Netaji Rd, Frazer Town",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560005",
    addressCountry: "India",
  },
  telephone: ["+919986979419", "+919008155556"],
  areaServed: ["Bangalore", "Karnataka", "India"],
  priceRange: "₹₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Electrical Engineering Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "HT/LT Substation & Cable Laying Works",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "BESCOM Load Enhancement & Reduction",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transformer Erection & Maintenance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CEIG Safety Inspection & Approvals",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col font-sans bg-slate-50 text-slate-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
