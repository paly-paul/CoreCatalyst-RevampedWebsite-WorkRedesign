import { Lock, Shield, Key, FileCheck } from "lucide-react";

const trustClaims = [
  {
    icon: Lock,
    title: "SOC 2 Type II",
    description:
      "Independently audited annually. All controls for security, availability, and confidentiality are verified by a third-party auditor.",
    bg: "bg-indigo-50",
    color: "text-blue-600",
  },
  {
    icon: Shield,
    title: "GDPR & CCPA compliant",
    description:
      "Full data subject rights support, configurable data residency, right-to-erasure workflows, and purpose limitation enforcement built into the platform.",
    bg: "bg-green-50",
    color: "text-green-600",
  },
  {
    icon: Key,
    title: "Field-level encryption",
    description:
      "Skills data encrypted at rest using AES-256 with field-level granularity. Separate encryption keys per tenant, rotated automatically.",
    bg: "bg-violet-50",
    color: "text-violet-600",
  },
  {
    icon: FileCheck,
    title: "Full audit trail",
    description:
      "Every skill change - who set it, which source triggered it, when, and what the previous value was - logged immutably and exportable for compliance review.",
    bg: "bg-cyan-50",
    color: "text-cyan-600",
  },
];

export default function TrustSection() {
  return (
    <section
      data-testid="section-trust-claims"
      className="py-20 sm:py-32 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="text-center max-w-[720px] mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
              Built to enterprise grade
            </span>
          </div>
          <h2 className="display-md text-slate-900 mb-4">
            Your workforce data
            <br />
            is too sensitive to cut corners on.
          </h2>
          <p className="body-md text-slate-600">
            WorkRedesign was designed from day one for enterprise privacy and
            security requirements - not retrofitted after the fact.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustClaims.map((claim) => {
            const Icon = claim.icon;
            return (
              <div
                key={claim.title}
                data-testid={`trust-card-${claim.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div
                  className={`w-11 h-11 rounded-xl ${claim.bg} flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-[22px] h-[22px] ${claim.color}`} strokeWidth={1.8} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2.5">
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
