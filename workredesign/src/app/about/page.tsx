import CTABanner from "../_components/cta-banner";

const values = [
  {
    title: "Human-First Design",
    description: "AI assists, humans decide. Every skill in your record has a verified chain of custody.",
  },
  {
    title: "Enterprise Grade",
    description: "SOC 2 Type II certified. GDPR compliant. Role-based access. Audit trails on every change.",
  },
  {
    title: "Skills Governance",
    description: "One taxonomy. One source of truth. Conflict resolution built in, bias monitoring always on.",
  },
  {
    title: "No Rip & Replace",
    description: "Plug into your existing HRIS, LMS, and talent stack. Your data stays in your environment.",
  },
];

export default function About() {
  return (
    <div className="pt-[68px]">
      {/* Hero */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 text-center">
          <h1 className="display-lg text-slate-900 mb-6">
            We exist to make skills visible.
          </h1>
          <p className="body-lg text-slate-600 max-w-2xl mx-auto">
            WorkRedesign was founded on a simple belief: workforce transformation starts with verified skills data. Every organisation's people can do remarkable things - if leadership can see what they are.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <h2 className="display-md text-slate-900 text-center mb-16">
            How We Approach the Problem
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Join us in transforming workforce intelligence"
        primaryCta={{
          label: "See Open Roles",
          href: "/careers",
        }}
        secondaryCta={{
          label: "Book a Demo",
          href: "/engage",
        }}
      />
    </div>
  );
}
