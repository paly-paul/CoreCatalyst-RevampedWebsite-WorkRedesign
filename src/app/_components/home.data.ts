// Platform features (4 pillars)
export const platformFeatures = [
  {
    id: "skills-mapping",
    icon: "Database",
    title: "Skills Mapping and Reconciliation",
    description: "Our AI extracts skills signals from across your systems, but every profile is put through a human-validated reconciliation process before it enters the record. The result is a skills inventory your organisation can trust.",
    details: [
      "Multi-source data ingestion (HRIS, LMS, performance data)",
      "AI extraction with manager adjudication workflow",
      "Bias-monitored dispute governance",
      "Provenance-tracked skill records",
    ],
  },
  {
    id: "workforce-intelligence",
    icon: "Users",
    title: "Workforce Intelligence",
    description: "From your verified skills record, we build the strategic views your leadership team actually needs - gap analysis, mobility pathways, and automation impact modelling.",
    details: [
      "Role-gap analysis across the full organisation",
      "Internal mobility classification and career lattices",
      "Automation charter identifying AI-exposed roles",
      "Org Passport - a portable workforce capability view across Finance, Procurement, Logistics, HR, Operations, and frontline functions",
    ],
  },
  {
    id: "governance-trust",
    icon: "Shield",
    title: "Governance and Trust",
    description: "Every skill claim in WorkRedesign has an audit trail. You know who validated it, when, with what evidence - and the system flags when evidence is stale or disputed.",
    details: [
      "Full adjudication audit trail",
      "Configurable validation workflows per role type",
      "GDPR-aligned data architecture",
      "Board-ready export with sourcing transparency",
    ],
  },
  {
    id: "business-outputs",
    icon: "FileText",
    title: "Business-Ready Outputs",
    description: "Intelligence without action is just analysis. WorkRedesign closes the loop by generating the actual business documents your organisation needs - built directly from your verified skills record, not from templates.",
    note: "Every output is generated from your verified data and reviewed in collaboration with your team. This is not a generic document generator - it is a co-produced deliverable that reflects your actual workforce.",
    outputs: [
      {
        icon: "FileText",
        title: "Redefined Job Descriptions",
        subtitle: "Skills-based, AI-era job descriptions that reflect what roles actually require",
      },
      {
        icon: "TrendingUp",
        title: "Career Lattices",
        subtitle: "Horizontal and vertical mobility maps showing realistic next steps for every employee",
      },
      {
        icon: "Zap",
        title: "Automation Charter",
        subtitle: "A governed framework identifying which tasks are AI-automatable and what that means for each role",
      },
      {
        icon: "BarChart2",
        title: "Board-Ready Export",
        subtitle: "A formatted intelligence report structured for executive and board-level audiences",
      },
    ],
  },
];

// Trust signals (7 cards)
export const trustSignals = [
  {
    icon: "Link",
    title: "HRIS-Agnostic Integration",
    description: "Works alongside Workday, SAP SuccessFactors, Oracle HCM, and any other system you have. No rip and replace - no disruption to your existing infrastructure.",
  },
  {
    icon: "Search",
    title: "Auditable at Every Step",
    description: "Every skill claim carries its provenance. Who validated it, when, and with what evidence. Your CHRO can stand in front of the board and defend any number in the report.",
  },
  {
    icon: "Users",
    title: "Manager-in-the-Loop Adjudication",
    description: "AI generates the first pass. Managers validate with evidence. Disputes go through a governed process. The final record reflects human judgement, not just machine inference.",
  },
  {
    icon: "Lock",
    title: "GDPR and Enterprise Security",
    description: "Designed for enterprise compliance from day one. Data stays in your environment. Access controls, audit logs, and data residency options are standard - not add-ons.",
  },
  {
    icon: "Grid",
    title: "Human-in-the-Loop by Design",
    description: "AI enables the process; humans govern it. WorkRedesign is not a black box. Every output has an explanation, every decision has an owner, and every record can be challenged.",
  },
  {
    icon: "TrendingUp",
    title: "90-Day Proof of Concept",
    description: "We do not ask you to commit to a multi-year platform before you have seen results. Our structured POC delivers a validated skills map for a defined part of your organisation in 90 days.",
  },
];

// Stats section (4 metrics)
export const stats = [
  {
    number: "90",
    label: "days to a validated skills map in your first business unit",
  },
  {
    number: "3x",
    label: "faster internal mobility decisions with verified skills data",
  },
  {
    number: "40%",
    label: "reduction in external hiring costs reported by pilot organisations",
  },
  {
    number: "100%",
    label: "of skill records auditable with full provenance trail",
  },
];

