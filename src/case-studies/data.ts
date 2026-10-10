export type CaseData = {
  slug: string
  kicker: string
  title: string
  intro: string
  meta: [string, string][]
  metrics: [string, string][]
  challengeTitle: string
  challenge: string[]
  solutionTitle: string
  solutionIntro: string
  solution: [string, string][]
  flowTitle?: string
  flowIntro?: string
  flow?: [string, string][]
  compare?: { heads: [string, string, string]; rows: [string, string, string][] }
  growth?: {
    title: string
    intro: string
    periods: [string, string]
    rows: [string, string, string][]
    seoTitle: string
    seoIntro: string
    keywords: string[]
    wins: [string, string][]
    note: string
  }
  ai?: {
    kicker: string
    title: string
    big: string
    bigLabel: string
    surfaces: string
    caption: string
    pages: [string, number][]
    scores: [string, string, string, string?][]
  }
  resultsTitle: string
  results: string[]
  closing: string
}

export const NFC: CaseData = {
  slug: "nfc-card",
  kicker: "Product thinking · Physical + digital",
  title: "Tap to Connect: an in-house NFC business card system",
  intro:
    "A 650-person rollout that cut per-card cost by about 98% by moving design, NFC integration and hosting in-house.",
  meta: [
    ["Role", "Concept · Card design · NFC integration · Profile UI"],
    ["Context", "Trade shows and food exhibitions"],
    ["Scope", "650 employees equipped"],
    ["Outcome", "Self-owned, scalable card system"],
  ],
  metrics: [
    ["650", "employees equipped"],
    ["AED 5", "cost per card, down from AED 250"],
    ["~98%", "estimated cost reduction"],
    ["AED 159,250", "estimated total savings"],
  ],
  challengeTitle: "Networking at exhibitions needed to be faster, cheaper and always current",
  challenge: [
    "Printed cards created recurring print costs and waste, especially with frequent turnover and role changes.",
    "Trade shows and food exhibitions are where fast, memorable contact-sharing directly supports business development.",
    "An outsourced NFC vendor was evaluated, but at AED 250 per card, equipping 650 people would have cost AED 162,500.",
    "Outsourcing would also mean handing contact data and card design control to a third-party platform and servers.",
  ],
  solutionTitle: "Instead of accepting the quote, I built the system",
  solutionIntro: "A self-serve NFC card system, designed and engineered from the ground up.",
  solution: [
    ["Custom card design", "Created internally to reflect the brand, rather than squeezed into a vendor template."],
    ["NFC integration", "Tap-to-share contact functionality engineered in-house and embedded in the card."],
    ["Owned digital profiles", "Contact profiles hosted on our own infrastructure, with no recurring platform fees."],
    ["Production at AED 5", "Physical card production brought down to an all-in cost of roughly AED 5 per card."],
  ],
  compare: {
    heads: ["Metric", "Outsourced vendor", "In-house solution"],
    rows: [
      ["Cost per card", "AED 250", "AED 5"],
      ["Total cost (650 cards)", "AED 162,500", "AED 3,250"],
      ["Design and production", "Vendor-controlled", "Fully custom, in-house"],
      ["Data hosting", "Third-party servers", "Company-owned servers"],
      ["Estimated savings", "—", "AED 159,250 (~98%)"],
    ],
  },
  resultsTitle: "Business benefits",
  results: [
    "Every employee can share verified, up-to-date contact details with a single tap. No printing, no running out of cards mid-exhibition.",
    "Contact information stays current: updates are pushed centrally instead of requiring a reprint.",
    "Full ownership of card design, data and hosting, with no recurring third-party fees.",
    "A repeatable model that extends to future hires or new batches at the same low unit cost.",
  ],
  closing:
    "Bringing design, NFC integration and hosting in-house replaced an expensive, vendor-dependent process with a self-owned digital solution, and gave full control over branding and contact data.",
}

