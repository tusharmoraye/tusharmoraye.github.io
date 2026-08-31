export const site = {
  name: "Tushar Moraye",
  role: "AI Product Engineer",
  domain: "https://tusharmoraye.com",
  email: "tusharmoraye@gmail.com",
  phone: "+91 7507142151",
  location: "Mumbai, India",
  linkedin: "https://www.linkedin.com/in/tusharmoraye/",
  github: "https://github.com/tusharmoraye",
  title: "Tushar Moraye | AI Product Engineer",
  description:
    "AI product engineer with 8+ years shipping production surfaces for AI and ML systems. Conversational AI on Vercel ai-sdk, MCP tool calls, and high traffic web platforms.",
  /* Set this to a real form endpoint (Formspree, Basin, a Worker) before launch.
     Empty string keeps the form in its explicit unavailable state. */
  contactEndpoint: "",
};

export const services = [
  {
    key: "conversational",
    icon: "ph:chats-circle-bold",
    title: "Conversational AI surfaces",
    body:
      "Chat and copilot interfaces on Vercel ai-sdk, wired to MCP servers with human in the loop tool calls, streaming state, and interrupt handling.",
    points: ["Vercel ai-sdk", "MCP servers", "Human in the loop", "Agentic widgets"],
  },
  {
    key: "eval",
    icon: "ph:check-square-offset-bold",
    title: "Evaluation and reliability",
    body:
      "LLM evaluation harnesses that gate releases on response structure and tool call correctness, so an AI feature ships on evidence rather than vibes.",
    points: ["Empirical E2E suites", "Tool call assertions", "Regression gating", "Failure triage"],
  },
  {
    key: "platform",
    icon: "ph:gauge-bold",
    title: "Product platform and performance",
    body:
      "The unglamorous half. Web performance budgets, event driven backends, and CI that stays green while the team ships every day.",
    points: ["INP and LCP work", "Kafka and Redis", "Kubernetes", "Frontend CI"],
  },
  {
    key: "ml-web",
    icon: "ph:cpu-bold",
    title: "ML in the browser",
    body:
      "Shipping model inference where the user already is. WebAssembly runtimes, JS SDKs, and commerce integrations that survive real retail traffic.",
    points: ["WebAssembly inference", "Embeddable JS SDKs", "Shopify apps", "AR try on"],
  },
];

export const work = [
  {
    key: "copilot",
    link: "https://atlan.com/ai/",
    linkLabel: "atlan.com/ai",
    company: "Atlan",
    title: "Conversational AI for a data governance platform",
    year: "2024 to now",
    body:
      "Replaced a bespoke chat implementation with a plug and play widget architecture on Vercel ai-sdk. MCP support and human in the loop tool calls made new AI capabilities land without core rewrites.",
    stat: "80+",
    statLabel: "LLM evaluation tests in the release gate",
    tags: ["Vercel ai-sdk", "MCP", "React", "TypeScript"],
    img: "/img/copilot",
    alt: "Rows of cabled server racks, standing in for the data platform the assistant reasons over",
  },
  {
    key: "tira",
    link: "https://www.tirabeauty.com/",
    linkLabel: "tirabeauty.com",
    company: "Reliance Retail",
    title: "Tira, a beauty commerce platform launch",
    year: "2022 to 2024",
    body:
      "Led engineering for the storefront and the ONDC vertical. Event driven services on Kubernetes with Redis and Kafka, and a sustained performance program on the web tier.",
    stat: "20M",
    statLabel: "Visits served",
    tags: ["Kubernetes", "Kafka", "Vue.js", "Web performance"],
    img: "/img/tira",
    alt: "Interior of a retail store, standing in for the beauty commerce platform",
  },
  {
    key: "erasebg",
    link: "https://www.erase.bg",
    linkLabel: "erase.bg",
    company: "Fynd",
    title: "EraseBG, ML background removal at consumer scale",
    year: "2020 to 2023",
    body:
      "A model behind a product people actually use daily. The work was queueing, caching, and image pipeline economics as much as it was inference quality.",
    stat: "100K",
    statLabel: "Daily active users",
    tags: ["Python", "Inference pipeline", "Redis", "Node.js"],
    img: "/img/erasebg",
    alt: "A person photographed against a plain open sky, the kind of subject and background separation the model performs",
  },
  {
    key: "glamar",
    link: "https://www.glamar.io",
    linkLabel: "glamar.io",
    company: "Fynd",
    title: "GlamAR, virtual try on in the browser",
    year: "2021 to 2024",
    body:
      "AR try on delivered through a custom WebAssembly runtime, with a JS SDK, a Shopify app, and a Fynd Platform extension so a brand could adopt it without a native build.",
    stat: "3",
    statLabel: "Distribution surfaces from one runtime",
    tags: ["WebAssembly", "JS SDK", "Shopify", "Computer vision"],
    img: "/img/glamar",
    alt: "Cosmetics arranged on a flat surface, standing in for the virtual try on product",
  },
];

