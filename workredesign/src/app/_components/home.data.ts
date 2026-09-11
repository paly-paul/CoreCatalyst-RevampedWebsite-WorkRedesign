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
  },
  {
    id: "managers",
    label: "Line Managers",
    title: "Line Manager",
    quote: "I need to know what my team can actually do - their real capabilities, not just what's on the org chart. And I need to see career paths for people I don't want to lose.",
    heading: "From 'I wish I knew' to 'I know'",
    outcomes: [
      "A verified skills map for your team, showing capabilities that the HRIS doesn't capture",
      "Career pathways showing realistic next steps for team members - horizontal moves, not just up",
      "Confidence that you can staff projects with the right people internally",
      "Evidence-based talent decisions when performance reviews happen",
      "Intelligence about which team members may be exposed to AI automation of their current tasks",
      "A way to make succession planning discussions with your leadership team data-driven, not guesswork",
    ],
  },
  {
    id: "hrops",
    label: "HR Operations",
    title: "HR Operations Lead",
    quote: "Every system tells me something different about skills. HRIS says one thing, LMS says another, managers say another. I need one source of truth - and I need it without manual reconciliation that takes three months.",
    heading: "From fragmented signals to governed pipeline",
    outcomes: [
      "A single, authoritative skills record built from all your sources (HRIS, LMS, performance data)",
      "An adjudication workflow where managers validate skills claims with evidence - not just self-assessment",
      "Automated deduplication across systems and inconsistent naming",
      "Dispute governance that flags conflicts and surfaces them for resolution",
      "Audit trails that track every change, every validation, every decision",
      "Career lattices and job families that feed directly into your talent planning and succession workflows",
    ],
  },
];

// Comparison section (3 alternatives)
export const comparison = [
  {
    name: "Generic Skills Databases",
    problems: [
      "Industry-generic. Your Finance team ≠ every other Finance team.",
      "Self-reported. Employees fill in forms when HR reminds them.",
      "Not verified. 'Power user in Excel' means nothing in your context.",
      "Compliance-blind. Built for HR, not for board conversations.",
    ],
    workRedesign: "Built from YOUR data. Verified by YOUR managers. Auditable. Board-ready.",
  },
  {
    name: "LMS Platforms",
    problems: [
      "Only captures training completion. Not actual capability.",
      "No integration with HRIS, performance data, or manager judgment.",
      "Does not surface internal mobility or succession signals.",
      "No automation modelling - misses the AI-era reskilling question.",
    ],
    workRedesign: "Multi-source ingestion. Verified pipeline. Strategic intelligence. Future-proof.",
  },
  {
    name: "DIY Spreadsheets + Consultants",
    problems: [
      "Expensive. Consultants design. You implement. Then it becomes stale.",
      "Not repeatable. Next time you need an update, you need consultants again.",
      "Not governed. Each round becomes political: 'My team was underrepresented last time'.",
      "No audit trail. When the CHRO presents it to the board, it's just her word.",
    ],
    workRedesign: "Automated ingestion. Governed process. Repeatable. Auditable. Board-defensible.",
  },
];

// Testimonial
export const testimonial = {
  quote: "WorkRedesign has fundamentally changed how we think about internal mobility. We discovered that 28% of our workforce had skills that made them candidates for roles they'd never considered - and we had no way of seeing that before. The biggest surprise: our frontline and operations teams had skills depth we completely underestimated from their job titles alone.",
  attribution: "Chief Talent Officer, FTSE 100 Financial Services",
};
