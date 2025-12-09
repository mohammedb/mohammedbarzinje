"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Trophy, Target, DollarSign, Medal, Gamepad2, Calendar } from "lucide-react";

const stats = [
    {
        value: "5+",
        label: "Norwegian National Titles",
        description: "Telenorligaen, Telialigaen, GGLigaen, NLC Spring 2023. Dominated Norwegian LoL for 6+ years.",
        color: "bg-[#cafb42]",
        icon: Trophy
    },
    {
        value: "27-1",
        label: "Historic Record",
        description: "27 wins, 1 loss over 3 consecutive seasons. Undefeated over two separate seasons.",
        color: "bg-[#b0aefb]",
        icon: Target
    },
    {
        value: "$48,904",
        label: "Total LoL Prize Money",
        description: "NLC, European Masters qualification, and multiple national championships over 8 years.",
        color: "bg-[#ffcdc2]",
        icon: DollarSign
    },
    {
        value: "Top 4",
        label: "NLC Placement",
        description: "Nordic & British region's most prestigious league. 17th in European rankings (May 2023).",
        color: "bg-white",
        icon: Medal
    },
    {
        value: "6+",
        label: "Games Competed In",
        description: "LoL, CS:GO, Hearthstone, Apex Legends, PUBG, Rainbow Six Siege, Super Smash Bros.",
        color: "bg-[#cafb42]",
        icon: Gamepad2
    },
    {
        value: "10 Years",
        label: "Excellent History",
        description: "2015-2025. From founding to NLC champions. EU Masters qualification and international recognition.",
        color: "bg-[#b0aefb]",
        icon: Calendar
    },
];

function AnimatedValue({ value }: { value: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isInView) {
            setTimeout(() => setShow(true), 200);
        }
    }, [isInView]);

    return (
        <span
            ref={ref}
            className={`tabular-nums transition-all duration-500 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
        >
            {value}
        </span>
    );
}

export function Stats() {
    return (
        <section id="stats" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="inline-block bg-white border-2 border-black px-4 py-1 mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                    <h2 className="text-xl font-black uppercase tracking-wider">Riddle Esports Legacy</h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring" }}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className={`window-frame p-6 ${stat.color} group`}
                        >
                            {/* Icon */}
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                                <stat.icon className="w-5 h-5 text-white" />
                            </div>

                            {/* Value */}
                            <div className="text-3xl md:text-4xl font-black mb-1">
                                <AnimatedValue value={stat.value} />
                            </div>

                            {/* Label */}
                            <div className="text-sm font-bold uppercase tracking-wide mb-3">
                                {stat.label}
                            </div>

                            {/* Description */}
                            <p className="text-xs font-medium text-black/60 leading-relaxed">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
