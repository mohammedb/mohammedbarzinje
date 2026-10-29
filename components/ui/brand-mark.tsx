import { cn } from "@/lib/utils";

// The "MB" monogram, inverted for the dark theme
export function BrandMark({ className }: { className?: string }) {
    return (
        <span
            aria-hidden="true"
            className={cn(
                "grid size-8 shrink-0 place-items-center rounded-full bg-ink text-[11px] font-semibold tracking-[-0.02em] text-canvas",
                className
            )}
        >
            MB
        </span>
    );
}
