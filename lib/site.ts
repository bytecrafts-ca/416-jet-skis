/**
 * 416 Jet Skis — site content
 */
export const siteConfig = {
  name: "416 Jet Skis",
  logoText: "416 JET SKIS",
  instagramHandle: "@416jetskis",
  tiktokHandle: "@416.jet.ski.renta",
  tagline: "Jet Ski Rental Located in Toronto & Surrounding",
  heroSubtitle: "Premier jet ski rentals on Lake Ontario — book below.",
  homeIntro:
    "Toronto jet ski rentals for first-timers and pros. Safe, simple, unforgettable.",
  description: "Jet ski rentals on Lake Ontario — Toronto.",
  seo: {
    defaultTitle: "416 Jet Skis | Toronto Jet Ski Rentals on Lake Ontario",
    defaultDescription:
      "Book Toronto jet ski rentals with 416 Jet Skis. Sea-Doo fleet, safety briefing included, hourly & multi-day packages on Lake Ontario. Call 416-305-5187 or book online.",
    keywords: [
      "Toronto jet ski rental",
      "jet ski rental Toronto",
      "Lake Ontario jet ski",
      "Sea-Doo rental Toronto",
      "GTA jet ski rental",
      "personal watercraft rental Toronto",
      "jet ski hire Toronto",
      "416 jet skis",
      "Toronto waterfront activities",
      "Scarborough Bluffs jet ski",
    ],
    locale: "en_CA",
    priceRange: "$$",
    averageRating: 5,
    areaServed: [
      "Toronto",
      "Greater Toronto Area",
      "Lake Ontario",
      "Scarborough",
      "Mississauga",
      "Brampton",
      "Markham",
      "Vaughan",
      "Pickering",
      "Ajax",
      "Whitby",
      "Oshawa",
    ],
    geo: {
      latitude: 43.6532,
      longitude: -79.3832,
    },
    openingHours: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "08:00", closes: "20:00" },
    ],
    rentalDurations: [
      "1 hour",
      "2 hours",
      "4 hours",
      "8 hours",
      "12 hours",
      "1 day",
      "2 days",
      "3 days",
      "5 days",
      "1 week",
      "1 month",
    ],
  },
  heroImage: "/jet-ski.jpg",
  heroVideo: "/hero.mp4",
  logoImage: "/logo.jpeg",
  calendlyUrl: "https://calendly.com/416jetskis/rental",
  siteUrl: "https://416-jet-skis.vercel.app",
  url: "https://www.instagram.com/416jetskis/",
  contact: {
    phone: "416-305-5187",
    phoneTel: "+14163055187",
    email: "416jetskis@gmail.com",
  },
  social: {
    instagram: "https://www.instagram.com/416jetskis/",
    tiktok: "https://www.tiktok.com/@416.jet.ski.renta",
  },
  fleet: [
    "2026 Sea-Doo GTI SE 130",
    "2026 Sea-Doo GTI SE 170",
    "2026 Sea-Doo GTR 230",
    "2026 Sea-Doo RXP-X 300",
  ] as const,
  fleetNote: "Built-in speakers on all models.",
  rideHighlights: [
    { title: "Skyline", description: "Views of downtown from the water." },
    { title: "Bluffs", description: "Scarborough Bluffs on Lake Ontario." },
    { title: "Lake Ontario", description: "Toronto waterfront rides." },
  ] as const,
  deliveryNote:
    "Launch points at all public boat launches across the GTA — ask when you book.",
  extendedRental: {
    title: "Full day or multi-day?",
    body: "The online calendar is for hourly rides only. For full-day, weekend, or multi-day rentals, contact us — we'll confirm dates, model, and pricing.",
    bookingHint: "Hourly rides only on this calendar (1 hr, 2 hr, 4 hr & 8 hr).",
    availabilityNote:
      "1 hr, 2 hr, 4 hr, 8 hr, 12 hr, 1 day, 2 day, 3 day, 5 day, 1 week & 1 month rentals also available — contact us to book.",
  },
  whatWeOffer: [
    "Well-maintained Sea-Doo fleet",
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
    intro: "12 on-water rules plus licensing requirements. Review before you book.",
    onWaterRulesTitle: "12 rules on the water",
    onWaterRulesSubtitle:
      "Every rider gets a full briefing — these are the essentials we enforce on Lake Ontario.",
    onWaterRules: [
      {
        title: "Life jackets at all times",
        body: "PFDs must be worn at all times with kill-switch keys attached.",
      },
      {
        title: "Stay off shorelines",
        body: "Keep 150 m away from all shorelines.",
      },
      {
        title: "Keep your distance",
        body: "Stay 100 m away from all jet skis, boats, and vessels.",
      },
      {
        title: "No beaching",
        body: "Do not beach the jet ski or bring it onto land.",
      },
      {
        title: "Throttle = steering",
        body: "Gas must be engaged to steer — no coasting without throttle.",
      },
      {
        title: "Speed = stability",
        body: "Flipping happens at low speeds — maintain steady momentum.",
      },
      {
        title: "If tipping over, let go",
        body: "Do not hold on for your life — release and clear the ski.",
      },
      {
        title: "Board from the rear",
        body: "If you are in the water, re-board from the rear only.",
      },
      {
        title: "After a flip, call us",
        body: "Do not start the engine after a flip — call us immediately.",
      },
      {
        title: "Stay aware",
        body: "Always be aware of your surroundings on the water.",
      },
      {
        title: "Idle in the marina",
        body: "Only idle speed in the marina — absolutely no throttle.",
      },
      {
        title: "Stay with the guide vessel",
        body: "Do not leave or return without the guide vessel.",
      },
    ],
    emergencyNote: "Emergency: call 911",
    groups: [
      {
        title: "Before you ride",
        bullets: [
          "Drivers 18+ with photo ID; under-18 passengers need a guardian + waiver.",
          "Valid driver's licence (G2 or G) required to drive.",
          "Orientation provided — we issue your PCOC after our briefing.",
          "PFDs provided; wear and secure at all times.",
          "No alcohol or drugs — zero tolerance, no refund if violated.",
        ],
      },
      {
        title: "Operations & policies",
        bullets: [
          "Briefing, boundaries, and kill-switch lanyard required.",
          "Stay in designated areas only.",
          "We may delay or cancel for unsafe weather.",
          "Refundable deposit; you're responsible for negligent damage.",
        ],
      },
    ],
    closing: "Have fun and stay safe.",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#book", label: "Book" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/safety", label: "Safety" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const pricingRates = [
  {
    id: "weekday",
    label: "Weekdays",
    items: [
      { duration: "Hourly", price: 130 },
      { duration: "4 hours", price: 375 },
      { duration: "8 hours", price: 550 },
    ],
  },
  {
    id: "weekend",
    label: "Weekends",
    items: [
      { duration: "Hourly", price: 150 },
      { duration: "4 hours", price: 450 },
      { duration: "8 hours", price: 650 },
    ],
  },
] as const;

