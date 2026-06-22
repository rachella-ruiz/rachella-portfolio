PROJECT STATE — AI-Native Portfolio (handoff)

== THE WHY / VISION ==
Not just redoing a portfolio. It's building a system where design work (research, decisions,
prototypes) flows into a structured project MEMORY, and that memory turns almost on its own into
published case studies. Goal: organize all case-study production and AUTOMATE the documentation of
future cases with a case-study agent. Guiding principle: the repetitive/structural/consistency work
gets automated; the creative work (narrative, design judgment) stays in human hands. Full
architecture in portfolio-system.md (seed of the repo's future CLAUDE.md).

== PHASE 1 — THE PORTFOLIO (current focus) ==
Rebuild the Webflow portfolio (rachellaruiz.webflow.io) in Next.js by hand with Claude Code, with a
custom design system and a reusable case-study template.

Stack: Next.js 16 + Tailwind v4 + TypeScript. Repo github.com/rachella-ruiz/rachella-portfolio.
Deploy on Vercel (prod rachella-portfolio.vercel.app, auto-deploy on push). tokens.css = design
system; guide at /styleguide. Smooth scroll with Lenis. Animations with Framer Motion + GSAP.
Motion principle: across all pages, elements animate in on scroll (fade-in + subtle rise as they
enter the viewport), reusing the shared entrance animation — default for every new section.

Assets in /public: logo.svg, photo.jpg, arrow.svg, globe.svg, globe.json, call.svg, email.svg,
linkedin.svg, IG.svg, menu-link.avif, menu-link2.avif, wanikiki.png, cvma.png, fynce.png,
cta-img-1.avif … cta-img-5.avif (plus framework defaults next.svg, vercel.svg, file.svg).

Flow: Claude (chat) refines specs/prompts from screenshots → Claude Code builds locally →
commit+push → Vercel → Claude reviews prod by URL (structure; hovers/animations confirmed by
Rachella). Working language English. Max plan.

BUILT SO FAR:
- Layout: navbar (frosted-glass background + glass hairline border; active/current-page navlink
  state), hamburger menu overlay, footer, progressive blur.
- Hero: two blurred gradient orbs (warm 90deg #dfc35f→#ca423f; cool 78deg #06033d→#483de1; ~55%
  width, 80px blur, overlay blend, 15–25s keyframes); globe + "USA based | Eastern Time"; h1 "Hey
  there! I'm Rachella, a Product Designer focused on helping people navigate complex systems under
  uncertainty"; Marquee "AVAILABLE FOR REMOTE ROLES"; ContactCard (photo.jpg + ping dot; expands
  UPWARD on hover/tap to reveal email rachellaruiz@gmail.com + "Schedule a call ↗", photo pinned to
  the baseline at its closed height, 0.38s out-cubic crossfade, glass border, inner shadow removed);
  full hero content fades in on load.
- Selected Work: now a REUSABLE <SelectedWork showViewAll> component. Home renders it WITH the
  "View all" PrimaryButton; the future /work page will render it with showViewAll={false}. Sticky
  left column (sticky top 6rem) + scroll-linked card animation (Move/Rotate/Scale) + "VIEW WORK"
  cursor-follow hover + bottom-left "• name" glass pill + landscape 16/9 cards. Heading "Selected" /
  "Work." with a colored period span (single full-width line at 2.5rem on mobile). Left-column
  scroll-into-view entrance. Data-driven src/data/projects.ts (Wanikiki, Cómo va mi asilo, Fynce) →
  /work/[slug].

REMAINING (in order):
- Connect CTA: "Let's connect" + GSAP image mouse-trail following the cursor (separate trail set
  src/data/trail-images.ts → cta-img-1…5.avif) + marquee "LET'S WORK TOGETHER –" + "Send an email" +
  "Schedule a call ↗". (Schedule-a-call link is a placeholder href="#".)
- /work page: renders <SelectedWork showViewAll={false} /> so "View all" and the Work navlink
  resolve to a real page (currently 404).
- About page: gallery = own draggable horizontal marquee.
- Reusable case-study template + 3 cases (Wanikiki, CVMA, Fynce).

Open placeholders: LinkedIn URL and phone number in the portfolio; the "Schedule a call" link.

== PHASE 2 — MEMORY + AGENTS (after Phase 1) ==
The system that documents projects and assembles the cases almost on their own. Built once there's
solid memory.

Flow: Claude Chat (research/decisions) + Claude Design (prototypes) → curated markdown memory in
projects/[project]/ → Claude Code assembles a draft → case .mdx → Vercel.

Target repo: CLAUDE.md (configures the "agents"); src/app/ (pages); content/case-studies/ (published
cases .mdx); projects/[project]/ (private memory: 00-overview, 01-research, 02-problem, 03-flows,
04-decisions, 05-iterations, 06-prototypes, case-study-draft).

The 3 agents (= Claude Code configs, NOT autonomous services; they act when invoked; they handle the
structural work, never judgment or narrative):
1. Memory (the librarian): files decisions/progress into the right markdown with consistent
   format/date, links prototypes, scaffolds new projects. Commands: /new-project, /log-decision.
2. Design System (consistency guardian): syncs tokens/components, propagates changes, audits for
   coherent usage. Doesn't decide aesthetics.
3. Case Study (assembler, NOT writer): builds the first draft from the memory, imposes the template,
   places the already-polished text into the .mdx. Voice/narrative are refined in Claude Chat.
   Command: /draft-case.

Cycle: while a project is being designed, its memory folder gets fed; as it matures, the draft
"graduates" into a published case → the case is nearly ready by the time the project ends.

== ORGANIZATION IN CLAUDE ==
A single "Portfolio" project as the hub (one repo, one design system). Per-case isolation lives in
the repo files (projects/), not in separate chat projects.

== WORKING DYNAMIC ==
Rachella is a product designer (not a developer) and brings the vision, direction, and design
judgment, plus screenshots and references. Claude handles the technical structure, the plan, and the
sequencing, and guides her step by step, proactively: breaks the work into clear steps, says what's
next, writes the prompts for Claude Code, verifies results, and keeps the overall plan on track —
without assuming she knows the technical path. Claude explains in accessible terms, flags what's
coming, and pressure-tests decisions. Rachella decides on design and vision; Claude proposes,
structures, and executes the technical orchestration.

== RULES ==
Everything in English — conversation, Claude Code prompts, deliverables, code, and docs. Rachella may
sometimes write in Spanish; Claude keeps replying in English unless she says otherwise.