export const LEADS: CaseData = {
  slug: "lead-routing",
  kicker: "UX · Lead generation · Conversion",
  title: "Turning one flooded inbox into a working sales channel",
  intro:
    "A UAE foodservice and HORECA distributor sent every enquiry to one shared inbox. I rebuilt the intake so a sales enquiry reaches the right desk the moment it is submitted.",
  meta: [
    ["Role", "UX strategy · Form design · Routing logic"],
    ["Industry", "Foodservice distribution, B2B"],
    ["Focus", "Contact page and lead qualification"],
    ["Outcome", "Dedicated sales inboxes, pre-qualified leads"],
  ],
  metrics: [
    ["$4.61M", "in qualified sales enquiries within 6 months"],
    ["5", "clearly named enquiry intents"],
    ["2", "dedicated sales inboxes"],
    ["Real time", "delivery to the right desk"],
  ],
  challengeTitle: "Every enquiry looked the same to the inbox",
  challenge: [
    "One form fed one shared address. A HORECA buyer asking for a bulk quote landed in the same queue as a CV, a supplier pitch or a complaint.",
    "The sales team had to read past HR and supplier mail to find real opportunities.",
    "Whoever checked the inbox first decided what got answered, not urgency or fit.",
    "Genuine buying enquiries went stale behind unrelated mail, with nothing to distinguish a serious buyer.",
  ],
  solutionTitle: "Give every enquiry a front door of its own",
  solutionIntro:
    "The contact page was split into five plainly named intents. Each asks only what that enquiry needs and sends it straight to the team that owns it.",
  solution: [
    ["General Enquiry", "Open-ended questions, routed to the front-of-house team."],
    ["Get a Sales Quote", "Branches into UAE Food Service or Export Sales before submission. The highest-value path."],
    ["Procurement", "Sourcing and purchasing queries, routed to the procurement desk."],
    ["Job Request", "Applications and career enquiries, routed to HR and out of the sales inbox."],
    ["Feedback", "Comments on orders or service, routed to customer service."],
  ],
  flowTitle: "How a sales enquiry flows now",
  flowIntro: "The path built for the highest-value enquiry type, the one that used to get lost most often.",
  flow: [
    ["Visitor selects Get a Sales Quote", "One of five clearly labelled options. No guessing which form to use."],
    ["Chooses UAE Food Service or Export Sales", "The buyer self-identifies: domestic HORECA supply or international export."],
    ["The form adjusts; the buyer submits", "Only fields relevant to that sales type appear, so the enquiry carries its context."],
    ["Delivered to the right desk, in real time", "Each sales type has its own inbox. No detour through the shared address."],
  ],
  resultsTitle: "Six months, one clean channel",
  results: [
    "Sales enquiries reach UAE Food Service and Export Sales directly and instantly.",
    "Every enquiry arrives pre-qualified by intent, so the team quotes rather than sorts.",
    "Job requests, supplier pitches and feedback are no longer the sales team's problem to filter.",
    "A clear, traceable record of which enquiries are real sales opportunities.",
  ],
  closing: "The fix was not a bigger sales team. It was making sure every enquiry said what it was, the moment it arrived.",
}

