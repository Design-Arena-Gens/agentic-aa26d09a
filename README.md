# After the Impact

An immersive single-page Next.js narrative reconstructing the catastrophic failure and crash of Flight N4173 and the three survivors who escaped the wreckage. The site blends timeline telemetry, survivor spotlights, and resilience insights with cinematic styling.

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm, npm, or yarn

### Installation

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to explore the experience.

### Production build

```bash
npm run build
npm start
```

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Framer Motion

## Deployment

Deploy with Vercel (recommended):

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-aa26d09a
```

## Project Structure

```
app/
  layout.tsx        # Global layout and metadata
  page.tsx          # Narrative composed of sections
  globals.css       # Tailwind base styles and cinematic effects
components/
  HeroScene.tsx
  EventTimeline.tsx
  SurvivorSpotlight.tsx
  ResilienceInsights.tsx
  Footer.tsx
```

All content is fictional and crafted for storytelling purposes.
