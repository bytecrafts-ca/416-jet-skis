import type { Metadata } from "next";
import { faqs, pricingRates, reviews, siteConfig } from "@/lib/site";

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.siteUrl;
  return url.replace(/\/$/, "");
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  ogImage?: string;
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
  ogImage,
  type = "website",
}: PageMetadataInput): Metadata {
  const siteUrl = getSiteUrl();
  const canonical = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const image = ogImage ?? siteConfig.heroImage;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;
  const allKeywords = [...siteConfig.seo.keywords, ...keywords] as string[];

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.seo.locale,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — Toronto jet ski rentals on Lake Ontario`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [imageUrl],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: [...siteConfig.seo.keywords],
  authors: [{ name: siteConfig.name, url: getSiteUrl() }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Recreation",
  classification: "Jet Ski Rental",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: getSiteUrl(),
  },
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    url: getSiteUrl(),
    siteName: siteConfig.name,
    locale: siteConfig.seo.locale,
    type: "website",
    images: [
      {
        url: siteConfig.heroImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Toronto jet ski rentals on Lake Ontario`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [siteConfig.heroImage],
  },
  icons: {
    icon: siteConfig.logoImage,
    apple: siteConfig.logoImage,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  other: {
    "geo.region": "CA-ON",
    "geo.placename": "Toronto",
    "geo.position": `${siteConfig.seo.geo.latitude};${siteConfig.seo.geo.longitude}`,
    ICBM: `${siteConfig.seo.geo.latitude}, ${siteConfig.seo.geo.longitude}`,
  },
};

export const publicRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/pricing", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/book", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/faq", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/safety", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/gallery", changeFrequency: "weekly" as const, priority: 0.75 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
];

function absoluteUrl(path: string): string {
  const siteUrl = getSiteUrl();
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}

export function organizationJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    url: siteUrl,
    logo: `${siteUrl}${siteConfig.logoImage}`,
    image: `${siteUrl}${siteConfig.heroImage}`,
    description: siteConfig.seo.defaultDescription,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneTel,
    sameAs: [siteConfig.social.instagram, siteConfig.social.tiktok],
    areaServed: siteConfig.seo.areaServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
  };
}

export function localBusinessJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    "@id": `${siteUrl}/#business`,
    name: siteConfig.name,
    url: siteUrl,
    image: `${siteUrl}${siteConfig.heroImage}`,
    logo: `${siteUrl}${siteConfig.logoImage}`,
    description: siteConfig.seo.defaultDescription,
    telephone: siteConfig.contact.phoneTel,
    email: siteConfig.contact.email,
    priceRange: siteConfig.seo.priceRange,
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    areaServed: siteConfig.seo.areaServed,
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.seo.geo.latitude,
      longitude: siteConfig.seo.geo.longitude,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    openingHoursSpecification: siteConfig.seo.openingHours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.days,
      opens: entry.opens,
      closes: entry.closes,
    })),
    sameAs: [siteConfig.social.instagram, siteConfig.social.tiktok],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.seo.averageRating,
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.text,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Jet Ski Rental Packages",
      itemListElement: pricingRates.flatMap((group) =>
        group.items.map((item) => ({
          "@type": "Offer",
          name: `${group.label} — ${item.duration}`,
          price: item.price,
          priceCurrency: "CAD",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/pricing`,
          seller: { "@id": `${siteUrl}/#business` },
        }))
      ),
    },
  };
}

export function websiteJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.seo.defaultDescription,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-CA",
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/book`,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Jet Ski Rental Booking",
      },
    },
  };
}

export function serviceJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/#service`,
    name: "Toronto Jet Ski Rentals",
    serviceType: "Personal Watercraft Rental",
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: siteConfig.seo.areaServed,
    description: siteConfig.seo.defaultDescription,
    offers: {
      "@type": "AggregateOffer",
      lowPrice: 130,
      highPrice: 650,
      priceCurrency: "CAD",
      offerCount: pricingRates.reduce((sum, g) => sum + g.items.length, 0),
      url: `${siteUrl}/pricing`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Rental durations",
      itemListElement: siteConfig.seo.rentalDurations.map((duration) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${duration} jet ski rental`,
        },
      })),
    },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function globalJsonLd() {
  return [organizationJsonLd(), localBusinessJsonLd(), websiteJsonLd(), serviceJsonLd()];
}
