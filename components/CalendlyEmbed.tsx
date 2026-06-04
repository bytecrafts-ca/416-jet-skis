"use client";

import { useEffect, useRef } from "react";
import { getCalendlyUrl, type CalendlyEventKey } from "@/lib/calendly";

interface CalendlyEmbedProps {
  eventKey?: CalendlyEventKey;
  className?: string;
}

export function CalendlyEmbed({
  eventKey = "default",
  className = "",
}: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = containerRef.current;
    if (!parent) return;

    const url = getCalendlyUrl(eventKey);

    const init = () => {
      if (window.Calendly) {
        parent.innerHTML = "";
        window.Calendly.initInlineWidget({ url, parentElement: parent });
      }
    };

    if (window.Calendly) {
      init();
    } else {
      const interval = setInterval(() => {
        if (window.Calendly) {
          clearInterval(interval);
          init();
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, [eventKey]);

  return (
    <div
      ref={containerRef}
      className={`calendly-inline-widget w-full overflow-hidden rounded-2xl border border-white/10 bg-navy-900 ${className}`}
      aria-label="Book your jet ski rental"
    />
  );
}
