import { SectionHeader } from "@/components/SectionHeader";
import { reviews, siteConfig } from "@/lib/site";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(rating)}
      <span className="sr-only">{rating} out of 5</span>
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="section section-light" id="reviews">
      <div className="container-jetti">
        <SectionHeader
          tag="Reviews"
          title={
            <>
              What riders <span className="accent">say</span>
            </>
          }
          subtitle="Real feedback from people who've rented with us."
        />

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article key={review.author} className="review-card">
              <StarRating rating={review.rating} />
              <p className="review-text">&ldquo;{review.text}&rdquo;</p>
              <p className="review-author">{review.author}</p>
            </article>
          ))}
        </div>

        <p className="reviews-footer">
          More photos and rides on{" "}
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-dark hover:text-cyan"
          >
            {siteConfig.instagramHandle}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
