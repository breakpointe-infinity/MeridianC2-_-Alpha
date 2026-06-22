# MeridianRuntimeOS

**MeridianRuntimeOS** is a defense-grade, high-density Common Operating Picture (COP) console designed for real-time orchestration of multi-agent autonomous loops, system telemetry, planning designer parameters, coordination matrices, and tactical overrides. Heavily inspired by tactical Command and Control (C2) interfaces, the application leverages absolute strict 90-degree geometry (`border-radius: 0`) and industrial high-contrast palettes alongside professional audio execution signals to support continuous supervision.

---

## 🛰️ Architecture Preview & Key Features

- **The Radial Perspective Sphere**: Merges separate windows or page navigations into a single multi-perspective system radial. Under the hood, perspectives are categorized as (1) Planning, (2) Execution, (3) Telemetry, (4) Coordination, (5) Intelligence, (6) After Action, and (7) Pipeline Designer.
- **Tailwind v4 High-density Geometry**: Strict `border-radius: 0`, customized 2px dividing borders, and precise font rendering. High visual density aligns human operators with active telemetry loops and minimizes padded whitespace clutter.
- **Sound Synthesis Board**: Fully-integrated synth playbacks utilizing Web Audio API generators for tactical indicators (e.g. success chirps, alert blips, transition hums, warning signals) to amplify awareness under heavy loads.
- **SSH Cryptographic handshake**: Gatekeeps console visualization through a virtual secure boot challenge-response sequence. Supports modular configurations (ED25519 vs. RSA ciphers, and symmetric block protocols).
- **Interactive Multi-Agent Workstream Board**: A custom draggable SVG canvas workspace inside the Pipeline Designer. Permits live node coordination, dynamic vector linking, and real-time execution replays.
- **Integrated Telegram C2 Pipeline**: Direct telemetry streaming backchannel to send signal payloads straight into active operator endpoints.

---

## ⌨️ Global Keyboard Navigation Shortcuts

To maximize telemetry operation speed, several keyboard shortcuts are supported throughout the console:

| Combination | Target Action | Scope & Context |
| :--- | :--- | :--- |
| <kbd>Ctrl</kbd> + <kbd>K</kbd> | Toggle Command Palette | Global focus overlay containing internal diagnostic functions |
| <kbd>Ctrl</kbd> + <kbd>Enter</kbd> | Execute Terminal Script | Triggers interactive terminal command run or focuses CLI input |
| <kbd>Escape</kbd> | Dismiss Command Palette | Instantly hides Search overlays and modal buffers |
| <kbd>Alt</kbd> + <kbd>1</kbd> | Load Perspective: **Planning** | Navigation override to Mission Planning |
| <kbd>Alt</kbd> + <kbd>2</kbd> | Load Perspective: **Execution** | Navigation override to Active Execution Engine |
| <kbd>Alt</kbd> + <kbd>3</kbd> | Load Perspective: **Telemetry** | Navigation override to Live Telemetry Streams |
| <kbd>Alt</kbd> + <kbd>4</kbd> | Load Perspective: **Coordination** | Navigation override to Human Approval Matrices |
| <kbd>Alt</kbd> + <kbd>5</kbd> | Load Perspective: **Intelligence** | Navigation override to Knowledge Vector Space |
| <kbd>Alt</kbd> + <kbd>6</kbd> | Load Perspective: **After Action** | Navigation override to Performance Timeline Replays |
| <kbd>Alt</kbd> + <kbd>7</kbd> | Load Perspective: **Pipeline Designer**| Navigation override to Interactive Graphical Board |
| <kbd>Alt</kbd> + <kbd>T</kbd> | Toggle Color Palette Registry | Swap between **Teal Tactical** & **Cobalt Genome** registries |
| <kbd>Alt</kbd> + <kbd>L</kbd> | Emergency System Lockout | Instantly terminates secure session parameters; logs out back to SSH Gate |

---

## 🚀 Running the Console Locally

Ensure you have **Node.js v20+** installed.

### 1. Configure Secrets in `.env`
Clone the template variables file into a active environment file:
```bash
cp .env.example .env
```
Provide your private `GEMINI_API_KEY` token inside `.env` to power backend synthesis loops:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 2. Install Project Dependencies
Run npm installations to load necessary libraries:
```bash
npm install
```

### 3. Initiate the Dev Server
```bash
npm run dev
```
The server will boot on stateful port `3000`. Navigate to `http://localhost:3000` to interact with the environment.

### 4. Build for Production Deployments
Generate clean optimized static files and type-checked code builds:
```bash
npm run build
npm start
```
By default, builds compile fully optimized targets within `/dist` and utilize Next.js Server Components.
