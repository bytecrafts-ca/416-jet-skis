"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[1000] border-b border-black/5 bg-white/95 px-8 backdrop-blur-xl transition-shadow ${
          scrolled ? "shadow-[0_1px_12px_rgba(10,22,40,0.06)]" : ""
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between">
          <Link
            href="/"
            className="site-logo flex shrink-0 items-center no-underline"
            aria-label={siteConfig.name}
          >
            <Image
              src={siteConfig.logoImage}
              alt=""
              width={160}
              height={48}
              className="h-11 w-auto max-w-[min(160px,42vw)] object-contain object-left"
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
            className="flex flex-col gap-[5px] p-2 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-[1.5px] w-5 rounded-sm bg-navy transition-all ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 rounded-sm bg-navy transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 rounded-sm bg-navy transition-all ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {open && (
        <>
          <div
            className="fixed inset-0 z-[999] bg-navy/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="fixed inset-y-0 right-0 z-[1001] w-full max-w-sm bg-white p-8 pt-24 shadow-xl lg:hidden">
            <nav aria-label="Mobile">
              <ul className="list-none space-y-1">
                {navLinks.map(
                  ({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-4 py-3 text-base font-semibold text-[var(--gray-600)] hover:bg-[var(--gray-50)]"
                      >
                        {label}
                      </Link>
                    </li>
                  )
                )}
                <li className="pt-4">
                  <Link
                    href="/#book"
                    onClick={() => setOpen(false)}
                    className="btn btn-amber block w-full text-center"
                  >
                    Book Now
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
