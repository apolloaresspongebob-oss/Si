## Getting started

Quick start:

- Install dependencies: `npm ci` (or `npm install`)
- Start dev server: `npm run dev`
- Run lint: `npm run lint`
- Run unit tests: `npm run test`
- Build for production: `npm run build`
- Preview production build locally: `npm run preview`

Environment variables

- Copy `.env.example` to `.env` and update values for your environment.
- Available variables in `.env.example`:
  - `VITE_API_BASE_URL` — base URL for the backend API
  - `VITE_ENABLE_ANALYTICS` — feature flag for analytics (true/false)
  - `VITE_BASE_PATH` — base path for the app when deploying under a subpath

Important

- Do NOT store secrets or service-role keys in frontend code or in `.env` committed to the repo. Examples: `SUPABASE_SERVICE_ROLE_KEY`, `PRIVATE_KEY`, etc.

End-to-end tests

- `test:e2e` is currently a placeholder. To add E2E tests, consider Playwright or Cypress and update `package.json` and CI accordingly.

