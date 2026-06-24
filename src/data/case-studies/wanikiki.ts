import type { CaseStudy } from "./types";

// Wanikiki. Slug + hero image come from projects.ts (slug "wanikiki", card image
// "/work/wanikiki/wanikiki.png").
export const wanikiki: CaseStudy = {
  slug: "wanikiki",
  header: {
    pill: "Wanikiki",
    overline: "REMITTANCE WEB PLATFORM",
    title: "Designing Financial Trust During Cuba’s Currency Crisis",
    intro:
      "A remittance platform designed during Cuba’s 2021 liquidity crisis to help families exchange money faster, more fairly, and outside institutional banking systems. Originally created to solve my own need to externalize savings before relocating from Cuba to Spain, the platform facilitated approximately $25k USD equivalent in exchanges over a three-month period during one of the country’s most unstable financial moments.",
    tags: [
      "UX Design",
      "Product Thinking",
      "Service Design",
      "Ethical Design",
      "Operational UX",
      "Real-world Impact",
    ],
    hero: {
      type: "image",
      src: "/work/wanikiki/wanikiki.png",
      alt: "A hand holding a smartphone showing the Wanikiki remittance app with transfer amounts.",
    },
  },
  sections: [
    {
      kind: "text",
      label: "Challenge",
      body: [
        "For decades, Cuba’s financial system had remained largely disconnected from the international economy:",
        {
          type: "bullets",
          items: [
            "Cuban bank cards only worked domestically,",
            "citizens could not freely open foreign bank accounts,",
            "and travelers could only leave the country with limited amounts of cash.",
          ],
        },
        "Despite these restrictions, people could still traditionally exchange Cuban pesos (CUP) for USD through state banks at the official rate:",
        "**1 USD ≈ 25 CUP.**",
        "But after the COVID-19 economic collapse, Cuban banks effectively ran out of foreign currency reserves. Citizens could no longer reliably purchase USD or EUR through official channels, while the informal exchange market rapidly inflated to nearly:",
        "**1 USD ≈ 50 CUP.**",
        "At the same time, traditional remittance systems like Western Union continued operating at the outdated official exchange rate (~25 CUP), causing Cuban families abroad to lose nearly half the real market value of the money they sent home.",
        "Recipients inside Cuba also faced:",
        {
          type: "bullets",
          items: [
            "long lines,",
            "transportation shortages,",
            "slow delivery processes,",
            "and limited office availability during a nationwide mobility crisis.",
          ],
        },
        "Meanwhile, I faced the opposite side of the same problem. As I prepared to move from Cuba to Spain for graduate school, I needed to:",
        {
          type: "bullets",
          items: [
            "convert my savings into foreign currency,",
            "move that money outside Cuba,",
            "and avoid the extremely inflated rates of the informal market.",
          ],
        },
        "I realized both problems could partially solve each other.",
      ],
    },
    {
      kind: "text",
      label: "My role",
      body: [
        "Wanikiki was a founder-led product that I designed and operated end-to-end.",
        "I:",
        {
          type: "bullets",
          items: [
            "identified the operational opportunity,",
            "designed the service model,",
            "designed the full UX and interface system,",
            "structured the UX flows and information architecture,",
            "coordinated logistics and delivery operations,",
            "managed customer communication and trust,",
            "handled distribution,",
            "and operated the system directly during its active period.",
          ],
        },
        "At the time, I was working as a designer at **Futurasit**, a Cuban software agency. Developers from the agency collaborated on building the live web platform under my product and UX direction.",
        "I also collaborated with a 3D designer for the visual illustrations used in the original website.",
      ],
    },
    {
      kind: "text",
      label: "The Solution",
      body: [
        "Instead of exchanging my savings directly through the black market at nearly:",
        "**1 USD ≈ 50 CUP,**",
        "I designed a lightweight remittance platform that connected:",
        {
          type: "bullets",
          items: [
            "Cuban families abroad who needed to send money into Cuba,",
            "with recipients who needed Cuban pesos (CUP) locally.",
          ],
        },
        "The system worked through a direct exchange model:",
        {
          type: "bullets",
          items: [
            "families abroad transferred USD or EUR through PayPal to an external account associated with the platform,",
            "and I delivered the equivalent value locally in CUP inside Cuba.",
          ],
        },
        "Wanikiki operated around:",
        "**1 USD ≈ 35 CUP**",
        "Positioned between:",
        {
          type: "bullets",
          items: [
            "the institutional rate (~25 CUP),",
            "and the black market (~50 CUP).",
          ],
        },
        "This created value for both sides simultaneously:",
        {
          type: "bullets",
          items: [
            "families abroad obtained significantly better rates than Western Union,",
            "recipients received money faster and more conveniently,",
            "and I was able to progressively externalize my own savings at a far more sustainable rate than the informal market offered directly.",
          ],
        },
      ],
    },
    {
      kind: "media",
      layout: "single",
      width: "full",
      items: [
        {
          type: "image",
          src: "/work/wanikiki/wanikiki-2021.jpg",
          alt: "A grid of the original 2021 Wanikiki product screens on a dark background.",
          caption: "The original product launched in 2021",
        },
      ],
    },
    {
      kind: "text",
      label: "The Live Product",
      body: [
        "The original platform operated as a lightweight remittance coordination website focused on:",
        {
          type: "bullets",
          items: ["simplicity,", "speed,", "and operational trust."],
        },
        "Users abroad could:",
        {
          type: "bullets",
          items: [
            "initiate transfers,",
            "select delivery methods,",
            "and track transaction status updates.",
          ],
        },
        "The system supported:",
        {
          type: "bullets",
          items: [
            "home delivery within Havana,",
            "and local Cuban bank transfers.",
          ],
        },
        "Most operations ended up using home delivery, which quickly became one of the platform’s strongest trust signals.",
        "The original experience notified users when:",
        {
          type: "bullets",
          items: [
            "the process started,",
            "the transfer entered delivery,",
            "and the transaction was completed.",
          ],
        },
        "At this stage, the system was designed primarily around the sender abroad, who had access to the platform and transaction tracking. But operationally, a different behavior emerged.",
      ],
    },
    {
      kind: "text",
      label: "First Operational Insights",
      body: [
        "After operating the platform and completing the first deliveries myself, a more important insight emerged.",
        "The sender abroad initiated the transfer, but the recipient inside Cuba often became the focal point of the experience. Recipients frequently:",
        {
          type: "bullets",
          items: [
            "requested delivery updates,",
            "changed availability times,",
            "modified delivery addresses,",
            "or contacted support directly during the process.",
          ],
        },
        "The original platform already included transaction tracking and basic operational tooling.",
        "However, real-world usage exposed additional operational needs around:",
        {
          type: "bullets",
          items: [
            "delivery coordination,",
            "scheduling flexibility,",
            "and recipient communication during the process.",
          ],
        },
        "Three operational patterns quickly emerged:",
        {
          type: "bullets",
          items: [
            "The most engaged participant in the process had the least visibility into it.",
            "Most support requests were coordination requests rather than payment issues.",
            "Trust depended on keeping multiple actors aligned around the same delivery status.",
          ],
        },
        "As the operator, I was manually handling much of that coordination outside the product.",
        "To better understand where those responsibilities lived, I mapped the complete operational journey behind each transfer.",
        "The resulting models reframed Wanikiki from a remittance website into a coordination system involving multiple actors, communication channels, and operational responsibilities.",
        "These models became the foundation for the redesign that followed.",
      ],
    },
    {
      kind: "media",
      layout: "single",
      width: "medium",
      items: [
        {
          type: "image",
          src: "/work/wanikiki/wanikiki-actors-channels.jpg",
          alt: "Diagram mapping Wanikiki’s actors — Sender, Operator, Courier, and Recipient — and the communication channels linking them.",
        },
      ],
    },
    {
      kind: "media",
      layout: "single",
      width: "medium",
      items: [
        {
          type: "image",
          src: "/work/wanikiki/wanikiki-cross-actor-journey.jpg",
          alt: "Diagram of the cross-actor journey for a single transfer across the four actors: Sender, Operator, Courier, and Recipient.",
        },
      ],
    },
    {
      kind: "media",
      layout: "single",
      width: "medium",
      items: [
        {
          type: "image",
          src: "/work/wanikiki/wanikiki-shipment-states.jpg",
          alt: "Diagram of shipment states — Created, Assigned, On the way, Delivered, and Failed — showing who triggers each transition.",
        },
      ],
    },
    {
      kind: "media",
      layout: "single",
      width: "full",
      items: [
        {
          type: "embed",
          src: "/embeds/wanikiki-design-system.html",
          title: 'Wanikiki — design system ("Wanikiki as a system" overview)',
          ratio: "3/4",
        },
      ],
    },
    {
      kind: "text",
      label: "Mobile Redesign",
      body: [
        "The redesign explored what the service could look like if the operational coordination that originally depended on a single person became part of the product itself.",
        "Rather than centering the experience around the sender alone, the system was restructured around four actors: Sender, Recipient, Courier, and Operator.",
        "Each actor received dedicated permissions, visibility, communication channels, and responsibilities throughout the delivery lifecycle.",
        "The redesign introduced:",
        {
          type: "bullets",
          items: [
            "shared real-time delivery states across all participants,",
            "role-based operational workflows,",
            "integrated communication linked to each transfer,",
            "delivery scheduling and rescheduling,",
            "recipient-facing tracking without account creation,",
            "and automated notifications triggered by operational events.",
          ],
        },
        "A key design decision was treating the recipient as a first-class participant despite never requiring an account. Recipients could receive SMS updates, access a public tracking link, communicate during delivery, confirm details, and follow the transfer from any device with a browser.",
        "The redesign also formalized the operational model behind the service:",
        {
          type: "bullets",
          items: [
            "courier route blocks,",
            "cash-float management,",
            "assignment workflows,",
            "delivery capacity planning,",
            "exception handling,",
            "and daily operational reconciliation.",
          ],
        },
        "By bringing communication, coordination, and operational visibility into the product itself, the redesign transformed Wanikiki from a remittance website into a shared trust and delivery system.",
      ],
    },
    {
      kind: "media",
      layout: "single",
      width: "full",
      items: [
        {
          type: "image",
          src: "/work/wanikiki/wanikiki-screens.png",
          alt: "An isometric arrangement of the redesigned Wanikiki mobile app screens.",
        },
      ],
    },
    {
      kind: "text",
      label: "Outcomes & Reflections",
      body: [
        "Wanikiki operated publicly for approximately three months, the time required for me to successfully externalize my savings before relocating to Spain.",
        "During that period, the platform facilitated approximately:",
        {
          type: "bullets",
          items: [
            "$25k USD equivalent in exchanges,",
            "through dozens of successful operations,",
            "including several high-value transactions.",
          ],
        },
        "The system achieved:",
        {
          type: "bullets",
          items: [
            "zero failed deliveries,",
            "strong referral-driven growth,",
            "and high user trust despite operating entirely outside institutional infrastructure.",
          ],
        },
        "Although the original platform was intentionally lightweight, operating it exposed a much larger design problem than currency exchange alone.",
        "What began as a remittance service revealed itself as a coordination system involving trust, communication, logistics, and operational visibility across multiple actors.",
        "The redesign documented in this case study represents how I would evolve that experience today: transforming operational knowledge gained in the field into a more scalable service model.",
        "Looking back, Wanikiki emerged during the earliest stage of what would become a much deeper monetary collapse in Cuba.",
        "At the time, the informal exchange rate had already risen to nearly 1 USD ≈ 50 CUP (double the official institutional rate). In 2026, that same informal rate exceeds 500 CUP per USD. What initially felt like a temporary workaround ultimately reflected the beginning of a much larger systemic breakdown.",
        "More importantly, it changed how I think about product design. Not simply as interface creation, but as the design of trust, coordination, incentives, communication, and operational systems under real-world constraints.",
      ],
    },
  ],
};
