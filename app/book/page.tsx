import { BookingCalendar } from "@/components/BookingCalendar";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Book Online",
  description: "Book your 416 Jet Skis rental online.",
};

export default function BookPage() {
  return (
    <>
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
