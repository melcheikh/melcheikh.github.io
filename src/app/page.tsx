import Hero from "@/components/Hero";
import CaseStudy from "@/components/CaseStudy";
import Services from "@/components/Services";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#061022] to-[#020617] text-white">
      <Hero />
      <CaseStudy />
      <Services />
      <About />
    </main>
  );
}
