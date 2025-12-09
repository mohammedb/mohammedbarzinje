import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
    { name: "ESL", logo: "/logos/esl.png" },
    { name: "Toyota", logo: "/logos/toyota.svg" },
    { name: "EWC", logo: "/logos/ewc.png" },
    { name: "Heroic", logo: "/logos/heroic.png" },
    { name: "Microsoft", logo: "/logos/microsoft.png" },
];

export function Partners() {
    // Triple the array for smoother infinite scroll with more items
    const duplicatedPartners = [...partners, ...partners, ...partners];

    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 mb-16">
                <div className="inline-block bg-[#cafb42] border-2 border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-black">Worked_With</h2>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative group w-full">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f0f0f0] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f0f0f0] to-transparent z-10 pointer-events-none" />

                {/* 
                   Correction: To implement a robust marquee with pause-on-hover, 
                   it's better to use specific CSS keyframes or a dedicated library. 
                   Since we use Framer Motion, let's use it effectively. 
                   We can control speed but pausing is tricky without `useAnimation` controls.
                   Let's implement a simpler "CSS-based" marquee inside the motion div context or just use a container.
                */}
                <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
                    {duplicatedPartners.map((partner, index) => (
                        <div
                            key={`${partner.name}-${index}`}
                            className="flex-shrink-0 mx-8 group/card"
                        >
                            <div className="w-48 h-32 md:w-64 md:h-40 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <div className="relative w-full h-full filter grayscale opacity-60 transition-all duration-500 group-hover/card:grayscale-0 group-hover/card:opacity-100 mix-blend-multiply">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 192px, 256px"
                                        priority={index < 5}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Second duplicate for infinite effect if needed, but the array tripling usually handles it if CSS loop is correct. 
                    Actually, standard Tailwind `animate-loop-scroll` isn't built-in. 
                    I'll add the animation keyframes to global css or use Framer Motion correctly.
                    
                    Reverting to Framer Motion for consistency with existing codebase, but tuning it.
                    We can ignore 'pause on hover' request if it complicates things too much, or use a state-based speed.
                    However, `animation-play-state: paused` works on CSS Animations. 
                    So let's use a standard CSS animation in a `style` block or `globals.css` if missing.
                */}
            </div>
        </section>
    );
}
