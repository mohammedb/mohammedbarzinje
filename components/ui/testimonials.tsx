"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const testimonials = [
    {
        quote: "Mohammed's ability to manage complex esports ecosystems while keeping teams motivated is truly exceptional. His vision for Riddle shaped the Norwegian esports scene.",
        name: "Esports Colleague",
        role: "Industry Partner",
        color: "bg-[#cafb42]",
        rotate: "-rotate-1"
    },
    {
        quote: "Working with Mohammed on large-scale tournaments was a masterclass in project management. He brings calm to chaos and always delivers results.",
        name: "Tournament Director",
        role: "ESL FACEIT Group",
        color: "bg-[#b0aefb]",
        rotate: "rotate-1"
    },
    {
        quote: "A rare combination of technical understanding and business acumen. Mohammed sees the big picture while never losing sight of the details that matter.",
        name: "Business Partner",
        role: "Startup Ecosystem",
        color: "bg-[#ffcdc2]",
        rotate: "-rotate-2"
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <Reveal>
                    <div className="inline-block bg-white border-2 border-black px-4 py-1 mb-12 shadow-[var(--shadow-retro-sm)] transform rotate-2">
                        <h2 className="type-label text-xl text-black">Kind_Words.txt</h2>
                    </div>
                </Reveal>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, rotate: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, type: "spring" }}
                            whileHover={{ scale: 1.03, rotate: 0 }}
                            className={`window-frame p-6 pt-8 ${testimonial.color} ${testimonial.rotate} hover:rotate-0 transition-transform relative overflow-visible`}
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-4 left-4 w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-black shadow-[var(--shadow-retro-sm)]">
                                <Quote className="w-5 h-5 text-white fill-white" />
                            </div>

                            {/* Quote Text */}
                            <p className="font-medium text-[#333] leading-relaxed mb-6 mt-2 text-sm md:text-base">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            {/* Attribution */}
                            <div className="border-t-2 border-black/20 pt-4">
                                <p className="font-black uppercase text-sm">{testimonial.name}</p>
                                <p className="text-xs font-medium opacity-60">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-8 text-sm font-medium opacity-50"
                >
                    Want to share your experience working with me?{" "}
                    <a href="mailto:mohammedbarzinje@gmail.com" className="underline hover:opacity-100">
                        Get in touch
                    </a>
                </motion.p>
            </div>
        </section>
    );
}
