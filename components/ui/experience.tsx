"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const experiences = [
    {
        role: "Founder",
        company: "ReddMaten",
        period: "Jun 2025 – Present",
        description: "Marketplace connecting farmers directly with consumers. Reducing food waste.",
        color: "bg-[#cafb42]" // Lime
    },
    {
        role: "Founder & GM",
        company: "RIDDLE ESPORTS",
        period: "Jan 2015 – Jul 2025",
        description: "Built one of Northern Europe’s largest esports clubs. 10+ years of growth.",
        color: "bg-[#b0aefb]" // Lavender
    },
    {
        role: "Senior PM",
        company: "ESL FACEIT Group",
        period: "May 2023 – Mar 2024",
        description: "Managed large-scale tournament ecosystems for Gamers8 and EWC in Riyadh.",
        color: "bg-[#ffcdc2]" // Peach
    },
    {
        role: "Paid Search",
        company: "s360",
        period: "Dec 2021 – May 2023",
        description: "Managed diverse client portfolios including Toyota Norway.",
        color: "bg-white"
    },
];

export function Experience() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Section Title as a 'File Label' */}
                <div className="inline-block bg-white border-2 border-black px-4 py-1 mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                    <h2 className="text-xl font-black uppercase tracking-wider">Experience.log</h2>
                </div>

                <div ref={ref} className="relative ml-2 md:ml-6 space-y-12">
                    {/* Animated Line */}
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-0 top-0 bottom-0 w-0.5 bg-black origin-top z-0"
                    />
                    {/* Dashed background line for reference */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-gray-300 z-[-1]" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Node */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                viewport={{ once: true }}
                                className={`absolute -left-[9px] top-6 w-5 h-5 border-2 border-black rounded-full ${exp.color} z-10`}
                            />

                            <div className="window-frame p-6 hover:translate-x-1 transition-transform bg-[#fdfbf7]">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold uppercase">{exp.role}</h3>
                                    <span className="text-xs font-mono bg-black text-white px-2 py-1">{exp.period}</span>
                                </div>
                                <p className="text-sm font-bold opacity-70 mb-3 uppercase tracking-wide">{exp.company}</p>
                                <p className="font-medium text-[#444] leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
