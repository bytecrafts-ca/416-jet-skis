import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";

type ExtendedRentalCalloutProps = {
  variant?: "default" | "compact";
  className?: string;
};

export function ExtendedRentalCallout({
  variant = "default",
  className = "",
}: ExtendedRentalCalloutProps) {
  const { extendedRental, contact } = siteConfig;
  const isCompact = variant === "compact";

  return (
    <aside
      className={`extended-rental-callout${isCompact ? " extended-rental-callout-compact" : ""} ${className}`.trim()}
      role="note"
      aria-label="Full day and multi-day rental information"
    >
      <div className="extended-rental-callout-content">
        <p className="extended-rental-callout-label">Longer rentals</p>
        <h3 className="extended-rental-callout-title">{extendedRental.title}</h3>
        <p className="extended-rental-callout-body">
          {isCompact ? extendedRental.bookingHint : extendedRental.body}
        </p>
        {isCompact ? (
          <p className="extended-rental-callout-note">{extendedRental.availabilityNote}</p>
        ) : null}
      </div>
      <div className="extended-rental-callout-actions">
        <a href={`tel:${contact.phoneTel}`} className="btn btn-amber shimmer-btn">
          <Phone className="h-4 w-4" aria-hidden />
          {contact.phone}
        </a>
        <a href={`mailto:${contact.email}`} className="btn btn-outline">
          <Mail className="h-4 w-4" aria-hidden />
          Email us
        </a>
        {!isCompact ? (
          <Link href="/contact" className="btn btn-outline">
            Contact page
          </Link>
        ) : null}
      </div>
    </aside>
  );
}
