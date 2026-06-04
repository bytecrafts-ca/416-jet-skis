import Link from "next/link";
import { Calendar } from "lucide-react";

export function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta" aria-label="Quick booking">
      <Link href="/#book" className="btn btn-amber gap-2">
        <Calendar className="h-4 w-4" aria-hidden />
        Book Your Ride
      </Link>
    </div>
  );
}
