import CTABanner from "../_components/cta-banner";

const phases = [
  {
    num: 1,
    title: "Discovery",
    duration: "2 weeks",
    description: "We understand your HRIS, LMS, and talent stack. Define success metrics.",
  },
  {
    num: 2,
    title: "Integration",
    duration: "4 weeks",
    description: "Connect your systems. Set up your taxonomy. Pilot with a user group.",
  },
  {
    num: 3,
    title: "Validation",
    duration: "6 weeks",
    description: "Full reconciliation run. Manager adjudication workflow. Performance tuning.",
  },
  {
    num: 4,
    title: "Go-Live & Optimisation",
    duration: "Ongoing",
    description: "Full roll-out to your organisation. Continuous improvement and support.",
  },
];

export default function Engage() {
  return (
    <div className="pt-[68px]">
      <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 text-center">
          <h1 className="display-lg text-slate-900 mb-4">How We Work With You</h1>
          <p className="body-lg text-slate-600 max-w-2xl mx-auto">
            A structured 90-day engagement that takes you from discovery to full deployment.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <h2 className="display-md text-slate-900 text-center mb-12">
            The WorkRedesign Engagement
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {phases.map((phase) => (
              <div key={phase.num} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="text-3xl font-bold text-cyan-600 mb-2">
                  {phase.num}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{phase.title}</h3>
                <div className="text-xs text-slate-500 mb-3 font-medium">
                  {phase.duration}
                </div>
                <p className="text-sm text-slate-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-[1200xl] mx-auto px-6 sm:px-8">
          <h2 className="display-md text-slate-900 text-center mb-12">
            What You Get
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Dedicated implementation team",
              "Custom HRIS/LMS integrations",
              "Manager training and support",
              "Taxonomy definition and setup",
              "Full reconciliation workflow",
              "Board-ready reports and dashboards",
            ].map((item) => (
              <div key={item} className="bg-white rounded-lg p-6 border border-slate-200">
                <div className="text-cyan-600 font-bold mb-2">✓</div>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Let's scope your rollout"
        primaryCta={{
          label: "Book a Discovery Call",
          href: "/contact",
        }}
      />
    </div>
  );
}