export const pricingNote =
  "Need more than 8 hours or multiple days? Full-day and multi-day rentals are arranged by phone or email — not through the online calendar.";

export const features = [
  {
    title: "Sea-Doo fleet",
    description: "GTI SE, GTR & RXP-X — 130 HP to 300 HP.",
    icon: "jetski",
  },
  {
    title: "Safety briefing",
    description: "Every rider, every time.",
    icon: "safety",
  },
  {
    title: "Flexible packages",
    description: "1 hr, 2 hr, 4 hr, 8 hr, 12 hr, daily & longer.",
    icon: "calendar",
  },
  {
    title: "Toronto & GTA",
    description: "Public launches across the GTA.",
    icon: "delivery",
  },
] as const;

export const safetyPoints = [
  {
    title: "18+ with ID",
    description: "Valid photo ID required to drive.",
  },
  {
    title: "G2/G licence required",
    description: "Valid driver's licence required to drive.",
  },
  {
    title: "PCOC issued by us",
    description: "Orientation provided — we issue your PCOC after briefing.",
  },
  {
    title: "PFDs included",
    description: "Wear at all times on the water.",
  },
] as const;

export const faqs = [
  {
    q: "How do I book?",
    a: "Hourly rides: use the calendar on this site. Full-day, weekend, or multi-day rentals: call 416-305-5187 or email 416jetskis@gmail.com — those longer packages aren't booked online.",
  },
  {
    q: "Do I need a boating license?",
    a: "Yes — a valid PCOC is required. We provide orientation and issue your PCOC after our briefing.",
  },
  {
    q: "What's the minimum age?",
    a: "Drivers must be 18+ with photo ID and a valid G2 or G licence. Under-18 may ride as passengers with a guardian signing the waiver.",
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
    a: "1 hr, 2 hr, 4 hr, and 8 hr slots — book on the calendar. Full-day or multi-day packages: contact us at 416-305-5187 or 416jetskis@gmail.com. Up to two riders per ski (weight limits apply).",
  },
  {
    q: "Deposit, weather, or plan changes?",
    a: "Refundable deposit — amount at booking. Bad weather? We reschedule for safety. To cancel or change plans, contact us ASAP.",
  },
] as const;

export const reviews = [
  {
    text: "Great time on water. The equipment is well maintained and the owner is chill and accommodating.",
    author: "Babur Urya",
    rating: 5,
  },
  {
    text: "Quick response. Great prices. Helps you on the waters and gives you all the safety advice.",
    author: "Qaise K.",
    rating: 5,
  },
  {
    text: "Professional and easy to get a jet ski rental. I rented two jet skis for my best friend's birthday. The owner was very accommodating with the timing and location. I'll be using this again in a few weeks.",
    author: "Ahmad Karimzada",
    rating: 5,
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
