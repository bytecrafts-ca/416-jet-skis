import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Ship,
  MapPin,
  Shield,
  Calendar,
} from "lucide-react";
import { BookingCalendar } from "@/components/BookingCalendar";
import { CraftBanner } from "@/components/CraftBanner";
import { HomeAboutTeaser } from "@/components/HomeAboutTeaser";
import { JsonLd } from "@/components/JsonLd";
import { ReviewsSection } from "@/components/ReviewsSection";
import { SectionHeader } from "@/components/SectionHeader";
import { faqJsonLd } from "@/lib/seo";
import { features, safetyPoints, siteConfig } from "@/lib/site";

export { rootMetadata as metadata } from "@/lib/seo";

const heroImage = siteConfig.heroImage;

const featureIcons = {
  jetski: Ship,
  safety: Shield,
  calendar: Calendar,
  delivery: MapPin,
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <header className="hero">
        <div className="hero-bg">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={siteConfig.heroImage}
            aria-label="416 Jet Skis — Toronto jet ski rentals on Lake Ontario"
          >
            <source src={siteConfig.heroVideo} type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay" />
        <div className="hero-inner container-jetti">
          <div className="hero-text">
            <p className="hero-eyebrow">{siteConfig.tagline}</p>
            <h1>
              Toronto <span className="accent">jet ski rentals</span>
            </h1>
            <p className="hero-sub">{siteConfig.seo.defaultDescription}</p>
            <a href="#reviews" className="hero-proof" aria-label={`${siteConfig.seo.averageRating} out of 5 stars — read customer reviews`}>
              <span className="hero-proof-stars" aria-hidden>
                {"★".repeat(siteConfig.seo.averageRating)}
              </span>
              <span className="hero-proof-rating">{siteConfig.seo.averageRating}.0</span>
            </a>
            <div className="hero-actions">
              <a href="#book" className="btn btn-amber shimmer-btn">
                Book Your Ride
              </a>
              <a href={`tel:${siteConfig.contact.phoneTel}`} className="btn btn-ghost">
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>
        <a
          href="#book"
          className="hero-scroll-indicator"
          aria-label="Scroll to booking calendar"
        >
          <span className="scroll-line" />
        </a>
      </header>

      <div id="below-hero" className="scroll-hint">
        <ChevronDown className="h-4 w-4" aria-hidden />
        Scroll to book
        <ChevronDown className="h-4 w-4" aria-hidden />
      </div>

      <CraftBanner />

      <BookingCalendar />

      <HomeAboutTeaser />

      <section className="section section-white why-section">
        <div className="container-jetti">
          <SectionHeader
            tag="416 Jet Skis"
            title={
              <>
                What we <span className="accent">offer</span>
              </>
            }
          />
          <div className="features-grid md:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => {
              const Icon = featureIcons[f.icon as keyof typeof featureIcons] ?? Ship;
              return (
                <article key={f.title} className="feature-card">
                  <div className="feature-icon">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="safety-grid container-jetti">
          <div>
            <SectionHeader
              tag="Safety"
              title={
                <>
                  Briefing <span className="accent">every ride</span>
                </>
              }
              subtitle="12 on-water rules · 18+ · G2/G · PCOC issued · PFDs included"
            />
            <div className="safety-features">
              {safetyPoints.map((s) => (
                <div key={s.title} className="safety-feat">
                  <h4>{s.title}</h4>
                  <p>{s.description}</p>
                </div>
              ))}
            </div>
            <Link href="/safety#on-water-rules" className="btn btn-outline mt-6 inline-flex">
              See all 12 rules
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="safety-img-wrap">
            <Image
              src={heroImage}
              alt="416 Jet Skis"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container-jetti text-center">
          <p className="location-detail">{siteConfig.deliveryNote}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/pricing" className="btn btn-outline inline-flex">
              View pricing
            </Link>
            <Link href="/faq" className="btn btn-outline inline-flex">
              FAQ
            </Link>
          </div>
        </div>
      </section>

      <ReviewsSection />
    </>
  );
}
