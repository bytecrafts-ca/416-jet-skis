# 416 Jet Skis

Premium jet ski rental website for Toronto — inspired by [Jetti](https://jetti.ca/) with a refined navy + gold aesthetic.

## Pages

- **/** — Home (hero, stats, features, safety teaser, reviews, pricing, location)
- **/safety** — Safety technology & operations
- **/gallery** — Photo gallery
- **/about** — Brand story
- **/contact** — Contact info, message form, and FAQ
- **/book** — Calendly inline booking (linked from CTAs, not in main nav)

## Quick start

```bash
npm install
cp .env.example .env.local
# Edit .env.local with real Calendly + contact info
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Calendly setup

See [docs/CALENDLY.md](./docs/CALENDLY.md) for the full integration architecture.

## Customize for your client

1. **`.env.local`** — phone, email, Calendly URLs
2. **`lib/site.ts`** — pricing, stats, FAQs, reviews, copy
3. **`app/gallery`** — replace Unsplash URLs with real photos
4. **`public/`** — add logo (`logo.svg`) and favicon when ready

## Deploy

Works on [Vercel](https://vercel.com) out of the box. Set environment variables in the Vercel dashboard to match `.env.example`.

```bash
npm run build
npm start
```
