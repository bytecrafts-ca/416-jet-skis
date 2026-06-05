import { BookingCalendar } from "@/components/BookingCalendar";
import { ContactLinks } from "@/components/ContactLinks";
import { PageHero } from "@/components/PageHero";
import { ReviewsSection } from "@/components/ReviewsSection";

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

      <ReviewsSection />

      <section className="section section-white">
        <div className="container-jetti max-w-2xl">
          <ContactLinks />
        </div>
      </section>
    </>
  );
}
