import { getCalendlyEmbedUrl } from "@/lib/calendly";

interface CalendlyEmbedProps {
  className?: string;
}

export function CalendlyEmbed({ className = "" }: CalendlyEmbedProps) {
  const embedSrc = getCalendlyEmbedUrl();

  return (
    <iframe
      src={embedSrc}
      title="Book your jet ski rental with 416 Jet Skis"
      className={`calendly-embed-frame ${className}`}
      width="100%"
      allow="fullscreen"
    />
  );
}
