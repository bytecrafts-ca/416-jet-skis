import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { breadcrumbJsonLd, createPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "FAQ — Toronto Jet Ski Rental Questions",
  description:
    "Answers about booking, PCOC licensing, age requirements, pricing, deposits, and safety for 416 Jet Skis rentals on Lake Ontario, Toronto.",
  path: "/faq",
  keywords: [
    "jet ski rental FAQ Toronto",
    "PCOC jet ski Toronto",
    "jet ski rental age requirement",
    "Lake Ontario jet ski booking",
  ],
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <PageHero
        title={
          <>
            Frequently asked <span className="accent">questions</span>
          </>
        }
        subtitle="Booking, licensing, safety, and what to expect on the water."
      />

      <section className="section section-white">
        <div className="container-jetti max-w-3xl">
          <SectionHeader
            tag="FAQ"
            title={
              <>
                Common <span className="accent">questions</span>
              </>
            }
          />
          <FAQAccordion />
        </div>
      </section>
    </>
  );
}
