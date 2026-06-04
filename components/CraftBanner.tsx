import { Music } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function CraftBanner() {
  const { fleet, fleetNote } = siteConfig;

  return (
    <section className="border-b border-[var(--gray-100)] bg-white py-10">
      <div className="container-jetti">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--gray-100)] bg-[var(--off-white)] px-8 py-8 text-center shadow-[var(--shadow-sm)] sm:flex-row sm:text-left">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--cyan-glow)] text-cyan-dark">
            <Music className="h-7 w-7" aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-dark">
              Our fleet
            </p>
            <ul className="mt-2 space-y-1 font-display text-lg font-bold leading-snug text-navy sm:text-xl">
              {fleet.map((model) => (
                <li key={model}>{model}</li>
              ))}
            </ul>
            {fleetNote ? (
              <p className="mt-3 text-sm text-[var(--gray-500)]">{fleetNote}</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
