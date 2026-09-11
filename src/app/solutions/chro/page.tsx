import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTABanner from "../../_components/cta-banner";
import AnxietyCards from "../_components/anxiety-cards";
import OutcomeCards from "../_components/outcome-cards";
import DeliverablesSection from "../_components/deliverables-section";
import ProcessTimeline from "../_components/process-timeline";
import SolutionTestimonial from "../_components/solution-testimonial";
import FaqAccordion from "../_components/faq-accordion";
import {
  chroAnxietyCards,
  chroOutcomeCards,
  chroDeliverables,
  chroProcessSteps,
  chroTestimonial,
  chroFaqs,
} from "../_data";

export default function CHROSolutions() {
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
                  For CHROs and People Leaders
                </span>
              </div>

              <h1 className="display-xl text-slate-900 mb-5">
                The workforce intelligence your board has been{" "}
                <span className="text-gradient">waiting for.</span>
              </h1>

              <div className="my-5 px-5 py-4 border-l-[3px] border-violet-600 bg-violet-600/5 rounded-r-[10px]">
                <p className="text-[17px] italic text-slate-600 leading-relaxed">
                  "We know AI is changing what our workforce needs to do. But I cannot tell you, with confidence, what our people can actually do right now."
                </p>
                <p className="mt-2.5 text-[15px] not-italic font-semibold text-violet-600">
                  We are not here to tell you who to let go. We are showing you what your people can do next.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-4 items-start sm:items-center">
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

              <p className="text-[13px] text-slate-500">
                <Link href="/engage" className="text-blue-600 font-medium hover:text-blue-700">
                  Talk to the Team
                </Link>{" "}
                - we start with an honest conversation about your situation.
              </p>
            </div>

            {/* Right visual */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop&crop=faces"
                alt="Senior HR leader presenting workforce strategy to executive team"
                className="w-full h-[320px] sm:h-[460px] object-cover"
              />
              <div className="absolute top-5 right-5 bg-white/96 backdrop-blur rounded-xl px-[18px] py-3.5 shadow-md text-center min-w-[120px]">
                <div className="text-gradient font-display font-extrabold text-2xl sm:text-[32px] leading-none mb-1">
                  90
                </div>
                <div className="text-xs text-slate-600 leading-snug">
                  days to board-ready intelligence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnxietyCards
        cards={chroAnxietyCards}
        title="The questions CHROs are asking right now"
        subtitle="Every CHRO we speak to is grappling with the same set of challenges. WorkRedesign is built to answer them - with evidence, not assumption."
      />

      <OutcomeCards
        cards={chroOutcomeCards}
        heading="Intelligence you can act on. At every level."
        subheading="WorkRedesign does not produce a data export. It produces the strategic outputs your organisation needs to make decisions about its workforce - validated, governed, and ready to present."
      />

      <DeliverablesSection
        deliverables={chroDeliverables}
        heading="What you walk away with after 90 days"
        subheading="The WorkRedesign 90-day proof of concept is scoped to one business unit and delivers tangible outputs your organisation can use immediately."
      />

      <ProcessTimeline
        steps={chroProcessSteps}
        heading="From discovery to board-ready in 90 days"
        subheading="A structured engagement with clear milestones and no surprises. You see what we are building at every step."
      />

      <SolutionTestimonial
        quote={chroTestimonial.quote}
        authorName={chroTestimonial.authorName}
        authorTitle={chroTestimonial.authorTitle}
        avatar={chroTestimonial.avatar}
      />

      <FaqAccordion faqs={chroFaqs} heading="What CHROs ask before they start" />

      <CTABanner
        variant="light"
        eyebrow="90-Day Proof of Concept"
        headline="Start with a conversation, not a contract."
        subheadline="We work with CHROs who are serious about building a workforce that can navigate the AI era. That starts with an honest conversation about where you are, what you need, and whether a 90-day proof of concept is the right starting point."
        note="No commitment required. No sales deck. Just a conversation."
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
