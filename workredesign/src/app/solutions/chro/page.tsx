import CTABanner from "../../_components/cta-banner";
import AnxietyCards from "../_components/anxiety-cards";
import OutcomeCards from "../_components/outcome-cards";
import { chroAnxietyCards, chroOutcomeCards } from "../_data";

export default function CHROSolutions() {
  return (
    <div className="pt-[68px]">
      <section
        data-testid="section-hero"
        className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <h1 className="display-lg text-slate-900 mb-6">
            Board-Ready Workforce Intelligence
          </h1>
          <p className="body-lg text-slate-600 max-w-2xl">
            As CHRO, you're accountable for workforce capability that boards understand and trust. WorkRedesign gives you the auditable skills data to make strategic decisions with confidence.
          </p>
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

      <CTABanner
        headline="See your workforce strategy come to life"
        primaryCta={{
          label: "Book a CHRO Briefing",
          href: "/engage",
        }}
        secondaryCta={{
          label: "Learn the Platform",
          href: "/how-it-works",
        }}
      />
    </div>
  );
}
