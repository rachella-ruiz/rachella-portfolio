import type { CaseStudy } from "./types";
import { cvma } from "./cvma";
import { fynce } from "./fynce";
import { wanikiki } from "./wanikiki";

// The registry is the ONLY boundary where case content is loaded. Components
// and the /work/[slug] route go through this map — never importing an
// individual case file directly — so the content format stays swappable.
export const caseStudies: Record<string, CaseStudy> = {
  fynce,
  "como-va-mi-asilo": cvma,
  wanikiki,
};
