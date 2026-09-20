import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Kabira Electricals",
  description:
    "View our portfolio of 44+ executed high-voltage HT/LT substation installations, commercial towers, and industrial electrical projects across Karnataka.",
  alternates: {
    canonical: "https://kabiraelectricals.com/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