export const SEO: CaseData = {
  slug: "website-seo",
  kicker: "Web redesign · SEO · AI search",
  title: "Relaunching a B2B website so buyers, and AI, can find it",
  intro:
    "A UAE foodservice and HORECA distributor needed its website to work harder. I redesigned it, relaunched it in September 2024, and tuned the content for Google and for AI search.",
  meta: [
    ["Role", "Website\u00a0\u00a0UI/UX · Content structure · SEO · GEO"],
    ["Industry", "Foodservice distribution, B2B"],
    ["Launch", "September 2024"],
    ["Measured with", "Google Analytics 4"],
  ],
  metrics: [
    ["98K", "active users after the revamp, up from 57K"],
    ["28/43", "keywords ranking on page one position #1 of Google"],
    ["#1", "in Google AI Overview for a core search"],
    ["+48%", "UAE users, 29K to 43K"],
  ],
  challengeTitle: "A capable company that buyers could not easily find",
  challenge: [
    "The old site was dated and did not speak the way foodservice buyers search, by category, city and supplier type.",
    "Most visitors already knew the name. Little traffic came from people discovering the company through search.",
    "Content was not structured for the way AI assistants and AI Overviews now summarise suppliers.",
    "Without a baseline and a launch date, there was no clean way to prove whether the redesign worked.",
  ],
  solutionTitle: "Redesign for people, structure for search",
  solutionIntro: "One relaunch, built around how a buyer looks for a supplier.",
  solution: [
    ["Buyer-led structure", "Pages organised by category and service so each one answers a real search."],
    ["Search-ready content", "Titles, headings and copy written around the terms UAE buyers actually type."],
    ["AI search readiness", "Clear, quotable answers that ChatGPT, Copilot and AI Overviews can understand and cite."],
    ["Measured launch", "A fixed relaunch date and GA4 baseline, so before and after could be compared honestly."],
  ],
  growth: {
    title: "What changed after the relaunch",
    intro:
      "Google Analytics for the seven months before the revamp, against the period after it.",
    periods: ["Before · Jan–Jul 2024", "After · Aug 2024–Jun 2025"],
    rows: [
      ["Active users", "57K", "89K"],
      ["New users", "55K", "88K"],
      ["Sessions", "83K", "132K"],
      ["Page views", "171K", "253K"],
      ["Top page views", "66K", "93K"],
      ["Users from the UAE", "29K", "43K"],
    ],
    seoTitle: "Found on page one, and quoted by AI",
    seoIntro:
      "Structured, intent-led content moved the site onto the first page of Google for the searches a foodservice buyer actually types, and into the answers AI tools give.",
    keywords: [
      "Food supplier in UAE",
      "Foodservice companies UAE",
      "Food distributors UAE",
      "Food trading companies in Dubai",
      "Pastry and bakery suppliers",
      "Meat and poultry distributors",
      "Seafood suppliers in UAE",
      "Disposables and packaging suppliers",
      "Hospitality and service industry supplies",
    ],
    wins: [
      ["Page one on Google", "Fourteen category and service keywords ranking on the first page."],
      ["First in AI Overview", "Listed first for \"Foodservice companies UAE\" in Google's AI Overview."],
      ["Generative search ready", "Content written to be understood by ChatGPT, Copilot and AI Overviews, not just crawlers."],
      ["Stronger brand recall", "A large gain in direct traffic, with visitors arriving by name, plus more international reach."],
    ],
    note: "Periods differ in length (7 months before, about 10.5 after), so totals are indicative. Source: Google Analytics 4.",
  },
  ai: {
    kicker: "Key achievement · August 2026",
    title: "Generative AI search visibility",
    big: "18.8K",
    bigLabel: "AI-surface impressions, Jun–Aug 2026 (~205 a day)",
    surfaces: "Google AI Overviews & AI Mode",
    caption:
      "The website appeared or was surfaced 18,800 times across Google's generative AI search experiences between 1 June and 31 August 2026. More AI impressions means more visibility in the new AI-driven search journey.",
    pages: [
      ["Homepage", 9485],
      ["The Company", 1222],
      ["Contact Us", 926],
      ["Fresh range", 859],
    ],
    scores: [
      ["AI visibility score", "24", "Highest in category"],
      ["Referring domains", "413", "#1 in category", "#1"],
      ["Backlinks", "21.8K", "#1 in category", "#1"],
    ],
  },
  resultsTitle: "Growth, and room for more",
  results: [
    "Users, sessions and page views all grew after the relaunch, with the UAE still the largest audience.",
    "Direct traffic grew sharply, a sign of stronger brand recall.",
    "New international audiences appeared, including the United States, Netherlands and Ireland.",
    "Organic search is the biggest remaining opportunity, and the SEO groundwork is now in place.",
  ],
  closing: "A redesign is only finished when you can show what it changed. This one now has a baseline, a launch date and a clear next lever: organic search.",
}
