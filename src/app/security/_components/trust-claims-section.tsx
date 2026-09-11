import { Check, Clock } from "lucide-react";

const trustClaims = [
  {
    framework: "SOC 2 Type II",
    status: "Certified",
    icon: "✓",
    statusBg: "bg-green-100",
    statusText: "text-green-700",
    scope: "Security, Availability, Confidentiality trust service criteria",
    details:
      "Audited annually by a CREST-certified firm. Report available under NDA to customers and prospects.",
  },
  {
    framework: "GDPR",
    status: "Compliant",
    icon: "✓",
    statusBg: "bg-green-100",
    statusText: "text-green-700",
    scope: "Data processing agreements, DPO appointed, EU data residency available",
    details:
      "Full data subject rights support, configurable residency, and right-to-erasure workflows built into the platform.",
  },
  {
    framework: "CCPA",
    status: "Compliant",
    icon: "✓",
    statusBg: "bg-green-100",
    statusText: "text-green-700",
    scope: "Consumer rights requests, deletion workflows, data inventory maintained",
    details:
      "California Consumer Privacy Act compliance with full consumer rights request workflows.",
  },
  {
    framework: "ISO 27001",
    status: "In Progress",
    icon: "→",
    statusBg: "bg-blue-100",
    statusText: "text-blue-700",
    scope: "Audit scheduled Q2 2026",
    details:
      "International information security management standard certification planned for Q2 2026.",
  },
];

export default function TrustClaimsSection() {
  return (
    <section
      data-testid="section-trust-claims"
      className="py-20 sm:py-32 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
              Compliance & Trust
            </span>
          </div>
          <h2 className="display-md text-slate-900 mb-4">
            Enterprise security certifications and compliance
          </h2>
          <p className="body-lg text-slate-600 max-w-2xl mx-auto">
            We maintain the certifications and controls that enterprise
            procurement teams require. Our SOC 2 Type II report is available to
            customers and prospects under NDA.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {trustClaims.map((claim) => (
            <div
              key={claim.framework}
              data-testid={`trust-claim-${claim.framework.toLowerCase().replace(/\s+/g, "-")}`}
              className="border border-slate-200 rounded-lg p-6 bg-slate-50 hover:bg-white transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-slate-900 text-lg">
                      {claim.framework}
                    </h3>
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full ${claim.statusBg} ${claim.statusText}`}
                    >
                      {claim.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{claim.scope}</p>
                  <p className="text-sm text-slate-600">{claim.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
          <div className="flex gap-4">
            <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                HIPAA Coming Soon
              </h3>
              <p className="text-slate-600 text-sm">
                HIPAA compliance is on our roadmap and available as an Enterprise
                add-on for healthcare customers. Contact our sales team for
                details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
