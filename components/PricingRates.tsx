import Link from "next/link";
import { ExtendedRentalCallout } from "@/components/ExtendedRentalCallout";
import { SectionHeader } from "@/components/SectionHeader";
import { pricingNote, pricingRates, siteConfig } from "@/lib/site";

type PricingRatesProps = {
  showHeader?: boolean;
  bookHref?: string;
};

export function PricingRates({ showHeader = true, bookHref = "/#book" }: PricingRatesProps) {
  const { contact } = siteConfig;

  return (
    <>
      {showHeader ? (
        <SectionHeader
          tag="Pricing"
          title={
            <>
              Rental <span className="accent">rates</span>
            </>
          }
          subtitle="Weekday and weekend pricing. Book hourly slots online — contact us for longer rentals."
        />
      ) : null}

      <ExtendedRentalCallout className="mb-10" />

      <div className="pricing-rates-grid">
        {pricingRates.map((schedule) => (
          <article key={schedule.id} className="price-card pricing-rate-card">
            <h3>{schedule.label}</h3>
            <ul className="pricing-rate-list">
              {schedule.items.map((item) => (
                <li key={item.duration}>
                  <span>{item.duration}</span>
                  <strong>${item.price}</strong>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="pricing-actions">
        <Link href={bookHref} className="btn btn-amber shimmer-btn">
          Book online
        </Link>
        <a href={`tel:${contact.phoneTel}`} className="btn btn-outline">
          Call {contact.phone}
        </a>
        <Link href="/contact" className="btn btn-outline">
          Contact us
        </Link>
      </div>

      <p className="pricing-footnote">{pricingNote}</p>
    </>
  );
}
