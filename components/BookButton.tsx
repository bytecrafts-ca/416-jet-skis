"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import {
  buildCalendlyUrl,
  getCalendlyUrl,
  type CalendlyEventKey,
} from "@/lib/calendly";

type Variant = "amber" | "ghost" | "navy" | "outline";

interface BookButtonProps {
  eventKey?: CalendlyEventKey;
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
  mode?: "popup" | "page";
  utmCampaign?: string;
  shimmer?: boolean;
  showArrow?: boolean;
  onPress?: () => void;
}

export function BookButton({
  eventKey = "default",
  variant = "amber",
  className = "",
  children = "Book Your Ride",
  mode = "popup",
  utmCampaign,
  shimmer = true,
  showArrow = true,
  onPress,
}: BookButtonProps) {
  const variantClass =
    variant === "amber"
      ? "btn-amber"
      : variant === "ghost"
        ? "btn-ghost"
        : variant === "navy"
          ? "btn-navy"
          : "btn-outline";

  const shimmerClass = shimmer && variant === "amber" ? "shimmer-btn" : "";

  if (mode === "page") {
    const href =
      eventKey === "default"
        ? "/book"
        : `/book?event=${eventKey.toLowerCase()}`;
    return (
      <Link
        href={href}
        className={`btn ${variantClass} ${shimmerClass} ${className}`}
      >
        {variant === "amber" && showArrow ? null : (
          <Calendar className="h-4 w-4" aria-hidden />
        )}
        {children}
        {showArrow && variant === "amber" && (
          <ArrowRight className="h-4 w-4" aria-hidden />
        )}
      </Link>
    );
  }

  const url = buildCalendlyUrl(eventKey, {
    utm_source: "website",
    utm_campaign: utmCampaign,
  });

  const handleClick = () => {
    onPress?.();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: getCalendlyUrl(eventKey) });
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`btn ${variantClass} ${shimmerClass} ${className}`}
    >
      {children}
      {showArrow && variant === "amber" && (
        <ArrowRight className="h-4 w-4" aria-hidden />
      )}
    </button>
  );
}
