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
  title: "Kabira Electricals | Class 1 Licensed Electrical Engineers",
  description: "Government Licensed Class 1 Electrical Contractor & Engineer in Bangalore, Karnataka.",
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
      <body className={`${inter.className} min-h-full flex flex-col font-sans bg-slate-50 text-slate-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
