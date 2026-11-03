# Simple CRUD Client

Next.js + TypeScript frontend for the [Simple CRUD Server](https://github.com/muhammadrakib2299/backend_server) — a small exercise in wiring a React form to an Express + MongoDB API.

## What it does

- "Add User" form (name, email, phone) styled with Tailwind CSS, with dark-mode support
- Collects the form values on submit as the first step of the create flow; the matching `POST /users` endpoint lives in the server repo

## Built with

Next.js (App Router) · React · TypeScript · Tailwind CSS

## Run locally

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

Start the server repo on port 5000 alongside it.

## License

[MIT](LICENSE) © Md. Rakib
