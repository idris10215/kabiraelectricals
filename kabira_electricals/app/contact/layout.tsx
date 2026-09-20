import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Kabira Electricals",
  description:
    "Get in touch with Mr. Afzal Khan and Kabira Electricals for turnkey HT/LT substation erection, BESCOM load enhancement, and CEIG approvals.",
  alternates: {
    canonical: "https://kabiraelectricals.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
