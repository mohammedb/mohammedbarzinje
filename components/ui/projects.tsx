"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, ArrowUpRight, X, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "ReddMaten",
        category: "Sustainability",
        description: "Direct-to-consumer marketplace for 'imperfect' produce.",
        stats: ["Founder", "Tech"],
        bg: "bg-[#cafb42]",
        url: "https://reddmaten.no",
        previewImage: "/projects/reddmaten.png"
    },
    {
        title: "RIDDLE",
        category: "Esports",
        description: "Northern Europe's premier esports organization.",
        stats: ["EU Masters", "Brand"],
        bg: "bg-[#b0aefb]",
        url: "https://riddle.no",
        previewImage: "/projects/riddle.png"
    },
    {
        title: "Gamers8",
        category: "Event Tech",
        description: "World's largest gaming festival ecosystem management.",
        stats: ["Global", "Data"],
        bg: "bg-[#ffcdc2]",
        url: "https://esportsworldcup.com/en"
    },
];

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">

                <div className="inline-block bg-white border-2 border-black px-4 py-1 mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                    <h2 className="text-xl font-black uppercase tracking-wider">Projects_Folder</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            layoutId={`card-${project.title}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8, scale: 1.02, rotateZ: -1 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 20
                            }}
                            className="window-frame flex flex-col group relative bg-[#fdfbf7]"
                        >
                            {/* Window Header */}
                            <div className="window-header py-2 bg-white">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full border border-black bg-white" />
                                    <div className="w-2.5 h-2.5 rounded-full border border-black bg-white" />
                                </div>
                                <span className="text-[10px] font-mono uppercase truncate max-w-[100px]">{project.title}.app</span>
                            </div>

                            {/* Main Content */}
                            <div className={`p-6 flex-1 flex flex-col border-t-2 border-black ${project.bg}`}>
                                <div className="flex justify-between items-start mb-4">
                                    <Folder className="w-8 h-8 stroke-1" />
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="cursor-pointer"
                                    >
                                        <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 active:scale-95" />
                                    </button>
                                </div>

                                <h3 className="text-3xl font-black mb-2 uppercase tracking-tight">{project.title}</h3>
                                <p className="font-medium text-black/80 text-sm mb-6 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex gap-2">
                                    {project.stats.map((stat, i) => (
                                        <span key={i} className="text-[10px] font-bold bg-black text-white px-2 py-1 uppercase">
                                            {stat}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            layoutId={`card-${selectedProject.title}`}
                            className="w-full max-w-5xl h-[80vh] flex flex-col window-frame relative border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Expanded App Header */}
                            <div className="window-header py-3 bg-white flex justify-between items-center px-4 border-b-2 border-black">
                                <div className="flex gap-2 items-center">
                                    <div className="flex gap-1.5">
                                        <div
                                            className="w-3 h-3 rounded-full border border-black bg-[#ff5f56] hover:bg-[#ff5f56]/80 cursor-pointer"
                                            onClick={() => setSelectedProject(null)}
                                        />
                                        <div className="w-3 h-3 rounded-full border border-black bg-[#ffbd2e]" />
                                        <div className="w-3 h-3 rounded-full border border-black bg-[#27c93f]" />
                                    </div>
                                    <span className="ml-4 text-xs font-mono uppercase bg-gray-100 px-2 py-1 border border-black rounded-sm flex items-center gap-2">
                                        lock icon
                                        {selectedProject.url}
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <a
                                        href={selectedProject.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-1 hover:bg-gray-100 border border-transparent hover:border-black rounded-sm transition-colors"
                                        title="Open in new tab"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="p-1 hover:bg-gray-100 border border-transparent hover:border-black rounded-sm transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Browser Content Area */}
                            <div className="flex-1 bg-white relative overflow-hidden">
                                {selectedProject.previewImage ? (
                                    /* Image Preview */
                                    <div className="w-full h-full relative group">
                                        <img
                                            src={selectedProject.previewImage}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Overlay to indicate interactivity/link */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none" />
                                    </div>
                                ) : (
                                    /* Iframe Preview */
                                    <>
                                        <div className={`absolute inset-0 flex items-center justify-center ${selectedProject.bg} opacity-20`}>
                                            <h1 className="text-6xl font-black uppercase tracking-tighter opacity-10">{selectedProject.title}</h1>
                                        </div>
                                        <iframe
                                            src={selectedProject.url}
                                            className="w-full h-full relative z-10"
                                            title={`${selectedProject.title} preview`}
                                            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                                            loading="lazy"
                                        />
                                    </>
                                )}
                            </div>

                            {/* Status Bar */}
                            <div className="h-6 bg-[#cafb42] border-t-2 border-black flex items-center px-2 justify-between">
                                <span className="text-[10px] font-bold uppercase">Connected: {selectedProject.title}</span>
                                <span className="text-[10px] font-bold uppercase">Secure // TLS 1.3</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
