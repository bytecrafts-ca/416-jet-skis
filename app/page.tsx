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
import { SectionHeader } from "@/components/SectionHeader";
import { features, safetyPoints, siteConfig } from "@/lib/site";

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
      <header className="hero">
        <div className="hero-bg">
          <Image
            src={heroImage}
            alt="416 Jet Skis — Toronto"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-eyebrow">{siteConfig.tagline}</p>
            <h1>
              Book your <span className="accent">water adventure</span>
            </h1>
            <p className="hero-sub">{siteConfig.heroSubtitle}</p>
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
              subtitle="18+ · PCOC · PFDs included"
            />
            <div className="safety-features">
              {safetyPoints.map((s) => (
                <div key={s.title} className="safety-feat">
                  <h4>{s.title}</h4>
                  <p>{s.description}</p>
                </div>
              ))}
            </div>
            <Link href="/safety" className="btn btn-outline mt-6 inline-flex">
              Full safety rules
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
          <p className="location-detail">Toronto, Ontario</p>
          <p className="mt-2 text-sm text-[var(--gray-500)]">
            {siteConfig.deliveryNote}
          </p>
          <Link href="/contact#faq" className="btn btn-outline mt-6 inline-flex">
            FAQ
          </Link>
        </div>
      </section>
    </>
  );
}
