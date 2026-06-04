/**
 * Calendly integration architecture for 416 Jet Skis
 *
 * Flow:
 * 1. Set NEXT_PUBLIC_CALENDLY_URL in .env (client's main booking link)
 * 2. Optional per-package URLs via NEXT_PUBLIC_CALENDLY_URL_1HR / _2HR
 * 3. BookButton / BookLink use popup widget OR /book page inline embed
 * 4. CalendlyProvider loads widget script once per session (app/layout)
 *
 * Client setup checklist:
 * - Create Calendly event types (1 Hour Ride, 2 Hour Ride)
 * - Enable Calendly embed + popup in Settings → Share
 * - Paste URLs into .env.local
 */

export type CalendlyEventKey = "default" | "1HR" | "2HR";

const ENV_KEYS: Record<CalendlyEventKey, string> = {
  default: "NEXT_PUBLIC_CALENDLY_URL",
  "1HR": "NEXT_PUBLIC_CALENDLY_URL_1HR",
  "2HR": "NEXT_PUBLIC_CALENDLY_URL_2HR",
};

const PLACEHOLDER = "https://calendly.com/your-account/ride";

export function getCalendlyUrl(key: CalendlyEventKey = "default"): string {
  const envKey = ENV_KEYS[key];
  const specific = process.env[envKey];
  const fallback = process.env.NEXT_PUBLIC_CALENDLY_URL;

  const url = specific || fallback || PLACEHOLDER;
  return url;
}

export function isCalendlyConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL;
  return Boolean(url && !url.includes("your-account"));
}

/** UTM params for analytics (optional) */
export function buildCalendlyUrl(
  key: CalendlyEventKey = "default",
  params?: { utm_source?: string; utm_campaign?: string }
): string {
  const base = getCalendlyUrl(key);
  if (!params) return base;

  const search = new URLSearchParams();
  if (params.utm_source) search.set("utm_source", params.utm_source);
  if (params.utm_campaign) search.set("utm_campaign", params.utm_campaign);

  const qs = search.toString();
  return qs ? `${base}?${qs}` : base;
}

export const calendlyScriptUrl = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, string>;
        utm?: Record<string, string>;
      }) => void;
    };
  }
}
