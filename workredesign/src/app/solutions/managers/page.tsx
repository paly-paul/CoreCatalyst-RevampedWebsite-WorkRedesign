import CTABanner from "../../_components/cta-banner";

export default function ManagersSolutions() {
  return (
    <div className="pt-[68px]">
      <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <h1 className="display-lg text-slate-900 mb-6">
            Make Your Team's Skills Work For You
          </h1>
          <p className="body-lg text-slate-600 max-w-2xl">
            Stop guessing about your team's capabilities. See exactly what skills your people have, identify gaps, and build the right team for every project.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <h2 className="display-md text-slate-900 text-center mb-16">
            Manager-Level Superpowers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Team Skills Visibility",
                description:
                  "See exactly what your team can do. No more surprises when projects need specific skills.",
              },
              {
                title: "Development Planning",
                description:
                  "Identify skill gaps and create targeted development plans. Track progress over time.",
              },
              {
                title: "Smart Team Formation",
                description:
                  "Build the right team for every project. Match skills to requirements in seconds.",
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
