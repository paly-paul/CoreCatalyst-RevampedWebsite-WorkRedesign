import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import CTABanner from "../../_components/cta-banner";
import ManagerProblemsSection from "../_components/manager-problems-section";
import ManagerFlowSection from "../_components/manager-flow-section";
import AdjudicationWidget from "../_components/adjudication-widget";
import ManagerOutcomesSection from "../_components/manager-outcomes-section";
import SolutionTestimonial from "../_components/solution-testimonial";
import {
  managerHero,
  managerProblems,
  managerFlowSteps,
  managerWidget,
  managerOutcomes,
  managerTestimonial,
} from "../_data";

export default function ManagersSolutions() {
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
                  {managerHero.eyebrow}
                </span>
              </div>

              <h1 className="display-xl text-slate-900 mb-5">
                {managerHero.headlineLead}{" "}
                <span className="text-gradient">{managerHero.headlineGradient}</span>
              </h1>

              <div className="my-5 px-5 py-4 border-l-[3px] border-cyan-500 bg-cyan-500/5 rounded-r-[10px]">
                <p className="text-[17px] italic text-slate-600 leading-relaxed">
                  "{managerHero.quote}"
                </p>
              </div>

              <p className="text-slate-600 text-[17px] leading-relaxed mb-7">
                {managerHero.body}
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
                src={managerHero.image}
                alt={managerHero.imageAlt}
                className="w-full h-[320px] sm:h-[460px] object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 bg-white/96 backdrop-blur rounded-xl p-4 shadow-md flex gap-3 items-center">
                <div className="w-10 h-10 rounded-[10px] bg-cyan-500 flex items-center justify-center text-white flex-shrink-0">
                  <Users className="w-[18px] h-[18px]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {managerHero.badge.title}
                  </div>
                  <div className="text-xs text-slate-600">
                    {managerHero.badge.subtitle}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ManagerProblemsSection
        items={managerProblems}
        heading="What managers tell us gets in the way"
        subheading="Before and after - what changes when skills intelligence is grounded in manager knowledge, not just system data."
      />

      <ManagerFlowSection
        steps={managerFlowSteps}
        heading="Designed to fit into how you already manage"
        subheading="The adjudication process is built around manager workflows - not bolted on top of them. It takes minutes per employee, not hours."
      />

      <AdjudicationWidget
        employee={managerWidget.employee}
        skills={managerWidget.skills}
        footerLead={managerWidget.footerLead}
        footerNote={managerWidget.footerNote}
        tagsLabel={managerWidget.tagsLabel}
        tags={managerWidget.tags}
        heading="What the manager workflow looks like"
        subheading="A preview of the adjudication interface - the structured workflow where managers validate and enrich AI-generated skill profiles for their team."
      />

      <ManagerOutcomesSection
        outcomes={managerOutcomes}
        heading="What changes when your team's skills are on the record"
      />

      <SolutionTestimonial
        quote={managerTestimonial.quote}
        authorName={managerTestimonial.authorName}
        authorTitle={managerTestimonial.authorTitle}
        avatar={managerTestimonial.avatar}
      />

      <CTABanner
        variant="light"
        eyebrow="Start the Conversation"
        headline="Make your team's skills impossible to ignore."
        subheadline="WorkRedesign gives managers the structured, evidence-backed way to put what they know on the record. Start with a discovery call - we will show you what the adjudication process looks like for your organisation."
        note="No commitment. No sales pitch. Just an honest conversation."
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
