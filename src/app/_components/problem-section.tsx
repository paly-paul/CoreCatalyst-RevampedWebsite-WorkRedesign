import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  {
    value: "73%",
    label:
      "of organisations say their skills data is incomplete or out of date",
  },
  {
    value: "4.2x",
    label:
      "more likely to succeed in AI transformation with accurate skills maps",
  },
  {
    value: "68%",
    label: "of CHRO decisions are based on gut instinct, not verified data",
  },
  {
    value: "12mo",
    label: "average time to rebuild workforce capability data from scratch",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 sm:py-32 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 mb-4">
              <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wider">
                The Challenge
              </span>
            </div>
            <h2 className="display-lg text-slate-900 mb-8">
              Your HRIS has data. Your business needs intelligence.
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-200 rounded-lg p-6"
                >
                  <div className="text-gradient text-4xl sm:text-5xl font-bold mb-2 leading-none">
                    {stat.value}
                  </div>
                  <p className="text-sm text-slate-600 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            <p className="body-lg text-slate-700">
              Most organisations have invested in HRIS systems, learning
              platforms, and talent tools. But when the CHRO stands in front of
              the board and asks "what can our people actually do?" - no system
              can give a confident, auditable answer.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Skills data exists in fragments: some in your HRIS, some in your
              LMS, some in the heads of managers who have never been asked to
              formalise what they know. Reconciling that data takes months of
              manual effort, and even then, nobody trusts the output enough to
              make strategic decisions from it.
            </p>
            <p className="text-slate-600 leading-relaxed">
              And even when organisations invest in cleaning their data - across
              Finance systems, Procurement platforms, logistics tools, and their
              HRIS -, they hit a second wall: the data sits in a dashboard.
              Nobody has translated it into the redefined job descriptions,
              career lattices, and automation charters that the business
              actually needs. Skills intelligence without the downstream outputs
              is still just a data project.
            </p>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-3 transition-all pt-2"
            >
              See how we solve this
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
