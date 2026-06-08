import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactLinks } from "@/components/ContactLinks";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { OnWaterRules } from "@/components/OnWaterRules";
import { SafetyRegulations } from "@/components/SafetyRegulations";
import { SectionHeader } from "@/components/SectionHeader";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { safetyPoints, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Safety Rules — Toronto Jet Ski Rentals",
  description:
    "12 on-water safety rules for 416 Jet Skis on Lake Ontario — PFDs, distance from shore, guide vessel, marina idle speed, flip protocol, and licensing requirements.",
  path: "/safety",
  keywords: [
    "jet ski safety Toronto",
    "PCOC jet ski rental",
    "jet ski rental requirements Ontario",
    "PFD jet ski Lake Ontario",
  ],
});

export default function SafetyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Safety", path: "/safety" },
        ])}
      />
      <PageHero
        title={
          <>
            Safety <span className="accent">first</span>
          </>
        }
        subtitle={siteConfig.safetyPage.intro}
      />

      <OnWaterRules />

      <section className="section section-white">
        <div className="container-jetti">
          <div className="safety-grid">
            <div className="safety-features">
              {safetyPoints.map((s) => (
                <div key={s.title} className="safety-feat">
                  <h4>{s.title}</h4>
                  <p>{s.description}</p>
                </div>
              ))}
            </div>
            <div className="safety-img-wrap">
              <Image
                src={siteConfig.heroImage}
                alt="416 Jet Skis safety"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <SafetyRegulations />

      <section className="section section-gray">
        <div className="container-jetti max-w-2xl">
          <p className="text-center text-lg font-semibold text-navy">
            {siteConfig.safetyPage.closing}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/#book" className="btn btn-amber shimmer-btn">
              Book your ride
            </Link>
            <Link href="/faq" className="btn btn-outline inline-flex">
              FAQ
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container-jetti max-w-2xl">
          <SectionHeader
            tag="Questions"
            title={<>Contact <span className="accent">us</span></>}
          />
          <ContactLinks />
        </div>
      </section>
    </>
  );
}
