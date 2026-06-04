/**
 * 416 Jet Skis — site content
 */
export const siteConfig = {
  name: "416 Jet Skis",
  logoText: "416 JET SKIS",
  instagramHandle: "@416jetskis",
  tiktokHandle: "@416jetskis",
  tagline: "Jet Ski Rental · Toronto",
  heroSubtitle: "Premier jet ski rentals on Lake Ontario — book below.",
  homeIntro:
    "Toronto jet ski rentals for first-timers and pros. Safe, simple, unforgettable.",
  description: "Jet ski rentals on Lake Ontario — Toronto.",
  heroImage: "/jet-ski.jpg",
  logoImage: "/logo.jpeg",
  url: "https://www.instagram.com/416jetskis/",
  contact: {
    phone: "416 305 5187",
    phoneTel: "+14163055187",
    email: "416jetskis@gmail.com",
  },
  social: {
    instagram: "https://www.instagram.com/416jetskis/",
    tiktok: "https://www.tiktok.com/@416jetskis",
  },
  jetSki: {
    name: "2026 Sea-Doo GTI",
    power: "130 / 170",
    speakers: "Built-in speakers",
    label: "2026 Sea-Doo GTI 130/170 with speakers",
  },
  rideHighlights: [
    { title: "Skyline", description: "Views of downtown from the water." },
    { title: "Bluffs", description: "Scarborough Bluffs on Lake Ontario." },
    { title: "Lake Ontario", description: "Toronto waterfront rides." },
  ] as const,
  deliveryNote: "Launch points around Toronto & Ontario — ask when you book.",
  whatWeOffer: [
    "Well-maintained Sea-Doo GTI",
    "Safety briefing every ride",
    "Flexible rental packages",
  ] as const,
  whyChooseUs: [
    "Locally owned",
    "Toronto waterfront",
    "Groups & events welcome",
  ] as const,
  about: {
    body: "We're Toronto locals who love the water. Every ride includes gear, a full briefing, and a maintained machine — so you can focus on the fun.",
  },
  safetyPage: {
    intro: "Key rules for Lake Ontario. Questions? Contact us before you book.",
    groups: [
      {
        title: "Requirements",
        bullets: [
          "Drivers 18+ with photo ID; under-18 passengers need a guardian + waiver.",
          "PCOC required — or our boating orientation if you don't have one.",
          "PFDs provided; wear and secure at all times.",
        ],
      },
      {
        title: "On the water",
        bullets: [
          "Obey speed limits, no-wake zones, and stay 30m from swimmers at speed.",
          "No alcohol or drugs — zero tolerance, no refund if violated.",
          "We may delay or cancel for unsafe weather.",
        ],
      },
      {
        title: "Operations",
        bullets: [
          "Briefing, boundaries, and kill-switch lanyard required.",
          "Stay in designated areas only.",
          "Refundable deposit; you're responsible for negligent damage.",
        ],
      },
    ],
    closing: "Ride smart. Ride safe.",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#book", label: "Book" },
  { href: "/safety", label: "Safety" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const features = [
  {
    title: `${siteConfig.jetSki.name} ${siteConfig.jetSki.power}`,
    description: "Built-in speakers.",
    icon: "jetski",
  },
  {
    title: "Safety briefing",
    description: "Every rider, every time.",
    icon: "safety",
  },
  {
    title: "Flexible packages",
    description: "30 min, 1 hr, and more.",
    icon: "calendar",
  },
  {
    title: "Toronto waterfront",
    description: "Skyline views on Lake Ontario.",
    icon: "delivery",
  },
] as const;

export const safetyPoints = [
  { title: "18+ with ID", description: "Valid photo ID required to drive." },
  { title: "PCOC or orientation", description: "Boating license or our pre-ride briefing." },
  { title: "PFDs included", description: "Wear at all times on the water." },
  { title: "Full briefing", description: "Before every departure." },
] as const;

export const faqs = [
  {
    q: "How do I book?",
    a: "Use the calendar on this site, call 416 305 5187, or email 416jetskis@gmail.com.",
  },
  {
    q: "Do I need a boating license?",
    a: "Yes — a valid PCOC. No card? We provide a boating safety orientation before your ride.",
  },
  {
    q: "What's the minimum age?",
    a: "Drivers must be 18+ with photo ID. Under-18 may ride as passengers with a guardian signing the waiver.",
  },
  {
    q: "Do I need experience?",
    a: "No. We give a full safety and operations briefing before every ride.",
  },
  {
    q: "Are life jackets included?",
    a: "Yes — Transport Canada–approved PFDs, worn at all times. Bring photo ID and a card for your deposit.",
  },
  {
    q: "How long can I rent?",
    a: "30-minute, 1-hour, and extended options. Up to two riders per ski (weight limits apply).",
  },
  {
    q: "Deposit, weather, or plan changes?",
    a: "Refundable deposit — amount at booking. Bad weather? We reschedule for safety. To cancel or change plans, contact us ASAP.",
  },
] as const;

export const galleryImages = [
  { src: "/gallery/02.jpeg", alt: "Jet ski on the water — 416 Jet Skis" },
  { src: "/gallery/03.jpeg", alt: "Sea-Doo on the lift — 416 Jet Skis" },
  { src: "/gallery/04.jpeg", alt: "Sea-Doo rental at the Bluffs" },
  { src: "/gallery/05.jpeg", alt: "416 Jet Skis ride on Lake Ontario" },
  { src: "/gallery/06.jpeg", alt: "Jet ski adventure with 416 Jet Skis" },
  { src: "/gallery/07.jpeg", alt: "416 Jet Skis — Toronto waterfront" },
  { src: "/gallery/08.jpeg", alt: "416 Jet Skis rental experience" },
  { src: "/gallery/09.jpeg", alt: "Lake Ontario jet ski ride" },
  { src: "/gallery/10.jpeg", alt: "2026 Sea-Doo GTI — 416 Jet Skis" },
] as const;
