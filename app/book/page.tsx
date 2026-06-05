import { BookingCalendar } from "@/components/BookingCalendar";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Book Online — Toronto Jet Ski Rentals",
  description:
    "Book your Toronto jet ski rental online with 416 Jet Skis. Choose an available date and time for hourly Sea-Doo rides on Lake Ontario.",
  path: "/book",
  keywords: ["book jet ski Toronto online", "Sea-Doo rental booking", "Lake Ontario jet ski calendar"],
});

export default function BookPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Book Online", path: "/book" },
        ])}
      />
      <PageHero
        title={
          <>
            Book your <span className="accent">ride</span>
          </>
        }
        subtitle="Choose an available date and time below."
      />
      <BookingCalendar />
    </>
  );
}
