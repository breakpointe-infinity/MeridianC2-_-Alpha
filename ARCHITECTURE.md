# MeridianRuntimeOS // Comprehensive Architectural Engineering Specification

This document provides a comprehensive technical overview of **MeridianRuntimeOS**, detailing every folder, file, configuration, interface, and environment parameter within the workspace, along with their functional roles and complex dependency boundaries.

---

## 📂 Complete Workscape Map & File Index

The workspace is organized as a high-performance Next.js application leveraging Tailwind CSS, React, and Lucide icons. Below is the total hierarchical map of all directories and files:

```bash
/ (Root Directory)
├── app/
│   ├── globals.css          # Core CSS variables, Tailwind @import rules, custom utility patterns
│   ├── layout.tsx           # Global HTML viewport wrapping, next/font/google declarations
│   └── page.tsx             # Main mainframe application, SSH boot gates, graph layout engine
├── hooks/
│   └── use-mobile.ts        # Dynamic layout responsive breakpoint listener hook
├── lib/
│   └── utils.ts             # Tailwind class consolidator (combines clsx and tailwind-merge)
├── assets/
│   └── .aistudio/
│       └── .gitignore       # Untracked AI Studio cache variables
├── .env.example             # Documented guide of public/private environment secrets
├── .eslintrc.json           # React-scoped syntax correctness ruleset
├── eslint.config.mjs        # Active ES execution linter configuration
├── metadata.json            # Deployment permissions, app descriptions, major capabilities
├── next-env.d.ts            # Automatically compiled typescript system declarations
├── next.config.ts           # Next.js workspace configurations
├── package.json             # Build commands, active scripts, and lockstep dependency indices
├── package-lock.json        # Strict lockstep hashes of node modules
├── postcss.config.mjs       # Tailwind CSS post-compile configuration
└── tsconfig.json            # Compilers, strict rulesets, paths, target configurations
```

---

## 🛠️ File-by-File Technical Specification

### 1. Root Configuration Files

| File Name | Functional Description | Dependencies & Impact |
| :--- | :--- | :--- |
| `package.json` | Specifies project scripts (such as `dev`, `build`, `start`, `lint`) and lock versions of dependencies (Next.js, React, Tailwind, Framer Motion/Motion, Recharts, and Google GenAI). | Any changes here force clean-room dependency reinstallations. Standard compilers (Babel or swc) compile targets matching these modules if called. |
| `metadata.json` | Stores deployment settings, including the application’s descriptive name (`MeridianRuntimeOS`), description, frame permissions, and major capabilities. | Automatically registered by the Cloud Run proxy to render title bars and request hardware layer clearances (camera/microphone). |
| `tsconfig.json` | Enforces structural strictness constraints over TypeScript files. Forbids implicit `any` definitions and configures paths for the compilation build engine. | Used by of Next.js and ESLint compiler engines. Impact of errors stops all server starts and production builds. |
| `postcss.config.mjs` | Feeds rules to PostCSS to inject `@tailwindcss/postcss` for Tailwind CSS processing. | Translates styles declared inside `globals.css` into browser-understandable styling directives. |
| `next.config.ts` | Configures target asset loaders, production setups, security headers, and domain access definitions in Next.js. | Crucial for the rendering pipe during production build steps. Impact of errors leads to broken asset links or failed compilations. |
| `.gitignore` | Prevents local parameters, builds, caches, and raw developer credentials from entering remote source version systems. | Standard Git control paths respect these rules during commits. |
| `.eslintrc.json`, `eslint.config.mjs` | Defines static code analysis validation behaviors. Tracks missing imports, unvalidated types, and syntax anomalies. | Direct dependency for the `npm run lint` commands executed before preview builds. |

---

### 2. The Core Application Directory (`/app`)

#### 📄 `/app/globals.css`
* **Functional Role**: Sets global styles. It imports Tailwind CSS v4 using `@import "tailwindcss";` and loads standard layout utility classes.
* **Dependencies**:
  * **Depends on**: PostCSS configuration plugins for translation to binary CSS.
  * **Impacts**: Entire application styling. Any syntax disruption here immediately blanks the UI output or strips strict geometry rules.

