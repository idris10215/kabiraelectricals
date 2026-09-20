import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Kabira Electricals",
  description:
    "Explore our 7 core specialized Class 1 Electrical Contracting services, BESCOM approvals, transformer installations, and CEIG clearances in Bangalore.",
  alternates: {
    canonical: "https://kabiraelectricals.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
