"use client";

import { useSyncExternalStore } from "react";
import { DEFAULT_CONFIG, isConfigId, type ConfigId } from "@/lib/config";

const EVENT = "configchange";

function read(): ConfigId {
    const value = document.documentElement.getAttribute("data-config");
    return isConfigId(value) ? value : DEFAULT_CONFIG;
}

function subscribe(onChange: () => void) {
    window.addEventListener(EVENT, onChange);
    return () => window.removeEventListener(EVENT, onChange);
}

// Updates the page and the URL (?for=) without a navigation, so the link stays shareable.
export function setConfig(next: ConfigId) {
    document.documentElement.setAttribute("data-config", next);

    const url = new URL(window.location.href);
    if (next === DEFAULT_CONFIG) {
        url.searchParams.delete("for");
    } else {
        url.searchParams.set("for", next);
    }
    window.history.replaceState(null, "", url);

    window.dispatchEvent(new Event(EVENT));
}

export function useConfig(): ConfigId {
    return useSyncExternalStore(subscribe, read, () => DEFAULT_CONFIG);
}
