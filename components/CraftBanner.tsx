import { Music } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function CraftBanner() {
  const { jetSki } = siteConfig;

  return (
    <section className="border-b border-[var(--gray-100)] bg-white py-10">
      <div className="container-jetti">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--gray-100)] bg-[var(--off-white)] px-8 py-8 text-center shadow-[var(--shadow-sm)] sm:flex-row sm:text-left">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--cyan-glow)] text-cyan-dark">
            <Music className="h-7 w-7" aria-hidden />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-dark">
              Our jet ski
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold text-navy">
              {jetSki.name}{" "}
              <span className="font-sans text-lg font-semibold text-[var(--gray-500)]">
                {jetSki.power} HP
              </span>
            </h2>
            <p className="mt-2 text-[var(--gray-500)]">{jetSki.speakers}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
