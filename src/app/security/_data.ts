export const certBadges = [
  { icon: "Lock", bg: "bg-green-100", title: "SOC 2 Type II", sub: "Audited annually" },
  { icon: "flag", bg: "bg-blue-100", title: "GDPR Compliant", sub: "EU data residency available", emoji: "🇪🇺" },
  { icon: "Globe", bg: "bg-violet-100", title: "CCPA Compliant", sub: "California consumer rights" },
  { icon: "ShieldCheck", bg: "bg-orange-50", title: "ISO 27001", sub: "In progress - 2026" },
];

export const sidebarLinks = [
  { id: "data-isolation", label: "Data isolation" },
  { id: "encryption", label: "Encryption" },
  { id: "access-control", label: "Access control" },
  { id: "compliance", label: "Compliance" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "data-ownership", label: "Data ownership" },
  { id: "incident", label: "Incident response" },
  { id: "disclosure", label: "Vulnerability disclosure" },
];

export const docSections = [
  {
    id: "data-isolation",
    label: "Isolation",
    heading: "Every customer is a separate tenant",
    paragraphs: [
      "WorkRedesign uses **hard multi-tenancy**: each customer's data lives in an isolated database schema with a dedicated encryption key. There is no shared data layer between tenants - a query from one customer's environment can never reach another's rows.",
      "Tenant identifiers are enforced at the application layer, the database layer, and the API gateway. A misconfigured query that drops a tenant filter returns zero rows rather than another customer's data.",
    ],
    features: [
      { icon: "GitBranch", title: "Isolated schemas", desc: "Each tenant has a dedicated PostgreSQL schema. Cross-schema queries are blocked by policy at the database role level." },
      { icon: "Lock", title: "Per-tenant encryption keys", desc: "Unique AES-256 keys per tenant, rotated annually. Master keys stored in AWS KMS with hardware-backed HSMs." },
      { icon: "Globe", title: "Network isolation", desc: "Each tenant environment runs in a dedicated VPC subnet. Lateral movement between tenant networks is blocked at the security group level." },
      { icon: "BarChart2", title: "Separate audit logs", desc: "Audit trails are tenant-scoped and write-only for the customer. WorkRedesign support staff cannot modify or delete them." },
    ],
  },
  {
    id: "encryption",
    label: "Encryption",
    heading: "Encrypted everywhere, always",
    paragraphs: [
      "All data is encrypted at rest using **AES-256** and in transit using **TLS 1.3**. We do not support TLS 1.1 or 1.2. Internal service-to-service communication is mutually authenticated with short-lived certificates issued by our internal CA.",
    ],
    dataFlow: [
      { from: "Your HRIS (Workday / SAP / Oracle)", to: "WorkRedesign Connector", badge: "TLS 1.3" },
      { from: "Reconciliation Engine", to: "Tenant Database", badge: "AES-256 at rest" },
      { from: "WorkRedesign API", to: "Your Browser / Integration", badge: "TLS 1.3 + HSTS" },
      { from: "HRIS Write-back", to: "Your HRIS (Workday / SAP / Oracle)", badge: "TLS 1.3 + OAuth 2.0" },
    ],
  },
  {
    id: "access-control",
    label: "Access control",
    heading: "Least privilege, everywhere",
    paragraphs: [
      "Access to WorkRedesign is governed by **role-based access control (RBAC)** with four roles: Viewer, Analyst, HR Admin, and Org Admin. Permissions are additive and explicit - no role inherits access it wasn't granted.",
      "WorkRedesign staff access to customer environments requires a time-limited break-glass authorization, logged to an immutable audit trail, and reviewed weekly. No engineer has standing access to production customer data.",
    ],
    features: [
      { icon: "Users", title: "RBAC with 4 roles", desc: "Viewer, Analyst, HR Admin, Org Admin. Roles are scoped to org, function, or team level." },
      { icon: "Lock", title: "SSO / SAML 2.0", desc: "Integrate with your IdP (Okta, Azure AD, Google Workspace). MFA enforced for all admin roles." },
      { icon: "Calendar", title: "Session management", desc: "Sessions expire after 8 hours of inactivity. All active sessions are visible and revocable from the admin console." },
      { icon: "FileText", title: "API key scoping", desc: "API keys are scoped to specific resources and operations. Keys are never logged in plaintext and can be rotated instantly." },
    ],
  },
  {
    id: "compliance",
    label: "Compliance",
    heading: "Frameworks and certifications",
    paragraphs: [
      "We maintain certifications and controls that enterprise procurement teams require. Our SOC 2 Type II report is available to customers and prospects under NDA.",
    ],
    table: {
      headers: ["Framework", "Status", "Scope"],
      rows: [
        { framework: "SOC 2 Type II", status: "Certified", statusType: "yes", scope: "Security, Availability, Confidentiality trust service criteria" },
        { framework: "GDPR", status: "Compliant", statusType: "yes", scope: "Data processing agreements, DPO appointed, EU data residency available" },
        { framework: "CCPA", status: "Compliant", statusType: "yes", scope: "Consumer rights requests, deletion workflows, data inventory maintained" },
        { framework: "ISO 27001", status: "In progress", statusType: "pending", scope: "Audit scheduled Q2 2026" },
        { framework: "HIPAA", status: "On roadmap", statusType: "pending", scope: "Available as Enterprise add-on for healthcare customers" },
      ],
    },
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    heading: "Built on hardened cloud infrastructure",
    paragraphs: [
      "WorkRedesign runs on **AWS** in a multi-region active-passive configuration. Primary region is eu-west-1 (Ireland) with a failover region in us-east-1. Enterprise customers can request single-region deployment within a specific geography or private cloud / on-premises deployment.",
      "We run infrastructure-as-code with immutable deployments. No direct SSH access to production hosts. All changes go through a reviewed CI/CD pipeline with automated security scanning at every step.",
    ],
    features: [
      { icon: "Globe", title: "Multi-region failover", desc: "Automatic failover with RPO < 1 hour and RTO < 4 hours. 99.9% uptime SLA on Enterprise tier." },
      { icon: "FileText", title: "Immutable deployments", desc: "Every deployment is a new immutable artifact. Rollback takes under 3 minutes. No in-place mutations to running hosts." },
      { icon: "Search", title: "Continuous vulnerability scanning", desc: "Container images scanned on every build. SAST and dependency scanning in CI. Critical CVEs patched within 48 hours." },
      { icon: "Smartphone", title: "Penetration testing", desc: "Annual third-party penetration test by a CREST-certified firm. Results reviewed by our security team and tracked to remediation." },
    ],
  },
  {
    id: "data-ownership",
    label: "Data ownership",
    heading: "Your data is yours - unconditionally",
    paragraphs: [
      "WorkRedesign is a **data processor**, not a data controller. Your organization retains full ownership of all employee skill data. We process it on your behalf, under your instructions, and we return or delete it on request.",
      "**We never use customer data to train our models.** Reconciliation logic improvements are derived from anonymized, aggregated conflict patterns - never from identifiable employee records. This commitment is contractual, not just a policy.",
      "On contract termination, your data is exported in full (JSON or CSV) within 5 business days. After export confirmation, all customer data is deleted within 30 days and deletion is certified in writing.",
    ],
  },
  {
    id: "incident",
    label: "Incident response",
    heading: "When something goes wrong, we move fast",
    paragraphs: [
      "We maintain a documented incident response plan with defined severity levels, escalation paths, and notification SLAs. Our security team is on call 24/7.",
      "In the event of a confirmed data breach affecting your tenant, we will notify your designated security contact within **72 hours** of detection - meeting GDPR Article 33 requirements - and provide a full post-incident report within 14 days. Enterprise customers receive a dedicated incident communication channel.",
    ],
    features: [
      { icon: "ShieldCheck", title: "Severity-based response", desc: "P0 (data breach) - 1hr response, immediate exec escalation. P1 (service impact) - 4hr response. P2/P3 - next business day." },
      { icon: "Bell", title: "Customer notification", desc: "Affected customers notified within 72 hours of a confirmed breach. Status page updated in real time for service incidents." },
    ],
  },
  {
    id: "disclosure",
    label: "Vulnerability disclosure",
    heading: "We welcome responsible disclosure",
    paragraphs: [
      "If you discover a security vulnerability in WorkRedesign, please report it to us before disclosing it publicly. We commit to acknowledging your report within 2 business days and keeping you informed of progress.",
    ],
    disclosure: {
      title: "Contact our security team",
      body2: "We ask that you do not access, modify, or delete customer data during testing; do not perform denial-of-service testing; and give us reasonable time to fix confirmed issues before public disclosure.",
    },
  },
];
