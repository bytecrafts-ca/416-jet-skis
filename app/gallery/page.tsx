import Image from "next/image";
import { Instagram } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { galleryImages, siteConfig } from "@/lib/site";

export const metadata = {
  title: "Gallery",
  description: "Photos from 416 Jet Skis — Toronto jet ski rentals on Lake Ontario.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title={
          <>
            <span className="accent">Gallery</span>
          </>
        }
        subtitle="Real rides with 416 Jet Skis on Lake Ontario."
      />

      <section className="section section-white">
        <div className="container-jetti">
          <SectionHeader
            tag="Photos"
            title="On the water"
            subtitle="Toronto jet ski rentals — see more on Instagram."
          />
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div
                key={img.src}
                className={`gallery-item ${i === 0 ? "gallery-item-featured" : ""}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes={
                    i === 0
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                  priority={i < 2}
                />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-amber shimmer-btn inline-flex items-center gap-2"
            >
              <Instagram className="h-4 w-4" />
              More on {siteConfig.instagramHandle}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