export const impact = [
  { value: 70, suffix: "%", label: "Faster website on the Tira platform", note: "Reliance Retail" },
  { value: 80, prefix: "60 to ", suffix: "%", label: "Better search bar INP", note: "Atlan" },
  { value: 100, suffix: "K", label: "Daily active users on EraseBG", note: "Fynd" },
  { value: 300, suffix: "K", label: "Daily active users on Tira", note: "Reliance Retail" },
  { value: 8, suffix: "+", label: "Years shipping product engineering", note: "2018 to now" },
];

export const timeline = [
  {
    org: "Atlan",
    role: "Senior Software Engineer",
    period: "May 2024 to now",
    place: "Remote",
    lines: [
      "Architected the Conversational AI UI on Vercel ai-sdk with MCP and human in the loop tool calls.",
      "Owned end to end quality of the AI surface, reviewing and testing every pull request before release.",
      "Resolved high impact AI reliability issues for enterprise customers, including broken tag filters and governance chat freezes.",
      "Mentored interns on AI feature development and stabilised the frontend CI.",
    ],
  },
  {
    org: "Fynd",
    role: "Software Development Engineer III",
    period: "Oct 2019 to Apr 2024",
    place: "Mumbai",
    lines: [
      "Built ML powered SaaS in the ML team: GlamAR, EraseBG, Fynd Trak and Fynd Now.",
      "Spearheaded a Fynd Platform module letting external developers customise backend logic.",
      "Led engineering for the Tira beauty platform and the ONDC vertical.",
    ],
  },
  {
    org: "Infosys",
    role: "Software Engineer",
    period: "Jul 2018 to Sep 2019",
    place: "Pune",
    lines: [
      "Built responsive web apps, reusable components and REST APIs for Allstate Insurance.",
      "Built a gamified insurance sales web app from scratch.",
    ],
  },
];

export const capabilities = [
  {
    group: "AI on the product side",
    items: [
      "Vercel ai-sdk",
      "Model Context Protocol",
      "Human in the loop tool calls",
      "Agentic widgets",
      "Copilot integration patterns",
      "Empirical LLM evaluation",
    ],
  },
  {
    group: "Interface and runtime",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "React Native",
      "WebAssembly",
      "D3.js",
    ],
  },
  {
    group: "Services and infrastructure",
    items: [
      "Node.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Elasticsearch",
      "Redis and Kafka",
      "Docker and Kubernetes",
    ],
  },
];

export const recognition = [
  {
    title: "Silver Prize, Jina X Hackathon",
    detail: "Vector and neural search hackathon run by Jina AI.",
    year: "2020",
  },
  {
    title: "Uber Base Web contributor",
    detail: "Open source React design system at Uber.",
    year: "2020 to 2021",
  },
  {
    title: "Dream Team of the Year",
    detail: "Fynd annual awards, with a Complete Ownership Award in 2021.",
    year: "2022",
  },
];

export const stack = [
  "typescript",
  "react",
  "nextdotjs",
  "vuedotjs",
  "nodedotjs",
  "python",
  "webassembly",
  "redis",
  "apachekafka",
  "kubernetes",
  "docker",
  "vercel",
];
