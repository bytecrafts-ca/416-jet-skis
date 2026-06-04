import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function HomeAboutTeaser() {
  return (
    <section className="section section-white">
      <div className="container-jetti">
        <p className="mx-auto max-w-2xl text-center text-lg text-[var(--gray-500)]">
          {siteConfig.homeIntro}{" "}
          <Link href="/about" className="font-semibold text-cyan-dark hover:text-cyan">
            About us
            <ArrowRight className="ml-1 inline h-4 w-4" />
          </Link>
        </p>
      </div>
    </section>
  );
}
