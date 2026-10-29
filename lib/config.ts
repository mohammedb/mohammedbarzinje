// The "configuration" a visitor picks in the hero (Senior PM, Product Lead, AI product).
// The active id lives on <html data-config>, so CSS can switch variants before React hydrates.

export const CONFIGS = ["pm", "lead", "ai"] as const;

export type ConfigId = (typeof CONFIGS)[number];

export const DEFAULT_CONFIG: ConfigId = "pm";

export function isConfigId(value: unknown): value is ConfigId {
    return typeof value === "string" && (CONFIGS as readonly string[]).includes(value);
}

// Runs in <head> before first paint so tailored links like /?for=ai render without a flash.
export const configBootScript = `(function(){try{var c=new URLSearchParams(location.search).get("for");if(c==="pm"||c==="lead"||c==="ai")document.documentElement.setAttribute("data-config",c)}catch(e){}})();`;
