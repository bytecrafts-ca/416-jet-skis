"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);
  const toggleMenu = useCallback(() => setOpen((prev) => !prev), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", open);
    return () => {
      document.body.classList.remove("mobile-nav-open");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeMenu]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (media.matches) closeMenu();
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [closeMenu]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <>
      <header
        className={`site-header fixed inset-x-0 top-0 z-[1100] border-b border-black/5 bg-white/95 backdrop-blur-xl transition-shadow ${
          scrolled ? "shadow-[0_1px_12px_rgba(10,22,40,0.06)]" : ""
        }`}
      >
        <div className="container-jetti flex h-[var(--header-h)] items-center justify-between gap-4">
          <Link
            href="/"
            className="site-logo flex shrink-0 items-center no-underline"
            aria-label={siteConfig.name}
            onClick={closeMenu}
          >
            <Image
              src={siteConfig.logoImage}
              alt=""
              width={160}
              height={48}
              className="site-logo-img"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
            <ul className="flex list-none items-center gap-0.5">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`rounded-lg px-3.5 py-2 text-[0.84rem] font-semibold no-underline transition-all ${
                      isActive(href)
                        ? "bg-[var(--gray-50)] text-navy"
                        : "text-[var(--gray-500)] hover:bg-[var(--gray-50)] hover:text-navy"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Link href="/#book" className="btn btn-navy">
              Book Now
            </Link>
          </div>

          <button
            type="button"
            className="mobile-menu-toggle lg:hidden"
            onClick={toggleMenu}
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="mobile-menu-icon" aria-hidden>
              <span className={`mobile-menu-bar ${open ? "mobile-menu-bar-top-open" : ""}`} />
              <span className={`mobile-menu-bar ${open ? "mobile-menu-bar-mid-open" : ""}`} />
              <span className={`mobile-menu-bar ${open ? "mobile-menu-bar-bottom-open" : ""}`} />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`mobile-nav-backdrop lg:hidden ${open ? "mobile-nav-backdrop-open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!open}
      />

      <aside
        id="mobile-nav-panel"
        className={`mobile-nav-panel lg:hidden ${open ? "mobile-nav-panel-open" : ""}`}
        aria-hidden={!open}
        role="dialog"
        aria-modal={open}
        aria-label="Site navigation"
      >
        <nav aria-label="Mobile">
          <p className="mobile-nav-label">Menu</p>
          <ul className="mobile-nav-list">
            {navLinks.map(({ href, label }, index) => (
              <li
                key={href}
                className="mobile-nav-item"
                style={{ transitionDelay: open ? `${80 + index * 40}ms` : "0ms" }}
              >
                <Link
                  href={href}
                  onClick={closeMenu}
                  tabIndex={open ? 0 : -1}
                  className={`mobile-nav-link ${isActive(href) ? "mobile-nav-link-active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li
              className="mobile-nav-item mobile-nav-cta"
              style={{ transitionDelay: open ? `${80 + navLinks.length * 40}ms` : "0ms" }}
            >
              <Link
                href="/#book"
                onClick={closeMenu}
                tabIndex={open ? 0 : -1}
                className="btn btn-amber shimmer-btn w-full"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
