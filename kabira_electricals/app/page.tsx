// app/page.tsx
import Hero from "@/Components/Hero";
import ScrollVideoWrapper from "@/Components/ScrollVideo";
import Services from "@/Components/Services";
import Projects from "@/Components/Projects";
import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen">
      {/* 1. Hero Section with Background Video */}
      <ScrollVideoWrapper videoSrc="/videos/kling-video.mp4">
        <Hero />
      </ScrollVideoWrapper>

      {/* 2. Services Section */}
      <Services />

      {/* 3. Featured Executed Projects Section (with Learn More CTA to /projects) */}
      <Projects />

      {/* 4. About Us Section (with Learn More CTA to /about) */}
      {/* <About /> */}

      {/* 5. Contact Consultation Form Section */}
      {/* <Contact /> */}

      {/* 6. Footer */}
      {/* <Footer /> */}
    </main>
  );
}