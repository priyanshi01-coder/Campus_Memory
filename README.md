# Campus Memory — Interactive Prototype (v2)

**The academic memory of your college.** A fully-clickable, multi-page front end for ABC Institute of Technology, now with real per-role sign-in, persistent local data you can add/edit/delete, and an optional live AI connection.

## How to run it (important)
**Recommended — double-click `start-server.sh` (Mac/Linux) or `start-server.bat` (Windows)**, then open **http://localhost:8000** in any browser. This works identically everywhere.

You *can* also just double-click `index.html` directly — it works fully in **Chrome/Edge**. It's less reliable in **Firefox/Safari**, which isolate `localStorage` per-folder on the `file://` protocol, so your login session may not carry over from `login.html` into `/student/…`. The local server avoids this entirely by serving everything from one `http://localhost` origin.

## Signing in
Each role — **Student, Faculty, Admin** — has its own separate sign-in with email + password. On the Sign In page:
- Pick a role tab, then **"Continue as demo [role]"** for instant access, or
- **Create an account** for that role with your own email/password, or
- Sign in with a demo account manually:
  - Student: `priyanshi.gupta@abcinstitute.edu` / `demopass`
  - Faculty: `meera.sharma@abcinstitute.edu` / `demopass`
  - Admin: `rajeev.malhotra@abcinstitute.edu` / `demopass`

Every protected page checks your session on load and bounces you to Sign In if you're not authenticated as the right role — try opening `/student/dashboard.html` in a private/incognito tab to see it happen.

**⚠️ Important security note:** this is browser-local demo authentication (passwords are stored locally after a simple non-cryptographic hash — not real security), meant to separate roles and demonstrate the flow, not to protect real data. See "Going to production" below for what real auth requires.

## What you can now add / edit / delete
- **Admin:** Students, Faculty, Departments, Subjects, Classes & Batches (all full CRUD) — *Institution* section of the sidebar.
- **Faculty:** Create/edit/delete Assignments and Exams, mark Attendance (persists), edit Class Memory's faculty-important topics, run the AI document-extraction demo.
- **Student:** Edit your own profile (name/email/roll/section) and password, mark assignment progress/submission.
- Everyone: edit their profile, change password, toggle theme, reset the local demo database.

All of this is saved to **`localStorage`** in your browser (`cm_db_v2` key) and survives refreshes — but it's local to this one browser. Use **Settings → Reset local demo data** to start over.

## The AI part
`student/ai-assistant.html` (Campus AI) now works two ways:
1. **Local grounded mode (default, no setup):** answers are computed from your actual local Campus Memory data — deadlines, exams, attendance, timeline, knowledge base — with source citations, and it says "I couldn't find that information in Campus Memory" rather than guessing.
2. **Live API mode (optional):** go to **Settings → Campus AI**, paste your own **Anthropic API key**, and Campus AI will call the real Claude API directly from your browser, grounded with the same data snapshot as a system prompt. If that call fails (bad key, offline, or the browser blocks it), it automatically falls back to local mode so the assistant never just breaks.

Read the security note on that Settings page before using it — client-side API keys are visible to anyone with access to that browser.

## Suggested demo flow
1. Landing page → Sign In → **Demo as Faculty**.
2. Faculty Dashboard → **Upload Document** → AI extraction demo → Approve → Publish.
3. Faculty → Assignments → **+ New Assignment** → publish a real one (it persists).
4. Switch to **Demo as Student** → see it on the dashboard/timeline/assignments.
5. **What Did I Miss?**, **Risk Radar**, **Class Memory**, **Campus AI**, **Memory Graph**.
6. **Demo as Admin** → add a Student/Faculty/Subject → **Verification Queue**.

## Structure
```
login.html, index.html            Public pages (auth, landing)
start-server.sh / .bat            One-click local server launchers
/assets/css/style.css             Full design system (light + dark, all components)
/assets/js/data.js                 Seed content (static baseline)
/assets/js/store.js                localStorage-backed CRUD data layer (the "database")
/assets/js/auth.js                 Signup/login/logout/session + per-page route guard
/assets/js/ai.js                   Local grounded answers + optional live Claude API call
/assets/js/app.js                  Shared shell: sidebar, topbar, theme, search, toasts
/student/*.html  /faculty/*.html  /admin/*.html    Role-specific pages
```

## Going to production — what this still needs
This prototype is deliberately honest about its limits. To turn it into the real system from the original spec:

**Backend & data**
- Django + DRF (or similar) with PostgreSQL, replacing `localStorage`/`store.js` with real tables and a real API.
- Server-verified authentication (proper password hashing — bcrypt/argon2 — sessions or JWT, CSRF protection) instead of the client-side demo gate here. The client must never be trusted to decide who's an admin.
- Real authorization enforced server-side on every endpoint, not just hidden UI.

**AI**
- Move the Anthropic API key server-side (env variable, never shipped to the browser) and proxy requests through your backend.
- Build the RAG pipeline described in the original spec: document upload → text extraction → chunking → embeddings → vector store → retrieval → grounded generation with citations.
- Real OCR/document-extraction service instead of the timed animation over pre-written results used here.

**Responsiveness & polish**
- Test on real devices at 375px, 768px, 1024px, 1440px+ breakpoints; the CSS here handles the two biggest breakpoints (desktop / ≤900px) but hasn't been tuned tablet-specifically.
- Add proper loading/error boundaries per API call, offline handling, and pagination for large rosters (this demo hardcodes small seed lists).
- Accessibility pass: full keyboard-nav audit, ARIA labeling on custom widgets (graph, radar), screen-reader testing.

**Operational**
- Real notification delivery (push/email), background jobs for AI extraction, file storage (S3-equivalent) for uploaded documents, audit logging tied to real user identities, rate limiting, and monitoring.

The page structure, component classes, and data shapes here are intentionally close to that backend's eventual shape, so wiring real APIs into these same pages should be a fairly direct swap once it exists.
