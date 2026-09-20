// Project data for Sekhar Harshitha's portfolio

export interface Project {
  id: string
  number: string
  title: string
  subtitle: string        // one-line product description
  description: string
  tags: string[]
  color: string
  accentColor: string
  bgGradient: string
  liveUrl: string         // '' if no live link yet
  // Case study modal content
  problem: string
  users: string
  insight: string
  journeySteps: string[]
  wireframes: string
  finalUI: string
  designSystem: string[]
  reflection: string
  outcome: string
}

export const projects: Project[] = [
  {
    id: 'puddlex',
    number: '01',
    title: 'PuddleX',
    subtitle: 'AI-powered flood risk prediction for urban emergency responders.',
    description:
      'A predictive intelligence platform that equips urban planners and emergency responders with real-time flood risk assessments using machine learning and geospatial data.',
    tags: ['AI/ML', 'Civic Tech', 'Mobile', 'Data Viz'],
    color: '#3F1D38',
    accentColor: '#D4AF37',
    bgGradient: 'from-plum-dark via-plum to-plum-light',
    liveUrl: 'https://puddlex.vercel.app/',
    problem:
      'Urban flooding causes $8B+ in annual damage. Existing tools are fragmented, delayed, and inaccessible to field responders who need real-time insights at their fingertips.',
    users:
      'Emergency responders, urban planners, city officials, and at-risk residents in flood-prone neighborhoods across Tier 1 and Tier 2 cities.',
    insight:
      '73% of responders reported making decisions on outdated flood data. Users wanted a single source of truth — predictive, not reactive.',
    journeySteps: ['Receives alert', 'Checks risk map', 'Identifies zones', 'Deploys resources', 'Files report'],
    wireframes:
      'Low-fidelity wireframes validated core navigation: Dashboard → Risk Map → Zone Detail → Alert Management → Report',
    finalUI:
      'Dark-mode mobile interface with layered risk heat maps, predictive timeline bars, and one-tap emergency broadcast.',
    designSystem: ['#3F1D38', '#D4AF37', '#1A0F17', '#F8F6F2', '#E8CA6A'],
    reflection:
      'PuddleX taught me that the best design decisions come from spending time in the field — not behind a screen. Embedding with first responders reshaped our entire IA.',
    outcome:
      'Prototype validated with 12 NDRF officers. Reduced simulated response decision time by 34%. Selected for national civic innovation showcase.',
  },
  {
    id: 'coolcity',
    number: '02',
    title: 'CoolCity AI',
    subtitle: 'Urban heat island intelligence dashboard for city climate planners.',
    description:
      'A climate intelligence dashboard helping city planners identify and mitigate urban heat islands through AI-powered temperature mapping, intervention modeling, and community reporting.',
    tags: ['Climate Tech', 'Dashboard', 'Accessibility', 'Web App'],
    color: '#1A3A4A',
    accentColor: '#4ECDC4',
    bgGradient: 'from-[#0D2233] via-[#1A3A4A] to-[#0F4C5C]',
    liveUrl: 'https://coolcity-ai.vercel.app/',
    problem:
      'Urban heat islands increase city temps by 5–10°F, disproportionately harming elderly, low-income, and outdoor workers. Planners lack actionable, localized data.',
    users:
      'City climate officers, urban planners, public health officials, and community advocates focused on environmental justice.',
    insight:
      "Planners didn't need more data — they needed clarity. A single \"heat stress score\" per neighborhood outperformed dense sensor readouts.",
    journeySteps: ['Discovers hotspot', 'Analyzes root cause', 'Models intervention', 'Presents to council', 'Tracks impact'],
    wireframes:
      'Dashboard-first approach: city-wide heat map → neighborhood drill-down → intervention simulator → weekly report export.',
    finalUI:
      'Warm-to-cool choropleth maps, accessibility-first color scales (WCAG AAA), intervention ROI calculator, and community voice feed.',
    designSystem: ['#0D2233', '#4ECDC4', '#F7FFF7', '#FF6B6B', '#FFE66D'],
    reflection:
      "Accessibility wasn't an afterthought — color-blind safe maps were built from day one. This project sharpened my understanding of data ethics in design.",
    outcome:
      'Dashboard presented to Chennai Urban Planning Cell. Accessibility audit passed WCAG AA. 3 neighborhoods identified for pilot green corridor intervention.',
  },
  {
    id: 'trustchain',
    number: '03',
    title: 'TrustChain',
    subtitle: 'Blockchain-powered supply chain traceability for brands and consumers.',
    description:
      'An enterprise-grade supply chain transparency platform enabling brands and consumers to verify product provenance, ethical sourcing, and authenticity through immutable blockchain records.',
    tags: ['Blockchain', 'Enterprise', 'B2B/B2C', 'Trust Design'],
    color: '#1C1C2E',
    accentColor: '#7C3AED',
    bgGradient: 'from-[#0F0F1A] via-[#1C1C2E] to-[#252540]',
    liveUrl: 'https://github.com/Sekhar-Harshitha/trustchain',
    problem:
      "Counterfeit goods cost the global economy $500B annually. Consumers can't verify ethical sourcing claims. Brands lack a unified trust layer across complex supply chains.",
    users:
      'Enterprise procurement teams, sustainability officers, brand managers, and end consumers scanning product QR codes.',
    insight:
      'Trust is invisible until broken. Design must make the blockchain ledger feel human — not technical. "Verified journey" beats "hash confirmed."',
    journeySteps: ['Scans QR code', 'Views origin story', 'Checks certifications', 'Shares with friends', 'Buys with confidence'],
    wireframes:
      'Two-track design: enterprise dashboard for supply chain managers + consumer scan-and-verify mobile flow.',
    finalUI:
      'Dark glass enterprise dashboard with purple accent system, animated provenance timeline, and consumer-facing "Origin Story" card.',
    designSystem: ['#1C1C2E', '#7C3AED', '#A78BFA', '#F8F6F2', '#10B981'],
    reflection:
      "Translating blockchain complexity into legible, emotionally resonant UI was the hardest design challenge I've faced. Simplicity is a feature.",
    outcome:
      'End-to-end prototype tested with 8 supply chain managers and 20 consumers. Consumer trust confidence score improved by 41% in usability testing.',
  },
  {
    id: 'farmlink',
    number: '04',
    title: 'Farm-Link',
    subtitle: 'Bilingual mobile marketplace connecting smallholder farmers to institutional buyers.',
    description:
      'A digital ecosystem directly connecting smallholder farmers to institutional buyers, eliminating middlemen and giving farmers real-time pricing power and weather intelligence.',
    tags: ['AgriTech', 'Mobile', 'Marketplace', 'Social Impact'],
    color: '#1A2F1A',
    accentColor: '#4ADE80',
    bgGradient: 'from-[#0D1F0D] via-[#1A2F1A] to-[#243824]',
    liveUrl: 'https://github.com/Sekhar-Harshitha/Farm-Link',
    problem:
      'Smallholder farmers earn 30–40% less due to middlemen opacity. They lack access to fair pricing, logistics, and market demand signals.',
    users:
      'Smallholder farmers (feature phone + smartphone), institutional buyers (restaurants, retailers, NGOs), and cooperative managers.',
    insight:
      "Farmers didn't trust apps — they trusted other farmers. Peer testimonials and cooperative social proof drove 3x higher onboarding completion.",
    journeySteps: ['Lists harvest', 'Receives offers', 'Negotiates price', 'Confirms logistics', 'Gets paid'],
    wireframes:
      'Lightweight first: SMS-fallback architecture with progressive enhancement for smartphone users. Crop card → offer feed → negotiation chat → payment.',
    finalUI:
      'High-contrast earthy green palette, large touch targets, voice-first inputs, bilingual UI (English + regional), animated weather card.',
    designSystem: ['#1A2F1A', '#4ADE80', '#F8F6F2', '#FCD34D', '#FB923C'],
    reflection:
      "Designing for farmers with limited literacy and connectivity forced me to strip every assumption. Constraints are design's best teacher.",
    outcome:
      'Field-tested with 15 farmers in Andhra Pradesh. Average income improvement of ₹800/month simulated. Cooperative onboarding completion rate 3× higher vs. baseline.',
  },
  {
    id: 'samaanai',
    number: '05',
    title: 'Samaan AI',
    subtitle: 'Conversational AI guide helping migrants navigate housing, jobs, and civic services.',
    description:
      'An intelligent relocation assistant that uses AI to match migrants and job-seekers with housing, employment, and civic resources across unfamiliar cities — reducing friction and exploitation.',
    tags: ['AI', 'Civic Tech', 'Accessibility', 'Mobile'],
    color: '#1A1A2E',
    accentColor: '#F6A623',
    bgGradient: 'from-[#0D0D1A] via-[#1A1A2E] to-[#252545]',
    liveUrl: 'https://samaan-ai.vercel.app/',
    problem:
      'Internal migrants in India — 140M+ — navigate housing, employment, and essential services in new cities with no trusted guidance. Exploitation and misinformation are rampant.',
    users:
      'Seasonal migrant workers, domestic workers, first-generation urban settlers, and NGO caseworkers supporting vulnerable populations.',
    insight:
      '"I don\'t need a map — I need someone to tell me who to trust." Personalized, conversational guidance outperformed directory-style apps by 5× in user preference.',
    journeySteps: ['Arrives in city', 'Describes needs', 'Gets matched resources', 'Contacts verified service', 'Settles safely'],
    wireframes:
      'Conversational UI first: single-screen chat → resource card stack → map confirmation → saved contacts. Tested with 3 NGO partners.',
    finalUI:
      'Warm amber-on-dark palette, AI chat interface with multilingual voice input, trust-verified resource cards, and community report flags.',
    designSystem: ['#1A1A2E', '#F6A623', '#FDE68A', '#F8F6F2', '#34D399'],
    reflection:
      'Designing for survivors of exploitation means every word matters. We iterated the copy 11 times before users felt safe. Language is design.',
    outcome:
      'Hackathon finalist. Prototype tested with 10 migrant workers across 2 NGO sessions. 9/10 rated it "much easier than asking strangers." Partnership interest from 1 NGO.',
  },
  {
    id: 'uidai',
    number: '06',
    title: 'UIDAI Lifecycle Analysis',
    subtitle: "UX research audit of India's Aadhaar identity system across 1.4 billion citizens.",
    description:
      "A comprehensive UX research and design audit of the UIDAI (Aadhaar) enrollment and update lifecycle — identifying friction, exclusion, and failure points across India's national identity system.",
    tags: ['UX Research', 'Gov Tech', 'Accessibility', 'Systems Design'],
    color: '#1A2030',
    accentColor: '#60A5FA',
    bgGradient: 'from-[#0D1520] via-[#1A2030] to-[#253045]',
    liveUrl: 'https://github.com/Sekhar-Harshitha/uidai-aadhaar-lifecycle-analysis',
    problem:
      'Aadhaar is used for 300+ government services, but millions of Indians — elderly, disabled, illiterate — cannot complete enrollment or updates independently. The system excludes those who need it most.',
    users:
      'Elderly citizens (65+), persons with disabilities, rural and semi-literate adults, and frontline enrollment operators at district Seva Kendras.',
    insight:
      '"The system doesn\'t know I exist until I can prove I exist." Circular dependency: those without Aadhaar can\'t access services to get Aadhaar. Identity catch-22.',
    journeySteps: ['Learns about Aadhaar', 'Gathers documents', 'Visits Seva Kendra', 'Biometric capture', 'Awaits & updates'],
    wireframes:
      'Journey maps across 6 citizen personas. Heuristic evaluation of UIDAI portal (47 violations found). Redesigned 3 critical flows with accessibility-first prototypes.',
    finalUI:
      'High-contrast, WCAG AA-compliant redesign of enrollment form, update portal, and operator-facing dashboard with simplified language and assisted-mode toggles.',
    designSystem: ['#1A2030', '#60A5FA', '#BFDBFE', '#F8F6F2', '#34D399'],
    reflection:
      'Government UX is where design debt costs lives. Every friction point in Aadhaar represents a real person turned away. This project made me a more responsible designer.',
    outcome:
      '47 heuristic violations documented. 3 high-priority flow redesigns prototyped. Audit report shared with IIIT Hyderabad Policy Lab. Cited in 2 academic papers.',
  },
  {
    id: 'naturalsbeautyos',
    number: '07',
    title: 'Naturals Beauty OS',
    subtitle: 'AI-powered personalised beauty recommendation system for salon-tech experiences.',
    description:
      'A beauty intelligence platform using computer vision and skin analytics to deliver inclusive, personalized beauty recommendations — built for India\'s first Beauty Tech Hackathon by Naturals Salon.',
    tags: ['AI', 'Beauty Tech', 'Computer Vision', 'Consumer'],
    color: '#2A1226',
    accentColor: '#F472B6',
    bgGradient: 'from-[#1A0A14] via-[#2A1226] to-[#3D1535]',
    liveUrl: 'https://github.com/Sekhar-Harshitha/Naturals',
    problem:
      'Beauty recommendations in salons are often generic, one-size-fits-all, and fail to account for skin tone diversity, cultural aesthetics, and individual preferences across India\'s population.',
    users:
      'Salon clients across diverse skin tones, beauty professionals seeking data-driven consultation tools, and salon chains wanting to digitize personalization.',
    insight:
      '"Every shade guide I\'ve seen was made for someone else." Inclusive recommendation models outperformed generic beauty apps by 4× in user satisfaction across darker skin tones.',
    journeySteps: ['Captures selfie', 'AI skin analysis', 'Gets recommendations', 'Explores looks', 'Books service'],
    wireframes:
      'Camera-first entry → skin analysis loading state → personalized look grid → product + service pairing → salon booking flow.',
    finalUI:
      'Warm rose-on-dark palette, inclusive skin tone visualizer, personalized look carousel, and AI-generated "your colour story" narrative.',
    designSystem: ['#2A1226', '#F472B6', '#FBCFE8', '#F8F6F2', '#D4AF37'],
    reflection:
      'Building for beauty taught me that inclusion is a design decision made on day one. Representation in the training data is the real UX problem.',
    outcome:
      'Top Finalist — India\'s First Beauty Tech Hackathon (Naturals). Recognised nationally for inclusive AI design approach. Prototype demoed to Naturals leadership.',
  },
  {
    id: 'tidex',
    number: '08',
    title: 'TIDEX',
    subtitle: 'Decentralised intellectual property exchange for creators and innovators.',
    description:
      'A blockchain-powered platform enabling creators, researchers, and innovators to tokenize, license, and trade intellectual property rights transparently — removing intermediaries from the IP economy.',
    tags: ['Blockchain', 'IP Tech', 'Decentralised', 'Creator Economy'],
    color: '#0F1A2E',
    accentColor: '#38BDF8',
    bgGradient: 'from-[#080F1A] via-[#0F1A2E] to-[#1A2A40]',
    liveUrl: 'https://github.com/Sekhar-Harshitha/TIDEX',
    problem:
      'Creators and innovators lose billions annually to IP theft, opaque licensing, and gatekeeping by intermediaries. There is no accessible, transparent marketplace for intellectual property.',
    users:
      'Independent researchers, artists, engineers, universities, and startups seeking fair IP licensing and attribution without expensive legal overhead.',
    insight:
      '"My work gets used — I just never get paid for it." Transparent, automated licensing with instant attribution creates trust where legal systems have failed.',
    journeySteps: ['Registers IP', 'Sets license terms', 'IP discovered', 'License purchased', 'Royalties received'],
    wireframes:
      'Creator dashboard → IP tokenization flow → marketplace browse → license negotiation → automated royalty distribution.',
    finalUI:
      'Deep ocean blue palette, IP certificate cards, live royalty stream visualization, and transparent license audit trail.',
    designSystem: ['#0F1A2E', '#38BDF8', '#BAE6FD', '#F8F6F2', '#A78BFA'],
    reflection:
      'TIDEX showed me that trust architecture is a design problem. Making complex smart contracts feel as simple as signing a document was the real challenge.',
    outcome:
      'Full-stack prototype built and demoed. Smart contract architecture validated. Presented at college innovation fair. GitHub repository actively maintained.',
  },
]
