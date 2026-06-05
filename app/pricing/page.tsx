import { PageHero } from "@/components/PageHero";
import { PricingRates } from "@/components/PricingRates";

export const metadata = {
  title: "Pricing",
  description:
    "416 Jet Skis rental rates — weekday and weekend pricing for Toronto jet ski rentals.",
};

export default function PricingPage() {
  return (
    <>
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
