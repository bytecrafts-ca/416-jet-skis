import { Instagram, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

export function ContactLinks() {
  const { contact, social, instagramHandle, tiktokHandle } = siteConfig;

  const items = [
    {
      icon: Phone,
      label: "Phone",
      href: `tel:${contact.phoneTel}`,
      value: contact.phone,
    },
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${contact.email}`,
      value: contact.email,
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: social.instagram,
      value: instagramHandle,
    },
    {
      icon: TikTokIcon,
      label: "TikTok",
      href: social.tiktok,
      value: tiktokHandle,
    },
  ];

  return (
    <ul className="contact-links">
      {items.map(({ icon: Icon, label, href, value }) => {
        const external = href.startsWith("http");
        return (
        <li key={label} className="feature-card flex gap-4 !p-5">
          <Icon className="h-6 w-6 shrink-0 text-cyan-dark" />
          <div>
            <p className="font-bold text-navy">{label}</p>
            <a
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-[var(--gray-500)] hover:text-cyan-dark"
            >
              {value}
            </a>
          </div>
        </li>
        );
      })}
    </ul>
  );
}
