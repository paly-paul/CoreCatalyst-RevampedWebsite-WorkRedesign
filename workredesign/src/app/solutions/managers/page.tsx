import CTABanner from "../../_components/cta-banner";
import ProblemCards from "../_components/problem-cards";
import OutcomeCards from "../_components/outcome-cards";
import { managerProblems, managerBenefits } from "../_data";

export default function ManagersSolutions() {
  return (
    <div className="pt-[68px]">
      <section
        data-testid="section-hero"
        className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <h1 className="display-lg text-slate-900 mb-6">
            Make Your Team's Skills Work For You
          </h1>
          <p className="body-lg text-slate-600 max-w-2xl">
            Stop guessing about your team's capabilities. See exactly what skills your people have, identify gaps, and build the right team for every project.
          </p>
        </div>
      </section>

      <ProblemCards
        cards={managerProblems}
        eyebrow="The Manager's Challenge"
        title="What You're Dealing With"
        subtitle="Most managers work blind. The HRIS shows titles, not capabilities. Your people have skills that job descriptions don't capture."
      />

      <OutcomeCards
        cards={managerBenefits}
        eyebrow="The Solution"
        heading="Manager-Level Superpowers"
        subheading="WorkRedesign gives you clarity. About your team, right now. About what they can do. About where they can go."
      />

      <CTABanner
        headline="Know your team's skills before the project asks you to"
        primaryCta={{
          label: "See Your Team's Skills",
          href: "/engage",
        }}
        secondaryCta={{
          label: "View Plans",
          href: "/pricing",
        }}
      />
    </div>
  );
}