// Persona tabs content
export const personas = [
  {
    id: "chro",
    label: "CHRO",
    title: "Chief Human Resources Officer",
    quote: "I need to walk into the board meeting with a workforce capability report that I can actually defend - not a slide deck built on gut feel. And I need it to cover everyone: Finance, Procurement, Logistics, our frontline - not just the knowledge workers.",
    heading: "From fragmented data to board-level confidence",
    outcomes: [
      "A validated, organisation-wide skills map your board can trust - built on evidence, not self-assessment alone",
      "Redefined job descriptions that reflect what your roles actually require in an AI-era workforce",
      "Career lattices showing realistic internal mobility pathways across your organisation",
      "An automation charter identifying AI-exposed roles and the reskilling pathways attached to them",
      "A board-ready intelligence export formatted for executive audiences, with full sourcing transparency",
      "Confidence in your workforce planning decisions when AI transformation is moving the ground beneath you",
    ],
    customise: {
      label: "Tailored to your organisation:",
      text: "Every CHRO has a different starting point. We configure the reconciliation process, the adjudication workflows, and the output formats to match your existing governance structure - not a generic playbook.",
    },
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=480&fit=crop&crop=faces",
    imageAlt: "Senior HR leader in a professional boardroom setting",
    anxiety: "\"We are not here to tell you who to let go. We are showing you what your people can do next.\"",
  },
  {
    id: "managers",
    label: "Line Managers",
    title: "Line Managers",
    quote: "I know what my team can do, but I have never had a structured way to say it - or prove it when it comes to promotion decisions.",
    heading: "Give managers a voice in how skills are recorded",
    outcomes: [
      "A structured adjudication workflow that captures your knowledge of your team's capabilities - with evidence attached",
      "Visibility of skills gaps in your team before they become a delivery problem",
      "Ability to identify internal candidates for roles before going to external recruitment",
      "Career development conversations backed by data, not just annual review cycles",
    ],
    customise: {
      label: "Designed for adoption:",
      text: "The manager interface is built to take minutes, not hours. We configure it to fit your existing review rhythm so it becomes part of how you manage, not an extra task.",
    },
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&h=480&fit=crop&crop=faces",
    imageAlt: "Manager in a team meeting discussing performance and skills",
  },
  {
    id: "hrops",
    label: "HR Operations",
    title: "HR Operations",
    quote: "We spend months pulling data from six different systems. By the time we have a clean picture, it is already out of date.",
    heading: "Replace manual data wrangling with a governed pipeline",
    outcomes: [
      "Automated ingestion from your existing HRIS, LMS, and performance systems - no manual exports",
      "A single, governed skills record that replaces multiple spreadsheet-based tracking systems",
      "Configurable validation workflows that match your existing HR governance processes",
      "Audit-ready reporting that satisfies both internal compliance and external regulatory requirements",
    ],
    customise: {
      label: "Works with what you have:",
      text: "We do not require you to replace or upgrade your HRIS. WorkRedesign sits alongside your existing stack and connects to it - keeping you in control of your data architecture.",
    },
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=480&fit=crop&crop=faces",
    imageAlt: "HR professional reviewing data analytics on a laptop",
  },
];

// Comparison table: WorkRedesign vs generic skills-tag tools
export const comparison = {
  competitorLabel: "Skills tag tools",
  rows: [
    { capability: "Skill data generation", competitor: true, core: true },
    { capability: "HRIS integration", competitor: true, core: true, coreNote: "HRIS-agnostic" },
    { capability: "Manager adjudication with evidence trail", competitor: false, core: true },
    { capability: "Bias-monitored dispute governance", competitor: false, core: true },
    { capability: "Provenance-tracked skill records", competitor: false, core: true },
    { capability: "Redefined job descriptions", competitor: false, core: true },
    { capability: "Career lattices (horizontal and vertical)", competitor: false, core: true },
    { capability: "Automation charter", competitor: false, core: true },
    { capability: "Board-ready formatted export", competitor: false, core: true },
    { capability: "90-day proof of concept engagement model", competitor: false, core: true },
  ],
};

// Testimonial
export const testimonial = {
  quote: "For the first time, I walked into the ExCo with a workforce capability report I was genuinely confident in. The reconciliation process surfaced skills we did not know we had - and gave us a credible basis for our AI readiness conversation.",
  authorName: "Michelle Roberts",
  authorTitle: "Chief People Officer - Global Financial Services and Operations Group",
  avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=96&h=96&fit=crop&crop=faces",
};
