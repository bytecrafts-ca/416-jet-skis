import Link from "next/link";
import { Instagram } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

export function Footer() {
  const { contact, social } = siteConfig;

  return (
    <footer className="footer">
      <section className="cta-section">
        <div className="container-jetti relative">
          <h2>Book your ride</h2>
          <p>Calendar, call, or email — we&apos;ll get you on the water.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#book" className="btn btn-amber shimmer-btn">
              Open calendar
            </Link>
            <a href={`tel:${contact.phoneTel}`} className="btn btn-outline">
              {contact.phone}
            </a>
          </div>
        </div>
      </section>

      <div className="footer-grid px-8">
        <div className="footer-brand">
          <Link href="/" className="logo-text">
            416 <span>JET SKIS</span>
          </Link>
          <p>{siteConfig.description}</p>
          <div className="footer-social">
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Pages</h4>
          <ul>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
            <li>
              <Link href="/contact#faq">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`tel:${contact.phoneTel}`}>{contact.phone}</a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <Link href="/#book">Calendar</Link>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Follow</h4>
          <ul>
            <li>
              <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                {siteConfig.instagramHandle}
              </a>
            </li>
            <li>
              <a href={social.tiktok} target="_blank" rel="noopener noreferrer">
                {siteConfig.tiktokHandle}
              </a>
            </li>
            <li>Toronto, Ontario</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom px-8">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p>
          <a href={`mailto:${contact.email}`} className="text-[var(--gray-400)] hover:text-cyan">
            {contact.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
