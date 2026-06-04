import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { SectionHeader } from "@/components/SectionHeader";
import { isCalendlyConfigured } from "@/lib/calendly";
import { siteConfig } from "@/lib/site";

interface BookingCalendarProps {
  id?: string;
}

export function BookingCalendar({ id = "book" }: BookingCalendarProps) {
  const configured = isCalendlyConfigured();

  return (
    <section className="section section-gray" id={id}>
      <div className="container-jetti">
        <SectionHeader
          tag="Book online"
          title={
            <>
              Pick your <span className="accent">date & time</span>
            </>
          }
          subtitle={siteConfig.jetSki.label}
        />

        {!configured && (
          <div
            className="mx-auto mb-8 max-w-2xl rounded-[var(--radius-lg)] border border-amber/40 bg-[var(--amber-glow)] px-6 py-5 text-center text-sm text-navy"
            role="status"
          >
            <p className="font-semibold">Calendar coming soon</p>
            <p className="mt-2 text-[var(--gray-600)]">
              Add <code className="rounded bg-white/60 px-1">NEXT_PUBLIC_CALENDLY_URL</code>{" "}
              to <code className="rounded bg-white/60 px-1">.env.local</code> to
              activate scheduling.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a href={`tel:${siteConfig.contact.phoneTel}`} className="btn btn-outline">
                {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="btn btn-outline"
              >
                Email us
              </a>
            </div>
          </div>
        )}

        <div className="mx-auto max-w-4xl overflow-hidden rounded-[var(--radius-lg)] border border-[var(--gray-100)] bg-white shadow-[var(--shadow-md)]">
          <CalendlyEmbed />
        </div>

        <p className="mx-auto mt-4 text-center text-sm">
          <a
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-dark hover:text-cyan"
          >
            Open booking page in a new tab
          </a>
        </p>

        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-[var(--gray-400)]">
          Or call{" "}
          <a href={`tel:${siteConfig.contact.phoneTel}`} className="font-semibold text-cyan-dark">
            {siteConfig.contact.phone}
          </a>
          {" · "}
          <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-cyan-dark">
            {siteConfig.contact.email}
          </a>
        </p>
      </div>
    </section>
  );
}
