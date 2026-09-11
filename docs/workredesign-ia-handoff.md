# WorkRedesign — Sitemap, Information Architecture & CTA Handoff

> **For:** Claude Code — Next.js build  
> **Product:** WorkRedesign (workredesign.org) — Enterprise Skills Intelligence Platform  
> **Source:** 13 HTML prototype pages in `W:\PMO\Core Catalyst\HTML Files\`  
> **Tagline:** Workforce Transformation Redefined

---

## 1. Sitemap

```
workredesign.org
│
├── / (Home)
│
├── /how-it-works
│
├── /solutions
│   ├── /solutions/chro
│   ├── /solutions/hr-ops
│   └── /solutions/managers
│
├── /engage
│
├── /pricing
│
├── /security
│
├── /blog
│
├── /about
│
├── /careers
│
├── /contact
│
└── /demo                ← primary conversion destination
```

### Route → File mapping

| Next.js Route            | Source HTML File          |
|--------------------------|---------------------------|
| `/`                      | `home.html`               |
| `/about`                 | `about.html`              |
| `/blog`                  | `blog.html`               |
| `/careers`               | `careers.html`            |
| `/contact`               | `contact.html`            |
| `/demo`                  | `demo.html`               |
| `/engage`                | `engage.html`             |
| `/how-it-works`          | `howitworks.html`         |
| `/pricing`               | `pricing.html`            |
| `/security`              | `security.html`           |
| `/solutions/chro`        | `solutionschro.html`      |
| `/solutions/hr-ops`      | `solutionshrops.html`     |
| `/solutions/managers`    | `solutionsmanagers.html`  |

---

## 2. Navigation Architecture

### Primary Navigation (Desktop)

```
[work|redesign logo]   Platform   Solutions ▾   How It Works   Pricing   Security       [Book a Demo →]
```

**Solutions dropdown items:**
- For CHROs → `/solutions/chro`
- For HR Operations → `/solutions/hr-ops`
- For Line Managers → `/solutions/managers`

### Secondary Navigation (Footer)

```
Column 1 — Product        Column 2 — Solutions      Column 3 — Company        Column 4 — Legal
──────────────────────    ──────────────────────    ──────────────────────    ──────────────────────
How It Works              For CHROs                 About                     Privacy Policy
Pricing                   For HR Operations         Blog                      Terms of Service
Security                  For Line Managers         Careers                   Security
                                                    Contact
