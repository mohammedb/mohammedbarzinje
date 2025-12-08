"use client";

import { motion } from "framer-motion";
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

                    <h2 className="text-2xl font-black mb-8 uppercase border-b-2 border-black inline-block">Tech_Stack</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {/* Frontend */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Code2 className="w-5 h-5" />
                                <h3 className="font-bold uppercase text-sm tracking-wide">Frontend</h3>
                            </div>
                            <div className="space-y-2">
                                {techStack.frontend.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ scale: 0, x: -10 }}
                                        whileInView={{ scale: 1, x: 0 }}
                                        whileHover={{ x: 5 }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", stiffness: 300, delay: index * 0.05 }}
                                        className={`flex items-center gap-2 px-3 py-2 border border-black text-sm font-bold cursor-default ${tech.highlight ? 'bg-[#cafb42] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' : 'bg-[#f0f0f0] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                                            }`}
                                    >
                                        {tech.name}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Backend */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Database className="w-5 h-5" />
                                <h3 className="font-bold uppercase text-sm tracking-wide">Backend</h3>
                            </div>
                            <div className="space-y-2">
                                {techStack.backend.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ scale: 0, x: -10 }}
                                        whileInView={{ scale: 1, x: 0 }}
                                        whileHover={{ x: 5 }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", stiffness: 300, delay: index * 0.05 }}
                                        className={`flex items-center gap-2 px-3 py-2 border border-black text-sm font-bold cursor-default ${tech.highlight ? 'bg-[#b0aefb] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' : 'bg-[#f0f0f0] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                                            }`}
                                    >
                                        {tech.name}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tools & Approach */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Cpu className="w-5 h-5" />
                                <h3 className="font-bold uppercase text-sm tracking-wide">Tools</h3>
                            </div>
                            <div className="space-y-2">
                                {techStack.tools.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ scale: 0, x: -10 }}
                                        whileInView={{ scale: 1, x: 0 }}
                                        whileHover={{ x: 5 }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", stiffness: 300, delay: index * 0.05 }}
                                        className={`flex items-center gap-2 px-3 py-2 border border-black text-sm font-bold cursor-default ${tech.highlight ? 'bg-[#ffcdc2] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' : 'bg-[#f0f0f0] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                                            }`}
                                    >
                                        {tech.name}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
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
                                        className="px-3 py-1 bg-[#f0f0f0] border border-black text-sm font-bold uppercase cursor-default shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
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
