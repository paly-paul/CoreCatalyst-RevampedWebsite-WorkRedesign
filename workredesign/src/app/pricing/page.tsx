import CTABanner from "../_components/cta-banner";
import { ModelExplainer, AlwaysIncluded, FAQ } from "./_components/pricing-sections";

const plans = [
  {
    name: "Starter",
    price: "Custom",
    description: "For departments and divisions",
    features: [
      "Up to 500 people",
      "HRIS + LMS integration",
      "AI mapping + manager validation",
      "Role reports",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "Custom",
    description: "For enterprise organisations",
    features: [
      "Up to 50,000 people",
      "All system integrations",
      "Full AI reconciliation engine",
      "All reports + exports",
      "Dedicated support",
      "Custom integrations",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For global, complex organisations",
    features: [
      "Unlimited people",
      "Custom taxonomy mapping",
      "Advanced governance workflows",
      "White-label reports",
      "Dedicated CSM + technical team",
      "SLA guarantees",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="pt-[68px]">
      <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 text-center">
          <h1 className="display-lg text-slate-900 mb-4">
            Straightforward Pricing. Serious Enterprise Value.
          </h1>
          <p className="body-lg text-slate-600 max-w-2xl mx-auto">
            Every plan includes the full WorkRedesign platform. Pricing is based on the size of your workforce and integration complexity.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl border-2 p-8 ${
                  plan.featured
                    ? "border-cyan-500 bg-gradient-to-br from-cyan-50 to-transparent"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{plan.description}</p>
                <div className="text-3xl font-bold text-slate-900 mb-6">
                  {plan.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm">
                      <span className="text-cyan-600 font-bold">✓</span>
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ModelExplainer />

      <AlwaysIncluded />

      <FAQ />

      <CTABanner
        headline="Not sure which plan fits? Let's talk."
        primaryCta={{
          label: "Talk to Sales",
          href: "/engage",
        }}
      />
    </div>
  );
}
