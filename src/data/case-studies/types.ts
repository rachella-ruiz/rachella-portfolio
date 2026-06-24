// Canonical contract for case studies. This is the stable interface a future
// content-automation tool will target, so EVERYTHING here must be plain and
// JSON-serializable: only strings, numbers, booleans, arrays and plain objects.
// NO JSX, NO functions, NO React nodes inside case data.
// Rich text inside body content uses lightweight markdown — specifically
// **bold** — converted to <strong> at render time (see RichText).

// --- media ---
export interface ImageMedia {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
}
export interface EmbedMedia {
  type: "embed";
  src: string;
  title: string;
  caption?: string;
  ratio?: string; // default "16 / 9"
}
export interface ScrollLoopMedia {
  type: "scroll-loop";
  src: string;
  alt: string;
  caption?: string;
  durationSec?: number; // default 20
}
export type MediaItem = ImageMedia | EmbedMedia | ScrollLoopMedia;

// --- body content (used by text + feature sections) ---
export interface BulletList {
  type: "bullets";
  items: string[]; // items may contain **bold**
}
export type BodyItem = string | BulletList; // a bare string is a paragraph; may contain **bold**

// --- sections ---
export interface TextSection {
  kind: "text";
  label: string; // left 25% column, e.g. "Challenge"
  heading?: string; // optional custom heading (reserved; unused by current cases)
  columns?: 1 | 2; // desktop body column count; default 2
  body: BodyItem[]; // paragraphs and/or bullet lists, in order
}

export interface ProcessStep {
  number: string;
  title: string;
  bullets: string[];
}
export interface ProcessSection {
  kind: "process";
  overline: string; // e.g. "LEAN UX"
  heading: string; // e.g. "Design Process"
  steps: ProcessStep[];
}

export interface MediaSection {
  kind: "media";
  layout: "single" | "pair" | "grid";
  fullBleed?: boolean; // default false
  caption?: string; // optional band-level caption (per-item captions live on MediaItem)
  items: MediaItem[];
}

export interface FeatureSection {
  kind: "feature";
  heading: string; // e.g. "Designing for Ambiguity and Trust"
  body: BodyItem[]; // paragraphs + bullet lists, may contain **bold**
  media: MediaItem; // a single media item beside the text
  mediaSide?: "left" | "right"; // which side the media sits on (desktop); default "right"
}

export type CaseSection =
  | TextSection
  | ProcessSection
  | MediaSection
  | FeatureSection;

export interface CaseStudy {
  slug: string;
  header: {
    pill: string;
    overline: string;
    title: string;
    intro: string;
    tags: string[];
    hero: MediaItem;
  };
  sections: CaseSection[];
  // NOTE: no nextSlug field — next case is derived from projects.ts array order
  // (see NextCase).
}
