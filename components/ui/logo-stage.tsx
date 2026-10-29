import Image from "next/image";
import type { Logo } from "@/lib/profile";

// Stand-in visual for work without a screenshot: the logo in white on a glow and a faint grid.
export function LogoStage({ logo }: { logo: Logo }) {
    return (
        <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(70%_90%_at_50%_100%,rgb(var(--wine)/0.55),transparent_70%)]">
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-60 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]"
            />
            <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                sizes="360px"
                className="relative w-[58%] max-w-[360px] [filter:brightness(0)_invert(1)]"
            />
        </div>
    );
}
