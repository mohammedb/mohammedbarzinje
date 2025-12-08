"use client";

import { motion } from "framer-motion";

const skills = [
    "Marketing", "Esports", "Strategy", "Product", "Retail", "SEM", "Leadership", "Data"
];

const languages = [
    "Kurdish", "Norwegian", "English", "German", "Arabic"
];

export function Skills() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto window-frame bg-white p-8 md:p-12 relative overflow-hidden">

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
        </section>
    );
}
