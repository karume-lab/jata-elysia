# Jata Elysia

A premium, full-stack todo application designed for speed, security, and developer experience. **Jata** stands for "Just Another Todo App", and **Elysia** is the high-performance sidecar API powered by Bun.

## Features

- **Next.js 16**: Utilizing the latest App Router patterns and React 19 features.
- **Elysia API**: Blazing fast sidecar API powered by Bun, integrated via Next.js middleware.
- **Better Auth**: Modern, secure authentication with email/password support and session management.
- **Drizzle ORM**: Type-safe database interactions with PostgreSQL.
- **TanStack Query (v5)**: Robust client-side state management with optimistic updates.
- **Premium UI**: Dark-themed aesthetics using Tailwind CSS, glassmorphism, and Lucide icons.
- **Advanced Seeding**: Automated database population with mock users and tasks.
- **Docker Ready**: Tuned for production and Hugging Face Spaces.
- **CI/CD**: Automatic deployment to Hugging Face via GitHub Actions.

---

## Prerequisites

- **[Bun](https://bun.sh/)**: The fast all-in-one JavaScript runtime.
- **[Docker](https://www.docker.com/)**: For running the local PostgreSQL database.

---

## Setup & Installation

### 1. Clone & Install
```bash
git clone https://github.com/karume-lab/jata-elysia
cd jata-elysia
bun install
```

### 2. Environment Variables
Create a `.env.local` file in the root directory:
```env
DATABASE_URL="postgres://admin:hello@localhost:5432/todo_db"
BETTER_AUTH_SECRET="your_secret_here"
BETTER_AUTH_URL="http://localhost:3000" # Base URL of your app
```

### 3. Spin up Database
```bash
docker compose up -d
```

### 4. Database Migrations & Seeding
```bash
# Push schema to database
bun run db:push

# Populate with mock data
bun run db:seed
```

---

## Running Locally

```bash
bun run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## Available Scripts

- `bun run dev`: Starts the Next.js dev server.
- `bun run build:web`: Builds the application for production.
- `bun run start`: Runs the production server.
- `bun run lint`: Runs Biome for linting.
- `bun run format`: Formats code using Biome.
- `bun run typecheck`: Runs TypeScript compiler (no emit).
- `bun run db:push`: Pushes schema changes to the DB.
- `bun run db:reset`: Deletes all migrations and reapplies the schema.
- `bun run db:seed`: Seeds the DB with mock JSON data.
- `bun run db:studio`: Opens Drizzle Studio for visual DB management.
- `bun run db:generate-auth`: Manages Better Auth schema generation.

---

## Deployment

### Hugging Face Spaces
This repo is pre-configured for **Hugging Face Spaces (Docker)**.

1. Create a new **Docker Space** on Hugging Face.
2. Add the following secrets to your GitHub repository:
   - `HF_TOKEN`: Hugging Face Access Token (Write).
   - `HF_USERNAME`: Your HF username.
   - `HF_SPACE_NAME`: The name of your Space.
3. Push to the `main` branch to trigger the `.github/workflows/deploy.yml` workflow.

---

## Project Structure

- `src/app`: Next.js pages and layouts (Routes: `/`, `/todos`, `/dashboard`, `/sign-in`, etc.).
- `src/api`: Elysia API routes and router definitions.
- `src/db`: Drizzle schema, client, and seeding logic.
- `src/features`: Feature-based components and hooks (Auth, Todos).
- `src/lib`: Core configuration and shared utilities (Auth config, query client).
- `Dockerfile`: Production-ready container configuration.

---

## License
MIT
