import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTABanner from "../_components/cta-banner";
import StepNavigation from "./_components/step-navigation";
import DownstreamSection from "./_components/downstream-section";
import TrustSection from "./_components/trust-section";

const steps = [
  {
    title: "Connect every system your people data lives in.",
    description:
      "Connect your HRIS, LMS, payroll systems, and performance tools. We handle the data extraction and normalisation.",
  },
  {
    title: "All skills, mapped to one universal taxonomy.",
    description:
      "Our AI extracts skill signals and maps them to a governed global taxonomy - eliminating duplicates and conflicts.",
  },
  {
    title: "AI resolves conflicts - not by guessing.",
    description:
      "Where the AI is uncertain about skill mappings, it flags them for human review. No silent decisions.",
  },
  {
    title: "The 6% that needs a human takes 2 minutes.",
    description:
      "Managers validate profiles through a structured workflow. Bias monitoring ensures fairness at every step.",
  },
  {
    title: "Skills profiles that stay current - automatically.",
    description:
      "Performance data, role changes, and new certifications continuously update the record with full provenance.",
  },
  {
    title: "Ready for any decision your business needs.",
    description:
      "Board briefs, succession plans, org redesigns, automation charters - all built from verified data.",
  },
];

export default function HowItWorks() {
  return (
    <div className="pt-[68px]">
      {/* Hero */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 text-center">
          <h1 className="display-lg text-slate-900 mb-4">
            From Raw HRIS Data to Board-Ready Skills Intelligence
          </h1>
          <p className="body-lg text-slate-600 max-w-2xl mx-auto">
            A structured process that ingests, validates, and continuously updates your workforce skills record.
          </p>
        </div>
      </section>

      <StepNavigation />

      {/* Steps */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="space-y-16 sm:space-y-24">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl font-bold text-cyan-500">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <h2 className="display-md text-slate-900 mb-4">
                    {step.title}
                  </h2>
                  <p className="body-lg text-slate-600">{step.description}</p>
                </div>
                <div className="bg-slate-100 rounded-xl h-64 sm:h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">📊</div>
                    <p className="text-slate-500">Step {idx + 1} Visualization</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DownstreamSection />

      <TrustSection />

      <CTABanner
        headline="See the reconciliation engine run on your own data"
        subheadline="Book a technical deep-dive with our solutions team"
        primaryCta={{
          label: "Book a Demo",
          href: "/engage",
        }}
      />
    </div>
  );
}
