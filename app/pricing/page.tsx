import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PricingRates } from "@/components/PricingRates";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Pricing — Toronto Jet Ski Rental Rates",
  description:
    "416 Jet Skis rental rates in Toronto: weekday from $130/hr, weekend from $150/hr. 4-hour and 8-hour packages on Lake Ontario. Multi-day rentals by phone.",
  path: "/pricing",
  keywords: [
    "jet ski rental prices Toronto",
    "Sea-Doo rental cost Toronto",
    "Lake Ontario jet ski rates",
    "hourly jet ski rental GTA",
  ],
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <PageHero
        title={
          <>
            Rental <span className="accent">pricing</span>
          </>
        }
        subtitle="Weekday and weekend rates. Book online or contact us for longer rentals."
      />

      <section className="section section-white">
        <div className="container-jetti">
          <PricingRates bookHref="/#book" />
        </div>
      </section>
    </>
  );
}
