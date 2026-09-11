import CTABanner from "../../_components/cta-banner";

export default function CHROSolutions() {
  return (
    <div className="pt-[68px]">
      <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <h1 className="display-lg text-slate-900 mb-6">
            Board-Ready Workforce Intelligence
          </h1>
          <p className="body-lg text-slate-600 max-w-2xl">
            As CHRO, you're accountable for workforce capability that boards understand and trust. WorkRedesign gives you the auditable skills data to make strategic decisions with confidence.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <h2 className="display-md text-slate-900 text-center mb-16">
            Solve CHRO-Level Challenges
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Board-Ready Skills Visibility",
                description:
                  "Present verified workforce capability data to your board with full provenance and audit trails.",
              },
              {
                title: "Succession Planning Confidence",
                description:
                  "Identify and develop successor talent with validated skills profiles and mobility data.",
              },
              {
                title: "Strategic Workforce Decisions",
                description:
                  "Make M&A, restructure, and transformation decisions on verified data, not assumptions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200"
              >
                <h3 className="font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
