export interface ProjectItem {
  id: string
  numericId?: number
  title: string
  subtitle: string
  category: string
  status?: 'Live Product' | 'Active Build' | 'Enterprise Solution'
  featured?: boolean
  externalUrl?: string
  description: string
  longDescription: string
  image?: string
  iconName:
    | 'sparkles'
    | 'globe'
    | 'map-pin'
    | 'database'
    | 'palette'
    | 'cpu'
    | 'shield'
    | 'network'
    | 'sprout'
    | 'cloud'
    | 'smartphone'
    | 'code'
    | 'video'
  accent: string
  metrics: { label: string; value: string }[]
  features: string[]
  benefits: string[]
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'siesie-app',
    numericId: 0,
    title: 'siesie.app',
    subtitle: 'Verified Home & Business Services Marketplace',
    category: 'Flagship Platform',
    status: 'Live Product',
    featured: true,
    externalUrl: 'https://siesie.app',
    description:
      'Ghana’s trusted marketplace connecting households and businesses across Accra, Tema, and Kumasi with ID-verified service professionals—backed by upfront pricing and Mobile Money escrow protection.',
    longDescription:
      'Built and operated by Kirulabs (Dekiru Company Limited), siesie.app ("Siesie" means to fix, arrange, and put in order in Twi) solves the trust deficit in everyday maintenance and trade services. Whether booking plumbing, electrical engineering, deep cleaning, carpentry, or tiling, customers get transparent upfront quotes while payments are held safely in escrow and released to the professional’s Mobile Money (MoMo) or bank account only after job completion.',
    image: '/sc4.jpg',
    iconName: 'sparkles',
    accent: 'from-zinc-900 to-zinc-700',
    metrics: [
      { label: 'Coverage', value: 'Accra • Tema • Kumasi' },
      { label: 'Payment Safety', value: '100% Escrow Protected' },
      { label: 'Professionals', value: 'ID-Verified Vetting' },
    ],
    features: [
      'Strict National ID & Background Verification for Service Pros',
      'Automated Escrow Engine with Mobile Money (MoMo) & Bank Payouts',
      'Transparent Upfront Quoting & Scope Agreement Before Work Begins',
      'Real-Time Booking Dispatch across Plumbing, Electrical, Cleaning & Carpentry',
      'Dispute Resolution & Quality Guarantee Workflow',
      'Mobile-First Web & App Experience Engineered for Low-Latency Networks',
    ],
    benefits: [
      'Eliminates fraud and uncompleted work with milestone escrow protection',
      'Empowers skilled Ghanaian artisans with digital visibility and instant payouts',
      'Saves households and facility managers hours of vetting and price haggling',
      'Full transaction audit trail for both residential and corporate clients',
      'Scalable marketplace architecture built by Kirulabs Core Engineering',
      'Live and actively serving customers at https://siesie.app',
    ],
  },
  {
    id: 'world-community-church',
    numericId: 9,
    title: 'World Community Church',
    subtitle: 'www.worldcommunitychurch.com • Official Digital Platform',
    category: 'Web Platform',
    status: 'Live Product',
    featured: true,
    externalUrl: 'https://www.worldcommunitychurch.com',
    description:
      'Modern, responsive web platform engineered for World Community Church International (Tantra Hills, Accra)—featuring live service updates, ministry portals, and seamless mobile performance.',
    longDescription:
      'Designed and deployed by Kirulabs for World Community Church International in Tantra Hills, Accra, www.worldcommunitychurch.com delivers an inviting, fast-loading digital home for members and visitors worldwide. Built with mobile-first responsiveness, clear service schedules, leadership directories, and instant community connection.',
    image: '/sc1.jpg',
    iconName: 'globe',
    accent: 'from-zinc-900 to-zinc-700',
    metrics: [
      { label: 'Live Domain', value: 'worldcommunitychurch.com' },
      { label: 'Location', value: 'Tantra Hills, Accra' },
      { label: 'Performance', value: '99+ Mobile Speed' },
    ],
    features: [
      'Custom Responsive Design Tailored for Community & Ministry Identity',
      'Service Schedules, Location Directions & Event Announcements',
      'Fast Global CDN Hosting & SSL Security Hardening',
      'Mobile-First Navigation for Congregants on Any Device',
      'Search Engine Optimization (SEO) for Local & International Reach',
      'Direct Contact, Prayer Request & Visitor Onboarding Flows',
    ],
    benefits: [
      'Gives the organization a credible, 24/7 global digital presence',
      'Makes it effortless for new visitors to find service times and directions',
      'Loads rapidly even on mobile data networks across Ghana',
      'Showcases the quality delivered under the Kirulabs 600 Cedis Website Promo',
    ],
  },
  {
    id: 'ngo-page',
    numericId: 1,
    title: 'NGO Generative Portal',
    subtitle: 'AI Motion Graphics & Impact Storytelling',
    category: 'AI & Automation',
    status: 'Enterprise Solution',
    description:
      'High-conversion NGO landing platform featuring generative motion graphics and modern AI-driven visual storytelling.',
    longDescription:
      'An expressive digital presence crafted for non-profit impact organizations. Combines generative art pipelines, interactive donor storytelling, and real-time impact telemetry to maximize global engagement and transparency.',
    image: '/sc1.jpg',
    iconName: 'globe',
    accent: 'from-blue-500 to-cyan-400',
    metrics: [
      { label: 'Engagement Lift', value: '+68%' },
      { label: 'Render Pipeline', value: '60 FPS WebGL/Motion' },
      { label: 'Load Time', value: '< 1.2s LCP' },
    ],
    features: [
      'Generative AI Visual & Motion Graphics Pipeline',
      'Interactive Impact & Campaign Telemetry',
      'Accessible, Mobile-First Donor Experience',
      'Automated Content Publishing Workflow',
      'SEO & Global CDN Edge Delivery',
      'Seamless Payment & Donation Gateway Integration',
    ],
    benefits: [
      'Captures donor attention within the first 3 seconds',
      'Communicates complex social impact through visual clarity',
      'Reduces creative production turnaround by 70%',
      'Scales effortlessly during high-traffic fundraising campaigns',
    ],
  },
  {
    id: 'availability-map',
    numericId: 2,
    title: 'Geo-Availability Intelligence Map',
    subtitle: 'Real-Time Spatial & Temporal Coverage Engine',
    category: 'Analytics & GIS',
    status: 'Active Build',
    description:
      'Interactive geospatial map displaying real-time resource and service availability across specific locations and time windows.',
    longDescription:
      'A high-precision spatial analytics platform that visualizes live service coverage, fleet or personnel availability, and time-slot capacity across urban zones—enabling instant routing and scheduling decisions.',
    image: '/sc2.jpg',
    iconName: 'map-pin',
    accent: 'from-purple-500 to-pink-500',
    metrics: [
      { label: 'Spatial Precision', value: 'Sub-10m Zones' },
      { label: 'Telemetry Sync', value: 'Real-Time WebSockets' },
      { label: 'Dispatch Speed', value: '3.4x Faster' },
    ],
    features: [
      'Live Geospatial Heatmaps & Zone Filtering',
      'Time-Window Availability Matrix',
      'Predictive Demand & Bottleneck Highlighting',
      'Custom Map Layers & Enterprise API Webhooks',
      'Mobile Field-Agent Check-In Sync',
      'Role-Based Operations Dashboard',
    ],
    benefits: [
      'Eliminates double-bookings and regional coverage blind spots',
      'Gives operations teams a single pane of glass for field logistics',
      'Improves customer SLA compliance and on-time arrival rates',
      'Integrates directly into existing ERP and booking engines',
    ],
  },
  {
    id: 'data-analysis',
    numericId: 3,
    title: 'Enterprise Data Intelligence',
    subtitle: 'Decision Pipelines & Executive Visualization',
    category: 'Data & Cloud',
    status: 'Enterprise Solution',
    description:
      'End-to-end data organization, cleansing, and executive visualization engineered with strict privacy and governance.',
    longDescription:
      'Our data engineering and analytics team transforms fragmented spreadsheets and siloed databases into automated, privacy-first intelligence dashboards—helping leadership teams spot revenue opportunities and operational leaks early.',
    image: '/sc3.jpg',
    iconName: 'database',
    accent: 'from-indigo-500 to-blue-500',
    metrics: [
      { label: 'Reporting Speed', value: '10x Faster Insights' },
      { label: 'Data Governance', value: 'Zero-Leak Privacy' },
      { label: 'Automation', value: '24/7 ETL Sync' },
    ],
    features: [
      'Automated ETL Pipelines & Data Cleansing',
      'Custom Executive KPI & Revenue Dashboards',
      'Predictive Forecasting & Anomaly Detection',
      'Strict Encryption & Privacy-First Governance',
      'Multi-Source Integration (POS, ERP, CRM, Mobile Money)',
      'Scheduled Automated Board & Stakeholder Reports',
    ],
    benefits: [
      'Replaces manual weekly spreadsheet crunching with live metrics',
      'Uncovers hidden cost savings and high-margin customer segments',
      'Keeps sensitive corporate data encrypted and compliant',
      'Empowers faster, evidence-backed executive decisions',
    ],
  },
  {
    id: 'interactive-brand-experience',
    numericId: 4,
    title: 'Interactive 3D Brand Experiences',
    subtitle: 'Immersive WebGL, Motion & Spatial UI',
    category: 'Design & UX',
    status: 'Enterprise Solution',
    description:
      'Immersive web experiences with 3D elements, choreographed animations, and personalized journeys that captivate modern audiences.',
    longDescription:
      'We blend creative direction with frontier web engineering—crafting 3D product showcases, glassmorphic design systems, and fluid micro-interactions that turn passive visitors into brand advocates.',
    image: '/sc4.jpg',
    iconName: 'palette',
    accent: 'from-fuchsia-500 to-purple-600',
    metrics: [
      { label: 'Session Duration', value: '+140% Dwell Time' },
      { label: 'Motion Engine', value: 'Hardware 3D CSS/WebGL' },
      { label: 'Design Standard', value: 'Awwwards-Grade Craft' },
    ],
    features: [
      'Custom 3D Artifacts & Interactive WebGL Scenes',
      'Choreographed Scroll & Cursor-Tracking Micro-Interactions',
      'Bespoke Design Systems & Glassmorphic UI Kits',
      'High-Contrast Editorial Typography & Brand Storytelling',
      'Performance-Tuned Asset Streaming',
      'Cross-Device Responsive Motion Adaptation',
    ],
    benefits: [
      'Positions your brand leagues ahead of generic template competitors',
      'Drives measurably higher conversion and enterprise credibility',
      'Delivers memorable product launches and investor presentations',
      'Engineered for both visual spectacle and fast load performance',
    ],
  },
  {
    id: 'nfc-solutions',
    numericId: 5,
    title: 'Custom Enterprise NFC Systems',
    subtitle: 'Smart Contactless Cards & Tap-to-Action Flows',
    category: 'Hardware & IoT',
    status: 'Live Product',
    description:
      'Customizable smart NFC cards and contactless triggers for instant digital profiles, access control, and customer engagement.',
    longDescription:
      'Replace paper business cards and static signage with programmable NFC hardware paired with cloud-managed profiles. One tap shares contact cards, launches payment/booking flows, or verifies staff credentials.',
    image: '/nfc.jpg',
    iconName: 'cpu',
    accent: 'from-blue-500 to-indigo-600',
    metrics: [
      { label: 'Tap Response', value: '< 150ms Instant Launch' },
      { label: 'Compatibility', value: 'iOS & Android Native' },
      { label: 'Lifecycle', value: 'Reprogrammable Cloud Profiles' },
    ],
    features: [
      'Custom Laser-Finished & Branded NFC Smart Cards',
      'Dynamic Cloud Profile & Link Management Dashboard',
      'One-Tap vCard, Portfolio, and Payment Link Sharing',
      'Event Lead Capture & Tap Analytics Telemetry',
      'Enterprise Staff ID & Access Verification Integration',
      'No App Install Required for Recipients',
    ],
    benefits: [
      'Makes every in-person networking moment instant and memorable',
      'Eliminates re-printing costs when team titles or links change',
      'Tracks real-world engagement with digital tap analytics',
      'Bridges physical brand touchpoints directly into your digital funnel',
    ],
  },
  {
    id: 'enterprise-security-suite',
    numericId: 6,
    title: 'Enterprise Security Suite',
    subtitle: 'Zero-Trust Architecture & Threat Resilience',
    category: 'Security',
    status: 'Enterprise Solution',
    description:
      'Comprehensive cybersecurity framework with zero-trust access, end-to-end encryption, threat detection, and compliance.',
    longDescription:
      'Protect critical business infrastructure with multi-layered defense. We audit, harden, and monitor web platforms, cloud networks, and internal endpoints against modern cyber threats.',
    image: '/sec.jpg',
    iconName: 'shield',
    accent: 'from-rose-500 to-purple-600',
    metrics: [
      { label: 'Architecture', value: 'Zero-Trust Verified' },
      { label: 'Monitoring', value: '24/7 Anomaly Watch' },
      { label: 'Encryption', value: 'AES-256 / TLS 1.3' },
    ],
    features: [
      'Zero-Trust Identity & Role-Based Access Control',
      'Automated Vulnerability Scanning & Penetration Testing',
      'End-to-End Data Encryption at Rest and in Transit',
      '24/7 Security Telemetry & Incident Alerting',
      'Cloud Firewall, DDoS Mitigation & API Rate Hardening',
      'Regulatory Compliance & Staff Security Audits',
    ],
    benefits: [
      'Safeguards customer trust and prevents costly data breaches',
      'Ensures business continuity and high availability under load',
      'Meets strict enterprise and financial partner security standards',
      'Proactively patches vulnerabilities before they can be exploited',
    ],
  },
  {
    id: 'networking-infrastructure',
    numericId: 7,
    title: 'Resilient Networking Systems',
    subtitle: 'High-Uptime Enterprise Connectivity',
    category: 'Infrastructure',
    status: 'Enterprise Solution',
    description:
      'Robust campus and enterprise networking engineered for uninterrupted operations even in challenging connectivity zones.',
    longDescription:
      'We design, cable, and manage high-availability local and wide-area networks—combining structured cabling, mesh failover, and intelligent traffic shaping so your team never loses productivity.',
    image: '/cable.jpg',
    iconName: 'network',
    accent: 'from-amber-500 to-pink-500',
    metrics: [
      { label: 'Target Uptime', value: '99.95% Failover Ready' },
      { label: 'Coverage', value: 'Dead-Zone Eliminated' },
      { label: 'Management', value: 'Remote Cloud Telemetry' },
    ],
    features: [
      'Structured Fiber & Cat6A Enterprise Cabling',
      'Multi-ISP Automatic Failover & Load Balancing',
      'High-Density Wi-Fi 6/7 Mesh Deployment',
      'VLAN Segmentation & Guest Network Isolation',
      'QoS Prioritization for Voice, Video & Cloud ERP',
      'Proactive Link Health Monitoring',
    ],
    benefits: [
      'Keeps mission-critical operations online even during ISP outages',
      'Eliminates office dead zones and sluggish video calls',
      'Separates sensitive corporate traffic from guest devices',
      'Clean, documented hardware installations built to scale',
    ],
  },
  {
    id: 'farming-hardware-systems',
    numericId: 8,
    title: 'Smart AgriTech & Farming Hardware',
    subtitle: 'Drone Telemetry & Autonomous Field Sensors',
    category: 'Hardware & IoT',
    status: 'Active Build',
    description:
      'Precision agriculture hardware, drone reconnaissance, and automated sensor networks tailored for modern African farms.',
    longDescription:
      'Empowering agricultural enterprises with field-ready hardware and aerial intelligence. From drone crop-health mapping to automated soil and irrigation telemetry, we bring precision engineering to food production.',
    image: '/drone.jpg',
    iconName: 'sprout',
    accent: 'from-emerald-400 to-blue-500',
    metrics: [
      { label: 'Field Coverage', value: 'Aerial Drone Mapping' },
      { label: 'Resource Efficiency', value: '-35% Water & Input Waste' },
      { label: 'Telemetry', value: 'Solar IoT Field Nodes' },
    ],
    features: [
      'Autonomous Drone Crop-Health & Topographic Mapping',
      'Solar-Powered Soil Moisture & Micro-Climate Sensors',
      'Automated Smart Irrigation Triggers',
      'Long-Range LoRaWAN Connectivity for Remote Farmlands',
      'Mobile Farm Command Dashboard & Yield Analytics',
      'Ruggedized Hardware Built for Tropical Field Conditions',
    ],
    benefits: [
      'Detects crop stress and irrigation issues across hundreds of acres early',
      'Reduces fertilizer, water, and labor waste with precision targeting',
      'Works reliably in rural areas with limited cellular coverage',
      'Boosts seasonal yield predictability and farm profitability',
    ],
  },
]

