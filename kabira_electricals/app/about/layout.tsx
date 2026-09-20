import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Kabira Electricals",
  description:
    "Learn about M/s Kabira Electricals, owned by Mr. Afzal Khan—Bangalore's trusted Class 1 Govt. Licensed Electrical Contractors and Engineering firm.",
  alternates: {
    canonical: "https://kabiraelectricals.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
