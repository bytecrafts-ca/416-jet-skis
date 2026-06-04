"use client";

import Script from "next/script";
import { calendlyScriptUrl } from "@/lib/calendly";

export function CalendlyProvider() {
  return (
    <Script
      src={calendlyScriptUrl}
      strategy="lazyOnload"
      id="calendly-widget-script"
    />
  );
}
