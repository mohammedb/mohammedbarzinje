"use client";

import { Hero } from "@/components/ui/hero";
import { About } from "@/components/ui/about";
import { Experience } from "@/components/ui/experience";
import { Projects } from "@/components/ui/projects";
import { Stats } from "@/components/ui/stats";
import { Partners } from "@/components/ui/partners";
import { Testimonials } from "@/components/ui/testimonials";
import { Skills } from "@/components/ui/skills";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#cafb42] selection:text-black">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Stats />
      <Partners />
      {/* <Testimonials /> */}
      <Skills />
      <Footer />
    </main>
  );
}
