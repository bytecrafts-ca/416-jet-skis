import { BookingCalendar } from "@/components/BookingCalendar";
import { ContactLinks } from "@/components/ContactLinks";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = {
  title: "Contact",
  description: "Contact 416 Jet Skis — book jet ski rentals in Toronto.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Contact <span className="accent">&amp; book</span>
          </>
        }
        subtitle="Book online, call, email, or DM us."
      />

      <BookingCalendar id="schedule" />

      <section className="section section-white">
        <div className="container-jetti max-w-2xl">
          <ContactLinks />
        </div>
      </section>

      <section className="section section-light" id="faq">
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
