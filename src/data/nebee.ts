export interface NebeeFaqItem {
  key: string;
  label: string;
  answerHtml: string;
}

export const nebeeConfig = {
  brandName: "nebu.studio",
  logoAlt: "nebu.studio — Digital Product & Brand Design",
  heroTitleHtml: "We elevate and refine<br />high-impact products",
  tagline:
    "Delivering comprehensive design and branding that transforms products into market leaders, ensuring a seamless transition from strategy<br />to technical execution.",
  pillLabel: "Ask Nebee",
  botName: "Nebee",
  botSubtitle: "nebu.studio AI assistant · the team can also help",
  welcomeMessage:
    "Hey, I'm Nebee, nebu.studio's assistant. How can I help you today?",
  clearedMessage: "Chat cleared. How else can Nebee help you?",
  inputPlaceholder: "Ask a question...",
  emailPlaceholder: "Enter your e-mail...",
  customQuestionPromptHtml:
    "I see you have a specific question and a vision for what you want to build. Drop your e-mail below and wave to us so we can stay in touch — or simply write to <a href='mailto:hi@nebu.studio'>hi@nebu.studio</a>.",
  contactEmail: "hi@nebu.studio",
  defaultFallbackHtml:
    "Feel free to drop us a note at <a href='mailto:hi@nebu.studio'>hi@nebu.studio</a> and we'll discuss your requirements.",
  formSubmitReplyHtml:
    "Thanks for reaching out! Your message has been saved.<br><br>We'll get back to you directly from <a href='mailto:hi@nebu.studio'>hi@nebu.studio</a>.",
  enableBackgroundEffect: true,
};

export const nebeeFaqItems: NebeeFaqItem[] = [
  {
    key: "pricing",
    label: "Pricing",
    answerHtml:
      "Our project estimates depend on scope, typically starting from <strong>€3,500</strong> for brand identity and web design systems.<br><br>We deliver bespoke, high-end digital craftsmanship tailored to your goals.",
  },
  {
    key: "audit",
    label: "UX audit",
    answerHtml:
      "We thoroughly evaluate your product's UX/UI, user flows, accessibility, and conversion bottlenecks.<br><br>• Actionable diagnostic report within 5 business days<br>• Prioritized quick-wins & architecture recommendations",
  },
  {
    key: "mvp",
    label: "MVPs",
    answerHtml:
      "We design and build production-ready digital MVPs rapidly using modern component architectures, ensuring clean scalability from day one.",
  },
  {
    key: "stack",
    label: "Framer to Astro",
    answerHtml:
      "We specialize in migrating high-end design systems from Framer to high-performance Astro environments for maximum speed, zero bloat, and full code ownership.",
  },
  {
    key: "timeline",
    label: "How fast can you start?",
    answerHtml:
      "Usually within a few days.<br><br>• Need to move this week? Tell us on the first call and we’ll plan around it<br>• Work is reviewed in short cycles, so you see progress early",
  },
  {
    key: "cases",
    label: "Case studies",
    answerHtml:
      "You can explore selected client work on our Behance profile or reach out directly at <a href='mailto:hi@nebu.studio'>hi@nebu.studio</a> for private portfolio decks.",
  },
];