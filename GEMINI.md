# GEMINI.md - Code With Ahsan

This file serves as the foundational mandate for Gemini CLI within the `code-with-ahsan` repository. It defines the project-specific context, engineering standards, and operational workflows that MUST be followed.

## Project Context
`code-with-ahsan` is a community-driven platform designed to connect mentors and mentees, facilitate project collaboration, and provide structured learning roadmaps.

### Core Mission
Enable community members to find mentors, collaborate on real-world projects with structured support, and follow clear learning roadmaps within a mentor-led, quality-focused environment.

## Technical Foundation

### Tech Stack
- **Framework:** Next.js 16.0.10 (App Router)
- **Runtime:** Node.js 20.x
- **UI:** React 19.2.1, Tailwind CSS 4, DaisyUI 5, Lucide React
- **Backend/Database:** Firebase (Auth, Firestore, Storage, Realtime DB), MongoDB (Mongoose)
- **AI:** Google Gemini API (@google/genai)
- **Integrations:** Discord (Bot SDK), Mailgun (Email), Mailchimp (Marketing), Strapi (CMS)
- **Testing:** Vitest

### Key Directories
- `src/app`: Next.js App Router pages and API routes.
- `src/components`: Reusable UI components.
- `src/lib`: Core business logic, services, and external integrations (Discord, Firebase, Email).
- `src/contexts`: React Context providers for global state.
- `src/types`: TypeScript domain types.
- `.planning`: Project management, architecture, and roadmap documentation (ABSOLUTE TRUTH).
- `scripts`: Utility scripts for backfills, notifications, and maintenance.

## Engineering Mandates

### 1. Planning First
- **Consult `.planning`:** Before starting any significant task, review the relevant files in `.planning/`.
- **Update Documentation:** If a task changes the architecture or requirements, propose updates to the corresponding files in `.planning/`.
- **GSD Workflow:** Adhere to the Research -> Strategy -> Execution -> Validation lifecycle.

### 2. Coding Standards
- **Strict TypeScript:** Maintain 100% type safety. Avoid `any`. Use interfaces for props and API payloads.
- **Naming Conventions:** 
  - PascalCase for React components and types.
  - camelCase for functions, variables, and utility files.
  - lowercase-hyphenated for API routes and feature directories.
- **Import Order:** 
  1. External libraries.
  2. Internal services (`@/lib/`).
  3. Components (`@/components/`).
  4. Types.
  5. Local exports.
- **Error Handling:** Use try-catch blocks in API routes and async functions. Log errors using the Winston logger (`src/lib/logger.ts`).
- **Styling:** Use Vanilla CSS or Tailwind CSS 4 utility classes. Prefer DaisyUI components where appropriate.

### 3. Integration Integrity
- **Discord:** Ensure all Discord-related operations (channel creation, permission management) handle rate limits and errors gracefully.
- **Firebase:** Use `firebase-admin` for server-side operations and the Firebase Client SDK for frontend interactions.
- **Security:** Rigorously protect service accounts and API keys. NEVER commit `.env` or files in `secure/`.

### 4. Testing & Validation
- **Vitest:** Run `npm test` to verify changes.
- **Firebase Emulator:** Use `npm run test:rules` for security rule changes.
- **Manual Verification:** For UI changes, verify responsiveness and accessibility (Aria labels, keyboard navigation).

## Operational Workflows

### Research Phase
- Use `grep_search` and `glob` to map dependencies.
- Reproduce bugs with a test case before fixing.
- Check `package.json` before introducing new libraries.

### Execution Phase
- Apply surgical changes. Avoid unrelated refactoring.
- Use `replace` for precise code modifications.
- Run `npm run lint` and `npm run build` to ensure project integrity.

### Validation Phase
- Verify behavioral correctness with tests.
- Ensure structural integrity and adherence to conventions.
- Provide a clear, concise explanation of the changes when requested.

## Useful Commands
- `npm run dev`: Start development server.
- `npm run build`: Build for production.
- `npm run lint`: Run ESLint.
- `npm test`: Run Vitest suites.
- `npm run test:rules`: Test Firestore security rules.
