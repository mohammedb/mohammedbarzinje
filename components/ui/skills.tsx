"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { Code2, Database, Cpu } from "lucide-react";

const skills = [
    "Marketing", "Esports", "Strategy", "Product", "Retail", "SEM", "Leadership", "Data"
];

const languages = [
    "Kurdish", "Norwegian", "English", "German", "Arabic"
];

const techStack = {
    frontend: [
        { name: "Next.js", highlight: true },
        { name: "React", highlight: false },
        { name: "TypeScript", highlight: true },
        { name: "Tailwind CSS", highlight: false },
        { name: "Framer Motion", highlight: false },
    ],
    backend: [
        { name: "PostgreSQL", highlight: true },
        { name: "Supabase", highlight: true },
        { name: "Node.js", highlight: false },
        { name: "REST APIs", highlight: false },
    ],
    tools: [
        { name: "AI Coding", highlight: true },
        { name: "Git", highlight: false },
        { name: "Vercel", highlight: false },
        { name: "VS Code", highlight: false },
    ]
};

export function Skills() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto space-y-8">

                {/* Tech Stack Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="window-frame bg-white p-6 md:p-12 relative overflow-hidden"
                >
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                        <span className="text-9xl font-black">&lt;/&gt;</span>
                    </div>

                    <Reveal>
                        <div className="inline-block bg-white border-2 border-black px-4 py-1 mb-12 shadow-[var(--shadow-retro-sm)] transform rotate-1">
                            <h2 className="type-label text-xl text-black">My_Skills</h2>
                        </div>
                    </Reveal>

                    {/* Tech Stack Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Frontend */}
                        <Reveal delay={0.2}>
                            <div className="window-frame p-6 bg-white rotate-1 hover:rotate-0 transition-transform duration-300">
                                <div className="border-b-2 border-black pb-4 mb-6 flex items-center justify-between">
                                    <h3 className="type-display text-xl">Frontend</h3>
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500 border border-black" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {techStack.frontend.map((tech) => (
                                        <motion.div
                                            key={tech.name}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            className={`flex items-center gap-2 px-3 py-2 border border-black text-sm font-bold cursor-default ${tech.highlight ? 'bg-[#cafb42] shadow-[var(--shadow-retro-sm)]' : 'bg-[#f0f0f0] shadow-[var(--shadow-retro-sm)]'} `}
                                        >
                                            <span>{tech.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        {/* Backend & Tools (Grouped for layout balance) */}
                        <div className="space-y-12">
                            <Reveal delay={0.3}>
                                <div className="window-frame p-6 bg-white -rotate-1 hover:rotate-0 transition-transform duration-300">
                                    <div className="border-b-2 border-black pb-4 mb-6 flex items-center justify-between">
                                        <h3 className="type-display text-xl">Backend</h3>
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500 border border-black" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {techStack.backend.map((tech) => (
                                            <motion.div
                                                key={tech.name}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className={`flex items-center gap-2 px-3 py-2 border border-black text-sm font-bold cursor-default ${tech.highlight ? 'bg-[#b0aefb] shadow-[var(--shadow-retro-sm)]' : 'bg-[#f0f0f0] shadow-[var(--shadow-retro-sm)]'} `}
                                            >
                                                <span>{tech.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal delay={0.4}>
                                <div className="window-frame p-6 bg-white rotate-1 hover:rotate-0 transition-transform duration-300">
                                    <div className="border-b-2 border-black pb-4 mb-6 flex items-center justify-between">
                                        <h3 className="type-display text-xl">Tools</h3>
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500 border border-black" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {techStack.tools.map((tech) => (
                                            <motion.div
                                                key={tech.name}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className={`flex items-center gap-2 px-3 py-2 border border-black text-sm font-bold cursor-default ${tech.highlight ? 'bg-[#ffcdc2] shadow-[var(--shadow-retro-sm)]' : 'bg-[#f0f0f0] shadow-[var(--shadow-retro-sm)]'} `}
                                            >
                                                <span>{tech.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                    {/* Built with note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-8 pt-6 border-t border-black/20"
                    >
                        <div className="text-sm text-[#666] font-medium space-y-2">
                            <p className="font-bold text-black mb-3">Notable Builds:</p>
                            <p className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#cafb42] rounded-full mt-1.5 flex-shrink-0" />
                                <span>
                                    <a
                                        href="https://ggwp.no"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-bold text-black underline hover:text-[#b0aefb] transition-colors"
                                    >
                                        GGWP.no
                                    </a>{" "}
                                    — Full-stack Next.js + Supabase (PostgreSQL), built from scratch with AI-assisted development.
                                </span>
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#b0aefb] rounded-full mt-1.5 flex-shrink-0" />
                                <span>
                                    <a
                                        href="https://samtakhelse.no"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-bold text-black underline hover:text-[#cafb42] transition-colors"
                                    >
                                        Samtakhelse.no
                                    </a>{" "}
                                    — Client project: Built entire site + ongoing technical support & IT operations.
                                </span>
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Original Skills & Languages Section */}
                <div className="window-frame bg-white p-8 md:p-12 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                        <span className="text-9xl font-black">?</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-black mb-6 uppercase border-b-2 border-black inline-block">My_Skills</h2>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        whileHover={{ scale: 1.1, rotate: 3, backgroundColor: "#cafb42" }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", stiffness: 300, delay: index * 0.05 }}
                                        className="px-3 py-1 bg-[#f0f0f0] border border-black text-sm font-bold uppercase cursor-default shadow-[var(--shadow-retro-sm)]"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-black mb-6 uppercase border-b-2 border-black inline-block">Languages</h2>
                            <div className="space-y-3">
                                {languages.map((lang, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-black rounded-full" />
                                        <span className="font-bold text-lg">{lang}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
