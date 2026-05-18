# AMRG Projects — UI/UX Lead Portfolio

A premium, interactive, and high-fidelity creative portfolio showcasing design systems, full-stack components, and immersive product case studies. Developed with a focus on seamless user experience, visual excellence, and rapid runtime performance.

---

## ⚡ Technical Highlights & Performance Engineering

This codebase goes beyond basic layouts to implement optimized frontend performance and clean software architecture:

### 1. Zero-FOUC Instant Preloader
*   **Optimized Loading Pipeline**: Transferred inline preloader CSS and animation keyframes into the document `<head>`. This prevents **Flash of Unstyled Content (FOUC)** and starts loading layouts with dark theme colors (`hsl(220, 20%, 8%)`) from the absolute first paint frame.
*   **Parallel Font Preloads**: Implemented direct Google Font preconnects (`https://fonts.googleapis.com` & `https://fonts.gstatic.com`) and `<link rel="stylesheet">` preloads in `index.html`. This parallelizes resource downloads and eliminates render-blocking `@import` rules inside the CSS bundle.
*   **Immediate Keyframe Spinning**: Ensures double-spinning rotation loops and glowing pulses start animating immediately on page load, eliminating stutters caused by main-thread JS thread congestion.

### 2. Modular Firebase SDK Integration
Integrated the official Firebase Web SDK (v9+) at [src/lib/firebase.ts](file:///c:/VCS/sandbox/creative-canvas/src/lib/firebase.ts), prepped for server-side checks and Hot Module Replacement safety. It exports modular services:
*   **Authentication** (`auth`): For secure session management.
*   **Firestore Database** (`db`): Real-time portfolio feedback or visitor registers.
*   **Cloud Storage** (`storage`): Safe retrieval of case study files.
*   **Analytics** (`analytics`): Initialized conditionally for GDPR and browser compatibility compliance.

### 3. Professional Legal Frameworks
Beautifully styled pages containing simple 3-paragraph, customized terms with direct contact coordinates:
*   **Privacy Policy** ([Privacy.tsx](file:///c:/VCS/sandbox/creative-canvas/src/pages/Privacy.tsx)): Details GDPR-compliant data minimization, local cookie usage, and contact requests for [amrgunaweera@gmail.com](mailto:amrgunaweera@gmail.com).
*   **Terms of Service** ([Terms.tsx](file:///c:/VCS/sandbox/creative-canvas/src/pages/Terms.tsx)): Identifies intellectual property ownership, NDA disclosures regarding corporate case study generalizations, and digital conduct rules.

---

## 🛠️ Environment Configuration

To configure the Firebase integration:

1.  Copy the `.env.example` template:
    ```sh
    cp .env.example .env
    ```
2.  Open `.env` and fill in your client credentials retrieved from the **Firebase Console** (Project Settings > General > Your Apps):
    ```ini
    VITE_FIREBASE_API_KEY=your_api_key_here
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
    VITE_FIREBASE_PROJECT_ID=your_project_id_here
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
    VITE_FIREBASE_APP_ID=your_app_id_here
    VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
    ```

---

## 🚀 Local Development Guide

### Prerequisites
*   Node.js (v18 or higher recommended)
*   npm

### Installation & Startup
```sh
# Step 1: Install project dependencies
npm install

# Step 2: Fire up local hot-reloading development server
npm run dev

# Step 3: Compile production-ready static assets
npm run build
```

---

## 💻 Tech Stack & Key Abstractions
*   **Core**: Vite, TypeScript, React 18
*   **Style System**: Tailwind CSS (v3), Tailwind Animate
*   **Primitives**: Radix UI (Accordion, Aspect Ratio, Dialog, Hover Card, Dropdowns)
*   **Icons**: Lucide React
*   **Animations**: Custom intersection observers (`AnimatedSection.tsx`) and dynamic tailwind timing metrics.
