"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useSyncExternalStore } from "react";

type Toast = { id: number; message: string; ok: boolean };

let current: Toast | null = null;
let timer: ReturnType<typeof setTimeout> | undefined;
const listeners = new Set<() => void>();

function emit() {
    listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
        listeners.delete(listener);
    };
}

export function toast(message: string, ok = true) {
    current = { id: Date.now(), message, ok };
    emit();
    clearTimeout(timer);
    timer = setTimeout(() => {
        current = null;
        emit();
    }, 2400);
}

export async function copyText(text: string, message: string) {
    try {
        await navigator.clipboard.writeText(text);
    } catch {
        // In-app browsers (LinkedIn, Instagram) often block the async clipboard API
        const area = document.createElement("textarea");
        area.value = text;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.select();
        const copied = document.execCommand("copy");
        area.remove();
        if (!copied) {
            toast("Couldn't copy. Select the text instead.", false);
            return false;
        }
    }
    toast(message);
    return true;
}

export function Toaster() {
    const item = useSyncExternalStore(
        subscribe,
        () => current,
        () => null
    );

    return (
        <div
            role="status"
            aria-live="polite"
            className="pointer-events-none fixed inset-x-0 top-20 z-[90] flex justify-center px-4"
        >
            <AnimatePresence>
                {item && (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-hi/95 py-2 pl-2.5 pr-4 text-[13.5px] font-medium text-ink shadow-[0_20px_50px_-20px_rgb(0_0_0/0.8)] backdrop-blur"
                    >
                        {item.ok && (
                            <span className="grid size-5 place-items-center rounded-full bg-accent text-accent-ink">
                                <Check className="size-3" strokeWidth={2.75} aria-hidden="true" />
                            </span>
                        )}
                        {item.message}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