```

Footer bottom bar: © 2025 WorkRedesign. All rights reserved. | workredesign.org

### Mobile Navigation

- Hamburger icon (top right) → slide-in drawer from right
- Drawer contains all primary nav links + Solutions sub-links expanded
- CTA button pinned to bottom of drawer
- Close on overlay tap or X button

### Active States

- Use `usePathname()` to apply active style to current route
- Solutions sub-routes (`/solutions/*`) should keep "Solutions" highlighted in nav

---

## 3. Page-by-Page Information Architecture

---

### 3.1 Home (`/`)

**Purpose:** Establish the problem, introduce the platform, qualify leads by persona, drive to demo.

**Section order:**

| # | Section | Component | Key Content |
|---|---------|-----------|-------------|
| 1 | **Hero** | `HeroSection` | Headline: *"Turn Skills Data Into Strategic Workforce Decisions"*. Sub: platform value prop. Two CTAs. Hero visual: animated dashboard badge. |
| 2 | **Logo Bar** | `LogoBar` | Trusted-by strip. 6–8 enterprise client names/logos (placeholder dots). Continuous scroll animation. |
| 3 | **Problem Statement** | `ProblemSection` | 3-column anxiety cards. Each: icon pill + headline + 2-line description. Frames the skills gap crisis. |
| 4 | **Platform Features** | `FeaturesGrid` | 3-column feature cards. Icon pill + headline + body. Core capabilities. |
| 5 | **How It Works Preview** | `HowItWorksStrip` | 3-step horizontal flow with connectors. Teaser leading to `/how-it-works`. |
| 6 | **Persona Tabs** | `PersonaTabs` | Tab switcher: CHRO / HR Ops / Managers. Each tab: headline, 3 benefit bullets, CTA linking to persona solution page. |
| 7 | **Outcome Stats** | `StatsRow` | 4 large-number stat tiles. E.g. "3× faster skills mapping", "40% reduction in skill gaps". |
| 8 | **Testimonials** | `TestimonialsSection` | 2–3 cards. Quote, name, title, company. Star ratings. |
| 9 | **Security Trust Bar** | `SecurityStrip` | Brief security/compliance assurance. Icon pills: SOC 2, GDPR, ISO 27001. Links to `/security`. |
| 10 | **CTA Banner** | `CtaBanner` | Full-width. Dark navy background. Headline + sub + primary CTA. |

---

### 3.2 How It Works (`/how-it-works`)

**Purpose:** Walk prospects through the product mechanics end-to-end. Reduce "how does it actually work?" objections.

**Section order:**

| # | Section | Component | Key Content |
|---|---------|-----------|-------------|
| 1 | **Page Hero** | `PageHero` | Headline: *"From Raw HRIS Data to Board-Ready Skills Intelligence"*. Sub: one paragraph. |
| 2 | **Ingestion Layer** | `StepSection` | Step 1. How data enters WorkRedesign (HRIS connectors, CSV, API). Diagram visual. |
| 3 | **Reconciliation Engine** | `StepSection` | Step 2. AI taxonomy matching, deduplication, skills normalisation. |
| 4 | **Intelligence Layer** | `StepSection` | Step 3. Gap analysis, mobility scoring, succession readiness. |
| 5 | **Delivery Layer** | `StepSection` | Step 4. Dashboards, exports, CHRO briefings, manager views. |
| 6 | **Integration Ecosystem** | `IntegrationGrid` | Logo grid of compatible HRIS/LMS systems (Workday, SAP, Oracle HCM, etc.). |
| 7 | **CTA Banner** | `CtaBanner` | "Ready to see it in action?" → `/demo` |

---

### 3.3 Solutions — CHRO (`/solutions/chro`)

**Purpose:** Speak directly to the CHRO's board-level accountability. Justify budget, ROI, and strategic narrative.

**Persona pain:** Skills blind spots at the board level. Can't answer "Do we have the skills to execute our 3-year strategy?"

**Section order:**

| # | Section | Component | Key Content |
|---|---------|-----------|-------------|
| 1 | **Persona Hero** | `SolutionHero` | Headline specific to CHRO. Board-level language. Credibility statement. |
| 2 | **Anxiety Cards** | `AnxietyCards` | 3 cards: top workforce risks a CHRO faces without skills visibility. |
| 3 | **Outcome Cards** | `OutcomeCards` | 3–4 cards: what WorkRedesign delivers for CHROs specifically. |
| 4 | **Board Export Demo** | `FeatureHighlight` | Showcase "Board-Ready Intelligence Export" feature. Visual mockup. |
| 5 | **Deliverables** | `DeliverablesList` | Concrete outputs: skills heat maps, succession gap reports, board briefing pack. |
| 6 | **Testimonial** | `SingleTestimonial` | CHRO-level quote and attribution. |
| 7 | **CTA Banner** | `CtaBanner` | "See your workforce strategy come to life." → `/demo` |

---

### 3.4 Solutions — HR Operations (`/solutions/hr-ops`)

**Purpose:** Solve the data plumbing problem for HR Ops teams drowning in spreadsheets and mismatched taxonomies.

**Persona pain:** Six spreadsheets, three taxonomies, no single source of truth.

**Section order:**

| # | Section | Component | Key Content |
|---|---------|-----------|-------------|
| 1 | **Persona Hero** | `SolutionHero` | Headline: *"One Governed Pipeline. Not Six Spreadsheets."* |
| 2 | **Anxiety Cards** | `AnxietyCards` | Operational pains: data duplication, manual reconciliation, version conflicts. |
| 3 | **Outcome Cards** | `OutcomeCards` | Automated ingestion, live deduplication, one governed taxonomy. |
| 4 | **Integration Showcase** | `IntegrationGrid` | Systems WorkRedesign connects to (Workday, SAP, etc.). Icon + label. |
| 5 | **Process Before/After** | `BeforeAfter` | Two-column contrast: before WorkRedesign vs. after. |
| 6 | **Testimonial** | `SingleTestimonial` | HR Ops manager / HRBP quote. |
| 7 | **CTA Banner** | `CtaBanner` | "Replace the spreadsheets. Keep the insight." → `/demo` |

---

### 3.5 Solutions — Line Managers (`/solutions/managers`)

**Purpose:** Give line managers day-to-day utility: team skills visibility, development planning, project staffing.

**Persona pain:** No visibility into what their team can actually do. Guessing at project resourcing.

**Section order:**

| # | Section | Component | Key Content |
|---|---------|-----------|-------------|
| 1 | **Persona Hero** | `SolutionHero` | Headline: *"Make Your Team's Skills Work For You."* |
| 2 | **Problem Cards** | `ProblemCards` | 3 manager-level problems: talent hoarding, invisible skills, slow team formation. |
| 3 | **Feature Cards** | `FeatureCards` | Team skills map, gap alerts, mobility recommendations. |
| 4 | **Outcome Cards** | `OutcomeCards` | Measurable outcomes for managers: faster team formation, fewer skills surprises. |
| 5 | **Testimonial** | `SingleTestimonial` | Line manager or team lead quote. |
| 6 | **CTA Banner** | `CtaBanner` | "Know your team's skills before the project asks you to." → `/demo` |

---

### 3.6 Engage (`/engage`)

**Purpose:** Explain how WorkRedesign works with a new client — from discovery to deployment. Reduces procurement anxiety.

**Section order:**

| # | Section | Component | Key Content |
|---|---------|-----------|-------------|
| 1 | **Page Hero** | `PageHero` | Headline: *"How We Work With You."* Sub: partnership positioning. |
| 2 | **Engagement Phases** | `PhaseCards` | 4-phase timeline: Discovery → Integration → Go-Live → Optimise. Each: icon pill, phase name, duration, deliverables. |
| 3 | **What You Get** | `DeliverableGrid` | Grid of tangible deliverables per engagement phase. |
| 4 | **Team Section** | `TeamSection` | WorkRedesign team involved: CSM, Solutions Engineer, etc. Role + responsibility. |
| 5 | **FAQ** | `FaqSection` | Common procurement / implementation questions. Accordion pattern. |
| 6 | **CTA Banner** | `CtaBanner` | "Let's scope your rollout." → `/demo` or `/contact` |

---

### 3.7 Pricing (`/pricing`)

**Purpose:** Qualify leads by plan fit. Transparent enough to reduce sales friction, structured enough to drive conversation.

**Section order:**

| # | Section | Component | Key Content |
|---|---------|-----------|-------------|
| 1 | **Page Hero** | `PageHero` | Headline: *"Straightforward Pricing. Serious Enterprise Value."* |
| 2 | **Plan Cards** | `PricingCards` | 2–3 tier cards (Starter / Growth / Enterprise). Each: price/seat or "Contact", feature list with check icons, CTA button. |
| 3 | **Feature Comparison Table** | `ComparisonTable` | Full feature matrix across plans. Checkmark / dash icons. Sticky header row. |
| 4 | **Included Icons Strip** | `IncludedStrip` | What's always included regardless of tier: support, security, updates. |
| 5 | **FAQ** | `FaqSection` | Billing, contract length, custom pricing questions. |
| 6 | **CTA Banner** | `CtaBanner` | "Not sure which plan fits? Let's talk." → `/demo` |

---

### 3.8 Security (`/security`)

**Purpose:** Remove the CISO / procurement blocker. Demonstrate enterprise-grade data governance and compliance.

**Section order:**

| # | Section | Component | Key Content |
|---|---------|-----------|-------------|
| 1 | **Page Hero** | `PageHero` | Headline: *"Built for the Enterprise. Secured for the Regulated."* |
| 2 | **Certification Grid** | `CertGrid` | SOC 2 Type II, ISO 27001, GDPR, CCPA. Icon pill per cert + one-line description. |
| 3 | **Data Flow Section** | `DataFlowSection` | How data enters, is processed, and stored. Visual diagram. |
| 4 | **Security Features** | `SecurityFeatures` | AES-256 encryption, role-based access, audit logs, SSO/SAML, data residency options. Card per feature. |
| 5 | **Trust Strip** | `TrustStrip` | "Your data is never used for model training." + hosting region info. |
| 6 | **CTA Banner** | `CtaBanner` | "Request our security documentation." → `/contact` with pre-filled subject. |

---

### 3.9 Blog (`/blog`)

**Purpose:** Content-led top-of-funnel. Capture organic search traffic. Establish thought leadership on skills-based organisations.

**Section order:**

| # | Section | Component | Key Content |
|---|---------|-----------|-------------|
| 1 | **Page Hero** | `PageHero` | "Insights on the Skills-Based Organisation." Minimal. No CTA. |
| 2 | **Featured Post** | `FeaturedCard` | Large card: thumbnail icon, category, headline, excerpt, Read More link. |
| 3 | **Post Grid** | `PostGrid` | 2–3 column card grid. Each: icon pill (category icon), category label, headline, excerpt, date, Read More. |
| 4 | **Newsletter Strip** | `NewsletterStrip` | "Stay current on workforce transformation." Email input + Subscribe button. |

> **Note:** Blog posts are static content in the MVP. No dynamic CMS required for the Next.js build. Hardcode the article data as a typed array in `app/blog/data.ts`.

---

### 3.10 About (`/about`)

**Purpose:** Build credibility and trust. Humanise the brand for HR decision-makers who buy on relationship.

**Section order:**

| # | Section | Component | Key Content |
|---|---------|-----------|-------------|
| 1 | **Page Hero** | `PageHero` | Mission statement. "We exist to make skills visible." |
| 2 | **Values Grid** | `ValuesGrid` | 4–6 values. Each: icon pill (`value-icon`) + value name + 2-line description. |
| 3 | **Origin Story** | `StorySection` | 2-column text + visual. Why WorkRedesign was founded. |
| 4 | **Stats Row** | `StatsRow` | Company/product traction figures. |
| 5 | **Team Grid** | `TeamGrid` | Team member cards: photo placeholder, name, title, LinkedIn icon. |
| 6 | **CTA Banner** | `CtaBanner` | "Join us." splits to two CTAs: `/careers` and `/demo`. |

---

### 3.11 Careers (`/careers`)

**Purpose:** Attract mission-aligned talent. Reduce recruiter load by self-qualifying candidates.

**Section order:**

| # | Section | Component | Key Content |
|---|---------|-----------|-------------|
| 1 | **Page Hero** | `PageHero` | "Build the Future of Work With Us." |
| 2 | **Benefits Grid** | `BenefitCards` | 4–6 cards. `benefit-icon` + benefit name + description. Remote, equity, growth, etc. |
| 3 | **Why WorkRedesign** | `WhySection` | 3 cards with `why-icon`. Culture differentiators. |
| 4 | **Open Roles** | `JobListings` | Grouped by department. Each: role title, location tag, type tag (Full-time / Contract), Apply link. |
| 5 | **Snap Section** | `SnapSection` | 3 quick stats: team size, countries, roles open. `snap-icon` per stat. |
| 6 | **CTA Banner** | `CtaBanner` | "Don't see your role? Send a speculative application." → `/contact` |

---

### 3.12 Contact (`/contact`)

**Purpose:** Catch all inbound enquiries not routed through `/demo`. Partnership, press, support, general.

**Section order:**

| # | Section | Component | Key Content |
|---|---------|-----------|-------------|
| 1 | **Page Hero** | `PageHero` | "Get in Touch." Sub: one line on response times. |
| 2 | **Contact Channels** | `ChannelCards` | 3–4 cards with `oi-icon`. Sales enquiry, Support, Partnership, Press. Each: icon + label + email address or link. |
| 3 | **Contact Form** | `ContactForm` | Name, Company, Email, Subject (select), Message, Submit. Inline validation. |
| 4 | **Office/Social Strip** | `OfficeStrip` | `route-icon` cards with location/social links. LinkedIn, email address, region. |

---

### 3.13 Demo (`/demo`)

**Purpose:** Primary conversion page. Book a live demo with the WorkRedesign team.

**Section order:**

| # | Section | Component | Key Content |
|---|---------|-----------|-------------|
| 1 | **Page Hero** | `PageHero` | "See WorkRedesign in 30 Minutes." Sub: what they'll see on the call. No distractions. |
| 2 | **Demo Form** | `DemoForm` | First name, Last name, Work email, Company, Role (select: CHRO / HR Ops / Manager / Other), Company size, Submit. |
| 3 | **Trust Signals** | `TrustRow` | 3 inline reassurances: "No hard sell", "30-minute session", "Tailored to your industry". `trust-icon` per item. |
| 4 | **What to Expect** | `NsCards` | 3 `ns-icon` cards: Before / During / After the demo. Sets expectations. |
| 5 | **Thanks State** | `ThanksSection` | `thanks-icon` confirmation shown after form submit. "We'll be in touch within 1 business day." |

---

## 4. CTA Architecture

### Primary CTA: Book a Demo

The single conversion goal across the site. Appears in:
- Global nav (persistent)
- Every page's closing `CtaBanner`
- Home hero (primary button)
- Solutions pages hero sections

**Destination:** `/demo`  
**Button label:** `Book a Demo` (nav) / `Book a Free Demo →` (hero/banner)  
**Tailwind classes:** `bg-[--color-accent] hover:bg-[--color-accent-dark] text-white font-semibold`

---

### Secondary CTAs by Page

| Page | Primary CTA | Label | Destination | Secondary CTA | Label | Destination |
|------|-------------|-------|-------------|---------------|-------|-------------|
| Home | Book demo | `Book a Free Demo →` | `/demo` | See how it works | `See How It Works` | `/how-it-works` |
| How It Works | Book demo | `See It In Action →` | `/demo` | View pricing | `View Pricing` | `/pricing` |
| Solutions / CHRO | Book demo | `Book a CHRO Briefing →` | `/demo` | Learn how it works | `See the Platform` | `/how-it-works` |
| Solutions / HR Ops | Book demo | `Replace the Spreadsheets →` | `/demo` | See integrations | `View Integrations` | `/how-it-works` |
| Solutions / Managers | Book demo | `See Your Team's Skills →` | `/demo` | View pricing | `View Plans` | `/pricing` |
| Engage | Scope rollout | `Let's Scope Your Rollout →` | `/demo` | Contact team | `Talk to Us` | `/contact` |
| Pricing | Book demo | `Talk to Sales →` | `/demo` | — | — | — |
| Security | Request docs | `Request Security Docs →` | `/contact?subject=security` | — | — | — |
| Blog | Book demo | `Book a Demo →` | `/demo` | Subscribe | (newsletter strip) | — |
| About | Join us | `See Open Roles` | `/careers` | Book demo | `Book a Demo` | `/demo` |
| Careers | Apply | `View Open Roles ↓` | (anchor to job list) | Speculative | `Send Application` | `/contact` |
| Contact | Submit form | `Send Message` | (form submit) | Book demo | `Prefer a call? Book a Demo` | `/demo` |
| Demo | Submit form | `Request My Demo →` | (form submit) | — | — | — |

---

### Ghost / Secondary Button Style

Used as the second CTA in hero sections and banners.  
**Tailwind:** `border-2 border-[--border] text-[--color-accent] hover:border-[--color-accent] hover:bg-[--color-accent-soft]`

---

## 5. User Journey Flows

### Journey 1 — CHRO (Strategic buyer)
```
Home → Hero (sees board-level framing) → Solutions/CHRO → Engage → Pricing → Demo
```

### Journey 2 — HR Operations (Operational buyer)
```
Home → Persona Tab (HR Ops) → Solutions/HR-Ops → How It Works → Demo
```

### Journey 3 — Line Manager (End user / internal champion)
```
Home → Persona Tab (Managers) → Solutions/Managers → Demo
```

### Journey 4 — Sceptical / Security-first buyer
```
Home → Security → Pricing → Demo
```

### Journey 5 — Content-led / organic
```
Blog post → Home → How It Works → Pricing → Demo
```

### Journey 6 — Procurement / vendor assessment
```
Security → Engage → Contact (request docs)
```

---

## 6. Component Reuse Map

The following components appear on multiple pages and must be built as shared components in `components/common/` or `components/ui/`:

| Component | Used On | Notes |
|-----------|---------|-------|
| `CtaBanner` | Every page | Dark navy bg, headline + sub + primary button. Accepts props for copy. |
| `PageHero` | All non-home pages | Eyebrow pill + headline + sub. No visual panel. |
| `IconPill` | All pages | 48×48px, 14px radius, `--color-accent-soft` bg, cyan icon. Hover: fill cyan. |
| `StatsRow` | Home, About | 4 large-number tiles. Accepts data array as prop. |
| `SingleTestimonial` | Solutions pages | Quote, avatar placeholder, name, title, stars. |
| `FaqSection` | Engage, Pricing | Accordion. Accepts `{question, answer}[]` prop. |
| `SolutionHero` | 3 Solutions pages | Persona-specific hero with eyebrow + headline + sub + 2 CTAs. |

---

## 7. Link Convention Rules for Claude Code

1. All `href="*.html"` links in the source HTML must be converted to Next.js route paths per the mapping table in section 1.
2. `href="home.html"` → `href="/"` (including the nav logo)
3. Internal anchor links (`href="#section"`) stay as-is.
4. External links (`mailto:`, `https://`) stay as-is.
5. The `contact.html?subject=security` pattern becomes `/contact?subject=security` — read and pre-fill the subject `<select>` via `useSearchParams()` on the contact page.
6. No `<a>` tags to `.html` files should remain anywhere in the final build.

---

*Last updated: September 2026 — WorkRedesign website v1 prototype → Next.js production build*
