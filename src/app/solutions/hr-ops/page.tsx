import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTABanner from "../../_components/cta-banner";
import TimeDrainSection from "../_components/time-drain-section";
import IntegrationSection from "../_components/integration-section";
import OutcomesBento from "../_components/outcomes-bento";
import ComplianceSection from "../_components/compliance-section";
import SolutionTestimonial from "../_components/solution-testimonial";
import {
  hrOpsHero,
  hrOpsTimeDrain,
  hrOpsIntegrations,
  hrOpsOutcomesBento,
  hrOpsCompliance,
  hrOpsTestimonial,
} from "../_data";

export default function HROpsSolutions() {
  return (
    <div className="pt-[68px]">
      {/* Page Hero */}
      <section
        data-testid="section-hero"
        className="pt-20 sm:pt-32 pb-20 sm:pb-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden"
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span className="text-xs font-semibold text-cyan-600 tracking-wider uppercase">
                  {hrOpsHero.eyebrow}
                </span>
              </div>

              <h1 className="display-xl text-slate-900 mb-5">
                {hrOpsHero.headlineLead}
                <br />
                <span className="text-gradient">{hrOpsHero.headlineGradient}</span>
              </h1>

              <div className="my-5 px-5 py-4 border-l-[3px] border-cyan-500 bg-cyan-500/5 rounded-r-[10px]">
                <p className="text-[17px] italic text-slate-600 leading-relaxed">
                  "{hrOpsHero.quote}"
                </p>
              </div>

              <p className="text-slate-600 text-[17px] leading-relaxed mb-7">
                {hrOpsHero.body}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <Link
                  href="/engage"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[14px] bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-colors min-h-[54px] shadow-lg shadow-cyan-500/25"
                >
                  Book a Discovery Call
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-2 py-4 text-cyan-600 font-semibold hover:gap-3 transition-all min-h-[44px]"
                >
                  See How It Works
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hrOpsHero.image}
                alt={hrOpsHero.imageAlt}
                className="w-full h-[320px] sm:h-[460px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/96 backdrop-blur px-5 py-3.5 flex justify-around gap-4">
                {hrOpsHero.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-gradient font-display font-extrabold text-lg sm:text-2xl leading-none">
                      {stat.num}
                    </div>
                    <div className="text-[11px] text-slate-600 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TimeDrainSection
        eyebrow={hrOpsTimeDrain.eyebrow}
        heading={hrOpsTimeDrain.heading}
        paragraphs={hrOpsTimeDrain.paragraphs}
        bars={hrOpsTimeDrain.bars}
        note={hrOpsTimeDrain.note}
        image={hrOpsTimeDrain.image}
        imageAlt={hrOpsTimeDrain.imageAlt}
      />

      <IntegrationSection
        integrations={hrOpsIntegrations}
        heading="Works with what you already have"
        subheading="WorkRedesign connects to your existing HR technology stack - no rip and replace, no vendor lock-in. Your data stays in your environment."
      />

      <OutcomesBento
        cards={hrOpsOutcomesBento}
        heading="What changes for your team"
        subheading="From manual data wrangling to a governed, automated pipeline - with reporting that is always current and audit-ready."
      />

      <ComplianceSection
        cards={hrOpsCompliance}
        heading="Built for enterprise compliance from day one"
        subheading="Designed for organisations where data governance and regulatory compliance are not optional - they are the starting point."
      />

      <SolutionTestimonial
        quote={hrOpsTestimonial.quote}
        authorName={hrOpsTestimonial.authorName}
        authorTitle={hrOpsTestimonial.authorTitle}
        avatar={hrOpsTestimonial.avatar}
      />

      <CTABanner
        variant="light"
        eyebrow="Start the Conversation"
        headline="Replace the spreadsheets with a pipeline that works."
        subheadline="WorkRedesign gives HR operations teams a governed, automated skills pipeline that connects to what you already have - and produces a record your organisation can actually trust. Start with a discovery call."
        note="We start by understanding your current systems and data situation - no commitment required."
        primaryCta={{
          label: "Book a Discovery Call",
          href: "/engage",
        }}
        secondaryCta={{
          label: "Talk to the Team",
          href: "/engage",
        }}
      />
    </div>
  );
}