#### 📄 `/app/layout.tsx`
* **Functional Role**: Acts as the skeleton page template. Implements server font loading with `next/font/google` to dynamically inject highly legible typeface variables:
  * `Inter` (sans-serif text) as `--font-sans`
  * `JetBrains Mono` or comparable monospace fonts as `--font-mono`
* **Dependencies**:
  * **Depends on**: Next.js App Router root layout interfaces.
  * **Impacts**: `page.tsx`. This layouts bounds page boundaries and forces strict typographical rendering rules globally.

#### 📄 `/app/page.tsx`
* **Functional Role**: The master hub. Houses the full system operational console compiling:
  * **SSH Secure Handshake gate**: Authenticates inputs using configurable variables.
  * **Central Perspective engine**: Switches view states under strict radial bounds.
  * **Pipeline Designer Graphic Board**: Custom SVG node editor coordinating draggable units, vector connectors, and animation sequences.
  * **Web Audio Sound Synthesizer**: Harnesses the Web Audio API to create non-media sound signals based on execution phases.
  * **Telegram Integration pipeline**: Connects local outputs with external streaming channels.
* **Dependencies**:
  * **Depends on**: Global state hook selectors, Framer Motion API elements, Lucide icon libraries, and raw layout contexts. Includes imports from `/hooks/use-mobile` and `/lib/utils`.
  * **Impacts**: The central hub that users see. Houses 98% of overall terminal states, command parameters, charts, grids, and approving systems.

---

### 3. Utility Components and Custom Hooks

#### 📄 `/lib/utils.ts`
* **Functional Role**: Provides a clean implementation of `cn()`, which enables conditional Tailwind class merging.
* **Dependencies**:
  * **Depends on**: `clsx` and `tailwind-merge` packages.
  * **Impacts**: Dynamically formatted CSS classes throughout `page.tsx`. Used to safely merge runtime UI state styles (such as changing border highlights from Teal to Cobalt).

#### 📄 `/hooks/use-mobile.ts`
* **Functional Role**: Hook that detects screen widths and provides real-time updates regarding mobile layout requirements.
* **Dependencies**:
  * **Depends on**: React hooks (`useState`, `useEffect`) and browser `window.matchMedia` events.
  * **Impacts**: Controls panel layouts and responsive behaviors inside `page.tsx`.

---

## 🔒 Environment Variable Structure

The application supports key environment configurations to manage server/client operations safely:

```env
# .env.example
GEMINI_API_KEY=               # Private Server Key for AI semantic coordination (Not exposed to public clients)
```

### Data Pipeline Flow
1. **Server-Side Security**: The private `GEMINI_API_KEY` is loaded solely server-side to proxy synthesis commands cleanly without leaking secure credentials to client-side browsers.
2. **REST API Interface**: Client views execute HTTP calls to server endpoints which proxy requested context tokens back to the Gemini client interface.

---

## 🛰️ Lifecycle Logic of Data and System Operations

```
                   [ BROWSER ENTRY ]
                           │
                           ▼
                ┌─────────────────────┐
                │   SSH CHALLENGE     │◄──── Passphrase Verification
                │  AUTHENTICATOR GATE │
                └──────────┬──────────┘
                           │ (Authenticated)
                           ▼
                ┌─────────────────────┐
                │   MERIDIAN SYSTEM   │◄──── Keyboard Listeners Active (Alt + 1..7)
                │  MAINFRAME INITIAL  │
                └──────────┬──────────┘
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
      ┌─────────────┐┌─────────────┐┌─────────────┐
      │ PLANNING    ││ TELEMETRY   ││ PIPELINE    │
      │ PERSPECTIVE ││ HEAT MAPS   ││ DESIGNER    │
      └─────────────┘└─────────────┘└─────────────┘
```

1. **Gatekeeping Sequence**: Session authorization is verified at startup. If absent, the SSH Gate intercepts the user to request passphrase authentication before allowing app rendering.
2. **State Sync & The Radial Node System**: Clicking any Perspective radial instantly triggers:
   - A Web Audio synthesizer feedback frequency.
   - Updates target details in Inspector Panels.
   - Changes core component visibility state parameters.
3. **Sound Synthesizer**: Rather than static MP3 assets, `page.tsx` utilizes dynamic oscillators configured to produce defense-grade signals for user actions:
   - *Success beep*: High frequency dual-sine wave.
   - *Transition chime*: Modulated low-to-high wave.
   - *Warning tone*: Square wave alert.
