"use client";

import { CustomCursor } from "@/components/ui/cursor";
import { Hero } from "@/components/ui/hero";
import { Experience } from "@/components/ui/experience";
import { Projects } from "@/components/ui/projects";
import { Skills } from "@/components/ui/skills";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#cafb42] selection:text-black">
      <CustomCursor />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
