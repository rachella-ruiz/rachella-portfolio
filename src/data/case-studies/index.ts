import type { CaseStudy } from "./types";

// The registry is the ONLY boundary where case content is loaded. Components
// and the /work/[slug] route go through this map — never importing an
// individual case file directly — so the content format stays swappable.
// Intentionally EMPTY for now: cases get registered in later commits.
export const caseStudies: Record<string, CaseStudy> = {};