const LEGACY_ALIASES: Record<string, string> = {
  '0': 'siesie-app',
  'siesie': 'siesie-app',
  'siesie.app': 'siesie-app',
  '1': 'ngo-page',
  '2': 'availability-map',
  '3': 'data-analysis',
  'data-analytics': 'data-analysis',
  '4': 'interactive-brand-experience',
  'web-development': 'interactive-brand-experience',
  'videography-media': 'interactive-brand-experience',
  '5': 'nfc-solutions',
  'mobile-development': 'nfc-solutions',
  '6': 'enterprise-security-suite',
  'security-solutions': 'enterprise-security-suite',
  '7': 'networking-infrastructure',
  'internet-services': 'networking-infrastructure',
  'cloud-infrastructure': 'networking-infrastructure',
  '8': 'farming-hardware-systems',
  'ai-automation': 'ngo-page',
}

export function getProjectById(idOrSlug: string): ProjectItem | undefined {
  const normalized = decodeURIComponent(idOrSlug).trim().toLowerCase()
  const direct = PROJECTS.find((p) => p.id === normalized)
  if (direct) return direct

  const aliasedId = LEGACY_ALIASES[normalized]
  if (aliasedId) {
    return PROJECTS.find((p) => p.id === aliasedId)
  }
  return undefined
}
