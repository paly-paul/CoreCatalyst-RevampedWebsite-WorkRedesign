import CTABanner from "../../_components/cta-banner";
import ProblemCards from "../_components/problem-cards";
import OutcomeCards from "../_components/outcome-cards";
import { hrOpsTimeDrainCards, hrOpsOutcomeCards } from "../_data";

export default function HROpsSolutions() {
  return (
    <div className="pt-[68px]">
      <section
        data-testid="section-hero"
        className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <h1 className="display-lg text-slate-900 mb-6">
            One Governed Pipeline. Not Six Spreadsheets.
          </h1>
          <p className="body-lg text-slate-600 max-w-2xl">
            Stop reconciling data across HRIS, LMS, and performance systems. WorkRedesign gives you a single, unified source of truth for workforce skills - with all the governance you need.
          </p>
        </div>
      </section>

      <ProblemCards
        cards={hrOpsTimeDrainCards}
        eyebrow="The Time Drain"
        title="Where Your Time Goes (And Shouldn't)"
        subtitle="Every HR Ops leader we work with has this struggle: skills data is scattered, reconciliation is manual, and governance is political."
      />

      <OutcomeCards
        cards={hrOpsOutcomeCards}
        eyebrow="The Solution"
        heading="Replace the Spreadsheets"
        subheading="One automated pipeline. One source of truth. One place to track who can actually do what."
      />

      <CTABanner
        headline="Replace the spreadsheets. Keep the insight."
        primaryCta={{
          label: "Start a Pilot",
          href: "/engage",
        }}
        secondaryCta={{
          label: "See Integrations",
          href: "/how-it-works",
        }}
      />
    </div>
  );
}
