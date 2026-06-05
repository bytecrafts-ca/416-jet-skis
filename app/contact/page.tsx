import { BookingCalendar } from "@/components/BookingCalendar";
import { ContactLinks } from "@/components/ContactLinks";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact & Book — Toronto Jet Ski Rentals",
  description:
    `Contact 416 Jet Skis to book Toronto jet ski rentals. Call ${siteConfig.contact.phone}, email ${siteConfig.contact.email}, or use the online calendar.`,
  path: "/contact",
  keywords: ["contact jet ski rental Toronto", "book jet ski Toronto", "416 jet skis phone number"],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
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
    </>
  );
}
