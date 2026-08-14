# Portfolio

Next.js portfolio for The Web Design Lounge.

## Requirements

- Node.js 24 (the repository pins Node.js 24.19.0)
- npm 11

## Setup

```bash
nvm use
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

Create `.env.local` and provide these values:

```dotenv
RESEND_API_KEY=
RESEND_FROM=
CONTACT_TO_EMAIL=
```

Do not commit real credentials.

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
```
