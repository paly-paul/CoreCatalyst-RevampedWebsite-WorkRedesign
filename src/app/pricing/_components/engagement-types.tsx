import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const engagements = [
  {
    badge: "Best first step",
    badgeColor: "bg-green-500",
    name: "Proof of Concept",
    description:
      "A single business unit or function. Defined population, defined scope, demonstrable results in 90 days. Designed to build internal confidence before you scale.",
    priceLabel: "Indicative investment",
    price: "From £45k",
    priceUnit: "fixed",
    priceNote:
      "Typically covers 200-500 employees across one function. Final price confirmed after scoping.",
    includesLabel: "What is included",
    features: [
      "Up to 3 source system integrations",
      "Validated skills map for scoped population",
      "Adjudication workshops with line managers",
      "Redefined job descriptions for all roles in scope",
      "Board-ready summary with automation exposure analysis",
      "Governance model and refresh protocol",
      "HRIS-ready data export",
      "Scale recommendation for Phase 2",
    ],
    cta: "secondary",
    featured: false,
  },
  {
    badge: "Most common",
    badgeColor: "bg-cyan-500",
    name: "Enterprise Foundation",
    description:
      "Organisation-wide skills foundation covering multiple functions, full job architecture, and a governed platform your whole HR team can operate.",
    priceLabel: "Indicative investment",
    price: "From £120k",
    priceUnit: "fixed",
    priceNote:
      "Typically covers 1,500-5,000 employees across 3-6 functions. Phased delivery with milestones.",
    includesLabel: "Everything in POC, plus",
    features: [
      "Up to 8 source system integrations",
      "Full job architecture rationalisation",
      "Enterprise career lattice design",
      "Automation charter covering all functions in scope",
      "HR Ops pipeline configuration and handover",
      "Line manager training programme",
      "Ongoing governance support for 6 months post-delivery",
    ],
    cta: "primary",
    featured: true,
  },
  {
    badge: "Strategic advisory",
    badgeColor: "bg-green-500",
    name: "CHRO Advisory Retainer",
    description:
      "For HR leaders who need an ongoing strategic partner. We work alongside your team as the skills strategy evolves, without running a full engagement.",
    priceLabel: "Monthly retainer",
    price: "From £8k",
    priceUnit: "per month",
    priceNote:
      "Minimum 3-month commitment. Often used post-POC to maintain momentum.",
    includesLabel: "What is included",
    features: [
      "Monthly CHRO strategy session (half day)",
      "Ongoing access to WorkRedesign platform and data",
      "Ad hoc analysis and board preparation support",
      "Skills data refresh and governance review",
      "Priority access for any follow-on scoped work",
    ],
    cta: "secondary",
    featured: false,
  },
];

export default function EngagementTypes() {
  return (
    <section
      data-testid="section-engagements"
      className="py-20 sm:py-32 bg-slate-50"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-14 max-w-[720px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
              Engagement types
            </span>
          </div>
          <h2 className="display-md text-slate-900 mb-4">Three ways to start</h2>
          <p className="body-md text-slate-600">
            Organisations vary in size, urgency, and readiness. We offer three engagement structures to match where you are.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {engagements.map((eng) => (
            <div
              key={eng.name}
              data-testid={`engagement-card-${eng.name.toLowerCase().replace(/\s+/g, "-")}`}
              className={cn(
                "flex flex-col bg-white rounded-[20px] border-[1.5px] p-8 shadow-sm",
                eng.featured
                  ? "border-cyan-500 shadow-[0_4px_32px_rgba(34,184,207,0.14)]"
                  : "border-slate-200"
              )}
            >
              <span
                className={cn(
                  "inline-block self-start text-[11px] font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-full mb-4",
                  eng.badgeColor
                )}
              >
                {eng.badge}
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                {eng.name}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                {eng.description}
              </p>

              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                {eng.priceLabel}
              </div>
              <div className="text-xl sm:text-[26px] font-extrabold text-slate-900 tracking-tight mb-1">
                {eng.price} <span className="text-base font-semibold text-slate-400">{eng.priceUnit}</span>
              </div>
              <p className="text-[13px] text-slate-400 mb-7">{eng.priceNote}</p>

              <hr className="border-slate-200 mb-6" />

              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                {eng.includesLabel}
              </div>
              <ul className="flex flex-col gap-2.5 flex-1 mb-8">
                {eng.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/engage"
                className={cn(
                  "block text-center py-3.5 px-5 rounded-xl font-bold text-[15px] transition-opacity hover:opacity-85",
                  eng.cta === "primary"
                    ? "bg-cyan-500 text-white"
                    : "bg-slate-100 text-slate-900"
                )}
              >
                Book a Discovery Call
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
