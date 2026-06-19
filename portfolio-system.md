# AI-Native Portfolio System — Summary & Architecture

> Living document. Summarizes the system we're building and serves as the seed
> for the repo's future `CLAUDE.md`.
> **Status:** Phase 1 in progress (technical base set up). Last updated: June 2026.

## The system in one sentence

A workspace where design work — research, decisions, prototypes — flows into a
structured **project memory**, and that memory becomes published case studies in the
portfolio. Guiding principle: **the boring and repetitive gets automated; the
creative stays in human hands.**

## Current state

Technical base complete:

- Design tokens captured from Webflow and cleaned up (`tokens.css`).
- Next.js + Tailwind v4 project, self-hosted IBM Plex fonts, dark theme.
- GitHub repo + automatic Vercel deploy (every push publishes itself).

Phase 1 remaining: rebuild the actual pages (home, about, case template) and migrate
the 3 case studies.

## The two phases

### Phase 1 — The portfolio
Rebuild the portfolio in Next.js with its own design system and a **reusable
case-study template**. The base and pipeline are ready; the pages remain.

### Phase 2 — Memory + agents
The system that documents projects (Nuxera, Obsara) and assembles case studies almost
on its own. Built **after** a solid memory exists.

## The flow

```
Claude Chat (research, decisions)  ┐
Claude Design (prototypes)         ┘ → project memory (markdown, curated by you)
                                       → Claude Code drafts the case study
                                       → case .mdx
                                       → published portfolio (Vercel)
```

The inputs (chat, Design) you curate by hand; from there on, Claude Code automates it.

## Target repo structure

```
rachella-portfolio/
├── CLAUDE.md                 # instructions that turn Claude Code into the "agents"
├── src/app/                  # pages (home, about, work/[slug])
│   ├── tokens.css            # design system (source of truth)
│   └── globals.css           # maps tokens to the Tailwind theme
├── content/case-studies/     # PUBLISHED cases (.mdx)
│   └── wanikiki.mdx
└── projects/                 # PRIVATE project memory (not published)
    ├── nuxera/
    │   ├── 00-overview.md
    │   ├── 01-research.md
    │   ├── 02-problem.md
    │   ├── 03-flows.md
    │   ├── 04-decisions.md
    │   ├── 05-iterations.md
    │   ├── 06-prototypes.md   # links to Claude Design / Figma
    │   └── case-study-draft.md
    └── obsara/ ...
```

## The agents — in detail

**What they are (and aren't):** not autonomous services that watch everything on
their own. They're **specialized Claude Code configurations** (a `CLAUDE.md` +
commands or subagents) that act on the repo *when invoked*. They handle the
structural, the repetitive, and consistency — **never design judgment or the
narrative.** The human stays at the center of the process.

### 1. Memory agent — the librarian
- **Does:** files the decisions and progress (that you hand it after a session here
  or in Design) into the right markdown under `projects/[project]/`, with consistent
  formatting and dates, and links the prototypes. Scaffolds new projects.
- **Doesn't:** interpret or invent; it captures and organizes what it receives.
- **How it's used:** commands like `/new-project nuxera` or `/log-decision`.

### 2. Design System agent — the consistency guardian
- **Does:** keeps tokens and components in sync; propagates token changes; flags or
  scaffolds missing components; audits that everything uses the system coherently.
- **Doesn't:** decide how something looks; it executes and watches consistency.
- **How it's used:** when changing tokens, or when reviewing a case before publishing.

### 3. Case Study agent — the assembler (not the writer)
- **Does:** builds a *first draft* of the case from the project memory (so you don't
  start from a blank page), imposes the template structure, and places the polished
  text into the published `.mdx`.
- **Doesn't:** act as the master writer. Voice and narrative are refined with Claude
  Chat; the agent builds the skeleton and places it.
- **How it's used:** `/draft-case nuxera` → generates draft → refined in chat → placed
  into `content/case-studies/nuxera.mdx` → push → published.

## A project's lifecycle

While a project (Nuxera, Obsara) is being designed, its memory folder gets fed with
decisions and progress. When the project matures, its draft "graduates" to a
published case. That way the case study is **nearly ready by the time the project
wraps.**

## Guiding principle

Build a solid memory first; automate only afterward. The structural and
inconsistency-prone parts (capture, organize, sync, publish) are done by the agents;
judgment and narrative stay with the designer.
