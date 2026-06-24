import type { CaseStudy } from "./types";

// "Cómo va mi asilo" (CVMA). Slug + hero image come from projects.ts
// (slug "como-va-mi-asilo", card image "/work/cvma/cvma.png").
export const cvma: CaseStudy = {
  slug: "como-va-mi-asilo",
  header: {
    pill: "Cómo va mi asilo",
    overline: "ASYLUM CASE TRACKER",
    title: "Simplifying asylum case tracking in Spain",
    intro:
      "A legal-tech tool that transformed Spain’s fragmented asylum resolution process into a searchable, user-friendly experience, while becoming one of LegalES’s strongest organic acquisition channels during its earliest growth stage.",
    tags: [
      "Product Strategy",
      "UX Design",
      "SEO Strategy",
      "Growth Design",
      "Legal Tech",
      "Real-world Impact",
    ],
    hero: {
      type: "image",
      src: "/work/cvma/cvma.png",
      alt: "Cómo va mi asilo asylum case-tracking page shown on a laptop.",
    },
  },
  sections: [
    {
      kind: "text",
      label: "Challenge",
      body: [
        "In 2023, Spain received over **163,000 asylum applications**, the highest number in its history. Venezuela, Colombia, and Peru accounted for nearly 79% of all cases.",
        "Despite the scale of the system, asylum seekers had no official portal to check the status of their case.",
        "The only available method was manually reviewing Spain’s Official State Gazette (BOE), where resolved asylum cases were periodically published as long PDF documents without searchable infrastructure.",
        "**Users had to:**",
        {
          type: "bullets",
          items: [
            "Locate the correct BOE publication",
            "Download large PDF files",
            "Search page by page for their NIE (ID)",
            "Interpret bureaucratic legal language on their own",
          ],
        },
        "For people already navigating legal uncertainty, the experience was stressful, inaccessible, and time-consuming.",
        "My co-founder and I had previously worked at different immigration law firms and had seen this problem firsthand.",
        "**We also recognized another challenge:**",
        "LegalES had launched only two months earlier and needed visibility, credibility, and organic traffic in a highly competitive legal market.",
        "We saw an opportunity to solve both problems simultaneously.",
      ],
    },
    {
      kind: "text",
      label: "My role",
      body: [
        "As Co-Founder and Product & UX Strategist at LegalES, I led:",
        {
          type: "bullets",
          items: [
            "Product strategy and UX direction",
            "Information architecture",
            "UX and interface design",
            "Website design and implementation",
            "SEO and organic acquisition strategy",
            "Conversion strategy for consultations and appointments",
            "Brand and visual system design",
            "Educational and launch content creation",
          ],
        },
        "I collaborated closely with the development lead, who implemented the BOE indexing infrastructure and search logic powering the lookup system.",
      ],
    },
    {
      kind: "text",
      label: "The Solution",
      body: [
        "We designed “Cómo va mi asilo” (How is my asylum case going?), a lightweight legal-tech tool that allowed users to check the status of their asylum resolution by simply entering their NIE.",
        "Instead of forcing users to manually navigate BOE publications, the system indexed publicly available resolution data and transformed it into a searchable lookup experience.",
        "**The tool could:**",
        {
          type: "bullets",
          items: [
            "Detect resolved asylum cases",
            "Identify approved or denied outcomes",
            "Display associated BOE references",
            "Link users directly to the original publication",
            "Reduce search friction from minutes to seconds",
          ],
        },
        "The interface was intentionally minimal, prioritizing clarity, accessibility, and fast task completion for users navigating stressful legal uncertainty.",
      ],
    },
    {
      kind: "media",
      layout: "pair",
      width: "full",
      items: [
        {
          type: "scroll-loop",
          src: "/work/cvma/boe.jpg",
          alt: "A long BOE PDF page listing thousands of asylum case IDs and their resolution statuses.",
          caption: "Before (Thousands of case IDs published in static PDFs)",
        },
        {
          type: "embed",
          src: "/embeds/cvma-solution.html",
          title: "Cómo va mi asilo — NIE lookup tool",
          caption:
            "After (Users could check their asylum status with a single NIE (ID) input)",
        },
      ],
    },
    {
      kind: "media",
      layout: "single",
      width: "full",
      fullBleed: true,
      items: [
        {
          type: "embed",
          src: "/embeds/cvma-approved.html",
          title: "Cómo va mi asilo — “Approved” result state",
        },
      ],
    },
    {
      kind: "media",
      layout: "pair",
      width: "medium",
      items: [
        {
          type: "image",
          src: "/work/cvma/denied.png",
          alt: "“Denied” result screen showing a DENEGADO status with NIE, case number, and the published BOE reference.",
          caption: '"Denied"',
        },
        {
          type: "image",
          src: "/work/cvma/pending.png",
          alt: "“Pending” result screen showing a PENDIENTE status indicating the case is still awaiting resolution.",
          caption: '"Pending"',
        },
      ],
    },
    {
      kind: "feature",
      heading: "Designing for Ambiguity and Trust",
      mediaSide: "left",
      width: "medium",
      media: {
        type: "image",
        src: "/work/cvma/not-published.png",
        alt: "“Not Published” result screen explaining the NIE does not yet appear in any published BOE.",
        caption:
          '"Not Published" - Your NIE does not yet appear in any BOE publication available to date',
      },
      body: [
        "One of the main UX challenges was designing around incomplete public information.",
        "Because the tool relied entirely on publicly available BOE records, it could only confirm asylum cases that had already been officially resolved and published by the Spanish administration.",
        "Initially, searches without a match displayed a simple: **“Pending”**",
        "However, after observing user behavior and testing edge cases, we realized this created misleading certainty.",
        "**A missing result could actually mean multiple different things:**",
        {
          type: "bullets",
          items: [
            "the application was still under review",
            "the resolution had not yet been published in the BOE",
            "the user was testing unrelated NIE numbers",
            "or the person was not an asylum applicant at all",
          ],
        },
        "To address this, the original “Pending” state was replaced with a more transparent neutral state: **“Not Published”**",
        "Instead of implying an official status, the redesigned experience clarified that the tool could only verify information already available in public BOE publications.",
        "Additional messaging and direct links to published BOE records were introduced to reinforce the informational nature of the platform and help users better understand the limits of the system.",
        "**The final result system differentiated clearly between:**",
        {
          type: "bullets",
          items: [
            "approved cases",
            "denied cases",
            "and cases with no published BOE record available yet",
          ],
        },
        "This redesign improved clarity, reduced false assumptions, and strengthened trust by prioritizing transparency over certainty.",
      ],
    },
    {
      kind: "feature",
      heading: "Product-Led Acquisition",
      mediaSide: "right",
      width: "medium",
      media: {
        type: "image",
        src: "/work/cvma/product-led-acquisition.png",
        alt: "Two laptops on a dark surface showing the Cómo va mi asilo tool and its educational blog article.",
      },
      body: [
        "Because LegalES was still in its earliest growth stage, the tool was intentionally designed not only as a public utility, but also as a discoverability and trust-building mechanism.",
        "Rather than relying on paid acquisition, we focused on solving a highly specific informational problem with strong existing search demand.",
        "To support discoverability, I created an educational blog article explaining how the tool worked and how users could use it to check whether their asylum resolution had appeared in the BOE.",
        "The article became one of LegalES’s first strong sources of organic traffic and gradually redirected users toward the dedicated lookup experience.",
        "**The tool page itself also incorporated:**",
        {
          type: "bullets",
          items: [
            "free consultation requests",
            "express appointment booking",
            "direct contact pathways",
          ],
        },
        "During the firm’s earliest stage, these features generated significant inbound demand and helped establish visibility and credibility among migrant communities.",
        "I also created educational launch content for LegalES’s social channels to support awareness and organic sharing.",
      ],
    },
    {
      kind: "text",
      label: "Outcomes & Reflections",
      body: [
        "This project reinforced the idea that accessibility is not only visual, it is systemic.",
        "By simplifying access to public legal information, we reduced friction and uncertainty for users navigating one of the most stressful administrative processes in Spain’s immigration system.",
        "Looking back at this project, the strongest opportunity would be to evolve “Cómo va mi asilo” from a single-purpose lookup tool into an independent immigration case-tracking platform.",
        "The system could expand beyond asylum resolutions and allow users to monitor different immigration procedures across multiple official sources:",
        {
          type: "bullets",
          items: [
            "BOE publications for asylum resolutions",
            "Spain’s immigration status portal for residency-related cases",
            "user-saved cases with periodic checks",
            "automated notifications when a status changes",
            "guidance on next steps depending on the result",
          ],
        },
        "In 2026, this type of workflow could be partially automated through scheduled checks, structured data extraction, and AI agents capable of monitoring public sources or user-authorized portals. The key design challenge would be balancing automation with privacy, consent, legal reliability, and clear communication of uncertainty.",
        "A future version could shift the product from a one-time lookup tool into a paid case-monitoring service that reduces anxiety by proactively notifying users instead of forcing them to repeatedly check fragmented government systems.",
      ],
    },
  ],
};
