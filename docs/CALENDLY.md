# Calendly integration — 416 Jet Skis

## Architecture overview

```
.env.local
    NEXT_PUBLIC_CALENDLY_URL          → default booking link
    NEXT_PUBLIC_CALENDLY_URL_1HR      → optional 1-hour event
    NEXT_PUBLIC_CALENDLY_URL_2HR      → optional 2-hour event

lib/calendly.ts
    getCalendlyUrl()                  → resolves URL by event key
    buildCalendlyUrl()                → adds UTM params for analytics
    isCalendlyConfigured()            → dev warning on /book

components/
    CalendlyProvider.tsx              → loads widget.js once (layout)
    BookButton.tsx                    → popup widget OR link to /book
    CalendlyEmbed.tsx                 → inline widget on /book

app/book/page.tsx                     → full-page inline scheduler
```

## Client setup (5 steps)

1. **Create a Calendly account** at [calendly.com](https://calendly.com).
2. **Create event types**, e.g.:
   - `1 Hour Ride` — 60 min, buffer before/after as needed
   - `2 Hour Ride` — 120 min
3. **Copy each event’s scheduling link** (Share → Add to website).
4. **Paste into `.env.local`**:

```bash
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/416jetskis/ride
NEXT_PUBLIC_CALENDLY_URL_1HR=https://calendly.com/416jetskis/1-hour-ride
NEXT_PUBLIC_CALENDLY_URL_2HR=https://calendly.com/416jetskis/2-hour-ride
```

5. **Restart dev server** (`npm run dev`) so env vars load.

## How booking works on the site

| Location | Behavior |
|----------|----------|
| Header / Hero / Footer CTAs | `BookButton` opens **Calendly popup** |
| Pricing cards | Opens popup with **1HR** or **2HR** URL |
| `/book` | **Inline embed** (best for mobile + SEO landing) |

Popup fallback: if the script hasn’t loaded, the button opens the Calendly URL in a new tab.

## UTM tracking

Buttons pass `utm_source=website` and `utm_campaign` (e.g. `hero`, `pricing-1hr`) so you can see which page drives bookings in Calendly/analytics.

## Payments (optional next step)

Calendly supports **Stripe** for deposits or full payment at booking. Enable in Calendly → Integrations → Stripe, then connect in event type settings.

## Webhooks (optional, server-side)

For CRM/email automation beyond Calendly’s built-in emails:

1. Calendly → Integrations → Webhooks
2. Point to your API route (e.g. `/api/calendly/webhook`)
3. Verify signature and store booking in your database

Not implemented in v1 — add when the client needs custom confirmations or internal ops tools.
