import CTABanner from "../../_components/cta-banner";

export default function HROpsSolutions() {
  return (
    <div className="pt-[68px]">
      <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <h1 className="display-lg text-slate-900 mb-6">
            One Governed Pipeline. Not Six Spreadsheets.
          </h1>
          <p className="body-lg text-slate-600 max-w-2xl">
            Stop reconciling data across HRIS, LMS, and performance systems. WorkRedesign gives you a single, unified source of truth for workforce skills - with all the governance you need.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <h2 className="display-md text-slate-900 text-center mb-16">
            Replace the Spreadsheets
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Automated Data Ingestion",
                description:
                  "Connect once to all your systems. No more manual CSV imports and version conflicts.",
              },
              {
                title: "Live Deduplication",
                description:
                  "AI automatically detects and reconciles duplicate skills across HRIS, LMS, and performance data.",
              },
              {
                title: "Single Governed Taxonomy",
                description:
                  "One controlled vocabulary. Conflict resolution built in. Manager validation at scale.",
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
