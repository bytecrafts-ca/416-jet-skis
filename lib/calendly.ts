import { siteConfig } from "@/lib/site";

export type CalendlyEventKey = "default" | "1HR" | "2HR";

const ENV_KEYS: Record<CalendlyEventKey, string> = {
  default: "NEXT_PUBLIC_CALENDLY_URL",
  "1HR": "NEXT_PUBLIC_CALENDLY_URL_1HR",
  "2HR": "NEXT_PUBLIC_CALENDLY_URL_2HR",
};

export function getCalendlyUrl(key: CalendlyEventKey = "default"): string {
  const envKey = ENV_KEYS[key];
  const specific = process.env[envKey];
  const fallback = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return specific || fallback || siteConfig.calendlyUrl;
}

export function getCalendlyEmbedUrl(key: CalendlyEventKey = "default"): string {
  const base = getCalendlyUrl(key).replace(/\/$/, "");
  return `${base}?embed_type=Inline`;
}

export function isCalendlyConfigured(): boolean {
  const url = getCalendlyUrl();
  return Boolean(url && url.includes("calendly.com/"));
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
