"use client";

import Script from "next/script";
import { calendlyScriptUrl } from "@/lib/calendly";

export function CalendlyProvider() {
  return (
    <Script
      src={calendlyScriptUrl}
      strategy="afterInteractive"
      id="calendly-widget-script"
    />
  );
}
