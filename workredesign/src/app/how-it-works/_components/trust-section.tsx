import { Lock, Shield, Key, FileCheck } from "lucide-react";

const trustClaims = [
  {
    icon: Lock,
    title: "SOC 2 Type II",
    description:
      "Independently audited annually. All controls for security, availability, and confidentiality are verified by a third-party auditor.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Shield,
    title: "GDPR & CCPA Compliant",
    description:
      "Full data subject rights support, configurable data residency, right-to-erasure workflows, and purpose limitation enforcement built into the platform.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Key,
    title: "Field-Level Encryption",
    description:
      "Skills data encrypted at rest using AES-256 with field-level granularity. Separate encryption keys per tenant, rotated automatically.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: FileCheck,
    title: "Full Audit Trail",
    description:
      "Every skill change logged immutably and exportable for compliance review. Who set it, which source triggered it, when, and what the previous value was.",
    color: "bg-cyan-50 text-cyan-600",
  },
];

export default function TrustSection() {
  return (
    <section
      data-testid="section-trust-claims"
      className="py-20 sm:py-32 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
              Enterprise-grade security
            </span>
          </div>
          <h2 className="display-md text-slate-900 mb-4">
            Your workforce data is too sensitive to cut corners on
          </h2>
          <p className="body-lg text-slate-600 max-w-2xl mx-auto">
            WorkRedesign was designed from day one for enterprise privacy and
            security requirements - not retrofitted after the fact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {trustClaims.map((claim) => {
            const Icon = claim.icon;
            return (
              <div
                key={claim.title}
                data-testid={`trust-card-${claim.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:border-cyan-300 transition-all hover:shadow-lg"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${claim.color} flex items-center justify-center mb-4`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-3">
                  {claim.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {claim.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
