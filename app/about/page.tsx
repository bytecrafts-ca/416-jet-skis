import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { ContactLinks } from "@/components/ContactLinks";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "About",
  description: "About 416 Jet Skis — Toronto jet ski rentals on Lake Ontario.",
};

const aboutBullets = [
  ...siteConfig.whatWeOffer,
  ...siteConfig.whyChooseUs,
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={
          <>
            About <span className="accent">416 Jet Skis</span>
          </>
        }
        subtitle={siteConfig.description}
      />

      <section className="section section-white">
        <div className="container-jetti">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="max-w-xl space-y-6">
              <p className="text-lg leading-relaxed text-[var(--gray-500)]">
                {siteConfig.about.body}
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {aboutBullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[var(--gray-600)]"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-dark" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/#book" className="btn btn-amber shimmer-btn">
                  Book now
                </Link>
                <Link href="/safety" className="btn btn-outline">
                  Safety info
                </Link>
              </div>
            </div>
            <div className="safety-img-wrap">
              <Image
                src={siteConfig.heroImage}
                alt="416 Jet Skis"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-jetti max-w-2xl">
          <h2 className="section-title mb-6 text-center text-navy">
            Get in touch
          </h2>
          <ContactLinks />
        </div>
      </section>
    </>
  );
}
