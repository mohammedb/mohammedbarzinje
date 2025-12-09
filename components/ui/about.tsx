"use client";

import { motion } from "framer-motion";
import { MapPin, Languages, Coffee, Gamepad2 } from "lucide-react";

const facts = [
    {
        icon: MapPin,
        label: "Based in",
        value: "Norway",
        color: "bg-[#cafb42]"
    },
    {
        icon: Languages,
        label: "Languages",
        value: "Norwegian, English, Kurdish",
        color: "bg-[#b0aefb]"
    },
    {
        icon: Gamepad2,
        label: "Passion",
        value: "Gaming & Esports",
        color: "bg-[#ffcdc2]"
    },
    {
        icon: Coffee,
        label: "Fuel",
        value: "Coffee & Ambition",
        color: "bg-white"
    },
];

export function About() {
    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Section Title */}
                <div className="inline-block bg-white border-2 border-black px-4 py-1 mb-12 shadow-[var(--shadow-retro-sm)] transform -rotate-1">
                    <h2 className="text-xl font-black uppercase tracking-wider">About_Me.txt</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Story Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="window-frame p-8 bg-[#fdfbf7]"
                    >
                        <h3 className="text-2xl font-black mb-6 uppercase">My Story</h3>
                        <div className="space-y-4 text-[#444] font-medium leading-relaxed">
                            <p>
                                I started my journey in esports back in <span className="bg-[#cafb42] px-1 border border-black">2015</span> when
                                I founded Riddle Esports. What began as a passion project grew into one of
                                Northern Europe&apos;s largest esports organizations.
                            </p>
                            <p>
                                Over the past decade, I&apos;ve worn many hats, from building competitive teams
                                to managing large-scale tournament ecosystems at events like <span className="bg-[#b0aefb] px-1 border border-black">Gamers8</span> and
                                the <span className="bg-[#ffcdc2] px-1 border border-black">Esports World Cup</span>.
                            </p>
                            <p>
                                Today, I&apos;m channeling my entrepreneurial energy into <span className="font-bold">ReddMaten</span>,
                                a sustainability-focused marketplace connecting farmers directly with consumers,
                                tackling food waste one delivery at a time.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Quick Facts Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {facts.map((fact, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ rotate: index % 2 === 0 ? 2 : -2, scale: 1.02 }}
                                className={`window-frame p-6 ${fact.color} flex flex-col`}
                            >
                                <fact.icon className="w-6 h-6 mb-4 stroke-[1.5]" />
                                <span className="text-xs font-bold uppercase tracking-wider opacity-60 mb-1">
                                    {fact.label}
                                </span>
                                <span className="font-bold text-sm">{fact.value}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom: Values Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 window-frame p-6 bg-black text-white"
                >
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {["Innovation", "Sustainability", "Community", "Excellence"].map((value, i) => (
                            <span
                                key={i}
                                className="text-sm md:text-lg font-black uppercase tracking-wider opacity-80 hover:opacity-100 transition-opacity"
                            >
                                {value}
                                {i < 3 && <span className="ml-4 md:ml-8 text-[#cafb42]">•</span>}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
