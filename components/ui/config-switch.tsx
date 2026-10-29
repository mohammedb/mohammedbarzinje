"use client";

import { useRef } from "react";
import { CONFIGS, type ConfigId } from "@/lib/config";
import { setConfig, useConfig } from "@/lib/hooks/use-config";
import { configurations } from "@/lib/profile";
import { cn } from "@/lib/utils";

interface ConfigSwitchProps {
    labelledBy: string;
    size?: "md" | "sm";
    className?: string;
}

// Segmented radio group. Pill position and label colors come from CSS (see .cfg-pill in
// globals.css) so a tailored /?for= link renders correctly before hydration.
export function ConfigSwitch({ labelledBy, size = "md", className }: ConfigSwitchProps) {
    const active = useConfig();
    const buttons = useRef<(HTMLButtonElement | null)[]>([]);

    const select = (id: ConfigId, focus = false) => {
        setConfig(id);
        if (focus) buttons.current[CONFIGS.indexOf(id)]?.focus();
    };

    const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
        const last = CONFIGS.length - 1;
        const keys: Record<string, number> = {
            ArrowRight: index === last ? 0 : index + 1,
            ArrowDown: index === last ? 0 : index + 1,
            ArrowLeft: index === 0 ? last : index - 1,
            ArrowUp: index === 0 ? last : index - 1,
            Home: 0,
            End: last,
        };
        const next = keys[event.key];
        if (next === undefined) return;
        event.preventDefault();
        select(CONFIGS[next], true);
    };

    return (
        <div
            role="radiogroup"
            aria-labelledby={labelledBy}
            className={cn(
                "relative grid grid-cols-3 rounded-full border border-line bg-white/[0.05] p-1",
                className
            )}
        >
            <span
                aria-hidden="true"
                className="cfg-pill pointer-events-none absolute inset-y-1 left-1 w-[calc((100%_-_0.5rem)/3)] rounded-full bg-ink shadow-[0_6px_20px_-6px_rgb(0_0_0/0.6)]"
            />
            {CONFIGS.map((id, index) => {
                const checked = id === active;
                return (
                    <button
                        key={id}
                        ref={(element) => {
                            buttons.current[index] = element;
                        }}
                        type="button"
                        role="radio"
                        aria-checked={checked}
                        tabIndex={checked ? 0 : -1}
                        data-seg={id}
                        onClick={() => select(id)}
                        onKeyDown={(event) => onKeyDown(event, index)}
                        className={cn(
                            "cfg-seg relative z-10 whitespace-nowrap rounded-full font-medium tracking-tight",
                            size === "md" ? "h-10 px-4 text-[14px] sm:px-5" : "h-8 px-3 text-[12.5px]"
                        )}
                    >
                        {configurations[id].label}
                    </button>
                );
            })}
        </div>
    );
}
