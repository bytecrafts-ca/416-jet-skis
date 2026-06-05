import { FAQAccordion } from "@/components/FAQAccordion";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about 416 Jet Skis rentals in Toronto.",
};

export default function FAQPage() {
  return (
    <>
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
