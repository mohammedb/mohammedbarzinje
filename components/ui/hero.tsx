"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const rotate = useTransform(scrollY, [0, 500], [0, 10]);

    const containerVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const letterContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.5 }
        }
    };

    const letter: Variants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 10 }
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center p-2 md:p-8 overflow-hidden">
            {/* The Window Container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-6xl window-frame bg-[#fdfbf7] relative mb-12"
            >
                {/* Window Header (Navbar) */}
                <Navbar />

                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px] relative">
                    {/* Left: Image / Graphic Area (7 cols) */}
                    <div className="lg:col-span-5 p-6 md:p-12 flex flex-col justify-center items-center lg:items-end relative border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-zinc-50/50 overflow-hidden">
                        {/* Decorative Background Shape */}
                        <motion.div
                            style={{ y: y1, rotate: rotate }}
                            initial={{ rotate: -5, scale: 0.8 }}
                            animate={{ rotate: 3, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-[#b0aefb] rounded-[2rem] border-2 border-black shadow-[var(--shadow-retro-md)] z-0"
                        />

                        {/* Image placeholder wrapper */}
                        <motion.div
                            style={{ y: y2 }}
                            whileHover={{ scale: 1.02, rotate: -2 }}
                            className="relative w-64 h-80 md:w-80 md:h-96 bg-zinc-200 rounded-[2rem] border-2 border-black overflow-hidden -rotate-3 z-10 shadow-[var(--shadow-retro-md)] grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                        >
                            <img
                                src="/meg2.png"
                                alt="Mohammed Barzinje"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>



                        {/* Floating Badge */}
                        <Reveal delay={0.8} className="absolute bottom-16 left-8 md:left-12 z-20">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="bg-white border-2 border-black px-4 py-2 rounded-full shadow-[var(--shadow-retro-sm)] flex items-center gap-2"
                            >
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="type-label text-[10px] tracking-widest text-black">Open to Work</span>
                            </motion.div>
                        </Reveal>
                    </div>

                    {/* Right: Content Area (5 cols) */}
                    <div className="lg:col-span-7 p-6 md:p-16 flex flex-col justify-center text-left relative z-10">
                        <Reveal>
                            <h4 className="font-bold text-lg mb-4 text-[#666]">Hi, I&apos;m Mohammed!</h4>
                        </Reveal>

                        <div className="mb-8">
                            <Reveal delay={0.35}>
                                <div className="type-display text-5xl sm:text-6xl md:text-8xl leading-[0.9] text-[#1a1a1a]">Product</div>
                            </Reveal>
                            <Reveal delay={0.45}>
                                <div
                                    className="relative inline-block mt-2"
                                >
                                    <span className="sr-only">Manager</span>
                                    {/* Keeping the complex gradient text but wrapping or styling it? 
                                        Let's keep the existing complex letter logic but wrap the container 
                                        Or just simplify for now to focus on the request.
                                        Actually, let's keep the cool letter animation but maybe tighten the container?
                                    */}
                                    <span aria-hidden="true" className="type-display text-5xl sm:text-6xl md:text-8xl leading-[0.9] relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#b0aefb] to-[#cafb42]" style={{ WebkitTextStroke: "1.5px black" }}>
                                        MANAGER
                                    </span>
                                    <span className="type-display text-5xl sm:text-6xl md:text-8xl leading-[0.9] absolute top-1 left-1 -z-10 text-black flex" style={{ WebkitTextStroke: "1.5px black" }}>
                                        MANAGER
                                    </span>
                                </div>
                            </Reveal>
                        </div>

                        <Reveal delay={0.6}>
                            <p className="text-lg md:text-xl font-medium text-[#444] leading-relaxed max-w-lg mb-10">
                                Based in Norway. Managing <span className="bg-[#cafb42] border border-black px-1 shadow-[var(--shadow-retro-sm)] hover:bg-[#b0aefb] transition-colors cursor-default">esports</span> ecosystems and building meaningful digital experiences.
                                <br /><br />
                                Founder of ReddMaten & Riddle Esports.
                            </p>
                        </Reveal>

                        <Reveal delay={0.7}>
                            <div className="flex gap-4">
                                <motion.a
                                    href="#projects"
                                    className="retro-btn relative overflow-hidden group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="relative z-10">View Work</span>
                                </motion.a>
                                <motion.a
                                    href="#about"
                                    className="type-label px-6 py-2 border-2 border-transparent hover:border-black rounded-full transition-all hover:bg-white"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    About Me
                                </motion.a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
